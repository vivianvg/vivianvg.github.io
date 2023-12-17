import { mergeProps, useSSRContext } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const _sfc_main = {
  __name: "ArticleCardV",
  __ssrInlineRender: true,
  props: {
    id: Number,
    coverPath: String,
    title: String,
    type: String,
    term: String,
    authors: String,
    creatives: String,
    blurb: String
  },
  setup(__props) {
    const props = __props;
    props.coverPath;
    const test = __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({}), `./assets/${props.coverPath}.png`);
    console.log(test);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "article-card" }, _attrs))} data-v-76f9514d><div class="article-cover" data-v-76f9514d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleCardV.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-76f9514d"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ArticleCardV-f0f9b2e2.mjs.map
