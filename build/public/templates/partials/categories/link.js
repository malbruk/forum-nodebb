
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
    return (guard((context != null) ? context['isSection'] : null) ?
        "\r\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\r\n" :
        "\r\n" + 
          (guard((context != null) ? context['link'] : null) ?
            "\r\n<a href=\"" + 
              __escape(guard((context != null) ? context['link'] : null)) + 
              "\" itemprop=\"url\">\r\n" :
            "\r\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null)) + 
              "\" itemprop=\"url\">\r\n") + 
          "\r\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\r\n</a>\r\n");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
