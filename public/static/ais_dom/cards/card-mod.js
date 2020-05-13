!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var i = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            o,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (e) {
    e.exports = JSON.parse(
      '{"name":"card-mod","private":true,"version":"1.1.0","description":"","scripts":{"build":"webpack","watch":"webpack --watch --mode=development","update-card-tools":"npm uninstall card-tools && npm install thomasloven/lovelace-card-tools"},"keywords":[],"author":"Thomas Lovén","license":"MIT","devDependencies":{"webpack":"^4.43.0","webpack-cli":"^3.3.11"},"dependencies":{"card-tools":"github:thomasloven/lovelace-card-tools"}}'
    );
  },
  function (e, t, n) {
    "use strict";
    function o() {
      return document.querySelector("hc-main")
        ? document.querySelector("hc-main").hass
        : document.querySelector("home-assistant")
        ? document.querySelector("home-assistant").hass
        : void 0;
    }
    n.r(t);
    let i = (function () {
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
    class s extends HTMLElement {
      disconnectedCallback() {
        this._disconnect();
      }
      connectedCallback() {
        this._connect();
      }
      _has_template(e) {
        return !!e.template.includes("{%") || !!e.template.includes("{{");
      }
      set template(e) {
        (this._data = JSON.parse(JSON.stringify(e))),
          this._has_template(e) &&
            !this._data.entity_ids &&
            this._data.template.includes("config.entity") &&
            this._data.variables.config &&
            this._data.variables.config.entity &&
            (this._data.entity_ids = [this._data.variables.config.entity]);
      }
      update() {
        this._disconnect().then(() => this._connect());
      }
      async _connect() {
        this._data &&
          (this._has_template(this._data) ||
            (this.innerHTML = `<style>${this._data.template}</style>`),
          this._unsubRenderTemplate ||
            ((this._unsubRenderTemplate = (function (e, t, n) {
              e || (e = o().connection);
              let s = {
                  user: o().user.name,
                  browser: i,
                  hash: location.hash.substr(1) || " ",
                  ...n.variables,
                },
                r = n.template,
                a = n.entity_ids;
              return e.subscribeMessage(
                (e) => {
                  let n = e.result;
                  (n = n.replace(
                    /_\([^)]*\)/g,
                    (e) => o().localize(e.substring(2, e.length - 1)) || e
                  )),
                    t(n);
                },
                {
                  type: "render_template",
                  template: r,
                  variables: s,
                  entity_ids: a,
                }
              );
            })(
              null,
              (e) => (this.innerHTML = `<style>${e}</style>`),
              this._data
            )),
            this._unsubRenderTemplate.catch(() => {
              (this.innerHTML = `<style>${this._data.template}</style>`),
                (this._unsubRenderTemplate = void 0);
            })));
      }
      async _disconnect() {
        if (this._unsubRenderTemplate)
          try {
            const e = await this._unsubRenderTemplate;
            (this._unsubRenderTemplate = void 0), await e();
          } catch (e) {
            if ("not_found" !== e.code) throw e;
          }
      }
    }
    if (!customElements.get("card-mod")) {
      customElements.define("card-mod", s);
      const e = n(0);
      console.info(
        `%cCARD-MOD ${e.version} IS INSTALLED`,
        "color: green; font-weight: bold",
        ""
      );
    }
    function r(e, t, n = null) {
      if (
        (((e = new Event(e, {
          bubbles: !0,
          cancelable: !1,
          composed: !0,
        })).detail = t || {}),
        n)
      )
        n.dispatchEvent(e);
      else {
        var o = (function () {
          var e = document.querySelector("hc-main");
          return (e = e
            ? ((e =
                (e =
                  (e = e && e.shadowRoot) && e.querySelector("hc-lovelace")) &&
                e.shadowRoot) &&
                e.querySelector("hui-view")) ||
              e.querySelector("hui-panel-view")
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
                                  (e = document.querySelector(
                                    "home-assistant"
                                  )) && e.shadowRoot) &&
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
        })();
        o && o.dispatchEvent(e);
      }
    }
    const a = async function (e, t, n, o) {
      const i = function (e) {
        o &&
          ("string" == typeof e
            ? console.log(" ".repeat(2 * (o - 1)) + e)
            : console.log(e));
      };
      if (e && t)
        if (
          (e.updateComplete && (await e.updateComplete), "string" == typeof t)
        ) {
          const o = e.querySelector("card-mod");
          if (o) return void o.update();
          const s = document.createElement("card-mod");
          (s.template = {
            template: t,
            variables: n.variables,
            entity_ids: n.entity_ids,
          }),
            e.appendChild(s),
            i("Applied styles to:"),
            i(e);
        } else
          Object.keys(t).forEach((s) =>
            "." === s
              ? (i("Stepping into root of " + e.tagName),
                a(e, t[s], n, o ? o + 1 : 0))
              : "$" === s
              ? (i("Stepping into ShadowRoot of " + e.tagName),
                a(e.shadowRoot, t[s], n, o ? o + 1 : 0))
              : (i(
                  `Searching for: "${s}". ${
                    e.querySelectorAll(s).length
                  } matches.`
                ),
                void e.querySelectorAll("" + s).forEach((e) => {
                  i("Stepping into " + e.tagName), a(e, t[s], n, o ? o + 1 : 0);
                }))
          );
    };
    customElements.whenDefined("ha-card").then(() => {
      const e = customElements.get("ha-card"),
        t = function (e) {
          return e.config
            ? e.config
            : e._config
            ? e._config
            : e.host
            ? t(e.host)
            : e.parentElement
            ? t(e.parentElement)
            : e.parentNode
            ? t(e.parentNode)
            : null;
        };
      (e.prototype.firstUpdated = function () {
        const e = this.shadowRoot.querySelector(".card-header");
        e && this.insertBefore(e, this.children[0]);
        const n = t(this);
        if (!n || !n.style) return;
        let o = n.entity_ids;
        const i = () => {
          a(
            this,
            n.style,
            { variables: { config: n }, entity_ids: o },
            !!n.debug_cardmod
          );
        };
        i(), window.addEventListener("location-changed", () => i());
      }),
        r("ll-rebuild", {});
    }),
      customElements.whenDefined("hui-entities-card").then(() => {
        const e = customElements.get("hui-entities-card"),
          t = e.prototype.renderEntity;
        (e.prototype.renderEntity = function (e) {
          const n = t.bind(this)(e);
          if (!e || !e.style) return n;
          if (!n || !n.values) return n;
          const o = n.values[0];
          if (!o || !o.updateComplete) return n;
          let i = e.entity_ids;
          const s = () => {
            a(
              o.shadowRoot,
              e.style,
              { variables: { config: e }, entity_ids: i },
              !!e.debug_cardmod
            );
          };
          return (
            o.updateComplete.then(s),
            n.values[0] && n.values[0].addEventListener("ll-rebuild", s),
            window.addEventListener("location-changed", s),
            n
          );
        }),
          r("ll-rebuild", {});
      }),
      customElements.whenDefined("hui-glance-card").then(() => {
        (customElements.get(
          "hui-glance-card"
        ).prototype.firstUpdated = function () {
          this.shadowRoot
            .querySelectorAll("ha-card div.entity")
            .forEach((e) => {
              const t = e.attachShadow({ mode: "open" });
              [...e.children].forEach((e) => t.appendChild(e));
              const n = document.createElement("style");
              t.appendChild(n),
                (n.innerHTML =
                  "\n      :host {\n        box-sizing: border-box;\n        padding: 0 4px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        cursor: pointer;\n        margin-bottom: 12px;\n        width: var(--glance-column-width, 20%);\n      }\n      div {\n        width: 100%;\n        text-align: center;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .name {\n        min-height: var(--paper-font-body1_-_line-height, 20px);\n      }\n      state-badge {\n        margin: 8px 0;\n      }\n      ");
              const o = e.config || e.entityConf;
              if (!o || !o.style) return;
              let i = o.entity_ids;
              const s = () => {
                a(
                  t,
                  o.style,
                  { variables: { config: o }, entity_ids: i },
                  !!o.debug_cardmod
                );
              };
              s(), window.addEventListener("location-changed", s);
            });
        }),
          r("ll-rebuild", {});
      }),
      customElements.whenDefined("hui-state-label-badge").then(() => {
        (customElements.get(
          "hui-state-label-badge"
        ).prototype.firstUpdated = function () {
          const e = this._config;
          if (!e || !e.style) return;
          let t = e.entity_ids;
          const n = () => {
            a(
              this.shadowRoot,
              e.style,
              { variables: { config: e }, entity_ids: t },
              !!e.debug_cardmod
            );
          };
          n(), window.addEventListener("location-changed", () => n());
        }),
          r("ll-rebuild", {});
      });
    const l = customElements.get("home-assistant-main")
        ? Object.getPrototypeOf(customElements.get("home-assistant-main"))
        : Object.getPrototypeOf(customElements.get("hui-view")),
      c = l.prototype.html;
    l.prototype.css;
    let d = window.cardHelpers;
    const u = new Promise(async (e, t) => {
      d && e();
      const n = async () => {
        (d = await window.loadCardHelpers()), (window.cardHelpers = d), e();
      };
      window.loadCardHelpers
        ? n()
        : window.addEventListener("load", async () => {
            !(function () {
              if (customElements.get("hui-view")) return !0;
              const e = document.createElement("partial-panel-resolver");
              if (((e.hass = o()), !e.hass || !e.hass.panels)) return !1;
              (e.route = { path: "/lovelace/" }), e._updateRoutes();
              try {
                document.querySelector("home-assistant").appendChild(e);
              } catch (e) {
              } finally {
                document.querySelector("home-assistant").removeChild(e);
              }
              customElements.get("hui-view");
            })(),
              window.loadCardHelpers && n();
          });
    });
    function h(e, t) {
      const n = document.createElement("hui-error-card");
      return (
        n.setConfig({ type: "error", error: e, origConfig: t }),
        u.then(() => {
          r("ll-rebuild", {}, n);
        }),
        n
      );
    }
    function p(e, t) {
      if (!t || "object" != typeof t || !t.type)
        return h(`No ${e} type configured`, t);
      let n = t.type;
      if (
        ((n = n.startsWith("custom:")
          ? n.substr("custom:".length)
          : `hui-${n}-${e}`),
        customElements.get(n))
      )
        return (function (e, t) {
          let n = document.createElement(e);
          try {
            n.setConfig(JSON.parse(JSON.stringify(t)));
          } catch (e) {
            n = h(e, t);
          }
          return (
            u.then(() => {
              r("ll-rebuild", {}, n);
            }),
            n
          );
        })(n, t);
      const o = h(`Custom element doesn't exist: ${n}.`, t);
      o.style.display = "None";
      const i = setTimeout(() => {
        o.style.display = "";
      }, 2e3);
      return (
        customElements.whenDefined(n).then(() => {
          clearTimeout(i), r("ll-rebuild", {}, o);
        }),
        o
      );
    }
    const m = "\nha-card {\n  background: none;\n  box-shadow: none;\n}";
    customElements.define(
      "mod-card",
      class extends l {
        static get properties() {
          return { hass: {} };
        }
        setConfig(e) {
          (this._config = JSON.parse(JSON.stringify(e))),
            void 0 === e.style
              ? (this._config.style = m)
              : "string" == typeof e.style
              ? (this._config.style = m + e.style)
              : e.style["."]
              ? (this._config.style["."] = m + e.style["."])
              : (this._config.style["."] = m),
            (this.card = (function (e) {
              return d ? d.createCardElement(e) : p("card", e);
            })(this._config.card)),
            (this.card.hass = o());
        }
        render() {
          return c`
          <ha-card modcard>
          ${this.card}
          </ha-card>
        `;
        }
        set hass(e) {
          this.card && (this.card.hass = e);
        }
        getCardSize() {
          if (this._config.report_size) return this._config.report_size;
          let e = this.shadowRoot;
          return (
            e && (e = e.querySelector("ha-card card-maker")),
            e && (e = e.getCardSize),
            e && (e = e()),
            e || 1
          );
        }
      }
    );
  },
]);
