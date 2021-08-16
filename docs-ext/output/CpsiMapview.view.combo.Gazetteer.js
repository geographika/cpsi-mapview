Ext.data.JsonP.CpsiMapview_view_combo_Gazetteer({"tagname":"class","name":"CpsiMapview.view.combo.Gazetteer","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Gazetteer.js","href":"Gazetteer.html#CpsiMapview-view-combo-Gazetteer"}],"aliases":{"widget":["cmv_gazetteer_combo"]},"alternateClassNames":[],"extends":"GeoExt.form.field.GeocoderComboBox","mixins":[],"requires":[],"uses":[],"members":[{"name":"minChars","tagname":"cfg","owner":"CpsiMapview.view.combo.Gazetteer","id":"cfg-minChars","meta":{}},{"name":"queryParam","tagname":"cfg","owner":"CpsiMapview.view.combo.Gazetteer","id":"cfg-queryParam","meta":{}},{"name":"srs","tagname":"cfg","owner":"CpsiMapview.view.combo.Gazetteer","id":"cfg-srs","meta":{}},{"name":"convertToExtent","tagname":"method","owner":"CpsiMapview.view.combo.Gazetteer","id":"method-convertToExtent","meta":{}},{"name":"initComponent","tagname":"method","owner":"CpsiMapview.view.combo.Gazetteer","id":"method-initComponent","meta":{"private":true}},{"name":"onFocus","tagname":"method","owner":"CpsiMapview.view.combo.Gazetteer","id":"method-onFocus","meta":{"private":true}}],"code_type":"ext_define","id":"class-CpsiMapview.view.combo.Gazetteer","component":false,"superclasses":["GeoExt.form.field.GeocoderComboBox"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>GeoExt.form.field.GeocoderComboBox<div class='subclass '><strong>CpsiMapview.view.combo.Gazetteer</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Gazetteer.html#CpsiMapview-view-combo-Gazetteer' target='_blank'>Gazetteer.js</a></div></pre><div class='doc-contents'><p>Base class for a ComboBox using a custom CPSI Gazetteer service.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-minChars' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.view.combo.Gazetteer'>CpsiMapview.view.combo.Gazetteer</span><br/><a href='source/Gazetteer.html#CpsiMapview-view-combo-Gazetteer-cfg-minChars' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.view.combo.Gazetteer-cfg-minChars' class='name expandable'>minChars</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Minimum number of entered characters to trigger a search. ...</div><div class='long'><p>Minimum number of entered characters to trigger a search.</p>\n<p>Defaults to: <code>2</code></p></div></div></div><div id='cfg-queryParam' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.view.combo.Gazetteer'>CpsiMapview.view.combo.Gazetteer</span><br/><a href='source/Gazetteer.html#CpsiMapview-view-combo-Gazetteer-cfg-queryParam' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.view.combo.Gazetteer-cfg-queryParam' class='name expandable'>queryParam</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The query parameter for the user entered search text. ...</div><div class='long'><p>The query parameter for the user entered search text.\nNot used for this Gazetteer service.</p>\n</div></div></div><div id='cfg-srs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.view.combo.Gazetteer'>CpsiMapview.view.combo.Gazetteer</span><br/><a href='source/Gazetteer.html#CpsiMapview-view-combo-Gazetteer-cfg-srs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.view.combo.Gazetteer-cfg-srs' class='name expandable'>srs</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The SRS used by the Gazetteer service. ...</div><div class='long'><p>The SRS used by the Gazetteer service.</p>\n<p>Defaults to: <code>&#39;EPSG:3857&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-convertToExtent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.view.combo.Gazetteer'>CpsiMapview.view.combo.Gazetteer</span><br/><a href='source/Gazetteer.html#CpsiMapview-view-combo-Gazetteer-method-convertToExtent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.view.combo.Gazetteer-method-convertToExtent' class='name expandable'>convertToExtent</a>( <span class='pre'>v, rec</span> ) : ol.Extent<span class=\"signature\"></span></div><div class='description'><div class='short'>Function to convert the data delivered by the Gazetteer service to an\nol.Extent ([minx, miny, maxx, maxy]). ...</div><div class='long'><p>Function to convert the data delivered by the Gazetteer service to an\nol.Extent ([minx, miny, maxx, maxy]).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Mixed<div class='sub-desc'><p>The data value as read by the Reader</p>\n</div></li><li><span class='pre'>rec</span> : Ext.data.Model<div class='sub-desc'><p>The data record containing raw data</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.Extent</span><div class='sub-desc'><p>The created ol.Extent</p>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.view.combo.Gazetteer'>CpsiMapview.view.combo.Gazetteer</span><br/><a href='source/Gazetteer.html#CpsiMapview-view-combo-Gazetteer-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.view.combo.Gazetteer-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.view.combo.Gazetteer'>CpsiMapview.view.combo.Gazetteer</span><br/><a href='source/Gazetteer.html#CpsiMapview-view-combo-Gazetteer-method-onFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.view.combo.Gazetteer-method-onFocus' class='name expandable'>onFocus</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});