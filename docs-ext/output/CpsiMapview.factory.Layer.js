Ext.data.JsonP.CpsiMapview_factory_Layer({"tagname":"class","name":"CpsiMapview.factory.Layer","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true,"singleton":true},"files":[{"filename":"Layer.js","href":"Layer2.html#CpsiMapview-factory-Layer"}],"aliases":{},"alternateClassNames":["LayerFactory"],"extends":"Ext.Base","mixins":[],"requires":["BasiGX.util.Layer","BasiGX.util.Map","BasiGX.util.Namespace","BasiGX.util.WFS","CpsiMapview.util.Legend","CpsiMapview.util.Style","CpsiMapview.util.SwitchLayer","CpsiMapview.util.WmsFilter","CpsiMapview.view.layer.ToolTip","CpsiMapview.view.main.Map"],"uses":[],"members":[{"name":"additionalFilters","tagname":"property","owner":"CpsiMapview.factory.Layer","id":"property-additionalFilters","meta":{}},{"name":"createArcGisCache","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createArcGisCache","meta":{"private":true}},{"name":"createArcGisRest","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createArcGisRest","meta":{}},{"name":"createBing","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createBing","meta":{}},{"name":"createCustomFilters","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createCustomFilters","meta":{}},{"name":"createEmptyLayer","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createEmptyLayer","meta":{"private":true}},{"name":"createGoogle","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createGoogle","meta":{"private":true}},{"name":"createLayer","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createLayer","meta":{}},{"name":"createNasa","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createNasa","meta":{}},{"name":"createOs","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createOs","meta":{"private":true}},{"name":"createOsm","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createOsm","meta":{}},{"name":"createServerArray","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createServerArray","meta":{"private":true}},{"name":"createSwitchLayer","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createSwitchLayer","meta":{}},{"name":"createVectorTilesLayer","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createVectorTilesLayer","meta":{}},{"name":"createVectorTilesWmsLayer","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createVectorTilesWmsLayer","meta":{}},{"name":"createWfs","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createWfs","meta":{}},{"name":"createWms","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createWms","meta":{}},{"name":"createXyz","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-createXyz","meta":{}},{"name":"ensureOnlyOneBaseLayerVisible","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-ensureOnlyOneBaseLayerVisible","meta":{}},{"name":"loadSld","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-loadSld","meta":{}},{"name":"ol2PropsToOlLayerProps","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-ol2PropsToOlLayerProps","meta":{}},{"name":"ol2PropsToOlSourceProps","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-ol2PropsToOlSourceProps","meta":{}},{"name":"registerLayerTooltip","tagname":"method","owner":"CpsiMapview.factory.Layer","id":"method-registerLayerTooltip","meta":{}}],"code_type":"ext_define","singleton":true,"id":"class-CpsiMapview.factory.Layer","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>LayerFactory</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>CpsiMapview.factory.Layer</strong></div></div><h4>Requires</h4><div class='dependency'>BasiGX.util.Layer</div><div class='dependency'>BasiGX.util.Map</div><div class='dependency'>BasiGX.util.Namespace</div><div class='dependency'>BasiGX.util.WFS</div><div class='dependency'><a href='#!/api/CpsiMapview.util.Legend' rel='CpsiMapview.util.Legend' class='docClass'>CpsiMapview.util.Legend</a></div><div class='dependency'><a href='#!/api/CpsiMapview.util.Style' rel='CpsiMapview.util.Style' class='docClass'>CpsiMapview.util.Style</a></div><div class='dependency'><a href='#!/api/CpsiMapview.util.SwitchLayer' rel='CpsiMapview.util.SwitchLayer' class='docClass'>CpsiMapview.util.SwitchLayer</a></div><div class='dependency'><a href='#!/api/CpsiMapview.util.WmsFilter' rel='CpsiMapview.util.WmsFilter' class='docClass'>CpsiMapview.util.WmsFilter</a></div><div class='dependency'><a href='#!/api/CpsiMapview.view.layer.ToolTip' rel='CpsiMapview.view.layer.ToolTip' class='docClass'>CpsiMapview.view.layer.ToolTip</a></div><div class='dependency'><a href='#!/api/CpsiMapview.view.main.Map' rel='CpsiMapview.view.main.Map' class='docClass'>CpsiMapview.view.main.Map</a></div><h4>Files</h4><div class='dependency'><a href='source/Layer2.html#CpsiMapview-factory-Layer' target='_blank'>Layer.js</a></div></pre><div class='doc-contents'><p>Factory util class to generate OpenLayers layer instances according to a\nJSON configuration.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-additionalFilters' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-property-additionalFilters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-property-additionalFilters' class='name expandable'>additionalFilters</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Apply additional filters. ...</div><div class='long'><p>Apply additional filters.\nTo get access to them here an instance of <code>Ext.grid.filter.filters</code>\nmust be set on layer source.\nFor example, this can be possibly achieved via <code>filterchange</code>\nlistener of FeatureGrid component if used with GeoExt feature grid\ncomponent:</p>\n\n<p>  'filterchange': function (rec, filters) {\n      var wfsLayerSource = someWfsLayer.getSource();\n      wfsLayerSource.getSource().set('additionalFilters', filters);\n      wfsLayerSource.clear();\n      wfsLayerSource.refresh();\n   }</p>\n\n<p>See also GeoExt3 example for filter-grid:\nhttps://rawgit.com/geoext/geoext3/master/examples/features/grid-filter.html</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createArcGisCache' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createArcGisCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createArcGisCache' class='name expandable'>createArcGisCache</a>( <span class='pre'>layerConf</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-createArcGisRest' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createArcGisRest' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createArcGisRest' class='name expandable'>createArcGisRest</a>( <span class='pre'>layerConf</span> ) : ol.layer.Tile<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates an ArcGIS REST layer ...</div><div class='long'><p>Creates an ArcGIS REST layer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'><p>The configuration object for this layer</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Tile</span><div class='sub-desc'><p>ArcGIS REST layer</p>\n</div></li></ul></div></div></div><div id='method-createBing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createBing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createBing' class='name expandable'>createBing</a>( <span class='pre'>layerConf, type</span> ) : ol.layer.Tile<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a Bing layer ...</div><div class='long'><p>Creates a Bing layer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'><p>The configuration object for this layer</p>\n</div></li><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The Bing layer type, e.g. 'Aerial'</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Tile</span><div class='sub-desc'><p>Bing layer</p>\n</div></li></ul></div></div></div><div id='method-createCustomFilters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createCustomFilters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createCustomFilters' class='name expandable'>createCustomFilters</a>( <span class='pre'>Vector</span> ) : Ext.util.Filter[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates custom filters for a vector layer ...</div><div class='long'><p>Creates custom filters for a vector layer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Vector</span> : ol.source.Vector<div class='sub-desc'><p>layer source</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.util.Filter[]</span><div class='sub-desc'><p>filters array with custom filters</p>\n</div></li></ul></div></div></div><div id='method-createEmptyLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createEmptyLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createEmptyLayer' class='name expandable'>createEmptyLayer</a>( <span class='pre'>layerConf</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-createGoogle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createGoogle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createGoogle' class='name expandable'>createGoogle</a>( <span class='pre'>layerConf, layerType</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>layerType</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-createLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createLayer' class='name expandable'>createLayer</a>( <span class='pre'>layerConf</span> ) : ol.layer.Base<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates an OpenLayer layer object from a JSON config ...</div><div class='long'><p>Creates an OpenLayer layer object from a JSON config</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'><p>The configuration object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Base</span><div class='sub-desc'><p>OL layer object</p>\n</div></li></ul></div></div></div><div id='method-createNasa' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createNasa' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createNasa' class='name expandable'>createNasa</a>( <span class='pre'>layerConf</span> ) : ol.layer.Tile<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a World Wind (BlueMarble-200412) layer ...</div><div class='long'><p>Creates a World Wind (BlueMarble-200412) layer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'><p>The configuration object for this layer</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Tile</span><div class='sub-desc'><p>World Wind (BlueMarble-200412) layer</p>\n</div></li></ul></div></div></div><div id='method-createOs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createOs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createOs' class='name expandable'>createOs</a>( <span class='pre'>layerConf</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-createOsm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createOsm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createOsm' class='name expandable'>createOsm</a>( <span class='pre'>layerConf</span> ) : ol.layer.Tile<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates an OSM layer ...</div><div class='long'><p>Creates an OSM layer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'><p>The configuration object for this layer</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Tile</span><div class='sub-desc'><p>OSM layer</p>\n</div></li></ul></div></div></div><div id='method-createServerArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createServerArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createServerArray' class='name expandable'>createServerArray</a>( <span class='pre'>path</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-createSwitchLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createSwitchLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createSwitchLayer' class='name expandable'>createSwitchLayer</a>( <span class='pre'>layerConf</span> ) : ol.layer.Base<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a layer which renders a WMS for small scales and a WFS\nfor large scales as sub layer. ...</div><div class='long'><p>Creates a layer which renders a WMS for small scales and a WFS\nfor large scales as sub layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'><p>The configuration object for this layer</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Base</span><div class='sub-desc'><p>The created sub layer</p>\n</div></li></ul></div></div></div><div id='method-createVectorTilesLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createVectorTilesLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createVectorTilesLayer' class='name expandable'>createVectorTilesLayer</a>( <span class='pre'>layerConf</span> ) : ol.layer.VectorTile<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a XYZ based Vector Tile layer ...</div><div class='long'><p>Creates a XYZ based Vector Tile layer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'><p>The configuration object for this layer</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.VectorTile</span><div class='sub-desc'><p>Vector Tile layer</p>\n</div></li></ul></div></div></div><div id='method-createVectorTilesWmsLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createVectorTilesWmsLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createVectorTilesWmsLayer' class='name expandable'>createVectorTilesWmsLayer</a>( <span class='pre'>layerConf</span> ) : ol.layer.VectorTile<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a Vector Tile layer with the WMS facade of Mapserver ...</div><div class='long'><p>Creates a Vector Tile layer with the WMS facade of Mapserver</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'><p>The configuration object for this layer</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.VectorTile</span><div class='sub-desc'><p>Vector Tile layer</p>\n</div></li></ul></div></div></div><div id='method-createWfs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createWfs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createWfs' class='name expandable'>createWfs</a>( <span class='pre'>layerConf</span> ) : ol.layer.Vector<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates an OGC WFS layer ...</div><div class='long'><p>Creates an OGC WFS layer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'><p>The configuration object for this layer</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Vector</span><div class='sub-desc'><p>WFS layer</p>\n</div></li></ul></div></div></div><div id='method-createWms' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createWms' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createWms' class='name expandable'>createWms</a>( <span class='pre'>layerConf</span> ) : ol.layer.Tile<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates an OGC WMS layer ...</div><div class='long'><p>Creates an OGC WMS layer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'><p>The configuration object for this layer</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Tile</span><div class='sub-desc'><p>WMS layer</p>\n</div></li></ul></div></div></div><div id='method-createXyz' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-createXyz' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-createXyz' class='name expandable'>createXyz</a>( <span class='pre'>layerConf</span> ) : ol.layer.Tile<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a XYZ tile layer ...</div><div class='long'><p>Creates a XYZ tile layer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerConf</span> : Object<div class='sub-desc'><p>The configuration object for this layer</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Tile</span><div class='sub-desc'><p>XYZ tile layer</p>\n</div></li></ul></div></div></div><div id='method-ensureOnlyOneBaseLayerVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-ensureOnlyOneBaseLayerVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-ensureOnlyOneBaseLayerVisible' class='name expandable'>ensureOnlyOneBaseLayerVisible</a>( <span class='pre'>evt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The handler when a virtual base layer changes its visibility. ...</div><div class='long'><p>The handler when a virtual base layer changes its visibility. This method\nensures that only one of these virtual base layers is visible at a time.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : ol.Object.Event<div class='sub-desc'><p>The event which contains the layer.</p>\n</div></li></ul></div></div></div><div id='method-loadSld' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-loadSld' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-loadSld' class='name expandable'>loadSld</a>( <span class='pre'>mapLayer, sldUrl</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Loads and parses the given SLD (by URL) and applies it to the given\nvector layer. ...</div><div class='long'><p>Loads and parses the given SLD (by URL) and applies it to the given\nvector layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mapLayer</span> : ol.layer.Vector<div class='sub-desc'><p>The layer to apply the style to</p>\n</div></li><li><span class='pre'>sldUrl</span> : String<div class='sub-desc'><p>The URL to the SLD</p>\n</div></li></ul></div></div></div><div id='method-ol2PropsToOlLayerProps' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-ol2PropsToOlLayerProps' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-ol2PropsToOlLayerProps' class='name expandable'>ol2PropsToOlLayerProps</a>( <span class='pre'>ol2Conf</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Transforms the OpenLayers 2 config options to OL (>=v3) layer pendants. ...</div><div class='long'><p>Transforms the OpenLayers 2 config options to OL (>=v3) layer pendants.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ol2Conf</span> : Object<div class='sub-desc'><p>OL2 config</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>OL (>=v3) layer config</p>\n</div></li></ul></div></div></div><div id='method-ol2PropsToOlSourceProps' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-ol2PropsToOlSourceProps' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-ol2PropsToOlSourceProps' class='name expandable'>ol2PropsToOlSourceProps</a>( <span class='pre'>ol2Conf</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Transforms the OpenLayers 2 config options to OL (>=v3) source pendants. ...</div><div class='long'><p>Transforms the OpenLayers 2 config options to OL (>=v3) source pendants.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ol2Conf</span> : Object<div class='sub-desc'><p>OL2 config</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>OL (>=v3) source config</p>\n</div></li></ul></div></div></div><div id='method-registerLayerTooltip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.factory.Layer'>CpsiMapview.factory.Layer</span><br/><a href='source/Layer2.html#CpsiMapview-factory-Layer-method-registerLayerTooltip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.factory.Layer-method-registerLayerTooltip' class='name expandable'>registerLayerTooltip</a>( <span class='pre'>layer</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Registers and enables map tooltips for the given layer. ...</div><div class='long'><p>Registers and enables map tooltips for the given layer.\nThe layer needs a config property 'toolTipConfig' holding the tooltip\nconfiguration object from the JSON layer config.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : ol.layer.Vector | ol.layer.VectorTile<div class='sub-desc'><p>The layer to enable map tooltips for</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});