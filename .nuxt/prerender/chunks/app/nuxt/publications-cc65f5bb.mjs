import { b as buildAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$1 } from './ArticleCardV-f0f9b2e2.mjs';
import { u as useSeoMeta } from './index-2cdcde44.mjs';
import { withCtx, createVNode, useSSRContext } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './Header-b4ff3ede.mjs';
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
import '../server.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue-router/dist/vue-router.node.mjs';
import './nuxt-link-01469011.mjs';

const _imports_0 = "" + buildAssetsURL("dd-cover.252333dc.png");
const _sfc_main = {
  __name: "publications",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Publications",
      ogTitle: "Publications",
      description: "Waterloo Business Review Publications",
      ogDescription: "Waterloo Business Review Publications",
      ogImage: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleCardV = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(__nuxt_component_0, null, null, _parent));
      _push(`<div class="container-fluid header p-0 overflow-hidden"><div class="row"><div class="col-2"></div><div class="col-8"><div class="row"><h2 class="margin-bottom">PUBLICATIONS</h2></div><div class="row">`);
      _push(ssrRenderComponent(_component_ArticleCardV, {
        title: "Dependency and Diversification: Keys to Success for Single Export Nations",
        type: "Business Strategy",
        term: "F23",
        authors: "Luka Pavlesen, Manu Krishna",
        creatives: "Viviana Basurto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="article-cover"${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "article-cover",
                src: _imports_0
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-2"></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/publications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=publications-cc65f5bb.mjs.map
