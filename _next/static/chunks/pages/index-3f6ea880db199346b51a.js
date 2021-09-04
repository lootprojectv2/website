(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8869:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),o=r(1664),a=r(1163),i=r(9008),s=r(4409),c=r.n(s);function l(e){var t=e.children;return(0,n.jsxs)("div",{children:[(0,n.jsx)(u,{}),(0,n.jsx)(d,{}),(0,n.jsx)("div",{className:c().content,children:t}),(0,n.jsx)(f,{})]})}function u(){return(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Loot"}),(0,n.jsx)("meta",{name:"title",content:"Loot"}),(0,n.jsx)("meta",{name:"description",content:"Loot is randomized adventurer gear generated and stored on chain."}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"https://www.lootproject.com/"}),(0,n.jsx)("meta",{property:"og:title",content:"Loot"}),(0,n.jsx)("meta",{property:"og:description",content:"Loot is randomized adventurer gear generated and stored on chain."}),(0,n.jsx)("meta",{property:"og:image",content:"https://lootproject.com/meta.png"}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{property:"twitter:url",content:"https://www.lootproject.com/"}),(0,n.jsx)("meta",{property:"twitter:title",content:"Loot"}),(0,n.jsx)("meta",{property:"twitter:description",content:"Loot is randomized adventurer gear generated and stored on chain."}),(0,n.jsx)("meta",{property:"twitter:image",content:"https://lootproject.com/meta.png"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap",rel:"stylesheet"})]})}function d(){var e=(0,a.useRouter)().pathname;return(0,n.jsxs)("div",{className:c().header,children:[(0,n.jsx)("div",{className:c().header__logo,children:(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{children:"Lootv3"})})}),(0,n.jsx)("div",{className:c().header__links,children:(0,n.jsx)("ul",{children:[{name:"FAQ",path:"/faq"}].map((function(t,r){var a=t.name,i=t.path;return(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:i,children:(0,n.jsx)("a",{className:e===i?c().header__links_active:void 0,children:a})})},r)}))})})]})}function f(){return(0,n.jsx)("div",{className:c().footer,children:(0,n.jsxs)("p",{children:["This website is"," ",(0,n.jsx)("a",{href:"https://github.com/lootprojectv2/website",target:"_blank",rel:"noopener noreferrer",children:"open-source"}),"."]})})}},2167:function(e,t,r){"use strict";var n=r(3038);t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},i=r(1063),s=r(4651),c=r(7426);var l={};function u(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,o=s.useRouter(),d=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),r=n(t,2),a=r[0],s=r[1];return{href:a,as:e.as?i.resolveHref(o,e.as):s||a}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,_=e.replace,m=e.shallow,v=e.scroll,j=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var x=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,g=c.useIntersection({rootMargin:"200px"}),y=n(g,2),b=y[0],w=y[1],L=a.default.useCallback((function(e){b(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,b]);a.default.useEffect((function(){var e=w&&r&&i.isLocalURL(f),t="undefined"!==typeof j?j:o&&o.locale,n=l[f+"%"+p+(t?"%"+t:"")];e&&!n&&u(o,f,p,{locale:t})}),[p,f,w,j,r,o]);var k={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:s}))}(e,o,f,p,_,m,v,j)},onMouseEnter:function(e){i.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof j?j:o&&o.locale,N=o&&o.isLocaleDomain&&i.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);k.href=N||i.addBasePath(i.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=d},7426:function(e,t,r){"use strict";var n=r(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,c=o.useRef(),l=o.useState(!1),u=n(l,2),d=u[0],f=u[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||d||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,d]);return o.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[p,d]};var o=r(7294),a=r(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},844:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893),o=r(8869),a=r(5594),i=r.n(a);function s(){return(0,n.jsx)(o.Z,{children:(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:i().home__cta,children:[(0,n.jsx)("h1",{children:"Loot"}),(0,n.jsx)("ul",{children:[{name:"Twitter",url:"https://twitter.com/lootprojectv2"},{name:"Contract",url:"https://etherscan.io/address/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7"}].map((function(e,t){var r=e.name,o=e.url;return(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:r})},t)}))}),(0,n.jsxs)("p",{children:["Loot is randomized adventurer gear generated and stored on chain.",(0,n.jsx)("br",{})," Stats, images, and other functionality are intentionally omitted for others to interpret. ",(0,n.jsx)("br",{})," Feel free to use Loot in any way you want."]})]})})})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(844)}])},4409:function(e){e.exports={header:"Layout_header__2iLWX",header__logo:"Layout_header__logo__2Zu-m",header__links:"Layout_header__links__2tkmn",header__links_active:"Layout_header__links_active__2DGAB",footer:"Layout_footer__2GYdL"}},5594:function(e){e.exports={home__cta:"Home_home__cta__10yCx",home__feature:"Home_home__feature__GTZaW",home__bag:"Home_home__bag__1YhOb",home__bag_attributes:"Home_home__bag_attributes__3uVtG"}},9008:function(e,t,r){e.exports=r(639)},1664:function(e,t,r){e.exports=r(2167)},1163:function(e,t,r){e.exports=r(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);