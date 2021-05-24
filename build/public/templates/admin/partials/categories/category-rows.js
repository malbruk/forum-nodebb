
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
    return "<ul data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\r\n" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n<li class=\"children-placeholder\"></li>\r\n</ul>\r\n";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n    <li data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\" " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabled'] : null) ?
            "class=\"disabled\"" :
            "") + 
          ">\r\n        <div class=\"row category-row\">\r\n            <div class=\"col-md-9\">\r\n                <div class=\"clearfix\">\r\n                    <div class=\"toggle\">\r\n                        <i class=\"fa fa-minus\"></i>\r\n                    </div>\r\n                    <div class=\"information\">\r\n                        <div class=\"icon\" style=\"\r\n                            color: " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['color'] : null)) + 
          ";\r\n                            background-color: " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['bgColor'] : null)) + 
          ";\r\n                            " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['backgroundImage'] : null) ?
            "\r\n                            background-image: url('" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['backgroundImage'] : null)) + 
              "');\r\n                            " :
            "") + 
          "\r\n                        \">\r\n                            <i data-name=\"icon\" value=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null)) + 
          "\" class=\"fa " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null)) + 
          "\"></i>\r\n                        </div>\r\n                        <h5 class=\"category-header\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "</a> " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            "<small><a class=\"text-muted\" href=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
              "\"><i class=\"fa fa-link\"></i> " + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
              "</a></small>" :
            "") + 
          "</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"clearfix pull-right text-right\">\r\n                    <div class=\"btn-group category-tools\">\r\n                        <button class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></button>\r\n                        <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                            <li><a href=\"./categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">[[admin/manage/categories:edit]]</a></li>\r\n                            <li><a href=\"./categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "/analytics\">[[admin/manage/categories:analytics]]</a></li>\r\n                            <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/privileges/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">[[admin/manage/categories:privileges]]</a></li>\r\n\r\n                            <li><a href=\"" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) :
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null))) + 
          "\" target=\"_blank\">[[admin/manage/categories:view-category]]</a></li>\r\n\r\n                            <li>\r\n                                <a href=\"#\" data-disable-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-action=\"toggle\" data-disabled=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabled'] : null)) + 
          "\">\r\n                                " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabled'] : null) ?
            "\r\n                                [[admin/manage/categories:enable]]\r\n                                " :
            "\r\n                                [[admin/manage/categories:disable]]\r\n                                ") + 
          "\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\" class=\"set-order\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-order=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['order'] : null)) + 
          "\">[[admin/manage/categories:set-order]]</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
