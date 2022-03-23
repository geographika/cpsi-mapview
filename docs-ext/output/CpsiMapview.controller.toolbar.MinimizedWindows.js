Ext.data.JsonP.CpsiMapview_controller_toolbar_MinimizedWindows({"tagname":"class","name":"CpsiMapview.controller.toolbar.MinimizedWindows","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"MinimizedWindows.js","href":"MinimizedWindows2.html#CpsiMapview-controller-toolbar-MinimizedWindows"}],"aliases":{"controller":["cmv_minimized_windows_toolbar"]},"alternateClassNames":[],"extends":"Ext.app.ViewController","mixins":[],"requires":[],"uses":[],"members":[{"name":"addButtonForWindow","tagname":"method","owner":"CpsiMapview.controller.toolbar.MinimizedWindows","id":"method-addButtonForWindow","meta":{}},{"name":"onAddMinimizedWindow","tagname":"method","owner":"CpsiMapview.controller.toolbar.MinimizedWindows","id":"method-onAddMinimizedWindow","meta":{}},{"name":"onRestoreFromButton","tagname":"method","owner":"CpsiMapview.controller.toolbar.MinimizedWindows","id":"method-onRestoreFromButton","meta":{}},{"name":"onRestoreFromWindow","tagname":"method","owner":"CpsiMapview.controller.toolbar.MinimizedWindows","id":"method-onRestoreFromWindow","meta":{}},{"name":"removeButtonFromToolbar","tagname":"method","owner":"CpsiMapview.controller.toolbar.MinimizedWindows","id":"method-removeButtonFromToolbar","meta":{"private":true}},{"name":"restoreWindow","tagname":"method","owner":"CpsiMapview.controller.toolbar.MinimizedWindows","id":"method-restoreWindow","meta":{}}],"code_type":"ext_define","id":"class-CpsiMapview.controller.toolbar.MinimizedWindows","component":false,"superclasses":["Ext.app.ViewController"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.app.ViewController<div class='subclass '><strong>CpsiMapview.controller.toolbar.MinimizedWindows</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/MinimizedWindows2.html#CpsiMapview-controller-toolbar-MinimizedWindows' target='_blank'>MinimizedWindows.js</a></div></pre><div class='doc-contents'><p>This class is the controller for the MinimizedWindows.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addButtonForWindow' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.toolbar.MinimizedWindows'>CpsiMapview.controller.toolbar.MinimizedWindows</span><br/><a href='source/MinimizedWindows2.html#CpsiMapview-controller-toolbar-MinimizedWindows-method-addButtonForWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.toolbar.MinimizedWindows-method-addButtonForWindow' class='name expandable'>addButtonForWindow</a>( <span class='pre'>minimizedWindow</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a button to the toolbar that represents a minimized window ...</div><div class='long'><p>Adds a button to the toolbar that represents a minimized window</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>minimizedWindow</span> : <a href=\"#!/api/CpsiMapview.view.window.MinimizableWindow\" rel=\"CpsiMapview.view.window.MinimizableWindow\" class=\"docClass\">CpsiMapview.view.window.MinimizableWindow</a><div class='sub-desc'><p>window to represent</p>\n</div></li></ul></div></div></div><div id='method-onAddMinimizedWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.toolbar.MinimizedWindows'>CpsiMapview.controller.toolbar.MinimizedWindows</span><br/><a href='source/MinimizedWindows2.html#CpsiMapview-controller-toolbar-MinimizedWindows-method-onAddMinimizedWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.toolbar.MinimizedWindows-method-onAddMinimizedWindow' class='name expandable'>onAddMinimizedWindow</a>( <span class='pre'>minimizedWindow</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handles the toolbar related actions when minimizing a window ...</div><div class='long'><p>Handles the toolbar related actions when minimizing a window</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>minimizedWindow</span> : <a href=\"#!/api/CpsiMapview.view.window.MinimizableWindow\" rel=\"CpsiMapview.view.window.MinimizableWindow\" class=\"docClass\">CpsiMapview.view.window.MinimizableWindow</a><div class='sub-desc'><p>window to add</p>\n</div></li></ul></div></div></div><div id='method-onRestoreFromButton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.toolbar.MinimizedWindows'>CpsiMapview.controller.toolbar.MinimizedWindows</span><br/><a href='source/MinimizedWindows2.html#CpsiMapview-controller-toolbar-MinimizedWindows-method-onRestoreFromButton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.toolbar.MinimizedWindows-method-onRestoreFromButton' class='name expandable'>onRestoreFromButton</a>( <span class='pre'>minimizedWindow</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handles restoring a minimized window using the toolbar button object ...</div><div class='long'><p>Handles restoring a minimized window using the toolbar button object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>minimizedWindow</span> : Ext.button.Button<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRestoreFromWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.toolbar.MinimizedWindows'>CpsiMapview.controller.toolbar.MinimizedWindows</span><br/><a href='source/MinimizedWindows2.html#CpsiMapview-controller-toolbar-MinimizedWindows-method-onRestoreFromWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.toolbar.MinimizedWindows-method-onRestoreFromWindow' class='name expandable'>onRestoreFromWindow</a>( <span class='pre'>minimizedWindow</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handles restoring a minimized window using the window object ...</div><div class='long'><p>Handles restoring a minimized window using the window object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>minimizedWindow</span> : <a href=\"#!/api/CpsiMapview.view.window.MinimizableWindow\" rel=\"CpsiMapview.view.window.MinimizableWindow\" class=\"docClass\">CpsiMapview.view.window.MinimizableWindow</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeButtonFromToolbar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.toolbar.MinimizedWindows'>CpsiMapview.controller.toolbar.MinimizedWindows</span><br/><a href='source/MinimizedWindows2.html#CpsiMapview-controller-toolbar-MinimizedWindows-method-removeButtonFromToolbar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.toolbar.MinimizedWindows-method-removeButtonFromToolbar' class='name expandable'>removeButtonFromToolbar</a>( <span class='pre'>windowRef</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>windowRef</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-restoreWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.controller.toolbar.MinimizedWindows'>CpsiMapview.controller.toolbar.MinimizedWindows</span><br/><a href='source/MinimizedWindows2.html#CpsiMapview-controller-toolbar-MinimizedWindows-method-restoreWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.controller.toolbar.MinimizedWindows-method-restoreWindow' class='name expandable'>restoreWindow</a>( <span class='pre'>windowRef</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handles all actions to restore a minimized window ...</div><div class='long'><p>Handles all actions to restore a minimized window</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>windowRef</span> : String<div class='sub-desc'><p>reference to the minimized window</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});