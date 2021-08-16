Ext.data.JsonP.CpsiMapview_plugin_FeatureInfoWindow({"tagname":"class","name":"CpsiMapview.plugin.FeatureInfoWindow","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"FeatureInfoWindow.js","href":"FeatureInfoWindow.html#CpsiMapview-plugin-FeatureInfoWindow"}],"aliases":{"plugin":["cmv_feature_info_window"]},"alternateClassNames":[],"extends":"Ext.plugin.Abstract","mixins":[],"requires":["BasiGX.util.Map","BasiGX.view.grid.FeaturePropertyGrid","CpsiMapview.view.window.MinimizableWindow","Ext.panel.Panel"],"uses":[],"members":[{"name":"highlightSource","tagname":"property","owner":"CpsiMapview.plugin.FeatureInfoWindow","id":"property-highlightSource","meta":{}},{"name":"pluginId","tagname":"property","owner":"CpsiMapview.plugin.FeatureInfoWindow","id":"property-pluginId","meta":{"private":true}},{"name":"createFeaturePanels","tagname":"method","owner":"CpsiMapview.plugin.FeatureInfoWindow","id":"method-createFeaturePanels","meta":{}},{"name":"highlightClick","tagname":"method","owner":"CpsiMapview.plugin.FeatureInfoWindow","id":"method-highlightClick","meta":{}},{"name":"init","tagname":"method","owner":"CpsiMapview.plugin.FeatureInfoWindow","id":"method-init","meta":{"private":true}},{"name":"openFeatureInfoWindow","tagname":"method","owner":"CpsiMapview.plugin.FeatureInfoWindow","id":"method-openFeatureInfoWindow","meta":{}},{"name":"requestFeatureInfos","tagname":"method","owner":"CpsiMapview.plugin.FeatureInfoWindow","id":"method-requestFeatureInfos","meta":{}}],"code_type":"ext_define","id":"class-CpsiMapview.plugin.FeatureInfoWindow","short_doc":"This is a plugin for the GeoExt.component.Map component. ...","component":false,"superclasses":["Ext.plugin.Abstract"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.plugin.Abstract<div class='subclass '><strong>CpsiMapview.plugin.FeatureInfoWindow</strong></div></div><h4>Requires</h4><div class='dependency'>BasiGX.util.Map</div><div class='dependency'>BasiGX.view.grid.FeaturePropertyGrid</div><div class='dependency'><a href='#!/api/CpsiMapview.view.window.MinimizableWindow' rel='CpsiMapview.view.window.MinimizableWindow' class='docClass'>CpsiMapview.view.window.MinimizableWindow</a></div><div class='dependency'>Ext.panel.Panel</div><h4>Files</h4><div class='dependency'><a href='source/FeatureInfoWindow.html#CpsiMapview-plugin-FeatureInfoWindow' target='_blank'>FeatureInfoWindow.js</a></div></pre><div class='doc-contents'><p>This is a plugin for the <code>GeoExt.component.Map</code> component. It provides a window that opens on a singleclick on the map.\nAll WMS that have the property <code>featureInfoWindow</code> set to true will be queried for feature info in format <code>geojson</code>.\nThe resulting informations will be shown in property grids.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-highlightSource' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.plugin.FeatureInfoWindow'>CpsiMapview.plugin.FeatureInfoWindow</span><br/><a href='source/FeatureInfoWindow.html#CpsiMapview-plugin-FeatureInfoWindow-property-highlightSource' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.plugin.FeatureInfoWindow-property-highlightSource' class='name expandable'>highlightSource</a> : ol.source.Vector<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A source containing a feature that highlights the click on the map.</p>\n</div><div class='long'><p>A source containing a feature that highlights the click on the map.</p>\n</div></div></div><div id='property-pluginId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.plugin.FeatureInfoWindow'>CpsiMapview.plugin.FeatureInfoWindow</span><br/><a href='source/FeatureInfoWindow.html#CpsiMapview-plugin-FeatureInfoWindow-property-pluginId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.plugin.FeatureInfoWindow-property-pluginId' class='name expandable'>pluginId</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;cmv_feature_info_window&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createFeaturePanels' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.plugin.FeatureInfoWindow'>CpsiMapview.plugin.FeatureInfoWindow</span><br/><a href='source/FeatureInfoWindow.html#CpsiMapview-plugin-FeatureInfoWindow-method-createFeaturePanels' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.plugin.FeatureInfoWindow-method-createFeaturePanels' class='name expandable'>createFeaturePanels</a>( <span class='pre'>layer, features</span> ) : BasiGX.view.grid.FeaturePropertyGrid[]<span class=\"signature\"></span></div><div class='description'><div class='short'>This method returns a property grid for every feature given. ...</div><div class='long'><p>This method returns a property grid for every feature given.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : ol.layer.Layer<div class='sub-desc'>\n</div></li><li><span class='pre'>features</span> : ol.Feature[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>BasiGX.view.grid.FeaturePropertyGrid[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-highlightClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.plugin.FeatureInfoWindow'>CpsiMapview.plugin.FeatureInfoWindow</span><br/><a href='source/FeatureInfoWindow.html#CpsiMapview-plugin-FeatureInfoWindow-method-highlightClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.plugin.FeatureInfoWindow-method-highlightClick' class='name expandable'>highlightClick</a>( <span class='pre'>evt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method highlights the clicked point on the map. ...</div><div class='long'><p>This method highlights the clicked point on the map.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : ol.MapBrowserEvent<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.plugin.FeatureInfoWindow'>CpsiMapview.plugin.FeatureInfoWindow</span><br/><a href='source/FeatureInfoWindow.html#CpsiMapview-plugin-FeatureInfoWindow-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.plugin.FeatureInfoWindow-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-openFeatureInfoWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.plugin.FeatureInfoWindow'>CpsiMapview.plugin.FeatureInfoWindow</span><br/><a href='source/FeatureInfoWindow.html#CpsiMapview-plugin-FeatureInfoWindow-method-openFeatureInfoWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.plugin.FeatureInfoWindow-method-openFeatureInfoWindow' class='name expandable'>openFeatureInfoWindow</a>( <span class='pre'></span> ) : <a href=\"#!/api/CpsiMapview.view.window.MinimizableWindow\" rel=\"CpsiMapview.view.window.MinimizableWindow\" class=\"docClass\">CpsiMapview.view.window.MinimizableWindow</a><span class=\"signature\"></span></div><div class='description'><div class='short'>This method opens a window to display the results in. ...</div><div class='long'><p>This method opens a window to display the results in.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CpsiMapview.view.window.MinimizableWindow\" rel=\"CpsiMapview.view.window.MinimizableWindow\" class=\"docClass\">CpsiMapview.view.window.MinimizableWindow</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-requestFeatureInfos' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.plugin.FeatureInfoWindow'>CpsiMapview.plugin.FeatureInfoWindow</span><br/><a href='source/FeatureInfoWindow.html#CpsiMapview-plugin-FeatureInfoWindow-method-requestFeatureInfos' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.plugin.FeatureInfoWindow-method-requestFeatureInfos' class='name expandable'>requestFeatureInfos</a>( <span class='pre'>evt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method queries all configured layers for feature information. ...</div><div class='long'><p>This method queries all configured layers for feature information. It calls the methods to highlight the click,\nopen a window and display the information</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : ol.MapBrowserEvent<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});