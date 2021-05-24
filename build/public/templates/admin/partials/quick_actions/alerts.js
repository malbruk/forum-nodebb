
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
    return "<div class=\"alert " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "alert-warning" :
        "alert-info") + 
      " well-sm\">\r\n\t<span>[[admin/menu:alerts.version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</span>\r\n\t" + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "\r\n\t<span style=\"margin-left: 10px\">\r\n\t\t<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\r\n\t\t\t<u>[[admin/menu:alerts.upgrade, " + 
          __escape(guard((context != null) ? context['latestVersion'] : null)) + 
          "]]</u>\r\n\t\t</a>\r\n\t</span>\r\n\t" :
        "") + 
      "\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
