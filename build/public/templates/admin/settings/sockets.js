
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
    return "<div class=\"settings\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<nav class=\"section-content\">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/sockets:reconnection]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"maxReconnectionAttempts\">[[admin/settings/sockets:max-attempts]]</label>\r\n\t\t\t\t<input class=\"form-control\" id=\"maxReconnectionAttempts\" type=\"text\" value=\"5\" placeholder=\"[[admin/settings/sockets:default-placeholder, 5]]\" data-field=\"maxReconnectionAttempts\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"reconnectionDelay\">[[admin/settings/sockets:delay]]</label>\r\n\t\t\t\t<input class=\"form-control\" id=\"reconnectionDelay\" type=\"text\" value=\"1500\" placeholder=\"[[admin/settings/sockets:default-placeholder, 1500]]\" data-field=\"reconnectionDelay\" />\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire(['admin/settings'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n</script>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
