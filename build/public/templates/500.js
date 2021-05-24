
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
    return "<div class=\"alert alert-danger\">\r\n\t<strong>[[global:500.title]]</strong>\r\n\t<p>[[global:500.message]]</p>\r\n\t<p>" + 
      __escape(guard((context != null) ? context['path'] : null)) + 
      "</p>\r\n\t" + 
      (guard((context != null) ? context['error'] : null) ?
        "<p>" + 
          __escape(guard((context != null) ? context['error'] : null)) + 
          "</p>" :
        "") + 
      "\r\n\r\n\t" + 
      (guard((context != null) ? context['returnLink'] : null) ?
        "\r\n\t<p>[[error:goback]]</p>\r\n\t" :
        "") + 
      "\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
