
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
    return "<nav id=\"menu\" class=\"hidden-md hidden-lg\">\r\n\t<section class=\"menu-section quick-actions\">\r\n\t\t<ul class=\"menu-section-list\">\r\n\t\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\r\n\t\t\t<div class=\"button-group\">\r\n\t\t\t\t<li component=\"logout\">\r\n\t<a href=\"#\" title=\"[[admin/menu:logout]]\" data-placement=\"bottom\" data-toggle=\"tooltip\">\r\n\t\t<i class=\"fa fw-fw fa-sign-out\"></i>\r\n\t</a>\r\n</li>\r\n\r\n" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\r\n<li>\r\n\t<a href=\"#\" class=\"restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:restart-forum]]\">\r\n\t\t<i class=\"fa fa-fw fa-repeat\"></i>\r\n\t</a>\r\n</li>\r\n<li>\r\n\t<a href=\"#\" class=\"rebuild-and-restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:rebuild-and-restart-forum]]\">\r\n\t\t<i class=\"fa fa-fw fa-refresh\"></i>\r\n\t</a>\r\n</li>\r\n" :
            "") + 
          "\r\n\r\n<li>\r\n\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:view-forum]]\">\r\n\t\t<i class=\"fa fa-fw fa-home\"></i>\r\n\t</a>\r\n</li>\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t<div class=\"alert " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "alert-warning" :
        "alert-info") + 
      " well-sm\">\r\n\t<span>[[admin/menu:alerts.version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</span>\r\n\t" + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "\r\n\t<span style=\"margin-left: 10px\">\r\n\t\t<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\r\n\t\t\t<u>[[admin/menu:alerts.upgrade, " + 
          __escape(guard((context != null) ? context['latestVersion'] : null)) + 
          "]]</u>\r\n\t\t</a>\r\n\t</span>\r\n\t" :
        "") + 
      "\r\n</div>\r\n\t\t</ul>\r\n\t</section>\r\n\r\n\t" + 
      (guard((context != null) ? context['showManageMenu'] : null) ?
        "\r\n\t<section class=\"menu-section\">\r\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-manage]]</h3>\r\n\t\t<ul class=\"menu-section-list\">\r\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:categories'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a></li>" :
            "") + 
          "\r\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:privileges'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a></li>" :
            "") + 
          "\r\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:users'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a></li>" :
            "") + 
          "\r\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:groups'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a></li>" :
            "") + 
          "\r\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:admins-mods'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a></li>" :
            "") + 
          "\r\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:tags'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a></li>" :
            "") + 
          "\r\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\r\n\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a></li>\r\n\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a></li>\r\n\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a></li>\r\n\r\n\t\t\t<li><a target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a></li>\r\n\t\t\t<li><a target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a></li>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t</ul>\r\n\t</section>\r\n\t" :
        "") + 
      "\r\n\r\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\r\n\t<section class=\"menu-section\">\r\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-settings]]</h3>\r\n\t\t<ul class=\"menu-section-list\">\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/homepage\">[[admin/menu:settings/homepage]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/guest\">[[admin/menu:settings/guest]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/languages\">[[admin/menu:settings/languages]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/social\">[[admin/menu:settings/social]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a></li>\r\n\t\t</ul>\r\n\t</section>\r\n\t<section class=\"menu-section\">\r\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-appearance]]</h3>\r\n\t\t<ul class=\"menu-section-list\">\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a></li>\r\n\t\t</ul>\r\n\t</section>\r\n\r\n\t<section class=\"menu-section\">\r\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-extend]]</h3>\r\n\t\t<ul class=\"menu-section-list\">\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a></li>\r\n\t\t</ul>\r\n\t</section>\r\n\r\n\t" + 
          (guard((context != null && context['plugins'] != null) ? context['plugins']['length'] : null) ?
            "\r\n\t<section class=\"menu-section\">\r\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-plugins]]</h3>\r\n\t\t<ul class=\"menu-section-list\">\r\n\t\t\t" + 
              compiled.blocks['plugins'](helpers, context, guard, iter, helper) + 
              "\r\n\t\t</ul>\r\n\t</section>\r\n\t" :
            "") + 
          "\r\n\r\n\t" + 
          (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
            "\r\n\t<section class=\"menu-section\">\r\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-social-auth]]</h3>\r\n\t\t<ul class=\"menu-section-list\">\r\n\t\t\t" + 
              compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
              "\r\n\t\t</ul>\r\n\t</section>\r\n\t" :
            "") + 
          "\r\n\t" :
        "") + 
      "\r\n\r\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\r\n\t<section class=\"menu-section\">\r\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-advanced]]</h3>\r\n\t\t<ul class=\"menu-section-list\">\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a></li>\r\n\t\t\t" + 
          (guard((context != null) ? context['env'] : null) ?
            "\r\n\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a></li>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t</ul>\r\n\t</section>\r\n\t" :
        "") + 
      "\r\n</nav>\r\n\r\n<main id=\"panel\">\r\n\t<nav class=\"header\" id=\"header\">\r\n\t\t<div class=\"pull-left\">\r\n\t\t\t<div id=\"mobile-menu\">\r\n\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t</div>\r\n\t\t\t<h1 id=\"main-page-title\"></h1>\r\n\t\t</div>\r\n\r\n\t\t<ul class=\"quick-actions hidden-xs hidden-sm\">\r\n\t\t\t<li component=\"logout\">\r\n\t<a href=\"#\" title=\"[[admin/menu:logout]]\" data-placement=\"bottom\" data-toggle=\"tooltip\">\r\n\t\t<i class=\"fa fw-fw fa-sign-out\"></i>\r\n\t</a>\r\n</li>\r\n\r\n" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\r\n<li>\r\n\t<a href=\"#\" class=\"restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:restart-forum]]\">\r\n\t\t<i class=\"fa fa-fw fa-repeat\"></i>\r\n\t</a>\r\n</li>\r\n<li>\r\n\t<a href=\"#\" class=\"rebuild-and-restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:rebuild-and-restart-forum]]\">\r\n\t\t<i class=\"fa fa-fw fa-refresh\"></i>\r\n\t</a>\r\n</li>\r\n" :
        "") + 
      "\r\n\r\n<li>\r\n\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:view-forum]]\">\r\n\t\t<i class=\"fa fa-fw fa-home\"></i>\r\n\t</a>\r\n</li>\r\n\r\n\t\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\r\n\t\t\t<form role=\"search\">\r\n\t\t\t\t<div id=\"acp-search\" >\r\n\t\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t\t\t<input type=\"text\" data-toggle=\"dropdown\" class=\"form-control\" placeholder=\"[[admin/menu:search.placeholder]]\">\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right state-start-typing\" role=\"menu\">\r\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"no-results\">\r\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.no-results]]</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider search-forum\"></li>\r\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"search-forum\">\r\n\t\t\t\t\t\t\t\t<a role=\"menuitem\" target=\"_top\" href=\"#\">\r\n\t\t\t\t\t\t\t\t\t[[admin/menu:search.search-forum]]\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"keep-typing\">\r\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.keep-typing]]</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"start-typing\">\r\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.start-typing]]</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\r\n\t\t\t<div class=\"alert " + 
          (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "alert-warning" :
            "alert-info") + 
          " well-sm\">\r\n\t<span>[[admin/menu:alerts.version, " + 
          __escape(guard((context != null) ? context['version'] : null)) + 
          "]]</span>\r\n\t" + 
          (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "\r\n\t<span style=\"margin-left: 10px\">\r\n\t\t<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\r\n\t\t\t<u>[[admin/menu:alerts.upgrade, " + 
              __escape(guard((context != null) ? context['latestVersion'] : null)) + 
              "]]</u>\r\n\t\t</a>\r\n\t</span>\r\n\t" :
            "") + 
          "\r\n</div>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t<li class=\"reconnect-spinner\">\r\n\t\t\t\t<a href=\"#\" id=\"reconnect\" class=\"hide\" title=\"[[admin/menu:connection-lost, " + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "]]\">\r\n\t\t\t\t\t<i class=\"fa fa-check\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\r\n\r\n\t\t<ul id=\"main-menu\">\r\n\t\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:dashboard'] : null) ?
        "\r\n\t\t\t<li class=\"dropdown menu-item\">\r\n\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-dashboard]]</a>\r\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard\">[[admin/menu:dashboard/overview]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard/logins\">[[admin/menu:dashboard/logins]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard/users\">[[admin/menu:dashboard/users]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard/topics\">[[admin/menu:dashboard/topics]]</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t" + 
      (guard((context != null) ? context['showManageMenu'] : null) ?
        "\r\n\t\t\t<li class=\"dropdown menu-item\">\r\n\t\t\t\t<a id=\"manage-menu\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-manage]]</a>\r\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:categories'] : null) ?
            "<li><a id=\"manage-categories\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a></li>" :
            "") + 
          "\r\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:privileges'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a></li>" :
            "") + 
          "\r\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:users'] : null) ?
            "<li><a id=\"manage-users\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a></li>" :
            "") + 
          "\r\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:groups'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a></li>" :
            "") + 
          "\r\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:admins-mods'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a></li>" :
            "") + 
          "\r\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:tags'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a></li>" :
            "") + 
          "\r\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\r\n\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a></li>\r\n\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t\t\t\t<li><a target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a></li>\r\n\t\t\t\t\t<li><a target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a></li>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\r\n\t\t\t<li class=\"dropdown menu-item\">\r\n\t\t\t\t<a id=\"settings-menu\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-settings]]</a>\r\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t<li><a id=\"settings-general\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/homepage\">[[admin/menu:settings/homepage]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/guest\">[[admin/menu:settings/guest]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/languages\">[[admin/menu:settings/languages]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/social\">[[admin/menu:settings/social]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"dropdown menu-item\">\r\n\t\t\t\t<a id=\"appearance-menu\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-appearance]]</a>\r\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t<li><a id=\"appearance-themes\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a></li>\r\n\t\t\t\t\t<li><a id=\"appearance-skins\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a></li>\r\n\t\t\t\t\t<li><a id=\"appearance-customise\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"dropdown menu-item\">\r\n\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-extend]]</a>\r\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t" + 
          (guard((context != null && context['plugins'] != null) ? context['plugins']['length'] : null) ?
            "\r\n\t\t\t<li class=\"dropdown menu-item\">\r\n\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-plugins]]</a>\r\n\t\t\t\t<ul class=\"dropdown-menu plugins-menu\" role=\"menu\">\r\n\t\t\t\t\t<li class=\"dropdown-header\">[[admin/menu:section-plugins]]</li>\r\n\t\t\t\t\t" + 
              iter(guard((context != null) ? context['plugins'] : null), function each(key0, index, length, value) {
                var key = key0;
                return "\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/admin" + 
                  __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['route'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['name'] : null)) + 
                  "</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\r\n\t\t\t\t\t" + 
              (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
                "\r\n\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t" + 
                  (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
                    "\r\n\t\t\t\t\t<li class=\"dropdown-header\">[[admin/menu:section-social-auth]]</li>\r\n\t\t\t\t\t" + 
                      iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
                        var key = key0;
                        return "\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"" + 
                          __escape(guard((context != null) ? context['relative_path'] : null)) + 
                          "/admin" + 
                          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['route'] : null)) + 
                          "\">" + 
                          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
                          "</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t";
                      }, function alt() {
                        return "";
                      }) + 
                      "\r\n\t\t\t\t\t" :
                    "") + 
                  "\r\n\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t<li data-link=\"1\">\r\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/extend/plugins#download\">[[admin/menu:extend/plugins.install]]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\r\n\t\t\t<li class=\"dropdown menu-item\">\r\n\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-advanced]]</a>\r\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a></li>\r\n\t\t\t\t\t" + 
          (guard((context != null) ? context['env'] : null) ?
            "\r\n\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a></li>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</ul>\r\n\t</nav>";
  }

  compiled.blocks = {
    'plugins': function plugins(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['plugins'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<li>\r\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['name'] : null)) + 
          "</a>\r\n\t\t\t</li>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<li>\r\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
          "</a>\r\n\t\t\t</li>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
