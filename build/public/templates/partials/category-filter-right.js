
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
    return "<div component=\"category/dropdown\" class=\"btn-group pull-right category-dropdown-container bottom-sheet\">\r\n   <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n    " + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null) ? context['selectedCategory'] : null)])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['icon'] : null)) + 
          "\" style=\"color: " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['color'] : null)) + 
          ";\"></i></span> <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "</span>" :
        "\r\n    <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[unread:all_categories]]</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-list\"></i></span>") + 
      " <span class=\"caret\"></span>\r\n</button>\r\n<div component=\"category-selector-search\" class=\"hidden\">\r\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\r\n</div>\r\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\r\n    " + 
      (guard((context != null) ? context['allCategoriesUrl'] : null) ?
        "\r\n    <li role=\"presentation\" class=\"category\" data-all=\"all\">\r\n        <a role=\"menu-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null) ? context['allCategoriesUrl'] : null)) + 
          "\"><i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "invisible" :
            "") + 
          "\"></i> [[unread:all_categories]]</a>\r\n    </li>\r\n    " :
        "") + 
      "\r\n    " + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\r\n</ul>\r\n</div>";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\">\r\n        <a role=\"menu-item\" href=\"#\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "<i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i><span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i class=\"fa fa-fw fa-stack-1x " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null)) + 
              "\" style=\"color: " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['color'] : null)) + 
              ";\"></i></span>" :
            "") + 
          " " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "</span></a>\r\n    </li>\r\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
