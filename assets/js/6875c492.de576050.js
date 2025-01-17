"use strict";(self.webpackChunkpolar_blog=self.webpackChunkpolar_blog||[]).push([[4813],{7448:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(539),s=n(1865),i=n(4848);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.A,{permalink:n,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(s.A,{permalink:r,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},4005:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(3750),s=n(3148),i=n(4848);function r(e){let{items:t,component:n=s.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.in,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},6956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(6540);var a=n(4164),s=n(539),i=n(1082),r=n(204),o=n(1926),l=n(6289),c=n(569),d=n(7448),g=n(7220),u=n(4005),h=n(665),m=n(9303),p=n(4848);function x(e){let{tag:t}=e;const n=(0,o.ZD)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.be,{title:n,description:t.description}),(0,p.jsx)(g.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:a,listMetadata:i}=e;const r=(0,o.ZD)(t);return(0,p.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,p.jsx)(h.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(m.A,{as:"h1",children:r}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(l.A,{href:t.allTagsPath,children:(0,p.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(u.A,{items:n}),(0,p.jsx)(d.A,{metadata:i})]})}function b(e){return(0,p.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},665:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),s=n(7289),i=n(204),r=n(2362),o=n(4848);function l(e){let{className:t}=e;return(0,o.jsx)(r.A,{type:"caution",title:(0,o.jsx)(s.Rc,{}),className:(0,a.A)(t,i.G.common.unlistedBanner),children:(0,o.jsx)(s.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.AE,{}),(0,o.jsx)(l,{...e})]})}},1865:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(4164),s=n(6289),i=n(4848);function r(e){const{permalink:t,title:n,subLabel:r,isNext:o}=e;return(0,i.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},3953:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164),s=n(6289);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=n(4848);function o(e){let{permalink:t,label:n,count:o,description:l}=e;return(0,r.jsxs)(s.A,{href:t,title:l,className:(0,a.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,r.jsx)("span",{children:o})]})}},6239:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),s=n(539),i=n(3953);const r={tags:"tags_jXut",tag:"tag_QGVx"};var o=n(4848);function l(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:r.tag,children:(0,o.jsx)(i.A,{...e})},e.permalink)))})]})}},1926:(e,t,n)=>{n.d(t,{Y4:()=>g,ZD:()=>o,np:()=>d,uz:()=>c,wI:()=>l});n(6540);var a=n(539),s=n(1430),i=n(4848);function r(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function o(e){const t=r();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function l(e){const t=r();return(0,a.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,i.jsx)(a.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function g(){return(0,i.jsx)(a.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},7289:(e,t,n)=>{n.d(t,{AE:()=>l,Rc:()=>r,TT:()=>d,Uh:()=>o,Yh:()=>c});n(6540);var a=n(539),s=n(7143),i=n(4848);function r(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,i.jsx)(s.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},3148:(e,t,n)=>{n.d(t,{A:()=>O});var a=n(6540),s=n(4164),i=n(3750),r=n(4848);function o(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var l=n(6289);const c={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:n,isBlogPostPage:a}=(0,i.e7)(),{permalink:o,title:d}=n,g=a?"h1":"h2";return(0,r.jsx)(g,{className:(0,s.A)(c.title,t),children:a?d:(0,r.jsx)(l.A,{to:o,children:d})})}var g=n(539),u=n(1430),h=n(8569);const m={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,g.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function j(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function b(e){let{className:t}=e;const{metadata:n}=(0,i.e7)(),{date:a,readingTime:o}=n,l=(0,h.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.A)(m.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:a,formattedDate:(c=a,l.format(new Date(c)))}),void 0!==o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(p,{readingTime:o})]})]});var c}var f=n(5921);const A={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function v(e){let{className:t}=e;const{metadata:{authors:n},assets:a}=(0,i.e7)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t})),l=1===n.length;return(0,r.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",o?A.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.A)(!o&&(l?"col col--12":"col col--6"),o?A.imageOnlyAuthorCol:A.authorCol),children:(0,r.jsx)(f.A,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})},t)))})}function T(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(d,{}),(0,r.jsx)(b,{}),(0,r.jsx)(v,{})]})}var N=n(99),w=n(4522);function y(e){let{children:t,className:n}=e;const{isBlogPostPage:a}=(0,i.e7)();return(0,r.jsx)("div",{id:a?N.LU:void 0,className:(0,s.A)("markdown",n),children:(0,r.jsx)(w.A,{children:t})})}var _=n(204),k=n(5783),P=n(6239);function R(){return(0,r.jsx)("b",{children:(0,r.jsx)(g.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function U(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(l.A,{"aria-label":(0,g.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(R,{})})}function C(){const{metadata:e,isBlogPostPage:t}=(0,i.e7)(),{tags:n,title:a,editUrl:o,hasTruncateMarker:l,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&l,u=n.length>0;if(!(u||g||o))return null;if(t){const e=!!(o||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.A)("row","margin-top--sm",_.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(P.A,{tags:n})})}),e&&(0,r.jsx)(k.A,{className:(0,s.A)("margin-top--sm",_.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.A)("col",{"col--9":g}),children:(0,r.jsx)(P.A,{tags:n})}),g&&(0,r.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(U,{blogPostTitle:a,to:e.permalink})})]})}function B(e){let{children:t,className:n}=e;const a=function(){const{isBlogPostPage:e}=(0,i.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(o,{className:(0,s.A)(a,n),children:[(0,r.jsx)(T,{}),(0,r.jsx)(y,{children:t}),(0,r.jsx)(C,{})]})}function M({id:e,host:t,repo:s,repoId:i,category:o,categoryId:l,mapping:c,term:d,strict:g,reactionsEnabled:u,emitMetadata:h,inputPosition:m,theme:p,lang:x,loading:j}){const[b,f]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{b||n.e(416).then(n.bind(n,416)).then((()=>f(!0)))}),[]),b?(0,r.jsx)("giscus-widget",{id:e,host:t,repo:s,repoid:i,category:o,categoryid:l,mapping:c,term:d,strict:g,reactionsenabled:u,emitmetadata:h,inputposition:m,theme:p,lang:x,loading:j}):null}var F=n(8532);function L(){const{colorMode:e}=(0,F.G)();return(0,r.jsx)("div",{children:(0,r.jsx)(M,{id:"comments",repo:"polar-sn/polar-sn.github.io",repoId:"R_kgDONruhYg",category:"Comments",categoryId:"DIC_kwDONruhYs4CmF5c",mapping:"pathname",strict:"1",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:"dark"===e?"dark_tritanopia":"light_tritanopia",lang:"ko",loading:"lazy"})})}function O(e){const{metadata:t,isBlogPostPage:n}=(0,i.e7)(),{comments:a=!0}=t.frontMatter;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(B,{...e}),a&&n&&(0,r.jsx)(L,{})]})}}}]);