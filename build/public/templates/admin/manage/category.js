
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
    return "<div class=\"category\" data-cid=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-3 pull-right\">\r\n\t\t\t<div component=\"category-selector\" class=\"btn-group bottom-sheet\">\r\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n    <span component=\"category-selector-selected\">" + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null) ? context['selectedCategory'] : null)])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['icon'] : null)) + 
          "\" style=\"color: " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['color'] : null)) + 
          ";\"></i></span> " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) :
        "\r\n    " + 
          (guard((context != null) ? context['selectCategoryLabel'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
            "[[topic:thread_tools.select_category]]")) + 
      "</span> <span class=\"caret\"></span>\r\n</button>\r\n<div component=\"category-selector-search\" class=\"hidden\">\r\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\r\n</div>\r\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\r\n    <li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\r\n        <a role=\"menu-item\">[[search:no-matches]]</a>\r\n    </li>\r\n    " + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\r\n</ul>\r\n</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<br/>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-9\" id=\"category-settings\">\r\n\t\t\t<div class=\"category-settings-form\">\r\n\t\t\t\t<fieldset>\r\n\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-name\">\r\n\t\t\t\t\t\t[[admin/manage/categories:name]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-name\" type=\"text\" class=\"form-control\" placeholder=\"[[admin/manage/categories:name]]\" data-name=\"name\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['name'] : null)) + 
      "\" /><br />\r\n\r\n\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-description\">\r\n\t\t\t\t\t\t[[admin/manage/categories:description]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-description\" data-name=\"description\" placeholder=\"[[admin/manage/categories:description]]\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['description'] : null)) + 
      "\" class=\"form-control category_description description\" /><br />\r\n\t\t\t\t</fieldset>\r\n\r\n\t\t\t\t<fieldset class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-bgColor\">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:bg-color]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input type=\"color\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-bgColor\" placeholder=\"#0059b2\" data-name=\"bgColor\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['bgColor'] : null)) + 
      "\" class=\"form-control category_bgColor\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-color\">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:text-color]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input type=\"color\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-color\" placeholder=\"#ffffff\" data-name=\"color\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['color'] : null)) + 
      "\" class=\"form-control category_color\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-imageClass\">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:bg-image-size]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<select id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-imageClass\" class=\"form-control\" data-name=\"imageClass\" data-value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['imageClass'] : null)) + 
      "\">\r\n\t\t\t\t\t\t\t\t<option value=\"auto\">auto</option>\r\n\t\t\t\t\t\t\t\t<option value=\"cover\">cover</option>\r\n\t\t\t\t\t\t\t\t<option value=\"contain\">contain</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div><br />\r\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-class\">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:custom-class]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input list=\"customClasses\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-class\" type=\"text\" class=\"form-control\" placeholder=\"" + 
      (guard((context != null && context['customClasses'] != null) ? context['customClasses']['length'] : null) ?
        compiled.blocks['customClasses'](helpers, context, guard, iter, helper) :
        "col-md-6 col-xs-6") + 
      "\" data-name=\"class\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['class'] : null)) + 
      "\" />\r\n\t\t\t\t\t\t\t<datalist id=\"customClasses\">\r\n\t\t\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['customClasses'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t<option>" + 
          __escape(guard(value)) + 
          "</option>\r\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n\t\t\t\t\t\t\t</datalist>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-numRecentReplies\">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:num-recent-replies]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-numRecentReplies\" type=\"text\" class=\"form-control\" placeholder=\"2\" data-name=\"numRecentReplies\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['numRecentReplies'] : null)) + 
      "\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-link\">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:ext-link]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-link\" type=\"text\" class=\"form-control\" placeholder=\"http://domain.com\" data-name=\"link\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['link'] : null)) + 
      "\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fieldset>\r\n\t\t\t\t<fieldset class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"cid-subcategories-per-page\">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:subcategories-per-page]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input id=\"cid-subcategories-per-page\" type=\"text\" class=\"form-control\" data-name=\"subCategoriesPerPage\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['subCategoriesPerPage'] : null)) + 
      "\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"cid-min-tags\">\r\n\t\t\t\t\t\t\t\t[[admin/settings/tags:min-per-topic]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input id=\"cid-min-tags\" type=\"text\" class=\"form-control\" data-name=\"minTags\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['minTags'] : null)) + 
      "\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"cid-max-tags\">\r\n\t\t\t\t\t\t\t\t[[admin/settings/tags:max-per-topic]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input id=\"cid-max-tags\" type=\"text\" class=\"form-control\" data-name=\"maxTags\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['maxTags'] : null)) + 
      "\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fieldset>\r\n\t\t\t\t<fieldset class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"tag-whitelist\">[[admin/manage/categories:tag-whitelist]]</label><br />\r\n\t\t\t\t\t\t\t<input id=\"tag-whitelist\" type=\"text\" class=\"form-control\" data-name=\"tagWhitelist\" value=\"\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fieldset>\r\n\t\t\t\t<fieldset class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-isSection\" data-name=\"isSection\" " + 
      (guard((context != null && context['category'] != null) ? context['category']['isSection'] : null) ?
        "checked" :
        "") + 
      " />\r\n\t\t\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/manage/categories:is-section]]</strong></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['postQueueEnabled'] : null) ?
        "\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" data-name=\"postQueue\" " + 
          (guard((context != null && context['category'] != null) ? context['category']['postQueue'] : null) ?
            "checked" :
            "") + 
          " />\r\n\t\t\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/manage/categories:post-queue]]</strong></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t</fieldset>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-3 options acp-sidebar\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<div class=\"category-preview\" style=\"\r\n\t\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null) ?
        "background-image: url(" + 
          __escape(guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null)) + 
          ");" :
        "") + 
      "\r\n\t\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['bgColor'] : null) ?
        "background-color: " + 
          __escape(guard((context != null && context['category'] != null) ? context['category']['bgColor'] : null)) + 
          ";" :
        "") + 
      "\r\n\t\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['imageClass'] : null) ?
        "background-size: " + 
          __escape(guard((context != null && context['category'] != null) ? context['category']['imageClass'] : null)) + 
          ";" :
        "") + 
      "\r\n\t\t\t\t\t\tcolor: " + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['color'] : null)) + 
      ";\r\n\t\t\t\t\t\">\r\n\t\t\t\t\t\t<div class=\"icon\">\r\n\t\t\t\t\t\t\t<i data-name=\"icon\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['icon'] : null)) + 
      "\" class=\"fa " + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['icon'] : null)) + 
      " fa-2x\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"btn-group btn-group-justified\">\r\n\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t<button type=\"button\" data-cid=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\" class=\"btn btn-default upload-button\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-upload\"></i>\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:upload-image]]\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null) ?
        "\r\n\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-warning delete-image\">\r\n\t\t\t\t\t\t\t\t<i data-name=\"icon\" value=\"fa-times\" class=\"fa fa-times\"></i>\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:delete-image]]\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t</div><br />\r\n\r\n\t\t\t\t\t<fieldset>\r\n\t\t\t\t\t\t<div class=\"form-group text-center\">\r\n\t\t\t\t\t\t\t<label for=\"category-image\">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:category-image]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t<input id=\"category-image\" type=\"text\" class=\"form-control\" placeholder=\"[[admin/manage/categories:category-image]]\" data-name=\"backgroundImage\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null)) + 
      "\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</fieldset>\r\n\r\n\t\t\t\t\t<fieldset>\r\n\t\t\t\t\t\t<div class=\"form-group text-center\">\r\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-parentCid\">[[admin/manage/categories:parent-category]]</label>\r\n\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t<div class=\"btn-group " + 
      (guard((context != null && context['category'] != null && context['category']['parent'] != null) ? context['category']['parent']['name'] : null) ?
        "" :
        "hide") + 
      "\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-action=\"changeParent\" data-parentCid=\"" + 
      __escape(guard((context != null && context['category'] != null && context['category']['parent'] != null) ? context['category']['parent']['cid'] : null)) + 
      "\"><i class=\"fa " + 
      __escape(guard((context != null && context['category'] != null && context['category']['parent'] != null) ? context['category']['parent']['icon'] : null)) + 
      "\"></i> " + 
      __escape(guard((context != null && context['category'] != null && context['category']['parent'] != null) ? context['category']['parent']['name'] : null)) + 
      "</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" data-action=\"removeParent\" data-parentCid=\"" + 
      __escape(guard((context != null && context['category'] != null && context['category']['parent'] != null) ? context['category']['parent']['cid'] : null)) + 
      "\"><i class=\"fa fa-times\"></i></button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-block " + 
      (guard((context != null && context['category'] != null && context['category']['parent'] != null) ? context['category']['parent']['name'] : null) ?
        "hide" :
        "") + 
      "\" data-action=\"setParent\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-sitemap\"></i>\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:parent-category-none]]\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</fieldset>\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/privileges/" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\" class=\"btn btn-info btn-block\">\r\n\t\t\t\t\t\t<i class=\"fa fa-gear\"></i> [[admin/manage/privileges:edit-privileges]]\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/category/" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\" class=\"btn btn-info btn-block\">\r\n\t\t\t\t\t\t<i class=\"fa fa-eye\"></i> [[admin/manage/categories:view-category]]\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<button class=\"btn btn-info btn-block copy-settings\">\r\n\t\t\t\t\t\t<i class=\"fa fa-files-o\"></i> [[admin/manage/categories:copy-settings]]\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<hr />\r\n\t\t\t\t\t<button data-action=\"toggle\" data-disabled=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['disabled'] : null)) + 
      "\" class=\"btn btn-sm btn-block " + 
      (guard((context != null && context['category'] != null) ? context['category']['disabled'] : null) ?
        "btn-primary" :
        "btn-danger") + 
      "\">\r\n\t\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['disabled'] : null) ?
        "\r\n\t\t\t\t\t\t[[admin/manage/categories:enable]]\r\n\t\t\t\t\t\t" :
        "\r\n\t\t\t\t\t\t[[admin/manage/categories:disable]]\r\n\t\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button class=\"btn btn-danger btn-block purge\">\r\n\t\t\t\t\t\t<i class=\"fa fa-eraser\"></i> [[admin/manage/categories:purge]]\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n    <i class=\"material-icons\">save</i>\r\n</button>\r\n";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\r\n        <a role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i style=\"color: " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['color'] : null)) + 
              ";\" class=\"fa fa-stack-1x fa-fw " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null)) + 
              "\"></i></span>" :
            "") + 
          " " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "</span></a>\r\n    </li>\r\n    ";
      }, function alt() {
        return "";
      });
    },
    'customClasses': function customClasses(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['customClasses'] : null), function each(key0, index, length, value) {
        var key = key0;
        return (index === 0 ?
            __escape(guard(value)) :
            "");
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
