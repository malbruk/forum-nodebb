"use strict";define("composer/preview",function(){var e={};var i=0;e.render=function(e,n){n=n||function(){};if(!e.find(".preview-container").is(":visible")){return n()}if(i){clearTimeout(i);i=0}var r=e.find("textarea");i=setTimeout(function(){socket.emit("plugins.composer.renderPreview",r.val(),function(r,t){i=0;if(r){return}t=$("<div>"+t+"</div>");t.find("img:not(.not-responsive)").addClass("img-responsive");e.find(".preview").html(t);$(window).trigger("action:composer.preview");n()})},250)};e.matchScroll=function(e){if(!e.find(".preview-container").is(":visible")){return}var i=e.find("textarea");var n=e.find(".preview");if(i.length&&n.length){var r=i[0].scrollHeight-i.height();if(r===0){return}var t=i.scrollTop()/r;n.scrollTop(Math.max(n[0].scrollHeight-n.height(),0)*t)}};e.handleToggler=function(i){e.env=utils.findBootstrapEnvironment();var n=i.find(".write-container .toggle-preview");var r=i.find(".preview-container .toggle-preview");var t=$(".preview-container");var o=$(".write-container");function s(){a(false);if(e.env!=="xs"&&e.env!=="sm"){localStorage.setItem("composer:previewToggled",true)}}function l(){a(true);if(e.env!=="xs"&&e.env!=="sm"){localStorage.removeItem("composer:previewToggled")}}function a(r){if(e.env==="xs"||e.env==="sm"){t.toggleClass("hide",false);o.toggleClass("maximized",false);n.toggleClass("hide",true);t.toggleClass("hidden-xs hidden-sm",!r);o.toggleClass("hidden-xs hidden-sm",r);if(r){e.render(i,function(){})}}else{t.toggleClass("hide",!r);o.toggleClass("maximized",!r);n.toggleClass("hide",r)}e.matchScroll(i)}e.toggle=a;r.on("click",function(){s();i.find(".write").focus()});n.on("click",function(){l();i.find(".write").focus()});if(localStorage.getItem("composer:previewToggled")||(e.env==="xs"||e.env==="sm")){s()}else{l()}};return e});
//# sourceMappingURL=preview.js.map