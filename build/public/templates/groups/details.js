
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
    return "<div component=\"groups/container\" class=\"groups details row\">\r\n\t<div component=\"groups/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['cover:position'] : null)) + 
      ";\">\r\n\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\r\n\t\t<div class=\"controls\">\r\n\t\t\t<span class=\"upload\"><i class=\"fa fa-fw fa-4x fa-upload\"></i></span>\r\n\t\t\t<span class=\"resize\"><i class=\"fa fa-fw fa-4x fa-arrows\"></i></span>\r\n\t\t\t<span class=\"remove\"><i class=\"fa fa-fw fa-4x fa-times\"></i></span>\r\n\t\t</div>\r\n\t\t<div class=\"save\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\r\n\t\t<div class=\"indicator\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n\r\n\t<div class=\"col-xs-12\">\r\n\t\t" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\r\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\r\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\r\n</ol>\r\n" :
        "") + 
      "\r\n\r\n\t</div>\r\n\r\n\t<div class=\"col-lg-4 col-xs-12\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t<i class=\"fa fa-list-ul\"></i> [[groups:details.title]]\r\n\t\t\t\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
        "<span class=\"label label-info\">[[groups:details.private]]</span>" :
        "") + 
      "\r\n\t\t\t\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
        "<span class=\"label label-info\">[[groups:details.hidden]]</span>&nbsp;" :
        "") + 
      "\r\n\t\t\t\t</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<h1>" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
      "</h1>\r\n\t\t\t\t<p>" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['descriptionParsed'] : null)) + 
      "</p>\r\n\t\t\t\t" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\r\n\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/groups/" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['nameEncoded'] : null)) + 
          "\" target=\"_blank\" class=\"btn btn-info\"><i class=\"fa fa-gear\"></i> [[user:edit]]</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\r\n\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'membershipBtn', [guard((context != null) ? context['group'] : null)])) + 
          "&nbsp;\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-users\"></i> [[groups:details.members]]</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\r\n\t<div class=\"col-lg-2\">\r\n\t\t<button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary\" title=\"[[groups:details.add-member]]\"><i class=\"fa fa-user-plus\"></i></button>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n\t<div class=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "col-lg-10" :
        "col-lg-12") + 
      "\">\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input class=\"form-control\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\r\n\t\t\t<span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<table component=\"groups/members\" class=\"table table-striped table-hover\" data-nextstart=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['membersNextStart'] : null)) + 
      "\">\r\n\t<tbody>\r\n\t" + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\r\n\t</tbody>\r\n</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h3 class=\"panel-title clearfix\">\r\n\t\t\t\t\t<i class=\"fa fa-clock-o\"></i> [[groups:details.pending]]\r\n\t\t\t\t\t" + 
          (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
            "\r\n\t\t\t\t\t<div class=\"btn-group pull-right\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t[[global:more]] <span class=\"caret\"></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t\t\t<li><a href=\"#\" data-ajaxify=\"false\" data-action=\"acceptAll\">[[groups:pending.accept_all]]</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\" data-ajaxify=\"false\" data-action=\"rejectAll\">[[groups:pending.reject_all]]</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<table component=\"groups/pending\" class=\"table table-striped table-hover\">\r\n\t\t\t\t\t" + 
          (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
            "" :
            "\r\n\t\t\t\t\t<div class=\"alert alert-info\">[[groups:pending.none]]</div>\r\n\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t" + 
          compiled.blocks['group.pending'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h3 class=\"panel-title clearfix\">\r\n\t\t\t\t\t<i class=\"fa fa-gift\"></i> [[groups:details.invited]]\r\n\t\t\t\t</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" component=\"groups/members/invite\" placeholder=\"[[groups:invited.search]]\"/>\r\n\t\t\t\t\t<span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<textarea class=\"form-control\" component=\"groups/members/bulk-invite\" placeholder=\"[[groups:bulk-invite-instructions]]\"></textarea>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group clearfix\">\r\n\t\t\t\t\t<button class=\"btn btn-default btn-sm pull-right\" component=\"groups/members/bulk-invite-button\">[[groups:bulk-invite]]</button>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<table component=\"groups/invited\" class=\"table table-striped table-hover\">\r\n\t\t\t\t\t" + 
          (guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited']['length'] : null) ?
            "" :
            "\r\n\t\t\t\t\t<div class=\"alert alert-info\">[[groups:invited.none]]</div>\r\n\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t" + 
          compiled.blocks['group.invited'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading pointer\" data-toggle=\"collapse\" data-target=\".options\">\r\n\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t<i class=\"fa fa-caret-down pull-right\"></i>\r\n\t\t\t\t\t<i class=\"fa fa-cogs\"></i> [[groups:details.owner_options]]\r\n\t\t\t\t</h3>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel-body options collapse\">\r\n\t\t\t\t<form component=\"groups/settings\" role=\"form\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"name\">[[groups:details.group_name]]</label>\r\n\t\t\t\t\t\t<input " + 
          (guard((context != null && context['group'] != null) ? context['group']['system'] : null) ?
            "readonly" :
            "") + 
          " class=\"form-control\" name=\"name\" id=\"name\" type=\"text\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
          "\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"name\">[[groups:details.description]]</label>\r\n\t\t\t\t\t\t<textarea class=\"form-control\" name=\"description\" id=\"description\" type=\"text\" maxlength=\"255\">" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['description'] : null)) + 
          "</textarea>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<hr />\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"memberPostCids\">[[groups:details.member-post-cids]]</label>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<input id=\"memberPostCids\" type=\"text\" class=\"form-control\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['memberPostCids'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 member-post-cids-selector\">\r\n\t\t\t\t\t\t\t\t<div component=\"category-selector\" class=\"btn-group bottom-sheet\">\r\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n    <span component=\"category-selector-selected\">" + 
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
          "\r\n</ul>\r\n</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<hr />\r\n\r\n\t\t\t\t\t<div class=\"form-group user-title-option\">\r\n\t\t\t\t\t\t<label for=\"userTitle\">[[groups:details.badge_text]]</label>\r\n\t\t\t\t\t\t<input component=\"groups/userTitleOption\" class=\"form-control\" name=\"userTitle\" id=\"userTitle\" type=\"text\" maxlength=\"40\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['userTitleEscaped'] : null)) + 
          "\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " disabled") + 
          " />\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group user-title-option\">\r\n\t\t\t\t\t\t<label>[[groups:details.badge_preview]]</label><br />\r\n\t\t\t\t\t\t<span class=\"label" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " hide") + 
          "\" style=\"color: " + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) + 
          "; background-color: " + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) + 
          "\"><i class=\"fa" + 
          (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
            " " + 
              __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) :
            "") + 
          "\"></i> <span class=\"label-text\">" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null)) :
            __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null))) + 
          "</span></span>\r\n\r\n\t\t\t\t\t\t<hr/>\r\n\t\t\t\t\t\t<button component=\"groups/userTitleOption\" type=\"button\" class=\"btn btn-default btn-sm\" data-action=\"icon-select\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " disabled") + 
          ">[[groups:details.change_icon]]</button>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<label for=\"labelColor\" class=\"badge-color-label\">[[groups:details.change_label_colour]]</label>\r\n\t\t\t\t\t\t\t<input component=\"groups/userTitleOption\" type=\"color\" name=\"labelColor\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) :
            "") + 
          "\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<label for=\"color\" class=\"badge-color-label\">[[groups:details.change_text_colour]]</label>\r\n\t\t\t\t\t\t\t<input component=\"groups/userTitleOption\" type=\"color\" name=\"textColor\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['textColor'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) :
            "") + 
          "\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<input type=\"hidden\" name=\"icon\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) :
            "") + 
          "\" />\r\n\r\n\t\t\t\t\t\t<div id=\"icons\" class=\"hidden\">\r\n\t\t\t\t\t\t\t<div class=\"icon-container\">\r\n\t\t\t\t\t\t\t\t<div class=\"row fa-icons\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-doesnt-exist\"></i>\r\n\t\t\t\t\t\t\t\t\t<div class=\"icon-container\">\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"fa-filter\">Type to filter icons</label>\r\n\t\t<input type=\"text\" class=\"form-control\" id=\"fa-filter\" data-action=\"filter\" placeholder=\"e.g. umbrella\" />\r\n\t</div>\r\n\t<div class=\"row fa-icons\">\r\n\t\t<i class=\"fa fa-500px\"></i>\r\n\t\t<i class=\"fa fa-address-book\"></i>\r\n\t\t<i class=\"fa fa-address-book-o\"></i>\r\n\t\t<i class=\"fa fa-address-card\"></i>\r\n\t\t<i class=\"fa fa-address-card-o\"></i>\r\n\t\t<i class=\"fa fa-adjust\"></i>\r\n\t\t<i class=\"fa fa-adn\"></i>\r\n\t\t<i class=\"fa fa-align-center\"></i>\r\n\t\t<i class=\"fa fa-align-justify\"></i>\r\n\t\t<i class=\"fa fa-align-left\"></i>\r\n\t\t<i class=\"fa fa-align-right\"></i>\r\n\t\t<i class=\"fa fa-amazon\"></i>\r\n\t\t<i class=\"fa fa-ambulance\"></i>\r\n\t\t<i class=\"fa fa-american-sign-language-interpreting\"></i>\r\n\t\t<i class=\"fa fa-anchor\"></i>\r\n\t\t<i class=\"fa fa-android\"></i>\r\n\t\t<i class=\"fa fa-angellist\"></i>\r\n\t\t<i class=\"fa fa-angle-double-down\"></i>\r\n\t\t<i class=\"fa fa-angle-double-left\"></i>\r\n\t\t<i class=\"fa fa-angle-double-right\"></i>\r\n\t\t<i class=\"fa fa-angle-double-up\"></i>\r\n\t\t<i class=\"fa fa-angle-down\"></i>\r\n\t\t<i class=\"fa fa-angle-left\"></i>\r\n\t\t<i class=\"fa fa-angle-right\"></i>\r\n\t\t<i class=\"fa fa-angle-up\"></i>\r\n\t\t<i class=\"fa fa-apple\"></i>\r\n\t\t<i class=\"fa fa-archive\"></i>\r\n\t\t<i class=\"fa fa-area-chart\"></i>\r\n\t\t<i class=\"fa fa-arrow-circle-down\"></i>\r\n\t\t<i class=\"fa fa-arrow-circle-left\"></i>\r\n\t\t<i class=\"fa fa-arrow-circle-o-down\"></i>\r\n\t\t<i class=\"fa fa-arrow-circle-o-left\"></i>\r\n\t\t<i class=\"fa fa-arrow-circle-o-right\"></i>\r\n\t\t<i class=\"fa fa-arrow-circle-o-up\"></i>\r\n\t\t<i class=\"fa fa-arrow-circle-right\"></i>\r\n\t\t<i class=\"fa fa-arrow-circle-up\"></i>\r\n\t\t<i class=\"fa fa-arrow-down\"></i>\r\n\t\t<i class=\"fa fa-arrow-left\"></i>\r\n\t\t<i class=\"fa fa-arrow-right\"></i>\r\n\t\t<i class=\"fa fa-arrow-up\"></i>\r\n\t\t<i class=\"fa fa-arrows\"></i>\r\n\t\t<i class=\"fa fa-arrows-alt\"></i>\r\n\t\t<i class=\"fa fa-arrows-h\"></i>\r\n\t\t<i class=\"fa fa-arrows-v\"></i>\r\n\t\t<i class=\"fa fa-asl-interpreting\"></i>\r\n\t\t<i class=\"fa fa-assistive-listening-systems\"></i>\r\n\t\t<i class=\"fa fa-asterisk\"></i>\r\n\t\t<i class=\"fa fa-at\"></i>\r\n\t\t<i class=\"fa fa-audio-description\"></i>\r\n\t\t<i class=\"fa fa-automobile\"></i>\r\n\t\t<i class=\"fa fa-backward\"></i>\r\n\t\t<i class=\"fa fa-balance-scale\"></i>\r\n\t\t<i class=\"fa fa-ban\"></i>\r\n\t\t<i class=\"fa fa-bandcamp\"></i>\r\n\t\t<i class=\"fa fa-bank\"></i>\r\n\t\t<i class=\"fa fa-bar-chart\"></i>\r\n\t\t<i class=\"fa fa-bar-chart-o\"></i>\r\n\t\t<i class=\"fa fa-barcode\"></i>\r\n\t\t<i class=\"fa fa-bars\"></i>\r\n\t\t<i class=\"fa fa-bath\"></i>\r\n\t\t<i class=\"fa fa-bathtub\"></i>\r\n\t\t<i class=\"fa fa-battery\"></i>\r\n\t\t<i class=\"fa fa-battery-0\"></i>\r\n\t\t<i class=\"fa fa-battery-1\"></i>\r\n\t\t<i class=\"fa fa-battery-2\"></i>\r\n\t\t<i class=\"fa fa-battery-3\"></i>\r\n\t\t<i class=\"fa fa-battery-4\"></i>\r\n\t\t<i class=\"fa fa-battery-empty\"></i>\r\n\t\t<i class=\"fa fa-battery-full\"></i>\r\n\t\t<i class=\"fa fa-battery-half\"></i>\r\n\t\t<i class=\"fa fa-battery-quarter\"></i>\r\n\t\t<i class=\"fa fa-battery-three-quarters\"></i>\r\n\t\t<i class=\"fa fa-bed\"></i>\r\n\t\t<i class=\"fa fa-beer\"></i>\r\n\t\t<i class=\"fa fa-behance\"></i>\r\n\t\t<i class=\"fa fa-behance-square\"></i>\r\n\t\t<i class=\"fa fa-bell\"></i>\r\n\t\t<i class=\"fa fa-bell-o\"></i>\r\n\t\t<i class=\"fa fa-bell-slash\"></i>\r\n\t\t<i class=\"fa fa-bell-slash-o\"></i>\r\n\t\t<i class=\"fa fa-bicycle\"></i>\r\n\t\t<i class=\"fa fa-binoculars\"></i>\r\n\t\t<i class=\"fa fa-birthday-cake\"></i>\r\n\t\t<i class=\"fa fa-bitbucket\"></i>\r\n\t\t<i class=\"fa fa-bitbucket-square\"></i>\r\n\t\t<i class=\"fa fa-bitcoin\"></i>\r\n\t\t<i class=\"fa fa-black-tie\"></i>\r\n\t\t<i class=\"fa fa-blind\"></i>\r\n\t\t<i class=\"fa fa-bluetooth\"></i>\r\n\t\t<i class=\"fa fa-bluetooth-b\"></i>\r\n\t\t<i class=\"fa fa-bold\"></i>\r\n\t\t<i class=\"fa fa-bolt\"></i>\r\n\t\t<i class=\"fa fa-bomb\"></i>\r\n\t\t<i class=\"fa fa-book\"></i>\r\n\t\t<i class=\"fa fa-bookmark\"></i>\r\n\t\t<i class=\"fa fa-bookmark-o\"></i>\r\n\t\t<i class=\"fa fa-braille\"></i>\r\n\t\t<i class=\"fa fa-briefcase\"></i>\r\n\t\t<i class=\"fa fa-btc\"></i>\r\n\t\t<i class=\"fa fa-bug\"></i>\r\n\t\t<i class=\"fa fa-building\"></i>\r\n\t\t<i class=\"fa fa-building-o\"></i>\r\n\t\t<i class=\"fa fa-bullhorn\"></i>\r\n\t\t<i class=\"fa fa-bullseye\"></i>\r\n\t\t<i class=\"fa fa-bus\"></i>\r\n\t\t<i class=\"fa fa-buysellads\"></i>\r\n\t\t<i class=\"fa fa-cab\"></i>\r\n\t\t<i class=\"fa fa-calculator\"></i>\r\n\t\t<i class=\"fa fa-calendar\"></i>\r\n\t\t<i class=\"fa fa-calendar-check-o\"></i>\r\n\t\t<i class=\"fa fa-calendar-minus-o\"></i>\r\n\t\t<i class=\"fa fa-calendar-o\"></i>\r\n\t\t<i class=\"fa fa-calendar-plus-o\"></i>\r\n\t\t<i class=\"fa fa-calendar-times-o\"></i>\r\n\t\t<i class=\"fa fa-camera\"></i>\r\n\t\t<i class=\"fa fa-camera-retro\"></i>\r\n\t\t<i class=\"fa fa-car\"></i>\r\n\t\t<i class=\"fa fa-caret-down\"></i>\r\n\t\t<i class=\"fa fa-caret-left\"></i>\r\n\t\t<i class=\"fa fa-caret-right\"></i>\r\n\t\t<i class=\"fa fa-caret-square-o-down\"></i>\r\n\t\t<i class=\"fa fa-caret-square-o-left\"></i>\r\n\t\t<i class=\"fa fa-caret-square-o-right\"></i>\r\n\t\t<i class=\"fa fa-caret-square-o-up\"></i>\r\n\t\t<i class=\"fa fa-caret-up\"></i>\r\n\t\t<i class=\"fa fa-cart-arrow-down\"></i>\r\n\t\t<i class=\"fa fa-cart-plus\"></i>\r\n\t\t<i class=\"fa fa-cc\"></i>\r\n\t\t<i class=\"fa fa-cc-amex\"></i>\r\n\t\t<i class=\"fa fa-cc-diners-club\"></i>\r\n\t\t<i class=\"fa fa-cc-discover\"></i>\r\n\t\t<i class=\"fa fa-cc-jcb\"></i>\r\n\t\t<i class=\"fa fa-cc-mastercard\"></i>\r\n\t\t<i class=\"fa fa-cc-paypal\"></i>\r\n\t\t<i class=\"fa fa-cc-stripe\"></i>\r\n\t\t<i class=\"fa fa-cc-visa\"></i>\r\n\t\t<i class=\"fa fa-certificate\"></i>\r\n\t\t<i class=\"fa fa-chain\"></i>\r\n\t\t<i class=\"fa fa-chain-broken\"></i>\r\n\t\t<i class=\"fa fa-check\"></i>\r\n\t\t<i class=\"fa fa-check-circle\"></i>\r\n\t\t<i class=\"fa fa-check-circle-o\"></i>\r\n\t\t<i class=\"fa fa-check-square\"></i>\r\n\t\t<i class=\"fa fa-check-square-o\"></i>\r\n\t\t<i class=\"fa fa-chevron-circle-down\"></i>\r\n\t\t<i class=\"fa fa-chevron-circle-left\"></i>\r\n\t\t<i class=\"fa fa-chevron-circle-right\"></i>\r\n\t\t<i class=\"fa fa-chevron-circle-up\"></i>\r\n\t\t<i class=\"fa fa-chevron-down\"></i>\r\n\t\t<i class=\"fa fa-chevron-left\"></i>\r\n\t\t<i class=\"fa fa-chevron-right\"></i>\r\n\t\t<i class=\"fa fa-chevron-up\"></i>\r\n\t\t<i class=\"fa fa-child\"></i>\r\n\t\t<i class=\"fa fa-chrome\"></i>\r\n\t\t<i class=\"fa fa-circle\"></i>\r\n\t\t<i class=\"fa fa-circle-o\"></i>\r\n\t\t<i class=\"fa fa-circle-o-notch\"></i>\r\n\t\t<i class=\"fa fa-circle-thin\"></i>\r\n\t\t<i class=\"fa fa-clipboard\"></i>\r\n\t\t<i class=\"fa fa-clock-o\"></i>\r\n\t\t<i class=\"fa fa-clone\"></i>\r\n\t\t<i class=\"fa fa-close\"></i>\r\n\t\t<i class=\"fa fa-cloud\"></i>\r\n\t\t<i class=\"fa fa-cloud-download\"></i>\r\n\t\t<i class=\"fa fa-cloud-upload\"></i>\r\n\t\t<i class=\"fa fa-cny\"></i>\r\n\t\t<i class=\"fa fa-code\"></i>\r\n\t\t<i class=\"fa fa-code-fork\"></i>\r\n\t\t<i class=\"fa fa-codepen\"></i>\r\n\t\t<i class=\"fa fa-codiepie\"></i>\r\n\t\t<i class=\"fa fa-coffee\"></i>\r\n\t\t<i class=\"fa fa-cog\"></i>\r\n\t\t<i class=\"fa fa-cogs\"></i>\r\n\t\t<i class=\"fa fa-columns\"></i>\r\n\t\t<i class=\"fa fa-comment\"></i>\r\n\t\t<i class=\"fa fa-comment-o\"></i>\r\n\t\t<i class=\"fa fa-commenting\"></i>\r\n\t\t<i class=\"fa fa-commenting-o\"></i>\r\n\t\t<i class=\"fa fa-comments\"></i>\r\n\t\t<i class=\"fa fa-comments-o\"></i>\r\n\t\t<i class=\"fa fa-compass\"></i>\r\n\t\t<i class=\"fa fa-compress\"></i>\r\n\t\t<i class=\"fa fa-connectdevelop\"></i>\r\n\t\t<i class=\"fa fa-contao\"></i>\r\n\t\t<i class=\"fa fa-copy\"></i>\r\n\t\t<i class=\"fa fa-copyright\"></i>\r\n\t\t<i class=\"fa fa-creative-commons\"></i>\r\n\t\t<i class=\"fa fa-credit-card\"></i>\r\n\t\t<i class=\"fa fa-credit-card-alt\"></i>\r\n\t\t<i class=\"fa fa-crop\"></i>\r\n\t\t<i class=\"fa fa-crosshairs\"></i>\r\n\t\t<i class=\"fa fa-css3\"></i>\r\n\t\t<i class=\"fa fa-cube\"></i>\r\n\t\t<i class=\"fa fa-cubes\"></i>\r\n\t\t<i class=\"fa fa-cut\"></i>\r\n\t\t<i class=\"fa fa-cutlery\"></i>\r\n\t\t<i class=\"fa fa-dashboard\"></i>\r\n\t\t<i class=\"fa fa-dashcube\"></i>\r\n\t\t<i class=\"fa fa-database\"></i>\r\n\t\t<i class=\"fa fa-deaf\"></i>\r\n\t\t<i class=\"fa fa-deafness\"></i>\r\n\t\t<i class=\"fa fa-dedent\"></i>\r\n\t\t<i class=\"fa fa-delicious\"></i>\r\n\t\t<i class=\"fa fa-desktop\"></i>\r\n\t\t<i class=\"fa fa-deviantart\"></i>\r\n\t\t<i class=\"fa fa-diamond\"></i>\r\n\t\t<i class=\"fa fa-digg\"></i>\r\n\t\t<i class=\"fa fa-dollar\"></i>\r\n\t\t<i class=\"fa fa-dot-circle-o\"></i>\r\n\t\t<i class=\"fa fa-download\"></i>\r\n\t\t<i class=\"fa fa-dribbble\"></i>\r\n\t\t<i class=\"fa fa-drivers-license\"></i>\r\n\t\t<i class=\"fa fa-drivers-license-o\"></i>\r\n\t\t<i class=\"fa fa-dropbox\"></i>\r\n\t\t<i class=\"fa fa-drupal\"></i>\r\n\t\t<i class=\"fa fa-edge\"></i>\r\n\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t<i class=\"fa fa-eercast\"></i>\r\n\t\t<i class=\"fa fa-eject\"></i>\r\n\t\t<i class=\"fa fa-ellipsis-h\"></i>\r\n\t\t<i class=\"fa fa-ellipsis-v\"></i>\r\n\t\t<i class=\"fa fa-empire\"></i>\r\n\t\t<i class=\"fa fa-envelope\"></i>\r\n\t\t<i class=\"fa fa-envelope-o\"></i>\r\n\t\t<i class=\"fa fa-envelope-open\"></i>\r\n\t\t<i class=\"fa fa-envelope-open-o\"></i>\r\n\t\t<i class=\"fa fa-envelope-square\"></i>\r\n\t\t<i class=\"fa fa-envira\"></i>\r\n\t\t<i class=\"fa fa-eraser\"></i>\r\n\t\t<i class=\"fa fa-etsy\"></i>\r\n\t\t<i class=\"fa fa-eur\"></i>\r\n\t\t<i class=\"fa fa-euro\"></i>\r\n\t\t<i class=\"fa fa-exchange\"></i>\r\n\t\t<i class=\"fa fa-exclamation\"></i>\r\n\t\t<i class=\"fa fa-exclamation-circle\"></i>\r\n\t\t<i class=\"fa fa-exclamation-triangle\"></i>\r\n\t\t<i class=\"fa fa-expand\"></i>\r\n\t\t<i class=\"fa fa-expeditedssl\"></i>\r\n\t\t<i class=\"fa fa-external-link\"></i>\r\n\t\t<i class=\"fa fa-external-link-square\"></i>\r\n\t\t<i class=\"fa fa-eye\"></i>\r\n\t\t<i class=\"fa fa-eye-slash\"></i>\r\n\t\t<i class=\"fa fa-eyedropper\"></i>\r\n\t\t<i class=\"fa fa-fa\"></i>\r\n\t\t<i class=\"fa fa-facebook\"></i>\r\n\t\t<i class=\"fa fa-facebook-f\"></i>\r\n\t\t<i class=\"fa fa-facebook-official\"></i>\r\n\t\t<i class=\"fa fa-facebook-square\"></i>\r\n\t\t<i class=\"fa fa-fast-backward\"></i>\r\n\t\t<i class=\"fa fa-fast-forward\"></i>\r\n\t\t<i class=\"fa fa-fax\"></i>\r\n\t\t<i class=\"fa fa-feed\"></i>\r\n\t\t<i class=\"fa fa-female\"></i>\r\n\t\t<i class=\"fa fa-fighter-jet\"></i>\r\n\t\t<i class=\"fa fa-file\"></i>\r\n\t\t<i class=\"fa fa-file-archive-o\"></i>\r\n\t\t<i class=\"fa fa-file-audio-o\"></i>\r\n\t\t<i class=\"fa fa-file-code-o\"></i>\r\n\t\t<i class=\"fa fa-file-excel-o\"></i>\r\n\t\t<i class=\"fa fa-file-image-o\"></i>\r\n\t\t<i class=\"fa fa-file-movie-o\"></i>\r\n\t\t<i class=\"fa fa-file-o\"></i>\r\n\t\t<i class=\"fa fa-file-pdf-o\"></i>\r\n\t\t<i class=\"fa fa-file-photo-o\"></i>\r\n\t\t<i class=\"fa fa-file-picture-o\"></i>\r\n\t\t<i class=\"fa fa-file-powerpoint-o\"></i>\r\n\t\t<i class=\"fa fa-file-sound-o\"></i>\r\n\t\t<i class=\"fa fa-file-text\"></i>\r\n\t\t<i class=\"fa fa-file-text-o\"></i>\r\n\t\t<i class=\"fa fa-file-video-o\"></i>\r\n\t\t<i class=\"fa fa-file-word-o\"></i>\r\n\t\t<i class=\"fa fa-file-zip-o\"></i>\r\n\t\t<i class=\"fa fa-files-o\"></i>\r\n\t\t<i class=\"fa fa-film\"></i>\r\n\t\t<i class=\"fa fa-filter\"></i>\r\n\t\t<i class=\"fa fa-fire\"></i>\r\n\t\t<i class=\"fa fa-fire-extinguisher\"></i>\r\n\t\t<i class=\"fa fa-firefox\"></i>\r\n\t\t<i class=\"fa fa-first-order\"></i>\r\n\t\t<i class=\"fa fa-flag\"></i>\r\n\t\t<i class=\"fa fa-flag-checkered\"></i>\r\n\t\t<i class=\"fa fa-flag-o\"></i>\r\n\t\t<i class=\"fa fa-flash\"></i>\r\n\t\t<i class=\"fa fa-flask\"></i>\r\n\t\t<i class=\"fa fa-flickr\"></i>\r\n\t\t<i class=\"fa fa-floppy-o\"></i>\r\n\t\t<i class=\"fa fa-folder\"></i>\r\n\t\t<i class=\"fa fa-folder-o\"></i>\r\n\t\t<i class=\"fa fa-folder-open\"></i>\r\n\t\t<i class=\"fa fa-folder-open-o\"></i>\r\n\t\t<i class=\"fa fa-font\"></i>\r\n\t\t<i class=\"fa fa-font-awesome\"></i>\r\n\t\t<i class=\"fa fa-fonticons\"></i>\r\n\t\t<i class=\"fa fa-fort-awesome\"></i>\r\n\t\t<i class=\"fa fa-forumbee\"></i>\r\n\t\t<i class=\"fa fa-forward\"></i>\r\n\t\t<i class=\"fa fa-foursquare\"></i>\r\n\t\t<i class=\"fa fa-free-code-camp\"></i>\r\n\t\t<i class=\"fa fa-frown-o\"></i>\r\n\t\t<i class=\"fa fa-futbol-o\"></i>\r\n\t\t<i class=\"fa fa-gamepad\"></i>\r\n\t\t<i class=\"fa fa-gavel\"></i>\r\n\t\t<i class=\"fa fa-gbp\"></i>\r\n\t\t<i class=\"fa fa-ge\"></i>\r\n\t\t<i class=\"fa fa-gear\"></i>\r\n\t\t<i class=\"fa fa-gears\"></i>\r\n\t\t<i class=\"fa fa-genderless\"></i>\r\n\t\t<i class=\"fa fa-get-pocket\"></i>\r\n\t\t<i class=\"fa fa-gg\"></i>\r\n\t\t<i class=\"fa fa-gg-circle\"></i>\r\n\t\t<i class=\"fa fa-gift\"></i>\r\n\t\t<i class=\"fa fa-git\"></i>\r\n\t\t<i class=\"fa fa-git-square\"></i>\r\n\t\t<i class=\"fa fa-github\"></i>\r\n\t\t<i class=\"fa fa-github-alt\"></i>\r\n\t\t<i class=\"fa fa-github-square\"></i>\r\n\t\t<i class=\"fa fa-gitlab\"></i>\r\n\t\t<i class=\"fa fa-gittip\"></i>\r\n\t\t<i class=\"fa fa-glass\"></i>\r\n\t\t<i class=\"fa fa-glide\"></i>\r\n\t\t<i class=\"fa fa-glide-g\"></i>\r\n\t\t<i class=\"fa fa-globe\"></i>\r\n\t\t<i class=\"fa fa-google\"></i>\r\n\t\t<i class=\"fa fa-google-plus\"></i>\r\n\t\t<i class=\"fa fa-google-plus-circle\"></i>\r\n\t\t<i class=\"fa fa-google-plus-official\"></i>\r\n\t\t<i class=\"fa fa-google-plus-square\"></i>\r\n\t\t<i class=\"fa fa-google-wallet\"></i>\r\n\t\t<i class=\"fa fa-graduation-cap\"></i>\r\n\t\t<i class=\"fa fa-gratipay\"></i>\r\n\t\t<i class=\"fa fa-grav\"></i>\r\n\t\t<i class=\"fa fa-group\"></i>\r\n\t\t<i class=\"fa fa-h-square\"></i>\r\n\t\t<i class=\"fa fa-hacker-news\"></i>\r\n\t\t<i class=\"fa fa-hand-grab-o\"></i>\r\n\t\t<i class=\"fa fa-hand-lizard-o\"></i>\r\n\t\t<i class=\"fa fa-hand-o-down\"></i>\r\n\t\t<i class=\"fa fa-hand-o-left\"></i>\r\n\t\t<i class=\"fa fa-hand-o-right\"></i>\r\n\t\t<i class=\"fa fa-hand-o-up\"></i>\r\n\t\t<i class=\"fa fa-hand-paper-o\"></i>\r\n\t\t<i class=\"fa fa-hand-peace-o\"></i>\r\n\t\t<i class=\"fa fa-hand-pointer-o\"></i>\r\n\t\t<i class=\"fa fa-hand-rock-o\"></i>\r\n\t\t<i class=\"fa fa-hand-scissors-o\"></i>\r\n\t\t<i class=\"fa fa-hand-spock-o\"></i>\r\n\t\t<i class=\"fa fa-hand-stop-o\"></i>\r\n\t\t<i class=\"fa fa-handshake-o\"></i>\r\n\t\t<i class=\"fa fa-hard-of-hearing\"></i>\r\n\t\t<i class=\"fa fa-hashtag\"></i>\r\n\t\t<i class=\"fa fa-hdd-o\"></i>\r\n\t\t<i class=\"fa fa-header\"></i>\r\n\t\t<i class=\"fa fa-headphones\"></i>\r\n\t\t<i class=\"fa fa-heart\"></i>\r\n\t\t<i class=\"fa fa-heart-o\"></i>\r\n\t\t<i class=\"fa fa-heartbeat\"></i>\r\n\t\t<i class=\"fa fa-history\"></i>\r\n\t\t<i class=\"fa fa-home\"></i>\r\n\t\t<i class=\"fa fa-hospital-o\"></i>\r\n\t\t<i class=\"fa fa-hotel\"></i>\r\n\t\t<i class=\"fa fa-hourglass\"></i>\r\n\t\t<i class=\"fa fa-hourglass-1\"></i>\r\n\t\t<i class=\"fa fa-hourglass-2\"></i>\r\n\t\t<i class=\"fa fa-hourglass-3\"></i>\r\n\t\t<i class=\"fa fa-hourglass-end\"></i>\r\n\t\t<i class=\"fa fa-hourglass-half\"></i>\r\n\t\t<i class=\"fa fa-hourglass-o\"></i>\r\n\t\t<i class=\"fa fa-hourglass-start\"></i>\r\n\t\t<i class=\"fa fa-houzz\"></i>\r\n\t\t<i class=\"fa fa-html5\"></i>\r\n\t\t<i class=\"fa fa-i-cursor\"></i>\r\n\t\t<i class=\"fa fa-id-badge\"></i>\r\n\t\t<i class=\"fa fa-id-card\"></i>\r\n\t\t<i class=\"fa fa-id-card-o\"></i>\r\n\t\t<i class=\"fa fa-ils\"></i>\r\n\t\t<i class=\"fa fa-image\"></i>\r\n\t\t<i class=\"fa fa-imdb\"></i>\r\n\t\t<i class=\"fa fa-inbox\"></i>\r\n\t\t<i class=\"fa fa-indent\"></i>\r\n\t\t<i class=\"fa fa-industry\"></i>\r\n\t\t<i class=\"fa fa-info\"></i>\r\n\t\t<i class=\"fa fa-info-circle\"></i>\r\n\t\t<i class=\"fa fa-inr\"></i>\r\n\t\t<i class=\"fa fa-instagram\"></i>\r\n\t\t<i class=\"fa fa-institution\"></i>\r\n\t\t<i class=\"fa fa-internet-explorer\"></i>\r\n\t\t<i class=\"fa fa-intersex\"></i>\r\n\t\t<i class=\"fa fa-ioxhost\"></i>\r\n\t\t<i class=\"fa fa-italic\"></i>\r\n\t\t<i class=\"fa fa-joomla\"></i>\r\n\t\t<i class=\"fa fa-jpy\"></i>\r\n\t\t<i class=\"fa fa-jsfiddle\"></i>\r\n\t\t<i class=\"fa fa-key\"></i>\r\n\t\t<i class=\"fa fa-keyboard-o\"></i>\r\n\t\t<i class=\"fa fa-krw\"></i>\r\n\t\t<i class=\"fa fa-language\"></i>\r\n\t\t<i class=\"fa fa-laptop\"></i>\r\n\t\t<i class=\"fa fa-lastfm\"></i>\r\n\t\t<i class=\"fa fa-lastfm-square\"></i>\r\n\t\t<i class=\"fa fa-leaf\"></i>\r\n\t\t<i class=\"fa fa-leanpub\"></i>\r\n\t\t<i class=\"fa fa-legal\"></i>\r\n\t\t<i class=\"fa fa-lemon-o\"></i>\r\n\t\t<i class=\"fa fa-level-down\"></i>\r\n\t\t<i class=\"fa fa-level-up\"></i>\r\n\t\t<i class=\"fa fa-life-bouy\"></i>\r\n\t\t<i class=\"fa fa-life-buoy\"></i>\r\n\t\t<i class=\"fa fa-life-ring\"></i>\r\n\t\t<i class=\"fa fa-life-saver\"></i>\r\n\t\t<i class=\"fa fa-lightbulb-o\"></i>\r\n\t\t<i class=\"fa fa-line-chart\"></i>\r\n\t\t<i class=\"fa fa-link\"></i>\r\n\t\t<i class=\"fa fa-linkedin\"></i>\r\n\t\t<i class=\"fa fa-linkedin-square\"></i>\r\n\t\t<i class=\"fa fa-linode\"></i>\r\n\t\t<i class=\"fa fa-linux\"></i>\r\n\t\t<i class=\"fa fa-list\"></i>\r\n\t\t<i class=\"fa fa-list-alt\"></i>\r\n\t\t<i class=\"fa fa-list-ol\"></i>\r\n\t\t<i class=\"fa fa-list-ul\"></i>\r\n\t\t<i class=\"fa fa-location-arrow\"></i>\r\n\t\t<i class=\"fa fa-lock\"></i>\r\n\t\t<i class=\"fa fa-long-arrow-down\"></i>\r\n\t\t<i class=\"fa fa-long-arrow-left\"></i>\r\n\t\t<i class=\"fa fa-long-arrow-right\"></i>\r\n\t\t<i class=\"fa fa-long-arrow-up\"></i>\r\n\t\t<i class=\"fa fa-low-vision\"></i>\r\n\t\t<i class=\"fa fa-magic\"></i>\r\n\t\t<i class=\"fa fa-magnet\"></i>\r\n\t\t<i class=\"fa fa-mail-forward\"></i>\r\n\t\t<i class=\"fa fa-mail-reply\"></i>\r\n\t\t<i class=\"fa fa-mail-reply-all\"></i>\r\n\t\t<i class=\"fa fa-male\"></i>\r\n\t\t<i class=\"fa fa-map\"></i>\r\n\t\t<i class=\"fa fa-map-marker\"></i>\r\n\t\t<i class=\"fa fa-map-o\"></i>\r\n\t\t<i class=\"fa fa-map-pin\"></i>\r\n\t\t<i class=\"fa fa-map-signs\"></i>\r\n\t\t<i class=\"fa fa-mars\"></i>\r\n\t\t<i class=\"fa fa-mars-double\"></i>\r\n\t\t<i class=\"fa fa-mars-stroke\"></i>\r\n\t\t<i class=\"fa fa-mars-stroke-h\"></i>\r\n\t\t<i class=\"fa fa-mars-stroke-v\"></i>\r\n\t\t<i class=\"fa fa-maxcdn\"></i>\r\n\t\t<i class=\"fa fa-meanpath\"></i>\r\n\t\t<i class=\"fa fa-medium\"></i>\r\n\t\t<i class=\"fa fa-medkit\"></i>\r\n\t\t<i class=\"fa fa-meetup\"></i>\r\n\t\t<i class=\"fa fa-meh-o\"></i>\r\n\t\t<i class=\"fa fa-mercury\"></i>\r\n\t\t<i class=\"fa fa-microchip\"></i>\r\n\t\t<i class=\"fa fa-microphone\"></i>\r\n\t\t<i class=\"fa fa-microphone-slash\"></i>\r\n\t\t<i class=\"fa fa-minus\"></i>\r\n\t\t<i class=\"fa fa-minus-circle\"></i>\r\n\t\t<i class=\"fa fa-minus-square\"></i>\r\n\t\t<i class=\"fa fa-minus-square-o\"></i>\r\n\t\t<i class=\"fa fa-mixcloud\"></i>\r\n\t\t<i class=\"fa fa-mobile\"></i>\r\n\t\t<i class=\"fa fa-mobile-phone\"></i>\r\n\t\t<i class=\"fa fa-modx\"></i>\r\n\t\t<i class=\"fa fa-money\"></i>\r\n\t\t<i class=\"fa fa-moon-o\"></i>\r\n\t\t<i class=\"fa fa-mortar-board\"></i>\r\n\t\t<i class=\"fa fa-motorcycle\"></i>\r\n\t\t<i class=\"fa fa-mouse-pointer\"></i>\r\n\t\t<i class=\"fa fa-music\"></i>\r\n\t\t<i class=\"fa fa-navicon\"></i>\r\n\t\t<i class=\"fa fa-neuter\"></i>\r\n\t\t<i class=\"fa fa-newspaper-o\"></i>\r\n\t\t<i class=\"fa fa-object-group\"></i>\r\n\t\t<i class=\"fa fa-object-ungroup\"></i>\r\n\t\t<i class=\"fa fa-odnoklassniki\"></i>\r\n\t\t<i class=\"fa fa-odnoklassniki-square\"></i>\r\n\t\t<i class=\"fa fa-opencart\"></i>\r\n\t\t<i class=\"fa fa-openid\"></i>\r\n\t\t<i class=\"fa fa-opera\"></i>\r\n\t\t<i class=\"fa fa-optin-monster\"></i>\r\n\t\t<i class=\"fa fa-outdent\"></i>\r\n\t\t<i class=\"fa fa-pagelines\"></i>\r\n\t\t<i class=\"fa fa-paint-brush\"></i>\r\n\t\t<i class=\"fa fa-paper-plane\"></i>\r\n\t\t<i class=\"fa fa-paper-plane-o\"></i>\r\n\t\t<i class=\"fa fa-paperclip\"></i>\r\n\t\t<i class=\"fa fa-paragraph\"></i>\r\n\t\t<i class=\"fa fa-paste\"></i>\r\n\t\t<i class=\"fa fa-pause\"></i>\r\n\t\t<i class=\"fa fa-pause-circle\"></i>\r\n\t\t<i class=\"fa fa-pause-circle-o\"></i>\r\n\t\t<i class=\"fa fa-paw\"></i>\r\n\t\t<i class=\"fa fa-paypal\"></i>\r\n\t\t<i class=\"fa fa-pencil\"></i>\r\n\t\t<i class=\"fa fa-pencil-square\"></i>\r\n\t\t<i class=\"fa fa-pencil-square-o\"></i>\r\n\t\t<i class=\"fa fa-percent\"></i>\r\n\t\t<i class=\"fa fa-phone\"></i>\r\n\t\t<i class=\"fa fa-phone-square\"></i>\r\n\t\t<i class=\"fa fa-photo\"></i>\r\n\t\t<i class=\"fa fa-picture-o\"></i>\r\n\t\t<i class=\"fa fa-pie-chart\"></i>\r\n\t\t<i class=\"fa fa-pied-piper\"></i>\r\n\t\t<i class=\"fa fa-pied-piper-alt\"></i>\r\n\t\t<i class=\"fa fa-pied-piper-pp\"></i>\r\n\t\t<i class=\"fa fa-pinterest\"></i>\r\n\t\t<i class=\"fa fa-pinterest-p\"></i>\r\n\t\t<i class=\"fa fa-pinterest-square\"></i>\r\n\t\t<i class=\"fa fa-plane\"></i>\r\n\t\t<i class=\"fa fa-play\"></i>\r\n\t\t<i class=\"fa fa-play-circle\"></i>\r\n\t\t<i class=\"fa fa-play-circle-o\"></i>\r\n\t\t<i class=\"fa fa-plug\"></i>\r\n\t\t<i class=\"fa fa-plus\"></i>\r\n\t\t<i class=\"fa fa-plus-circle\"></i>\r\n\t\t<i class=\"fa fa-plus-square\"></i>\r\n\t\t<i class=\"fa fa-plus-square-o\"></i>\r\n\t\t<i class=\"fa fa-podcast\"></i>\r\n\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t<i class=\"fa fa-print\"></i>\r\n\t\t<i class=\"fa fa-product-hunt\"></i>\r\n\t\t<i class=\"fa fa-puzzle-piece\"></i>\r\n\t\t<i class=\"fa fa-qq\"></i>\r\n\t\t<i class=\"fa fa-qrcode\"></i>\r\n\t\t<i class=\"fa fa-question\"></i>\r\n\t\t<i class=\"fa fa-question-circle\"></i>\r\n\t\t<i class=\"fa fa-question-circle-o\"></i>\r\n\t\t<i class=\"fa fa-quora\"></i>\r\n\t\t<i class=\"fa fa-quote-left\"></i>\r\n\t\t<i class=\"fa fa-quote-right\"></i>\r\n\t\t<i class=\"fa fa-ra\"></i>\r\n\t\t<i class=\"fa fa-random\"></i>\r\n\t\t<i class=\"fa fa-ravelry\"></i>\r\n\t\t<i class=\"fa fa-rebel\"></i>\r\n\t\t<i class=\"fa fa-recycle\"></i>\r\n\t\t<i class=\"fa fa-reddit\"></i>\r\n\t\t<i class=\"fa fa-reddit-alien\"></i>\r\n\t\t<i class=\"fa fa-reddit-square\"></i>\r\n\t\t<i class=\"fa fa-refresh\"></i>\r\n\t\t<i class=\"fa fa-registered\"></i>\r\n\t\t<i class=\"fa fa-remove\"></i>\r\n\t\t<i class=\"fa fa-renren\"></i>\r\n\t\t<i class=\"fa fa-reorder\"></i>\r\n\t\t<i class=\"fa fa-repeat\"></i>\r\n\t\t<i class=\"fa fa-reply\"></i>\r\n\t\t<i class=\"fa fa-reply-all\"></i>\r\n\t\t<i class=\"fa fa-resistance\"></i>\r\n\t\t<i class=\"fa fa-retweet\"></i>\r\n\t\t<i class=\"fa fa-rmb\"></i>\r\n\t\t<i class=\"fa fa-road\"></i>\r\n\t\t<i class=\"fa fa-rocket\"></i>\r\n\t\t<i class=\"fa fa-rotate-left\"></i>\r\n\t\t<i class=\"fa fa-rotate-right\"></i>\r\n\t\t<i class=\"fa fa-rouble\"></i>\r\n\t\t<i class=\"fa fa-rss\"></i>\r\n\t\t<i class=\"fa fa-rss-square\"></i>\r\n\t\t<i class=\"fa fa-rub\"></i>\r\n\t\t<i class=\"fa fa-ruble\"></i>\r\n\t\t<i class=\"fa fa-rupee\"></i>\r\n\t\t<i class=\"fa fa-s15\"></i>\r\n\t\t<i class=\"fa fa-safari\"></i>\r\n\t\t<i class=\"fa fa-save\"></i>\r\n\t\t<i class=\"fa fa-scissors\"></i>\r\n\t\t<i class=\"fa fa-scribd\"></i>\r\n\t\t<i class=\"fa fa-search\"></i>\r\n\t\t<i class=\"fa fa-search-minus\"></i>\r\n\t\t<i class=\"fa fa-search-plus\"></i>\r\n\t\t<i class=\"fa fa-sellsy\"></i>\r\n\t\t<i class=\"fa fa-send\"></i>\r\n\t\t<i class=\"fa fa-send-o\"></i>\r\n\t\t<i class=\"fa fa-server\"></i>\r\n\t\t<i class=\"fa fa-share\"></i>\r\n\t\t<i class=\"fa fa-share-alt\"></i>\r\n\t\t<i class=\"fa fa-share-alt-square\"></i>\r\n\t\t<i class=\"fa fa-share-square\"></i>\r\n\t\t<i class=\"fa fa-share-square-o\"></i>\r\n\t\t<i class=\"fa fa-shekel\"></i>\r\n\t\t<i class=\"fa fa-sheqel\"></i>\r\n\t\t<i class=\"fa fa-shield\"></i>\r\n\t\t<i class=\"fa fa-ship\"></i>\r\n\t\t<i class=\"fa fa-shirtsinbulk\"></i>\r\n\t\t<i class=\"fa fa-shopping-bag\"></i>\r\n\t\t<i class=\"fa fa-shopping-basket\"></i>\r\n\t\t<i class=\"fa fa-shopping-cart\"></i>\r\n\t\t<i class=\"fa fa-shower\"></i>\r\n\t\t<i class=\"fa fa-sign-in\"></i>\r\n\t\t<i class=\"fa fa-sign-language\"></i>\r\n\t\t<i class=\"fa fa-sign-out\"></i>\r\n\t\t<i class=\"fa fa-signal\"></i>\r\n\t\t<i class=\"fa fa-signing\"></i>\r\n\t\t<i class=\"fa fa-simplybuilt\"></i>\r\n\t\t<i class=\"fa fa-sitemap\"></i>\r\n\t\t<i class=\"fa fa-skyatlas\"></i>\r\n\t\t<i class=\"fa fa-skype\"></i>\r\n\t\t<i class=\"fa fa-slack\"></i>\r\n\t\t<i class=\"fa fa-sliders\"></i>\r\n\t\t<i class=\"fa fa-slideshare\"></i>\r\n\t\t<i class=\"fa fa-smile-o\"></i>\r\n\t\t<i class=\"fa fa-snapchat\"></i>\r\n\t\t<i class=\"fa fa-snapchat-ghost\"></i>\r\n\t\t<i class=\"fa fa-snapchat-square\"></i>\r\n\t\t<i class=\"fa fa-snowflake-o\"></i>\r\n\t\t<i class=\"fa fa-soccer-ball-o\"></i>\r\n\t\t<i class=\"fa fa-sort\"></i>\r\n\t\t<i class=\"fa fa-sort-alpha-asc\"></i>\r\n\t\t<i class=\"fa fa-sort-alpha-desc\"></i>\r\n\t\t<i class=\"fa fa-sort-amount-asc\"></i>\r\n\t\t<i class=\"fa fa-sort-amount-desc\"></i>\r\n\t\t<i class=\"fa fa-sort-asc\"></i>\r\n\t\t<i class=\"fa fa-sort-desc\"></i>\r\n\t\t<i class=\"fa fa-sort-down\"></i>\r\n\t\t<i class=\"fa fa-sort-numeric-asc\"></i>\r\n\t\t<i class=\"fa fa-sort-numeric-desc\"></i>\r\n\t\t<i class=\"fa fa-sort-up\"></i>\r\n\t\t<i class=\"fa fa-soundcloud\"></i>\r\n\t\t<i class=\"fa fa-space-shuttle\"></i>\r\n\t\t<i class=\"fa fa-spinner\"></i>\r\n\t\t<i class=\"fa fa-spoon\"></i>\r\n\t\t<i class=\"fa fa-spotify\"></i>\r\n\t\t<i class=\"fa fa-square\"></i>\r\n\t\t<i class=\"fa fa-square-o\"></i>\r\n\t\t<i class=\"fa fa-stack-exchange\"></i>\r\n\t\t<i class=\"fa fa-stack-overflow\"></i>\r\n\t\t<i class=\"fa fa-star\"></i>\r\n\t\t<i class=\"fa fa-star-half\"></i>\r\n\t\t<i class=\"fa fa-star-half-empty\"></i>\r\n\t\t<i class=\"fa fa-star-half-full\"></i>\r\n\t\t<i class=\"fa fa-star-half-o\"></i>\r\n\t\t<i class=\"fa fa-star-o\"></i>\r\n\t\t<i class=\"fa fa-steam\"></i>\r\n\t\t<i class=\"fa fa-steam-square\"></i>\r\n\t\t<i class=\"fa fa-step-backward\"></i>\r\n\t\t<i class=\"fa fa-step-forward\"></i>\r\n\t\t<i class=\"fa fa-stethoscope\"></i>\r\n\t\t<i class=\"fa fa-sticky-note\"></i>\r\n\t\t<i class=\"fa fa-sticky-note-o\"></i>\r\n\t\t<i class=\"fa fa-stop\"></i>\r\n\t\t<i class=\"fa fa-stop-circle\"></i>\r\n\t\t<i class=\"fa fa-stop-circle-o\"></i>\r\n\t\t<i class=\"fa fa-street-view\"></i>\r\n\t\t<i class=\"fa fa-strikethrough\"></i>\r\n\t\t<i class=\"fa fa-stumbleupon\"></i>\r\n\t\t<i class=\"fa fa-stumbleupon-circle\"></i>\r\n\t\t<i class=\"fa fa-subscript\"></i>\r\n\t\t<i class=\"fa fa-subway\"></i>\r\n\t\t<i class=\"fa fa-suitcase\"></i>\r\n\t\t<i class=\"fa fa-sun-o\"></i>\r\n\t\t<i class=\"fa fa-superpowers\"></i>\r\n\t\t<i class=\"fa fa-superscript\"></i>\r\n\t\t<i class=\"fa fa-support\"></i>\r\n\t\t<i class=\"fa fa-table\"></i>\r\n\t\t<i class=\"fa fa-tablet\"></i>\r\n\t\t<i class=\"fa fa-tachometer\"></i>\r\n\t\t<i class=\"fa fa-tag\"></i>\r\n\t\t<i class=\"fa fa-tags\"></i>\r\n\t\t<i class=\"fa fa-tasks\"></i>\r\n\t\t<i class=\"fa fa-taxi\"></i>\r\n\t\t<i class=\"fa fa-telegram\"></i>\r\n\t\t<i class=\"fa fa-television\"></i>\r\n\t\t<i class=\"fa fa-tencent-weibo\"></i>\r\n\t\t<i class=\"fa fa-terminal\"></i>\r\n\t\t<i class=\"fa fa-text-height\"></i>\r\n\t\t<i class=\"fa fa-text-width\"></i>\r\n\t\t<i class=\"fa fa-th\"></i>\r\n\t\t<i class=\"fa fa-th-large\"></i>\r\n\t\t<i class=\"fa fa-th-list\"></i>\r\n\t\t<i class=\"fa fa-themeisle\"></i>\r\n\t\t<i class=\"fa fa-thermometer\"></i>\r\n\t\t<i class=\"fa fa-thermometer-0\"></i>\r\n\t\t<i class=\"fa fa-thermometer-1\"></i>\r\n\t\t<i class=\"fa fa-thermometer-2\"></i>\r\n\t\t<i class=\"fa fa-thermometer-3\"></i>\r\n\t\t<i class=\"fa fa-thermometer-4\"></i>\r\n\t\t<i class=\"fa fa-thermometer-empty\"></i>\r\n\t\t<i class=\"fa fa-thermometer-full\"></i>\r\n\t\t<i class=\"fa fa-thermometer-half\"></i>\r\n\t\t<i class=\"fa fa-thermometer-quarter\"></i>\r\n\t\t<i class=\"fa fa-thermometer-three-quarters\"></i>\r\n\t\t<i class=\"fa fa-thumb-tack\"></i>\r\n\t\t<i class=\"fa fa-thumbs-down\"></i>\r\n\t\t<i class=\"fa fa-thumbs-o-down\"></i>\r\n\t\t<i class=\"fa fa-thumbs-o-up\"></i>\r\n\t\t<i class=\"fa fa-thumbs-up\"></i>\r\n\t\t<i class=\"fa fa-ticket\"></i>\r\n\t\t<i class=\"fa fa-times\"></i>\r\n\t\t<i class=\"fa fa-times-circle\"></i>\r\n\t\t<i class=\"fa fa-times-circle-o\"></i>\r\n\t\t<i class=\"fa fa-times-rectangle\"></i>\r\n\t\t<i class=\"fa fa-times-rectangle-o\"></i>\r\n\t\t<i class=\"fa fa-tint\"></i>\r\n\t\t<i class=\"fa fa-toggle-down\"></i>\r\n\t\t<i class=\"fa fa-toggle-left\"></i>\r\n\t\t<i class=\"fa fa-toggle-off\"></i>\r\n\t\t<i class=\"fa fa-toggle-on\"></i>\r\n\t\t<i class=\"fa fa-toggle-right\"></i>\r\n\t\t<i class=\"fa fa-toggle-up\"></i>\r\n\t\t<i class=\"fa fa-trademark\"></i>\r\n\t\t<i class=\"fa fa-train\"></i>\r\n\t\t<i class=\"fa fa-transgender\"></i>\r\n\t\t<i class=\"fa fa-transgender-alt\"></i>\r\n\t\t<i class=\"fa fa-trash\"></i>\r\n\t\t<i class=\"fa fa-trash-o\"></i>\r\n\t\t<i class=\"fa fa-tree\"></i>\r\n\t\t<i class=\"fa fa-trello\"></i>\r\n\t\t<i class=\"fa fa-tripadvisor\"></i>\r\n\t\t<i class=\"fa fa-trophy\"></i>\r\n\t\t<i class=\"fa fa-truck\"></i>\r\n\t\t<i class=\"fa fa-try\"></i>\r\n\t\t<i class=\"fa fa-tty\"></i>\r\n\t\t<i class=\"fa fa-tumblr\"></i>\r\n\t\t<i class=\"fa fa-tumblr-square\"></i>\r\n\t\t<i class=\"fa fa-turkish-lira\"></i>\r\n\t\t<i class=\"fa fa-tv\"></i>\r\n\t\t<i class=\"fa fa-twitch\"></i>\r\n\t\t<i class=\"fa fa-twitter\"></i>\r\n\t\t<i class=\"fa fa-twitter-square\"></i>\r\n\t\t<i class=\"fa fa-umbrella\"></i>\r\n\t\t<i class=\"fa fa-underline\"></i>\r\n\t\t<i class=\"fa fa-undo\"></i>\r\n\t\t<i class=\"fa fa-universal-access\"></i>\r\n\t\t<i class=\"fa fa-university\"></i>\r\n\t\t<i class=\"fa fa-unlink\"></i>\r\n\t\t<i class=\"fa fa-unlock\"></i>\r\n\t\t<i class=\"fa fa-unlock-alt\"></i>\r\n\t\t<i class=\"fa fa-unsorted\"></i>\r\n\t\t<i class=\"fa fa-upload\"></i>\r\n\t\t<i class=\"fa fa-usb\"></i>\r\n\t\t<i class=\"fa fa-usd\"></i>\r\n\t\t<i class=\"fa fa-user\"></i>\r\n\t\t<i class=\"fa fa-user-circle\"></i>\r\n\t\t<i class=\"fa fa-user-circle-o\"></i>\r\n\t\t<i class=\"fa fa-user-md\"></i>\r\n\t\t<i class=\"fa fa-user-o\"></i>\r\n\t\t<i class=\"fa fa-user-plus\"></i>\r\n\t\t<i class=\"fa fa-user-secret\"></i>\r\n\t\t<i class=\"fa fa-user-times\"></i>\r\n\t\t<i class=\"fa fa-users\"></i>\r\n\t\t<i class=\"fa fa-vcard\"></i>\r\n\t\t<i class=\"fa fa-vcard-o\"></i>\r\n\t\t<i class=\"fa fa-venus\"></i>\r\n\t\t<i class=\"fa fa-venus-double\"></i>\r\n\t\t<i class=\"fa fa-venus-mars\"></i>\r\n\t\t<i class=\"fa fa-viacoin\"></i>\r\n\t\t<i class=\"fa fa-viadeo\"></i>\r\n\t\t<i class=\"fa fa-viadeo-square\"></i>\r\n\t\t<i class=\"fa fa-video-camera\"></i>\r\n\t\t<i class=\"fa fa-vimeo\"></i>\r\n\t\t<i class=\"fa fa-vimeo-square\"></i>\r\n\t\t<i class=\"fa fa-vine\"></i>\r\n\t\t<i class=\"fa fa-vk\"></i>\r\n\t\t<i class=\"fa fa-volume-control-phone\"></i>\r\n\t\t<i class=\"fa fa-volume-down\"></i>\r\n\t\t<i class=\"fa fa-volume-off\"></i>\r\n\t\t<i class=\"fa fa-volume-up\"></i>\r\n\t\t<i class=\"fa fa-warning\"></i>\r\n\t\t<i class=\"fa fa-wechat\"></i>\r\n\t\t<i class=\"fa fa-weibo\"></i>\r\n\t\t<i class=\"fa fa-weixin\"></i>\r\n\t\t<i class=\"fa fa-whatsapp\"></i>\r\n\t\t<i class=\"fa fa-wheelchair\"></i>\r\n\t\t<i class=\"fa fa-wheelchair-alt\"></i>\r\n\t\t<i class=\"fa fa-wifi\"></i>\r\n\t\t<i class=\"fa fa-wikipedia-w\"></i>\r\n\t\t<i class=\"fa fa-window-close\"></i>\r\n\t\t<i class=\"fa fa-window-close-o\"></i>\r\n\t\t<i class=\"fa fa-window-maximize\"></i>\r\n\t\t<i class=\"fa fa-window-minimize\"></i>\r\n\t\t<i class=\"fa fa-window-restore\"></i>\r\n\t\t<i class=\"fa fa-windows\"></i>\r\n\t\t<i class=\"fa fa-won\"></i>\r\n\t\t<i class=\"fa fa-wordpress\"></i>\r\n\t\t<i class=\"fa fa-wpbeginner\"></i>\r\n\t\t<i class=\"fa fa-wpexplorer\"></i>\r\n\t\t<i class=\"fa fa-wpforms\"></i>\r\n\t\t<i class=\"fa fa-wrench\"></i>\r\n\t\t<i class=\"fa fa-xing\"></i>\r\n\t\t<i class=\"fa fa-xing-square\"></i>\r\n\t\t<i class=\"fa fa-y-combinator\"></i>\r\n\t\t<i class=\"fa fa-y-combinator-square\"></i>\r\n\t\t<i class=\"fa fa-yahoo\"></i>\r\n\t\t<i class=\"fa fa-yc\"></i>\r\n\t\t<i class=\"fa fa-yc-square\"></i>\r\n\t\t<i class=\"fa fa-yelp\"></i>\r\n\t\t<i class=\"fa fa-yen\"></i>\r\n\t\t<i class=\"fa fa-yoast\"></i>\r\n\t\t<i class=\"fa fa-youtube\"></i>\r\n\t\t<i class=\"fa fa-youtube-play\"></i>\r\n\t\t<i class=\"fa fa-youtube-square\"></i>\r\n\r\n\t</div>\r\n\t<p class=\"help-block text-center\">\r\n\t\tFor a full list of icons, please consult:\r\n\t\t<a href=\"http://fortawesome.github.io/Font-Awesome/icons/\">FontAwesome</a>\r\n\t</p>\r\n</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<hr />\r\n\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"userTitleEnabled\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            " checked" :
            "") + 
          "> <strong>[[groups:details.userTitleEnabled]]</strong>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"private\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
            " checked" :
            "") + 
          "> <strong>[[groups:details.private]]</strong>\r\n\t\t\t\t\t\t\t" + 
          (guard((context != null) ? context['allowPrivateGroups'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t\t\t\t[[groups:details.private_system_help]]\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t\t\t\t[[groups:details.private_help]]\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"disableJoinRequests\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['disableJoinRequests'] : null) ?
            " checked" :
            "") + 
          "> <strong>[[groups:details.disableJoinRequests]]</strong>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"disableLeave\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['disableLeave'] : null) ?
            " checked" :
            "") + 
          "> <strong>[[groups:details.disableLeave]]</strong>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"hidden\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
            " checked" :
            "") + 
          "> <strong>[[groups:details.hidden]]</strong>\r\n\t\t\t\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t\t\t\t[[groups:details.hidden_help]]\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<button class=\"btn btn-link btn-xs pull-right\" type=\"button\" data-action=\"delete\">[[groups:details.delete_group]]</button>\r\n\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\" data-action=\"update\">[[global:save_changes]]</button>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\t\t<div data-widget-area=\"left\">\r\n\t\t\t" + 
      compiled.blocks['widgets.left'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-8 col-xs-12\">\r\n\t\t<div class=\"col-lg-11\">\r\n\t\t\t" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\r\n\t\t\t<div class=\"alert alert-info\">[[groups:details.has_no_posts]]</div>\r\n\t\t\t") + 
      "\r\n\t\t\t<ul component=\"posts\" class=\"posts-list\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\r\n\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\r\n</ul>\r\n<div component=\"posts/loading\" class=\"loading-indicator text-center hidden\">\r\n\t<i class=\"fa fa-refresh fa-spin\"></i>\r\n</div>\r\n\t\t</div>\r\n\t\t<div data-widget-area=\"right\">\r\n\t\t\t" + 
      compiled.blocks['widgets.right'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
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
    'group.members': function groupmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['uid'] : null)) + 
          "\">\r\n\t\t<td>\r\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['members'] != null) ? context['group']['members'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\r\n\t\t</td>\r\n\t\t<td class=\"member-name\">\r\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['username'] : null)) + 
          "</a> <i title=\"[[groups:owner]]\" class=\"fa fa-star text-warning " + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\r\n\r\n\t\t\t" + 
          (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
            "\r\n\t\t\t<div class=\"owner-controls btn-group pull-right\">\r\n\t\t\t\t<a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"toggleOwnership\" title=\"[[groups:details.grant]]\">\r\n\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t</a>\r\n\r\n\t\t\t\t<a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"kick\" title=\"[[groups:details.kick]]\">\r\n\t\t\t\t\t<i class=\"fa fa-ban\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t</td>\r\n\t</tr>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'group.pending': function grouppending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['pending'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['uid'] : null)) + 
          "\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"member-name\">\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['username'] : null)) + 
          "</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"btn-group pull-right\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t[[global:more]] <span class=\"caret\"></span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\" data-ajaxify=\"false\" data-action=\"accept\">[[groups:pending.accept]]</a></li>\r\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\" data-ajaxify=\"false\" data-action=\"reject\">[[groups:pending.reject]]</a></li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'group.invited': function groupinvited(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['invited'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['uid'] : null)) + 
          "\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"member-name\">\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['username'] : null)) + 
          "</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"btn-group pull-right\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t[[global:more]] <span class=\"caret\"></span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\" data-ajaxify=\"false\" data-action=\"rescindInvite\">[[groups:invited.uninvite]]</a></li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
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
    'widgets.left': function widgetsleft(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['left'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['left'] != null && context['widgets']['left'][key0] != null) ? context['widgets']['left'][key0]['html'] : null) + 
          "\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li component=\"post\" class=\"posts-list-item row" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['scheduled'] : null) ?
            " scheduled" :
            "") + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\">\n    <div class=\"col-lg-11 col-sm-10 col-xs-9 post-body\">\n        <a class=\"topic-title\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">\n            " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isMainPost'] : null) ?
            "" :
            "RE: ") + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "\n        </a>\n\n        <div component=\"post/content\" class=\"content\">\n            " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\n        </div>\n\n        <small class=\"topic-category\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\">[[global:posted_in, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "]]</a></small>\n\n        <div class=\"post-info\">\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "md", guard((context != null) ? context['true'] : null), "user-img"])) + 
          "</a>\n\n            <div class=\"post-author\">\n                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "</a><br />\n                <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n            </div>\n        </div>\n    </div>\n</li>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.right': function widgetsright(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['right'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['right'] != null && context['widgets']['right'][key0] != null) ? context['widgets']['right'][key0]['html'] : null) + 
          "\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
