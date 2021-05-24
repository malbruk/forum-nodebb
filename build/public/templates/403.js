
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
    return "<div class=\"alert alert-danger\">\r\n\t<strong>[[global:403.title]]</strong>\r\n\t" + 
      (guard((context != null) ? context['error'] : null) ?
        "\r\n\t<p>" + 
          __escape(guard((context != null) ? context['error'] : null)) + 
          "</p>\r\n\t" :
        "\r\n\t<p>[[global:403.message]]</p>\r\n\t") + 
      "\r\n\r\n\t" + 
      (guard((context != null) ? context['returnLink'] : null) ?
        "\r\n\t<p>[[error:goback]]</p>\r\n\t" :
        "") + 
      "\r\n\r\n\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "" :
        "\r\n\t<p>[[global:403.login, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "]]</p>\r\n\t") + 
      "\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
