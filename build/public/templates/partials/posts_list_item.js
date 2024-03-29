
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
    return "<li component=\"post\" class=\"posts-list-item row" + 
      (guard((context != null) ? context['deleted'] : null) ?
        " deleted" :
        (guard((context != null && context['topic'] != null) ? context['topic']['deleted'] : null) ?
            " deleted" :
            "")) + 
      (guard((context != null && context['topic'] != null) ? context['topic']['scheduled'] : null) ?
        " scheduled" :
        "") + 
      "\" data-pid=\"" + 
      __escape(guard((context != null) ? context['pid'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\">\n    <div class=\"col-lg-11 col-sm-10 col-xs-9 post-body\">\n        <a class=\"topic-title\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/post/" + 
      __escape(guard((context != null) ? context['pid'] : null)) + 
      "\">\n            " + 
      (guard((context != null) ? context['isMainPost'] : null) ?
        "" :
        "RE: ") + 
      __escape(guard((context != null && context['topic'] != null) ? context['topic']['title'] : null)) + 
      "\n        </a>\n\n        <div component=\"post/content\" class=\"content\">\n            " + 
      __escape(guard((context != null) ? context['content'] : null)) + 
      "\n        </div>\n\n        <small class=\"topic-category\"><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/category/" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['slug'] : null)) + 
      "\">[[global:posted_in, " + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['name'] : null)) + 
      "]]</a></small>\n\n        <div class=\"post-info\">\n            <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "md", guard((context != null) ? context['true'] : null), "user-img"])) + 
      "</a>\n\n            <div class=\"post-author\">\n                <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['displayname'] : null)) + 
      "</a><br />\n                <span class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "\"></span>\n            </div>\n        </div>\n    </div>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
