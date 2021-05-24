
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
    return "<ul class=\"nav nav-pills\">\r\n\t<li>\r\n\t\t<a href=\"#trending\" data-toggle=\"tab\">\r\n\t\t\t[[admin/extend/plugins:trending]]\r\n\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t<li class=\"active\">\r\n\t\t<a href=\"#installed\" data-toggle=\"tab\">\r\n\t\t\t[[admin/extend/plugins:installed]]\r\n\t\t\t<span class=\"badge\">" + 
      __escape(guard((context != null) ? context['installedCount'] : null)) + 
      "</span>\r\n\t\t</a>\r\n\t</li>\r\n\t<li>\r\n\t\t<a href=\"#active\" data-toggle=\"tab\">\r\n\t\t\t[[admin/extend/plugins:active]]\r\n\t\t\t<span class=\"badge\">" + 
      __escape(guard((context != null) ? context['activeCount'] : null)) + 
      "</span>\r\n\t\t</a>\r\n\t</li>\r\n\t<li>\r\n\t\t<a href=\"#deactive\" data-toggle=\"tab\">\r\n\t\t\t[[admin/extend/plugins:inactive]]\r\n\t\t\t<span class=\"badge\">" + 
      __escape(guard((context != null) ? context['inactiveCount'] : null)) + 
      "</span>\r\n\t\t</a>\r\n\t</li>\r\n\t<li>\r\n\t\t<a href=\"#upgrade\" data-toggle=\"tab\">\r\n\t\t\t[[admin/extend/plugins:out-of-date]]\r\n\t\t\t<span class=\"badge\">" + 
      __escape(guard((context != null) ? context['upgradeCount'] : null)) + 
      "</span>\r\n\t\t</a>\r\n\t</li>\r\n\t<li>\r\n\t\t<a href=\"#download\" data-toggle=\"tab\">[[admin/extend/plugins:find-plugins]]</a>\r\n\t</li>\r\n</ul>\r\n<br />\r\n\r\n<div class=\"plugins row\">\r\n\t<div class=\"acp-sidebar col-lg-3 col-lg-push-9\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">[[admin/extend/plugins:plugin-search]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<input autofocus class=\"form-control\" type=\"text\" id=\"plugin-search\" placeholder=\"[[admin/extend/plugins:plugin-search-placeholder]]\"/><br/>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t<input id=\"plugin-submit-usage\" class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"submitPluginUsage\" " + 
      (guard((context != null) ? context['submitPluginUsage'] : null) ?
        "checked" :
        "") + 
      "/>\r\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/extend/plugins:submit-anonymous-usage]]</span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">[[admin/extend/plugins:reorder-plugins]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<button class=\"btn btn-default btn-block\" id=\"plugin-order\"><i class=\"fa fa-exchange\"></i> [[admin/extend/plugins:order-active]]</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">[[admin/extend/plugins:dev-interested]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t[[admin/extend/plugins:docs-info]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-lg-9 col-lg-pull-3\">\r\n\t\t<div class=\"tab-content\">\r\n\t\t\t<div class=\"tab-pane fade\" id=\"trending\">\r\n\t\t\t\t<ul class=\"trending\">\r\n\t\t\t\t\t" + 
      compiled.blocks['trending'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"tab-pane fade active in\" id=\"installed\">\r\n\t\t\t\t<ul class=\"installed\">\r\n\t\t\t\t\t" + 
      compiled.blocks['installed'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"tab-pane fade\" id=\"active\">\r\n\t\t\t\t<ul class=\"active\"></ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"tab-pane fade\" id=\"deactive\">\r\n\t\t\t\t<ul class=\"deactive\"></ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"tab-pane fade\" id=\"upgrade\">\r\n\t\t\t\t<ul class=\"upgrade\"></ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"tab-pane fade\" id=\"download\">\r\n\t\t\t\t<ul class=\"download\">\r\n\t\t\t\t\t" + 
      compiled.blocks['download'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"modal fade\" id=\"order-active-plugins-modal\">\r\n\t\t<div class=\"modal-dialog\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n\t\t\t\t\t<h4 class=\"modal-title\">[[admin/extend/plugins:order-active]]</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t[[admin/extend/plugins:order.description]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t[[admin/extend/plugins:order.explanation]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<ul class=\"plugin-list\"></ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">[[global:buttons.close]]</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" id=\"save-plugin-order\">[[global:save]]</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n";
  }

  compiled.blocks = {
    'trending': function trending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['trending'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['error'] : null) ?
            "" :
            "\r\n\t\t\t\t\t<li id=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "\" data-plugin-index=\"" + 
              __escape(index) + 
              "\" data-plugin-id=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "\" data-version=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['version'] : null)) + 
              "\" class=\"clearfix " + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                "active" :
                "") + 
              "\">\r\n\t\t\t\t\t\t<div class=\"pull-right controls\">\r\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['installed'] : null) ?
                "\r\n\t\t\t\t\t\t\t\t" + 
                  (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['isTheme'] : null) ?
                    "\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/admin/appearance/themes\" class=\"btn btn-info\">[[admin/extend/plugins:plugin-item.themes]]</a>\r\n\t\t\t\t\t\t\t\t" :
                    "\r\n\t\t\t\t\t\t\t\t<button data-action=\"toggleActive\" class=\"btn " + 
                      (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                        " btn-warning" :
                        " btn-success") + 
                      "\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i> " + 
                      (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                        "[[admin/extend/plugins:plugin-item.deactivate]]" :
                        "[[admin/extend/plugins:plugin-item.activate]]") + 
                      "</button>\r\n\t\t\t\t\t\t\t\t") + 
                  "\r\n\r\n\t\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\r\n\r\n\t\t\t\t\t\t\t\t" + 
                  (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                    "\r\n\t\t\t\t\t\t\t\t" + 
                      (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['settingsRoute'] : null) ?
                        "\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['settingsRoute'] : null)) + 
                          "\" class=\"btn btn-primary\"><i class=\"fa fa-wrench\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\r\n\t\t\t\t\t\t\t\t" :
                        "") + 
                      "\r\n\t\t\t\t\t\t\t\t" :
                    "") + 
                  "\r\n\t\t\t\t\t\t\t" :
                "\r\n\t\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\r\n\t\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<h2><strong>" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['name'] : null)) + 
              "</strong></h2>\r\n\r\n\t\t\t\t\t\t" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['description'] : null) ?
                "\r\n\t\t\t\t\t\t<p>" + 
                  __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['description'] : null)) + 
                  "</p>\r\n\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['outdated'] : null) ?
                "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
                "") + 
              "\r\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['version'] : null)) + 
              "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['latest'] : null)) + 
              "</strong></small>\r\n\r\n\t\t\t\t\t\t" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['outdated'] : null) ?
                "\r\n\t\t\t\t\t\t<button data-action=\"upgrade\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t" + 
                  (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['isCompatible'] : null) ?
                    "\r\n\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                      __escape(guard((context != null) ? context['version'] : null)) + 
                      "]]\r\n\t\t\t\t\t\t\t" :
                    "\r\n\t\t\t\t\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\r\n\t\t\t\t\t\t\t") + 
                  "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t" :
                "") + 
              "\r\n\r\n\t\t\t\t\t\t" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['url'] : null) ?
                "\r\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
                  __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['url'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['url'] : null)) + 
                  "</a></p>\r\n\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t" + 
          (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['error'] : null) ?
            "\r\n\t\t\t\t\t<li data-plugin-id=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "\" class=\"clearfix\">\r\n\t\t\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-default disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\r\n\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<h2><strong>" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "</strong></h2>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t[[admin/extend/plugins:plugin-item.unknown-explanation]]\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'installed': function installed(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['installed'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['error'] : null) ?
            "" :
            "\r\n\t\t\t\t\t<li id=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "\" data-plugin-index=\"" + 
              __escape(index) + 
              "\" data-plugin-id=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "\" data-version=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['version'] : null)) + 
              "\" class=\"clearfix " + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                "active" :
                "") + 
              "\">\r\n\t\t\t\t\t\t<div class=\"pull-right controls\">\r\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['installed'] : null) ?
                "\r\n\t\t\t\t\t\t\t\t" + 
                  (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['isTheme'] : null) ?
                    "\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/admin/appearance/themes\" class=\"btn btn-info\">[[admin/extend/plugins:plugin-item.themes]]</a>\r\n\t\t\t\t\t\t\t\t" :
                    "\r\n\t\t\t\t\t\t\t\t<button data-action=\"toggleActive\" class=\"btn " + 
                      (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                        " btn-warning" :
                        " btn-success") + 
                      "\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i> " + 
                      (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                        "[[admin/extend/plugins:plugin-item.deactivate]]" :
                        "[[admin/extend/plugins:plugin-item.activate]]") + 
                      "</button>\r\n\t\t\t\t\t\t\t\t") + 
                  "\r\n\r\n\t\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\r\n\r\n\t\t\t\t\t\t\t\t" + 
                  (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                    "\r\n\t\t\t\t\t\t\t\t" + 
                      (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['settingsRoute'] : null) ?
                        "\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['settingsRoute'] : null)) + 
                          "\" class=\"btn btn-primary\"><i class=\"fa fa-wrench\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\r\n\t\t\t\t\t\t\t\t" :
                        "") + 
                      "\r\n\t\t\t\t\t\t\t\t" :
                    "") + 
                  "\r\n\t\t\t\t\t\t\t" :
                "\r\n\t\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\r\n\t\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<h2><strong>" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['name'] : null)) + 
              "</strong></h2>\r\n\r\n\t\t\t\t\t\t" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['description'] : null) ?
                "\r\n\t\t\t\t\t\t<p>" + 
                  __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['description'] : null)) + 
                  "</p>\r\n\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['outdated'] : null) ?
                "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
                "") + 
              "\r\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['version'] : null)) + 
              "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['latest'] : null)) + 
              "</strong></small>\r\n\r\n\t\t\t\t\t\t" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['outdated'] : null) ?
                "\r\n\t\t\t\t\t\t<button data-action=\"upgrade\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t" + 
                  (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['isCompatible'] : null) ?
                    "\r\n\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                      __escape(guard((context != null) ? context['version'] : null)) + 
                      "]]\r\n\t\t\t\t\t\t\t" :
                    "\r\n\t\t\t\t\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\r\n\t\t\t\t\t\t\t") + 
                  "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t" :
                "") + 
              "\r\n\r\n\t\t\t\t\t\t" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['url'] : null) ?
                "\r\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
                  __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['url'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['url'] : null)) + 
                  "</a></p>\r\n\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t" + 
          (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['error'] : null) ?
            "\r\n\t\t\t\t\t<li data-plugin-id=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "\" class=\"clearfix\">\r\n\t\t\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-default disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\r\n\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<h2><strong>" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "</strong></h2>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t[[admin/extend/plugins:plugin-item.unknown-explanation]]\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'download': function download(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['download'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t\t\t<li id=\"" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['id'] : null)) + 
          "\" data-plugin-id=\"" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['id'] : null)) + 
          "\" class=\"clearfix\">\r\n\t\t\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t\t\t<button data-action=\"toggleActive\" class=\"btn btn-success hidden\"><i class=\"fa fa-power-off\"></i> [[admin/extend/plugins:plugin-item.activate]]</button>\r\n\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<h2><strong>" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['name'] : null)) + 
          "</strong></h2>\r\n\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['description'] : null) ?
            "\r\n\t\t\t\t\t\t<p>" + 
              __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['description'] : null)) + 
              "</p>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['latest'] : null)) + 
          "</strong></small>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['isCompatible'] : null) ?
            "\r\n\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
              __escape(guard((context != null) ? context['version'] : null)) + 
              "]]\r\n\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\r\n\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['url'] : null) ?
            "\r\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
              __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['url'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['url'] : null)) + 
              "</a></p>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
