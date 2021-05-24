
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
    return "<div class=\"row manage-users\">\r\n\t<div class=\"col-lg-12\">\r\n\t\t<div class=\"clearfix\">\r\n\r\n\t\t\t<div class=\"pull-left\">\r\n\t\t\t\t" + 
      (guard((context != null) ? context['showInviteButton'] : null) ?
        "\r\n\t\t\t\t<button component=\"user/invite\" class=\"btn btn-success\"><i class=\"fa fa-users\"></i> [[admin/manage/users:invite]]</button>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t<a target=\"_blank\" href=\"#\" class=\"btn btn-primary export-csv\">[[admin/manage/users:download-csv]]</a>\r\n\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">[[admin/manage/users:edit]] <span class=\"caret\"></span></button>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"validate-email\"><i class=\"fa fa-fw fa-check\"></i> [[admin/manage/users:validate-email]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"send-validation-email\"><i class=\"fa fa-fw fa-mail-forward\"></i> [[admin/manage/users:send-validation-email]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"password-reset-email\"><i class=\"fa fa-fw fa-key\"></i> [[admin/manage/users:password-reset-email]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"force-password-reset\"><i class=\"fa fa-fw fa-unlock-alt\"></i> [[admin/manage/users:force-password-reset]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"manage-groups\"><i class=\"fa fa-fw fa-users\"></i> [[admin/manage/users:manage-groups]]</a></li>\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"ban-user\"><i class=\"fa fa-fw fa-gavel\"></i> [[admin/manage/users:ban]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"ban-user-temporary\"><i class=\"fa fa-fw fa-clock-o\"></i> [[admin/manage/users:temp-ban]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"unban-user\"><i class=\"fa fa-fw fa-comment-o\"></i> [[admin/manage/users:unban]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"reset-lockout\"><i class=\"fa fa-fw fa-unlock\"></i> [[admin/manage/users:reset-lockout]]</a></li>\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"delete-user\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:delete]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"delete-user-content\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:delete-content]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"delete-user-and-content\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:purge]]</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"btn-group\" id=\"filter-by\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t[[admin/manage/users:filter-by]] <span class=\"caret\"></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t\t<li data-filter-by=\"unverified\" role=\"presentation\">\r\n\t\t\t\t\t\t\t<a role=\"menu-item\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_unverified'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.unvalidated]]</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li data-filter-by=\"verified\" role=\"presentation\">\r\n\t\t\t\t\t\t\t<a role=\"menu-item\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_verified'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.validated]]</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li data-filter-by=\"banned\" role=\"presentation\">\r\n\t\t\t\t\t\t\t<a role=\"menu-item\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_banned'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.banned]]</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<form class=\"form-inline pull-right\">\r\n\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" id=\"user-search\" value=\"" + 
      __escape(guard((context != null) ? context['query'] : null)) + 
      "\">\r\n\t\t\t\t\t<span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<select id=\"user-search-by\" class=\"form-control\">\r\n\t\t\t\t\t<option value=\"username\" " + 
      (guard((context != null) ? context['searchBy_username'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.username]]</option>\r\n\t\t\t\t\t<option value=\"email\" " + 
      (guard((context != null) ? context['searchBy_email'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.email]]</option>\r\n\t\t\t\t\t<option value=\"uid\" " + 
      (guard((context != null) ? context['searchBy_uid'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.uid]]</option>\r\n\t\t\t\t\t<option value=\"ip\" " + 
      (guard((context != null) ? context['searchBy_ip'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.ip]]</option>\r\n\t\t\t\t</select>\r\n\t\t\t\t<select id=\"results-per-page\" class=\"form-control\">\r\n\t\t\t\t\t<option value=\"50\">[[admin/manage/users:50-per-page]]</option>\r\n\t\t\t\t\t<option value=\"100\">[[admin/manage/users:100-per-page]]</option>\r\n\t\t\t\t\t<option value=\"250\">[[admin/manage/users:250-per-page]]</option>\r\n\t\t\t\t\t<option value=\"500\">[[admin/manage/users:500-per-page]]</option>\r\n\t\t\t\t</select>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<hr/>\r\n\r\n\t\t<div class=\"search " + 
      __escape(guard((context != null) ? context['search_display'] : null)) + 
      "\">\r\n\t\t\t<i class=\"fa fa-spinner fa-spin hidden\"></i>\r\n\r\n\t\t\t<div id=\"user-found-notify\" class=\"label label-info " + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "" :
        "hidden") + 
      "\">[[admin/manage/users:alerts.x-users-found, " + 
      __escape(guard((context != null) ? context['matchCount'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['timing'] : null)) + 
      "]]</div>\r\n\r\n\t\t\t<div id=\"user-notfound-notify\" class=\"label label-danger " + 
      (guard((context != null) ? context['query'] : null) ?
        "" :
        "hidden") + 
      " " + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "hidden" :
        "") + 
      "\">[[admin/manage/users:search.not-found]]</div>\r\n\t\t</div>\r\n\r\n\t\t" + 
      (guard((context != null) ? context['inactive'] : null) ?
        "\r\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/users/inactive?months=3&resultsPerPage=" + 
          __escape(guard((context != null) ? context['resultsPerPage'] : null)) + 
          "\" class=\"btn btn-default\">[[admin/manage/users:inactive.3-months]]</a>\r\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/users/inactive?months=6&resultsPerPage=" + 
          __escape(guard((context != null) ? context['resultsPerPage'] : null)) + 
          "\" class=\"btn btn-default\">[[admin/manage/users:inactive.6-months]]</a>\r\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/users/inactive?months=12&resultsPerPage=" + 
          __escape(guard((context != null) ? context['resultsPerPage'] : null)) + 
          "\" class=\"btn btn-default\">[[admin/manage/users:inactive.12-months]]</a>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t<div class=\"table-responsive\">\r\n\t\t\t<table class=\"table table-striped users-table\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th><input component=\"user/select/all\" type=\"checkbox\"/></th>\r\n\t\t\t\t\t\t<th class=\"text-right text-muted\">[[admin/manage/users:users.uid]]</th>\r\n\t\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.username]]</th>\r\n\t\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.email]]</th>\r\n\t\t\t\t\t\t<th data-sort=\"postcount\" class=\"text-right pointer\">[[admin/manage/users:users.postcount]] " + 
      (guard((context != null) ? context['sort_postcount'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\r\n\t\t\t\t\t\t<th data-sort=\"reputation\" class=\"text-right pointer\">[[admin/manage/users:users.reputation]] " + 
      (guard((context != null) ? context['sort_reputation'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\r\n\t\t\t\t\t\t<th data-sort=\"flags\" class=\"text-right pointer\">[[admin/manage/users:users.flags]] " + 
      (guard((context != null) ? context['sort_flags'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\r\n\t\t\t\t\t\t<th data-sort=\"joindate\" class=\"pointer\">[[admin/manage/users:users.joined]] " + 
      (guard((context != null) ? context['sort_joindate'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\r\n\t\t\t\t\t\t<th data-sort=\"lastonline\" class=\"pointer\">[[admin/manage/users:users.last-online]] " + 
      (guard((context != null) ? context['sort_lastonline'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\r\n\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\r\n\t<ul class=\"pagination hidden-xs\">\r\n\t\t<li class=\"previous pull-left" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t<li class=\"next pull-right" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<ul class=\"pagination hidden-sm hidden-md hidden-lg\">\r\n\t\t<li class=\"first" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
      "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"previous" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t<a href=\"#\">" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
      " / " + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"next" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"last" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n<button data-action=\"create\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n    <i class=\"material-icons\">add</i>\r\n</button>";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<tr class=\"user-row\">\r\n\t\t\t\t\t\t<th><input component=\"user/select/single\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\" type=\"checkbox\"/></th>\r\n\t\t\t\t\t\t<td class=\"text-right\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "</td>\r\n\t\t\t\t\t\t<td><i title=\"[[admin/manage/users:users.banned]]\" class=\"ban fa fa-gavel text-danger" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['banned'] : null) ?
            "" :
            " hidden") + 
          "\"></i><i class=\"administrator fa fa-shield text-success" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['administrator'] : null) ?
            "" :
            " hidden") + 
          "\"></i><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\"> " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a></td>\r\n\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<i class=\"validated fa fa-check text-success" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:confirmed'] : null) ?
            "" :
            " hidden") + 
          "\" title=\"validated\"></i>\r\n\t\t\t\t\t\t<i class=\"notvalidated fa fa-check text-muted" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:confirmed'] : null) ?
            " hidden" :
            "") + 
          "\" title=\"not validated\"></i>\r\n\t\t\t\t\t\t " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null)) + 
          "</td>\r\n\t\t\t\t\t\t<td class=\"text-right\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)) + 
          "</td>\r\n\t\t\t\t\t\t<td class=\"text-right\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)) + 
          "</td>\r\n\t\t\t\t\t\t<td class=\"text-right\">" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null) ?
            __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)) :
            "0") + 
          "</td>\r\n\t\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
          "\"></span></td>\r\n\t\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['lastonlineISO'] : null)) + 
          "\"></span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\r\n\t\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\r\n\t\t\t</li>\r\n\t\t\t" :
            "\r\n\t\t\t<li class=\"page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\r\n\t\t\t\t<a href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\r\n\t\t\t</li>\r\n\t\t\t") + 
          "\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
