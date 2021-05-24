"use strict";define("api",["hooks"],e=>{const t={};const s=config.relative_path+"/api/v3";function n(t,n){t.url=t.url.startsWith("/api")?config.relative_path+t.url:s+t.url;async function r(s){({options:t}=await e.fire("filter:api.options",{options:t}));$.ajax(t).done(e=>{s(null,e&&e.hasOwnProperty("status")&&e.hasOwnProperty("response")?e.response:e||{})}).fail(e=>{let t;if(e.responseJSON){t=e.responseJSON.status&&e.responseJSON.status.message?e.responseJSON.status.message:e.responseJSON.error}s(new Error(t||e.statusText))})}if(typeof n==="function"){r(n);return}return new Promise((e,t)=>{r(function(s,n){if(s)t(s);else e(n)})})}t.get=((e,t,s)=>n({url:e+(Object.keys(t).length?"?"+$.param(t):"")},s));t.head=((e,t,s)=>n({url:e+(Object.keys(t).length?"?"+$.param(t):""),method:"head"},s));t.post=((e,t,s)=>n({url:e,method:"post",data:JSON.stringify(t),contentType:"application/json; charset=utf-8",headers:{"x-csrf-token":config.csrf_token}},s));t.put=((e,t,s)=>n({url:e,method:"put",data:JSON.stringify(t),contentType:"application/json; charset=utf-8",headers:{"x-csrf-token":config.csrf_token}},s));t.del=((e,t,s)=>n({url:e,method:"delete",data:JSON.stringify(t),contentType:"application/json; charset=utf-8",headers:{"x-csrf-token":config.csrf_token}},s));t.delete=t.del;return t});
//# sourceMappingURL=api.js.map