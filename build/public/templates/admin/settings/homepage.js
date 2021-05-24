
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
    return "<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/homepage:home-page]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<p>\r\n\t\t\t[[admin/settings/homepage:description]]\r\n\t\t</p>\r\n\t\t<form class=\"row\">\r\n\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t<label>[[admin/settings/homepage:home-page-route]]</label>\r\n\t\t\t\t<select class=\"form-control\" data-field=\"homePageRoute\">\r\n\t\t\t\t\t" + 
      compiled.blocks['routes'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</select>\r\n\t\t\t\t<div id=\"homePageCustom\" style=\"display: none;\">\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<label>[[admin/settings/homepage:custom-route]]</label>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" data-field=\"homePageCustom\"/>\r\n\t\t\t\t\t<p class=\"help-block\">[[user:custom_route_help]]</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<br>\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"allowUserHomePage\">\r\n\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/homepage:allow-user-home-pages]]</strong></span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<br>\r\n\t\t\t\t<label>[[admin/settings/homepage:home-page-title]]</label>\r\n\t\t\t\t<input class=\"form-control\" type=\"text\" data-field=\"homePageTitle\" placeholder=\"[[pages:home]]\">\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire(['admin/settings'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t});\r\n</script>\r\n";
  }

  compiled.blocks = {
    'routes': function routes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['routes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['routes'] != null && context['routes'][key0] != null) ? context['routes'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['routes'] != null && context['routes'][key0] != null) ? context['routes'][key0]['name'] : null)) + 
          "</option>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
