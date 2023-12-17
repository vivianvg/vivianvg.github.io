import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './Header-b4ff3ede.mjs';
import { useSSRContext, ref, mergeProps } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { u as useSeoMeta } from './index-2cdcde44.mjs';
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
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$2 = {
  __name: "MemberCard",
  __ssrInlineRender: true,
  props: {
    name: String,
    headshot: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "member-card" }, _attrs))} data-v-230080ee><div class="row member-headshot" data-v-230080ee><img${ssrRenderAttr("src", __props.headshot)} data-v-230080ee></div><div class="row member-name" data-v-230080ee>${ssrInterpolate(__props.name)}</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MemberCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-230080ee"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid header p-0 overflow-hidden" }, _attrs))} data-v-fa264ee4><div class="row footer" data-v-fa264ee4><div class="col-2" data-v-fa264ee4></div><div class="col-8 copyright" data-v-fa264ee4>Waterloo Business Review \xA9 2023</div><div class="col-2" data-v-fa264ee4></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fa264ee4"]]);
const _imports_0 = "" + publicAssetsURL("team/2023/full_team.jpg");
const _sfc_main = {
  __name: "team",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Team",
      ogTitle: "Team",
      description: "Waterloo Business Review Team",
      ogDescription: "Waterloo Business Review Team",
      ogImage: ""
    });
    const leadership_team = ref([
      {
        name: "Luka Pavlesen",
        headshot: "team/2023/leadership/l1.png"
      },
      {
        name: "Vivian Guo",
        headshot: "team/2023/leadership/l2.png"
      },
      {
        name: "Devena Mohabir",
        headshot: "team/2023/leadership/l3.png"
      }
    ]);
    const research_team = ref([
      {
        name: "Kabir Bajwa",
        headshot: "team/2023/research/r1.png"
      },
      {
        name: "Sofia Suleman",
        headshot: "team/2023/research/r6.png"
      },
      {
        name: "Gurpartap Thap",
        headshot: "team/2023/research/r2.png"
      },
      {
        name: "Leo Stetsyuk",
        headshot: "team/2023/research/r5.png"
      },
      {
        name: "Siddhant Kapur",
        headshot: "team/2023/research/r8.png"
      },
      {
        name: "Arpit Sandhu",
        headshot: "team/2023/research/r3.png"
      },
      {
        name: "Agraj Joshi",
        headshot: "team/2023/research/r7.png"
      },
      {
        name: "Yukttha Siva",
        headshot: "team/2023/creative/c4.png"
      }
    ]);
    const editorial_team = ref([
      {
        name: "Ali Ravjani",
        headshot: "team/2023/editorial/e1.png"
      },
      {
        name: "Ansh Farmah",
        headshot: "team/2023/editorial/e2.png"
      },
      {
        name: "Katarina Miovcic",
        headshot: "team/2023/editorial/e3.png"
      },
      {
        name: "Manu Krishna",
        headshot: "team/2023/editorial/e4.png"
      },
      {
        name: "Sophie Hsieh",
        headshot: "team/2023/editorial/e5.png"
      },
      {
        name: "Alex Zhu",
        headshot: "team/2023/editorial/e6.png"
      },
      {
        name: "Arnav Sheth",
        headshot: "team/2023/editorial/e7.png"
      }
    ]);
    const creative_team = ref([
      {
        name: "Viviana Basurt",
        headshot: "team/2023/creative/c1.png"
      },
      {
        name: "Nirva Bharwada",
        headshot: "team/2023/creative/c2.png"
      },
      {
        name: "Pramiya Arulraj",
        headshot: "team/2023/creative/c3.png"
      },
      {
        name: "Yukttha Siva",
        headshot: "team/2023/creative/c4.png"
      }
    ]);
    const full_team = ref([
      {
        subteam: leadership_team,
        subteam_name: "Leadership"
      },
      {
        subteam: editorial_team,
        subteam_name: "Editorial"
      },
      {
        subteam: creative_team,
        subteam_name: "Creative"
      },
      {
        subteam: research_team,
        subteam_name: "Research"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_MemberCard = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<!--[--><div data-v-b61da160>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="container-fluid header p-0 overflow-hidden text" data-v-b61da160><div class="row" data-v-b61da160><div class="col-2" data-v-b61da160></div><div class="col-8" data-v-b61da160><div class="page-title" data-v-b61da160><h2 class="margin-bottom" data-v-b61da160>Our Team</h2></div><div data-v-b61da160><p data-v-b61da160> Our dedicated and passionate team is focused on growing and establishing the Waterloo Business Review in the Waterloo and Kitchener business community. </p><p data-v-b61da160> Waterloo Business Review empowers our team through our emphasis on creative freedom, professional development of research and communication skills, and our culture of entrepreneurship and growth as we nuture members to adopt positions of greater responsibility and leadership. </p></div><div data-v-b61da160><img class="image"${ssrRenderAttr("src", _imports_0)} data-v-b61da160></div></div><div class="row margin-top" data-v-b61da160><div class="col-2" data-v-b61da160></div><div class="teams col-8" data-v-b61da160><div data-v-b61da160><!--[-->`);
      ssrRenderList(full_team.value, (subteam) => {
        _push(`<div class="margin-top" data-v-b61da160><h3 data-v-b61da160>${ssrInterpolate(subteam.subteam_name)}</h3><div class="row" data-v-b61da160><!--[-->`);
        ssrRenderList(subteam.subteam, (member) => {
          _push(ssrRenderComponent(_component_MemberCard, {
            name: member.name,
            headshot: member.headshot
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="col-1" data-v-b61da160></div></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const team = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b61da160"]]);

export { team as default };
//# sourceMappingURL=team-ddfbc059.mjs.map
