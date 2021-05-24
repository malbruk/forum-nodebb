
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
    return "<div class=\"settings\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<nav class=\"section-content\">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/notifications:notifications]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form>\r\n\t\t\t<strong>[[admin/settings/notifications:welcome-notification]]</strong><br /> <textarea class=\"form-control\" data-field=\"welcomeNotification\"></textarea><br />\r\n\t\t\t<strong>[[admin/settings/notifications:welcome-notification-link]]</strong><br /> <input type=\"text\" class=\"form-control\" data-field=\"welcomeLink\"><br />\r\n\t\t\t<strong>[[admin/settings/notifications:welcome-notification-uid]]</strong><br /> <input type=\"text\" class=\"form-control\" data-field=\"welcomeUid\"><br />\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire(['admin/settings'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n</script>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
