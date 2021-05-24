
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
    return "<form role=\"form\" class=\"core-api-settings\">\r\n\t<p class=\"lead\">[[admin/settings/api:lead-text]]</p>\r\n\t<p>[[admin/settings/api:intro]]</p>\r\n\t<p>\r\n\t\t<a href=\"https://docs.nodebb.org/api\">\r\n\t\t\t<i class=\"fa fa-external-link\"></i>\r\n\t\t\t[[admin/settings/api:docs]]\r\n\t\t</a>\r\n\t</p>\r\n\r\n\t<hr />\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/api:settings]]</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input id=\"requireHttps\" class=\"mdl-switch__input\" type=\"checkbox\" name=\"requireHttps\" />\r\n\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/api:require-https]]</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<p class=\"help-block\">[[admin/settings/api:require-https-caveat]]</p>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/api:tokens]]</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<div class=\"form-group\" data-type=\"sorted-list\" data-sorted-list=\"tokens\" data-item-template=\"admin/partials/api/sorted-list/item\" data-form-template=\"admin/partials/api/sorted-list/form\">\r\n\t\t\t\t<input hidden=\"text\" name=\"tokens\">\r\n\t\t\t\t<ul data-type=\"list\" class=\"list-group\"></ul>\r\n\t\t\t\t<button type=\"button\" data-type=\"add\" class=\"btn btn-info\">Create Token</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
