
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
    return "<br />\r\n<label>[[admin/extend/widgets:title]]</label>\r\n<input type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"[[admin/extend/widgets:title.placeholder]]\" /><br />\r\n\r\n<label>[[admin/extend/widgets:container]]</label>\r\n<textarea rows=\"4\" class=\"form-control container-html\" name=\"container\" placeholder=\"[[admin/extend/widgets:container.placeholder]]\"></textarea>\r\n\r\n<br/>\r\n<div class=\"row\">\r\n\t<div class=\"col-lg-6\">\r\n\t\t<label>[[admin/extend/widgets:show-to-groups]]</label>\r\n\t\t<select name=\"groups\" class=\"form-control\" multiple size=\"10\">\r\n\t\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</select>\r\n\t</div>\r\n\t<div class=\"col-lg-6\">\r\n\t\t<label>[[admin/extend/widgets:hide-from-groups]]</label>\r\n\t\t<select name=\"groupsHideFrom\" class=\"form-control\" multiple size=\"10\">\r\n\t\t\t" + 
      iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\r\n\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n\t\t</select>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"checkbox\">\r\n<label><input name=\"hide-mobile\" type=\"checkbox\"> [[admin/extend/widgets:hide-on-mobile]]</input></label>\r\n</div>\r\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
