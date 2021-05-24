
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div class=\"settings\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<nav class=\"section-content\">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/tags:tag]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<a class=\"btn btn-primary\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/tags\">\r\n\t\t\t\t\t<i class=\"fa fa-external-link\"></i>\r\n\t\t\t\t\t[[admin/settings/tags:link-to-manage]]\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"systemTags\">[[admin/settings/tags:system-tags]]</label>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"\" data-field=\"systemTags\" data-field-type=\"tagsinput\" />\r\n\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t[[admin/settings/tags:system-tags-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"minimumTagsPerTopics\">[[admin/settings/tags:min-per-topic]]</label>\r\n\t\t\t\t<input id=\"minimumTagsPerTopics\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"minimumTagsPerTopic\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"maximumTagsPerTopics\">[[admin/settings/tags:max-per-topic]]</label>\r\n\t\t\t\t<input id=\"maximumTagsPerTopics\" type=\"text\" class=\"form-control\" value=\"5\" data-field=\"maximumTagsPerTopic\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"minimumTagLength\">[[admin/settings/tags:min-length]]</label>\r\n\t\t\t\t<input id=\"minimumTagLength\" type=\"text\" class=\"form-control\" value=\"3\" data-field=\"minimumTagLength\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"maximumTagLength\">[[admin/settings/tags:max-length]]</label>\r\n\t\t\t\t<input id=\"maximumTagLength\" type=\"text\" class=\"form-control\" value=\"15\" data-field=\"maximumTagLength\">\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/tags:related-topics]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"maximumRelatedTopics\">[[admin/settings/tags:max-related-topics]]</label>\r\n\t\t\t\t<input id=\"maximumRelatedTopics\" type=\"text\" class=\"form-control\" value=\"5\" data-field=\"maximumRelatedTopics\">\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire(['admin/settings'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n</script>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
