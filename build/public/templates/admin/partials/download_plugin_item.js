
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
    return "\t\t\t\t\t<li id=\"" + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "\" data-plugin-id=\"" + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "\" class=\"clearfix\">\r\n\t\t\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t\t\t<button data-action=\"toggleActive\" class=\"btn btn-success hidden\"><i class=\"fa fa-power-off\"></i> [[admin/extend/plugins:plugin-item.activate]]</button>\r\n\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<h2><strong>" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "</strong></h2>\r\n\r\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['description'] : null) ?
        "\r\n\t\t\t\t\t\t<p>" + 
          __escape(guard((context != null) ? context['description'] : null)) + 
          "</p>\r\n\t\t\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
      __escape(guard((context != null) ? context['latest'] : null)) + 
      "</strong></small>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t" + 
      (guard((context != null) ? context['isCompatible'] : null) ?
        "\r\n\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
          __escape(guard((context != null) ? context['version'] : null)) + 
          "]]\r\n\t\t\t\t\t\t\t" :
        "\r\n\t\t\t\t\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\r\n\t\t\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['url'] : null) ?
        "\r\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "</a></p>\r\n\t\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t</li>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
