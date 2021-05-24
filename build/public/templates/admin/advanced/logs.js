
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
    return "<div class=\"row logs\">\r\n\t<div class=\"col-lg-9\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\"><i class=\"fa fa-file-text-o\"></i> [[admin/advanced/logs:logs]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<pre>" + 
      __escape(guard((context != null) ? context['data'] : null)) + 
      "</pre>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-3 acp-sidebar\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">[[admin/advanced/logs:control-panel]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<button class=\"btn btn-primary\" data-action=\"reload\">\r\n\t\t\t\t\t<i class=\"fa fa-refresh\"></i> [[admin/advanced/logs:reload]]\r\n\t\t\t\t</button>\r\n\t\t\t\t<button class=\"btn btn-warning\" data-action=\"clear\">\r\n\t\t\t\t\t<i class=\"fa fa-eraser\"></i> [[admin/advanced/logs:clear]]\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
