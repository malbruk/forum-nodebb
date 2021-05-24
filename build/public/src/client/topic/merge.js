"use strict";define("forum/topic/merge",function(){var t={};var e;var i;var n={};t.init=function(n){n=n||function(){};if(e){return}app.parseAndTranslate("partials/merge_topics_modal",{},function(a){e=a;$("body").append(e);i=e.find("#merge_topics_confirm");e.find(".close,#merge_topics_cancel").on("click",s);$("#content").on("click",'[component="topic/select"]',c);r();i.on("click",function(){o(i)});app.enableTopicSearch({searchElements:{inputEl:e.find(".topic-search-input"),resultEl:e.find(".quick-search-container")},searchOptions:{in:"titles"}});e.on("click","[data-tid]",function(){if($(this).attr("data-tid")){t.addTopic($(this).attr("data-tid"))}return false});n()})};t.addTopic=function(t,e){e=e||function(){};socket.emit("topics.getTopic",t,function(i,c){if(i){return app.alertError(i)}var o=c?c.title:"No title";if(n[t]){delete n[t]}else{n[t]=o}a();r();e()})};function c(i){if(!e){return}var n=$(this).parents('[component="category/topic"]').attr("data-tid");t.addTopic(n);i.preventDefault();i.stopPropagation();return false}function o(t){t.attr("disabled",true);var i=Object.keys(n);var c={};if(e.find(".merge-main-topic-radio").is(":checked")){c.mainTid=e.find(".merge-main-topic-select").val()}else if(e.find(".merge-new-title-radio").is(":checked")){c.newTopicTitle=e.find(".merge-new-title-input").val()}socket.emit("topics.merge",{tids:i,options:c},function(e,i){t.removeAttr("disabled");if(e){return app.alertError(e.message)}ajaxify.go("/topic/"+i);s()})}function r(){if(!e){return}var t=Object.keys(n);t.sort(function(t,e){return t-e});var i=t.map(function(t){return{tid:t,title:n[t]}});if(t.length){app.parseAndTranslate("partials/merge_topics_modal",{config:config,topics:i},function(t){e.find(".topics-section").html(t.find(".topics-section").html());e.find(".merge-main-topic-select").html(t.find(".merge-main-topic-select").html())})}else{e.find(".topics-section").translateHtml("[[error:no-topics-selected]]")}}function a(){if(Object.keys(n).length){i.removeAttr("disabled")}else{i.attr("disabled",true)}}function s(){if(e){e.remove();e=null}n={};$("#content").off("click",'[component="topic/select"]',c)}return t});
//# sourceMappingURL=merge.js.map