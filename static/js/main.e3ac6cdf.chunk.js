(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var a,c=t(5),i=t.n(c),r=t(4),l=t(1),s=(t(10),t(2)),o=t.n(s),j=t(0),d=function(e){var n=e.total,t=e.perPage,a=e.currentPage,c=e.onPageChange,i=Array.from({length:Math.ceil(n/t)},(function(e,n){return n+1})),r=a===i[0],l=a===i[i.length-1];return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:r}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":r,onClick:function(){return e=a,void(r||c(e-1));var e},children:"\xab"})},"prevLink"),i.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:e===a}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){c(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:l}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":l,onClick:function(){return e=a,void(l||c(e+1));var e},children:"\xbb"})},"nextLink")]})};!function(e){e[e.Three=3]="Three",e[e.Five=5]="Five",e[e.Ten=10]="Ten",e[e.Twenty=20]="Twenty"}(a||(a={}));var h=function(e,n){for(var t=[],a=e;a<=n;a+=1)t.push(a);return t}(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(l.useState)(a.Five),n=Object(r.a)(e,2),t=n[0],c=n[1],i=Object(l.useState)(1),s=Object(r.a)(i,2),o=s[0],u=s[1],p=o*t-t,b=o*t;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(o," (items ").concat(p+1," - ").concat(b>42?42:b," of ").concat(h.length,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){c(+e.target.value),u(1)},value:t,children:[Object(j.jsx)("option",{value:a.Three,children:a.Three}),Object(j.jsx)("option",{value:a.Five,children:a.Five}),Object(j.jsx)("option",{value:a.Ten,children:a.Ten}),Object(j.jsx)("option",{value:a.Twenty,children:a.Twenty})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:h.length,perPage:t,currentPage:o,onPageChange:u}),Object(j.jsx)("ul",{children:h.map((function(e,n){return n<p||n>b-1?null:Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};i.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e3ac6cdf.chunk.js.map