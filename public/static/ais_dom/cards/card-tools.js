!(function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 4));
})([
  function(e, t, r) {
    "use strict";
    function n() {
      return document.querySelector("hc-main")
        ? document.querySelector("hc-main").hass
        : document.querySelector("home-assistant")
        ? document.querySelector("home-assistant").hass
        : void 0;
    }
    function o(e) {
      return document.querySelector("hc-main")
        ? document.querySelector("hc-main").provideHass(e)
        : document.querySelector("home-assistant")
        ? document.querySelector("home-assistant").provideHass(e)
        : void 0;
    }
    function s() {
      var e,
        t = document.querySelector("hc-main");
      return t
        ? (((e = t._lovelaceConfig).current_view = t._lovelacePath), e)
        : (t =
            (t =
              (t =
                (t =
                  ((t =
                    (t =
                      (t =
                        (t =
                          (t = document.querySelector("home-assistant")) &&
                          t.shadowRoot) &&
                        t.querySelector("home-assistant-main")) &&
                      t.shadowRoot) &&
                    t.querySelector(
                      "app-drawer-layout partial-panel-resolver"
                    )) &&
                    t.shadowRoot) ||
                  t) && t.querySelector("ha-panel-lovelace")) &&
              t.shadowRoot) && t.querySelector("hui-root"))
        ? (((e = t.lovelace).current_view = t.___curView), e)
        : null;
    }
    function a() {
      var e = document.querySelector("hc-main");
      return (e = e
        ? (e =
            (e = (e = e && e.shadowRoot) && e.querySelector("hc-lovelace")) &&
            e.shadowRoot) && e.querySelector("hui-view")
        : (e =
            (e =
              (e =
                (e =
                  (e =
                    (e =
                      ((e =
                        (e =
                          (e =
                            (e =
                              (e = document.querySelector("home-assistant")) &&
                              e.shadowRoot) &&
                            e.querySelector("home-assistant-main")) &&
                          e.shadowRoot) &&
                        e.querySelector(
                          "app-drawer-layout partial-panel-resolver"
                        )) &&
                        e.shadowRoot) ||
                      e) && e.querySelector("ha-panel-lovelace")) &&
                  e.shadowRoot) && e.querySelector("hui-root")) &&
              e.shadowRoot) && e.querySelector("ha-app-layout #view")) &&
          e.firstElementChild);
    }
    r.d(t, "a", function() {
      return n;
    }),
      r.d(t, "d", function() {
        return o;
      }),
      r.d(t, "b", function() {
        return s;
      }),
      r.d(t, "c", function() {
        return a;
      });
  },
  function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return n;
    });
    let n = (function() {
      if (window.fully && "function" == typeof fully.getDeviceId)
        return fully.getDeviceId();
      if (!localStorage["lovelace-player-device-id"]) {
        const e = () =>
          Math.floor(1e5 * (1 + Math.random()))
            .toString(16)
            .substring(1);
        localStorage["lovelace-player-device-id"] = `${e()}${e()}-${e()}${e()}`;
      }
      return localStorage["lovelace-player-device-id"];
    })();
  },
  function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return hasOldTemplate;
    }),
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return parseOldTemplate;
      });
    var _hass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
      _deviceID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
    function hasOldTemplate(e) {
      return /\[\[\s+.*\s+\]\]/.test(e);
    }
    function parseTemplateString(str, specialData = {}) {
      if ("string" != typeof str) return text;
      const FUNCTION = /^[a-zA-Z0-9_]+\(.*\)$/,
        EXPR = /([^=<>!]+)\s*(==|!=|<|>|<=|>=)\s*([^=<>!]+)/,
        SPECIAL = /^\{.+\}$/,
        STRING = /^"[^"]*"|'[^']*'$/;
      "string" == typeof specialData && (specialData = {}),
        (specialData = Object.assign(
          {
            user: Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__.a)().user.name,
            browser: _deviceID_js__WEBPACK_IMPORTED_MODULE_1__.a,
            hash: location.hash.substr(1) || " ",
          },
          specialData
        ));
      const _parse_function = (e) => {
          let t = [e.substr(0, e.indexOf("(")).trim()];
          for (e = e.substr(e.indexOf("(") + 1); e; ) {
            let r = 0,
              n = 0,
              o = !1;
            for (; e[r]; ) {
              let t = e[r++];
              if (
                (t === o && r > 1 && "\\" !== e[r - 2]
                  ? (o = !1)
                  : "\"'".includes(t) && (o = t),
                !o)
              ) {
                if ("(" === t) n += 1;
                else if (")" === t) {
                  n -= 1;
                  continue;
                }
                if (!(n > 0) && ",)".includes(t)) break;
              }
            }
            t.push(e.substr(0, r - 1).trim()), (e = e.substr(r));
          }
          return t;
        },
        _parse_special = (e) => (
          (e = e.substr(1, e.length - 2)), specialData[e] || `{${e}}`
        ),
        _parse_entity = (e) => {
          let t;
          if ((e = e.split("."))[0].match(SPECIAL))
            (t = _parse_special(e.shift())),
              (t =
                Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__.a)().states[t] ||
                t);
          else if (
            ((t = Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__.a)().states[
              `${e.shift()}.${e.shift()}`
            ]),
            !e.length)
          )
            return t.state;
          return e.forEach((e) => (t = t[e])), t;
        },
        _eval_expr = (str) => {
          if (((str = EXPR.exec(str)), null === str)) return !1;
          const lhs = parseTemplateString(str[1]),
            rhs = parseTemplateString(str[3]);
          var expr = "";
          return (
            (expr =
              parseFloat(lhs) != lhs
                ? `"${lhs}" ${str[2]} "${rhs}"`
                : `${parseFloat(lhs)} ${str[2]} ${parseFloat(rhs)}`),
            eval(expr)
          );
        },
        _eval_function = (e) => {
          if ("if" === e[0])
            return _eval_expr(e[1])
              ? parseTemplateString(e[2])
              : parseTemplateString(e[3]);
        };
      try {
        return (
          (str = str.trim()),
          str.match(STRING)
            ? str.substr(1, str.length - 2)
            : str.match(SPECIAL)
            ? _parse_special(str)
            : str.match(FUNCTION)
            ? _eval_function(_parse_function(str))
            : str.includes(".")
            ? _parse_entity(str)
            : str
        );
      } catch (e) {
        return `[[ Template matching failed: ${str} ]]`;
      }
    }
    function parseOldTemplate(e, t = {}) {
      if ("string" != typeof e) return e;
      return (e = e.replace(/\[\[\s(.*?)\s\]\]/g, (e, r, n, o) =>
        parseTemplateString(r, t)
      ));
    }
  },
  function(e) {
    e.exports = JSON.parse(
      '{"name":"card-tools","private":true,"version":"2.1.1","description":"Lovelace Card Tools","scripts":{"build":"webpack","watch":"webpack --watch --mode=development"},"repository":{"type":"git","url":"github.com:thomasloven/card-tools"},"author":"Thomas Lovén","license":"MIT","devDependencies":{"webpack":"^4.41.2","webpack-cli":"^3.3.10"}}'
    );
  },
  function(e, t, r) {
    "use strict";
    r.r(t);
    const n = customElements.get("home-assistant-main")
        ? Object.getPrototypeOf(customElements.get("home-assistant-main"))
        : Object.getPrototypeOf(customElements.get("hui-view")),
      o = n.prototype.html,
      s = n.prototype.css;
    var a = r(0);
    function i(e, t, r = null) {
      if (
        (((e = new Event(e, {
          bubbles: !0,
          cancelable: !1,
          composed: !0,
        })).detail = t || {}),
        r)
      )
        r.dispatchEvent(e);
      else {
        var n = Object(a.c)();
        n && n.dispatchEvent(e);
      }
    }
    const c = "custom:";
    let l = window.cardHelpers;
    const u = new Promise(async (e, t) => {
      l && e(),
        window.loadCardHelpers &&
          ((l = await window.loadCardHelpers()), (window.cardHelpers = l), e());
    });
    function d(e, t) {
      const r = document.createElement("hui-error-card");
      return r.setConfig({ type: "error", error: e, origConfig: t }), r;
    }
    function p(e, t) {
      if (!t || "object" != typeof t || !t.type)
        return d(`No ${e} type configured`, t);
      let r = t.type;
      if (
        ((r = r.startsWith(c) ? r.substr(c.length) : `hui-${r}-${e}`),
        customElements.get(r))
      )
        return (function(e, t) {
          let r = document.createElement(e);
          try {
            r.setConfig(JSON.parse(JSON.stringify(t)));
          } catch (e) {
            r = d(e, t);
          }
          return (
            u.then(() => {
              i("ll-rebuild", {}, r);
            }),
            r
          );
        })(r, t);
      const n = d(`Custom element doesn't exist: ${r}.`, t);
      n.style.display = "None";
      const o = setTimeout(() => {
        n.style.display = "";
      }, 2e3);
      return (
        customElements.whenDefined(r).then(() => {
          clearTimeout(o), i("ll-rebuild", {}, n);
        }),
        n
      );
    }
    function m(e) {
      return l ? l.createCardElement(e) : p("card", e);
    }
    function f(e) {
      return l ? l.createHuiElement(e) : p("element", e);
    }
    function h(e) {
      if (l) return l.createRowElement(e);
      const t = new Set([
        "call-service",
        "cast",
        "conditional",
        "divider",
        "section",
        "select",
        "weblink",
      ]);
      if (!e) return d("Invalid configuration given.", e);
      if (
        ("string" == typeof e && (e = { entity: e }),
        "object" != typeof e || (!e.entity && !e.type))
      )
        return d("Invalid configuration given.", e);
      const r = e.type || "default";
      return t.has(r) || r.startsWith(c)
        ? p("row", e)
        : p("entity-row", {
            type:
              {
                alert: "toggle",
                automation: "toggle",
                climate: "climate",
                cover: "cover",
                fan: "toggle",
                group: "group",
                input_boolean: "toggle",
                input_number: "input-number",
                input_select: "input-select",
                input_text: "input-text",
                light: "toggle",
                lock: "lock",
                media_player: "media-player",
                remote: "toggle",
                scene: "scene",
                script: "script",
                sensor: "sensor",
                timer: "timer",
                switch: "toggle",
                vacuum: "toggle",
                water_heater: "climate",
                input_datetime: "input-datetime",
              }[e.entity.split(".", 1)[0]] || "text",
            ...e,
          });
    }
    const _ = 2;
    class g extends n {
      static get version() {
        return _;
      }
      static get properties() {
        return { noHass: { type: Boolean } };
      }
      setConfig(e) {
        (this._config = e),
          this.el
            ? this.el.setConfig(e)
            : ((this.el = this.create(e)),
              this._hass && (this.el.hass = this._hass),
              this.noHass && Object(a.d)(this));
      }
      set config(e) {
        this.setConfig(e);
      }
      set hass(e) {
        (this._hass = e), this.el && (this.el.hass = e);
      }
      createRenderRoot() {
        return this;
      }
      render() {
        return o`${this.el}`;
      }
    }
    const y = function(e, t) {
        const r = Object.getOwnPropertyDescriptors(t.prototype);
        for (const [t, n] of Object.entries(r))
          "constructor" !== t && Object.defineProperty(e.prototype, t, n);
        const n = Object.getOwnPropertyDescriptors(t);
        for (const [t, r] of Object.entries(n))
          "prototype" !== t && Object.defineProperty(e, t, r);
        const o = Object.getPrototypeOf(t),
          s = Object.getOwnPropertyDescriptors(o.prototype);
        for (const [t, r] of Object.entries(s))
          "constructor" !== t &&
            Object.defineProperty(Object.getPrototypeOf(e).prototype, t, r);
        const a = Object.getOwnPropertyDescriptors(o);
        for (const [t, r] of Object.entries(a))
          "prototype" !== t &&
            Object.defineProperty(Object.getPrototypeOf(e), t, r);
      },
      w = customElements.get("card-maker");
    if (!w || !w.version || w.version < _) {
      class e extends g {
        create(e) {
          return m(e);
        }
        getCardSize() {
          return this.firstElementChild && this.firstElementChild.getCardSize
            ? this.firstElementChild.getCardSize()
            : 1;
        }
      }
      w ? y(w, e) : customElements.define("card-maker", e);
    }
    const b = customElements.get("element-maker");
    if (!b || !b.version || b.version < _) {
      class e extends g {
        create(e) {
          return f(e);
        }
      }
      b ? y(b, e) : customElements.define("element-maker", e);
    }
    const v = customElements.get("entity-row-maker");
    if (!v || !v.version || v.version < _) {
      class e extends g {
        create(e) {
          return h(e);
        }
      }
      v ? y(v, e) : customElements.define("entity-row-maker", e);
    }
    var O = r(1);
    function S(e, t = {}) {
      return (
        customElements.whenDefined("long-press").then(() => {
          document.body.querySelector("long-press").bind(e);
        }),
        customElements.whenDefined("action-handler").then(() => {
          document.body.querySelector("action-handler").bind(e, t);
        }),
        e
      );
    }
    function E(e, t = !1) {
      const r =
        document.querySelector("hc-main") ||
        document.querySelector("home-assistant");
      i("hass-more-info", { entityId: e }, r);
      const n = r._moreInfoEl;
      return (n.large = t), n;
    }
    function C() {
      const e =
          document.querySelector("hc-main") ||
          document.querySelector("home-assistant"),
        t = e && e._moreInfoEl;
      t && t.close();
    }
    function j(e, t, r = !1, n = null, o = !1) {
      const s =
        document.querySelector("hc-main") ||
        document.querySelector("home-assistant");
      i("hass-more-info", { entityId: null }, s);
      const a = s._moreInfoEl;
      a.close(), a.open();
      const c = a.shadowRoot.querySelector("more-info-controls");
      c && (c.style.display = "none");
      const l = document.createElement("div");
      l.innerHTML = `\n  <style>\n    app-toolbar {\n      color: var(--more-info-header-color);\n      background-color: var(--more-info-header-background);\n    }\n    .scrollable {\n      overflow: auto;\n      max-width: 100% !important;\n    }\n  </style>\n  ${
        o
          ? ""
          : `\n      <app-toolbar>\n        <paper-icon-button\n          icon="hass:close"\n          dialog-dismiss=""\n        ></paper-icon-button>\n        <div class="main-title" main-title="">\n          ${e}\n        </div>\n      </app-toolbar>\n      `
      }\n    <div class="scrollable">\n      <card-maker nohass>\n      </card-maker>\n    </div>\n  `;
      const u = l.querySelector(".scrollable");
      (u.querySelector("card-maker").config = t),
        (a.sizingTarget = u),
        (a.large = r),
        (a._page = "none"),
        a.shadowRoot.appendChild(l);
      let d = {};
      if (n)
        for (var p in (a.resetFit(), n))
          (d[p] = a.style[p]), a.style.setProperty(p, n[p]);
      return (
        (a._dialogOpenChanged = function(e) {
          if (
            !e &&
            (this.stateObj && this.fire("hass-more-info", { entityId: null }),
            this.shadowRoot == l.parentNode)
          ) {
            (this._page = null), this.shadowRoot.removeChild(l);
            const e = this.shadowRoot.querySelector("more-info-controls");
            if ((e && (e.style.display = "inline"), n))
              for (var t in (a.resetFit(), d))
                d[t] ? a.style.setProperty(t, d[t]) : a.style.removeProperty(t);
          }
        }),
        a
      );
    }
    function D(e, t, r) {
      e || (e = Object(a.a)().connection);
      let n = {
          user: Object(a.a)().user.name,
          browser: O.a,
          hash: location.hash.substr(1) || " ",
          ...r.variables,
        },
        o = r.template,
        s = r.entity_ids;
      return e.subscribeMessage(
        (e) => {
          let r = e.result;
          (r = r.replace(
            /_\([^)]*\)/g,
            (e) => Object(a.a)().localize(e.substring(2, e.length - 1)) || e
          )),
            t(r);
        },
        { type: "render_template", template: o, variables: n, entity_ids: s }
      );
    }
    var T = r(2);
    const P = Object(a.a)().callWS({ type: "config/area_registry/list" }),
      q = Object(a.a)().callWS({ type: "config/device_registry/list" }),
      R = Object(a.a)().callWS({ type: "config/entity_registry/list" });
    async function I() {
      return (
        (window.cardToolsData = window.cardToolsData || {
          areas: await P,
          devices: await q,
          entities: await R,
        }),
        window.cardToolsData
      );
    }
    function k(e) {
      const t = window.cardToolsData;
      for (const r of t.areas)
        if (r.name.toLowerCase() === e.toLowerCase()) return r;
      return null;
    }
    function x(e) {
      const t = window.cardToolsData;
      let r = [];
      if (!e) return r;
      for (const n of t.devices) n.area_id === e.area_id && r.push(n);
      return r;
    }
    function $(e) {
      const t = window.cardToolsData;
      for (const r of t.devices)
        if (r.name.toLowerCase() === e.toLowerCase()) return r;
      return null;
    }
    function L(e) {
      const t = window.cardToolsData;
      let r = [];
      if (!e) return r;
      for (const n of t.entities) n.device_id === e.id && r.push(n.entity_id);
      return r;
    }
    function M(e, t) {
      window._registerCard
        ? window._registerCard(e, t)
        : ((window._customCardButtons = []),
          (window._registerCard = (e, t) => {
            window._customCardButtons.push({ el: e, name: t });
          }),
          customElements.whenDefined("hui-card-picker").then(() => {
            customElements.get(
              "hui-card-picker"
            ).prototype.firstUpdated = function() {
              (this._customCardButtons = document.createElement("div")),
                this._customCardButtons.classList.add("cards-container"),
                (this._customCardButtons.id = "custom"),
                (this._customCardButtons.style.borderTop =
                  "1px solid var(--primary-color)"),
                window._customCardButtons.forEach,
                this.shadowRoot.appendChild(this._customCardButtons),
                window._customCardButtons.forEach((e) => {
                  const t = document.createElement("mwc-button");
                  (t.type = "custom:" + e.el),
                    (t.innerHTML = e.name),
                    t.addEventListener("click", this._cardPicked),
                    this._customCardButtons.appendChild(t);
                });
            };
          }),
          window._registerCard(e, t));
    }
    I();
    const B = new Promise((e) => {
      document.querySelector("home-assistant").addEventListener(
        "show-dialog",
        async (t) => {
          t.detail.dialogImport().then(() => {
            const t = document
              .querySelector("home-assistant")
              .shadowRoot.querySelector("hui-dialog-edit-card");
            t.updateComplete.then(() => {
              t._close(), e();
            });
          });
        },
        { once: !0 }
      ),
        Object(a.c)()._addCard();
    });
    async function N(e) {
      await B;
      const t = document.createElement("hui-card-editor");
      return (t.yaml = e), t.value;
    }
    class A {
      static checkVersion(e) {}
      static args() {}
      static logger() {}
      static get localize() {
        return Object(a.a)().localize;
      }
      static get deviceID() {
        return O.a;
      }
      static get fireEvent() {
        return i;
      }
      static get hass() {
        return Object(a.a)();
      }
      static get lovelace() {
        return Object(a.b)();
      }
      static get lovelace_view() {
        return a.c;
      }
      static get provideHass() {
        return a.d;
      }
      static get LitElement() {
        return n;
      }
      static get LitHtml() {
        return o;
      }
      static get LitCSS() {
        return s;
      }
      static get longpress() {
        return S;
      }
      static get createCard() {
        return m;
      }
      static get createElement() {
        return f;
      }
      static get createEntityRow() {
        return h;
      }
      static get moreInfo() {
        return E;
      }
      static get popUp() {
        return j;
      }
      static get closePopUp() {
        return C;
      }
      static get hasTemplate() {
        return (e) =>
          (function(e) {
            return (
              !!String(e).includes("{%") || !!String(e).includes("{{") || void 0
            );
          })(e) || Object(T.a)(e);
      }
      static parseTemplate(e, t, r = {}) {
        return "string" == typeof e
          ? Object(T.b)(e, t)
          : (async function(e, t, r = {}) {
              for (var n in (e || (e = e()),
              (r = {}),
              (r = Object.assign(
                {
                  user: e.user.name,
                  browser: O.a,
                  hash: location.hash.substr(1) || " ",
                },
                r
              )))) {
                var o = new RegExp(`\\{${n}\\}`, "g");
                t = t.replace(o, r[n]);
              }
              return e.callApi("POST", "template", { template: t });
            })(e, t, r);
      }
      static get subscribeRenderTemplate() {
        return D;
      }
      static get getData() {
        return I;
      }
      static get areaByName() {
        return k;
      }
      static get areaDevices() {
        return x;
      }
      static get deviceByName() {
        return $;
      }
      static get deviceEntities() {
        return L;
      }
      static get registerCard() {
        return M;
      }
      static get yaml2json() {
        return N;
      }
    }
    const H = r(3);
    customElements.get("card-tools") ||
      (customElements.define("card-tools", A),
      (window.cardTools = customElements.get("card-tools")),
      console.info(
        `%cCARD-TOOLS ${H.version} IS INSTALLED\n  %cDeviceID: ${
          customElements.get("card-tools").deviceID
        }`,
        "color: green; font-weight: bold",
        ""
      ));
  },
]);
