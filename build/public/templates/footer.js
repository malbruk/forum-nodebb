
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
    return "\t\t</div><!-- /.container#content -->\r\n\t</main>\r\n\t" + 
      (guard((context != null) ? context['isSpider'] : null) ?
        "" :
        "\r\n\t<div class=\"topic-search hidden\">\r\n\t\t<div class=\"btn-group\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-default count\"></button>\r\n\t\t\t<button type=\"button\" class=\"btn btn-default prev\"><i class=\"fa fa-fw fa-angle-up\"></i></button>\r\n\t\t\t<button type=\"button\" class=\"btn btn-default next\"><i class=\"fa fa-fw fa-angle-down\"></i></button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div component=\"toaster/tray\" class=\"alert-window\">\r\n\t\t<div id=\"reconnect-alert\" class=\"alert alert-dismissable alert-warning clearfix hide\" component=\"toaster/toast\">\r\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\r\n\t\t\t<p>[[global:reconnecting-message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
          "]]</p>\r\n\t\t</div>\r\n\t</div>\r\n\t") + 
      "\r\n\r\n\t<div class=\"hide\">\r\n\t<script>\r\n\twindow.addEventListener('load', function () {\r\n\t\tdefine(config.relative_path + '/assets/templates/500.js', function () {\r\n\t\t\tfunction compiled(helpers, context, get, iter, helper) {\r\n\t\t\t\treturn '<div class=\"alert alert-danger\">\\n\\t<strong>[[global:500.title]]</strong>\\n\\t<p>[[global:500.message]]</p>\\n\\t<p>' + \r\n\t\t\t\t\thelpers.__escape(get(context && context['path'])) + '</p>\\n\\t' + \r\n\t\t\t\t\t(get(context && context['error']) ? '<p>' + helpers.__escape(get(context && context['error'])) + '</p>' : '') + '\\n\\n\\t' + \r\n\t\t\t\t\t(get(context && context['returnLink']) ? '\\n\\t<p>[[error:goback]]</p>\\n\\t' : '') + '\\n</div>\\n';\r\n\t\t\t}\r\n\r\n\t\t\treturn compiled;\r\n\t\t});\r\n\t});\r\n</script>\r\n\t</div>\r\n\r\n\t<script defer src=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/nodebb.min.js?" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
      "\"></script>\r\n\r\n" + 
      compiled.blocks['scripts'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n<script>\r\n    if (document.readyState === 'loading') {\r\n        document.addEventListener('DOMContentLoaded', prepareFooter);\r\n    } else {\r\n        prepareFooter();\r\n    }\r\n\r\n    function prepareFooter() {\r\n        " + 
      (guard((context != null) ? context['useCustomJS'] : null) ?
        "\r\n        " + 
          guard((context != null) ? context['customJS'] : null) + 
          "\r\n        " :
        "") + 
      "\r\n\r\n        $(document).ready(function () {\r\n            app.coldLoad();\r\n        });\r\n    }\r\n</script>\r\n</body>\r\n</html>\r\n";
  }

  compiled.blocks = {
    'scripts': function scripts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['scripts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<script defer type=\"text/javascript\" src=\"" + 
          __escape(guard((context != null && context['scripts'] != null && context['scripts'][key0] != null) ? context['scripts'][key0]['src'] : null)) + 
          "\"></script>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
