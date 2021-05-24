
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
    return "<div class=\"settings\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<nav class=\"section-content\">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/email:email-settings]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"email:from\"><strong>[[admin/settings/email:address]]</strong></label>\r\n\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t[[admin/settings/email:address-help]]\r\n\t\t\t\t</p>\r\n\t\t\t\t<input type=\"text\" class=\"form-control input-lg\" id=\"email:from\" data-field=\"email:from\" placeholder=\"info@example.org\" /><br />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"email:from_name\"><strong>From Name</strong></label>\r\n\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t[[admin/settings/email:from-help]]\r\n\t\t\t\t</p>\r\n\t\t\t\t<input type=\"text\" class=\"form-control input-lg\" id=\"email:from_name\" data-field=\"email:from_name\" placeholder=\"NodeBB\" /><br />\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/email:smtp-transport]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<div class=\"alert alert-warning\">\r\n\t\t\t<p>\r\n\t\t\t\t[[admin/settings/email:smtp-transport-help]]\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<form>\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label for=\"email:smtpTransport:enabled\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"email:smtpTransport:enabled\" data-field=\"email:smtpTransport:enabled\" name=\"email:smtpTransport:enabled\" />\r\n\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/email:smtp-transport.enabled]]</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label for=\"email:smtpTransport:pool\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"email:smtpTransport:pool\" data-field=\"email:smtpTransport:pool\" name=\"email:smtpTransport:pool\" />\r\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/email:smtp-transport.pool]]</span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<p class=\"col-xs-12 help-block\">\r\n\t\t\t\t\t[[admin/settings/email:smtp-transport.pool-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"email:smtpTransport:service\"><strong>[[admin/settings/email:smtp-transport.service]]</strong></label>\r\n\t\t\t\t<select class=\"form-control input-lg\" id=\"email:smtpTransport:service\" data-field=\"email:smtpTransport:service\">\r\n\t\t\t\t\t<option value=\"nodebb-custom-smtp\" style=\"font-weight: bold\">[[admin/settings/email:smtp-transport.service-custom]]</option>\r\n\t\t\t\t\t<option style=\"font-size: 10px\" disabled>&nbsp;</option>\r\n\r\n\t\t\t\t\t" + 
      compiled.blocks['services'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</select>\r\n\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t[[admin/settings/email:smtp-transport.service-help]]\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t[[admin/settings/email:smtp-transport.gmail-warning1]]\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t[[admin/settings/email:smtp-transport.gmail-warning2]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group well\" id=\"email:smtpTransport:custom-service\" style=\"display: none\">\r\n\t\t\t\t<h5>Custom Service</h5>\r\n\r\n\t\t\t\t<label for=\"email:smtpTransport:host\">[[admin/settings/email:smtp-transport.host]]</label>\r\n\t\t\t\t<input type=\"text\" class=\"form-control input-md\" id=\"email:smtpTransport:host\" data-field=\"email:smtpTransport:host\" placeholder=\"smtp.example.org\">\r\n\r\n\t\t\t\t<label for=\"email:smtpTransport:port\">[[admin/settings/email:smtp-transport.port]]</label>\r\n\t\t\t\t<input type=\"text\" class=\"form-control input-md\" id=\"email:smtpTransport:port\" data-field=\"email:smtpTransport:port\" placeholder=\"5555\">\r\n\r\n\t\t\t\t<label for=\"email:smtpTransport:security\">[[admin/settings/email:smtp-transport.security]]</label>\r\n\t\t\t\t<select class=\"form-control\" id=\"email:smtpTransport:security\" data-field=\"email:smtpTransport:security\">\r\n\t\t\t\t\t<option value=\"ENCRYPTED\">[[admin/settings/email:smtp-transport.security-encrypted]]</option>\r\n\t\t\t\t\t<option value=\"STARTTLS\">[[admin/settings/email:smtp-transport.security-starttls]]</option>\r\n\t\t\t\t\t<option value=\"NONE\">[[admin/settings/email:smtp-transport.security-none]]</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"email:smtpTransport:user\"><strong>[[admin/settings/email:smtp-transport.username]]</strong></label>\r\n\t\t\t\t<input type=\"text\" class=\"form-control input-lg\" data-field=\"email:smtpTransport:user\" placeholder=\"admin@example.org\" />\r\n\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t[[admin/settings/email:smtp-transport.username-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"email:smtpTransport:pass\"><strong>[[admin/settings/email:smtp-transport.password]]</strong></label>\r\n\t\t\t\t<input type=\"password\" class=\"form-control input-lg\" data-field=\"email:smtpTransport:pass\" />\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/email:template]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<label>[[admin/settings/email:template.select]]</label><br />\r\n\t\t<select id=\"email-editor-selector\" class=\"form-control\">\r\n\t\t\t" + 
      compiled.blocks['emails'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</select>\r\n\t\t<br />\r\n\t\t<div id=\"email-editor\"></div>\r\n\t\t<input type=\"hidden\" id=\"email-editor-holder\" value=\"\" data-field=\"\" />\r\n\t\t<br />\r\n\t\t<button class=\"btn btn-warning\" type=\"button\" data-action=\"email.revert\">[[admin/settings/email:template.revert]]</button>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/email:testing]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>[[admin/settings/email:testing.select]]</label>\r\n\t\t\t<select id=\"test-email\" class=\"form-control\">\r\n\t\t\t\t" + 
      compiled.blocks['sendable'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<button class=\"btn btn-primary\" type=\"button\" data-action=\"email.test\">[[admin/settings/email:testing.send]]</button>\r\n\t\t<p class=\"help-block\">\r\n\t\t\t[[admin/settings/email:testing.send-help]]\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/email:subscriptions]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form>\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label for=\"disableEmailSubscriptions\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"disableEmailSubscriptions\" data-field=\"disableEmailSubscriptions\" name=\"disableEmailSubscriptions\" />\r\n\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/email:subscriptions.disable]]</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"digestHour\"><strong>[[admin/settings/email:subscriptions.hour]]</strong></label>\r\n\t\t\t\t<input type=\"number\" class=\"form-control input-lg\" id=\"digestHour\" data-field=\"digestHour\" placeholder=\"17\" min=\"0\" max=\"24\" />\r\n\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t[[admin/settings/email:subscriptions.hour-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/email:notifications.settings]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form>\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label for=\"removeEmailNotificationImages\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"removeEmailNotificationImages\" data-field=\"removeEmailNotificationImages\" name=\"removeEmailNotificationImages\" />\r\n\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/email:notifications.remove-images]]</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire(['admin/settings'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n</script>\r\n\r\n";
  }

  compiled.blocks = {
    'services': function services(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['services'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'emails': function emails(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['emails'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['emails'] != null && context['emails'][key0] != null) ? context['emails'][key0]['path'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['emails'] != null && context['emails'][key0] != null) ? context['emails'][key0]['path'] : null)) + 
          "</option>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'sendable': function sendable(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sendable'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
