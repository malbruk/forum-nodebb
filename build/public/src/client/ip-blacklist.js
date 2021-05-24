"use strict";define("forum/ip-blacklist",["Chart","benchpress"],function(a,t){var e={};e.init=function(){var a=$("#blacklist-rules");a.on("keyup",function(){$("#blacklist-rules-holder").val(a.val())});$('[data-action="apply"]').on("click",function(){socket.emit("blacklist.save",a.val(),function(a){if(a){return app.alertError(a.message)}app.alert({type:"success",alert_id:"blacklist-saved",title:"[[ip-blacklist:alerts.applied-success]]"})})});$('[data-action="test"]').on("click",function(){socket.emit("blacklist.validate",{rules:a.val()},function(a,e){if(a){return app.alertError(a.message)}t.render("admin/partials/blacklist-validate",e).then(function(a){bootbox.alert(a)})})});e.setupAnalytics()};e.setupAnalytics=function(){var t=document.getElementById("blacklist:hourly");var e=document.getElementById("blacklist:daily");var l=utils.getHoursArray().map(function(a,t){return t%3?"":a});var r=utils.getDaysArray().slice(-7).map(function(a,t){return t%3?"":a});if(utils.isMobile()){a.defaults.global.tooltips.enabled=false}var o={"blacklist:hourly":{labels:l,datasets:[{label:"",backgroundColor:"rgba(186,139,175,0.2)",borderColor:"rgba(186,139,175,1)",pointBackgroundColor:"rgba(186,139,175,1)",pointHoverBackgroundColor:"#fff",pointBorderColor:"#fff",pointHoverBorderColor:"rgba(186,139,175,1)",data:ajaxify.data.analytics.hourly}]},"blacklist:daily":{labels:r,datasets:[{label:"",backgroundColor:"rgba(151,187,205,0.2)",borderColor:"rgba(151,187,205,1)",pointBackgroundColor:"rgba(151,187,205,1)",pointHoverBackgroundColor:"#fff",pointBorderColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",data:ajaxify.data.analytics.daily}]}};t.width=$(t).parent().width();e.width=$(e).parent().width();new a(t.getContext("2d"),{type:"line",data:o["blacklist:hourly"],options:{responsive:true,animation:false,legend:{display:false},scales:{yAxes:[{ticks:{beginAtZero:true}}]}}});new a(e.getContext("2d"),{type:"line",data:o["blacklist:daily"],options:{responsive:true,animation:false,legend:{display:false},scales:{yAxes:[{ticks:{beginAtZero:true}}]}}})};return e});
//# sourceMappingURL=ip-blacklist.js.map