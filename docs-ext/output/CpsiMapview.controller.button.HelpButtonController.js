Ext.data.JsonP.CpsiMapview_controller_button_HelpButtonController({"tagname":"class","name":"CpsiMapview.controller.button.HelpButtonController","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"HelpButtonController.js","href":"HelpButtonController.html#CpsiMapview-controller-button-HelpButtonController"}],"aliases":{"controller":["cmv_help_button"]},"alternateClassNames":[],"extends":"Ext.app.ViewController","mixins":["CpsiMapview.form.HelpMixin"],"requires":[],"uses":[],"members":[{"name":"buildHelpUrl","tagname":"method","owner":"CpsiMapview.form.HelpMixin","id":"method-buildHelpUrl","meta":{"private":true}},{"name":"onHelp","tagname":"method","owner":"CpsiMapview.form.HelpMixin","id":"method-onHelp","meta":{}}],"code_type":"ext_define","id":"class-CpsiMapview.controller.button.HelpButtonController","component":false,"superclasses":["Ext.app.ViewController"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.app.ViewController<div class='subclass '><strong>CpsiMapview.controller.button.HelpButtonController</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/CpsiMapview.form.HelpMixin' rel='CpsiMapview.form.HelpMixin' class='docClass'>CpsiMapview.form.HelpMixin</a></div><h4>Files</h4><div class='dependency'><a href='source/HelpButtonController.html#CpsiMapview-controller-button-HelpButtonController' target='_blank'>HelpButtonController.js</a></div></pre><div class='doc-contents'><p>This class is the controller for the <a href=\"#!/api/CpsiMapview.view.button.HelpButton\" rel=\"CpsiMapview.view.button.HelpButton\" class=\"docClass\">CpsiMapview.view.button.HelpButton</a> button.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-buildHelpUrl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CpsiMapview.form.HelpMixin' rel='CpsiMapview.form.HelpMixin' class='defined-in docClass'>CpsiMapview.form.HelpMixin</a><br/><a href='source/HelpMixin.html#CpsiMapview-form-HelpMixin-method-buildHelpUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.form.HelpMixin-method-buildHelpUrl' class='name expandable'>buildHelpUrl</a>( <span class='pre'>helpUrl, rootUrl</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Build a URL based on root and page fragments ...</div><div class='long'><p>Build a URL based on root and page fragments</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>helpUrl</span> : String<div class='sub-desc'><p>A full URL or a relative link within the documentation</p>\n</div></li><li><span class='pre'>rootUrl</span> : String<div class='sub-desc'><p>A root/base URL for the documentation</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Full URL to the help page</p>\n</div></li></ul></div></div></div><div id='method-onHelp' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CpsiMapview.form.HelpMixin' rel='CpsiMapview.form.HelpMixin' class='defined-in docClass'>CpsiMapview.form.HelpMixin</a><br/><a href='source/HelpMixin.html#CpsiMapview-form-HelpMixin-method-onHelp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.form.HelpMixin-method-onHelp' class='name expandable'>onHelp</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Opens any associated helpUrl in a new browser tab\nIf the URL does not start with 'http' then an application\nrootHelpU...</div><div class='long'><p>Opens any associated helpUrl in a new browser tab\nIf the URL does not start with 'http' then an application\nrootHelpUrl is appended to the URL if present</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Full URL to the help page*</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});