
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
    return "<div id=\"rewards\" class=\"row\">\r\n\t<div class=\"col-lg-9\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">[[admin/extend/rewards:rewards]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<ul id=\"active\">\r\n\t\t\t\t\t" + 
      compiled.blocks['active'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-lg-3 acp-sidebar\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">[[admin/extend/rewards:control-panel]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<button class=\"btn btn-success btn-md\" id=\"new\">[[admin/extend/rewards:new-reward]]</button>\r\n\t\t\t\t<button class=\"btn btn-primary btn-md\" id=\"save\">[[global:save_changes]]</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'active': function active(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['active'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<li data-rid=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['rid'] : null)) + 
          "\" data-id=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['id'] : null)) + 
          "\">\r\n\t\t\t\t\t\t<form class=\"main inline-block\">\r\n\t\t\t\t\t\t\t<div class=\"well inline-block\">\r\n\t\t\t\t\t\t\t\t<label for=\"condition\">[[admin/extend/rewards:condition-if-users]]</label><br />\r\n\t\t\t\t\t\t\t\t<select name=\"condition\" data-selected=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['condition'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null) ? context['conditions'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t\t\t\t\t\t\t<option value=\"" + 
              __escape(guard((context != null && context['conditions'] != null && context['conditions'][key1] != null) ? context['conditions'][key1]['condition'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['conditions'] != null && context['conditions'][key1] != null) ? context['conditions'][key1]['name'] : null)) + 
              "</option>\r\n\t\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"well inline-block\">\r\n\t\t\t\t\t\t\t\t<label for=\"condition\">[[admin/extend/rewards:condition-is]]</label><br />\r\n\t\t\t\t\t\t\t\t<select name=\"conditional\" data-selected=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['conditional'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null) ? context['conditionals'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t\t\t\t\t\t\t<option value=\"" + 
              __escape(guard((context != null && context['conditionals'] != null && context['conditionals'][key1] != null) ? context['conditionals'][key1]['conditional'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['conditionals'] != null && context['conditionals'][key1] != null) ? context['conditionals'][key1]['name'] : null)) + 
              "</option>\r\n\t\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"value\" value=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['value'] : null)) + 
          "\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"well inline-block\">\r\n\t\t\t\t\t\t\t\t<label for=\"condition\">[[admin/extend/rewards:condition-then]]</label><br />\r\n\t\t\t\t\t\t\t\t<select name=\"rid\" data-selected=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['rid'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null) ? context['rewards'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t\t\t\t\t\t\t<option value=\"" + 
              __escape(guard((context != null && context['rewards'] != null && context['rewards'][key1] != null) ? context['rewards'][key1]['rid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['rewards'] != null && context['rewards'][key1] != null) ? context['rewards'][key1]['name'] : null)) + 
              "</option>\r\n\t\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t\t<form class=\"rewards inline-block\">\r\n\t\t\t\t\t\t\t<div class=\"inputs well inline-block\"></div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\r\n\t\t\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t\t\t<div class=\"panel-body inline-block\">\r\n\t\t\t\t\t\t\t\t<form class=\"main\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"claimable\">[[admin/extend/rewards:max-claims]]</label><br />\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"claimable\" value=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['claimable'] : null)) + 
          "\" placeholder=\"1\" />\r\n\t\t\t\t\t\t\t\t\t<small>[[admin/extend/rewards:zero-infinite]]</small>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"panel-body inline-block\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger delete\">[[admin/extend/rewards:delete]]</button>\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['disabled'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-success toggle\">[[admin/extend/rewards:enable]]</button>\r\n\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-warning toggle\">[[admin/extend/rewards:disable]]</button>\r\n\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
