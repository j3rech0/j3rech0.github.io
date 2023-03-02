import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, h as deserializeManifest } from './chunks/astro.a2f3d1c0.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3, d as _page4, e as _page5, f as _page6, g as _page7, h as _page8, i as _page9, j as _page10, k as _page11, l as _page12 } from './chunks/pages/all.5ea88272.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'html-escaper';
import 'string-width';
/* empty css                                 *//* empty css                                 *//* empty css                                *//* empty css                                *//* empty css                                *//* empty css                                *//* empty css                               */
const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/home/intro.md", _page1],["src/pages/home/work.md", _page2],["src/pages/work/floristmart.md", _page3],["src/pages/work/ratemyagent.md", _page4],["src/pages/work/registernow.md", _page5],["src/pages/work/bloomlocal.md", _page6],["src/pages/work/arcanys.md", _page7],["src/pages/work/childup.md", _page8],["src/pages/work/docmap.md", _page9],["src/pages/work/aelf.md", _page10],["src/pages/work.astro", _page11],["src/pages/404.astro", _page12],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/work.feeb201a.css","_astro/index.579fdf1a.css","_astro/work.5000ad9f.css","_astro/index.4f9a7a5e.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/home/intro","type":"page","pattern":"^\\/home\\/intro\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}],[{"content":"intro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home/intro.md","pathname":"/home/intro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/home/work","type":"page","pattern":"^\\/home\\/work\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}],[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home/work.md","pathname":"/home/work","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/work.feeb201a.css","_astro/work.5000ad9f.css","_astro/index.4f9a7a5e.css","_astro/aelf.386b86ea.css"],"scripts":[],"routeData":{"route":"/work/floristmart","type":"page","pattern":"^\\/work\\/floristmart\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"floristmart","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/floristmart.md","pathname":"/work/floristmart","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/work.feeb201a.css","_astro/work.5000ad9f.css","_astro/index.4f9a7a5e.css","_astro/aelf.386b86ea.css"],"scripts":[],"routeData":{"route":"/work/ratemyagent","type":"page","pattern":"^\\/work\\/ratemyagent\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"ratemyagent","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/ratemyagent.md","pathname":"/work/ratemyagent","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/work.feeb201a.css","_astro/work.5000ad9f.css","_astro/index.4f9a7a5e.css","_astro/aelf.386b86ea.css"],"scripts":[],"routeData":{"route":"/work/registernow","type":"page","pattern":"^\\/work\\/registernow\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"registernow","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/registernow.md","pathname":"/work/registernow","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/work.feeb201a.css","_astro/work.5000ad9f.css","_astro/index.4f9a7a5e.css","_astro/aelf.386b86ea.css"],"scripts":[],"routeData":{"route":"/work/bloomlocal","type":"page","pattern":"^\\/work\\/bloomlocal\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"bloomlocal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/bloomlocal.md","pathname":"/work/bloomlocal","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/work.feeb201a.css","_astro/work.5000ad9f.css","_astro/index.4f9a7a5e.css","_astro/aelf.386b86ea.css"],"scripts":[],"routeData":{"route":"/work/arcanys","type":"page","pattern":"^\\/work\\/arcanys\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"arcanys","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/arcanys.md","pathname":"/work/arcanys","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/work.feeb201a.css","_astro/work.5000ad9f.css","_astro/index.4f9a7a5e.css","_astro/aelf.386b86ea.css"],"scripts":[],"routeData":{"route":"/work/childup","type":"page","pattern":"^\\/work\\/childup\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"childup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/childup.md","pathname":"/work/childup","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/work.feeb201a.css","_astro/work.5000ad9f.css","_astro/index.4f9a7a5e.css","_astro/aelf.386b86ea.css"],"scripts":[],"routeData":{"route":"/work/docmap","type":"page","pattern":"^\\/work\\/docmap\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"docmap","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/docmap.md","pathname":"/work/docmap","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/work.feeb201a.css","_astro/work.5000ad9f.css","_astro/index.4f9a7a5e.css","_astro/aelf.386b86ea.css"],"scripts":[],"routeData":{"route":"/work/aelf","type":"page","pattern":"^\\/work\\/aelf\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"aelf","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/aelf.md","pathname":"/work/aelf","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/work.6d3636ae.css","_astro/work.feeb201a.css","_astro/work.5000ad9f.css","_astro/index.4f9a7a5e.css","_astro/aelf.386b86ea.css"],"scripts":[],"routeData":{"route":"/work","type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work.astro","pathname":"/work","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/work.feeb201a.css","_astro/404.5f33be42.css"],"scripts":[],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://jerecho.com/","base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true,"contentDir":"file:///C:/Project/astro/jerecho/src/content/"},"pageMap":null,"propagation":[],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/404.5f33be42.css","/_astro/aelf.386b86ea.css","/_astro/index.579fdf1a.css","/_astro/index.4f9a7a5e.css","/_astro/work.5000ad9f.css","/_astro/work.6d3636ae.css","/_astro/work.feeb201a.css","/favicon.ico","/robots.txt","/assets/arcanys-full.png","/assets/arcanys.png","/assets/bi_arrow-left-short.svg","/assets/bloomlocal-full.png","/assets/bloomlocal.png","/assets/bx_link-alt.svg","/assets/childup-full.png","/assets/childup.png","/assets/circle-stroke.svg","/assets/coconut.svg","/assets/codepen.svg","/assets/cta-arrow.svg","/assets/docmap.png","/assets/dots.svg","/assets/dribbble.svg","/assets/elearning-full.png","/assets/elearning.png","/assets/fake_cursor.svg","/assets/fav.svg","/assets/floristmart-full.png","/assets/floristmart.png","/assets/footer-dots.svg","/assets/github.svg","/assets/logo-stroke.svg","/assets/me.png","/assets/me.svg","/assets/mountains.svg","/assets/ocean.svg","/assets/og-cover.png","/assets/propertybanter-full.png","/assets/propertybanter.png","/assets/registernow-full.png","/assets/registernow.png","/assets/stroke-bg.svg","/assets/youtube.svg"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
