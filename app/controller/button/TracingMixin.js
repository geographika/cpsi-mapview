/**
 * A mixin to add tracing functionality to a drawing tool.
 *
 * The basic functionality is taken from the official OpenLayers example:
 * https://openlayers.org/en/latest/examples/tracing.html
 *
 * @class CpsiMapview.controller.button.TracingMixin
 */
Ext.define('CpsiMapview.controller.button.TracingMixin', {
    extend: 'Ext.Mixin',

    requires: [
        'BasiGX.util.Map',
        'CpsiMapview.util.Tracing'
    ],

    /**
     * The style of the preview line during tracing.
     */
    previewStyle: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(255, 0, 0, 1)',
            width: 10,
        })
    }),

    /**
     * Enhances drawing functionality by adding tracing to it.
     *
     * Needs to have access to the variable 'editingIsActive' of the parent component.
     *
     * @param {String[]} tracingLayerKeys The keys of the layers to trace
     */
    initTracing: function (tracingLayerKeys) {
        var me = this;

        if (me.getView()) {
            me.getView().fireEvent('tracingstart');
        }

        // get tracing layers
        me.tracingLayers = [];
        Ext.each(tracingLayerKeys, function (key) {
            var foundLayers = BasiGX.util.Layer.getLayersBy('layerKey', key);
            if (foundLayers.length > 0) {
                me.tracingLayers.push(foundLayers[0]);
            }
        });

        // the options for the eachFeature functions
        me.forEachFeatureOptions = {
            hitTolerance: 10,
            layerFilter: function (layer) {
                return Ext.Array.contains(me.tracingLayers, layer);
            },
        };

        me.tracingFeature = new ol.Feature({
            geometry: new ol.geom.LineString([]),
        });
        me.tracingFeatureArray = [];
        me.tracingStartPoint = null;
        me.tracingEndPoint = null;


        // For debugging the line where the user can trace to can be displayed.
        var debug = false;
        if (debug) {
            var tracingVector = new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: [me.tracingFeature],
                }),
                style: new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: [255, 255, 0, 0.5],
                        width: 25
                    })
                })
            });
            me.map.addLayer(tracingVector);
        }

        // the tracing util
        me.util = CpsiMapview.util.Tracing;

        // the visible tracing line while editing
        me.previewLine = new ol.Feature({
            geometry: new ol.geom.LineString([]),
        });

        me.previewVector = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [me.previewLine],
            }),
            style: me.previewStyle
        });
        me.map.addLayer(me.previewVector);

        // bind scope to listener functions
        me.onTracingPointerMove = me.onTracingPointerMove.bind(me);
        me.onTracingMapClick = me.onTracingMapClick.bind(me);

        me.map.on('click', me.onTracingMapClick);
        me.map.on('pointermove', me.onTracingPointerMove);
    },

    /**
     * Remove listeners and layers
     */
    cleanupTracing: function () {
        var me = this;
        me.map.removeLayer(me.previewVector);
        me.map.un('click', me.onTracingMapClick);
        me.map.un('pointermove', me.onTracingPointerMove);
    },

    /**
     * Listen to click to start and end the tracing.
     *
     * @param {Event} event The OpenLayers click event.
     */
    onTracingMapClick: function (event) {
        var me = this;

        if (!me.editingIsActive) {
            return;
        }

        var hit = false;
        me.map.forEachFeatureAtPixel(
            event.pixel,
            function (feature) {
                if (me.util.lineStringNotEmpty(me.tracingFeature) && !me.tracingFeatureArray.includes(feature)) {
                    return;
                }

                hit = true;
                var coord = me.map.getCoordinateFromPixel(event.pixel);

                // second click on the tracing feature: append the ring coordinates
                if (me.util.lineStringNotEmpty(me.tracingFeature) && me.tracingFeatureArray.includes(feature)) {
                    me.tracingEndPoint = me.tracingFeature.getGeometry().getClosestPoint(coord);
                    var appendCoords = me.util.getPartialSegmentCoords(
                        me.tracingFeature,
                        me.tracingStartPoint,
                        me.tracingEndPoint
                    );

                    // send coordinates to parent component
                    if (me.getView()) {
                        me.getView().fireEvent('tracingend', appendCoords);
                    }

                    me.tracingFeature.getGeometry().setCoordinates([]);
                    me.tracingFeatureArray = [];
                    me.previewLine.getGeometry().setCoordinates([]);
                }

                var geom = feature.clone().getGeometry();
                // start tracing on the feature ring
                var coords = geom.getCoordinates();

                me.tracingFeature.getGeometry().setCoordinates(
                    coords
                );
                me.tracingFeatureArray.push(feature);
                me.tracingStartPoint = me.tracingFeature.getGeometry().getClosestPoint(coord);
            },
            me.forEachFeatureOptions
        );

        if (!hit) {
            // clear current tracing feature & preview
            me.previewLine.getGeometry().setCoordinates([]);
            me.tracingFeature.getGeometry().setCoordinates([]);
            me.tracingFeatureArray = [];
        }
    },

    /**
     * Create the tracing geometry when pointer is moved.
     *
     * @param {Event} event The OpenLayers move event
     */
    onTracingPointerMove: function (event) {
        var me = this;

        if (me.util.lineStringNotEmpty(me.tracingFeature) && me.editingIsActive) {
            var coordOnFoundFeature = null;
            me.map.forEachFeatureAtPixel(
                event.pixel,
                function (foundFeature) {

                    // find coordinate on found feature
                    if (me.tracingFeatureArray.includes(foundFeature)) {
                        coordOnFoundFeature = me.map.getCoordinateFromPixel(event.pixel);
                    }

                    // update tracing feature and array
                    if (me.tracingFeatureArray.includes(foundFeature)) {

                        // check if found feature is last of array
                        var i = me.tracingFeatureArray.indexOf(foundFeature);
                        var notLastFeature = (i !== (me.tracingFeatureArray.length - 1));

                        if (notLastFeature) {

                            // remove all features after hovered feature
                            me.tracingFeatureArray = me.tracingFeatureArray.slice(0, i + 1);
                            // update coordinates of tracingFeature
                            var updatedCoords = [];
                            Ext.each(me.tracingFeatureArray, function (f) {
                                var geom = f.getGeometry();
                                var coords = geom.getCoordinates();

                                if (updatedCoords.length === 0) {
                                    updatedCoords = coords;
                                } else {
                                    updatedCoords = me.util.concatLineCoords(updatedCoords, coords);
                                }
                            });

                            me.tracingFeature.getGeometry().setCoordinates(updatedCoords);
                        }
                    } else {
                        // new feature found that needs to be added to tracingfeature

                        var foundGeom = foundFeature.getGeometry();
                        var tracingGeom = me.tracingFeature.getGeometry();
                        var tracingCoords = tracingGeom.getCoordinates();

                        var touchingStartEnd = me.util.linesTouchAtStartEndPoint(foundGeom, tracingGeom);

                        var tracingInteriorTouchesFoundFeatureStartEnd = me.util.lineInteriorTouchesLineStartEnd(tracingGeom, foundGeom);

                        var tracingStartEndTouchesFoundInterior = me.util.lineStartEndTouchesLineInterior(tracingGeom, foundGeom);

                        if (touchingStartEnd) {
                            var coords = foundGeom.getCoordinates();

                            var resultCoords = me.util.concatLineCoords(
                                tracingCoords,
                                coords
                            );

                            if (resultCoords) {
                                me.tracingFeature.getGeometry().setCoordinates(resultCoords);
                                me.tracingFeatureArray.push(foundFeature);
                            }
                        } else if (tracingInteriorTouchesFoundFeatureStartEnd) {
                            // TODO: must be implemented

                        } else if (tracingStartEndTouchesFoundInterior) {
                            // TODO: must be implemented
                        }
                    }
                },
                me.forEachFeatureOptions
            );

            var previewCoords = [];
            if (coordOnFoundFeature) {
                me.tracingEndPoint = me.tracingFeature.getGeometry().getClosestPoint(coordOnFoundFeature);
                previewCoords = me.util.getPartialSegmentCoords(
                    me.tracingFeature,
                    me.tracingStartPoint,
                    me.tracingEndPoint
                );
            }
            me.previewLine.getGeometry().setCoordinates(previewCoords);
        }
    }
}

);
