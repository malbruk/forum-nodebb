
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
    return "<div class=\"alert alert-info\">\r\n<ul>\r\n\t<li>\r\n\t\t<p>Register an imgur app <a href=\"https://api.imgur.com/oauth2/addclient\">here</a>, make sure you fill in the callback URL properly. It should be <code>http://yourforum.com/admin/plugins/imgur</code> adjust based on your forum url.\r\n\t\t</p>\r\n\t</li>\r\n\t<li>\r\n\t\t<p>\r\n\t\tOnce you register you will get a client ID and secret. Enter these values below.\r\n\t\t</p>\r\n\t</li>\r\n\t<li><p>Optionally, create an album for your forum on imgur and put its album ID below. You can find the ID by going to the album URL and taking the characters after the `/a`. Ex. for `http://imgur.com/a/abcdef`, the ID is `abcdef`</p></li>\r\n\r\n\t<li><p>After entering the values click Save and then Authorize, you will be redirected to imgur to allow access to your app. </p></li>\r\n\t<li><p>Once you allow access you will be redirected back to nodebb.</p></li>\r\n</ul>\r\n</div>\r\n\r\n<form class=\"form\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-6 col-xs-12\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label>Imgur Client ID</label>\r\n\t\t\t\t<input id=\"imgurClientID\" type=\"text\" class=\"form-control\" placeholder=\"Enter Imgur Client ID\" value=\"" + 
      __escape(guard((context != null && context['settings'] != null) ? context['settings']['imgurClientID'] : null)) + 
      "\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label>Imgur Secret</label>\r\n\t\t\t\t<input id=\"imgurSecret\" type=\"text\" class=\"form-control\" placeholder=\"Enter Imgur Secret\" value=\"" + 
      __escape(guard((context != null && context['settings'] != null) ? context['settings']['imgurSecret'] : null)) + 
      "\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label>Album ID</label>\r\n\t\t\t\t<input id=\"albumID\" type=\"text\" class=\"form-control\" placeholder=\"Enter Album ID\" value=\"" + 
      __escape(guard((context != null && context['settings'] != null) ? context['settings']['albumID'] : null)) + 
      "\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n\r\n" + 
      (guard((context != null) ? context['needsAuthorization'] : null) ?
        "\r\n<div class=\"alert alert-warning\">\r\nAccess Token and/or Refresh Token missing. Please click Authorize below.\r\n</div>\r\n" :
        "") + 
      "\r\n\r\n\r\n<button class=\"btn btn-primary\" id=\"save\">Save</button>\r\n<button class=\"btn btn-success\" id=\"authorize\">Authorize</button>\r\n\r\n<input id=\"csrf_token\" type=\"hidden\" value=\"" + 
      __escape(guard((context != null) ? context['csrf'] : null)) + 
      "\" />\r\n\r\n<script type=\"text/javascript\">\r\n\r\n\tvar params = {};\r\n\tvar queryString = location.hash.substring(1);\r\n\tvar regex = /([^&=]+)=([^&]*)/g;\r\n\tvar m;\r\n\twhile (m = regex.exec(queryString)) {\r\n\t\tparams[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);\r\n\t}\r\n\r\n\tif (params.access_token && params.refresh_token) {\r\n\t\tparams._csrf = $('#csrf_token').val();\r\n\t\t$.post(config.relative_path + '/admin/plugins/imgur/tokens', params, function () {\r\n\t\t\tapp.alertSuccess('Authorized');\r\n\t\t});\r\n\t}\r\n\r\n\t$('#save').on('click', function() {\r\n\t\tvar data = {\r\n\t\t\t_csrf: $('#csrf_token').val(),\r\n\t\t\timgurClientID: $('#imgurClientID').val(),\r\n\t\t\timgurSecret: $('#imgurSecret').val(),\r\n\t\t\talbumID: $('#albumID').val()\r\n\t\t};\r\n\r\n\t\t$.post(config.relative_path + '/api/admin/plugins/imgur/save', data, function(data) {\r\n\t\t\tapp.alertSuccess(data.message);\r\n\t\t});\r\n\r\n\t\treturn false;\r\n\t});\r\n\r\n\t$('#authorize').on('click', function() {\r\n\t\tvar clientID = $('#imgurClientID').val();\r\n\t\tif (!clientID) {\r\n\t\t\treturn app.alertError('[[error:no-imgur-client-id]]');\r\n\t\t}\r\n\r\n\t\twindow.location = 'https://api.imgur.com/oauth2/authorize?client_id=' + clientID + '&response_type=token';\r\n\t});\r\n</script>\r\n\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
