
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
    return "<script>\r\n\twindow.addEventListener('load', function () {\r\n\t\tdefine(config.relative_path + '/assets/templates/500.js', function () {\r\n\t\t\tfunction compiled(helpers, context, get, iter, helper) {\r\n\t\t\t\treturn '<div class=\"alert alert-danger\">\\n\\t<strong>[[global:500.title]]</strong>\\n\\t<p>[[global:500.message]]</p>\\n\\t<p>' + \r\n\t\t\t\t\thelpers.__escape(get(context && context['path'])) + '</p>\\n\\t' + \r\n\t\t\t\t\t(get(context && context['error']) ? '<p>' + helpers.__escape(get(context && context['error'])) + '</p>' : '') + '\\n\\n\\t' + \r\n\t\t\t\t\t(get(context && context['returnLink']) ? '\\n\\t<p>[[error:goback]]</p>\\n\\t' : '') + '\\n</div>\\n';\r\n\t\t\t}\r\n\r\n\t\t\treturn compiled;\r\n\t\t});\r\n\t});\r\n</script>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
