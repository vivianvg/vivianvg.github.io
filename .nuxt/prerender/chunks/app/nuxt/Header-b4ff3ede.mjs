import { b as buildAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-01469011.mjs';
import { ref, useSSRContext, mergeProps, withCtx, createTextVNode } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

ref({
  display: false
});
const _sfc_main$1 = {
  props: {
    displaySidebar: {
      type: Boolean,
      default: false
    },
    sidebarToggle: {
      type: Function,
      default: null
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<!--[--><div class="sidebar-backdrop" data-v-54bf74ad></div><div class="sidebar" data-v-54bf74ad><div id="close-sidebar-button" data-v-54bf74ad><a id="close-sidebar" href="#" data-v-54bf74ad><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-link feather feather-x" data-v-54bf74ad><line x1="18" y1="6" x2="6" y2="18" data-v-54bf74ad></line><line x1="6" y1="6" x2="18" y2="18" data-v-54bf74ad></line></svg></a></div><div class="navigation-side" data-v-54bf74ad><div data-v-54bf74ad>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ABOUT`);
      } else {
        return [
          createTextVNode("ABOUT")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div data-v-54bf74ad>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/team" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`TEAM`);
      } else {
        return [
          createTextVNode("TEAM")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div data-v-54bf74ad>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/publications" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`PUBLICATIONS`);
      } else {
        return [
          createTextVNode("PUBLICATIONS")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div data-v-54bf74ad>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`CONTACT`);
      } else {
        return [
          createTextVNode("CONTACT")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="socials" data-v-54bf74ad><a id="twitter" href="https://twitter.com/uwaterloobr/" target="_blank" data-v-54bf74ad><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-link feather feather-twitter" data-v-54bf74ad><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" data-v-54bf74ad></path></svg></a><a id="linkedin" href="https://www.linkedin.com/company/waterloobusinessreview/about/" target="_blank" data-v-54bf74ad><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-link feather feather-linkedin" data-v-54bf74ad><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" data-v-54bf74ad></path><rect x="2" y="9" width="4" height="12" data-v-54bf74ad></rect><circle cx="4" cy="4" r="2" data-v-54bf74ad></circle></svg></a><a id="instagram" href="https://www.instagram.com/uwaterloobr/" target="_blank" data-v-54bf74ad><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-link feather feather-instagram" data-v-54bf74ad><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-v-54bf74ad></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-v-54bf74ad></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-v-54bf74ad></line></svg></a><a id="facebook" href="https://www.facebook.com/waterloobr/" target="_blank" data-v-54bf74ad><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-link feather feather-facebook" data-v-54bf74ad><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-54bf74ad></path></svg></a></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-54bf74ad"]]);
const _imports_0 = "" + buildAssetsURL("wbr-logo.3c6b6f0f.svg");
const _sfc_main = {
  components: { Sidebar: __nuxt_component_0$1 },
  data() {
    return {
      displaySidebar: false
    };
  },
  methods: {
    toggleSidebar() {
      this.displaySidebar = !this.displaySidebar;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_sidebar = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid header p-0 overflow-hidden" }, _attrs))} data-v-6787cc93><div class="row" data-v-6787cc93><div class="col-1 sidemenu" data-v-6787cc93><div id="toggle_sidemenu" data-v-6787cc93><a href="#" class="sidemenu_button icon-link" data-v-6787cc93><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon feather feather-menu" data-v-6787cc93><line x1="3" y1="12" x2="21" y2="12" data-v-6787cc93></line><line x1="3" y1="6" x2="21" y2="6" data-v-6787cc93></line><line x1="3" y1="18" x2="21" y2="18" data-v-6787cc93></line></svg></a></div><div class="${ssrRenderClass(["sidebar-opened", $data.displaySidebar ? "" : "sidebar-closed"])}" data-v-6787cc93>`);
  _push(ssrRenderComponent(_component_sidebar, {
    "display-sidebar": $data.displaySidebar,
    "sidebar-toggle": $options.toggleSidebar
  }, null, _parent));
  _push(`</div></div><div class="col-2" data-v-6787cc93><a class="no-style" href="/" data-v-6787cc93><img${ssrRenderAttr("src", _imports_0)} class="logo" data-v-6787cc93></a></div><div class="col-8 navigation display-on-large" data-v-6787cc93>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/alumni-insights" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ALUMNI INSIGHT`);
      } else {
        return [
          createTextVNode("ALUMNI INSIGHT")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/business-strategy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BUSINESS STRATEGY`);
      } else {
        return [
          createTextVNode("BUSINESS STRATEGY")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/entrepreneurship" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ENTREPRENEURSHIP`);
      } else {
        return [
          createTextVNode("ENTREPRENEURSHIP")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/technology" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`TECHNOLOGY`);
      } else {
        return [
          createTextVNode("TECHNOLOGY")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col-8 navigation-mobile" data-v-6787cc93><a href="#" class="sidemenu_button icon-link" data-v-6787cc93><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon feather feather-menu" data-v-6787cc93><line x1="3" y1="12" x2="21" y2="12" data-v-6787cc93></line><line x1="3" y1="6" x2="21" y2="6" data-v-6787cc93></line><line x1="3" y1="18" x2="21" y2="18" data-v-6787cc93></line></svg></a><div class="toggled_menu" data-v-6787cc93></div></div><div class="col-1" data-v-6787cc93></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6787cc93"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Header-b4ff3ede.mjs.map
