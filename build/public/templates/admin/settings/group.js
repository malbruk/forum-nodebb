
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
    return "<div class=\"settings\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<nav class=\"section-content\">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/group:general]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form role=\"form\">\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"allowPrivateGroups\">\r\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/group:private-groups]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<p class=\"help-block\">\r\n\t\t\t\t[[admin/settings/group:private-groups.help]]\r\n\t\t\t</p>\r\n\t\t\t<p class=\"help-block\">\r\n\t\t\t\t[[admin/settings/group:private-groups.warning]]\r\n\t\t\t</p>\r\n\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"allowMultipleBadges\">\r\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/group:allow-multiple-badges]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<p class=\"help-block\">\r\n\t\t\t\t[[admin/settings/group:allow-multiple-badges-help]]\r\n\t\t\t</p>\r\n\r\n\t\t\t<label>[[admin/settings/group:max-name-length]]</label>\r\n\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"255\" data-field=\"maximumGroupNameLength\" />\r\n\r\n\t\t\t<label>[[admin/settings/group:max-title-length]]</label>\r\n\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"40\" data-field=\"maximumGroupTitleLength\" />\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/group:cover-image]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form role=\"form\">\r\n\t\t\t<label for=\"groups:defaultCovers\"><strong>[[admin/settings/group:default-cover]]</strong></label>\r\n\t\t\t<p class=\"help-block\">\r\n\t\t\t\t[[admin/settings/group:default-cover-help]]\r\n\t\t\t</p>\r\n\t\t\t<input type=\"text\" class=\"form-control input-lg\" id=\"groups:defaultCovers\" data-field=\"groups:defaultCovers\" data-field-type=\"tagsinput\" value=\"/assets/images/cover-default.png\" placeholder=\"https://example.com/group1.png, https://example.com/group2.png\" /><br />\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire(['admin/settings'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n</script>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
