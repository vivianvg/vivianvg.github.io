globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/ofetch/dist/node.mjs';
import destr from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/scule/dist/index.mjs';
import { klona } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47memory from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unstorage/drivers/memory.mjs';
import unstorage_47drivers_47lru_45cache from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unstorage/drivers/lru-cache.mjs';
import unstorage_47drivers_47fs_45lite from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/pathe/dist/index.mjs';

const inlineAppConfig = {
  "nuxt": {
    "buildId": "38781d31-7c0a-4380-b945-895a42da44c1"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "nuxt",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', unstorage_47drivers_47memory({"driver":"memory"}));
storage.mount('internal:nuxt:prerender:island', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('internal:nuxt:prerender:payload', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"C:\\Users\\Vivian\\Documents\\GitHub\\vivianvg.github.io\\.data\\kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\Vivian\\Documents\\GitHub\\vivianvg.github.io","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\Vivian\\Documents\\GitHub\\vivianvg.github.io\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\Vivian\\Documents\\GitHub\\vivianvg.github.io\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\Vivian\\Documents\\GitHub\\vivianvg.github.io\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-10-25T11:39:32.000Z",
    "size": 4286,
    "path": "../../.output/public/favicon.ico"
  },
  "/nuxt/about.c8d30654.js": {
    "type": "application/javascript",
    "etag": "\"8d3-P25OznU1RvyCITAN9aiwvEB41z8\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 2259,
    "path": "../../.output/public/nuxt/about.c8d30654.js"
  },
  "/nuxt/alumni-insights.19fc840a.js": {
    "type": "application/javascript",
    "etag": "\"3f5-OZXmbI0VZa+b6vs3Lg4Fl08h9mc\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 1013,
    "path": "../../.output/public/nuxt/alumni-insights.19fc840a.js"
  },
  "/nuxt/ArticleCardH.48d5967b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1fc-O3twmah4V/pEQ/M0oUn8FfYI+r0\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 508,
    "path": "../../.output/public/nuxt/ArticleCardH.48d5967b.css"
  },
  "/nuxt/ArticleCardH.99c6dbb4.js": {
    "type": "application/javascript",
    "etag": "\"472-qeRCMTxk/8R62XPoo+uZkMdykc4\"",
    "mtime": "2023-12-17T15:50:52.529Z",
    "size": 1138,
    "path": "../../.output/public/nuxt/ArticleCardH.99c6dbb4.js"
  },
  "/nuxt/ArticleCardV.183541fd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ff-wqsT8EJSPB0e8B6w5xPPrljpHho\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 255,
    "path": "../../.output/public/nuxt/ArticleCardV.183541fd.css"
  },
  "/nuxt/ArticleCardV.ba0c035b.js": {
    "type": "application/javascript",
    "etag": "\"2e6-Nigkbf5SRga9yX2+7WDqWLjWivo\"",
    "mtime": "2023-12-17T15:50:52.529Z",
    "size": 742,
    "path": "../../.output/public/nuxt/ArticleCardV.ba0c035b.js"
  },
  "/nuxt/ArticlePage.c889b8b4.js": {
    "type": "application/javascript",
    "etag": "\"398-dE++BsXcW2QX/WAW9K2llAmik5U\"",
    "mtime": "2023-12-17T15:50:52.529Z",
    "size": 920,
    "path": "../../.output/public/nuxt/ArticlePage.c889b8b4.js"
  },
  "/nuxt/ArticlePage.f08db769.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"31-V/AdE20fl+dgH093Z9y/ynRFiyI\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 49,
    "path": "../../.output/public/nuxt/ArticlePage.f08db769.css"
  },
  "/nuxt/business-strategy.01e9f6d3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-6tPYsBzaBeoP6eEjxC2gL/CVrIE\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 60,
    "path": "../../.output/public/nuxt/business-strategy.01e9f6d3.css"
  },
  "/nuxt/business-strategy.651a1dd2.js": {
    "type": "application/javascript",
    "etag": "\"e7b-d++rTRI9VRdAERCQMJydtUdegNc\"",
    "mtime": "2023-12-17T15:50:52.529Z",
    "size": 3707,
    "path": "../../.output/public/nuxt/business-strategy.651a1dd2.js"
  },
  "/nuxt/contact.6124b9a2.js": {
    "type": "application/javascript",
    "etag": "\"2c0-ptuZ8HpxmVx8+bQQQolvcFVZDus\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 704,
    "path": "../../.output/public/nuxt/contact.6124b9a2.js"
  },
  "/nuxt/dd-cover.252333dc.png": {
    "type": "image/png",
    "etag": "\"34e21-fxKWKCMdKnI81aMrZqcJebmLmKE\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 216609,
    "path": "../../.output/public/nuxt/dd-cover.252333dc.png"
  },
  "/nuxt/dependency-and-diversification.26b95190.js": {
    "type": "application/javascript",
    "etag": "\"1c7-K7eF8o8SIZASQSo7ChqfGD7atr8\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 455,
    "path": "../../.output/public/nuxt/dependency-and-diversification.26b95190.js"
  },
  "/nuxt/entrepreneurship.9aafc8e1.js": {
    "type": "application/javascript",
    "etag": "\"2e6-hR1mXYNUouP99BNflzNB78Hd/aI\"",
    "mtime": "2023-12-17T15:50:52.528Z",
    "size": 742,
    "path": "../../.output/public/nuxt/entrepreneurship.9aafc8e1.js"
  },
  "/nuxt/entry.39ea9ba3.js": {
    "type": "application/javascript",
    "etag": "\"25840-rrlMha6HIp9JdH/80766pScgIco\"",
    "mtime": "2023-12-17T15:50:52.529Z",
    "size": 153664,
    "path": "../../.output/public/nuxt/entry.39ea9ba3.js"
  },
  "/nuxt/error-404.0a002a08.js": {
    "type": "application/javascript",
    "etag": "\"8f5-LyBzsfWry160Nglw1equt0/Awso\"",
    "mtime": "2023-12-17T15:50:52.528Z",
    "size": 2293,
    "path": "../../.output/public/nuxt/error-404.0a002a08.js"
  },
  "/nuxt/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2023-12-17T15:50:52.520Z",
    "size": 3630,
    "path": "../../.output/public/nuxt/error-404.7fc72018.css"
  },
  "/nuxt/error-500.26823d0a.js": {
    "type": "application/javascript",
    "etag": "\"77e-6YzYVo77uUXgAkag9ZuJmwnF/r4\"",
    "mtime": "2023-12-17T15:50:52.529Z",
    "size": 1918,
    "path": "../../.output/public/nuxt/error-500.26823d0a.js"
  },
  "/nuxt/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 1950,
    "path": "../../.output/public/nuxt/error-500.c5df6088.css"
  },
  "/nuxt/Header.8b238fa0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6b2-m77nY2XwneHJa8R9h603CYcQTpc\"",
    "mtime": "2023-12-17T15:50:52.525Z",
    "size": 1714,
    "path": "../../.output/public/nuxt/Header.8b238fa0.css"
  },
  "/nuxt/Header.ea67a4fc.js": {
    "type": "application/javascript",
    "etag": "\"19c2-FiIWVnaL9csxOfAD3UrhkkhkJaA\"",
    "mtime": "2023-12-17T15:50:52.529Z",
    "size": 6594,
    "path": "../../.output/public/nuxt/Header.ea67a4fc.js"
  },
  "/nuxt/index.18a7266f.js": {
    "type": "application/javascript",
    "etag": "\"126-IQL1RsOTWvCc7J9lxpz9wxAArg8\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 294,
    "path": "../../.output/public/nuxt/index.18a7266f.js"
  },
  "/nuxt/index.af997271.js": {
    "type": "application/javascript",
    "etag": "\"2c2-gGigoYisZ4EFkVJOibPMtPQ5wR8\"",
    "mtime": "2023-12-17T15:50:52.528Z",
    "size": 706,
    "path": "../../.output/public/nuxt/index.af997271.js"
  },
  "/nuxt/meta-an-end-over-the-horizon.a00b71ed.js": {
    "type": "application/javascript",
    "etag": "\"1a4-Z8oYl9qEQi+O7768itKKTXyz1F0\"",
    "mtime": "2023-12-17T15:50:52.525Z",
    "size": 420,
    "path": "../../.output/public/nuxt/meta-an-end-over-the-horizon.a00b71ed.js"
  },
  "/nuxt/nuxt-link.a6103f10.js": {
    "type": "application/javascript",
    "etag": "\"fc4-2kAaHovRaIaD0Gi4ENx78/gAVO4\"",
    "mtime": "2023-12-17T15:50:52.529Z",
    "size": 4036,
    "path": "../../.output/public/nuxt/nuxt-link.a6103f10.js"
  },
  "/nuxt/publications.d68880cf.js": {
    "type": "application/javascript",
    "etag": "\"4a7-QYQ+BYMFTyVLR+DahwD062Jae9g\"",
    "mtime": "2023-12-17T15:50:52.528Z",
    "size": 1191,
    "path": "../../.output/public/nuxt/publications.d68880cf.js"
  },
  "/nuxt/team.73fe1250.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2bc-//pUAztIwDNIivxT/8xw+nJrxaI\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 700,
    "path": "../../.output/public/nuxt/team.73fe1250.css"
  },
  "/nuxt/team.88fe7261.js": {
    "type": "application/javascript",
    "etag": "\"105d-mrGX4jSZ4LT7tzbQQrYVrQbU4Dw\"",
    "mtime": "2023-12-17T15:50:52.529Z",
    "size": 4189,
    "path": "../../.output/public/nuxt/team.88fe7261.js"
  },
  "/nuxt/technology.20491484.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-GRcArMoUOMi9nqkWLKOuv1aVFtw\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 60,
    "path": "../../.output/public/nuxt/technology.20491484.css"
  },
  "/nuxt/technology.30c49505.js": {
    "type": "application/javascript",
    "etag": "\"b6b-MjBRQCNl0ee0DEpJQMP9kAc+baI\"",
    "mtime": "2023-12-17T15:50:52.529Z",
    "size": 2923,
    "path": "../../.output/public/nuxt/technology.30c49505.js"
  },
  "/nuxt/tesla-the-future-of-the-electrical-industry.f708cd5d.js": {
    "type": "application/javascript",
    "etag": "\"1c6-6/zoanhiSe/cMZDc7Q7S5Cxqa6E\"",
    "mtime": "2023-12-17T15:50:52.516Z",
    "size": 454,
    "path": "../../.output/public/nuxt/tesla-the-future-of-the-electrical-industry.f708cd5d.js"
  },
  "/nuxt/the-crisis-of-greed-russian-ukrainian-war.3c04eb1b.js": {
    "type": "application/javascript",
    "etag": "\"1ce-mLwV5+CktNJ2SlXKtK4llzN1g/Q\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 462,
    "path": "../../.output/public/nuxt/the-crisis-of-greed-russian-ukrainian-war.3c04eb1b.js"
  },
  "/nuxt/the-digital-recession.ad61bf9f.js": {
    "type": "application/javascript",
    "etag": "\"193-NjdjSqnxx+wDaqVA7p1cTqqGXGc\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 403,
    "path": "../../.output/public/nuxt/the-digital-recession.ad61bf9f.js"
  },
  "/nuxt/vue.f36acd1f.1d48aefa.js": {
    "type": "application/javascript",
    "etag": "\"186-3OUGCC89bDjPbqiNuuQVCuHDDgM\"",
    "mtime": "2023-12-17T15:50:52.525Z",
    "size": 390,
    "path": "../../.output/public/nuxt/vue.f36acd1f.1d48aefa.js"
  },
  "/nuxt/wbr-logo.3c6b6f0f.svg": {
    "type": "image/svg+xml",
    "etag": "\"a8a5-4Y7ZZLk936Rn+f7hcx6AWxBshH8\"",
    "mtime": "2023-12-17T15:50:52.524Z",
    "size": 43173,
    "path": "../../.output/public/nuxt/wbr-logo.3c6b6f0f.svg"
  },
  "/team/2021/Creative_Team.png": {
    "type": "image/png",
    "etag": "\"170fe8-FXbL7fklhdzX+E3FO5lywOhxf/4\"",
    "mtime": "2023-09-11T22:04:53.159Z",
    "size": 1511400,
    "path": "../../.output/public/team/2021/Creative_Team.png"
  },
  "/team/2021/Editorial_Team.png": {
    "type": "image/png",
    "etag": "\"17113d-7V8RRCJCrsONJcrZENFm8Q5bTvU\"",
    "mtime": "2023-09-11T22:04:53.165Z",
    "size": 1511741,
    "path": "../../.output/public/team/2021/Editorial_Team.png"
  },
  "/team/2021/Research_Team.png": {
    "type": "image/png",
    "etag": "\"13d10b-YAYnzKvelQHHL7R5ffd5wQPU6Ko\"",
    "mtime": "2023-09-11T22:04:53.170Z",
    "size": 1298699,
    "path": "../../.output/public/team/2021/Research_Team.png"
  },
  "/team/2023/creative_team.jpg": {
    "type": "image/jpeg",
    "etag": "\"2fda00-x4WbGMpzpZBe5iKuN22X4m2eB08\"",
    "mtime": "2023-11-06T00:22:03.562Z",
    "size": 3136000,
    "path": "../../.output/public/team/2023/creative_team.jpg"
  },
  "/team/2023/editorial_team.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ef7be-iQjyLPPWNq4KpgLRen3WcGdfa3g\"",
    "mtime": "2023-11-06T00:22:03.599Z",
    "size": 3078078,
    "path": "../../.output/public/team/2023/editorial_team.jpg"
  },
  "/team/2023/full_team.jpg": {
    "type": "image/jpeg",
    "etag": "\"4097f8-CubA6P3HnvR4+dzh3dOcHR18cks\"",
    "mtime": "2023-11-06T00:22:03.624Z",
    "size": 4233208,
    "path": "../../.output/public/team/2023/full_team.jpg"
  },
  "/team/2023/leadership_team.jpg": {
    "type": "image/jpeg",
    "etag": "\"31a74b-1z5aae/PuT2wRvRGWh/LV3KHX3E\"",
    "mtime": "2023-11-06T00:22:03.646Z",
    "size": 3254091,
    "path": "../../.output/public/team/2023/leadership_team.jpg"
  },
  "/team/2023/leadership_team_h.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a310d-KHi6f2E36s8IwcoxNQE0EUgmcpo\"",
    "mtime": "2023-11-06T00:22:03.661Z",
    "size": 2765069,
    "path": "../../.output/public/team/2023/leadership_team_h.jpg"
  },
  "/team/2023/research_team.jpg": {
    "type": "image/jpeg",
    "etag": "\"51555d-xiaM0KGh7ChGklgEM2B/dG38PR4\"",
    "mtime": "2023-11-06T00:22:03.683Z",
    "size": 5330269,
    "path": "../../.output/public/team/2023/research_team.jpg"
  },
  "/nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-bksrfwyqh08d16Z9YVTTrq9NtO4\"",
    "mtime": "2023-12-17T15:50:55.670Z",
    "size": 71,
    "path": "../../.output/public/nuxt/builds/latest.json"
  },
  "/articles/fall-2021/covers/lab-cover.png": {
    "type": "image/png",
    "etag": "\"22e21-TIVLFgMZfy0nRoKZUQw0jJ9hIbA\"",
    "mtime": "2023-09-11T22:04:52.797Z",
    "size": 142881,
    "path": "../../.output/public/articles/fall-2021/covers/lab-cover.png"
  },
  "/articles/fall-2021/covers/machine-learning-cover.png": {
    "type": "image/png",
    "etag": "\"403ba-L+2R67+TWflf7J+x6px6gHANzzg\"",
    "mtime": "2023-09-11T22:04:52.800Z",
    "size": 263098,
    "path": "../../.output/public/articles/fall-2021/covers/machine-learning-cover.png"
  },
  "/articles/fall-2021/covers/private-equity-cover.png": {
    "type": "image/png",
    "etag": "\"4e357-+v+FbrADAN4x5CPP/xgIw7ai1UY\"",
    "mtime": "2023-09-11T22:04:52.804Z",
    "size": 320343,
    "path": "../../.output/public/articles/fall-2021/covers/private-equity-cover.png"
  },
  "/articles/fall-2021/covers/roblox-cover.png": {
    "type": "image/png",
    "etag": "\"3697d-YS1i5g1Wa73CCWpky13FXQtd+Zc\"",
    "mtime": "2023-09-11T22:04:52.809Z",
    "size": 223613,
    "path": "../../.output/public/articles/fall-2021/covers/roblox-cover.png"
  },
  "/articles/spring-2021/covers/alumni-han-cover.png": {
    "type": "image/png",
    "etag": "\"492ed-AmJmg/WPzqv5dpvSNUHquGXKW9E\"",
    "mtime": "2023-09-11T22:04:53.129Z",
    "size": 299757,
    "path": "../../.output/public/articles/spring-2021/covers/alumni-han-cover.png"
  },
  "/articles/spring-2021/covers/alumni-hejmej-cover.png": {
    "type": "image/png",
    "etag": "\"59529-ACU/9nFIHzRJQCAAqwbw8YhU6G0\"",
    "mtime": "2023-09-11T22:04:53.132Z",
    "size": 365865,
    "path": "../../.output/public/articles/spring-2021/covers/alumni-hejmej-cover.png"
  },
  "/articles/spring-2021/covers/bigtech-cover.png": {
    "type": "image/png",
    "etag": "\"1437a-lc2pWUjD8H/UXSQ7tPRwhtkdT/E\"",
    "mtime": "2023-09-11T22:04:53.133Z",
    "size": 82810,
    "path": "../../.output/public/articles/spring-2021/covers/bigtech-cover.png"
  },
  "/articles/spring-2021/covers/esg-cover.png": {
    "type": "image/png",
    "etag": "\"1a062-7weJRurU9r5ljgXGHNd5yHYT5Kw\"",
    "mtime": "2023-09-11T22:04:53.135Z",
    "size": 106594,
    "path": "../../.output/public/articles/spring-2021/covers/esg-cover.png"
  },
  "/articles/spring-2021/covers/hacking-cover.png": {
    "type": "image/png",
    "etag": "\"d275-FyZCpvd6doAPWRE+bqG66x4ioKg\"",
    "mtime": "2023-09-11T22:04:53.136Z",
    "size": 53877,
    "path": "../../.output/public/articles/spring-2021/covers/hacking-cover.png"
  },
  "/articles/spring-2021/covers/india-cover.png": {
    "type": "image/png",
    "etag": "\"23e58-SY5sC8ZWUtJaxbUuis/Gh9SgGRQ\"",
    "mtime": "2023-09-11T22:04:53.138Z",
    "size": 147032,
    "path": "../../.output/public/articles/spring-2021/covers/india-cover.png"
  },
  "/articles/spring-2021/covers/nft-cover.png": {
    "type": "image/png",
    "etag": "\"1c73e-G7NOYoHe4CCJvHNGjfhkbPy1IrE\"",
    "mtime": "2023-09-11T22:04:53.141Z",
    "size": 116542,
    "path": "../../.output/public/articles/spring-2021/covers/nft-cover.png"
  },
  "/articles/spring-2021/covers/walmart-cover.png": {
    "type": "image/png",
    "etag": "\"31953-AM1Oc8Q1hnsp2/9GL42wtePFUsE\"",
    "mtime": "2023-09-11T22:04:53.142Z",
    "size": 203091,
    "path": "../../.output/public/articles/spring-2021/covers/walmart-cover.png"
  },
  "/articles/fall-2022/covers/crisis-cover.png": {
    "type": "image/png",
    "etag": "\"38e4d-furn9CeF7k/yx5121ArqGDsLC/s\"",
    "mtime": "2023-09-14T02:46:27.314Z",
    "size": 233037,
    "path": "../../.output/public/articles/fall-2022/covers/crisis-cover.png"
  },
  "/articles/fall-2022/covers/dd-cover.png": {
    "type": "image/png",
    "etag": "\"34e21-fxKWKCMdKnI81aMrZqcJebmLmKE\"",
    "mtime": "2023-09-14T02:46:27.317Z",
    "size": 216609,
    "path": "../../.output/public/articles/fall-2022/covers/dd-cover.png"
  },
  "/articles/fall-2022/covers/dr-cover.png": {
    "type": "image/png",
    "etag": "\"31bb4-0uwjSiGldqvJHp/KGz6keGLzzsw\"",
    "mtime": "2023-09-14T02:46:27.321Z",
    "size": 203700,
    "path": "../../.output/public/articles/fall-2022/covers/dr-cover.png"
  },
  "/articles/fall-2022/covers/meta-cover.png": {
    "type": "image/png",
    "etag": "\"238b2-bqx1apD4XHogpaVZinEZ0CwPEGI\"",
    "mtime": "2023-09-14T02:46:27.323Z",
    "size": 145586,
    "path": "../../.output/public/articles/fall-2022/covers/meta-cover.png"
  },
  "/articles/fall-2022/covers/tesla-cover.png": {
    "type": "image/png",
    "etag": "\"19321-JBdhhnt/IHvJfYgWYI9Cm4heY3o\"",
    "mtime": "2023-09-14T02:46:27.326Z",
    "size": 103201,
    "path": "../../.output/public/articles/fall-2022/covers/tesla-cover.png"
  },
  "/articles/winter-2021/covers/african-renaissance-cover.jpg": {
    "type": "image/jpeg",
    "etag": "\"44fd7-oVsUni309I8q/iQ36RcPrd9KqC0\"",
    "mtime": "2023-09-11T22:04:53.476Z",
    "size": 282583,
    "path": "../../.output/public/articles/winter-2021/covers/african-renaissance-cover.jpg"
  },
  "/articles/winter-2021/covers/blackberry-cover.jpg": {
    "type": "image/jpeg",
    "etag": "\"777ed-0efWoUA6vHhNjf5G8fpdRo0FK2Y\"",
    "mtime": "2023-09-11T22:04:53.487Z",
    "size": 489453,
    "path": "../../.output/public/articles/winter-2021/covers/blackberry-cover.jpg"
  },
  "/articles/winter-2021/covers/business-value-cover.jpg": {
    "type": "image/jpeg",
    "etag": "\"754f7-gWR5ngh/Z6xUcoClsWBqfMgtrEo\"",
    "mtime": "2023-09-11T22:04:53.492Z",
    "size": 480503,
    "path": "../../.output/public/articles/winter-2021/covers/business-value-cover.jpg"
  },
  "/articles/winter-2021/covers/psychedelics-cover.jpg": {
    "type": "image/jpeg",
    "etag": "\"5e7d8-MvPdFWloMvI7Po2l9UapdBVLXsk\"",
    "mtime": "2023-09-11T22:04:53.495Z",
    "size": 387032,
    "path": "../../.output/public/articles/winter-2021/covers/psychedelics-cover.jpg"
  },
  "/articles/winter-2021/covers/spac-cover.jpg": {
    "type": "image/jpeg",
    "etag": "\"787d8-K84fw7swEuQbKYQLfdM1ZqjcZJA\"",
    "mtime": "2023-09-11T22:04:53.501Z",
    "size": 493528,
    "path": "../../.output/public/articles/winter-2021/covers/spac-cover.jpg"
  },
  "/articles/winter-2021/covers/starter-hacks-cover.jpg": {
    "type": "image/jpeg",
    "etag": "\"a05ef-kK+RhNgBmeGifK00KrC7nDXkXCY\"",
    "mtime": "2023-09-11T22:04:53.509Z",
    "size": 656879,
    "path": "../../.output/public/articles/winter-2021/covers/starter-hacks-cover.jpg"
  },
  "/team/2023/creative/c1.png": {
    "type": "image/png",
    "etag": "\"1ca839-TOfymuBZL/mxmA5pECIwUG0woJk\"",
    "mtime": "2023-11-13T02:38:51.205Z",
    "size": 1878073,
    "path": "../../.output/public/team/2023/creative/c1.png"
  },
  "/team/2023/creative/c2.png": {
    "type": "image/png",
    "etag": "\"1e7aba-y5msuXU82n1q6/z0M3LRx5ekZTo\"",
    "mtime": "2023-11-13T02:38:51.213Z",
    "size": 1997498,
    "path": "../../.output/public/team/2023/creative/c2.png"
  },
  "/team/2023/creative/c3.png": {
    "type": "image/png",
    "etag": "\"1c68ae-jKw/bjAAs/yYlnDbkL5k1s5uJvU\"",
    "mtime": "2023-11-13T02:38:51.228Z",
    "size": 1861806,
    "path": "../../.output/public/team/2023/creative/c3.png"
  },
  "/team/2023/creative/c4.png": {
    "type": "image/png",
    "etag": "\"1b1780-mLbIk36DWUu7buauf4uCtSYMFAI\"",
    "mtime": "2023-11-13T02:38:51.230Z",
    "size": 1775488,
    "path": "../../.output/public/team/2023/creative/c4.png"
  },
  "/team/2023/editorial/e1.png": {
    "type": "image/png",
    "etag": "\"19645c-T2vczJGbPSrkKzctfiB6K9kr+bQ\"",
    "mtime": "2023-11-13T02:37:03.280Z",
    "size": 1664092,
    "path": "../../.output/public/team/2023/editorial/e1.png"
  },
  "/team/2023/editorial/e2.png": {
    "type": "image/png",
    "etag": "\"18cf25-gKiTLarE+2wXMdT3fPWy1RM/84s\"",
    "mtime": "2023-11-13T02:37:16.304Z",
    "size": 1625893,
    "path": "../../.output/public/team/2023/editorial/e2.png"
  },
  "/team/2023/editorial/e3.png": {
    "type": "image/png",
    "etag": "\"1a086c-BBgUMzAsRHZohw0PwsRD+MR45d8\"",
    "mtime": "2023-11-13T02:37:23.056Z",
    "size": 1706092,
    "path": "../../.output/public/team/2023/editorial/e3.png"
  },
  "/team/2023/editorial/e4.png": {
    "type": "image/png",
    "etag": "\"1cd496-E9b6MbBNXlTjtygs6aoBe9WpKd4\"",
    "mtime": "2023-11-13T02:37:29.473Z",
    "size": 1889430,
    "path": "../../.output/public/team/2023/editorial/e4.png"
  },
  "/team/2023/editorial/e5.png": {
    "type": "image/png",
    "etag": "\"1c48ea-9AFWr0S/hBa8zEP9Kvb/uuGWJ+Q\"",
    "mtime": "2023-11-13T02:37:34.666Z",
    "size": 1853674,
    "path": "../../.output/public/team/2023/editorial/e5.png"
  },
  "/team/2023/editorial/e6.png": {
    "type": "image/png",
    "etag": "\"16ca8a-/xgoSRnPU5H03HUiOnhCDFWPukE\"",
    "mtime": "2023-11-13T04:13:41.100Z",
    "size": 1493642,
    "path": "../../.output/public/team/2023/editorial/e6.png"
  },
  "/team/2023/editorial/e7.png": {
    "type": "image/png",
    "etag": "\"d1da7-pTa5voPz4/hYLa3tXQho0zbiU6U\"",
    "mtime": "2023-11-19T16:36:43.910Z",
    "size": 859559,
    "path": "../../.output/public/team/2023/editorial/e7.png"
  },
  "/team/2023/editorial/member.png": {
    "type": "image/png",
    "etag": "\"5bb9-F0jvyhrhpf6wkAsn0JFgand/qrg\"",
    "mtime": "2023-11-13T03:35:45.805Z",
    "size": 23481,
    "path": "../../.output/public/team/2023/editorial/member.png"
  },
  "/team/2023/leadership/l1.png": {
    "type": "image/png",
    "etag": "\"18a135-9mSoQv4lwTpWjKZz21Xq9FeALrQ\"",
    "mtime": "2023-11-13T02:38:01.940Z",
    "size": 1614133,
    "path": "../../.output/public/team/2023/leadership/l1.png"
  },
  "/team/2023/leadership/l2.png": {
    "type": "image/png",
    "etag": "\"16fa15-hlzZ2E0GCqKDCIixRJupHsrx0y4\"",
    "mtime": "2023-11-13T02:38:01.942Z",
    "size": 1505813,
    "path": "../../.output/public/team/2023/leadership/l2.png"
  },
  "/team/2023/leadership/l3.png": {
    "type": "image/png",
    "etag": "\"19416c-MSIxqH5SRTnIB1bsw+AMxO1U2pA\"",
    "mtime": "2023-11-13T02:38:01.938Z",
    "size": 1655148,
    "path": "../../.output/public/team/2023/leadership/l3.png"
  },
  "/team/2023/research/r1.png": {
    "type": "image/png",
    "etag": "\"19a9ad-iRWZfVtjCGaGw+ZwV3P9B05HAb8\"",
    "mtime": "2023-11-13T02:39:20.641Z",
    "size": 1681837,
    "path": "../../.output/public/team/2023/research/r1.png"
  },
  "/team/2023/research/r2.png": {
    "type": "image/png",
    "etag": "\"1a007a-9x50lzr7L1fGeUPEk9T2EqZe87g\"",
    "mtime": "2023-11-13T02:39:20.643Z",
    "size": 1704058,
    "path": "../../.output/public/team/2023/research/r2.png"
  },
  "/team/2023/research/r3.png": {
    "type": "image/png",
    "etag": "\"188487-x3Q37uaaAeACODg1DRGPu6kj9QA\"",
    "mtime": "2023-11-13T02:39:20.644Z",
    "size": 1606791,
    "path": "../../.output/public/team/2023/research/r3.png"
  },
  "/team/2023/research/r4.png": {
    "type": "image/png",
    "etag": "\"1b1780-mLbIk36DWUu7buauf4uCtSYMFAI\"",
    "mtime": "2023-11-13T02:39:20.647Z",
    "size": 1775488,
    "path": "../../.output/public/team/2023/research/r4.png"
  },
  "/team/2023/research/r5.png": {
    "type": "image/png",
    "etag": "\"1905b9-goGix44Ucg35fuiQRiZKIoJARhU\"",
    "mtime": "2023-11-13T02:39:20.650Z",
    "size": 1639865,
    "path": "../../.output/public/team/2023/research/r5.png"
  },
  "/team/2023/research/r6.png": {
    "type": "image/png",
    "etag": "\"1bb6e2-7/JCHrwUPIZ1GmjWG3hq/L4tTWs\"",
    "mtime": "2023-11-13T02:39:20.654Z",
    "size": 1816290,
    "path": "../../.output/public/team/2023/research/r6.png"
  },
  "/team/2023/research/r7.png": {
    "type": "image/png",
    "etag": "\"1982d2-r5wCY+h9sfe8UgOauSW/lAhNMRI\"",
    "mtime": "2023-11-13T03:02:20.905Z",
    "size": 1671890,
    "path": "../../.output/public/team/2023/research/r7.png"
  },
  "/team/2023/research/r8.png": {
    "type": "image/png",
    "etag": "\"1aabca-KD14Wv/RQi7dihHC8L7ydTE27bw\"",
    "mtime": "2023-11-13T03:01:55.312Z",
    "size": 1747914,
    "path": "../../.output/public/team/2023/research/r8.png"
  },
  "/nuxt/builds/meta/38781d31-7c0a-4380-b945-895a42da44c1.json": {
    "type": "application/json",
    "etag": "\"8b-v9oly5L6wl2+3iyG6WIe8KHXhlI\"",
    "mtime": "2023-12-17T15:50:55.671Z",
    "size": 139,
    "path": "../../.output/public/nuxt/builds/meta/38781d31-7c0a-4380-b945-895a42da44c1.json"
  },
  "/articles/fall-2021/in-text/lab_grown_meat/l-1.png": {
    "type": "image/png",
    "etag": "\"7070-3rb6y8cBNN6oAcq7TQAFEJA0t4U\"",
    "mtime": "2023-09-11T22:04:52.756Z",
    "size": 28784,
    "path": "../../.output/public/articles/fall-2021/in-text/lab_grown_meat/l-1.png"
  },
  "/articles/fall-2021/in-text/lab_grown_meat/l-10.png": {
    "type": "image/png",
    "etag": "\"4f45-HUaSnyuVFlbQrn5LPOhHTIexFeE\"",
    "mtime": "2023-09-11T22:04:52.756Z",
    "size": 20293,
    "path": "../../.output/public/articles/fall-2021/in-text/lab_grown_meat/l-10.png"
  },
  "/articles/fall-2021/in-text/lab_grown_meat/l-11.png": {
    "type": "image/png",
    "etag": "\"1eed-V0u9rpN4Ee6sAULuXR+drzaIrbk\"",
    "mtime": "2023-09-11T22:04:52.756Z",
    "size": 7917,
    "path": "../../.output/public/articles/fall-2021/in-text/lab_grown_meat/l-11.png"
  },
  "/articles/fall-2021/in-text/lab_grown_meat/l-2.png": {
    "type": "image/png",
    "etag": "\"87f3-gmGE//7La8XSA7aEOtNi8Mj2pQA\"",
    "mtime": "2023-09-11T22:04:52.757Z",
    "size": 34803,
    "path": "../../.output/public/articles/fall-2021/in-text/lab_grown_meat/l-2.png"
  },
  "/articles/fall-2021/in-text/lab_grown_meat/l-3.png": {
    "type": "image/png",
    "etag": "\"a550-voLeG++xNTGt4aQqVAA0j/084mw\"",
    "mtime": "2023-09-11T22:04:52.758Z",
    "size": 42320,
    "path": "../../.output/public/articles/fall-2021/in-text/lab_grown_meat/l-3.png"
  },
  "/articles/fall-2021/in-text/lab_grown_meat/l-4.png": {
    "type": "image/png",
    "etag": "\"6c0c-83il/G+0ggqJ1gYfRymEQIxK7gw\"",
    "mtime": "2023-09-11T22:04:52.758Z",
    "size": 27660,
    "path": "../../.output/public/articles/fall-2021/in-text/lab_grown_meat/l-4.png"
  },
  "/articles/fall-2021/in-text/lab_grown_meat/l-5.png": {
    "type": "image/png",
    "etag": "\"8357-mKAvg4Tul7WaeSbrFJyADhCrGhQ\"",
    "mtime": "2023-09-11T22:04:52.759Z",
    "size": 33623,
    "path": "../../.output/public/articles/fall-2021/in-text/lab_grown_meat/l-5.png"
  },
  "/articles/fall-2021/in-text/lab_grown_meat/l-6.png": {
    "type": "image/png",
    "etag": "\"12774-V1d8C1EErzdTdYB/3cl8wJkNy1U\"",
    "mtime": "2023-09-11T22:04:52.760Z",
    "size": 75636,
    "path": "../../.output/public/articles/fall-2021/in-text/lab_grown_meat/l-6.png"
  },
  "/articles/fall-2021/in-text/lab_grown_meat/l-7.png": {
    "type": "image/png",
    "etag": "\"3a51-Lc/S0KAQmZNFkFPiyIlwGp/mrXk\"",
    "mtime": "2023-09-11T22:04:52.761Z",
    "size": 14929,
    "path": "../../.output/public/articles/fall-2021/in-text/lab_grown_meat/l-7.png"
  },
  "/articles/fall-2021/in-text/lab_grown_meat/l-8.png": {
    "type": "image/png",
    "etag": "\"5665-f0VBVYCAQZrR1K7ZjtUXIVMJajw\"",
    "mtime": "2023-09-11T22:04:52.762Z",
    "size": 22117,
    "path": "../../.output/public/articles/fall-2021/in-text/lab_grown_meat/l-8.png"
  },
  "/articles/fall-2021/in-text/lab_grown_meat/l-9.png": {
    "type": "image/png",
    "etag": "\"2ebd-DS9qg/tfMTauwA56WVwlcTvuiP8\"",
    "mtime": "2023-09-11T22:04:52.762Z",
    "size": 11965,
    "path": "../../.output/public/articles/fall-2021/in-text/lab_grown_meat/l-9.png"
  },
  "/articles/fall-2021/in-text/machine_learning/ml-1.png": {
    "type": "image/png",
    "etag": "\"15300-2Q08oe41zm5ULD9ekjIK66uXdwU\"",
    "mtime": "2023-09-11T22:04:52.764Z",
    "size": 86784,
    "path": "../../.output/public/articles/fall-2021/in-text/machine_learning/ml-1.png"
  },
  "/articles/fall-2021/in-text/machine_learning/ml-2.png": {
    "type": "image/png",
    "etag": "\"968e-TASSz8FKWmH/hAEvsX6Xj+vf2Bk\"",
    "mtime": "2023-09-11T22:04:52.764Z",
    "size": 38542,
    "path": "../../.output/public/articles/fall-2021/in-text/machine_learning/ml-2.png"
  },
  "/articles/fall-2021/in-text/machine_learning/ml-3.png": {
    "type": "image/png",
    "etag": "\"7de4-aXi0l7M7unagCt/bqVXGFZOsrMc\"",
    "mtime": "2023-09-11T22:04:52.765Z",
    "size": 32228,
    "path": "../../.output/public/articles/fall-2021/in-text/machine_learning/ml-3.png"
  },
  "/articles/fall-2021/in-text/machine_learning/ml-4.png": {
    "type": "image/png",
    "etag": "\"13569-MLdkz0QM55GFljcXhZfnWlCHoiQ\"",
    "mtime": "2023-09-11T22:04:52.767Z",
    "size": 79209,
    "path": "../../.output/public/articles/fall-2021/in-text/machine_learning/ml-4.png"
  },
  "/articles/fall-2021/in-text/machine_learning/ml-5.png": {
    "type": "image/png",
    "etag": "\"7a4b-+8mokx9IvehJSqa0F5aPhnF78ds\"",
    "mtime": "2023-09-11T22:04:52.768Z",
    "size": 31307,
    "path": "../../.output/public/articles/fall-2021/in-text/machine_learning/ml-5.png"
  },
  "/articles/fall-2021/in-text/machine_learning/ml-6.png": {
    "type": "image/png",
    "etag": "\"10a93-aw+qcDwTIpvmW+h+NIE79L/tzqg\"",
    "mtime": "2023-09-11T22:04:52.769Z",
    "size": 68243,
    "path": "../../.output/public/articles/fall-2021/in-text/machine_learning/ml-6.png"
  },
  "/articles/fall-2021/in-text/machine_learning/ml-7.png": {
    "type": "image/png",
    "etag": "\"b834-u2IbB6TBW5Mpv4v22h86gOLJo78\"",
    "mtime": "2023-09-11T22:04:52.769Z",
    "size": 47156,
    "path": "../../.output/public/articles/fall-2021/in-text/machine_learning/ml-7.png"
  },
  "/articles/fall-2021/in-text/machine_learning/ml-8.png": {
    "type": "image/png",
    "etag": "\"18eb5-HnmTERA56RfAS0WOjpvfF/uy0hU\"",
    "mtime": "2023-09-11T22:04:52.772Z",
    "size": 102069,
    "path": "../../.output/public/articles/fall-2021/in-text/machine_learning/ml-8.png"
  },
  "/articles/fall-2021/in-text/machine_learning/ml-9.png": {
    "type": "image/png",
    "etag": "\"158ba-mki0ChlQa3+J5Fd/RZrvJ7XtY+U\"",
    "mtime": "2023-09-11T22:04:52.773Z",
    "size": 88250,
    "path": "../../.output/public/articles/fall-2021/in-text/machine_learning/ml-9.png"
  },
  "/articles/fall-2021/in-text/private_equity/pe-1.png": {
    "type": "image/png",
    "etag": "\"33c34-ZJzThWRCg89cK5vjRKxjffB5zPs\"",
    "mtime": "2023-09-11T22:04:52.776Z",
    "size": 212020,
    "path": "../../.output/public/articles/fall-2021/in-text/private_equity/pe-1.png"
  },
  "/articles/fall-2021/in-text/private_equity/pe-2.png": {
    "type": "image/png",
    "etag": "\"17570-MFpUC2T5BqJzQou1+GhVXATHWKM\"",
    "mtime": "2023-09-11T22:04:52.778Z",
    "size": 95600,
    "path": "../../.output/public/articles/fall-2021/in-text/private_equity/pe-2.png"
  },
  "/articles/fall-2021/in-text/private_equity/pe-3.png": {
    "type": "image/png",
    "etag": "\"e1d5-VFWvakRNGjm9uUOr8Pm0sLZbHik\"",
    "mtime": "2023-09-11T22:04:52.779Z",
    "size": 57813,
    "path": "../../.output/public/articles/fall-2021/in-text/private_equity/pe-3.png"
  },
  "/articles/fall-2021/in-text/private_equity/pe-4.png": {
    "type": "image/png",
    "etag": "\"16dd5-06tIyRuVfXsu+by0atLrbMc4EGk\"",
    "mtime": "2023-09-11T22:04:52.780Z",
    "size": 93653,
    "path": "../../.output/public/articles/fall-2021/in-text/private_equity/pe-4.png"
  },
  "/articles/fall-2021/in-text/private_equity/pe-5.png": {
    "type": "image/png",
    "etag": "\"ae0e-Nuv0cioa5wjNx50IusmNokre2oE\"",
    "mtime": "2023-09-11T22:04:52.782Z",
    "size": 44558,
    "path": "../../.output/public/articles/fall-2021/in-text/private_equity/pe-5.png"
  },
  "/articles/fall-2021/in-text/private_equity/pe-6.png": {
    "type": "image/png",
    "etag": "\"404cf-rZbThYkOpUjjzbE99MbiHDR6dPQ\"",
    "mtime": "2023-09-11T22:04:52.785Z",
    "size": 263375,
    "path": "../../.output/public/articles/fall-2021/in-text/private_equity/pe-6.png"
  },
  "/articles/fall-2021/in-text/private_equity/pe-7.png": {
    "type": "image/png",
    "etag": "\"b520-Hcv/mSaGZQ3iPsTC2Gb6K8zb44E\"",
    "mtime": "2023-09-11T22:04:52.786Z",
    "size": 46368,
    "path": "../../.output/public/articles/fall-2021/in-text/private_equity/pe-7.png"
  },
  "/articles/fall-2021/in-text/private_equity/pe-8.png": {
    "type": "image/png",
    "etag": "\"11c5c-QR22dkzM1Eo5E+fpfD4p/DC6F44\"",
    "mtime": "2023-09-11T22:04:52.788Z",
    "size": 72796,
    "path": "../../.output/public/articles/fall-2021/in-text/private_equity/pe-8.png"
  },
  "/articles/fall-2021/in-text/roblox/r-1.png": {
    "type": "image/png",
    "etag": "\"3f1f-CqlF2PYJMli/LlZSdIEx4fMOlrA\"",
    "mtime": "2023-09-11T22:04:52.789Z",
    "size": 16159,
    "path": "../../.output/public/articles/fall-2021/in-text/roblox/r-1.png"
  },
  "/articles/fall-2021/in-text/roblox/r-2.png": {
    "type": "image/png",
    "etag": "\"33f3-AMqfQZQQlfDBV8pxQc/Dfw0+DKY\"",
    "mtime": "2023-09-11T22:04:52.789Z",
    "size": 13299,
    "path": "../../.output/public/articles/fall-2021/in-text/roblox/r-2.png"
  },
  "/articles/fall-2021/in-text/roblox/r-3.png": {
    "type": "image/png",
    "etag": "\"55f7-AmcE/ohGaYMhWxAHp9n0mssvSPY\"",
    "mtime": "2023-09-11T22:04:52.790Z",
    "size": 22007,
    "path": "../../.output/public/articles/fall-2021/in-text/roblox/r-3.png"
  },
  "/articles/fall-2021/in-text/roblox/r-4.png": {
    "type": "image/png",
    "etag": "\"263a-tVhjbE4RqnZJIrmIpy52Jgapy5M\"",
    "mtime": "2023-09-11T22:04:52.791Z",
    "size": 9786,
    "path": "../../.output/public/articles/fall-2021/in-text/roblox/r-4.png"
  },
  "/articles/fall-2021/in-text/roblox/r-5.png": {
    "type": "image/png",
    "etag": "\"141c9-j6X8odsfGI6+KeqZkgIeUIMZ83c\"",
    "mtime": "2023-09-11T22:04:52.793Z",
    "size": 82377,
    "path": "../../.output/public/articles/fall-2021/in-text/roblox/r-5.png"
  },
  "/articles/spring-2021/in-text/alumni-han/han-1.png": {
    "type": "image/png",
    "etag": "\"e094-EsRjMD6LjhrZvTWg3/1jzXgpeCw\"",
    "mtime": "2023-09-11T22:04:53.064Z",
    "size": 57492,
    "path": "../../.output/public/articles/spring-2021/in-text/alumni-han/han-1.png"
  },
  "/articles/spring-2021/in-text/alumni-han/han-2.png": {
    "type": "image/png",
    "etag": "\"119f8-O/lEtaq694y5UZ004cjZ4NhRyjQ\"",
    "mtime": "2023-09-11T22:04:53.065Z",
    "size": 72184,
    "path": "../../.output/public/articles/spring-2021/in-text/alumni-han/han-2.png"
  },
  "/articles/spring-2021/in-text/alumni-han/han-3.png": {
    "type": "image/png",
    "etag": "\"ba4f-ZGYG3fiIqeRudRgwt4Vgb/TgxjM\"",
    "mtime": "2023-09-11T22:04:53.066Z",
    "size": 47695,
    "path": "../../.output/public/articles/spring-2021/in-text/alumni-han/han-3.png"
  },
  "/articles/spring-2021/in-text/alumni-han/han-4.png": {
    "type": "image/png",
    "etag": "\"7318-Gd+v7Z9SFqZpz5wdOoCYqsshfWo\"",
    "mtime": "2023-09-11T22:04:53.067Z",
    "size": 29464,
    "path": "../../.output/public/articles/spring-2021/in-text/alumni-han/han-4.png"
  },
  "/articles/spring-2021/in-text/alumni-hejmej/ah-1.png": {
    "type": "image/png",
    "etag": "\"9bde-0TBZSIm0arSOuKz+Hl/xD9KE95U\"",
    "mtime": "2023-09-11T22:04:53.068Z",
    "size": 39902,
    "path": "../../.output/public/articles/spring-2021/in-text/alumni-hejmej/ah-1.png"
  },
  "/articles/spring-2021/in-text/alumni-hejmej/ah-2.png": {
    "type": "image/png",
    "etag": "\"66d1-jVuLXVHToU0IsYRibDFwwRogv10\"",
    "mtime": "2023-09-11T22:04:53.069Z",
    "size": 26321,
    "path": "../../.output/public/articles/spring-2021/in-text/alumni-hejmej/ah-2.png"
  },
  "/articles/spring-2021/in-text/alumni-hejmej/ah-3.png": {
    "type": "image/png",
    "etag": "\"ba99-KfecOdxN2E2dOCKhiO8hx27jVEg\"",
    "mtime": "2023-09-11T22:04:53.070Z",
    "size": 47769,
    "path": "../../.output/public/articles/spring-2021/in-text/alumni-hejmej/ah-3.png"
  },
  "/articles/spring-2021/in-text/alumni-hejmej/ah-4.png": {
    "type": "image/png",
    "etag": "\"6d3b-BnyrAR3RRz07o2CR1qU9SDOYgb8\"",
    "mtime": "2023-09-11T22:04:53.071Z",
    "size": 27963,
    "path": "../../.output/public/articles/spring-2021/in-text/alumni-hejmej/ah-4.png"
  },
  "/articles/spring-2021/in-text/bigtech/bt-1.png": {
    "type": "image/png",
    "etag": "\"2997-97le6qlQfD4cbECKmLj9b7SHxIw\"",
    "mtime": "2023-09-11T22:04:53.072Z",
    "size": 10647,
    "path": "../../.output/public/articles/spring-2021/in-text/bigtech/bt-1.png"
  },
  "/articles/spring-2021/in-text/bigtech/bt-2.png": {
    "type": "image/png",
    "etag": "\"40e6-i+V6UDo72QgSx5GDMGA3fbQ5Fnw\"",
    "mtime": "2023-09-11T22:04:53.072Z",
    "size": 16614,
    "path": "../../.output/public/articles/spring-2021/in-text/bigtech/bt-2.png"
  },
  "/articles/spring-2021/in-text/bigtech/bt-3.png": {
    "type": "image/png",
    "etag": "\"7ca5-rJ7DGuW6KgCF2T+y2fncTPUHFWw\"",
    "mtime": "2023-09-11T22:04:53.073Z",
    "size": 31909,
    "path": "../../.output/public/articles/spring-2021/in-text/bigtech/bt-3.png"
  },
  "/articles/spring-2021/in-text/bigtech/bt-4.png": {
    "type": "image/png",
    "etag": "\"8fbd-mjtvJ9hem/StcMSBRfv7lq0QVog\"",
    "mtime": "2023-09-11T22:04:53.074Z",
    "size": 36797,
    "path": "../../.output/public/articles/spring-2021/in-text/bigtech/bt-4.png"
  },
  "/articles/spring-2021/in-text/bigtech/bt-5.png": {
    "type": "image/png",
    "etag": "\"4fd7-UvMCADoVOKOay6a5pg3hQQj4TNs\"",
    "mtime": "2023-09-11T22:04:53.074Z",
    "size": 20439,
    "path": "../../.output/public/articles/spring-2021/in-text/bigtech/bt-5.png"
  },
  "/articles/spring-2021/in-text/bigtech/bt-6.png": {
    "type": "image/png",
    "etag": "\"1d82-y5erHzLUFPdn0AT/G0ImuQ9pUbk\"",
    "mtime": "2023-09-11T22:04:53.075Z",
    "size": 7554,
    "path": "../../.output/public/articles/spring-2021/in-text/bigtech/bt-6.png"
  },
  "/articles/spring-2021/in-text/bigtech/bt-7.png": {
    "type": "image/png",
    "etag": "\"ef8-+GGB1B0JcKe98EsCjIluna9RBcQ\"",
    "mtime": "2023-09-11T22:04:53.076Z",
    "size": 3832,
    "path": "../../.output/public/articles/spring-2021/in-text/bigtech/bt-7.png"
  },
  "/articles/spring-2021/in-text/esg/esg-1.png": {
    "type": "image/png",
    "etag": "\"816f-Q8DYP0vIqFycmgPfeR+of0eQPik\"",
    "mtime": "2023-09-11T22:04:53.077Z",
    "size": 33135,
    "path": "../../.output/public/articles/spring-2021/in-text/esg/esg-1.png"
  },
  "/articles/spring-2021/in-text/esg/esg-2.png": {
    "type": "image/png",
    "etag": "\"1c880-xMze8yUwPb6tZM9O1aYSL169+ZQ\"",
    "mtime": "2023-09-11T22:04:53.079Z",
    "size": 116864,
    "path": "../../.output/public/articles/spring-2021/in-text/esg/esg-2.png"
  },
  "/articles/spring-2021/in-text/esg/esg-3.png": {
    "type": "image/png",
    "etag": "\"13562-o3l4X10XAJpNPgwAm+khqANtvRA\"",
    "mtime": "2023-09-11T22:04:53.080Z",
    "size": 79202,
    "path": "../../.output/public/articles/spring-2021/in-text/esg/esg-3.png"
  },
  "/articles/spring-2021/in-text/esg/esg-4.png": {
    "type": "image/png",
    "etag": "\"4159-1I+nwI7pLHJjYjbPPwrkJ5o/awg\"",
    "mtime": "2023-09-11T22:04:53.081Z",
    "size": 16729,
    "path": "../../.output/public/articles/spring-2021/in-text/esg/esg-4.png"
  },
  "/articles/spring-2021/in-text/esg/esg-5.png": {
    "type": "image/png",
    "etag": "\"1b87f-YPj7hWgNK/V4Se0P8rIErpP5jSU\"",
    "mtime": "2023-09-11T22:04:53.083Z",
    "size": 112767,
    "path": "../../.output/public/articles/spring-2021/in-text/esg/esg-5.png"
  },
  "/articles/spring-2021/in-text/esg/esg-6.png": {
    "type": "image/png",
    "etag": "\"12075-Wh9vFpGjUVFgor+u6yYyOMxX2TE\"",
    "mtime": "2023-09-11T22:04:53.084Z",
    "size": 73845,
    "path": "../../.output/public/articles/spring-2021/in-text/esg/esg-6.png"
  },
  "/articles/spring-2021/in-text/hacking/h-1.png": {
    "type": "image/png",
    "etag": "\"2940-m+cZIWcsjEy+VftPRhsE+/ny/bs\"",
    "mtime": "2023-09-11T22:04:53.085Z",
    "size": 10560,
    "path": "../../.output/public/articles/spring-2021/in-text/hacking/h-1.png"
  },
  "/articles/spring-2021/in-text/hacking/h-2.png": {
    "type": "image/png",
    "etag": "\"2154-v9bPP6QTCDvZDf99Mm7o8tuI/fg\"",
    "mtime": "2023-09-11T22:04:53.086Z",
    "size": 8532,
    "path": "../../.output/public/articles/spring-2021/in-text/hacking/h-2.png"
  },
  "/articles/spring-2021/in-text/hacking/h-3.png": {
    "type": "image/png",
    "etag": "\"ca4-shsMJpRyg1WNwVTyJU9y4gy1lAk\"",
    "mtime": "2023-09-11T22:04:53.088Z",
    "size": 3236,
    "path": "../../.output/public/articles/spring-2021/in-text/hacking/h-3.png"
  },
  "/articles/spring-2021/in-text/hacking/h-4.png": {
    "type": "image/png",
    "etag": "\"31f4-VOe+WVDRlrYMm/iQFC5Q7neEiPU\"",
    "mtime": "2023-09-11T22:04:53.089Z",
    "size": 12788,
    "path": "../../.output/public/articles/spring-2021/in-text/hacking/h-4.png"
  },
  "/articles/spring-2021/in-text/hacking/h-5.png": {
    "type": "image/png",
    "etag": "\"8de9-gTC988I+WeziFibSjRmSi4DFS8w\"",
    "mtime": "2023-09-11T22:04:53.090Z",
    "size": 36329,
    "path": "../../.output/public/articles/spring-2021/in-text/hacking/h-5.png"
  },
  "/articles/spring-2021/in-text/hacking/h-6.png": {
    "type": "image/png",
    "etag": "\"301f-6HvIac6+Eprv57WGNAHmUMThmC8\"",
    "mtime": "2023-09-11T22:04:53.091Z",
    "size": 12319,
    "path": "../../.output/public/articles/spring-2021/in-text/hacking/h-6.png"
  },
  "/articles/spring-2021/in-text/hacking/h-7.png": {
    "type": "image/png",
    "etag": "\"5e09-Fd4WgsoBnC9T3m/BIrvEPIVGlUw\"",
    "mtime": "2023-09-11T22:04:53.092Z",
    "size": 24073,
    "path": "../../.output/public/articles/spring-2021/in-text/hacking/h-7.png"
  },
  "/articles/spring-2021/in-text/hacking/h-8.png": {
    "type": "image/png",
    "etag": "\"bcb4-wuNyLzZrJPL0q+LgHvOXsWCRgH8\"",
    "mtime": "2023-09-11T22:04:53.093Z",
    "size": 48308,
    "path": "../../.output/public/articles/spring-2021/in-text/hacking/h-8.png"
  },
  "/articles/spring-2021/in-text/hacking/h-9.png": {
    "type": "image/png",
    "etag": "\"53b3-/0xcbG3NOf6rhLPAyanics78NuA\"",
    "mtime": "2023-09-11T22:04:53.094Z",
    "size": 21427,
    "path": "../../.output/public/articles/spring-2021/in-text/hacking/h-9.png"
  },
  "/articles/spring-2021/in-text/india/in-1.png": {
    "type": "image/png",
    "etag": "\"c720-ZpkcVbFRaV42XvxwCZvHG2Ot9ys\"",
    "mtime": "2023-09-11T22:04:53.095Z",
    "size": 50976,
    "path": "../../.output/public/articles/spring-2021/in-text/india/in-1.png"
  },
  "/articles/spring-2021/in-text/india/in-2.png": {
    "type": "image/png",
    "etag": "\"8e35-e+wYdLb1w+iSrTE5xMIYxy46D4M\"",
    "mtime": "2023-09-11T22:04:53.096Z",
    "size": 36405,
    "path": "../../.output/public/articles/spring-2021/in-text/india/in-2.png"
  },
  "/articles/spring-2021/in-text/india/in-3.png": {
    "type": "image/png",
    "etag": "\"83c1-saQS1PvI3Qh0DO6wFJca1D17tSU\"",
    "mtime": "2023-09-11T22:04:53.097Z",
    "size": 33729,
    "path": "../../.output/public/articles/spring-2021/in-text/india/in-3.png"
  },
  "/articles/spring-2021/in-text/india/in-4.png": {
    "type": "image/png",
    "etag": "\"11b5f-6UNW6L4yD4SipbdLH2gU2B1FCaM\"",
    "mtime": "2023-09-11T22:04:53.099Z",
    "size": 72543,
    "path": "../../.output/public/articles/spring-2021/in-text/india/in-4.png"
  },
  "/articles/spring-2021/in-text/nft/nft-1.png": {
    "type": "image/png",
    "etag": "\"4eb6-5M+l9NT3dshoLmWXq+bd8TJCkl0\"",
    "mtime": "2023-09-11T22:04:53.100Z",
    "size": 20150,
    "path": "../../.output/public/articles/spring-2021/in-text/nft/nft-1.png"
  },
  "/articles/spring-2021/in-text/nft/nft-2.png": {
    "type": "image/png",
    "etag": "\"f696-mF61l2Hmivc7Ekbjfpq/beP8yAY\"",
    "mtime": "2023-09-11T22:04:53.100Z",
    "size": 63126,
    "path": "../../.output/public/articles/spring-2021/in-text/nft/nft-2.png"
  },
  "/articles/spring-2021/in-text/nft/nft-3.png": {
    "type": "image/png",
    "etag": "\"e018-W8LHG4SAs65uvY/MkVgbykgCSi4\"",
    "mtime": "2023-09-11T22:04:53.106Z",
    "size": 57368,
    "path": "../../.output/public/articles/spring-2021/in-text/nft/nft-3.png"
  },
  "/articles/spring-2021/in-text/nft/nft-4.png": {
    "type": "image/png",
    "etag": "\"11382-ITsSKKb/6KMlliU5Pl5hQ0MRbfo\"",
    "mtime": "2023-09-11T22:04:53.111Z",
    "size": 70530,
    "path": "../../.output/public/articles/spring-2021/in-text/nft/nft-4.png"
  },
  "/articles/spring-2021/in-text/nft/nft-5.png": {
    "type": "image/png",
    "etag": "\"7175-WBJMd6HguEbufR+xSdpT9zebcaE\"",
    "mtime": "2023-09-11T22:04:53.113Z",
    "size": 29045,
    "path": "../../.output/public/articles/spring-2021/in-text/nft/nft-5.png"
  },
  "/articles/spring-2021/in-text/nft/nft-6.png": {
    "type": "image/png",
    "etag": "\"105a8-IYZ3BXjs3qIKXlIGskFvAPKQDWI\"",
    "mtime": "2023-09-11T22:04:53.114Z",
    "size": 66984,
    "path": "../../.output/public/articles/spring-2021/in-text/nft/nft-6.png"
  },
  "/articles/spring-2021/in-text/nft/nft-7.png": {
    "type": "image/png",
    "etag": "\"13d4a-cArFbs5ddLUKR9hQo5Bc56bqZUU\"",
    "mtime": "2023-09-11T22:04:53.116Z",
    "size": 81226,
    "path": "../../.output/public/articles/spring-2021/in-text/nft/nft-7.png"
  },
  "/articles/spring-2021/in-text/nft/nft-8.png": {
    "type": "image/png",
    "etag": "\"16d3e-0OBIKO1FNHnoRUlZwapJxXeEYVs\"",
    "mtime": "2023-09-11T22:04:53.118Z",
    "size": 93502,
    "path": "../../.output/public/articles/spring-2021/in-text/nft/nft-8.png"
  },
  "/articles/spring-2021/in-text/nft/nft-9.png": {
    "type": "image/png",
    "etag": "\"de8a-D4g9A6N2Kxxn6uDBrwlgWaEHCxw\"",
    "mtime": "2023-09-11T22:04:53.119Z",
    "size": 56970,
    "path": "../../.output/public/articles/spring-2021/in-text/nft/nft-9.png"
  },
  "/articles/spring-2021/in-text/walmart/w-1.png": {
    "type": "image/png",
    "etag": "\"182e9-hKdXTWWwxnRfXdVJMohhlSsthyQ\"",
    "mtime": "2023-09-11T22:04:53.121Z",
    "size": 99049,
    "path": "../../.output/public/articles/spring-2021/in-text/walmart/w-1.png"
  },
  "/articles/spring-2021/in-text/walmart/w-2.png": {
    "type": "image/png",
    "etag": "\"16736-XggWUCFbK49YurzUR93HMFyVmJ4\"",
    "mtime": "2023-09-11T22:04:53.123Z",
    "size": 91958,
    "path": "../../.output/public/articles/spring-2021/in-text/walmart/w-2.png"
  },
  "/articles/spring-2021/in-text/walmart/w-3.png": {
    "type": "image/png",
    "etag": "\"9e3f-3dUD5Gj0D/bir7SxiMvA80W1AyM\"",
    "mtime": "2023-09-11T22:04:53.123Z",
    "size": 40511,
    "path": "../../.output/public/articles/spring-2021/in-text/walmart/w-3.png"
  },
  "/articles/spring-2021/in-text/walmart/w-4.png": {
    "type": "image/png",
    "etag": "\"bd68-7TEoFcQ01qQRAgyEQffxQ5w82+s\"",
    "mtime": "2023-09-11T22:04:53.124Z",
    "size": 48488,
    "path": "../../.output/public/articles/spring-2021/in-text/walmart/w-4.png"
  },
  "/articles/spring-2021/in-text/walmart/w-5.png": {
    "type": "image/png",
    "etag": "\"c34d-4U5Ruy0WZXAmWhGNoELeT/cI0lg\"",
    "mtime": "2023-09-11T22:04:53.125Z",
    "size": 49997,
    "path": "../../.output/public/articles/spring-2021/in-text/walmart/w-5.png"
  },
  "/articles/fall-2022/in-text/crisis/c-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"23487-7dVvfIUC8kAC+1VEPe6UBAreLvc\"",
    "mtime": "2023-09-14T17:47:43.300Z",
    "size": 144519,
    "path": "../../.output/public/articles/fall-2022/in-text/crisis/c-1.svg"
  },
  "/articles/fall-2022/in-text/crisis/c-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"1b021b-JZ3gN+Fdif7oroXFi0y4ZxuJzM4\"",
    "mtime": "2023-09-14T16:52:01.626Z",
    "size": 1770011,
    "path": "../../.output/public/articles/fall-2022/in-text/crisis/c-2.svg"
  },
  "/articles/fall-2022/in-text/crisis/c-3.svg": {
    "type": "image/svg+xml",
    "etag": "\"83bde-PouIJ2FrnzgHsVgGYrqRdarF3P8\"",
    "mtime": "2023-09-14T16:52:09.672Z",
    "size": 539614,
    "path": "../../.output/public/articles/fall-2022/in-text/crisis/c-3.svg"
  },
  "/articles/fall-2022/in-text/crisis/c-4.svg": {
    "type": "image/svg+xml",
    "etag": "\"2bc4c-zt/nQKBW1RVBQs/jG8GRBRHpWCk\"",
    "mtime": "2023-09-14T16:52:15.676Z",
    "size": 179276,
    "path": "../../.output/public/articles/fall-2022/in-text/crisis/c-4.svg"
  },
  "/articles/fall-2022/in-text/crisis/c-5.svg": {
    "type": "image/svg+xml",
    "etag": "\"8c218-z7jj2lCr8fDHg9GfzCQZNwll5mk\"",
    "mtime": "2023-09-14T16:52:23.535Z",
    "size": 573976,
    "path": "../../.output/public/articles/fall-2022/in-text/crisis/c-5.svg"
  },
  "/articles/fall-2022/in-text/crisis/c-6.svg": {
    "type": "image/svg+xml",
    "etag": "\"1cba8-LWNiuV/GaJaQhfFoBkfAll3YfBk\"",
    "mtime": "2023-09-14T16:52:32.350Z",
    "size": 117672,
    "path": "../../.output/public/articles/fall-2022/in-text/crisis/c-6.svg"
  },
  "/articles/fall-2022/in-text/crisis/c-7.svg": {
    "type": "image/svg+xml",
    "etag": "\"306bc-JjeUhKkiQlRjBsIxOyjj5YqQTQY\"",
    "mtime": "2023-09-14T16:52:39.382Z",
    "size": 198332,
    "path": "../../.output/public/articles/fall-2022/in-text/crisis/c-7.svg"
  },
  "/articles/fall-2022/in-text/dd/d-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"2267e-dQMYl3wG48vdav84Haf+pUwViBo\"",
    "mtime": "2023-09-14T16:32:22.303Z",
    "size": 140926,
    "path": "../../.output/public/articles/fall-2022/in-text/dd/d-1.svg"
  },
  "/articles/fall-2022/in-text/dd/d-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"30b18-LNyd+5mTNJVAe/Z+pQgwNh5S5X0\"",
    "mtime": "2023-09-14T16:42:56.067Z",
    "size": 199448,
    "path": "../../.output/public/articles/fall-2022/in-text/dd/d-2.svg"
  },
  "/articles/fall-2022/in-text/dd/d-3.svg": {
    "type": "image/svg+xml",
    "etag": "\"8cb-5rNAl08UMy5GNvJ4GFMaji9eoO4\"",
    "mtime": "2023-09-14T16:43:02.117Z",
    "size": 2251,
    "path": "../../.output/public/articles/fall-2022/in-text/dd/d-3.svg"
  },
  "/articles/fall-2022/in-text/dd/d-4.svg": {
    "type": "image/svg+xml",
    "etag": "\"6fc5-BuCk/fvwfWKOI/W+oeSWf2zcwqw\"",
    "mtime": "2023-09-14T16:43:13.992Z",
    "size": 28613,
    "path": "../../.output/public/articles/fall-2022/in-text/dd/d-4.svg"
  },
  "/articles/fall-2022/in-text/dd/d-5.svg": {
    "type": "image/svg+xml",
    "etag": "\"1c024-BtNqHOscWYmlA1mpmDLn1MLwANM\"",
    "mtime": "2023-09-14T16:43:48.791Z",
    "size": 114724,
    "path": "../../.output/public/articles/fall-2022/in-text/dd/d-5.svg"
  },
  "/articles/fall-2022/in-text/dd/d-6.svg": {
    "type": "image/svg+xml",
    "etag": "\"13a7d-NwsJzLvX/dp+k+JZC7fLoTyUkNk\"",
    "mtime": "2023-09-14T16:43:56.870Z",
    "size": 80509,
    "path": "../../.output/public/articles/fall-2022/in-text/dd/d-6.svg"
  },
  "/articles/fall-2022/in-text/dd/d-7.svg": {
    "type": "image/svg+xml",
    "etag": "\"2f6eb-r2M17WKDE9ZBvzBSRpwINwzLwP0\"",
    "mtime": "2023-09-14T16:44:06.061Z",
    "size": 194283,
    "path": "../../.output/public/articles/fall-2022/in-text/dd/d-7.svg"
  },
  "/articles/fall-2022/in-text/dr/dr-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"5a1d-Jk81PmDvBh1LMe0iDb4md3VI/cc\"",
    "mtime": "2023-09-14T16:53:44.429Z",
    "size": 23069,
    "path": "../../.output/public/articles/fall-2022/in-text/dr/dr-1.svg"
  },
  "/articles/fall-2022/in-text/dr/dr-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"4828d-syN8h+qJgvpWvP77JXO/5Zo+ZFE\"",
    "mtime": "2023-09-14T16:53:52.525Z",
    "size": 295565,
    "path": "../../.output/public/articles/fall-2022/in-text/dr/dr-2.svg"
  },
  "/articles/fall-2022/in-text/dr/dr-3.svg": {
    "type": "image/svg+xml",
    "etag": "\"62e4-tcxw5C39OZqJa6GFhgrfFCqM8OE\"",
    "mtime": "2023-09-14T16:53:59.781Z",
    "size": 25316,
    "path": "../../.output/public/articles/fall-2022/in-text/dr/dr-3.svg"
  },
  "/articles/fall-2022/in-text/dr/dr-4.svg": {
    "type": "image/svg+xml",
    "etag": "\"1c351-S0HsL8O+cO3i1AB3AcRI7XBfNb0\"",
    "mtime": "2023-09-14T17:00:06.755Z",
    "size": 115537,
    "path": "../../.output/public/articles/fall-2022/in-text/dr/dr-4.svg"
  },
  "/articles/fall-2022/in-text/dr/dr-5.svg": {
    "type": "image/svg+xml",
    "etag": "\"ffb0-DsJCJyQcvEgYP4UgvRN1FQp2h/w\"",
    "mtime": "2023-09-14T17:01:19.151Z",
    "size": 65456,
    "path": "../../.output/public/articles/fall-2022/in-text/dr/dr-5.svg"
  },
  "/articles/fall-2022/in-text/meta/m-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"3a9fd-IcoZ+kCQkoL5z/+b7MODXmyiYQ0\"",
    "mtime": "2023-09-14T17:04:05.490Z",
    "size": 240125,
    "path": "../../.output/public/articles/fall-2022/in-text/meta/m-1.svg"
  },
  "/articles/fall-2022/in-text/meta/m-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"802e-vx3DiTlQ6/0DhzqYehwVPSjF/sc\"",
    "mtime": "2023-09-14T17:04:18.870Z",
    "size": 32814,
    "path": "../../.output/public/articles/fall-2022/in-text/meta/m-2.svg"
  },
  "/articles/fall-2022/in-text/meta/m-3.svg": {
    "type": "image/svg+xml",
    "etag": "\"1024f-ZpF+0DuGSoGfoUvMIGJpAMFP2hM\"",
    "mtime": "2023-09-14T17:09:49.202Z",
    "size": 66127,
    "path": "../../.output/public/articles/fall-2022/in-text/meta/m-3.svg"
  },
  "/articles/fall-2022/in-text/meta/m-4.svg": {
    "type": "image/svg+xml",
    "etag": "\"213cd-Dy2GL86qFbrwungapPnnrEUM/DQ\"",
    "mtime": "2023-09-14T17:05:01.543Z",
    "size": 136141,
    "path": "../../.output/public/articles/fall-2022/in-text/meta/m-4.svg"
  },
  "/articles/fall-2022/in-text/meta/m-5.svg": {
    "type": "image/svg+xml",
    "etag": "\"1cf15-JR+DyIX63YAxOP9sVENvmkzifts\"",
    "mtime": "2023-09-14T17:05:09.791Z",
    "size": 118549,
    "path": "../../.output/public/articles/fall-2022/in-text/meta/m-5.svg"
  },
  "/articles/fall-2022/in-text/meta/m-6.svg": {
    "type": "image/svg+xml",
    "etag": "\"32770-1EMCIRN5OTM/ApC0Z/g7YmV8hYg\"",
    "mtime": "2023-09-14T17:05:17.926Z",
    "size": 206704,
    "path": "../../.output/public/articles/fall-2022/in-text/meta/m-6.svg"
  },
  "/articles/fall-2022/in-text/meta/m-7.svg": {
    "type": "image/svg+xml",
    "etag": "\"6b5-D089/9rdLaoqLlUDOR3rgX7PRnU\"",
    "mtime": "2023-09-14T17:05:35.622Z",
    "size": 1717,
    "path": "../../.output/public/articles/fall-2022/in-text/meta/m-7.svg"
  },
  "/articles/fall-2022/in-text/tesla/t-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"17caa-ik9WNKgCU1BG2/WE5p1gCWv5uAQ\"",
    "mtime": "2023-09-14T16:52:57.503Z",
    "size": 97450,
    "path": "../../.output/public/articles/fall-2022/in-text/tesla/t-1.svg"
  },
  "/articles/fall-2022/in-text/tesla/t-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"35f49-6Pdfd9abLhizu+dF/Z2SAWY6/BI\"",
    "mtime": "2023-09-14T16:53:07.146Z",
    "size": 221001,
    "path": "../../.output/public/articles/fall-2022/in-text/tesla/t-2.svg"
  },
  "/articles/winter-2021/in-text/african_renaissance/ar-1.png": {
    "type": "image/png",
    "etag": "\"10505-vqdFdvwTztq5KI541+dcfyKUbOM\"",
    "mtime": "2023-09-11T22:04:53.171Z",
    "size": 66821,
    "path": "../../.output/public/articles/winter-2021/in-text/african_renaissance/ar-1.png"
  },
  "/articles/winter-2021/in-text/african_renaissance/ar-2.png": {
    "type": "image/png",
    "etag": "\"18006-v6hxIyPZ/JA0jQT0Pc97R6UoNJQ\"",
    "mtime": "2023-09-11T22:04:53.172Z",
    "size": 98310,
    "path": "../../.output/public/articles/winter-2021/in-text/african_renaissance/ar-2.png"
  },
  "/articles/winter-2021/in-text/african_renaissance/ar-3.png": {
    "type": "image/png",
    "etag": "\"1c71b-4NFv1qIG6LWXFQHqG1n3tUp4PdY\"",
    "mtime": "2023-09-11T22:04:53.175Z",
    "size": 116507,
    "path": "../../.output/public/articles/winter-2021/in-text/african_renaissance/ar-3.png"
  },
  "/articles/winter-2021/in-text/african_renaissance/ar-4.png": {
    "type": "image/png",
    "etag": "\"16dbe-ATgHtWgQ3jD7KcN8ijGceXaxB98\"",
    "mtime": "2023-09-11T22:04:53.190Z",
    "size": 93630,
    "path": "../../.output/public/articles/winter-2021/in-text/african_renaissance/ar-4.png"
  },
  "/articles/winter-2021/in-text/african_renaissance/ar-5.png": {
    "type": "image/png",
    "etag": "\"190ad-UIQPb2A0jvkGAvOW/UM9dK4pMN8\"",
    "mtime": "2023-09-11T22:04:53.191Z",
    "size": 102573,
    "path": "../../.output/public/articles/winter-2021/in-text/african_renaissance/ar-5.png"
  },
  "/articles/winter-2021/in-text/african_renaissance/ar-6.png": {
    "type": "image/png",
    "etag": "\"51f7-PMRadvBzI51I8qMnkh02/WUG8EM\"",
    "mtime": "2023-09-11T22:04:53.268Z",
    "size": 20983,
    "path": "../../.output/public/articles/winter-2021/in-text/african_renaissance/ar-6.png"
  },
  "/articles/winter-2021/in-text/blackberry/bb-1.png": {
    "type": "image/png",
    "etag": "\"7470-WBxpAgCGYtyBcBfJnKzpHjAT7i0\"",
    "mtime": "2023-09-11T22:04:53.320Z",
    "size": 29808,
    "path": "../../.output/public/articles/winter-2021/in-text/blackberry/bb-1.png"
  },
  "/articles/winter-2021/in-text/blackberry/bb-2.png": {
    "type": "image/png",
    "etag": "\"13f5e-ktXUeSp76u0JZzd1l5A5IRvUdFw\"",
    "mtime": "2023-09-11T22:04:53.354Z",
    "size": 81758,
    "path": "../../.output/public/articles/winter-2021/in-text/blackberry/bb-2.png"
  },
  "/articles/winter-2021/in-text/blackberry/bb-3.png": {
    "type": "image/png",
    "etag": "\"230a1-WJudyBbW7rmlHHvbDPlGNwCu6lU\"",
    "mtime": "2023-09-11T22:04:53.413Z",
    "size": 143521,
    "path": "../../.output/public/articles/winter-2021/in-text/blackberry/bb-3.png"
  },
  "/articles/winter-2021/in-text/blackberry/bb-4.png": {
    "type": "image/png",
    "etag": "\"9be2-JX11DmDeAgXmnO/gPbs9ou/EHxI\"",
    "mtime": "2023-09-11T22:04:53.417Z",
    "size": 39906,
    "path": "../../.output/public/articles/winter-2021/in-text/blackberry/bb-4.png"
  },
  "/articles/winter-2021/in-text/business_value/bv-1.png": {
    "type": "image/png",
    "etag": "\"30a23-oEzoUGJBJl0bD2OrEooig5hl/fg\"",
    "mtime": "2023-09-11T22:04:53.422Z",
    "size": 199203,
    "path": "../../.output/public/articles/winter-2021/in-text/business_value/bv-1.png"
  },
  "/articles/winter-2021/in-text/business_value/bv-2.png": {
    "type": "image/png",
    "etag": "\"8e0f-KAmKut0q7EJmeJdxhYHkboTtd1w\"",
    "mtime": "2023-09-11T22:04:53.423Z",
    "size": 36367,
    "path": "../../.output/public/articles/winter-2021/in-text/business_value/bv-2.png"
  },
  "/articles/winter-2021/in-text/business_value/bv-3.png": {
    "type": "image/png",
    "etag": "\"caa1-Ik0a6VYREMxMZN4CzuRvDfTDBek\"",
    "mtime": "2023-09-11T22:04:53.425Z",
    "size": 51873,
    "path": "../../.output/public/articles/winter-2021/in-text/business_value/bv-3.png"
  },
  "/articles/winter-2021/in-text/business_value/bv-4.png": {
    "type": "image/png",
    "etag": "\"7392-OtUcP56AWl1VsrFZBk5uCQ6a7Ew\"",
    "mtime": "2023-09-11T22:04:53.426Z",
    "size": 29586,
    "path": "../../.output/public/articles/winter-2021/in-text/business_value/bv-4.png"
  },
  "/articles/winter-2021/in-text/business_value/bv-5.png": {
    "type": "image/png",
    "etag": "\"dda4-JAU57QjdZsXiNjRpvv+f+c0AjJk\"",
    "mtime": "2023-09-11T22:04:53.428Z",
    "size": 56740,
    "path": "../../.output/public/articles/winter-2021/in-text/business_value/bv-5.png"
  },
  "/articles/winter-2021/in-text/psychedelics/psy-1.png": {
    "type": "image/png",
    "etag": "\"3fbfe-wGriq9Rigc9vw59esTT9fhyYx+w\"",
    "mtime": "2023-09-11T22:04:53.439Z",
    "size": 261118,
    "path": "../../.output/public/articles/winter-2021/in-text/psychedelics/psy-1.png"
  },
  "/articles/winter-2021/in-text/psychedelics/psy-2.png": {
    "type": "image/png",
    "etag": "\"1658f-jCWdZW/KxXMAuCqc+i9Ek0BQ8WU\"",
    "mtime": "2023-09-11T22:04:53.441Z",
    "size": 91535,
    "path": "../../.output/public/articles/winter-2021/in-text/psychedelics/psy-2.png"
  },
  "/articles/winter-2021/in-text/psychedelics/psy-3.png": {
    "type": "image/png",
    "etag": "\"18114-dMHAusIbJqrFvc7AXr+m2pIkfCg\"",
    "mtime": "2023-09-11T22:04:53.444Z",
    "size": 98580,
    "path": "../../.output/public/articles/winter-2021/in-text/psychedelics/psy-3.png"
  },
  "/articles/winter-2021/in-text/psychedelics/psy-4.png": {
    "type": "image/png",
    "etag": "\"eb97-ZlE8h+MDvYmrtHt2Cl7ZKFur+VE\"",
    "mtime": "2023-09-11T22:04:53.445Z",
    "size": 60311,
    "path": "../../.output/public/articles/winter-2021/in-text/psychedelics/psy-4.png"
  },
  "/articles/winter-2021/in-text/psychedelics/psy-5.png": {
    "type": "image/png",
    "etag": "\"ace5-XMXqGrfKofsOjOGoWufd2iaHzNg\"",
    "mtime": "2023-09-11T22:04:53.446Z",
    "size": 44261,
    "path": "../../.output/public/articles/winter-2021/in-text/psychedelics/psy-5.png"
  },
  "/articles/winter-2021/in-text/psychedelics/psy-6.png": {
    "type": "image/png",
    "etag": "\"231b0-493rN7G2EYZ8s7N5fOgULnPhCKs\"",
    "mtime": "2023-09-11T22:04:53.452Z",
    "size": 143792,
    "path": "../../.output/public/articles/winter-2021/in-text/psychedelics/psy-6.png"
  },
  "/articles/winter-2021/in-text/psychedelics/psy-7.png": {
    "type": "image/png",
    "etag": "\"19682-wj6MMdXpyXlk1BPVSLEI7zEzAac\"",
    "mtime": "2023-09-11T22:04:53.454Z",
    "size": 104066,
    "path": "../../.output/public/articles/winter-2021/in-text/psychedelics/psy-7.png"
  },
  "/articles/winter-2021/in-text/psychedelics/psy-8.png": {
    "type": "image/png",
    "etag": "\"c025-xku32zUMjI7vCdhyZfWcuHvcpPA\"",
    "mtime": "2023-09-11T22:04:53.455Z",
    "size": 49189,
    "path": "../../.output/public/articles/winter-2021/in-text/psychedelics/psy-8.png"
  },
  "/articles/winter-2021/in-text/spac/sp-1.png": {
    "type": "image/png",
    "etag": "\"3f627-408V3BE84LYwIn/Td6/gSl1tBUo\"",
    "mtime": "2023-09-11T22:04:53.459Z",
    "size": 259623,
    "path": "../../.output/public/articles/winter-2021/in-text/spac/sp-1.png"
  },
  "/articles/winter-2021/in-text/spac/sp-2.png": {
    "type": "image/png",
    "etag": "\"12aad-dN+4NtWe/xZM66wi7aLPpJBF2Cc\"",
    "mtime": "2023-09-11T22:04:53.460Z",
    "size": 76461,
    "path": "../../.output/public/articles/winter-2021/in-text/spac/sp-2.png"
  },
  "/articles/winter-2021/in-text/spac/sp-3.png": {
    "type": "image/png",
    "etag": "\"f5e7-fgEwvEtaRksdDlMSK6kmqAx7e4A\"",
    "mtime": "2023-09-11T22:04:53.461Z",
    "size": 62951,
    "path": "../../.output/public/articles/winter-2021/in-text/spac/sp-3.png"
  },
  "/articles/winter-2021/in-text/spac/sp-4.png": {
    "type": "image/png",
    "etag": "\"13e12-cKKsunzQ8xLIwA3tRohhuIX9z8M\"",
    "mtime": "2023-09-11T22:04:53.463Z",
    "size": 81426,
    "path": "../../.output/public/articles/winter-2021/in-text/spac/sp-4.png"
  },
  "/articles/winter-2021/in-text/spac/sp-5.png": {
    "type": "image/png",
    "etag": "\"e96f-ZZG7JzBlNRTPtIngsB2Mfu1Qaak\"",
    "mtime": "2023-09-11T22:04:53.465Z",
    "size": 59759,
    "path": "../../.output/public/articles/winter-2021/in-text/spac/sp-5.png"
  },
  "/articles/winter-2021/in-text/starter_hacks/sh-1.png": {
    "type": "image/png",
    "etag": "\"1557c-apZU131GVbESQiKWbmaWfQR80fQ\"",
    "mtime": "2023-09-11T22:04:53.467Z",
    "size": 87420,
    "path": "../../.output/public/articles/winter-2021/in-text/starter_hacks/sh-1.png"
  },
  "/articles/winter-2021/in-text/starter_hacks/sh-2.png": {
    "type": "image/png",
    "etag": "\"1395d-ORiZtcPKIsRGEoeolSYtwHX97i0\"",
    "mtime": "2023-09-11T22:04:53.470Z",
    "size": 80221,
    "path": "../../.output/public/articles/winter-2021/in-text/starter_hacks/sh-2.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/nuxt/builds/meta":{"maxAge":31536000},"/nuxt/builds":{"maxAge":1},"/nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_z88FiX = () => import('../renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_z88FiX, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, useStorage as b, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
