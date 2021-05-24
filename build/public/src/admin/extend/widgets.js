"use strict";define("admin/extend/widgets",["jquery-ui/widgets/sortable","jquery-ui/widgets/draggable","jquery-ui/widgets/droppable","jquery-ui/widgets/datepicker"],function(){var t={};t.init=function(){$("#widgets .nav-pills .dropdown-menu a").on("click",function(t){var a=$(this);$("#widgets .tab-pane").removeClass("active");var e=a.attr("data-template");$('#widgets .tab-pane[data-template="'+e+'"]').addClass("active");$("#widgets .selected-template").text(e);$("#widgets .nav-pills .dropdown").trigger("click");t.preventDefault();return false});$("#widget-selector").on("change",function(){$(".available-widgets [data-widget]").addClass("hide");$('.available-widgets [data-widget="'+$(this).val()+'"]').removeClass("hide")});$("#widget-selector").trigger("change");i();r()};function a(){$('[data-location="drafts"]').insertAfter($('[data-location="drafts"]').closest(".tab-content"));$("#widgets .available-widgets .widget-panel").draggable({helper:function(t){return $(t.target).parents(".widget-panel").clone()},distance:10,connectToSortable:".widget-area"});$("#widgets .available-containers .containers > [data-container-html]").draggable({helper:function(t){var a=$(t.target);a=a.attr("data-container-html")?a:a.parents("[data-container-html]");return a.clone().addClass("block").width(a.width()).css("opacity","0.5")},distance:10}).each(function(){$(this).attr("data-container-html",$(this).attr("data-container-html").replace(/\\\{([\s\S]*?)\\\}/g,"{$1}"))});$("#widgets .widget-area").sortable({update:function(t,a){e(a.item);n(a.item)},connectWith:"div"}).on("click",".delete-widget",function(){var t=$(this).parents(".widget-panel");bootbox.confirm("[[admin/extend/widgets:alert.confirm-delete]]",function(a){if(a){t.remove()}})}).on("mouseup","> .panel > .panel-heading",function(t){if(!($(this).parent().is(".ui-sortable-helper")||$(t.target).closest(".delete-widget").length)){$(this).parent().children(".panel-body").toggleClass("hidden")}});$("#save").on("click",t);function t(){var t=[];$("#widgets [data-template][data-location]").each(function(a,e){e=$(e);var n=e.attr("data-template");var i=e.attr("data-location");var r=e.children(".widget-area");var d=[];r.find(".widget-panel[data-widget]").each(function(){var t={};var a=$(this).find("form").serializeArray();for(var e in a){if(a.hasOwnProperty(e)){if(a[e].name){if(t[a[e].name]){if(!Array.isArray(t[a[e].name])){t[a[e].name]=[t[a[e].name]]}t[a[e].name].push(a[e].value)}else{t[a[e].name]=a[e].value}}}}d.push({widget:$(this).attr("data-widget"),data:t})});t.push({template:n,location:i,widgets:d})});socket.emit("admin.widgets.set",t,function(t){if(t){app.alertError(t.message)}app.alert({alert_id:"admin:widgets",type:"success",title:"[[admin/extend/widgets:alert.updated]]",message:"[[admin/extend/widgets:alert.update-success]]",timeout:2500})})}$(".color-selector").on("click",".btn",function(){var t=$(this);var a=t.parents(".color-selector");var e=a.parents("[data-container-html]");var n=[];a.children().each(function(){n.push($(this).attr("data-class"))});e.removeClass(n.join(" ")).addClass(t.attr("data-class"));e.attr("data-container-html",e.attr("data-container-html").replace(/class="[a-zA-Z0-9-\s]+"/,'class="'+e[0].className.replace(" pointer ui-draggable ui-draggable-handle","")+'"'))})}function e(t){var a=(new Date).getFullYear();t.find(".date-selector").datepicker({changeMonth:true,changeYear:true,yearRange:a+":"+(a+100)})}function n(t){if(!t.hasClass("block")){t.addClass("block").css("width","").css("height","").droppable({accept:"[data-container-html]",drop:function(t,a){var e=$(this);e.find(".panel-body .container-html").val(a.draggable.attr("data-container-html"));e.find(".panel-body").removeClass("hidden")},hoverClass:"panel-info"}).children(".panel-heading").append('<div class="pull-right pointer"><span class="delete-widget"><i class="fa fa-times-circle"></i></span></div><div class="pull-left pointer"><span class="toggle-widget"><i class="fa fa-chevron-circle-down"></i></span>&nbsp;</div>').children("small").html("")}}function i(){function t(t,a){if(a.title){var e=t.find(".panel-heading strong");e.text(e.text()+" - "+a.title)}t.find("input, textarea, select").each(function(){var t=$(this);var e=a[t.attr("name")];if(t.attr("type")==="checkbox"){t.prop("checked",!!e).trigger("change")}else{t.val(e)}});return t}$.get(config.relative_path+"/api/admin/extend/widgets",function(i){var r=i.areas;for(var d=0;d<r.length;d+=1){var l=r[d];var s=$('#widgets .area[data-template="'+l.template+'"][data-location="'+l.location+'"]').find(".widget-area");s.html("");for(var c=0;c<l.data.length;c+=1){var o=l.data[c];var g=$('.available-widgets [data-widget="'+o.widget+'"]').clone(true).removeClass("hide");s.append(t(g,o.data));n(g);e(g)}}a()})}function r(){var t=$('[component="clone"]');var a=$('[component="clone/button"]');t.find(".dropdown-menu li").on("click",function(){var t=$(this).find("a").text();a.translateHtml("[[admin/extend/widgets:clone-from]] <strong>"+t+"</strong>");a.attr("data-template",t)});a.on("click",function(){var t=a.attr("data-template");if(!t){return app.alertError("[[admin/extend/widgets:error.select-clone]]")}var e=$("#active-widgets .active.tab-pane[data-template] .area");var n=$('#active-widgets .tab-pane[data-template="'+t+'"] .area');var i=e.map(function(){return $(this).attr("data-location")}).get();var r=n.map(function(){var t=$(this).attr("data-location");return i.indexOf(t)!==-1?t:undefined}).get().filter(function(t){return t});function d(a){$('#active-widgets .tab-pane[data-template="'+t+'"] [data-location="'+a+'"]').each(function(){$(this).find("[data-widget]").each(function(){var t=$(this).clone(true);$('#active-widgets .active.tab-pane[data-template]:not([data-template="global"]) [data-location="'+a+'"] .widget-area').append(t)})})}for(var l=0,s=r.length;l<s;l++){var c=r[l];d(c)}app.alertSuccess("[[admin/extend/widgets:alert.clone-success]]")})}return t});
//# sourceMappingURL=widgets.js.map