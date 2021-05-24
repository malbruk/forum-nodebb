
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
    return compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\r\n";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">\r\n\t<div class=\"btn-group pull-right\">\r\n\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t\tPrivileges <span class=\"caret\"></span>\r\n\t\t</button>\r\n\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"find\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['find'] : null) ?
            "active" :
            "") + 
          "\">Find Category</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"read\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['read'] : null) ?
            "active" :
            "") + 
          "\">Access Category</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"topics:read\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['topics:read'] : null) ?
            "active" :
            "") + 
          "\">Access Topics</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"topics:create\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['topics:create'] : null) ?
            "active" :
            "") + 
          "\">Create Topics</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"topics:reply\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['topics:reply'] : null) ?
            "active" :
            "") + 
          "\">Reply to Topics</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"posts:edit\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['posts:edit'] : null) ?
            "active" :
            "") + 
          "\">Edit Posts</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"posts:delete\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['posts:delete'] : null) ?
            "active" :
            "") + 
          "\">Delete Posts</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"topics:delete\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['topics:delete'] : null) ?
            "active" :
            "") + 
          "\">Delete Topics</a></li>\r\n\t\t\t<li role=\"presentation\" class=\"divider\"></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"mods\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['mods'] : null) ?
            "active" :
            "") + 
          "\">Moderator</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<img src=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['picture'] : null)) + 
          "\" /> " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
