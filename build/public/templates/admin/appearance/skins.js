
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
    return "<div id=\"skins\" class=\"skins\">\r\n\t<div class=\"directory row text-center\" id=\"bootstrap_themes\">\r\n\t\t<i class=\"fa fa-refresh fa-spin\"></i> [[admin/appearance/skins:loading]]\r\n\t</div>\r\n\r\n\t<div data-type=\"bootswatch\" data-theme=\"\" data-css=\"\">\r\n\t\t<button data-action=\"use\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t\t\t<i class=\"material-icons\">undo</i>\r\n\t\t</button>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
