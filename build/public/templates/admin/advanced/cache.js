
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
    return "\r\n<div class=\"row post-cache\">\r\n\t<div class=\"col-lg-12\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">[[admin/advanced/cache:post-cache]]</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div class=\"checkbox\" data-name=\"post\">\r\n\t\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" " + 
      (guard((context != null && context['postCache'] != null) ? context['postCache']['enabled'] : null) ?
        "checked" :
        "") + 
      ">\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<span>" + 
      __escape(guard((context != null && context['postCache'] != null) ? context['postCache']['length'] : null)) + 
      " / " + 
      __escape(guard((context != null && context['postCache'] != null) ? context['postCache']['max'] : null)) + 
      "</span><br/>\r\n\r\n\t\t\t\t\t\t<div class=\"progress\">\r\n\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"" + 
      __escape(guard((context != null && context['postCache'] != null) ? context['postCache']['percentFull'] : null)) + 
      "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + 
      __escape(guard((context != null && context['postCache'] != null) ? context['postCache']['percentFull'] : null)) + 
      "%;\">\r\n\t\t\t\t\t\t\t\t[[admin/advanced/cache:percent-full, " + 
      __escape(guard((context != null && context['postCache'] != null) ? context['postCache']['percentFull'] : null)) + 
      "]]\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<label>Hits:</label> <span>" + 
      __escape(guard((context != null && context['postCache'] != null) ? context['postCache']['hits'] : null)) + 
      "</span><br/>\r\n\t\t\t\t\t\t<label>Misses:</label> <span>" + 
      __escape(guard((context != null && context['postCache'] != null) ? context['postCache']['misses'] : null)) + 
      "</span><br/>\r\n\t\t\t\t\t\t<label>Hit Ratio:</label> <span>" + 
      __escape(guard((context != null && context['postCache'] != null) ? context['postCache']['hitRatio'] : null)) + 
      "</span><br/>\r\n\r\n\t\t\t\t\t\t<hr/>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"postCacheSize\">[[admin/advanced/cache:post-cache-size]]</label>\r\n\t\t\t\t\t\t\t<input id=\"postCacheSize\" type=\"text\" class=\"form-control\" value=\"\" data-field=\"postCacheSize\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/advanced/cache/dump?name=post\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-download\"></i></a>\r\n\t\t\t\t\t\t<a class=\"btn btn-sm btn-danger clear\" data-name=\"post\"><i class=\"fa fa-trash\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t" + 
      (guard((context != null) ? context['objectCache'] : null) ?
        "\r\n\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">Object Cache</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div class=\"checkbox\" data-name=\"object\">\r\n\t\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" " + 
          (guard((context != null && context['objectCache'] != null) ? context['objectCache']['enabled'] : null) ?
            "checked" :
            "") + 
          ">\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span>" + 
          __escape(guard((context != null && context['objectCache'] != null) ? context['objectCache']['length'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['objectCache'] != null) ? context['objectCache']['max'] : null)) + 
          "</span><br/>\r\n\t\t\t\t\t\t<div class=\"progress\">\r\n\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"" + 
          __escape(guard((context != null && context['objectCache'] != null) ? context['objectCache']['percentFull'] : null)) + 
          "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + 
          __escape(guard((context != null && context['objectCache'] != null) ? context['objectCache']['percentFull'] : null)) + 
          "%;\">\r\n\t\t\t\t\t\t\t\t[[admin/advanced/cache:percent-full, " + 
          __escape(guard((context != null && context['objectCache'] != null) ? context['objectCache']['percentFull'] : null)) + 
          "]]\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<label>Hits:</label> <span>" + 
          __escape(guard((context != null && context['objectCache'] != null) ? context['objectCache']['hits'] : null)) + 
          "</span><br/>\r\n\t\t\t\t\t\t<label>Misses:</label> <span>" + 
          __escape(guard((context != null && context['objectCache'] != null) ? context['objectCache']['misses'] : null)) + 
          "</span><br/>\r\n\t\t\t\t\t\t<label>Hit Ratio:</label> <span>" + 
          __escape(guard((context != null && context['objectCache'] != null) ? context['objectCache']['hitRatio'] : null)) + 
          "</span><br/>\r\n\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/api/admin/advanced/cache/dump?name=object\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-download\"></i></a>\r\n\t\t\t\t\t\t<a class=\"btn btn-sm btn-danger clear\" data-name=\"object\"><i class=\"fa fa-trash\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">Group Cache</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div class=\"checkbox\" data-name=\"group\">\r\n\t\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" " + 
      (guard((context != null && context['groupCache'] != null) ? context['groupCache']['enabled'] : null) ?
        "checked" :
        "") + 
      ">\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span>" + 
      __escape(guard((context != null && context['groupCache'] != null) ? context['groupCache']['length'] : null)) + 
      " / " + 
      __escape(guard((context != null && context['groupCache'] != null) ? context['groupCache']['max'] : null)) + 
      "</span><br/>\r\n\r\n\t\t\t\t\t\t<div class=\"progress\">\r\n\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"" + 
      __escape(guard((context != null && context['groupCache'] != null) ? context['groupCache']['percentFull'] : null)) + 
      "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + 
      __escape(guard((context != null && context['groupCache'] != null) ? context['groupCache']['percentFull'] : null)) + 
      "%;\">\r\n\t\t\t\t\t\t\t\t[[admin/advanced/cache:percent-full, " + 
      __escape(guard((context != null && context['groupCache'] != null) ? context['groupCache']['percentFull'] : null)) + 
      "]]\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<label>Hits:</label> <span>" + 
      __escape(guard((context != null && context['groupCache'] != null) ? context['groupCache']['hits'] : null)) + 
      "</span><br/>\r\n\t\t\t\t\t\t<label>Misses:</label> <span>" + 
      __escape(guard((context != null && context['groupCache'] != null) ? context['groupCache']['misses'] : null)) + 
      "</span><br/>\r\n\t\t\t\t\t\t<label>Hit Ratio:</label> <span>" + 
      __escape(guard((context != null && context['groupCache'] != null) ? context['groupCache']['hitRatio'] : null)) + 
      "</span><br/>\r\n\t\t\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/advanced/cache/dump?name=group\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-download\"></i></a>\r\n\t\t\t\t\t\t<a class=\"btn btn-sm btn-danger clear\" data-name=\"group\"><i class=\"fa fa-trash\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">Local Cache</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div class=\"checkbox\" data-name=\"local\">\r\n\t\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" " + 
      (guard((context != null && context['localCache'] != null) ? context['localCache']['enabled'] : null) ?
        "checked" :
        "") + 
      ">\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span>" + 
      __escape(guard((context != null && context['localCache'] != null) ? context['localCache']['length'] : null)) + 
      " / " + 
      __escape(guard((context != null && context['localCache'] != null) ? context['localCache']['max'] : null)) + 
      "</span><br/>\r\n\r\n\t\t\t\t\t\t<div class=\"progress\">\r\n\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"" + 
      __escape(guard((context != null && context['localCache'] != null) ? context['localCache']['percentFull'] : null)) + 
      "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + 
      __escape(guard((context != null && context['localCache'] != null) ? context['localCache']['percentFull'] : null)) + 
      "%;\">\r\n\t\t\t\t\t\t\t\t[[admin/advanced/cache:percent-full, " + 
      __escape(guard((context != null && context['localCache'] != null) ? context['localCache']['percentFull'] : null)) + 
      "]]\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<label>Hits:</label> <span>" + 
      __escape(guard((context != null && context['localCache'] != null) ? context['localCache']['hits'] : null)) + 
      "</span><br/>\r\n\t\t\t\t\t\t<label>Misses:</label> <span>" + 
      __escape(guard((context != null && context['localCache'] != null) ? context['localCache']['misses'] : null)) + 
      "</span><br/>\r\n\t\t\t\t\t\t<label>Hit Ratio:</label> <span>" + 
      __escape(guard((context != null && context['localCache'] != null) ? context['localCache']['hitRatio'] : null)) + 
      "</span><br/>\r\n\t\t\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/advanced/cache/dump?name=local\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-download\"></i></a>\r\n\t\t\t\t\t\t<a class=\"btn btn-sm btn-danger clear\" data-name=\"local\"><i class=\"fa fa-trash\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n    <i class=\"material-icons\">save</i>\r\n</button>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
