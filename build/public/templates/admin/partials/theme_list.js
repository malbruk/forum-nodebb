
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
    return compiled.blocks['themes'](helpers, context, guard, iter, helper) + 
      "\r\n";
  }

  compiled.blocks = {
    'themes': function themes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['themes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\" data-type=\"" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['type'] : null)) + 
          "\" data-theme=\"" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['id'] : null)) + 
          "\"" + 
          (guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['css'] : null) ?
            " data-css=\"" + 
              __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['css'] : null)) + 
              "\"" :
            "") + 
          ">\r\n\t<div class=\"theme-card mdl-card mdl-shadow--2dp\">\r\n\t\t<div class=\"mdl-card__title mdl-card--expand\" style=\"background-image: url('" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['screenshot_url'] : null)) + 
          "');\"></div>\r\n\t\t<div class=\"mdl-card__supporting-text\">\r\n\t\t\t<h2 class=\"mdl-card__title-text\">" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['name'] : null)) + 
          "</h2>\r\n\t\t\t<p>\r\n\t\t\t\t" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['description'] : null)) + 
          "\r\n\t\t\t</p>\r\n\r\n\t\t\t" + 
          (guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['url'] : null) ?
            "\r\n\t\t\t<p>\r\n\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['url'] : null)) + 
              "\" target=\"_blank\">[[admin/appearance/themes:homepage]]</a>\r\n\t\t\t</p>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t</div>\r\n\t\t<div class=\"mdl-card__actions mdl-card--border\">\r\n\t\t\t<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" data-action=\"use\">\r\n\t\t\t\t" + 
          (guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['skin'] : null) ?
            "[[admin/appearance/skins:select-skin]]" :
            "[[admin/appearance/themes:select-theme]]") + 
          "\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
