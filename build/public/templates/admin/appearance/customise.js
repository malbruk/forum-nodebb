
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
    return "<div id=\"customise\" class=\"customise\">\r\n\t<ul class=\"nav nav-pills\">\r\n\t\t<li class=\"active\"><a href=\"#custom-css\" data-toggle=\"tab\">[[admin/appearance/customise:custom-css]]</a></li>\r\n\t\t<li><a href=\"#custom-js\" data-toggle=\"tab\">[[admin/appearance/customise:custom-js]]</a></li>\r\n\t\t<li><a href=\"#custom-header\" data-toggle=\"tab\">[[admin/appearance/customise:custom-header]]</a></li>\r\n\t</ul>\r\n\t<br />\r\n\t<div class=\"tab-content\">\r\n\t\t<div class=\"tab-pane fade active in\" id=\"custom-css\">\r\n\t\t\t<p>\r\n\t\t\t\t[[admin/appearance/customise:custom-css.description]]\r\n\t\t\t</p>\r\n\t\t\t<div id=\"customCSS\"></div>\r\n\t\t\t<input type=\"hidden\" id=\"customCSS-holder\" value=\"\" data-field=\"customCSS\" />\r\n\r\n\t\t\t<br />\r\n\t\t\t<form class=\"form\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"useCustomCSS\">\r\n\t\t\t\t\t\t<input class=\"mdl-switch__input\" id=\"useCustomCSS\" type=\"checkbox\" data-field=\"useCustomCSS\" />\r\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/appearance/customise:custom-css.enable]]</span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"tab-pane fade\" id=\"custom-js\">\r\n\t\t\t<p>\r\n\t\t\t\t[[admin/appearance/customise:custom-js.description]]\r\n\t\t\t</p>\r\n\t\t\t<div id=\"customJS\"></div>\r\n\t\t\t<input type=\"hidden\" id=\"customJS-holder\" value=\"\" data-field=\"customJS\" />\r\n\r\n\t\t\t<br />\r\n\t\t\t<form class=\"form\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"useCustomJS\">\r\n\t\t\t\t\t\t<input class=\"mdl-switch__input\" id=\"useCustomJS\" type=\"checkbox\" data-field=\"useCustomJS\" />\r\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/appearance/customise:custom-js.enable]]</span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"tab-pane fade\" id=\"custom-header\">\r\n\t\t\t<p>\r\n\t\t\t\t[[admin/appearance/customise:custom-header.description]]\r\n\t\t\t</p>\r\n\r\n\t\t\t<div id=\"customHTML\"></div>\r\n\t\t\t<input type=\"hidden\" id=\"customHTML-holder\" value=\"\" data-field=\"customHTML\" />\r\n\r\n\t\t\t<br />\r\n\t\t\t<form class=\"form\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"useCustomHTML\">\r\n\t\t\t\t\t\t<input class=\"mdl-switch__input\" id=\"useCustomHTML\" type=\"checkbox\" data-field=\"useCustomHTML\" />\r\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/appearance/customise:custom-header.enable]]</span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<form class=\"form\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"enableLiveReload\">\r\n\t\t\t\t\t<input class=\"mdl-switch__input\" id=\"enableLiveReload\" type=\"checkbox\" data-field=\"enableLiveReload\" checked />\r\n\t\t\t\t\t<span class=\"mdl-switch__label\">\r\n\t\t\t\t\t\t[[admin/appearance/customise:custom-css.livereload]]\r\n\t\t\t\t\t\t<small>[[admin/appearance/customise:custom-css.livereload.description]]</small>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
