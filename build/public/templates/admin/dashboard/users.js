
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
    return "<div class=\"dashboard\">\r\n\t<div class=\"col-xs-12\">\r\n\t\t<a class=\"btn btn-link\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/dashboard\">\r\n\t\t\t<i class=\"fa fa-chevron-left\"></i>\r\n\t\t\t[[admin/dashboard:back-to-dashboard]]\r\n\t\t</a>\r\n\r\n\t\t<div class=\"panel panel-default\" id=\"analytics-panel\">\r\n\t<div class=\"panel-heading\">\r\n\t\t[[admin/dashboard:forum-traffic]]\r\n\t\t<div class=\"pull-right\">\r\n\t\t\t<a id=\"view-as-json\" href=\"" + 
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
      "</strong></div>\r\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"hours\" data-amount=\"24\">[[admin/dashboard:page-views-last-day]]</a></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3 text-center pageview-stats\">\r\n\t\t\t\t<div><strong><i class=\"fa fa-clock-o\"></i></strong></div>\r\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"custom\">[[admin/dashboard:page-views-custom]]</a></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\t\t<div class=\"table-responsive\">\r\n\t<table class=\"table table-striped\">\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\t\t\t\t<th></th>\r\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.yesterday]]</th>\r\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.today]]</th>\r\n\t\t\t\t<th></th>\r\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.last-week]]</th>\r\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.this-week]]</th>\r\n\t\t\t\t<th></th>\r\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.last-month]]</th>\r\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.this-month]]</th>\r\n\t\t\t\t<th></th>\r\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.all]]</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t" + 
      compiled.blocks['stats'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n\r\n\t\t<table class=\"table table-striped users-list\">\r\n\t\t\t<thead>\r\n\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.uid]]</th>\r\n\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.username]]</th>\r\n\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.email]]</th>\r\n\t\t\t\t<th data-sort=\"joindate\">[[admin/manage/users:users.joined]]</th>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t" + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td colspan=4\" class=\"text-center\"><em>[[admin/dashboard:details.no-logins]]</em></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t") + 
      "\r\n\t\t\t\t" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'stats': function stats(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['stats'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<strong>\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null) ?
            "\r\n\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "</a>\r\n\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t</strong>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['yesterday'] : null)) + 
          "</td>\r\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['today'] : null)) + 
          "</td>\r\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayIncrease'] : null)) + 
          "%</small></td>\r\n\r\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastweek'] : null)) + 
          "</td>\r\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thisweek'] : null)) + 
          "</td>\r\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekIncrease'] : null)) + 
          "%</small></td>\r\n\r\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastmonth'] : null)) + 
          "</td>\r\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thismonth'] : null)) + 
          "</td>\r\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthIncrease'] : null)) + 
          "%</small></td>\r\n\r\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['alltime'] : null)) + 
          "</td>\r\n\t\t\t</tr>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "</td>\r\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</td>\r\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null)) + 
          "</td>\r\n\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
          "\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
