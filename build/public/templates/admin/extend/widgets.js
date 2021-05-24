
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
    return "<div id=\"widgets\" class=\"row\">\r\n\t<div class=\"col-md-8\" id=\"active-widgets\">\r\n\t\t<ul class=\"nav nav-pills\">\r\n\r\n\t\t\t<li role=\"presentation\" class=\"dropdown\">\r\n\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t<span class=\"selected-template\">" + 
      __escape(guard((context != null && context['templates'] != null && context['templates']['0'] != null) ? context['templates']['0']['template'] : null)) + 
      "</span> <span class=\"caret\"></span>\r\n\t\t\t\t</a>\r\n\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t" + 
      compiled.blocks['templates'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t" + 
      iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<div class=\"tab-pane " + 
          (index === 0 ?
            "active" :
            "") + 
          "\" data-template=\"" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "\">\r\n\t\t\t\t\t" + 
          iter(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['areas'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t\t\t\t<div class=\"area\" data-template=\"" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              "\" data-location=\"" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null)) + 
              "\">\r\n\t\t\t\t\t\t\t<h4>" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['name'] : null)) + 
              " <small>" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              " / " + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null)) + 
              "</small></h4>\r\n\t\t\t\t\t\t\t<div class=\"well widget-area\">\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-md-4\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">[[admin/extend/widgets:available]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<div class=\"available-widgets\">\r\n\t\t\t\t\t<p>[[admin/extend/widgets:explanation]]</p>\r\n\t\t\t\t\t" + 
      (guard((context != null && context['availableWidgets'] != null) ? context['availableWidgets']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t\t<div class=\"alert alert-info\">[[admin/extend/widgets:none-installed, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/extend/plugins]]</div>\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<select id=\"widget-selector\" class=\"form-control\">\r\n\t\t\t\t\t\t\t" + 
      compiled.blocks['availableWidgets'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['availableWidgets'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t<div data-widget=\"" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['widget'] : null)) + 
          "\" class=\"panel widget-panel panel-default pointer hide\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<strong>" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['name'] : null)) + 
          "</strong>\r\n\t\t\t\t\t\t\t\t\t<small><br />" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['description'] : null)) + 
          "</small>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body hidden\">\r\n\t\t\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['content'] : null)) + 
          "\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"btn-group\" component=\"clone\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" component=\"clone/button\">[[admin/extend/widgets:clone-from]] ...</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t<span class=\"caret\"></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu pull-right\">\r\n\t\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t" + 
          (index === 0 ?
            "" :
            "\r\n\t\t\t\t\t\t\t<li><a href=\"#\">" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              "</a></li>\r\n\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">[[admin/extend/widgets:containers.available]]</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<p>[[admin/extend/widgets:containers.explanation]]</p>\r\n\t\t\t\t<div class=\"available-containers\">\r\n\t\t\t\t\t<div class=\"containers\">\r\n\t\t\t\t\t\t<div class=\"pointer\" style=\"padding: 20px; border: 1px dotted #dedede; margin-bottom: 20px;\" data-container-html=\" \">\r\n\t\t\t\t\t\t\t[[admin/extend/widgets:containers.none]]\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"well pointer\" data-container-html='<div class=\"well\">" + 
      "{{body}}</div>'>\r\n\t\t\t\t\t\t\t[[admin/extend/widgets:container.well]]\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"jumbotron pointer\" data-container-html='<div class=\"jumbotron\">" + 
      "{{body}}</div>'>\r\n\t\t\t\t\t\t\t[[admin/extend/widgets:container.jumbotron]]\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel\" data-container-html='<div class=\"panel panel-default\"><div class=\"panel-body\">" + 
      "{{body}}</div></div>'>\r\n\t\t\t\t\t\t\t<div class=\"panel-body pointer\">\r\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.panel]]\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel panel-default pointer\" data-container-html='<div class=\"panel panel-default\"><div class=\"panel-heading\"><h3 class=\"panel-title\">" + 
      "{{title}}</h3></div><div class=\"panel-body\">" + 
      "{{body}}</div></div>'>\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.panel-header]]\r\n\t\t\t\t\t\t\t\t<div class=\"pull-right color-selector\">\r\n\t\t\t\t\t\t\t\t\t<button data-class=\"panel-default\" class=\"btn btn-xs\">&nbsp;&nbsp;</button>\r\n\t\t\t\t\t\t\t\t\t<button data-class=\"panel-primary\" class=\"btn btn-xs btn-primary\">&nbsp;&nbsp;</button>\r\n\t\t\t\t\t\t\t\t\t<button data-class=\"panel-success\" class=\"btn btn-xs btn-success\">&nbsp;&nbsp;</button>\r\n\t\t\t\t\t\t\t\t\t<button data-class=\"panel-info\" class=\"btn btn-xs btn-info\">&nbsp;&nbsp;</button>\r\n\t\t\t\t\t\t\t\t\t<button data-class=\"panel-warning\" class=\"btn btn-xs btn-warning\">&nbsp;&nbsp;</button>\r\n\t\t\t\t\t\t\t\t\t<button data-class=\"panel-danger\" class=\"btn btn-xs btn-danger\">&nbsp;&nbsp;</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.panel-body]]\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"alert alert-info pointer\" data-container-html='<div class=\"alert alert-info\">" + 
      "{{body}}</div>'>\r\n\t\t\t\t\t\t\t[[admin/extend/widgets:container.alert]]\r\n\t\t\t\t\t\t\t<div class=\"pull-right color-selector\">\r\n\t\t\t\t\t\t\t\t<button data-class=\"alert-success\" class=\"btn btn-xs btn-success\">&nbsp;&nbsp;</button>\r\n\t\t\t\t\t\t\t\t<button data-class=\"alert-info\" class=\"btn btn-xs btn-info\">&nbsp;&nbsp;</button>\r\n\t\t\t\t\t\t\t\t<button data-class=\"alert-warning\" class=\"btn btn-xs btn-warning\">&nbsp;&nbsp;</button>\r\n\t\t\t\t\t\t\t\t<button data-class=\"alert-danger\" class=\"btn btn-xs btn-danger\">&nbsp;&nbsp;</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n\t<i class=\"material-icons\">save</i>\r\n</button>";
  }

  compiled.blocks = {
    'templates': function templates(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<li><a href=\"#\" data-template=\"" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "\" data-toggle=\"pill\">" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "</a></li>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'availableWidgets': function availableWidgets(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['availableWidgets'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['widget'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['name'] : null)) + 
          "</option>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
