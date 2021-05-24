
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
    return "<div class=\"clearfix post-header\">\r\n\t<div class=\"icon pull-left\">\r\n\t\t<a href=\"" + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null)) :
        "#") + 
      "\">\r\n\t\t\t" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null) ? context['posts']['user'] : null), "sm2x", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
      "\r\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['status'] : null)) + 
      "\" title=\"[[global:" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['status'] : null)) + 
      "]]\"></i>\r\n\t\t</a>\r\n\t</div>\r\n\r\n\t<small class=\"pull-left\">\r\n\t\t<strong>\r\n\t\t\t<a href=\"" + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null)) :
        "#") + 
      "\" itemprop=\"author\" data-username=\"" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['username'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['uid'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['displayname'] : null)) + 
      "</a>\r\n\t\t</strong>\r\n\r\n\t\t" + 
      compiled.blocks['posts.user.selectedGroups'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t" + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['banned'] : null) ?
        "\r\n\t\t<span class=\"label label-danger\">[[user:banned]]</span>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t<span class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\r\n\t\t\t" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['toPid'] : null) ?
        "\r\n\t\t\t<a component=\"post/parent\" class=\"btn btn-xs btn-default hidden-xs\" data-topid=\"" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['toPid'] : null)) + 
          "\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['toPid'] : null)) + 
          "\"><i class=\"fa fa-reply\"></i> @" + 
          (guard((context != null && context['posts'] != null && context['posts']['parent'] != null) ? context['posts']['parent']['username'] : null) ?
            __escape(guard((context != null && context['posts'] != null && context['posts']['parent'] != null) ? context['posts']['parent']['username'] : null)) :
            "[[global:guest]]") + 
          "</a>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t<span>\r\n\t\t\t\t" + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['custom_profile_info'] != null) ? context['posts']['user']['custom_profile_info']['length'] : null) ?
        "\r\n\t\t\t\t&#124;\r\n\t\t\t\t" + 
          compiled.blocks['posts.user.custom_profile_info'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t</span>\r\n\t\t</span>\r\n\r\n\t</small>\r\n\t<small class=\"pull-right\">\r\n\t\t<span class=\"bookmarked\"><i class=\"fa fa-bookmark-o\"></i></span>\r\n\t</small>\r\n\t<small class=\"pull-right\">\r\n\t\t<i component=\"post/edit-indicator\" class=\"fa fa-pencil-square" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['posts:history'] : null) ?
        " pointer" :
        "") + 
      " edit-icon " + 
      (guard((context != null && context['posts'] != null && context['posts']['editor'] != null) ? context['posts']['editor']['username'] : null) ?
        "" :
        "hidden") + 
      "\"></i>\r\n\r\n\t\t<small data-editor=\"" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['editor'] != null) ? context['posts']['editor']['userslug'] : null)) + 
      "\" component=\"post/editor\" class=\"hidden\">[[global:last_edited_by, " + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['editor'] != null) ? context['posts']['editor']['username'] : null)) + 
      "]] <span class=\"timeago\" title=\"" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['editedISO'] : null)) + 
      "\"></span></small>\r\n\r\n\t\t<span class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\r\n\t\t\t<a class=\"permalink\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/post/" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['pid'] : null)) + 
      "\"><span class=\"timeago\" title=\"" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['timestampISO'] : null)) + 
      "\"></span></a>\r\n\t\t</span>\r\n\t</small>\r\n</div>\r\n\r\n<br />\r\n\r\n<div class=\"content\" component=\"post/content\" itemprop=\"text\">\r\n\t" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['content'] : null)) + 
      "\r\n</div>\r\n\r\n<div class=\"post-footer\">\r\n\t" + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['signature'] : null) ?
        "\r\n\t<div component=\"post/signature\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['uid'] : null)) + 
          "\" class=\"post-signature\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['signature'] : null)) + 
          "</div>\r\n\t" :
        "") + 
      "\r\n\r\n\t<div class=\"clearfix\">\r\n\t" + 
      (guard((context != null) ? context['hideReplies'] : null) ?
        "" :
        "\r\n\t<a component=\"post/reply-count\" data-target-component=\"post/replies/container\" href=\"#\" class=\"threaded-replies no-select pull-left " + 
          (guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['count'] : null) ?
            "" :
            "hidden") + 
          "\">\r\n\t\t<span component=\"post/reply-count/avatars\" class=\"avatars " + 
          (guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['hasMore'] : null) ?
            "hasMore" :
            "") + 
          "\">\r\n\t\t\t" + 
          compiled.blocks['posts.replies.users'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t</span>\r\n\r\n\t\t<span class=\"replies-count\" component=\"post/reply-count/text\" data-replies=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['count'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['text'] : null)) + 
          "</span>\r\n\t\t<span class=\"replies-last hidden-xs\">[[topic:last_reply_time]] <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['timestampISO'] : null)) + 
          "\"></span></span>\r\n\r\n\t\t<i class=\"fa fa-fw fa-chevron-right\" component=\"post/replies/open\"></i>\r\n\t\t<i class=\"fa fa-fw fa-chevron-down hidden\" component=\"post/replies/close\"></i>\r\n\t\t<i class=\"fa fa-fw fa-spin fa-spinner hidden\" component=\"post/replies/loading\"></i>\r\n\t</a>\r\n\t") + 
      "\r\n\r\n\t<small class=\"pull-right\">\r\n\t\t<span class=\"post-tools\">\r\n\t\t\t<a component=\"post/reply\" href=\"#\" class=\"no-select " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">[[topic:reply]]</a>\r\n\t\t\t<a component=\"post/quote\" href=\"#\" class=\"no-select " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">[[topic:quote]]</a>\r\n\t\t</span>\r\n\r\n\t\t" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\r\n\t\t<span class=\"votes\">\r\n\t\t\t<a component=\"post/upvote\" href=\"#\" class=\"" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['upvoted'] : null) ?
            "upvoted" :
            "") + 
          "\">\r\n\t\t\t\t<i class=\"fa fa-chevron-up\"></i>\r\n\t\t\t</a>\r\n\r\n\t\t\t<span component=\"post/vote-count\" data-votes=\"" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['votes'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['votes'] : null)) + 
          "</span>\r\n\r\n\t\t\t" + 
          (guard((context != null) ? context['downvote:disabled'] : null) ?
            "" :
            "\r\n\t\t\t<a component=\"post/downvote\" href=\"#\" class=\"" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['downvoted'] : null) ?
                "downvoted" :
                "") + 
              "\">\r\n\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\r\n\t\t\t</a>\r\n\t\t\t") + 
          "\r\n\t\t</span>\r\n\t\t") + 
      "\r\n\r\n\t\t<span component=\"post/tools\" class=\"dropdown moderator-tools bottom-sheet " + 
      (guard((context != null && context['posts'] != null) ? context['posts']['display_post_menu'] : null) ?
        "" :
        "hidden") + 
      "\">\r\n\t<a href=\"#\" data-toggle=\"dropdown\" data-ajaxify=\"false\"><i class=\"fa fa-fw fa-ellipsis-v\"></i></a>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\"></ul>\r\n</span>\r\n\r\n\t</small>\r\n\t</div>\r\n\t<div component=\"post/replies/container\"></div>\r\n</div>";
  }

  compiled.blocks = {
    'posts.user.selectedGroups': function postsuserselectedGroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['selectedGroups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n" + 
          (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['slug'] : null) ?
            "\r\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/groups/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['slug'] : null)) + 
              "\"><small class=\"label group-label inline-block\" style=\"color:" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['textColor'] : null)) + 
              ";background-color: " + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['labelColor'] : null)) + 
              ";\">" + 
              (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['icon'] : null) ?
                "<i class=\"fa " + 
                  __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['icon'] : null)) + 
                  "\"></i> " :
                "") + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['userTitle'] : null)) + 
              "</small></a>\r\n" :
            "") + 
          "\r\n";
      }, function alt() {
        return "";
      });
    },
    'posts.user.custom_profile_info': function postsusercustom_profile_info(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['custom_profile_info'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['custom_profile_info'] != null && context['posts']['user']['custom_profile_info'][key0] != null) ? context['posts']['user']['custom_profile_info'][key0]['content'] : null)) + 
          "\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'posts.replies.users': function postsrepliesusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts']['replies'] != null && context['posts']['replies']['users'] != null) ? context['posts']['replies']['users'][key0] : null), "xs", guard((context != null) ? context['true'] : null), ""])) + 
          "\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
