"use strict";(self.webpackChunkpolar_blog=self.webpackChunkpolar_blog||[]).push([[3249],{7191:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(6540);var a=n(4164),i=n(1082),s=n(204),r=n(3750),l=n(569),o=n(3148),c=n(539),d=n(1865),m=n(4848);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,r.e7)(),{title:n,description:a,date:s,tags:l,authors:o,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(i.be,{title:c.title_meta??n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:s}),o.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var h=n(7143);function p(){const e=(0,r.J_)();return(0,m.jsx)(h.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(7959),f=n(2075);function v(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:i}=(0,r.e7)(),{nextItem:s,prevItem:c,frontMatter:d}=a,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:p}=d;return(0,m.jsxs)(l.A,{sidebar:t,toc:!g&&i.length>0?(0,m.jsx)(x.A,{toc:i,minHeadingLevel:h,maxHeadingLevel:p}):void 0,children:[(0,m.jsx)(f.A,{metadata:a}),(0,m.jsx)(o.A,{children:n}),(s||c)&&(0,m.jsx)(u,{nextItem:s,prevItem:c})]})}function j(e){const t=e.content;return(0,m.jsx)(r.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(i.e3,{className:(0,a.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,m.jsx)(g,{}),(0,m.jsx)(p,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},665:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),i=n(7289),s=n(204),r=n(2362),l=n(4848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(i.Rc,{}),className:(0,a.A)(t,s.G.common.unlistedBanner),children:(0,l.jsx)(i.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.AE,{}),(0,l.jsx)(o,{...e})]})}},2075:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var a=n(4164),i=n(7289),s=n(204),r=n(2362),l=n(4848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(i.Yh,{}),className:(0,a.A)(t,s.G.common.draftBanner),children:(0,l.jsx)(i.TT,{})})}var c=n(665);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||a.unlisted)&&(0,l.jsx)(c.A,{}),a.draft&&(0,l.jsx)(o,{})]})}},1865:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(4164),i=n(6289),s=n(4848);function r(e){const{permalink:t,title:n,subLabel:r,isNext:l}=e;return(0,s.jsxs)(i.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,s.jsx)("div",{className:"pagination-nav__label",children:n})]})}},7959:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),i=n(1021);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(4848);const l="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,a.A)(s.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(i.A,{...n,linkClassName:l,linkActiveClassName:o})})}},1021:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(6540),i=n(3115);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>l(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),c=o(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var m=n(6289),u=n(4848);function g(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?(0,u.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const h=a.memo(g);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:m,...g}=e;const p=(0,i.p)(),x=c??p.tableOfContents.minHeadingLevel,f=m??p.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>r({toc:s(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:x,maxHeadingLevel:f});return d((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:x,maxHeadingLevel:f}}),[l,o,x,f])),(0,u.jsx)(h,{toc:v,className:n,linkClassName:l,...g})}},3953:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),i=n(6289);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=n(4848);function l(e){let{permalink:t,label:n,count:l,description:o}=e;return(0,r.jsxs)(i.A,{href:t,title:o,className:(0,a.A)(s.tag,l?s.tagWithCount:s.tagRegular),children:[n,l&&(0,r.jsx)("span",{children:l})]})}},6239:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164),i=n(539),s=n(3953);const r={tags:"tags_jXut",tag:"tag_QGVx"};var l=n(4848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(s.A,{...e})},e.permalink)))})]})}},7289:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});n(6540);var a=n(539),i=n(7143),s=n(4848);function r(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,s.jsx)(i.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},3148:(e,t,n)=>{n.d(t,{A:()=>B});var a=n(6540),i=n(4164),s=n(3750),r=n(4848);function l(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var o=n(6289);const c={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:n,isBlogPostPage:a}=(0,s.e7)(),{permalink:l,title:d}=n,m=a?"h1":"h2";return(0,r.jsx)(m,{className:(0,i.A)(c.title,t),children:a?d:(0,r.jsx)(o.A,{to:l,children:d})})}var m=n(539),u=n(1430),g=n(8569);const h={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,m.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function f(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function v(e){let{className:t}=e;const{metadata:n}=(0,s.e7)(),{date:a,readingTime:l}=n,o=(0,g.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,i.A)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:a,formattedDate:(c=a,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)(p,{readingTime:l})]})]});var c}var j=n(5921);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:n},assets:a}=(0,s.e7)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,r.jsx)("div",{className:(0,i.A)("margin-top--md margin-bottom--sm",l?b.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,i.A)(!l&&(o?"col col--12":"col col--6"),l?b.imageOnlyAuthorCol:b.authorCol),children:(0,r.jsx)(j.A,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(d,{}),(0,r.jsx)(v,{}),(0,r.jsx)(A,{})]})}var _=n(99),y=n(4522);function L(e){let{children:t,className:n}=e;const{isBlogPostPage:a}=(0,s.e7)();return(0,r.jsx)("div",{id:a?_.LU:void 0,className:(0,i.A)("markdown",n),children:(0,r.jsx)(y.A,{children:t})})}var k=n(204),C=n(5783),T=n(6239);function H(){return(0,r.jsx)("b",{children:(0,r.jsx)(m.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function w(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(o.A,{"aria-label":(0,m.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(H,{})})}function P(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:n,title:a,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=n.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,i.A)("row","margin-top--sm",k.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(T.A,{tags:n})})}),e&&(0,r.jsx)(C.A,{className:(0,i.A)("margin-top--sm",k.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,i.A)("col",{"col--9":m}),children:(0,r.jsx)(T.A,{tags:n})}),m&&(0,r.jsx)("div",{className:(0,i.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(w,{blogPostTitle:a,to:e.permalink})})]})}function I(e){let{children:t,className:n}=e;const a=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(l,{className:(0,i.A)(a,n),children:[(0,r.jsx)(N,{}),(0,r.jsx)(L,{children:t}),(0,r.jsx)(P,{})]})}function O({id:e,host:t,repo:i,repoId:s,category:l,categoryId:o,mapping:c,term:d,strict:m,reactionsEnabled:u,emitMetadata:g,inputPosition:h,theme:p,lang:x,loading:f}){const[v,j]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{v||n.e(416).then(n.bind(n,416)).then((()=>j(!0)))}),[]),v?(0,r.jsx)("giscus-widget",{id:e,host:t,repo:i,repoid:s,category:l,categoryid:o,mapping:c,term:d,strict:m,reactionsenabled:u,emitmetadata:g,inputposition:h,theme:p,lang:x,loading:f}):null}var R=n(8532);function M(){const{colorMode:e}=(0,R.G)();return(0,r.jsx)("div",{children:(0,r.jsx)(O,{id:"comments",repo:"polar-sn/polar-sn.github.io",repoId:"R_kgDONruhYg",category:"Comments",categoryId:"DIC_kwDONruhYs4CmF5c",mapping:"pathname",strict:"1",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:"dark"===e?"dark_tritanopia":"light_tritanopia",lang:"ko",loading:"lazy"})})}function B(e){const{metadata:t,isBlogPostPage:n}=(0,s.e7)(),{comments:a=!0}=t.frontMatter;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{...e}),a&&n&&(0,r.jsx)(M,{})]})}}}]);