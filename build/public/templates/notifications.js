
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
    return "\r\n<div class=\"notifications\">\r\n\r\n\t" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\r\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\r\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\r\n</ol>\r\n" :
        "") + 
      "\r\n\r\n\r\n\t<div class=\"btn-toolbar\">\r\n\t\t<div class=\"dropdown pull-right\">\r\n\t\t\t<button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n\t\t\t\t<i class=\"fa fa-eye\"></i>\r\n\t\t\t\t<span class=\"caret\"></span>\r\n\t\t\t</button>\r\n\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\r\n\t\t\t\t<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" data-ajaxify=\"false\" component=\"notifications/mark_all\">[[notifications:mark_all_read]]</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"dropdown pull-right\">\r\n\t\t\t<button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t" + 
      (guard((context != null) ? context['selectedFilter'] : null) ?
        __escape(guard((context != null && context['selectedFilter'] != null) ? context['selectedFilter']['name'] : null)) :
        "") + 
      " <span class=\"caret\"></span>\r\n\t\t\t</button>\r\n\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t" + 
      compiled.blocks['filters'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<hr />\r\n\r\n\t<div class=\"alert alert-info " + 
      (guard((context != null && context['notifications'] != null) ? context['notifications']['length'] : null) ?
        "hidden" :
        "") + 
      "\">\r\n\t\t[[notifications:no_notifs]]\r\n\t</div>\r\n\r\n\t<ul class=\"notifications-list\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\r\n\t" + 
      compiled.blocks['notifications'](helpers, context, guard, iter, helper) + 
      "\r\n\t</ul>\r\n\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n</div>\r\n\r\n\r\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\r\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">") + 
          "\r\n\t\t\t<span itemprop=\"name\">\r\n\t\t\t\t" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\r\n\t\t\t\t" + 
          (index === length - 1 ?
            "\r\n\t\t\t\t" + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\r\n\t\t\t\t" + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</span>\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "</a>") + 
          "\r\n\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'filters': function filters(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['filters'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t" + 
          (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['separator'] : null) ?
            "\r\n\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t\t\t" :
            "\r\n\t\t\t\t<li role=\"presentation\" class=\"category\">\r\n\t\t\t\t\t<a role=\"menu-item\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/notifications?filter=" + 
              __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['filter'] : null)) + 
              "\"><i class=\"fa fa-fw " + 
              (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['selected'] : null) ?
                "fa-check" :
                "") + 
              "\"></i> " + 
              __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['name'] : null)) + 
              "</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t") + 
          "\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'notifications': function notifications(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notifications'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li data-nid=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['nid'] : null)) + 
          "\" class=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['readClass'] : null)) + 
          "\" component=\"notifications/item\">\r\n\t\t\t" + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null) ?
            "\r\n\t\t\t" + 
              (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['from'] : null) ?
                "\r\n\t\t\t<a class=\"pull-left\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['userslug'] : null)) + 
                  "\"><img class=\"user-img\" src=\"" + 
                  __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null)) + 
                  "\" /></a>\r\n\t\t\t" :
                "") + 
              "\r\n\t\t\t" :
            "\r\n\t\t\t<a class=\"pull-left\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['userslug'] : null)) + 
              "\"><div class=\"pull-left user-icon user-img\" style=\"background-color: " + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['icon:text'] : null)) + 
              "</div></a>\r\n\t\t\t") + 
          "\r\n\r\n\t\t\t<p>\r\n\t\t\t\t<a component=\"notifications/item/link\" href=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['path'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['bodyShort'] : null)) + 
          "</a>\r\n\t\t\t</p>\r\n\t\t\t<p class=\"timestamp\">\r\n\t\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['datetimeISO'] : null)) + 
          "\"></span>\r\n\t\t\t</p>\r\n\t\t</li>\r\n\t";
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
