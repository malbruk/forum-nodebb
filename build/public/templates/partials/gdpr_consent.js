
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
    return "<div class=\"form-group\">\r\n\t<p class=\"lead\">[[user:consent.lead]]</p>\r\n\t<p>[[user:consent.intro]]</p>\r\n\t<div class=\"checkbox\">\r\n\t\t<label>\r\n\t\t\t<input type=\"checkbox\" name=\"gdpr_agree_data\" id=\"gdpr_agree_data\"> <strong>[[register:gdpr_agree_data]]</strong>\r\n\t\t</label>\r\n\t</div>\r\n\t<p>\r\n\t\t[[user:consent.email_intro]]\r\n\t\t" + 
      (guard((context != null) ? context['digestEnabled'] : null) ?
        "\r\n\t\t[[user:consent.digest_frequency, " + 
          __escape(guard((context != null) ? context['digestFrequency'] : null)) + 
          "]]\r\n\t\t" :
        "\r\n\t\t[[user:consent.digest_off]]\r\n\t\t") + 
      "\r\n\t</p>\r\n\t\r\n\t<div class=\"checkbox\">\r\n\t\t<label>\r\n\t\t\t<input type=\"checkbox\" name=\"gdpr_agree_email\" id=\"gdpr_agree_email\"> <strong>[[register:gdpr_agree_email]]</strong>\r\n\t\t</label>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
