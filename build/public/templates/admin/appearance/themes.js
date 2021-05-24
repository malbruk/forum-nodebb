
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
    return "<div id=\"themes\" class=\"themes\">\r\n\t<div class=\"directory row text-center\" id=\"installed_themes\">\r\n\t\t<i class=\"fa fa-refresh fa-spin\"></i> [[admin/appearance/themes:checking-for-installed]]\r\n\t</div>\r\n</div>\r\n\r\n<button id=\"revert_theme\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">undo</i>\r\n</button>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
