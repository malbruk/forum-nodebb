
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
    return "<div class=\"row events\">\r\n\t<div class=\"col-lg-9\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\"><i class=\"fa fa-calendar-o\"></i> [[admin/advanced/events:events]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t" + 
      (guard((context != null && context['events'] != null) ? context['events']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t<div class=\"alert alert-info\">[[admin/advanced/events:no-events]]</div>\r\n\t\t\t\t") + 
      "\r\n\t\t\t\t<div class=\"events-list\">\r\n\t\t\t\t" + 
      compiled.blocks['events'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-3 acp-sidebar\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">[[admin/advanced/events:filters]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<form role=\"form\" id=\"filters\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"type\">[[admin/advanced/events:filter-type]]</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" id=\"type\" name=\"type\" class=\"form-control\">\r\n\t\t\t\t\t\t\t" + 
      compiled.blocks['types'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"start\">[[admin/advanced/events:filter-start]]</label>\r\n\t\t\t\t\t\t<input type=\"date\" id=\"start\" name=\"start\" value=\"" + 
      __escape(guard((context != null && context['query'] != null) ? context['query']['start'] : null)) + 
      "\" class=\"form-control\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"end\">[[admin/advanced/events:filter-end]]</label>\r\n\t\t\t\t\t\t<input type=\"date\" id=\"end\" name=\"end\" value=\"" + 
      __escape(guard((context != null && context['query'] != null) ? context['query']['end'] : null)) + 
      "\" class=\"form-control\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"perPage\">[[admin/advanced/events:filter-perPage]]</label>\r\n\t\t\t\t\t\t<input type=\"text\" id=\"perPage\" name=\"perPage\" value=\"" + 
      __escape(guard((context != null && context['query'] != null) ? context['query']['perPage'] : null)) + 
      "\" class=\"form-control\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block\" id=\"apply\">[[admin/advanced/events:filters-apply]]</button>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<button class=\"btn btn-block btn-danger\" data-action=\"clear\">\r\n\t\t\t\t\t<i class=\"fa fa-eraser\"></i> [[admin/advanced/events:delete-events]]\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    'events': function events(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['events'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<div data-eid=\"" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['eid'] : null)) + 
          "\">\r\n\t\t\t\t\t<span class=\"label label-default\">#" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['eid'] : null)) + 
          "</span>\r\n\t\t\t\t\t<span class=\"label label-info\">" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['type'] : null)) + 
          "</span>\r\n\t\t\t\t\t<span class=\"label label-default\">uid " + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['uid'] : null)) + 
          "</span>\r\n\t\t\t\t\t" + 
          (guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['ip'] : null) ?
            "<span class=\"label label-default\">" + 
              __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['ip'] : null)) + 
              "</span>" :
            "") + 
          "\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['userslug'] : null)) + 
          "\" target=\"_blank\">\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['picture'] : null) ?
            "\r\n\t\t\t\t\t\t<img class=\"avatar avatar-xs\" src=\"" + 
              __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['picture'] : null)) + 
              "\" />\r\n\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t<div class=\"avatar avatar-xs\" style=\"background-color: " + 
              __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['icon:text'] : null)) + 
              "</div>\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['userslug'] : null)) + 
          "\" target=\"_blank\">" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['username'] : null)) + 
          "</a>\r\n\t\t\t\t\t<span class=\"pull-right delete-event\"><i class=\"fa fa-trash-o\"></i></span>\r\n\t\t\t\t\t<span class=\"pull-right\">" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['timestampISO'] : null)) + 
          "</span>\r\n\t\t\t\t\t<pre class=\"well\">" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['jsonString'] : null)) + 
          "</pre>\r\n\t\t\t\t</div>\r\n\t\t\t\t";
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
    },
    'types': function types(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['types'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['types'] != null && context['types'][key0] != null) ? context['types'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['types'] != null && context['types'][key0] != null) ? context['types'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['types'] != null && context['types'][key0] != null) ? context['types'][key0]['name'] : null)) + 
          "</option>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
