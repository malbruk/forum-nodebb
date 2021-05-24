
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
    return "\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<div class=\"alert-window\" component=\"toaster/tray\"></div>\r\n\r\n\t<div id=\"footer\" class=\"container\" style=\"padding-top: 50px; display:none;\">\r\n\t\t<footer class=\"footer\">Copyright &copy; 2015 <a target=\"_blank\" href=\"https://nodebb.org\">NodeBB</a> by <a target=\"_blank\" href=\"https://github.com/psychobunny\">psychobunny</a>, <a href=\"https://github.com/julianlam\" target=\"_blank\">julianlam</a>, <a href=\"https://github.com/barisusakli\" target=\"_blank\">barisusakli</a> from <a target=\"_blank\" href=\"http://www.designcreateplay.com\">designcreateplay</a></footer>\r\n\t</div>\r\n\t<script>\r\n\t\twindow.addEventListener('DOMContentLoaded', function () {\r\n\t\t\t$(document).ready(function () {\r\n\t\t\t\tapp.coldLoad();\r\n\t\t\t});\r\n\t\t});\r\n\t</script>\r\n</body>\r\n</html>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
