(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{8869:function(e,t,o){"use strict";o.d(t,{Z:function(){return l}});var n=o(5893),r=o(1664),a=o(1163),i=o(9008),s=o(4409),c=o.n(s);function l(e){var t=e.children;return(0,n.jsxs)("div",{children:[(0,n.jsx)(d,{}),(0,n.jsx)(h,{}),(0,n.jsx)("div",{className:c().content,children:t}),(0,n.jsx)(u,{})]})}function d(){return(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Loot"}),(0,n.jsx)("meta",{name:"title",content:"Loot"}),(0,n.jsx)("meta",{name:"description",content:"Loot is randomized adventurer gear generated and stored on chain."}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"https://www.lootproject.com/"}),(0,n.jsx)("meta",{property:"og:title",content:"Loot"}),(0,n.jsx)("meta",{property:"og:description",content:"Loot is randomized adventurer gear generated and stored on chain."}),(0,n.jsx)("meta",{property:"og:image",content:"https://lootproject.com/meta.png"}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{property:"twitter:url",content:"https://www.lootproject.com/"}),(0,n.jsx)("meta",{property:"twitter:title",content:"Loot"}),(0,n.jsx)("meta",{property:"twitter:description",content:"Loot is randomized adventurer gear generated and stored on chain."}),(0,n.jsx)("meta",{property:"twitter:image",content:"https://lootproject.com/meta.png"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap",rel:"stylesheet"})]})}function h(){var e=(0,a.useRouter)().pathname;return(0,n.jsxs)("div",{className:c().header,children:[(0,n.jsx)("div",{className:c().header__logo,children:(0,n.jsx)(r.default,{href:"/",children:(0,n.jsx)("a",{children:"Lootv3"})})}),(0,n.jsx)("div",{className:c().header__links,children:(0,n.jsx)("ul",{children:[{name:"FAQ",path:"/faq"}].map((function(t,o){var a=t.name,i=t.path;return(0,n.jsx)("li",{children:(0,n.jsx)(r.default,{href:i,children:(0,n.jsx)("a",{className:e===i?c().header__links_active:void 0,children:a})})},o)}))})})]})}function u(){return(0,n.jsx)("div",{className:c().footer,children:(0,n.jsxs)("p",{children:["This website is"," ",(0,n.jsx)("a",{href:"https://github.com/lootprojectv2/website",target:"_blank",rel:"noopener noreferrer",children:"open-source"}),"."]})})}},2167:function(e,t,o){"use strict";var n=o(3038);t.default=void 0;var r,a=(r=o(7294))&&r.__esModule?r:{default:r},i=o(1063),s=o(4651),c=o(7426);var l={};function d(e,t,o,n){if(e&&i.isLocalURL(t)){e.prefetch(t,o,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+o+(r?"%"+r:"")]=!0}}var h=function(e){var t,o=!1!==e.prefetch,r=s.useRouter(),h=a.default.useMemo((function(){var t=i.resolveHref(r,e.href,!0),o=n(t,2),a=o[0],s=o[1];return{href:a,as:e.as?i.resolveHref(r,e.as):s||a}}),[r,e.href,e.as]),u=h.href,f=h.as,p=e.children,m=e.replace,y=e.shallow,v=e.scroll,w=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var x=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,j=c.useIntersection({rootMargin:"200px"}),_=n(j,2),g=_[0],b=_[1],L=a.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);a.default.useEffect((function(){var e=b&&o&&i.isLocalURL(u),t="undefined"!==typeof w?w:r&&r.locale,n=l[u+"%"+f+(t?"%"+t:"")];e&&!n&&d(r,u,f,{locale:t})}),[f,u,b,w,o,r]);var k={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,a,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(o))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[r?"replace":"push"](o,n,{shallow:a,locale:c,scroll:s}))}(e,r,u,f,m,y,v,w)},onMouseEnter:function(e){i.isLocalURL(u)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(r,u,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof w?w:r&&r.locale,S=r&&r.isLocaleDomain&&i.getDomainLocale(f,E,r&&r.locales,r&&r.domainLocales);k.href=S||i.addBasePath(i.addLocale(f,E,r&&r.defaultLocale))}return a.default.cloneElement(t,k)};t.default=h},7426:function(e,t,o){"use strict";var n=o(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,o=e.disabled||!i,c=r.useRef(),l=r.useState(!1),d=n(l,2),h=d[0],u=d[1],f=r.useCallback((function(e){c.current&&(c.current(),c.current=void 0),o||h||e&&e.tagName&&(c.current=function(e,t,o){var n=function(e){var t=e.rootMargin||"",o=s.get(t);if(o)return o;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return s.set(t,o={id:t,observer:r,elements:n}),o}(o),r=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(r))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[o,t,h]);return r.useEffect((function(){if(!i&&!h){var e=a.requestIdleCallback((function(){return u(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[h]),[f,h]};var r=o(7294),a=o(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},2617:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s}});var n=o(5893),r=o(8869),a=o(2790),i=o.n(a);function s(){return(0,n.jsx)(r.Z,{children:(0,n.jsxs)("div",{className:i().faq,children:[(0,n.jsx)("h2",{children:"Synthetic Loot"}),(0,n.jsxs)("div",{className:i().faq__item,children:[(0,n.jsx)("h3",{children:"What is Synthetic Loot?"}),(0,n.jsxs)("p",{children:['Synthetic Loot (or "Synth Loot") is a virtual form of Loot that ',(0,n.jsx)("strong",{children:"every wallet has automatically"})," and ",(0,n.jsx)("strong",{children:"does not need to be minted"}),"."]}),(0,n.jsx)("p",{children:"Unlike original Loot which is generated based on a numeric identifier, Synthetic Loot is generated based on your Ethereum wallet address. Developers who are building on top of Loot can easily incorporate Synthetic Loot into their projects, allowing the entire Ethereum ecosystem to access their projects for free."}),(0,n.jsxs)("p",{children:["To see this in action, visit ",(0,n.jsx)("a",{href:"https://loot.stephancill.co.za/#/",children:"this example page"})," and enter your wallet address or ENS handle. You will see your Synth Loot and a generated character that corresponds to it."]}),(0,n.jsx)("p",{children:"This data is portable and will travel with you to any project that supports it."}),(0,n.jsx)("h3",{children:"Why can't I mint Synthetic Loot?"}),(0,n.jsx)("p",{children:'Right now, there is very little reason to. Because Synthetic Loot is already associated with every Ethereum address that ever has been or ever will be, there will never be anyone "without" Synthetic Loot. Still, there is no reason someone couldn\'t build a mintable contract on top of Synthetic Loot for those who want to do it.'}),(0,n.jsx)("h3",{children:"What if someone re-rolls wallets to get desirable loot?"}),(0,n.jsxs)("p",{children:["In many cases, this doesn't matter. However, developers who are concerned about this can instead use variants like ",(0,n.jsx)("a",{href:"https://etherscan.io/address/0x9f4541a829f8a8c0fb5f26971b0ed19f995782b1#code",children:"Synthetic Lesser Loot"}),", which reduces the rarity of some items. Synthetic variants still share all the same promises: they are available to every wallet automatically and do not need to be minted."]}),(0,n.jsx)("h3",{children:"Why not expand the original Loot bag numbers past 8,000?"}),(0,n.jsx)("p",{children:"The original Loot contract is immutable, meaning it is impossible to change. Although it is possible to create new contracts that expand the numbers, it is purely up to the community to decide whether or not to do this and for developers to decide what is and isn't recognized."}),(0,n.jsx)("p",{children:"It's important for the community to think about precedents. Expanding in small increments now only kicks the can down the road. As more people want Loot, more contracts will need to be created, which will lead to fragmentation where infrastructure and utilities that are built today will not work with the contracts of tomorrow."}),(0,n.jsx)("p",{children:"Conversely, the supply of Synthetic Loot is always equal to the number of Ethereum wallets and will always be forward compatible."}),(0,n.jsx)("h3",{children:"Acknowledgements"}),(0,n.jsxs)("p",{children:["Thank you to community member ",(0,n.jsx)("a",{href:"https://twitter.com/stephancill",children:"@stephancill"})," for creating the demonstration page."]})]})]})})}},7893:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/synthloot",function(){return o(2617)}])},4409:function(e){e.exports={header:"Layout_header__2iLWX",header__logo:"Layout_header__logo__2Zu-m",header__links:"Layout_header__links__2tkmn",header__links_active:"Layout_header__links_active__2DGAB",footer:"Layout_footer__2GYdL"}},2790:function(e){e.exports={faq:"FAQ_faq__Rl9-M",faq__item:"FAQ_faq__item__1YopL"}},9008:function(e,t,o){e.exports=o(639)},1664:function(e,t,o){e.exports=o(2167)},1163:function(e,t,o){e.exports=o(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=7893,e(e.s=t);var t}));var t=e.O();_N_E=t}]);