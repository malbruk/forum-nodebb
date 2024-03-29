
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
    return "<li component=\"categories/category\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\" data-parent-cid=\"" + 
      __escape(guard((context != null) ? context['parentCid'] : null)) + 
      "\" class=\"row clearfix\">\r\n\t<meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\">\r\n\r\n\t<div class=\"content col-xs-12 col-md-10 col-sm-12 depth-" + 
      __escape(guard((context != null) ? context['depth'] : null)) + 
      "\">\r\n\t\t<div class=\"icon pull-left\" style=\"" + 
      __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
      "\">\r\n\t\t\t<i class=\"fa fa-fw " + 
      __escape(guard((context != null) ? context['icon'] : null)) + 
      "\"></i>\r\n\t\t</div>\r\n\r\n\t\t<h2 class=\"title\">\r\n\t\t\t" + 
      (guard((context != null) ? context['isSection'] : null) ?
        "\r\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\r\n" :
        "\r\n" + 
          (guard((context != null) ? context['link'] : null) ?
            "\r\n<a href=\"" + 
              __escape(guard((context != null) ? context['link'] : null)) + 
              "\" itemprop=\"url\">\r\n" :
            "\r\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null)) + 
              "\" itemprop=\"url\">\r\n") + 
          "\r\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\r\n</a>\r\n") + 
      "\r\n\t\t</h2>\r\n\t\t<div>\r\n\t\t\t" + 
      (guard((context != null) ? context['descriptionParsed'] : null) ?
        "\r\n\t\t\t<div class=\"description\">\r\n\t\t\t\t" + 
          __escape(guard((context != null) ? context['descriptionParsed'] : null)) + 
          "\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\r\n<div class=\"btn-group topic-watch-dropdown bottom-sheet\" component=\"topic/watch\">\r\n\r\n\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\r\n\r\n\t\t<span component=\"category/watching/menu\" " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:watching]]</span></span>\r\n\r\n\t\t<span component=\"category/notwatching/menu\" " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-clock-o\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:not-watching]]</span></span>\r\n\r\n\t\t<span component=\"category/ignoring/menu\" " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:ignoring]]</span></span>\r\n\r\n\t\t<span class=\"caret\"></span>\r\n\t</button>\r\n\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t<li><a href=\"#\" component=\"category/watching\" data-state=\"watching\"><i component=\"category/watching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-inbox\"></i> [[category:watching]]<p class=\"help-text\"><small>[[category:watching.description]]</small></p></a></li>\r\n\r\n\t\t<li><a href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\"><i component=\"category/notwatching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-clock-o\"></i> [[category:not-watching]]<p class=\"help-text\"><small>[[category:not-watching.description]]</small></p></a></li>\r\n\r\n\t\t<li><a href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\"><i component=\"category/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-eye-slash\"></i> [[category:ignoring]]<p class=\"help-text\"><small>[[category:ignoring.description]]</small></p></a></li>\r\n\t</ul>\r\n</div>\r\n" :
        "") + 
      "\r\n</li>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
