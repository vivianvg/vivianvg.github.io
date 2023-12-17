import { _ as __nuxt_component_0 } from './nuxt-link-01469011.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  __name: "ArticleCardH",
  __ssrInlineRender: true,
  props: {
    id: Number,
    coverPath: String,
    title: String,
    type: String,
    term: String,
    authors: String,
    creatives: String,
    blurb: String,
    articlePath: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "article-card-h row" }, _attrs))} data-v-e6327dd2><div class="col-3" data-v-e6327dd2><div class="article-cover" data-v-e6327dd2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "article-link",
        href: __props.articlePath
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="article-cover"${ssrRenderAttr("src", __props.coverPath)} data-v-e6327dd2${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "article-cover",
                src: __props.coverPath
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-9 info" data-v-e6327dd2><div class="article-credits" data-v-e6327dd2>${ssrInterpolate(__props.term)}</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "article-link",
        href: __props.articlePath
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="article-title" data-v-e6327dd2${_scopeId}>${ssrInterpolate(__props.title)}</div>`);
          } else {
            return [
              createVNode("div", { class: "article-title" }, toDisplayString(__props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="article-credits" data-v-e6327dd2> Written by <div class="semibold" data-v-e6327dd2>${ssrInterpolate(__props.authors)}</div></div><div class="article-credits spacing" data-v-e6327dd2> Illustrated by <div class="semibold" data-v-e6327dd2>${ssrInterpolate(__props.creatives)}</div></div><div data-v-e6327dd2>${ssrInterpolate(__props.blurb)}</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleCardH.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6327dd2"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ArticleCardH-253cf2af.mjs.map
