
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
    return compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\r\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li data-name=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">\r\n\t<div class=\"btn-group pull-right\">\r\n\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t\tPrivileges <span class=\"caret\"></span>\r\n\t\t</button>\r\n\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:find\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:find'] : null) ?
            "active" :
            "") + 
          "\">Find Category</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:read\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:read'] : null) ?
            "active" :
            "") + 
          "\">Access Category</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:topics:read\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:topics:read'] : null) ?
            "active" :
            "") + 
          "\">Access Topics</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:topics:create\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:topics:create'] : null) ?
            "active" :
            "") + 
          "\">Create Topics</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:topics:reply\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:topics:reply'] : null) ?
            "active" :
            "") + 
          "\">Reply to Topics</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:posts:edit\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:posts:edit'] : null) ?
            "active" :
            "") + 
          "\">Edit Posts</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:posts:delete\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:posts:delete'] : null) ?
            "active" :
            "") + 
          "\">Delete Posts</a></li>\r\n\t\t\t<li role=\"presentation\"><a href=\"#\" data-priv=\"groups:topics:delete\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:topics:delete'] : null) ?
            "active" :
            "") + 
          "\">Delete Topics</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
