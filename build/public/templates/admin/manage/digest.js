
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
    return "<p class=\"lead\">[[admin/manage/digest:lead]]</p>\r\n<p>[[admin/manage/digest:disclaimer]]</p>\r\n<p>[[admin/manage/digest:disclaimer-continued]]</p>\r\n\r\n<hr />\r\n\r\n<table class=\"table table-striped\">\r\n\t<thead>\r\n\t\t<th>[[admin/manage/digest:user]]</th>\r\n\t\t<th>[[admin/manage/digest:subscription]]</th>\r\n\t\t<th>[[admin/manage/digest:last-delivery]]</th>\r\n\t\t<th></th>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t" + 
      compiled.blocks['delivery'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t" + 
      (guard((context != null && context['delivery'] != null) ? context['delivery']['length'] : null) ?
        "" :
        "\r\n\t\t<tr>\r\n\t\t\t<td colspan=\"4\">\r\n\t\t\t\t<div class=\"alert alert-success\">\r\n\t\t\t\t\t[[admin/manage/digest:no-delivery-data]]\r\n\t\t\t\t</div>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t") + 
      "\r\n\t</tbody>\r\n\t<tfoot>\r\n\t\t<tr>\r\n\t\t\t<td colspan=\"4\"><div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td colspan=\"4\">\r\n\t\t\t\t<em>[[admin/manage/digest:default-help, " + 
      __escape(guard((context != null) ? context['default'] : null)) + 
      "]]</em>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td colspan=\"4\">\r\n\t\t\t\t[[admin/manage/digest:manual-run]]\r\n\t\t\t\t<button class=\"btn btn-xs btn-default\" data-action=\"resend-day\">[[admin/settings/user:digest-freq.daily]]</button>\r\n\t\t\t\t<button class=\"btn btn-xs btn-default\" data-action=\"resend-week\">[[admin/settings/user:digest-freq.weekly]]</button>\r\n\t\t\t\t<button class=\"btn btn-xs btn-default\" data-action=\"resend-month\">[[admin/settings/user:digest-freq.monthly]]</button>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tfoot>\r\n</table>\r\n";
  }

  compiled.blocks = {
    'delivery': function delivery(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['delivery'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<tr>\r\n\t\t\t<td><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['delivery'] != null) ? context['delivery'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['username'] : null)) + 
          "</a></td>\r\n\t\t\t<td>" + 
          (guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['setting'] : null) ?
            __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['setting'] : null)) :
            "<em>[[admin/manage/digest:default]]</em>") + 
          "</td>\r\n\t\t\t<td>" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['lastDelivery'] : null)) + 
          "</td>\r\n\t\t\t<td><button class=\"btn btn-xs btn-default\" data-action=\"resend\" data-uid=\"" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['uid'] : null)) + 
          "\">[[admin/manage/digest:resend]]</button></td>\r\n\t\t</tr>\r\n\t\t";
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
