
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
    return "<div class=\"row logger\">\r\n\t<div class=\"col-lg-9\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">[[admin/development/logger:logger-settings]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t[[admin/development/logger:description]]\r\n\t\t\t\t</p>\r\n\t\t\t\t<br/>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t[[admin/development/logger:explanation]]\r\n\t\t\t\t</p>\r\n\t\t\t\t<br/>\r\n\r\n\t\t\t\t<form>\r\n\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-field=\"loggerStatus\"> <strong>[[admin/development/logger:enable-http]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<br/>\r\n\t\t\t\t\t<br/>\r\n\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-field=\"loggerIOStatus\"> <strong>[[admin/development/logger:enable-socket]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<br/>\r\n\t\t\t\t\t<br/>\r\n\r\n\t\t\t\t\t<label>[[admin/development/logger:file-path]]</label>\r\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"[[admin/development/logger:file-path-placeholder]]\" data-field=\"loggerPath\" />\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"col-lg-3 acp-sidebar\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">[[admin/development/logger:control-panel]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<button class=\"btn btn-primary\" id=\"save\">[[admin/development/logger:update-settings]]</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<script>\r\n\trequire(['admin/settings'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t});\r\n</script>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
