
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
    return "<div class=\"row\">\r\n\t<div class=\"col-lg-9\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-6 text-center\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div><canvas id=\"not-found\" height=\"250\"></canvas></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-footer\"><small>\r\n\t\t\t\t\t\t<strong>[[admin/advanced/errors:figure-x, 1]]</strong> &ndash; \r\n\t\t\t\t\t\t[[admin/advanced/errors:error-events-per-day, [[admin/advanced/errors:error.404]]]]\r\n\t\t\t\t\t</small></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-6 text-center\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div><canvas id=\"toobusy\" height=\"250\"></canvas></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-footer\"><small>\r\n\t\t\t\t\t\t<strong>[[admin/advanced/errors:figure-x, 2]]</strong> &ndash; \r\n\t\t\t\t\t\t[[admin/advanced/errors:error-events-per-day, [[admin/advanced/errors:error.503]]]]\r\n\t\t\t\t\t</small></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-3 acp-sidebar\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">[[admin/advanced/errors:manage-error-log]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<div class=\"btn-group-vertical btn-block\" role=\"group\">\r\n\t\t\t\t\t<a class=\"btn btn-info\" target=\"_top\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/advanced/errors/export\">\r\n\t\t\t\t\t\t<i class=\"fa fa-download\"></i> [[admin/advanced/errors:export-error-log]]\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<button class=\"btn btn-danger\" data-action=\"clear\">\r\n\t\t\t\t\t\t<i class=\"fa fa-trash\"></i> [[admin/advanced/errors:clear-error-log]]\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xs-12\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<i class=\"fa fa-exclamation-triangle\"></i> [[admin/advanced/errors:error.404]]\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<th>[[admin/advanced/errors:route]]</th>\r\n\t\t\t\t\t\t<th>[[admin/advanced/errors:count]]</th>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t" + 
      compiled.blocks['not-found'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t" + 
      (guard((context != null && context['not-found'] != null) ? context['not-found']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-success\">\r\n\t\t\t\t\t\t\t\t\t[[admin/advanced/errors:no-routes-not-found]]\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'not-found': function notfound(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['not-found'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['not-found'] != null && context['not-found'][key0] != null) ? context['not-found'][key0]['value'] : null)) + 
          "</td>\r\n\t\t\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['not-found'] != null && context['not-found'][key0] != null) ? context['not-found'][key0]['score'] : null)) + 
          "</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
