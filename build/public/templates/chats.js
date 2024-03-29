
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
    return "<div class=\"chats-full\">\r\n\t<div component=\"chat/nav-wrapper\" data-loaded=\"" + 
      (guard((context != null) ? context['roomId'] : null) ?
        "1" :
        "0") + 
      "\">\r\n\t\t<div class=\"chat-search dropdown\">\r\n\t\t\t<input class=\"form-control\" type=\"text\" component=\"chat/search\" placeholder=\"[[users:enter_username]]\" data-toggle=\"dropdown\" />\r\n\t\t\t<ul component=\"chat/search/list\" class=\"dropdown-menu\"></ul>\r\n\t\t</div>\r\n\t\t<ul component=\"chat/recent\" class=\"chats-list\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\r\n\t\t\t" + 
      compiled.blocks['rooms'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</ul>\r\n\t</div>\r\n\t<div component=\"chat/main-wrapper\">\r\n\t\t" + 
      (guard((context != null) ? context['roomId'] : null) ?
        "\r\n<div component=\"chat/messages\" class=\"expanded-chat\" data-roomid=\"" + 
          __escape(guard((context != null) ? context['roomId'] : null)) + 
          "\">\r\n\t<div component=\"chat/header\">\r\n\t\t<button type=\"button\" class=\"close\" data-action=\"pop-out\"><span aria-hidden=\"true\"><i class=\"fa fa-compress\"></i></span><span class=\"sr-only\">[[modules:chat.pop-out]]</span></button>\r\n\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" data-action=\"close\"><span aria-hidden=\"true\">&times;</span></button>\r\n\r\n\t\t<div class=\"dropdown pull-right\">\r\n\t\t\t<button class=\"close\" data-toggle=\"dropdown\" component=\"chat/controlsToggle\"><i class=\"fa fa-gear\"></i></button>\r\n\t\t\t<ul class=\"dropdown-menu dropdown-menu-right pull-right\" component=\"chat/controls\">\r\n\t\t\t\t<li class=\"dropdown-header\">[[modules:chat.options]]</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" data-action=\"members\"><i class=\"fa fa-fw fa-cog\"></i> [[modules:chat.manage-room]]</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" data-action=\"rename\"><i class=\"fa fa-fw fa-edit\"></i> [[modules:chat.rename-room]]</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" data-action=\"leave\"><i class=\"fa fa-fw fa-sign-out\"></i> [[modules:chat.leave]]</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t" + 
          (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
            "\r\n\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t\t\t<li class=\"dropdown-header\">[[modules:chat.in-room]]</li>\r\n\t\t\t\t" + 
              compiled.blocks['users'](helpers, context, guard, iter, helper) + 
              "\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<span class=\"members\">\r\n\t\t\t[[modules:chat.chatting_with]]:\r\n\t\t\t" + 
          iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\r\n\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/uid/" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
              "</a>" + 
              (index === length - 1 ?
                "" :
                ",") + 
              "\r\n\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t</span>\r\n\t</div>\r\n\t<div component=\"chat/messages/scroll-up-alert\" class=\"scroll-up-alert alert alert-info\" role=\"button\">[[modules:chat.scroll-up-alert]]</div>\r\n\t<ul class=\"chat-content\">\r\n\t\t" + 
          compiled.blocks['messages'](helpers, context, guard, iter, helper) + 
          "\r\n\t</ul>\r\n\t<div component=\"chat/composer\">\r\n\t\t<textarea component=\"chat/input\" placeholder=\"[[modules:chat.placeholder]]\" class=\"form-control chat-input mousetrap\" rows=\"2\"></textarea>\r\n\t\t<button class=\"btn btn-primary\" type=\"button\" data-action=\"send\"><i class=\"fa fa-fw fa-2x fa-paper-plane\"></i></button>\r\n\t\t<span component=\"chat/message/remaining\">" + 
          __escape(guard((context != null) ? context['maximumChatMessageLength'] : null)) + 
          "</span>\r\n\t</div>\r\n</div>\r\n" :
        "\r\n<div class=\"alert alert-info\">\r\n\t[[modules:chat.no-messages]]\r\n</div>\r\n") + 
      "\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'rooms': function rooms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['rooms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<li component=\"chat/recent/room\" data-roomid=\"" + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomId'] : null)) + 
          "\" class=\"" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['unread'] : null) ?
            "unread" :
            "") + 
          "\">\r\n\t<strong class=\"room-name\">\r\n\t\t" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['uid'] : null) ?
            "\r\n\t\t<span component=\"chat/title\">" + 
              (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null) ?
                __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null)) :
                __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['usernames'] : null))) + 
              "</span>\r\n\t\t" :
            "\r\n\t\t<span>[[modules:chat.no-users-in-room]]</span>\r\n\t\t") + 
          "\r\n\t</strong>\r\n\t<div class=\"avatar-placeholder\"></div>\r\n\t" + 
          iter(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['users'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t" + 
              (index === 0 ?
                "\r\n\t<div class=\"main-avatar\">\r\n\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null && context['rooms'][key0]['users'][key1] != null) ? context['rooms'][key0]['users'][key1]['userslug'] : null)) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null) ? context['rooms'][key0]['users'][key1] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
                  "</a>\r\n\t</div>\r\n\t" :
                "") + 
              "\r\n\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\r\n\t<ul class=\"members\">\r\n\t\t" + 
          iter(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['users'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t<li>\r\n\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null && context['rooms'][key0]['users'][key1] != null) ? context['rooms'][key0]['users'][key1]['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null) ? context['rooms'][key0]['users'][key1] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
              "</a>\r\n\t\t</li>\r\n\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t</ul>\r\n</li>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'messages': function messages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['messages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t" + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['system'] : null) ?
            "\r\n\t<li component=\"chat/system-message\" class=\"system-message clear\" data-index=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['index'] : null)) + 
              "\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
              "\" data-self=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
              "\" data-break=\"0\" data-timestamp=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
              "\">\r\n\t[[modules:chat.system." + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['username'] : null)) + 
              "]]\r\n</li>\r\n\t" :
            "\r\n\t<li component=\"chat/message\" class=\"chat-message clear" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['deleted'] : null) ?
                " deleted" :
                "") + 
              "\" data-index=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['index'] : null)) + 
              "\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
              "\" data-self=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
              "\" data-break=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['newSet'] : null)) + 
              "\" data-timestamp=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
              "\">\r\n\t<div class=\"message-header\">\r\n\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromUser'] : null), "md", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
              "</a>\r\n\t\t<strong><span class=\"chat-user\"><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['displayname'] : null)) + 
              "</a></span></strong>\r\n\t\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['banned'] : null) ?
                "\r\n\t\t<span class=\"label label-danger\">[[user:banned]]</span>\r\n\t\t" :
                "") + 
              "\r\n\t\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['deleted'] : null) ?
                "\r\n\t\t<span class=\"label label-danger\">[[user:deleted]]</span>\r\n\t\t" :
                "") + 
              "\r\n\t\t<span class=\"chat-timestamp timeago\" title=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestampISO'] : null)) + 
              "\"></span>\r\n\t\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['edited'] : null) ?
                "\r\n\t\t<div class=\"text-muted pull-right\" title=\"[[global:edited]] " + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['editedISO'] : null)) + 
                  "\"><i class=\"fa fa-edit\"></i></span></div>\r\n\t\t" :
                "") + 
              "\r\n\t</div>\r\n\t<div class=\"message-body-wrapper\">\r\n\t\t<div component=\"chat/message/body\" class=\"message-body\">\r\n\t\t\t" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
              "\r\n\t\t</div>\r\n\r\n\t\t" + 
              (guard((context != null && context['config'] != null) ? context['config']['disableChatMessageEditing'] : null) ?
                "" :
                "\r\n\t\t" + 
                  (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null) ?
                    "\r\n\t\t<div class=\"btn-group controls\">\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"edit\"><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"restore\"><i class=\"fa fa-repeat\"></i></button>\r\n\t\t\t" + 
                      (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
                        "\r\n\t\t\t<button class=\"btn btn-xs btn-link chat-ip\" title=\"[[modules:chat.show-ip]]\"><i class=\"fa fa-info-circle chat-ip-button\"></i></button>\r\n\t\t\t" :
                        "") + 
                      "\r\n\t\t</div>\r\n\t\t" :
                    "") + 
                  "\r\n\t\t") + 
              "\r\n\t</div>\r\n</li>\r\n\t") + 
          "\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
