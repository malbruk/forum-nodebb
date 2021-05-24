
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
    return "<div class=\"settings\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t\t<nav class=\"section-content\">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/web-crawler:crawlability-settings]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form>\r\n\t\t\t<strong>[[admin/settings/web-crawler:robots-txt]]</strong><br />\r\n\t\t\t<textarea class=\"form-control\" data-field=\"robots:txt\"></textarea>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/web-crawler:sitemap-feed-settings]]</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form>\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"feeds:disableRSS\">\r\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/web-crawler:disable-rss-feeds]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"feeds:disableSitemap\">\r\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/web-crawler:disable-sitemap-xml]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label>[[admin/settings/web-crawler:sitemap-topics]]</label>\r\n\t\t\t\t<input class=\"form-control\" type=\"text\" data-field=\"sitemapTopics\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<br />\r\n\t\t\t<p>\r\n\t\t\t\t<button id=\"clear-sitemap-cache\" class=\"btn btn-warning\">[[admin/settings/web-crawler:clear-sitemap-cache]]</button>\r\n\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/sitemap.xml\" target=\"_blank\" class=\"btn btn-link\">[[admin/settings/web-crawler:view-sitemap]]</a>\r\n\t\t\t</p>\r\n\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire(['admin/settings'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n</script>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
