import { _ as __nuxt_component_0 } from './Header-b4ff3ede.mjs';
import { _ as __nuxt_component_1 } from './ArticleCardH-253cf2af.mjs';
import { u as useSeoMeta } from './index-2cdcde44.mjs';
import { ref, useSSRContext } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "technology",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Technology",
      ogTitle: "Technology",
      description: "Waterloo Business Review Technology",
      ogDescription: "Waterloo Business Review Technology",
      ogImage: ""
    });
    const articles = ref([
      {
        id: "f22-t1",
        coverPath: "articles/fall-2022/covers/dr-cover.png",
        articlePath: "articles/fall-2022/the-digital-recession",
        title: "The Digital Recession",
        type: "Technology",
        term: "Fall 2022",
        authors: "Lakshya Balchandani, Vivian Guo, Ali Ravjani",
        creatives: "Devena Mohabir",
        blurb: "In an increasingly digitalized society, technological advancement has always been accompanied by an inconspicuous force: bots and spam. With the prevalence of automation, bots and spam have become a pervasive poison to accurate information on the web, radically shifting the way governments, businesses, and even people conduct themselves online. This article explores the impact of malicious bots on the internet and the world economy, and what this incoming digital recession means for our future."
      },
      {
        id: "f22-t2",
        coverPath: "articles/fall-2022/covers/meta-cover.png",
        articlePath: "articles/fall-2022/meta-an-end-over-the-horizon",
        title: "META: An End Over Over the Horizon?",
        type: "Technology",
        term: "Fall 2022",
        authors: "Zoe Ahuja, Ansh Farmah, Katarina Miovcic",
        creatives: "Nirva Bharwada",
        blurb: "Facebook made a defining choice in its business model by prioritizing Metaverse products in their business model. In October of 2021, they leaned heavily into this new segment and restructured their business entirely around it, with the most prolific change being their name change from Facebook to Meta. However, as economic policy shifted towards a more constrained environment, the company found itself ensnared in what was once its most promising venture..."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_ArticleCardH = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="container-fluid header p-0 overflow-hidden" data-v-86f1a0fb><div class="row" data-v-86f1a0fb><div class="col-2" data-v-86f1a0fb></div><div class="col-8" data-v-86f1a0fb><div data-v-86f1a0fb><h2 class="margin-bottom" data-v-86f1a0fb>Technology</h2></div><hr data-v-86f1a0fb><div class="article-list" data-v-86f1a0fb><!--[-->`);
      ssrRenderList(articles.value, (article) => {
        _push(`<div class="article-list-item" data-v-86f1a0fb>`);
        _push(ssrRenderComponent(_component_ArticleCardH, {
          id: article.id,
          title: article.title,
          type: article.type,
          term: article.term,
          authors: article.authors,
          creatives: article.creatives,
          blurb: article.blurb,
          coverPath: article.coverPath,
          articlePath: article.articlePath
        }, null, _parent));
        _push(`<hr data-v-86f1a0fb></div>`);
      });
      _push(`<!--]--></div></div><div class="col-2" data-v-86f1a0fb></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/technology.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const technology = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-86f1a0fb"]]);

export { technology as default };
//# sourceMappingURL=technology-b80a27d3.mjs.map
