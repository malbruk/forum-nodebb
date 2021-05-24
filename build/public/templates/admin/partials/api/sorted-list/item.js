
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
    return "<li data-type=\"item\" class=\"list-group-item\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-9\">\r\n            <span class=\"label label-primary\">" + 
      (guard((context != null) ? context['uid'] : null) ?
        "uid " + 
          __escape(guard((context != null) ? context['uid'] : null)) :
        "master") + 
      "</span>\r\n            " + 
      (guard((context != null) ? context['token'] : null) ?
        "<input type=\"text\" readonly=\"readonly\" value=\"" + 
          __escape(guard((context != null) ? context['token'] : null)) + 
          "\" size=\"32\" />" :
        "<em class=\"text-warning\">[[admin/settings/api:token-on-save]]</em>") + 
      "<br />\r\n            <p>\r\n                " + 
      (guard((context != null) ? context['description'] : null) ?
        "\r\n                " + 
          __escape(guard((context != null) ? context['description'] : null)) + 
          "\r\n                " :
        "\r\n                <em>[[admin/settings/api:no-description]]</em>\r\n                ") + 
      "\r\n                <br />\r\n                <small>" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "</small>\r\n            </p>\r\n        </div>\r\n        <div class=\"col-xs-3 text-right\">\r\n            <button type=\"button\" data-type=\"edit\" class=\"btn btn-info\">Edit</button>\r\n            <button type=\"button\" data-type=\"remove\" class=\"btn btn-danger\">Delete</button>\r\n        </div>\r\n    </div>\r\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
