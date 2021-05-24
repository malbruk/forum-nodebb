
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
    return "<div class=\"settings\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<nav class=\"section-content\">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/chat:chat-settings]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"disableChat\" data-field=\"disableChat\">\r\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/chat:disable]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"disableChatMessageEditing\" data-field=\"disableChatMessageEditing\">\r\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/chat:disable-editing]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<p class=\"help-block\">[[admin/settings/chat:disable-editing-help]]</p>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>[[admin/settings/chat:restrictions.seconds-edit-after]]</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" value=\"0\" data-field=\"chatEditDuration\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>[[admin/settings/chat:restrictions.seconds-delete-after]]</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" value=\"0\" data-field=\"chatDeleteDuration\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>[[admin/settings/chat:max-length]]</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" value=\"1000\" data-field=\"maximumChatMessageLength\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>[[admin/settings/chat:max-room-size]]</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" value=\"0\" data-field=\"maximumUsersInChatRoom\">\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>[[admin/settings/chat:delay]]</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" value=\"200\" data-field=\"chatMessageDelay\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>[[admin/settings/chat:notification-delay]]</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" value=\"60\" data-field=\"notificationSendDelay\">\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire(['admin/settings'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n</script>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
