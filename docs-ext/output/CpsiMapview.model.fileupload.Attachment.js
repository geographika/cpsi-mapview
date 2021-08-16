Ext.data.JsonP.CpsiMapview_model_fileupload_Attachment({"tagname":"class","name":"CpsiMapview.model.fileupload.Attachment","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Attachment.js","href":"Attachment.html#CpsiMapview-model-fileupload-Attachment"}],"aliases":{"model":["Attachment"]},"alternateClassNames":[],"extends":"Ext.data.Model","mixins":[],"requires":[],"uses":[],"members":[{"name":"entityName","tagname":"property","owner":"CpsiMapview.model.fileupload.Attachment","id":"property-entityName","meta":{"private":true}},{"name":"fields","tagname":"property","owner":"CpsiMapview.model.fileupload.Attachment","id":"property-fields","meta":{"private":true}},{"name":"idProperty","tagname":"property","owner":"CpsiMapview.model.fileupload.Attachment","id":"property-idProperty","meta":{"private":true}},{"name":"updateAttachmentUrls","tagname":"method","owner":"CpsiMapview.model.fileupload.Attachment","id":"method-updateAttachmentUrls","meta":{}}],"code_type":"ext_define","id":"class-CpsiMapview.model.fileupload.Attachment","component":false,"superclasses":["Ext.data.Model"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Model<div class='subclass '><strong>CpsiMapview.model.fileupload.Attachment</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Attachment.html#CpsiMapview-model-fileupload-Attachment' target='_blank'>Attachment.js</a></div></pre><div class='doc-contents'><p>This class is the model used for file\nattachments used by mapview</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-entityName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.model.fileupload.Attachment'>CpsiMapview.model.fileupload.Attachment</span><br/><a href='source/Attachment.html#CpsiMapview-model-fileupload-Attachment-property-entityName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.model.fileupload.Attachment-property-entityName' class='name expandable'>entityName</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;Attachment&#39;</code></p></div></div></div><div id='property-fields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.model.fileupload.Attachment'>CpsiMapview.model.fileupload.Attachment</span><br/><a href='source/Attachment.html#CpsiMapview-model-fileupload-Attachment-property-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.model.fileupload.Attachment-property-fields' class='name expandable'>fields</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{name: &#39;attachmentId&#39;, type: &#39;int&#39;}, {name: &#39;contentType&#39;, type: &#39;string&#39;}, {name: &#39;description&#39;, type: &#39;string&#39;}, {name: &#39;extension&#39;, type: &#39;string&#39;}, {name: &#39;fileName&#39;, type: &#39;string&#39;}, {name: &#39;fileSize&#39;, type: &#39;int&#39;}, {name: &#39;isDefaultImage&#39;, type: &#39;boolean&#39;}, {name: &#39;isThumbnailAvailable&#39;, type: &#39;boolean&#39;}, {name: &#39;lastUpdatedDateUtc&#39;, type: &#39;date&#39;}, {name: &#39;name&#39;, type: &#39;string&#39;}, {name: &#39;attachmentUrl&#39;, type: &#39;string&#39;}, {name: &#39;thumbnailUrl&#39;, type: &#39;string&#39;}]</code></p></div></div></div><div id='property-idProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.model.fileupload.Attachment'>CpsiMapview.model.fileupload.Attachment</span><br/><a href='source/Attachment.html#CpsiMapview-model-fileupload-Attachment-property-idProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.model.fileupload.Attachment-property-idProperty' class='name expandable'>idProperty</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;attachmentId&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-updateAttachmentUrls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CpsiMapview.model.fileupload.Attachment'>CpsiMapview.model.fileupload.Attachment</span><br/><a href='source/Attachment.html#CpsiMapview-model-fileupload-Attachment-method-updateAttachmentUrls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CpsiMapview.model.fileupload.Attachment-method-updateAttachmentUrls' class='name expandable'>updateAttachmentUrls</a>( <span class='pre'>parentUrl</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Attachements are typically associated with a parent object (which has multiple\nattachments)\nThis function allows full...</div><div class='long'><p>Attachements are typically associated with a parent object (which has multiple\nattachments)\nThis function allows full URLs to be created for downloading attachments and also\nthumbnails if the attachment is an image file</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parentUrl</span> : any<div class='sub-desc'><p>the service URL of the parent owner</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});