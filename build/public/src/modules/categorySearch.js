"use strict";define("categorySearch",function(){var e={};e.init=function(e,t){var n=null;t=t||{};t.privilege=t.privilege||"topics:read";t.states=t.states||["watching","notwatching","ignoring"];var o=[];if(Array.isArray(t.localCategories)){o=t.localCategories.map(e=>({...e}))}t.selectedCids=t.selectedCids||ajaxify.data.selectedCids||[];var i=e.find('[component="category-selector-search"]');if(!i.length){return}var a=i.parent('[component="category/dropdown"]').length>0||i.parent('[component="category-selector"]').length>0;e.on("show.bs.dropdown",function(){if(a){e.find(".dropdown-toggle").addClass("hidden");i.removeClass("hidden")}function o(){var e=i.find("input").val();if(e.length>1||!e&&!n){r(e,function(e){n=n||e;s(e)})}else if(!e&&n){n.forEach(function(e){e.selected=t.selectedCids.includes(e.cid)});s(n)}}i.on("click",function(e){e.preventDefault();e.stopPropagation()});i.find("input").val("").on("keyup",utils.debounce(o,300));o()});e.on("shown.bs.dropdown",function(){i.find("input").focus()});e.on("hide.bs.dropdown",function(){if(a){e.find(".dropdown-toggle").removeClass("hidden");i.addClass("hidden")}i.off("click");i.find("input").off("keyup")});function r(e,n){socket.emit("categories.categorySearch",{query:e,parentCid:t.parentCid||0,selectedCids:t.selectedCids,privilege:t.privilege,states:t.states,showLinks:t.showLinks},function(e,t){if(e){return app.alertError(e)}n(o.concat(t))})}function s(n){app.parseAndTranslate(t.template,{categoryItems:n.slice(0,200),selectedCategory:ajaxify.data.selectedCategory,allCategoriesUrl:ajaxify.data.allCategoriesUrl},function(t){e.find('[component="category/list"]').replaceWith(t.find('[component="category/list"]'));e.find('[component="category/list"] [component="category/no-matches"]').toggleClass("hidden",!!n.length)})}};return e});
//# sourceMappingURL=categorySearch.js.map