
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
    return "<div class=\"settings\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<nav class=\"section-content\">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/languages:language-settings]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<p>\r\n\t\t\t[[admin/settings/languages:description]]\r\n\t\t</p>\r\n\r\n\t\t<form class=\"row\">\r\n\t\t\t<div class=\"form-group col-sm-6\">\r\n\t\t\t\t<label for=\"defaultLang\">[[admin/settings/languages:default-language]]</label>\r\n\t\t\t\t<select id=\"language\" data-field=\"defaultLang\" class=\"form-control\">\r\n\t\t\t\t\t" + 
      compiled.blocks['languages'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\r\n\t\t<form class=\"row\">\r\n\t\t\t<div class=\"form-group col-sm-6\">\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"autoDetectLang\" " + 
      (guard((context != null) ? context['autoDetectLang'] : null) ?
        "checked" :
        "") + 
      "/>\r\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/languages:auto-detect]]</span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire(['admin/settings'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n</script>\r\n";
  }

  compiled.blocks = {
    'languages': function languages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['languages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          "\" " + 
          (guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['name'] : null)) + 
          " (" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          ")</option>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
