
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
    return "<input type=\"text\" class=\"form-control\" id=\"roomName\" placeholder=\"[[modules:chat.rename-placeholder]]\" value=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\" />\r\n<p class=\"help-block\">\r\n\t[[modules:chat.rename-help]]\r\n</p>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
