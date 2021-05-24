
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
    return "<div class=\"panel panel-primary tool-modal\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">[[topic:thread_tools.move-posts]]</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<div>\r\n\t\t\t<label for=\"topicId\">[[topic:topic-id]]</label>\r\n\t\t\t<input id=\"topicId\" type=\"text\" class=\"form-control\"><br/>\r\n\t\t</div>\r\n\t\t<p>\r\n    \t\t<strong><span id=\"pids\"></span></strong>\r\n        </p>\r\n        <p class=\"help-block\">\r\n            [[topic:move_posts_instruction]]\r\n        </p>\r\n\t</div>\r\n\t<div class=\"panel-footer text-right\">\r\n\t\t<div class=\"btn-group\">\r\n\t\t\t<button class=\"btn btn-link btn-xs\" id=\"move_posts_cancel\">[[global:buttons.close]]</button>\r\n\t\t\t<button class=\"btn btn-primary btn-xs\" id=\"move_posts_confirm\" disabled>[[topic:move]]</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
