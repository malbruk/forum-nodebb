
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
    return "<li component=\"logout\">\r\n\t<a href=\"#\" title=\"[[admin/menu:logout]]\" data-placement=\"bottom\" data-toggle=\"tooltip\">\r\n\t\t<i class=\"fa fw-fw fa-sign-out\"></i>\r\n\t</a>\r\n</li>\r\n\r\n" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\r\n<li>\r\n\t<a href=\"#\" class=\"restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:restart-forum]]\">\r\n\t\t<i class=\"fa fa-fw fa-repeat\"></i>\r\n\t</a>\r\n</li>\r\n<li>\r\n\t<a href=\"#\" class=\"rebuild-and-restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:rebuild-and-restart-forum]]\">\r\n\t\t<i class=\"fa fa-fw fa-refresh\"></i>\r\n\t</a>\r\n</li>\r\n" :
        "") + 
      "\r\n\r\n<li>\r\n\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:view-forum]]\">\r\n\t\t<i class=\"fa fa-fw fa-home\"></i>\r\n\t</a>\r\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
