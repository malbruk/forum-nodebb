
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
    return "<div class=\"settings\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<nav class=\"section-content\">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/pagination:pagination]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form>\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"usePagination\">\r\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/pagination:enable]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/pagination:posts]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form>\r\n\t\t\t<strong>[[admin/settings/pagination:posts-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"postsPerPage\"><br/>\r\n\t\t\t<strong>[[admin/settings/pagination:max-posts-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"maxPostsPerPage\"><br/>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/pagination:topics]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form>\r\n\t\t\t<strong>[[admin/settings/pagination:topics-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"topicsPerPage\"><br />\r\n\t\t\t<strong>[[admin/settings/pagination:max-topics-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"maxTopicsPerPage\"><br/>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/pagination:categories]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form>\r\n\t\t\t<strong>[[admin/settings/pagination:categories-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"50\" data-field=\"categoriesPerPage\"><br />\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire(['admin/settings'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n</script>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
