
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
    return "<div class=\"tags row\">\r\n\t<div class=\"col-lg-9\">\r\n\t\t<div class=\"panel panel-default tag-management\">\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<div class=\"alert alert-info\">\r\n\t\t\t\t\t<strong>[[admin/manage/tags:create-modify]]</strong>\r\n\t\t\t\t\t<p>[[admin/manage/tags:description]]</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t" + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t[[admin/manage/tags:none]]\r\n\t\t\t\t") + 
      "\r\n\r\n\t\t\t\t<div class=\"tag-list\">\r\n\t\t\t\t\t" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-lg-3 acp-sidebar\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<button class=\"btn btn-primary btn-block\" id=\"create\">[[admin/manage/tags:create]]</button>\r\n\t\t\t\t<button class=\"btn btn-primary btn-block\" id=\"modify\">[[admin/manage/tags:modify]]</button>\r\n\t\t\t\t<button class=\"btn btn-primary btn-block\" id=\"rename\">[[admin/manage/tags:rename]]</button>\r\n\t\t\t\t<button class=\"btn btn-warning btn-block\" id=\"deleteSelected\">[[admin/manage/tags:delete]]</button>\r\n\t\t\t\t<hr />\r\n\t\t\t\t<a class=\"btn btn-default btn-block\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/settings/tags\">\r\n\t\t\t\t\t<i class=\"fa fa-external-link\"></i>\r\n\t\t\t\t\t[[admin/manage/tags:settings]]\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"tag-search\" placeholder=\"[[admin/manage/tags:search]]\"/><br/>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"modal fade\" id=\"create-modal\">\r\n\t\t<div class=\"modal-dialog\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n\t\t\t\t\t<h4 class=\"modal-title\">[[admin/manage/tags:create]]</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"create-tag-name\">[[admin/manage/tags:name]]</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"create-tag-name\" placeholder=\"[[admin/manage/tags:name]]\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" id=\"create-modal-go\">[[admin/manage/tags:create]]</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"rename-modal hidden\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"value\">[[admin/manage/tags:name]]</label>\r\n\t\t\t<input id=\"value\" data-name=\"value\" value=\"\" class=\"form-control\" />\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<div class=\"tag-row\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<span class=\"mdl-chip mdl-chip--contact tag-item\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\" style=\"\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['color'] : null) ?
            "color: " + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['color'] : null)) + 
              ";" :
            "") + 
          "\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['bgColor'] : null) ?
            "background-color: " + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['bgColor'] : null)) + 
              ";" :
            "") + 
          "\">\r\n\t\t\t\t\t\t\t    <span class=\"mdl-chip__contact mdl-color--light-blue mdl-color-text--white tag-topic-count\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "</span>\r\n\t\t\t\t\t\t\t    <span class=\"mdl-chip__text\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"tag-modal hidden\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"bgColor\">[[admin/manage/tags:bg-color]]</label>\r\n\t\t\t\t\t\t\t\t<input type=\"color\" id=\"bgColor\" placeholder=\"#ffffff\" data-name=\"bgColor\" value=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['bgColor'] : null)) + 
          "\" class=\"form-control category_bgColor\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"color\">[[admin/manage/tags:text-color]]</label>\r\n\t\t\t\t\t\t\t\t<input type=\"color\" id=\"color\" placeholder=\"#a2a2a2\" data-name=\"color\" value=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['color'] : null)) + 
          "\" class=\"form-control category_color\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t<input id=\"reset-colors\" type=\"checkbox\"> <strong>[[admin/manage/tags:reset-colors]]</strong>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
