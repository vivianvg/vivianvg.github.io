import { _ as __nuxt_component_0 } from './Header-b4ff3ede.mjs';
import { useSSRContext } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  __name: "ArticlePage",
  __ssrInlineRender: true,
  props: {
    id: Number,
    title: String,
    type: String,
    term: String,
    authors: String,
    creatives: String,
    blurb: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="container-fluid header p-0 overflow-hidden" data-v-95ff357f><div class="row" data-v-95ff357f><div class="col-1" data-v-95ff357f></div><div class="col-10 content" data-v-95ff357f><div data-v-95ff357f>${ssrInterpolate(__props.type)}</div><div class="article-title" data-v-95ff357f><h2 data-v-95ff357f>${ssrInterpolate(__props.title)}</h2></div><div class="article-metadata" data-v-95ff357f>${ssrInterpolate(__props.term)}, ${ssrInterpolate(__props.authors)}, ${ssrInterpolate(__props.creatives)}</div><div class="article-content" data-v-95ff357f>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><div class="col-1" data-v-95ff357f></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticlePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArticlePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95ff357f"]]);

export { ArticlePage as A };
//# sourceMappingURL=ArticlePage-932a9aca.mjs.map
