(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{293:function(t,e,n){"use strict";n.r(e);n(18);var r=n(3),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("t",r.slug,{deep:!0}).only(["title","description","img","slug","author"]).sortBy("createdAt","desc").fetch();case 3:return c=e.sent,e.abrupt("return",{posts:c});case 5:case"end":return e.stop()}}),e)})))()}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-900 tracking-wide min-h-screen"},[n("div",{staticClass:"container mx-auto py-10 px-6 max-w-screen-md"},[n("ul",{staticClass:"mt-8"},t._l(t.posts,(function(e){return n("li",{key:e.slug},[n("NuxtLink",{staticClass:"my-4 px-2 py-4 bg-gray-800 hover:bg-gray-700 border-0 rounded-lg block transition-colors duration-150 ease-in-out",attrs:{to:{path:"/t/"+e.author.name+"/"+e.slug}}},[n("div",{staticClass:"px-2"},[n("h2",{staticClass:"text-2xl md:text-3xl font-bold text-red-600 leading-snug block"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),n("p",{staticClass:"mb-2 text-gray-100"},[t._v("מאת "+t._s(e.author.hname))]),t._v(" "),n("p",{staticClass:"text-xl text-gray-500"},[t._v(t._s(e.description))])])])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);