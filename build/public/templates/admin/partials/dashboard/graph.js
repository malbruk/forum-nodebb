
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
    return "<div class=\"panel panel-default\" id=\"analytics-panel\">\r\n\t<div class=\"panel-heading\">\r\n\t\t[[admin/dashboard:forum-traffic]]\r\n\t\t<div class=\"pull-right\">\r\n\t\t\t<a id=\"view-as-json\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/v3/admin/analytics/" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "?type=hourly\"><i class=\"fa fa-terminal\"></i></a>\r\n\t\t\t<i class=\"fa fa-expand\"></i>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<div class=\"graph-container\" id=\"analytics-traffic-container\">\r\n\t\t\t<canvas id=\"analytics-traffic\" width=\"100%\" height=\"400\"></canvas>\r\n\t\t</div>\r\n\t\t<hr/>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\r\n\t\t\t\t<div><strong id=\"pageViewsThirty\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['month'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['month'] : null)) :
        "0") + 
      "</strong></div>\r\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"30\">[[admin/dashboard:page-views-thirty]]</a></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3 text-center pageview-stats\">\r\n\t\t\t\t<div><strong id=\"pageViewsSeven\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['week'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['week'] : null)) :
        "0") + 
      "</strong></div>\r\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"7\">[[admin/dashboard:page-views-seven]]</a></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\r\n\t\t\t\t<div><strong id=\"pageViewsPastDay\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['day'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['day'] : null)) :
        "0") + 
      "</strong></div>\r\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"hours\" data-amount=\"24\">[[admin/dashboard:page-views-last-day]]</a></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3 text-center pageview-stats\">\r\n\t\t\t\t<div><strong><i class=\"fa fa-clock-o\"></i></strong></div>\r\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"custom\">[[admin/dashboard:page-views-custom]]</a></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
