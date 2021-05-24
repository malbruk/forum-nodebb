
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
    return "<form>\r\n    <input type=\"hidden\" name=\"token\" />\r\n    <input type=\"hidden\" name=\"timestamp\" />\r\n    <div class=\"form-group\">\r\n        <label for=\"uid\">[[admin/settings/api:uid]]</label>\r\n        <input type=\"number\" name=\"uid\" class=\"form-control\" placeholder=\"1\" min=\"0\" />\r\n        <p class=\"help-text\">\r\n            [[admin/settings/api:uid-help-text]]\r\n        </p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"description\">[[admin/settings/api:description]]</label>\r\n        <input type=\"text\" name=\"description\" class=\"form-control\" placeholder=\"Description\" />\r\n    </div>\r\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
