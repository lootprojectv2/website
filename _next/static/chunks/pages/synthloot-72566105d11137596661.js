(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{8869:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(5893),r=n(1664),a=n(1163),i=n(9008),s=n(4409),c=n.n(s);function l(e){var t=e.children;return(0,o.jsxs)("div",{children:[(0,o.jsx)(d,{}),(0,o.jsx)(h,{}),(0,o.jsx)("div",{className:c().content,children:t}),(0,o.jsx)(u,{})]})}function d(){return(0,o.jsxs)(i.default,{children:[(0,o.jsx)("title",{children:"LootV3"}),(0,o.jsx)("meta",{name:"title",content:"LootV3"}),(0,o.jsx)("meta",{name:"description",content:"LootV3 is randomized adventurer gear generated and stored on chain."}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:url",content:"https://www.lootprojectv3.com/"}),(0,o.jsx)("meta",{property:"og:title",content:"LootV3"}),(0,o.jsx)("meta",{property:"og:description",content:"LootV3 is randomized adventurer gear generated and stored on chain."}),(0,o.jsx)("meta",{property:"og:image",content:"https://lootprojectv3.com/meta.png"}),(0,o.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{property:"twitter:url",content:"https://www.lootprojectv3.com/"}),(0,o.jsx)("meta",{property:"twitter:title",content:"LootV3"}),(0,o.jsx)("meta",{property:"twitter:description",content:"LootV3 is randomized adventurer gear generated and stored on chain."}),(0,o.jsx)("meta",{property:"twitter:image",content:"https://lootprojectV3.com/meta.png"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap",rel:"stylesheet"}),"next",(0,o.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-L04H1SYW6P"}),(0,o.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments)}\n              gtag('js', new Date());\n              gtag('config', 'G-L04H1SYW6P');\n            "}})]})}function h(){(0,a.useRouter)().pathname;return(0,o.jsxs)("div",{className:c().header,children:[(0,o.jsx)("div",{className:c().header__logo,children:(0,o.jsx)(r.default,{href:"/",children:(0,o.jsx)("a",{children:"LootV3"})})}),(0,o.jsx)("div",{className:c().header__links,children:(0,o.jsx)("ul",{})})]})}function u(){return(0,o.jsx)("div",{className:c().footer,children:(0,o.jsxs)("p",{children:["This website is"," ",(0,o.jsx)("a",{href:"https://github.com/lootprojectv3/website",target:"_blank",rel:"noopener noreferrer",children:"open-source"}),"."]})})}},2167:function(e,t,n){"use strict";var o=n(3038);t.default=void 0;var r,a=(r=n(7294))&&r.__esModule?r:{default:r},i=n(1063),s=n(4651),c=n(7426);var l={};function d(e,t,n,o){if(e&&i.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var h=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),h=a.default.useMemo((function(){var t=i.resolveHref(r,e.href,!0),n=o(t,2),a=n[0],s=n[1];return{href:a,as:e.as?i.resolveHref(r,e.as):s||a}}),[r,e.href,e.as]),u=h.href,f=h.as,p=e.children,m=e.replace,y=e.shallow,g=e.scroll,v=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var w=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,j=c.useIntersection({rootMargin:"200px"}),x=o(j,2),_=x[0],L=x[1],b=a.default.useCallback((function(e){_(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,_]);a.default.useEffect((function(){var e=L&&n&&i.isLocalURL(u),t="undefined"!==typeof v?v:r&&r.locale,o=l[u+"%"+f+(t?"%"+t:"")];e&&!o&&d(r,u,f,{locale:t})}),[f,u,L,v,n,r]);var k={ref:b,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==s&&o.indexOf("#")>=0&&(s=!1),t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:s}))}(e,r,u,f,m,y,g,v)},onMouseEnter:function(e){i.isLocalURL(u)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(r,u,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof v?v:r&&r.locale,S=r&&r.isLocaleDomain&&i.getDomainLocale(f,E,r&&r.locales,r&&r.domainLocales);k.href=S||i.addBasePath(i.addLocale(f,E,r&&r.defaultLocale))}return a.default.cloneElement(t,k)};t.default=h},7426:function(e,t,n){"use strict";var o=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=r.useRef(),l=r.useState(!1),d=o(l,2),h=d[0],u=d[1],f=r.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||h||e&&e.tagName&&(c.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:o}),n}(n),r=o.id,a=o.observer,i=o.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(r))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[n,t,h]);return r.useEffect((function(){if(!i&&!h){var e=a.requestIdleCallback((function(){return u(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[h]),[f,h]};var r=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},2617:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var o=n(5893),r=n(8869),a=n(2790),i=n.n(a);function s(){return(0,o.jsx)(r.Z,{children:(0,o.jsxs)("div",{className:i().faq,children:[(0,o.jsx)("h2",{children:"Synthetic Loot"}),(0,o.jsxs)("div",{className:i().faq__item,children:[(0,o.jsx)("h3",{children:"What is Synthetic Loot?"}),(0,o.jsxs)("p",{children:['Synthetic Loot (or "Synth Loot") is a virtual form of Loot that ',(0,o.jsx)("strong",{children:"every wallet has automatically"})," and ",(0,o.jsx)("strong",{children:"does not need to be minted"}),"."]}),(0,o.jsx)("p",{children:"Unlike original Loot which is generated based on a numeric identifier, Synthetic Loot is generated based on your Ethereum wallet address. Developers who are building on top of Loot can easily incorporate Synthetic Loot into their projects, allowing the entire Ethereum ecosystem to access their projects for free."}),(0,o.jsxs)("p",{children:["To see this in action, visit ",(0,o.jsx)("a",{href:"https://loot.stephancill.co.za/#/",children:"this example page"})," and enter your wallet address or ENS handle. You will see your Synth Loot and a generated character that corresponds to it."]}),(0,o.jsx)("p",{children:"This data is portable and will travel with you to any project that supports it."}),(0,o.jsx)("h3",{children:"Why can't I mint Synthetic Loot?"}),(0,o.jsx)("p",{children:'Right now, there is very little reason to. Because Synthetic Loot is already associated with every Ethereum address that ever has been or ever will be, there will never be anyone "without" Synthetic Loot. Still, there is no reason someone couldn\'t build a mintable contract on top of Synthetic Loot for those who want to do it.'}),(0,o.jsx)("h3",{children:"What if someone re-rolls wallets to get desirable loot?"}),(0,o.jsxs)("p",{children:["In many cases, this doesn't matter. However, developers who are concerned about this can instead use variants like ",(0,o.jsx)("a",{href:"https://etherscan.io/address/0x9f4541a829f8a8c0fb5f26971b0ed19f995782b1#code",children:"Synthetic Lesser Loot"}),", which reduces the rarity of some items. Synthetic variants still share all the same promises: they are available to every wallet automatically and do not need to be minted."]}),(0,o.jsx)("h3",{children:"Why not expand the original Loot bag numbers past 8,000?"}),(0,o.jsx)("p",{children:"The original Loot contract is immutable, meaning it is impossible to change. Although it is possible to create new contracts that expand the numbers, it is purely up to the community to decide whether or not to do this and for developers to decide what is and isn't recognized."}),(0,o.jsx)("p",{children:"It's important for the community to think about precedents. Expanding in small increments now only kicks the can down the road. As more people want Loot, more contracts will need to be created, which will lead to fragmentation where infrastructure and utilities that are built today will not work with the contracts of tomorrow."}),(0,o.jsx)("p",{children:"Conversely, the supply of Synthetic Loot is always equal to the number of Ethereum wallets and will always be forward compatible."}),(0,o.jsx)("h3",{children:"Acknowledgements"}),(0,o.jsxs)("p",{children:["Thank you to community member ",(0,o.jsx)("a",{href:"https://twitter.com/stephancill",children:"@stephancill"})," for creating the demonstration page."]})]})]})})}},7893:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/synthloot",function(){return n(2617)}])},4409:function(e){e.exports={header:"Layout_header__2iLWX",header__logo:"Layout_header__logo__2Zu-m",header__links:"Layout_header__links__2tkmn",header__links_active:"Layout_header__links_active__2DGAB",footer:"Layout_footer__2GYdL"}},2790:function(e){e.exports={faq:"FAQ_faq__Rl9-M",faq__item:"FAQ_faq__item__1YopL"}},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=7893,e(e.s=t);var t}));var t=e.O();_N_E=t}]);