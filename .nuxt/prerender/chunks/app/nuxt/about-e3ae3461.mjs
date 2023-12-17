import { _ as __nuxt_component_0 } from './Header-b4ff3ede.mjs';
import { u as useSeoMeta } from './index-2cdcde44.mjs';
import { useSSRContext } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/server-renderer/index.mjs';
import '../../renderer.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/devalue/index.js';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/@unhead/shared/dist/index.mjs';
import './nuxt-link-01469011.mjs';
import '../server.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "About",
      ogTitle: "About",
      description: "Waterloo Business Review About",
      ogDescription: "Waterloo Business Review About",
      ogImage: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="container-fluid header p-0 overflow-hidden"><div class="row"><div class="col-2"></div><div class="col-8"><div class="page-title"><h2 class="margin-bottom">About</h2></div><div><p> Waterloo Business Review is an online platform preparing undergraduate students for an innovative future by providing insights into business strategy, entrepreneurship, and global affairs. </p></div><div><h3>We are Waterloo Business Review</h3></div><div><p> Waterloo Business Review (WBR) is a School of Accounting and Finance student-run initiative. The WBR is a group of inspired students from diverse disciplines at the University of Waterloo from the fields of economics, legal studies, political science, and beyond. </p></div><div><h3>Our Mission</h3></div><div><h4>Educate, Engage, and Empower.</h4></div><div><p> Through our online publication, we hope to provide engaging content that will equip students with the business acumen to help them build their knowledge and careers. </p></div><div><h3>Our Values</h3></div><div><p> We will push the boundaries with our platform to ensure that our content is a relevant, career-changing resource for all our readers and the professional enviroment they face. </p></div><div><h3>Our Vision</h3></div><div><h4>Transformation</h4></div><div><p> We envision thousands of undergraduates integrating our business insights into their professional lives to transform their career and levels of expertise. </p></div><div><h3>Our Team</h3></div><div><p> Waterloo Business Review is a driven group of students from diverse disciplines from the University of Waterloo. We believe that this diversity is one of our greatest strengths, as it allows for many different perspectives on various issues. </p></div></div><div class="col-2"></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-e3ae3461.mjs.map
