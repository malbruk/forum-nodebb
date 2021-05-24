
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
    return "<!DOCTYPE html>\r\n<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\r\n<head>\r\n    <meta charset=\"utf-8\"> <!-- utf-8 works for most cases -->\r\n    <meta name=\"viewport\" content=\"width=device-width\"> <!-- Forcing initial-scale shouldn't be necessary -->\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <!-- Use the latest (edge) version of IE rendering engine -->\r\n    <meta name=\"x-apple-disable-message-reformatting\">  <!-- Disable auto-scale in iOS 10 Mail entirely -->\r\n    <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->\r\n\r\n    <!-- Web Font / @font-face : BEGIN -->\r\n\t<!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. -->\r\n\r\n    <!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->\r\n    <!--[if mso]>\r\n        <style>\r\n            * {\r\n                font-family: sans-serif !important;\r\n            }\r\n        </style>\r\n    <![endif]-->\r\n\r\n    <!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->\r\n    <!--[if !mso]><!-->\r\n        <!-- insert web font reference, eg: <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'> -->\r\n    <!--<![endif]-->\r\n\r\n    <!-- Web Font / @font-face : END -->\r\n\r\n\t<!-- CSS Reset -->\r\n    <style>\r\n\r\n        /* What it does: Remove spaces around the email design added by some email clients. */\r\n        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */\r\n        html,\r\n        body {\r\n            margin: 0 auto !important;\r\n            padding: 0 !important;\r\n            height: 100% !important;\r\n            width: 100% !important;\r\n        }\r\n\r\n        /* What it does: Stops email clients resizing small text. */\r\n        * {\r\n            -ms-text-size-adjust: 100%;\r\n            -webkit-text-size-adjust: 100%;\r\n        }\r\n\r\n        /* What it does: Centers email on Android 4.4 */\r\n        div[style*=\"margin: 16px 0\"] {\r\n            margin:0 !important;\r\n        }\r\n\r\n        /* What it does: Stops Outlook from adding extra spacing to tables. */\r\n        table,\r\n        td {\r\n            mso-table-lspace: 0pt !important;\r\n            mso-table-rspace: 0pt !important;\r\n        }\r\n\r\n        /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */\r\n        table {\r\n            border-spacing: 0 !important;\r\n            border-collapse: collapse !important;\r\n            table-layout: fixed !important;\r\n            margin: 0 auto !important;\r\n        }\r\n        table table table {\r\n            table-layout: auto;\r\n        }\r\n\r\n        /* What it does: Uses a better rendering method when resizing images in IE. */\r\n        img {\r\n            -ms-interpolation-mode:bicubic;\r\n        }\r\n\r\n        /* What it does: A work-around for email clients meddling in triggered links. */\r\n        *[x-apple-data-detectors],\t/* iOS */\r\n        .x-gmail-data-detectors, \t/* Gmail */\r\n        .x-gmail-data-detectors *,\r\n        .aBn {\r\n            border-bottom: 0 !important;\r\n            cursor: default !important;\r\n            color: inherit !important;\r\n            text-decoration: none !important;\r\n            font-size: inherit !important;\r\n            font-family: inherit !important;\r\n            font-weight: inherit !important;\r\n            line-height: inherit !important;\r\n        }\r\n\r\n        /* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */\r\n        .a6S {\r\n\t        display: none !important;\r\n\t        opacity: 0.01 !important;\r\n        }\r\n        /* If the above doesn't work, add a .g-img class to any image in question. */\r\n        img.g-img + div {\r\n\t        display:none !important;\r\n\t   \t}\r\n\r\n        /* What it does: Prevents underlining the button text in Windows 10 */\r\n        .button-link {\r\n            text-decoration: none !important;\r\n        }\r\n\r\n        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */\r\n        /* Create one of these media queries for each additional viewport size you'd like to fix */\r\n        /* Thanks to Eric Lepetit (@ericlepetitsf) for help troubleshooting */\r\n        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) { /* iPhone 6 and 6+ */\r\n            .email-container {\r\n                min-width: 375px !important;\r\n            }\r\n        }\r\n\r\n    </style>\r\n\r\n    <!-- Progressive Enhancements -->\r\n    <style>\r\n\r\n        /* What it does: Hover styles for buttons */\r\n        .button-td,\r\n        .button-a {\r\n            transition: all 100ms ease-in;\r\n        }\r\n        .button-td:hover,\r\n        .button-a:hover {\r\n            background: #555555 !important;\r\n            border-color: #555555 !important;\r\n        }\r\n\r\n        /* Media Queries */\r\n        @media screen and (max-width: 600px) {\r\n\r\n            /* What it does: Adjust typography on small screens to improve readability */\r\n\t\t\t.email-container p {\r\n\t\t\t\tfont-size: 17px !important;\r\n\t\t\t\tline-height: 26px !important;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n        .notification-body img {\r\n            max-width: 100%;\r\n        }\r\n\t</style>\r\n\r\n\t<!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->\r\n\t<!--[if gte mso 9]>\r\n\t<xml>\r\n\t\t<o:OfficeDocumentSettings>\r\n\t\t\t<o:AllowPNG/>\r\n\t\t\t<o:PixelsPerInch>96</o:PixelsPerInch>\r\n\t\t</o:OfficeDocumentSettings>\r\n\t</xml>\r\n\t<![endif]-->\r\n\r\n</head>\r\n\r\n<body width=\"100%\" bgcolor=\"#f6f6f6\" style=\"margin: 0; mso-line-height-rule: exactly;\">\r\n\t<center style=\"width: 100%; background: #f6f6f6; text-align: left;\">\r\n\r\n\t\t<!--\r\n\t\t\tSet the email width. Defined in two places:\r\n\t\t\t1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 600px.\r\n\t\t\t2. MSO tags for Desktop Windows Outlook enforce a 600px width.\r\n\t\t-->\r\n\t\t<div style=\"max-width: 600px; margin: auto;" + 
      (guard((context != null) ? context['rtl'] : null) ?
        " text-align: right; direction: rtl;" :
        "") + 
      "\" class=\"email-container\">\r\n\t\t\t<!--[if mso]>\r\n\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"600\" align=\"center\">\r\n\t\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<![endif]-->\r\n\r\n\t\t\t<!-- Email Header : BEGIN -->\r\n\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 600px;\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"padding: 20px 0; text-align: center\">\r\n\t\t\t\t\t\t" + 
      (guard((context != null && context['logo'] != null) ? context['logo']['src'] : null) ?
        "\r\n\t\t\t\t\t\t<img src=\"" + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['src'] : null)) + 
          "\" height=\"" + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['height'] : null)) + 
          "\" width=\"" + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['width'] : null)) + 
          "\" alt=\"" + 
          __escape(guard((context != null) ? context['site_title'] : null)) + 
          "\" border=\"0\" style=\"height: " + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['height'] : null)) + 
          "px; width: " + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['width'] : null)) + 
          "px; background: #f6f6f6; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #333333;\">\r\n\t\t\t\t\t\t" :
        "\r\n\t\t\t\t\t\t&nbsp;\r\n\t\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<!-- Email Header : END -->";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
