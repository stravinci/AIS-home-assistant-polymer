(function() {
  "use strict";
  function a() {
    const b = ma(["<span class=", ">", "</span>"]);
    return (
      (a = function() {
        return b;
      }),
      b
    );
  }
  function b() {
    const a = ma(["<span class=", ">", "</span>"]);
    return (
      (b = function() {
        return a;
      }),
      a
    );
  }
  function c() {
    const a = ma([
      "\n          <div>\n            <div class='marquee'>\n              ",
      "\n            </div>\n          </div>",
    ]);
    return (
      (c = function() {
        return a;
      }),
      a
    );
  }
  function d() {
    const a = ma([
      "\n      <div class='entity__info__media'\n        ?short=",
      "\n        ?short-scroll=",
      "\n        ?scroll=",
      "\n        style='animation-duration: ",
      "s;'>\n        ",
      "\n        ",
      "\n      </div>",
    ]);
    return (
      (d = function() {
        return a;
      }),
      a
    );
  }
  function e() {
    const a = ma([
      "\n      <div class='entity__info__name'>\n        ",
      " ",
      "\n      </div>",
    ]);
    return (
      (e = function() {
        return a;
      }),
      a
    );
  }
  function f() {
    const a = ma([
      "\n      <div class='entity__icon'>\n        <ha-icon .icon=",
      "></ha-icon>\n      </div>",
    ]);
    return (
      (f = function() {
        return a;
      }),
      a
    );
  }
  function g() {
    const a = ma([
      "\n        <div class='entity__artwork'\n          style='background-image: ",
      ";'\n          ?border=",
      "\n          state=",
      ">\n        </div>",
    ]);
    return (
      (g = function() {
        return a;
      }),
      a
    );
  }
  function h() {
    const a = ma(["<div class='cover' style='background-image: ", ";'></div>"]);
    return (
      (h = function() {
        return a;
      }),
      a
    );
  }
  function i() {
    const a = ma([
      "\n              <mmp-tts\n                .config=",
      "\n                .hass=",
      "\n                .entity=",
      ">\n              </mmp-tts>\n            ",
    ]);
    return (
      (i = function() {
        return a;
      }),
      a
    );
  }
  function j() {
    const a = ma([
      "\n              <mmp-media-controls\n                .player=",
      "\n                .config=",
      ">\n              </mmp-media-controls>\n            ",
    ]);
    return (
      (j = function() {
        return a;
      }),
      a
    );
  }
  function k() {
    const a = ma([
      "\n      <ha-card\n        @click=",
      "\n        class=",
      "\n        artwork=",
      "\n        content=",
      ">\n        <div class='mmp__bg'>\n          ",
      "\n        </div>\n        <div class='mmp-player'>\n          <div class='mmp-player__core flex' ?inactive=",
      ">\n            ",
      "\n            <div class='entity__info'>\n              ",
      "\n              ",
      "\n            </div>\n            <mmp-powerstrip\n              @toggleGroupList=",
      "\n              .hass=",
      "\n              .player=",
      "\n              .config=",
      "\n              .groupVisible=",
      "\n              .idle=",
      "\n              ?flow=",
      ">\n            </mmp-powerstrip>\n          </div>\n          <div class='mmp-player__adds'>\n            ",
      "\n            <mmp-shortcuts\n              .player=",
      "\n              .shortcuts=",
      ">\n            </mmp-shortcuts>\n            ",
      "\n            <mmp-group-list\n              .visible=",
      "\n              .entities=",
      "\n              .player=",
      ">\n            </mmp-group-list>\n          </div>\n        </div>\n        <div class='mmp__container'>\n          <mmp-progress\n            .player=",
      "\n            .showTime=",
      ">\n          </mmp-progress>\n        </div>\n      </ha-card>\n    ",
    ]);
    return (
      (k = function() {
        return a;
      }),
      a
    );
  }
  function l() {
    const a = ma([
      "\n        :host {\n          display: flex;\n          line-height: 40px;\n          max-height: 40px;\n        }\n        :host([flow]) mmp-media-controls {\n          max-width: unset;\n        }\n        mmp-media-controls {\n          max-width: 200px;\n        }\n        .group-button {\n          height: 34px;\n          width: 34px;\n          min-width: 34px;\n          margin: 3px;\n        }\n        paper-icon-button {\n          min-width: 40px;\n        }\n      ",
    ]);
    return (
      (l = function() {
        return a;
      }),
      a
    );
  }
  function m() {
    const a = ma([
      "\n        <span class='label ellipsis'>\n          ",
      "\n        </span>\n      ",
    ]);
    return (
      (m = function() {
        return a;
      }),
      a
    );
  }
  function n() {
    const a = ma([
      "\n        <paper-icon-button\n          .icon=",
      "\n          @click=",
      ">\n        </paper-icon-button>",
    ]);
    return (
      (n = function() {
        return a;
      }),
      a
    );
  }
  function o() {
    const a = ma([
      "\n        <paper-icon-button class='power-button'\n          .icon=",
      "\n          @click=",
      "\n          ?color=",
      ">\n        </paper-icon-button>",
    ]);
    return (
      (o = function() {
        return a;
      }),
      a
    );
  }
  function p() {
    const a = ma([
      "\n        <paper-icon-button class='group-button'\n          .icon=",
      "\n          ?inactive=",
      "\n          ?color=",
      "\n          @click=",
      ">\n        </paper-icon-button>",
    ]);
    return (
      (p = function() {
        return a;
      }),
      a
    );
  }
  function q() {
    const a = ma([
      "\n        <mmp-sound-menu\n          .player=",
      "\n          .icon=",
      "\n          ?full=",
      ">\n        </mmp-sound-menu>",
    ]);
    return (
      (q = function() {
        return a;
      }),
      a
    );
  }
  function r() {
    const a = ma([
      "\n        <mmp-source-menu\n          .player=",
      "\n          .icon=",
      "\n          ?full=",
      ">\n        </mmp-source-menu>",
    ]);
    return (
      (r = function() {
        return a;
      }),
      a
    );
  }
  function s() {
    const a = ma([
      "\n        <mmp-media-controls\n          .player=",
      "\n          .config=",
      ">\n        </mmp-media-controls>\n      ",
    ]);
    return (
      (s = function() {
        return a;
      }),
      a
    );
  }
  function t() {
    const a = ma([
      "\n      ",
      "\n      ",
      "\n      ",
      "\n      ",
      "\n      ",
      "\n      ",
      "\n    ",
    ]);
    return (
      (t = function() {
        return a;
      }),
      a
    );
  }
  function u() {
    const a = ma([
      "\n        <span class='label ellipsis'>\n          ",
      "\n        </span>\n      ",
    ]);
    return (
      (u = function() {
        return a;
      }),
      a
    );
  }
  function v() {
    const a = ma([
      "\n        :host {\n          display: flex;\n          width: 100%;\n        }\n        .flex {\n          display: flex;\n          flex: 1;\n          justify-content: space-between;\n        }\n        ha-paper-slider {\n          max-width: none;\n          min-width: 100px;\n          width: 100%;\n        }\n        paper-icon-button {\n          min-width: 40px;\n        }\n        .mmp-media-controls__volume {\n          flex: 100;\n          max-height: 40px;\n        }\n        .mmp-media-controls__volume.--buttons {\n          justify-content: left;\n        }\n        .mmp-media-controls__media {\n          direction: ltr;\n          max-width: calc(40px * 3);\n          margin-right: 0;\n          margin-left: auto;\n        }\n        .mmp-media-controls__media[flow] {\n          max-width: none;\n        }\n        .mmp-media-controls__shuffle {\n          flex: 3;\n          flex-shrink: 200;\n          justify-content: center;\n        }\n        .mmp-media-controls__shuffle paper-icon-button {\n          height: 36px;\n          width: 36px;\n          min-width: 36px;\n          margin: 2px;\n        }\n      ",
    ]);
    return (
      (v = function() {
        return a;
      }),
      a
    );
  }
  function w() {
    const a = ma([
      "\n          <paper-icon-button\n            @click=",
      "\n            .icon=",
      ">\n          </paper-icon-button>\n        ",
    ]);
    return (
      (w = function() {
        return a;
      }),
      a
    );
  }
  function x() {
    const a = ma([
      "\n          <paper-icon-button\n            @click=",
      "\n            .icon=",
      ">\n          </paper-icon-button>\n        ",
    ]);
    return (
      (x = function() {
        return a;
      }),
      a
    );
  }
  function y() {
    const a = ma([
      "\n          <paper-icon-button\n            @click=",
      "\n            .icon=",
      ">\n          </paper-icon-button>\n        ",
    ]);
    return (
      (y = function() {
        return a;
      }),
      a
    );
  }
  function z() {
    const a = ma([
      "\n          <paper-icon-button\n            @click=",
      "\n            .icon=",
      ">\n          </paper-icon-button>\n        ",
    ]);
    return (
      (z = function() {
        return a;
      }),
      a
    );
  }
  function A() {
    const a = ma([
      "\n      <div class='mmp-media-controls__volume --buttons flex'>\n        ",
      "\n        <paper-icon-button\n          @click=",
      "\n          .icon=",
      ">\n        </paper-icon-button>\n        <paper-icon-button\n          @click=",
      "\n          .icon=",
      ">\n        </paper-icon-button>\n      </div>",
    ]);
    return (
      (A = function() {
        return a;
      }),
      a
    );
  }
  function B() {
    const a = ma([
      "\n      <div class='mmp-media-controls__volume --slider flex'>\n        ",
      "\n        <ha-paper-slider\n          @change=",
      "\n          @click=",
      "\n          ?disabled=",
      "\n          min=",
      " max=",
      "\n          value=",
      "\n          dir=",
      "\n          ignore-bar-touch pin>\n        </ha-paper-slider>\n      </div>",
    ]);
    return (
      (B = function() {
        return a;
      }),
      a
    );
  }
  function C() {
    const a = ma([
      "\n        <div class='flex mmp-media-controls__media' ?flow=",
      ">\n          <paper-icon-button\n            @click=",
      "\n            .icon=",
      ">\n          </paper-icon-button>\n          <paper-icon-button\n            @click=",
      "\n            .icon=",
      ">\n          </paper-icon-button>\n          <paper-icon-button\n            @click=",
      "\n            .icon=",
      ">\n          </paper-icon-button>\n        </div>\n      ",
    ]);
    return (
      (C = function() {
        return a;
      }),
      a
    );
  }
  function D() {
    const a = ma([
      "\n        <div class='flex mmp-media-controls__shuffle'>\n          <paper-icon-button\n            class='shuffle-button'\n            @click=",
      "\n            .icon=",
      "\n            ?color=",
      ">\n          </paper-icon-button>\n        </div>\n      ",
    ]);
    return (
      (D = function() {
        return a;
      }),
      a
    );
  }
  function E() {
    const a = ma(["\n      ", "\n      ", "\n      ", "\n    "]);
    return (
      (E = function() {
        return a;
      }),
      a
    );
  }
  function F() {
    const a = ma([
      "\n      :host {\n        max-width: 120px;\n        min-width: 40px;\n      }\n      :host([full]) {\n        max-width: none;\n      }\n    ",
    ]);
    return (
      (F = function() {
        return a;
      }),
      a
    );
  }
  function G() {
    const a = ma([
      "\n      <mmp-dropdown\n        @change=",
      "\n        .items=",
      "\n        .label=",
      "\n        .selected=",
      "\n        .icon=",
      "\n      />\n    ",
    ]);
    return (
      (G = function() {
        return a;
      }),
      a
    );
  }
  function H() {
    const a = ma([
      "\n      :host {\n        max-width: 120px;\n        min-width: 40px;\n      }\n      :host([full]) {\n        max-width: none;\n      }\n    ",
    ]);
    return (
      (H = function() {
        return a;
      }),
      a
    );
  }
  function I() {
    const a = ma([
      "\n      <mmp-dropdown\n        @change=",
      "\n        .items=",
      "\n        .label=",
      "\n        .selected=",
      "\n        .icon=",
      "\n      />\n    ",
    ]);
    return (
      (I = function() {
        return a;
      }),
      a
    );
  }
  function J() {
    const a = ma([
      "\n      .mmp-progress {\n        cursor: pointer;\n        left: 0; right: 0; bottom: 0;\n        position: absolute;\n        pointer-events: auto;\n        min-height: 10px;\n      }\n      .mmp-progress__duration {\n        display: flex;\n        justify-content: space-between;\n        font-size: .8em;\n        margin: 8px calc(var(--ha-card-border-radius, 4) / 2);\n        margin-top: 0;\n        padding: 0 6px;\n      }\n      paper-progress {\n        height: var(--paper-progress-height, 4px);\n        bottom: 0;\n        position: absolute;\n        width: 100%;\n        --paper-progress-active-color: var(--mmp-accent-color);\n        --paper-progress-container-color: rgba(100,100,100,.15);\n        --paper-progress-transition-duration: 1s;\n        --paper-progress-transition-timing-function: linear;\n        --paper-progress-transition-delay: 0s;\n      }\n      .mmp-progress[paused] paper-progress {\n        --paper-progress-active-color: var(--disabled-text-color, rgba(150,150,150,.5));\n      }\n    ",
    ]);
    return (
      (J = function() {
        return a;
      }),
      a
    );
  }
  function K() {
    const a = ma([""]);
    return (
      (K = function() {
        return a;
      }),
      a
    );
  }
  function L() {
    const a = ma([
      "\n            <div class='mmp-progress__duration'>\n              <span>",
      "</span>\n              <span>",
      "</span>\n            </div>\n          ",
    ]);
    return (
      (L = function() {
        return a;
      }),
      a
    );
  }
  function M() {
    const a = ma([
      "\n        <div class='mmp-progress'\n          @click=",
      "\n          ?paused=",
      ">\n          ",
      "\n          <paper-progress class='transiting'\n            value=",
      "\n            max=",
      ">\n          </paper-progress>\n        </div>\n      ",
    ]);
    return (
      (M = function() {
        return a;
      }),
      a
    );
  }
  function N() {
    const a = ma([
      "\n      :host {\n        align-items: center;\n        margin-left: 8px;\n        display: flex;\n      }\n      .mmp-tts__input {\n        cursor: text;\n        flex: 1;\n        margin-right: 8px;\n        --paper-input-container-input: {\n          font-size: 1em;\n        };\n      }\n      ha-card[rtl] .mmp-tts__input {\n        margin-right: auto;\n        margin-left: 8px;\n      }\n      .mmp-tts__button {\n        margin: 0;\n        padding: .4em;\n      }\n      paper-input {\n        opacity: .75;\n        --paper-input-container-color: var(--primary-text-color);\n        --paper-input-container-focus-color: var(--primary-text-color);\n        --paper-input-container: {\n          padding: 0;\n        };\n      }\n      paper-input[focused] {\n        opacity: 1;\n      }\n\n      ha-card[artwork*='cover'][has-artwork] paper-input {\n        --paper-input-container-focus-color: #FFFFFF;\n      }\n      ha-card[artwork*='cover'][has-artwork] paper-input {\n        --paper-input-container-color: #FFFFFF;\n        --paper-input-container-input-color: #FFFFFF;\n      }\n    ",
    ]);
    return (
      (N = function() {
        return a;
      }),
      a
    );
  }
  function O() {
    const a = ma([
      "\n      <paper-input id=\"tts-input\" class='mmp-tts__input'\n        no-label-float\n        placeholder=",
      "...\n        @click=",
      ">\n      </paper-input>\n      <div>\n        <mwc-button class='mmp-tts__button' @click=",
      ">\n          SEND\n        </mwc-button>\n      </div>\n    ",
    ]);
    return (
      (O = function() {
        return a;
      }),
      a
    );
  }
  function P() {
    const a = ma([
      "\n        .mmp-shortcuts__buttons {\n          box-sizing: border-box;\n          display: flex;\n          flex-wrap: wrap;\n          margin-top: 8px;\n        }\n        .mmp-shortcuts__button {\n          --mdc-theme-primary: transparent;\n          box-sizing: border-box;\n          margin: 4px;\n          min-width: 0;\n          min-width: calc(50% - 8px);\n          flex: 1;\n          overflow: hidden;\n          transition: background .5s;\n          background: rgba(255,255,255,0.25);\n          box-shadow:\n            0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n            0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n            0px 1px 5px 0px rgba(0,0,0,.12);\n        }\n        .mmp-shortcuts__button[color] {\n          background: var(--mmp-active-color);\n        }\n        .mmp-shortcuts__button[columns='0'] {\n          min-width: calc(100% - 8px);\n        }\n        .mmp-shortcuts__button[columns='3'] {\n          min-width: calc(33.33% - 8px);\n        }\n        .mmp-shortcuts__button[columns='4'] {\n          min-width: calc(25% - 8px);\n        }\n        .mmp-shortcuts__button > span {\n          line-height: 24px;\n          text-transform: initial;\n        }\n        .mmp-shortcuts__button > *:nth-child(2) {\n          margin-left: 4px;\n        }\n      ",
    ]);
    return (
      (P = function() {
        return a;
      }),
      a
    );
  }
  function Q() {
    const a = ma(["\n      ", "\n      ", "\n    "]);
    return (
      (Q = function() {
        return a;
      }),
      a
    );
  }
  function R() {
    const a = ma(['<span class="ellipsis">', "</span>"]);
    return (
      (R = function() {
        return a;
      }),
      a
    );
  }
  function S() {
    const a = ma(["<iron-icon .icon=", "></iron-icon>"]);
    return (
      (S = function() {
        return a;
      }),
      a
    );
  }
  function T() {
    const a = ma([
      "\n          <mwc-button\n            dense raised\n            columns=",
      "\n            ?color=",
      "\n            class='mmp-shortcuts__button'\n            @click='",
      "'>\n            ",
      "\n            ",
      "\n          </mwc-button>",
    ]);
    return (
      (T = function() {
        return a;
      }),
      a
    );
  }
  function U() {
    const a = ma([
      "\n      <div class='mmp-shortcuts__buttons'>\n        ",
      "\n      </div>\n    ",
    ]);
    return (
      (U = function() {
        return a;
      }),
      a
    );
  }
  function V() {
    const a = ma([
      "\n      <mmp-dropdown class='mmp-shortcuts__dropdown'\n        @change=",
      "\n        .items=",
      "\n        .label=",
      "\n        .selected=",
      ">\n      </mmp-dropdown>\n    ",
    ]);
    return (
      (V = function() {
        return a;
      }),
      a
    );
  }
  function W() {
    const a = ma([
      "\n        :host {\n          display: block;\n        }\n        :host([faded]) mwc-button {\n          opacity: .75;\n        }\n        .mmp-dropdown {\n          padding: 0;\n          display: block;\n        }\n        .mmp-dropdown__button {\n          display: flex;\n          font-size: 1em;\n          justify-content: space-between;\n          align-items: center;\n          height: 36px;\n          margin: 2px 0;\n        }\n        .mmp-dropdown__button.icon {\n          height: 40px;\n          margin: 0;\n        }\n        .mmp-dropdown__button > div {\n          display: flex;\n          flex: 1;\n          justify-content: space-between;\n          align-items: center;\n          height: 36px;\n          max-width: 100%;\n        }\n        .mmp-dropdown__label {\n          text-align: left;\n          text-transform: none;\n        }\n        .mmp-dropdown__icon {\n          height: 24px;\n          width: 24px;\n          min-width: 24px;\n        }\n        paper-item > *:nth-child(2) {\n          margin-left: 4px;\n        }\n\n        paper-menu-button[focused] mwc-button > div > iron-icon,\n        paper-menu-button[focused] paper-icon-button {\n          color: var(--mmp-accent-color);\n          transform: rotate(180deg);\n        }\n        paper-menu-button mwc-button:focus > div > iron-icon,\n        paper-menu-button mwc-button[focused] > div > iron-icon,\n        paper-menu-button[focused] paper-icon-button[focused] {\n          color: var(--mmp-text-color);\n          transform: rotate(0deg);\n        }\n        :host[small] .mmp-dropdown__label {\n          max-width: 60px;\n          display: block;\n          position: relative;\n          width: auto;\n          text-transform: initial;\n        }\n        :host[full] .mmp-dropdown__label {\n          max-width: none;\n        }\n      ",
    ]);
    return (
      (W = function() {
        return a;
      }),
      a
    );
  }
  function X() {
    const a = ma(["<span class='mmp-dropdown__item__label'>", "</span>"]);
    return (
      (X = function() {
        return a;
      }),
      a
    );
  }
  function Y() {
    const a = ma(["<iron-icon .icon=", "></iron-icon>"]);
    return (
      (Y = function() {
        return a;
      }),
      a
    );
  }
  function Z() {
    const a = ma([
      "\n            <paper-item\n              value=",
      "\n              @click=",
      ">\n              ",
      "\n              ",
      "\n            </paper-item>",
    ]);
    return (
      (Z = function() {
        return a;
      }),
      a
    );
  }
  function $() {
    const a = ma([
      "\n          <mwc-button class='mmp-dropdown__button' slot='dropdown-trigger'>\n            <div>\n              <span class='mmp-dropdown__label ellipsis'>\n                ",
      "\n              </span>\n              <iron-icon class='mmp-dropdown__icon' .icon=",
      "></iron-icon>\n            </div>\n          </mwc-button>\n        ",
    ]);
    return (
      ($ = function() {
        return a;
      }),
      a
    );
  }
  function _() {
    const a = ma([
      "\n          <paper-icon-button\n            class='mmp-dropdown__button icon'\n            slot='dropdown-trigger'\n            .icon=",
      ">\n          </paper-icon-button>\n        ",
    ]);
    return (
      (_ = function() {
        return a;
      }),
      a
    );
  }
  function aa() {
    const a = ma([
      "\n      <paper-menu-button\n        class='mmp-dropdown'\n        noink no-animations\n        .horizontalAlign=",
      "\n        .verticalAlign=",
      "\n        .verticalOffset=",
      "\n        @click=",
      ">\n        ",
      '\n        <paper-listbox slot="dropdown-content" selected=',
      ">\n          ",
      "\n        </paper-listbox>\n      </paper-menu-button>\n    ",
    ]);
    return (
      (aa = function() {
        return a;
      }),
      a
    );
  }
  function ba() {
    const a = ma([
      "\n  .ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .label {\n    margin: 0 8px;\n  }\n  paper-icon-button {\n    transition: color .25s;\n  }\n  paper-icon-button[color] {\n    color: var(--mmp-accent-color) !important;\n    opacity: 1 !important;\n  }\n  paper-icon-button[inactive] {\n    opacity: .5;\n  }\n  mwc-button[color] {\n    background: var(--mmp-accent-color) !important;\n    transition: background .25s;\n  }\n",
    ]);
    return (
      (ba = function() {
        return a;
      }),
      a
    );
  }
  function ca() {
    const a = ma([
      "\n      .mmp-group-list {\n        display: flex;\n        flex-direction: column;\n        margin-left: 8px;\n      }\n      .mmp-group-list__title {\n        font-weight: 500;\n        letter-spacing: .1em;\n        margin: 8px 0 4px;\n        text-transform: uppercase;\n      }\n      .mmp-group-list__buttons {\n        display: flex;\n      }\n      .mmp-group-list__button {\n        margin: 8px 8px 0 0;\n        min-width: 0;\n        text-transform: uppercase;\n        text-align: center;\n        width: 50%;\n        --mdc-theme-primary: transparent;\n        background: rgba(255,255,255,0.25);\n      }\n    ",
    ]);
    return (
      (ca = function() {
        return a;
      }),
      a
    );
  }
  function da() {
    const a = ma([""]);
    return (
      (da = function() {
        return a;
      }),
      a
    );
  }
  function ea() {
    const a = ma(["Leave"]);
    return (
      (ea = function() {
        return a;
      }),
      a
    );
  }
  function fa() {
    const a = ma(["Ungroup"]);
    return (
      (fa = function() {
        return a;
      }),
      a
    );
  }
  function ga() {
    const a = ma([
      "\n          <mmp-group-item\n            @change=",
      "\n            .item=",
      "\n            .checked=",
      "\n            .disabled=",
      "\n            .master=",
      "\n          />",
    ]);
    return (
      (ga = function() {
        return a;
      }),
      a
    );
  }
  function ha() {
    const a = ma([
      "\n      <div class='mmp-group-list' ?visible=",
      ">\n        <span class='mmp-group-list__title'>Group speakers</span>\n        ",
      "\n        <div class='mmp-group-list__buttons'>\n          <mwc-button\n            class='mmp-group-list__button'\n            raised\n            ?disabled=",
      "\n            @click='",
      "'>\n            ",
      "\n          </mwc-button>\n          <mwc-button\n            class='mmp-group-list__button'\n            raised\n            ?disabled=",
      "\n            @click='",
      "'>\n            Group all\n          </mwc-button>\n        </div>\n      </div>\n    ",
    ]);
    return (
      (ha = function() {
        return a;
      }),
      a
    );
  }
  function ia() {
    const a = ma([
      "\n      paper-checkbox {\n        padding: 8px 0;\n      }\n      paper-checkbox > span {\n        font-weight: 600;\n      }\n\n      ha-card[artwork*='cover'][has-artwork] paper-checkbox[disabled] {\n        --paper-checkbox-checkmark-color: rgba(0,0,0,.5);\n      }\n      ha-card[artwork*='cover'][has-artwork] paper-checkbox {\n        --paper-checkbox-unchecked-color: #FFFFFF;\n        --paper-checkbox-label-color: #FFFFFF;\n      }\n    ",
    ]);
    return (
      (ia = function() {
        return a;
      }),
      a
    );
  }
  function ja() {
    const a = ma(["<span>(master)</span>"]);
    return (
      (ja = function() {
        return a;
      }),
      a
    );
  }
  function ka() {
    const a = ma([
      "\n      <paper-checkbox\n        ?checked=",
      "\n        ?disabled=",
      "\n        @change='",
      "'\n        @click='",
      "'>\n        ",
      "\n        ",
      "\n      </paper-checkbox>\n    ",
    ]);
    return (
      (ka = function() {
        return a;
      }),
      a
    );
  }
  function la() {
    const a = ma([
      "\n  :host {\n    display: block;\n    --mmp-accent-color: var(--mini-media-player-accent-color, var(--accent-color, #f39c12));\n    --mmp-overlay-color: var(--mini-media-player-overlay-color, rgba(0,0,0,0.5));\n    --mmp-overlay-base-color: var(--mini-media-player-overlay-base-color, #fff);\n    --mmp-media-cover-info-color: var(--mini-media-player-media-cover-info-color, --mmp-text-color);\n    --mmp-text-color: var(--primary-text-color);\n    --mmp-text-color-inverted: var(--disabled-text-color);\n    --mmp-active-color: var(--mmp-accent-color);\n    --mmp-icon-color: var(--paper-item-icon-color, #44739e);\n    --mmp-info-opacity: 1;\n    --mdc-theme-primary: var(--mmp-text-color);\n    --mdc-theme-on-primary: var(--mmp-text-color);\n    --paper-checkbox-unchecked-color: var(--mmp-text-color);\n    --paper-checkbox-label-color: var(--mmp-text-color);\n    color: var(--mmp-text-color);\n  }\n  ha-card.--has-artwork[artwork*='cover'] {\n    --mmp-text-color: var(--mmp-overlay-base-color);\n    --mmp-text-color-inverted: #000;\n    --mmp-active-color: rgba(255,255,255,.5);\n    --mmp-icon-color: var(--mmp-text-color);\n    --mmp-info-opacity: .75;\n    --paper-slider-container-color: var(--mini-media-player-overlay-color, rgba(255,255,255,.75));\n    --mdc-theme-primary: var(--mmp-text-color);\n    --mdc-theme-on-primary: var(--mmp-text-color);\n    --paper-checkbox-unchecked-color: var(--mmp-text-color);\n    --paper-checkbox-label-color: var(--mmp-text-color);\n    color: var(--mmp-text-color);\n  }\n  ha-card {\n    cursor: default;\n    display: flex;\n    background: transparent;\n    overflow: hidden;\n    padding: 0;\n    position: relative;\n  }\n  ha-card.--group {\n    box-shadow: none;\n  }\n  ha-card.--more-info {\n    cursor: pointer;\n  }\n  ha-card.--collapse {\n    overflow: visible;\n  }\n  .mmp__bg, .mmp__player, .mmp__container {\n    border-radius: var(--ha-card-border-radius, 0);\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n  }\n  .mmp__container {\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    pointer-events: none;\n  }\n  ha-card:before {\n    content: '';\n    padding-top: 0px;\n    transition: padding-top .5s cubic-bezier(.21,.61,.35,1);\n    will-change: padding-top;\n  }\n  ha-card.--initial .entity__artwork,\n  ha-card.--initial .entity__icon {\n    animation-duration: .001s;\n  }\n  ha-card.--initial:before,\n  ha-card.--initial .mmp-player {\n    transition: none;\n  }\n  header {\n    display: none;\n  }\n  ha-card[artwork='full-cover'].--has-artwork:before {\n    padding-top: 56%;\n  }\n  ha-card[artwork='full-cover'].--has-artwork[content='music']:before,\n  ha-card[artwork='full-cover-fit'].--has-artwork:before {\n    padding-top: 100%;\n  }\n  .mmp__bg {\n    background: var(--paper-card-background-color, white);\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    overflow: hidden;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n  }\n  ha-card.--group .mmp__bg {\n    background: transparent;\n  }\n  .cover,\n  .cover:before {\n    display: block;\n    opacity: 0;\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    transition: opacity .75s cubic-bezier(.21,.61,.35,1);\n    will-change: opacity;\n  }\n  .cover {\n    animation: fade-in .5s cubic-bezier(.21,.61,.35,1);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n  }\n  .cover:before {\n    background: var(--mmp-overlay-color);\n    content: '';\n  }\n  ha-card[artwork*='full-cover'].--has-artwork .mmp-player {\n    background: linear-gradient(to top, var(--mmp-overlay-color) 25%, transparent 100%);\n    border-bottom-left-radius: var(--ha-card-border-radius, 0);\n    border-bottom-right-radius: var(--ha-card-border-radius, 0);\n  }\n  ha-card.--has-artwork .cover,\n  ha-card.--has-artwork[artwork='cover'] .cover:before,\n  ha-card.--bg .cover {\n    opacity: .999;\n  }\n  ha-card[artwork='default'] .cover {\n    display: none;\n  }\n  ha-card.--bg .cover {\n    display: block;\n  }\n  ha-card[artwork='full-cover-fit'].--has-artwork .cover {\n    background-color: black;\n    background-size: contain;\n  }\n  .mmp-player {\n    align-self: flex-end;\n    box-sizing: border-box;\n    position: relative;\n    padding: 16px;\n    transition: padding .25s ease-out;\n    width: 100%;\n    will-change: padding;\n  }\n  ha-card.--group .mmp-player {\n    padding: 2px 0;\n  }\n  .flex {\n    display: flex;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    flex-direction: row;\n  }\n  .mmp-player__core {\n    position: relative;\n  }\n  .entity__info {\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    margin-left: 8px;\n    position: relative;\n    overflow: hidden;\n    user-select: none;\n  }\n  ha-card.--rtl .entity__info {\n    margin-left: auto;\n    margin-right: 8px;\n  }\n  ha-card[content='movie'] .attr__media_season,\n  ha-card[content='movie'] .attr__media_episode {\n    display: none;\n  }\n  .entity__icon {\n    color: var(--mmp-icon-color);\n  }\n  .entity__artwork, .entity__icon {\n    animation: fade-in .25s ease-out;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 100%;\n    height: 40px;\n    width: 40px;\n    min-width: 40px;\n    line-height: 40px;\n    margin-right: 8px;\n    position: relative;\n    text-align: center;\n    will-change: border-color;\n    transition: border-color .25s ease-out;\n  }\n  ha-card.--rtl .entity__artwork,\n  ha-card.--rtl .entity__icon {\n    margin-right: auto;\n  }\n  .entity__artwork[border] {\n    border: 2px solid var(--primary-text-color);\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n  }\n  .entity__artwork[border][state='playing'] {\n    border-color: var(--mmp-accent-color);\n  }\n  .entity__info__name,\n  .entity__info__media[short] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .entity__info__name {\n    line-height: 20px;\n    color: var(--mmp-text-color);\n  }\n  .entity__info__media {\n    color: var(--secondary-text-color);\n    max-height: 6em;\n    word-break: break-word;\n    opacity: var(--mmp-info-opacity);\n    transition: color .5s;\n  }\n  .entity__info__media[short] {\n    max-height: 20px;\n    overflow: hidden;\n  }\n  .attr__app_name {\n    display: none;\n  }\n  .attr__app_name:first-child,\n  .attr__app_name:first-of-type {\n    display: inline;\n  }\n  .mmp-player__core[inactive] .entity__info__media {\n    color: var(--mmp-text-color);\n    max-width: 200px;\n    opacity: .5;\n  }\n  .mmp-player__core[inactive] .entity__info__media {\n  }\n  .entity__info__media[short-scroll] {\n    max-height: 20px;\n    white-space: nowrap;\n  }\n  .entity__info__media[scroll] > span {\n    visibility: hidden;\n  }\n  .entity__info__media[scroll] > div {\n    animation: move linear infinite;\n  }\n  .entity__info__media[scroll] .marquee {\n    animation: slide linear infinite;\n  }\n  .entity__info__media[scroll] .marquee,\n  .entity__info__media[scroll] > div {\n    animation-duration: inherit;\n    visibility: visible;\n  }\n  .entity__info__media[scroll] {\n    animation-duration: 10s;\n    mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);\n    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);\n  }\n  .marquee {\n    visibility: hidden;\n    position: absolute;\n    white-space: nowrap;\n  }\n  ha-card[artwork*='cover'].--has-artwork .entity__info__media {\n    color: var(--mmp-media-cover-info-color);\n  }\n  .entity__info__media span:before {\n    content: ' - ';\n  }\n  .entity__info__media span:first-of-type:before {\n    content: '';\n  }\n  .entity__info__media span:empty {\n    display: none;\n  }\n  .mmp-player__adds {\n    margin-left: 48px;\n    position: relative;\n  }\n  ha-card.--rtl .mmp-player__adds {\n    margin-left: auto;\n    margin-right: 48px;\n  }\n  .mmp-player__adds > *:nth-child(2) {\n    margin-top: 0px;\n  }\n  mmp-powerstrip {\n    flex: 1;\n    justify-content: flex-end;\n    margin-right: 0;\n    margin-left: auto;\n    width: auto;\n    max-width: 100%;\n  }\n  mmp-media-controls {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  ha-card.--flow mmp-powerstrip {\n    justify-content: space-between;\n    margin-left: auto;\n  }\n  ha-card.--flow.--rtl mmp-powerstrip {\n    margin-right: auto;\n  }\n  ha-card.--flow .entity__info {\n    display: none;\n  }\n  ha-card.--responsive .mmp-player__adds {\n    margin-left: 0;\n  }\n  ha-card.--responsive.--rtl .mmp-player__adds {\n    margin-right: 0;\n  }\n  ha-card.--responsive .mmp-player__adds > mmp-media-controls {\n    padding: 0;\n  }\n  ha-card.--runtime .mmp-player {\n    padding-bottom: calc(16px + 8px);\n  }\n  ha-card.--runtime.--group .mmp-player {\n    padding-bottom: calc(16px + 8px);\n  }\n  .mmp-player div:empty {\n    display: none;\n  }\n  @keyframes slide {\n    100% { transform: translateX(-100%); }\n  }\n  @keyframes move {\n    from { transform: translateX(100%); }\n    to { transform: translateX(0); }\n  }\n  @keyframes fade-in {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n",
    ]);
    return (
      (la = function() {
        return a;
      }),
      a
    );
  }
  function ma(a, b) {
    return (
      b || (b = a.slice(0)),
      Object.freeze(
        Object.defineProperties(a, { raw: { value: Object.freeze(b) } })
      )
    );
  }
  function na(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = null == arguments[b] ? {} : arguments[b],
        d = Object.keys(c);
      "function" == typeof Object.getOwnPropertySymbols &&
        (d = d.concat(
          Object.getOwnPropertySymbols(c).filter(function(a) {
            return Object.getOwnPropertyDescriptor(c, a).enumerable;
          })
        )),
        d.forEach(function(b) {
          oa(a, b, c[b]);
        });
    }
    return a;
  }
  function oa(a, b, c) {
    return (
      b in a
        ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (a[b] = c),
      a
    );
  }
  function pa(a, b, c, d, e, f, g) {
    try {
      var h = a[f](g),
        i = h.value;
    } catch (a) {
      return void c(a);
    }
    h.done ? b(i) : Promise.resolve(i).then(d, e);
  }
  function qa(a) {
    return function() {
      var b = this,
        c = arguments;
      return new Promise(function(d, e) {
        function f(a) {
          pa(h, d, e, f, g, "next", a);
        }
        function g(a) {
          pa(h, d, e, f, g, "throw", a);
        }
        var h = a.apply(b, c);
        f(void 0);
      });
    };
  }
  (function(a, b) {
    "object" == typeof exports && "undefined" != typeof module
      ? b()
      : "function" == typeof define && define.amd
      ? define(b)
      : b();
  })(this, function() {
    function ma(a) {
      let b = bb.get(a.type);
      void 0 === b &&
        ((b = { stringsArray: new WeakMap(), keyString: new Map() }),
        bb.set(a.type, b));
      let c = b.stringsArray.get(a.strings);
      if (void 0 !== c) return c;
      const d = a.strings.join(Ia);
      return (
        (c = b.keyString.get(d)),
        void 0 === c &&
          ((c = new Ma(a, a.getTemplateElement())), b.keyString.set(d, c)),
        b.stringsArray.set(a.strings, c),
        c
      );
    }
    function oa(a, b) {
      const c = a.element.content,
        d = a.parts,
        e = document.createTreeWalker(c, fb, null, !1);
      let f = hb(d),
        g = d[f],
        h = -1,
        i = 0;
      const j = [];
      for (let c = null; e.nextNode(); ) {
        h++;
        const a = e.currentNode;
        for (
          a.previousSibling === c && (c = null),
            b.has(a) && (j.push(a), null === c && (c = a)),
            null !== c && i++;
          g !== void 0 && g.index === h;

        )
          (g.index = null === c ? g.index - i : -1), (f = hb(d, f)), (g = d[f]);
      }
      j.forEach((a) => a.parentNode.removeChild(a));
    }
    function pa(a, b) {
      let c =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      const d = a.element.content,
        e = a.parts;
      if (null === c || void 0 === c) return void d.appendChild(b);
      const f = document.createTreeWalker(d, fb, null, !1);
      let g = hb(e),
        h = 0,
        i = -1;
      for (; f.nextNode(); ) {
        i++;
        const a = f.currentNode;
        for (
          a === c && ((h = gb(b)), c.parentNode.insertBefore(b, c));
          -1 !== g && e[g].index === i;

        ) {
          if (0 < h) {
            for (; -1 !== g; ) (e[g].index += h), (g = hb(e, g));
            return;
          }
          g = hb(e, g);
        }
      }
    }
    function ra(a) {
      let b =
        1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : [];
      for (let c = 0, d = a.length; c < d; c++) {
        const d = a[c];
        Array.isArray(d) ? ra(d, b) : b.push(d);
      }
      return b;
    }
    function sa(a, b) {
      function c() {
        f && ((f = !1), a()), g && e();
      }
      function d() {
        Nb(c);
      }
      function e() {
        var a = Date.now();
        if (f) {
          if (a - h < 2) return;
          g = !0;
        } else (f = !0), (g = !1), setTimeout(d, b);
        h = a;
      }
      var f = !1,
        g = !1,
        h = 0;
      return e;
    }
    function ta(a) {
      return parseFloat(a) || 0;
    }
    function ua(a) {
      for (var b = [], c = 1; c < arguments.length; c++)
        b[c - 1] = arguments[c];
      return b.reduce(function(b, c) {
        var d = a["border-" + c + "-width"];
        return b + ta(d);
      }, 0);
    }
    function va(a) {
      for (
        var b = ["top", "right", "bottom", "left"], c = {}, d = 0, e = b;
        d < e.length;
        d++
      ) {
        var f = e[d],
          g = a["padding-" + f];
        c[f] = ta(g);
      }
      return c;
    }
    function wa(a) {
      var b = a.getBBox();
      return Ba(0, 0, b.width, b.height);
    }
    function xa(a) {
      var b = Math.abs,
        c = Math.round,
        d = a.clientWidth,
        e = a.clientHeight;
      if (!d && !e) return Tb;
      var f = Sb(a).getComputedStyle(a),
        g = va(f),
        h = g.left + g.right,
        i = g.top + g.bottom,
        j = ta(f.width),
        k = ta(f.height);
      if (
        ("border-box" === f.boxSizing &&
          (c(j + h) !== d && (j -= ua(f, "left", "right") + h),
          c(k + i) !== e && (k -= ua(f, "top", "bottom") + i)),
        !ya(a))
      ) {
        var l = c(j + h) - d,
          m = c(k + i) - e;
        1 !== b(l) && (j -= l), 1 !== b(m) && (k -= m);
      }
      return Ba(g.left, g.top, j, k);
    }
    function ya(a) {
      return a === Sb(a).document.documentElement;
    }
    function za(a) {
      return Lb ? (Ub(a) ? wa(a) : xa(a)) : Tb;
    }
    function Aa(a) {
      var b = a.x,
        c = a.y,
        d = a.width,
        e = a.height,
        f = "undefined" == typeof DOMRectReadOnly ? Object : DOMRectReadOnly,
        g = Object.create(f.prototype);
      return (
        Rb(g, {
          x: b,
          y: c,
          width: d,
          height: e,
          top: c,
          right: b + d,
          bottom: e + c,
          left: b,
        }),
        g
      );
    }
    function Ba(a, b, c, d) {
      return { x: a, y: b, width: c, height: d };
    }
    const Ca = new WeakMap(),
      Da = (a) => "function" == typeof a && Ca.has(a),
      Ea =
        window.customElements !== void 0 &&
        window.customElements.polyfillWrapFlushCallback !== void 0,
      Fa = function(a, b) {
        let c =
            2 < arguments.length && arguments[2] !== void 0
              ? arguments[2]
              : null,
          d = b;
        for (; d !== c; ) {
          const b = d.nextSibling;
          a.removeChild(d), (d = b);
        }
      },
      Ga = {},
      Ha = {},
      Ia = "{{lit-".concat((Math.random() + "").slice(2), "}}"),
      Ja = "<!--".concat(Ia, "-->"),
      Ka = new RegExp("".concat(Ia, "|").concat(Ja)),
      La = "$lit$";
    class Ma {
      constructor(a, b) {
        (this.parts = []), (this.element = b);
        let c = -1,
          d = 0;
        const e = [],
          f = (b) => {
            const g = b.content,
              h = document.createTreeWalker(g, 133, null, !1);
            for (let g = 0; h.nextNode(); ) {
              c++;
              const b = h.currentNode;
              if (1 === b.nodeType) {
                if (b.hasAttributes()) {
                  const e = b.attributes;
                  let f = 0;
                  for (let a = 0; a < e.length; a++)
                    0 <= e[a].value.indexOf(Ia) && f++;
                  for (; 0 < f--; ) {
                    const e = a.strings[d],
                      f = Pa.exec(e)[2],
                      g = f.toLowerCase() + La,
                      h = b.getAttribute(g),
                      i = h.split(Ka);
                    this.parts.push({
                      type: "attribute",
                      index: c,
                      name: f,
                      strings: i,
                    }),
                      b.removeAttribute(g),
                      (d += i.length - 1);
                  }
                }
                "TEMPLATE" === b.tagName && f(b);
              } else if (3 === b.nodeType) {
                const a = b.data;
                if (0 <= a.indexOf(Ia)) {
                  const f = b.parentNode,
                    g = a.split(Ka),
                    h = g.length - 1;
                  for (let a = 0; a < h; a++)
                    f.insertBefore(
                      "" === g[a] ? Oa() : document.createTextNode(g[a]),
                      b
                    ),
                      this.parts.push({ type: "node", index: ++c });
                  "" === g[h]
                    ? (f.insertBefore(Oa(), b), e.push(b))
                    : (b.data = g[h]),
                    (d += h);
                }
              } else if (8 === b.nodeType)
                if (b.data === Ia) {
                  const a = b.parentNode;
                  (null === b.previousSibling || c === g) &&
                    (c++, a.insertBefore(Oa(), b)),
                    (g = c),
                    this.parts.push({ type: "node", index: c }),
                    null === b.nextSibling ? (b.data = "") : (e.push(b), c--),
                    d++;
                } else
                  for (let a = -1; -1 !== (a = b.data.indexOf(Ia, a + 1)); )
                    this.parts.push({ type: "node", index: -1 });
            }
          };
        f(b);
        for (const c of e) c.parentNode.removeChild(c);
      }
    }
    const Na = (a) => -1 !== a.index,
      Oa = () => document.createComment(""),
      Pa = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
    class Qa {
      constructor(a, b, c) {
        (this._parts = []),
          (this.template = a),
          (this.processor = b),
          (this.options = c);
      }
      update(a) {
        let b = 0;
        for (const c of this._parts) void 0 !== c && c.setValue(a[b]), b++;
        for (const b of this._parts) void 0 !== b && b.commit();
      }
      _clone() {
        const a = Ea
            ? this.template.element.content.cloneNode(!0)
            : document.importNode(this.template.element.content, !0),
          b = this.template.parts;
        let c = 0,
          d = 0;
        const e = (a) => {
          const f = document.createTreeWalker(a, 133, null, !1);
          for (let g = f.nextNode(); c < b.length && null !== g; ) {
            const a = b[c];
            if (!Na(a)) this._parts.push(void 0), c++;
            else if (d === a.index) {
              if ("node" === a.type) {
                const a = this.processor.handleTextExpression(this.options);
                a.insertAfterNode(g.previousSibling), this._parts.push(a);
              } else
                this._parts.push(
                  ...this.processor.handleAttributeExpressions(
                    g,
                    a.name,
                    a.strings,
                    this.options
                  )
                );
              c++;
            } else
              d++,
                "TEMPLATE" === g.nodeName && e(g.content),
                (g = f.nextNode());
          }
        };
        return (
          e(a), Ea && (document.adoptNode(a), customElements.upgrade(a)), a
        );
      }
    }
    class Ra {
      constructor(a, b, c, d) {
        (this.strings = a),
          (this.values = b),
          (this.type = c),
          (this.processor = d);
      }
      getHTML() {
        const a = this.strings.length - 1;
        let b = "";
        for (let c = 0; c < a; c++) {
          const a = this.strings[c],
            d = Pa.exec(a);
          b += d ? a.substr(0, d.index) + d[1] + d[2] + La + d[3] + Ia : a + Ja;
        }
        return b + this.strings[a];
      }
      getTemplateElement() {
        const a = document.createElement("template");
        return (a.innerHTML = this.getHTML()), a;
      }
    }
    const Sa = (a) =>
      null === a || ("object" != typeof a && "function" != typeof a);
    class Ta {
      constructor(a, b, c) {
        (this.dirty = !0),
          (this.element = a),
          (this.name = b),
          (this.strings = c),
          (this.parts = []);
        for (let d = 0; d < c.length - 1; d++)
          this.parts[d] = this._createPart();
      }
      _createPart() {
        return new Ua(this);
      }
      _getValue() {
        const a = this.strings,
          b = a.length - 1;
        let c = "";
        for (let d = 0; d < b; d++) {
          c += a[d];
          const b = this.parts[d];
          if (void 0 !== b) {
            const a = b.value;
            if (
              null != a &&
              (Array.isArray(a) || ("string" != typeof a && a[Symbol.iterator]))
            )
              for (const b of a) c += "string" == typeof b ? b : b + "";
            else c += "string" == typeof a ? a : a + "";
          }
        }
        return (c += a[b]), c;
      }
      commit() {
        this.dirty &&
          ((this.dirty = !1),
          this.element.setAttribute(this.name, this._getValue()));
      }
    }
    class Ua {
      constructor(a) {
        (this.value = void 0), (this.committer = a);
      }
      setValue(a) {
        a === Ga ||
          (Sa(a) && a === this.value) ||
          ((this.value = a), !Da(a) && (this.committer.dirty = !0));
      }
      commit() {
        for (; Da(this.value); ) {
          const a = this.value;
          (this.value = Ga), a(this);
        }
        this.value === Ga || this.committer.commit();
      }
    }
    class Va {
      constructor(a) {
        (this.value = void 0),
          (this._pendingValue = void 0),
          (this.options = a);
      }
      appendInto(a) {
        (this.startNode = a.appendChild(Oa())),
          (this.endNode = a.appendChild(Oa()));
      }
      insertAfterNode(a) {
        (this.startNode = a), (this.endNode = a.nextSibling);
      }
      appendIntoPart(a) {
        a._insert((this.startNode = Oa())), a._insert((this.endNode = Oa()));
      }
      insertAfterPart(a) {
        a._insert((this.startNode = Oa())),
          (this.endNode = a.endNode),
          (a.endNode = this.startNode);
      }
      setValue(a) {
        this._pendingValue = a;
      }
      commit() {
        for (; Da(this._pendingValue); ) {
          const a = this._pendingValue;
          (this._pendingValue = Ga), a(this);
        }
        const a = this._pendingValue;
        a === Ga ||
          (Sa(a)
            ? a !== this.value && this._commitText(a)
            : a instanceof Ra
            ? this._commitTemplateResult(a)
            : a instanceof Node
            ? this._commitNode(a)
            : Array.isArray(a) || a[Symbol.iterator]
            ? this._commitIterable(a)
            : a === Ha
            ? ((this.value = Ha), this.clear())
            : this._commitText(a));
      }
      _insert(a) {
        this.endNode.parentNode.insertBefore(a, this.endNode);
      }
      _commitNode(a) {
        this.value === a || (this.clear(), this._insert(a), (this.value = a));
      }
      _commitText(a) {
        const b = this.startNode.nextSibling;
        (a = null == a ? "" : a),
          b === this.endNode.previousSibling && 3 === b.nodeType
            ? (b.data = a)
            : this._commitNode(
                document.createTextNode("string" == typeof a ? a : a + "")
              ),
          (this.value = a);
      }
      _commitTemplateResult(a) {
        const b = this.options.templateFactory(a);
        if (this.value instanceof Qa && this.value.template === b)
          this.value.update(a.values);
        else {
          const c = new Qa(b, a.processor, this.options),
            d = c._clone();
          c.update(a.values), this._commitNode(d), (this.value = c);
        }
      }
      _commitIterable(a) {
        Array.isArray(this.value) || ((this.value = []), this.clear());
        const b = this.value;
        let c,
          d = 0;
        for (const e of a)
          (c = b[d]),
            void 0 === c &&
              ((c = new Va(this.options)),
              b.push(c),
              0 == d ? c.appendIntoPart(this) : c.insertAfterPart(b[d - 1])),
            c.setValue(e),
            c.commit(),
            d++;
        d < b.length && ((b.length = d), this.clear(c && c.endNode));
      }
      clear() {
        let a =
          0 < arguments.length && arguments[0] !== void 0
            ? arguments[0]
            : this.startNode;
        Fa(this.startNode.parentNode, a.nextSibling, this.endNode);
      }
    }
    class Wa {
      constructor(a, b, c) {
        if (
          ((this.value = void 0),
          (this._pendingValue = void 0),
          2 !== c.length || "" !== c[0] || "" !== c[1])
        )
          throw new Error(
            "Boolean attributes can only contain a single expression"
          );
        (this.element = a), (this.name = b), (this.strings = c);
      }
      setValue(a) {
        this._pendingValue = a;
      }
      commit() {
        for (; Da(this._pendingValue); ) {
          const a = this._pendingValue;
          (this._pendingValue = Ga), a(this);
        }
        if (this._pendingValue !== Ga) {
          const a = !!this._pendingValue;
          this.value !== a &&
            (a
              ? this.element.setAttribute(this.name, "")
              : this.element.removeAttribute(this.name)),
            (this.value = a),
            (this._pendingValue = Ga);
        }
      }
    }
    class Xa extends Ta {
      constructor(a, b, c) {
        super(a, b, c),
          (this.single = 2 === c.length && "" === c[0] && "" === c[1]);
      }
      _createPart() {
        return new Ya(this);
      }
      _getValue() {
        return this.single ? this.parts[0].value : super._getValue();
      }
      commit() {
        this.dirty &&
          ((this.dirty = !1), (this.element[this.name] = this._getValue()));
      }
    }
    class Ya extends Ua {}
    let Za = !1;
    try {
      const a = {
        get capture() {
          return (Za = !0), !1;
        },
      };
      window.addEventListener("test", a, a),
        window.removeEventListener("test", a, a);
    } catch (a) {}
    class $a {
      constructor(a, b, c) {
        (this.value = void 0),
          (this._pendingValue = void 0),
          (this.element = a),
          (this.eventName = b),
          (this.eventContext = c),
          (this._boundHandleEvent = (a) => this.handleEvent(a));
      }
      setValue(a) {
        this._pendingValue = a;
      }
      commit() {
        for (; Da(this._pendingValue); ) {
          const a = this._pendingValue;
          (this._pendingValue = Ga), a(this);
        }
        if (this._pendingValue === Ga) return;
        const a = this._pendingValue,
          b = this.value,
          c =
            null == a ||
            (null != b &&
              (a.capture !== b.capture ||
                a.once !== b.once ||
                a.passive !== b.passive));
        c &&
          this.element.removeEventListener(
            this.eventName,
            this._boundHandleEvent,
            this._options
          ),
          null != a &&
            (null == b || c) &&
            ((this._options = _a(a)),
            this.element.addEventListener(
              this.eventName,
              this._boundHandleEvent,
              this._options
            )),
          (this.value = a),
          (this._pendingValue = Ga);
      }
      handleEvent(a) {
        "function" == typeof this.value
          ? this.value.call(this.eventContext || this.element, a)
          : this.value.handleEvent(a);
      }
    }
    const _a = (a) =>
      a &&
      (Za
        ? { capture: a.capture, passive: a.passive, once: a.once }
        : a.capture);
    const ab = new class {
        handleAttributeExpressions(a, b, c, d) {
          const e = b[0];
          if ("." === e) {
            const d = new Xa(a, b.slice(1), c);
            return d.parts;
          }
          if ("@" === e) return [new $a(a, b.slice(1), d.eventContext)];
          if ("?" === e) return [new Wa(a, b.slice(1), c)];
          const f = new Ta(a, b, c);
          return f.parts;
        }
        handleTextExpression(a) {
          return new Va(a);
        }
      }(),
      bb = new Map(),
      cb = new WeakMap(),
      db = (a, b, c) => {
        let d = cb.get(b);
        d === void 0 &&
          (Fa(b, b.firstChild),
          cb.set(b, (d = new Va(Object.assign({ templateFactory: ma }, c)))),
          d.appendInto(b)),
          d.setValue(a),
          d.commit();
      };
    (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.0.0");
    const eb = function(a) {
        for (
          var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        return new Ra(a, c, "html", ab);
      },
      fb = 133,
      gb = (a) => {
        let b = 11 === a.nodeType ? 0 : 1;
        for (
          const c = document.createTreeWalker(a, fb, null, !1);
          c.nextNode();

        )
          b++;
        return b;
      },
      hb = function(a) {
        let b =
          1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : -1;
        for (let c = b + 1; c < a.length; c++) {
          const b = a[c];
          if (Na(b)) return c;
        }
        return -1;
      },
      ib = (a, b) => "".concat(a, "--").concat(b);
    let jb = !0;
    "undefined" == typeof window.ShadyCSS
      ? (jb = !1)
      : "undefined" == typeof window.ShadyCSS.prepareTemplateDom &&
        (console.warn(
          "Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."
        ),
        (jb = !1));
    const kb = (a) => (b) => {
        const c = ib(b.type, a);
        let d = bb.get(c);
        void 0 === d &&
          ((d = { stringsArray: new WeakMap(), keyString: new Map() }),
          bb.set(c, d));
        let e = d.stringsArray.get(b.strings);
        if (void 0 !== e) return e;
        const f = b.strings.join(Ia);
        if (((e = d.keyString.get(f)), void 0 === e)) {
          const c = b.getTemplateElement();
          jb && window.ShadyCSS.prepareTemplateDom(c, a),
            (e = new Ma(b, c)),
            d.keyString.set(f, e);
        }
        return d.stringsArray.set(b.strings, e), e;
      },
      lb = ["html", "svg"],
      mb = (a) => {
        lb.forEach((b) => {
          const c = bb.get(ib(b, a));
          c !== void 0 &&
            c.keyString.forEach((a) => {
              const b = a.element.content,
                c = new Set();
              Array.from(b.querySelectorAll("style")).forEach((a) => {
                c.add(a);
              }),
                oa(a, c);
            });
        });
      },
      nb = new Set(),
      ob = (a, b, c) => {
        nb.add(c);
        const d = a.querySelectorAll("style");
        if (0 === d.length)
          return void window.ShadyCSS.prepareTemplateStyles(b.element, c);
        const e = document.createElement("style");
        for (let f = 0; f < d.length; f++) {
          const a = d[f];
          a.parentNode.removeChild(a), (e.textContent += a.textContent);
        }
        if (
          (mb(c),
          pa(b, e, b.element.content.firstChild),
          window.ShadyCSS.prepareTemplateStyles(b.element, c),
          window.ShadyCSS.nativeShadow)
        ) {
          const c = b.element.content.querySelector("style");
          a.insertBefore(c.cloneNode(!0), a.firstChild);
        } else {
          b.element.content.insertBefore(e, b.element.content.firstChild);
          const a = new Set();
          a.add(e), oa(b, a);
        }
      },
      pb = (a, b, c) => {
        const d = c.scopeName,
          e = cb.has(b),
          f = b instanceof ShadowRoot && jb && a instanceof Ra,
          g = f && !nb.has(d),
          h = g ? document.createDocumentFragment() : b;
        if ((db(a, h, Object.assign({ templateFactory: kb(d) }, c)), g)) {
          const a = cb.get(h);
          cb.delete(h),
            a.value instanceof Qa && ob(h, a.value.template, d),
            Fa(b, b.firstChild),
            b.appendChild(h),
            cb.set(b, a);
        }
        !e && f && window.ShadyCSS.styleElement(b.host);
      };
    window.JSCompiler_renameProperty = (a) => a;
    const qb = {
        toAttribute(a, b) {
          return b === Boolean
            ? a
              ? ""
              : null
            : b === Object || b === Array
            ? null == a
              ? a
              : JSON.stringify(a)
            : a;
        },
        fromAttribute(a, b) {
          return b === Boolean
            ? null !== a
            : b === Number
            ? null === a
              ? null
              : +a
            : b === Object || b === Array
            ? JSON.parse(a)
            : a;
        },
      },
      rb = (a, b) => b !== a && (b === b || a === a),
      sb = {
        attribute: !0,
        type: String,
        converter: qb,
        reflect: !1,
        hasChanged: rb,
      },
      tb = Promise.resolve(!0),
      ub = 1,
      vb = 4,
      wb = 8,
      xb = 16,
      yb = 32;
    class zb extends HTMLElement {
      constructor() {
        super(),
          (this._updateState = 0),
          (this._instanceProperties = void 0),
          (this._updatePromise = tb),
          (this._hasConnectedResolver = void 0),
          (this._changedProperties = new Map()),
          (this._reflectingProperties = void 0),
          this.initialize();
      }
      static get observedAttributes() {
        this.finalize();
        const a = [];
        return (
          this._classProperties.forEach((b, c) => {
            const d = this._attributeNameForProperty(c, b);
            void 0 !== d && (this._attributeToPropertyMap.set(d, c), a.push(d));
          }),
          a
        );
      }
      static _ensureClassProperties() {
        if (
          !this.hasOwnProperty(
            JSCompiler_renameProperty("_classProperties", this)
          )
        ) {
          this._classProperties = new Map();
          const a = Object.getPrototypeOf(this)._classProperties;
          a !== void 0 && a.forEach((a, b) => this._classProperties.set(b, a));
        }
      }
      static createProperty(a) {
        let b =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : sb;
        if (
          (this._ensureClassProperties(),
          this._classProperties.set(a, b),
          b.noAccessor || this.prototype.hasOwnProperty(a))
        )
          return;
        const c = "symbol" == typeof a ? Symbol() : "__".concat(a);
        Object.defineProperty(this.prototype, a, {
          get() {
            return this[c];
          },
          set(b) {
            const d = this[a];
            (this[c] = b), this._requestUpdate(a, d);
          },
          configurable: !0,
          enumerable: !0,
        });
      }
      static finalize() {
        if (
          !(
            this.hasOwnProperty(JSCompiler_renameProperty("finalized", this)) &&
            this.finalized
          )
        ) {
          const a = Object.getPrototypeOf(this);
          if (
            ("function" == typeof a.finalize && a.finalize(),
            (this.finalized = !0),
            this._ensureClassProperties(),
            (this._attributeToPropertyMap = new Map()),
            this.hasOwnProperty(JSCompiler_renameProperty("properties", this)))
          ) {
            const a = this.properties,
              b = [
                ...Object.getOwnPropertyNames(a),
                ...("function" == typeof Object.getOwnPropertySymbols
                  ? Object.getOwnPropertySymbols(a)
                  : []),
              ];
            for (const c of b) this.createProperty(c, a[c]);
          }
        }
      }
      static _attributeNameForProperty(a, b) {
        const c = b.attribute;
        return !1 === c
          ? void 0
          : "string" == typeof c
          ? c
          : "string" == typeof a
          ? a.toLowerCase()
          : void 0;
      }
      static _valueHasChanged(a, b) {
        let c =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : rb;
        return c(a, b);
      }
      static _propertyValueFromAttribute(a, b) {
        const c = b.type,
          d = b.converter || qb,
          e = "function" == typeof d ? d : d.fromAttribute;
        return e ? e(a, c) : a;
      }
      static _propertyValueToAttribute(a, b) {
        if (void 0 === b.reflect) return;
        const c = b.type,
          d = b.converter,
          e = (d && d.toAttribute) || qb.toAttribute;
        return e(a, c);
      }
      initialize() {
        this._saveInstanceProperties(), this._requestUpdate();
      }
      _saveInstanceProperties() {
        this.constructor._classProperties.forEach((a, b) => {
          if (this.hasOwnProperty(b)) {
            const a = this[b];
            delete this[b],
              this._instanceProperties ||
                (this._instanceProperties = new Map()),
              this._instanceProperties.set(b, a);
          }
        });
      }
      _applyInstanceProperties() {
        this._instanceProperties.forEach((a, b) => (this[b] = a)),
          (this._instanceProperties = void 0);
      }
      connectedCallback() {
        (this._updateState |= yb),
          this._hasConnectedResolver &&
            (this._hasConnectedResolver(),
            (this._hasConnectedResolver = void 0));
      }
      disconnectedCallback() {}
      attributeChangedCallback(a, b, c) {
        b !== c && this._attributeToProperty(a, c);
      }
      _propertyToAttribute(a, b) {
        let c =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : sb;
        const d = this.constructor,
          e = d._attributeNameForProperty(a, c);
        if (e !== void 0) {
          const a = d._propertyValueToAttribute(b, c);
          if (a === void 0) return;
          (this._updateState |= wb),
            null == a ? this.removeAttribute(e) : this.setAttribute(e, a),
            (this._updateState &= ~wb);
        }
      }
      _attributeToProperty(a, b) {
        if (this._updateState & wb) return;
        const c = this.constructor,
          d = c._attributeToPropertyMap.get(a);
        if (d !== void 0) {
          const a = c._classProperties.get(d) || sb;
          (this._updateState |= xb),
            (this[d] = c._propertyValueFromAttribute(b, a)),
            (this._updateState &= ~xb);
        }
      }
      _requestUpdate(a, b) {
        let c = !0;
        if (a !== void 0) {
          const d = this.constructor,
            e = d._classProperties.get(a) || sb;
          d._valueHasChanged(this[a], b, e.hasChanged)
            ? (!this._changedProperties.has(a) &&
                this._changedProperties.set(a, b),
              !0 === e.reflect &&
                !(this._updateState & xb) &&
                (this._reflectingProperties === void 0 &&
                  (this._reflectingProperties = new Map()),
                this._reflectingProperties.set(a, e)))
            : (c = !1);
        }
        !this._hasRequestedUpdate && c && this._enqueueUpdate();
      }
      requestUpdate(a, b) {
        return this._requestUpdate(a, b), this.updateComplete;
      }
      _enqueueUpdate() {
        var a = this;
        return qa(function*() {
          a._updateState |= vb;
          let b, c;
          const d = a._updatePromise;
          a._updatePromise = new Promise((a, d) => {
            (b = a), (c = d);
          });
          try {
            yield d;
          } catch (a) {}
          a._hasConnected ||
            (yield new Promise((b) => (a._hasConnectedResolver = b)));
          try {
            const b = a.performUpdate();
            null != b && (yield b);
          } catch (a) {
            c(a);
          }
          b(!a._hasRequestedUpdate);
        })();
      }
      get _hasConnected() {
        return this._updateState & yb;
      }
      get _hasRequestedUpdate() {
        return this._updateState & vb;
      }
      get hasUpdated() {
        return this._updateState & ub;
      }
      performUpdate() {
        this._instanceProperties && this._applyInstanceProperties();
        let a = !1;
        const b = this._changedProperties;
        try {
          (a = this.shouldUpdate(b)), a && this.update(b);
        } catch (b) {
          throw ((a = !1), b);
        } finally {
          this._markUpdated();
        }
        a &&
          (!(this._updateState & ub) &&
            ((this._updateState |= ub), this.firstUpdated(b)),
          this.updated(b));
      }
      _markUpdated() {
        (this._changedProperties = new Map()), (this._updateState &= ~vb);
      }
      get updateComplete() {
        return this._updatePromise;
      }
      shouldUpdate(a) {
        return !0;
      }
      update(a) {
        this._reflectingProperties !== void 0 &&
          0 < this._reflectingProperties.size &&
          (this._reflectingProperties.forEach((a, b) =>
            this._propertyToAttribute(b, this[b], a)
          ),
          (this._reflectingProperties = void 0));
      }
      updated(a) {}
      firstUpdated(a) {}
    }
    zb.finalized = !0;
    const Ab =
        "adoptedStyleSheets" in Document.prototype &&
        "replace" in CSSStyleSheet.prototype,
      Bb = Symbol();
    class Cb {
      constructor(a, b) {
        if (b !== Bb)
          throw new Error(
            "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
          );
        this.cssText = a;
      }
      get styleSheet() {
        return (
          void 0 === this._styleSheet &&
            (Ab
              ? ((this._styleSheet = new CSSStyleSheet()),
                this._styleSheet.replaceSync(this.cssText))
              : (this._styleSheet = null)),
          this._styleSheet
        );
      }
      toString() {
        return this.cssText;
      }
    }
    const Db = (a) => {
        if (a instanceof Cb) return a.cssText;
        throw new Error(
          "Value passed to 'css' function must be a 'css' function result: ".concat(
            a,
            ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."
          )
        );
      },
      Eb = function(a) {
        for (
          var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        const e = c.reduce((b, c, d) => b + Db(c) + a[d + 1], a[0]);
        return new Cb(e, Bb);
      };
    (window.litElementVersions || (window.litElementVersions = [])).push(
      "2.0.1"
    );
    const Fb = (a) => (a.flat ? a.flat(1 / 0) : ra(a));
    class Gb extends zb {
      static finalize() {
        super.finalize(),
          (this._styles = this.hasOwnProperty(
            JSCompiler_renameProperty("styles", this)
          )
            ? this._getUniqueStyles()
            : this._styles || []);
      }
      static _getUniqueStyles() {
        const a = this.styles,
          b = [];
        if (Array.isArray(a)) {
          const c = Fb(a),
            d = c.reduceRight((a, b) => (a.add(b), a), new Set());
          d.forEach((a) => b.unshift(a));
        } else a && b.push(a);
        return b;
      }
      initialize() {
        super.initialize(),
          (this.renderRoot = this.createRenderRoot()),
          window.ShadowRoot &&
            this.renderRoot instanceof window.ShadowRoot &&
            this.adoptStyles();
      }
      createRenderRoot() {
        return this.attachShadow({ mode: "open" });
      }
      adoptStyles() {
        const a = this.constructor._styles;
        0 === a.length ||
          (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow
            ? Ab
              ? (this.renderRoot.adoptedStyleSheets = a.map(
                  (a) => a.styleSheet
                ))
              : (this._needsShimAdoptedStyleSheets = !0)
            : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
                a.map((a) => a.cssText),
                this.localName
              ));
      }
      connectedCallback() {
        super.connectedCallback(),
          this.hasUpdated &&
            window.ShadyCSS !== void 0 &&
            window.ShadyCSS.styleElement(this);
      }
      update(a) {
        super.update(a);
        const b = this.render();
        b instanceof Ra &&
          this.constructor.render(b, this.renderRoot, {
            scopeName: this.localName,
            eventContext: this,
          }),
          this._needsShimAdoptedStyleSheets &&
            ((this._needsShimAdoptedStyleSheets = !1),
            this.constructor._styles.forEach((a) => {
              const b = document.createElement("style");
              (b.textContent = a.cssText), this.renderRoot.appendChild(b);
            }));
      }
      render() {}
    }
    (Gb.finalized = !0),
      (Gb.render = pb),
      window.navigator.userAgent.match("Trident") &&
        (DOMTokenList.prototype.toggle = function(a, b) {
          return (
            void 0 === b || b ? this.add(a) : this.remove(a), void 0 === b || b
          );
        });
    const Hb = new WeakMap(),
      Ib = new WeakMap(),
      Jb = ((a) =>
        function() {
          const b = a(...arguments);
          return Ca.set(b, !0), b;
        })((a) => (b) => {
        if (
          !(b instanceof Ua) ||
          b instanceof Ya ||
          "class" !== b.committer.name ||
          1 < b.committer.parts.length
        )
          throw new Error(
            "The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute."
          );
        Ib.has(b) ||
          ((b.committer.element.className = b.committer.strings.join(" ")),
          Ib.set(b, !0));
        const c = Hb.get(b);
        for (const d in c) d in a || b.committer.element.classList.remove(d);
        for (const d in a)
          (c && c[d] === a[d]) ||
            b.committer.element.classList.toggle(d, !!a[d]);
        Hb.set(b, a);
      });
    var Kb = (function() {
        function a(a, b) {
          var c = -1;
          return (
            a.some(function(a, d) {
              return a[0] === b && ((c = d), !0);
            }),
            c
          );
        }
        return "undefined" == typeof Map
          ? (function() {
              function b() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(b.prototype, "size", {
                  get: function() {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (b.prototype.get = function(b) {
                  var c = a(this.__entries__, b),
                    d = this.__entries__[c];
                  return d && d[1];
                }),
                (b.prototype.set = function(b, c) {
                  var d = a(this.__entries__, b);
                  ~d
                    ? (this.__entries__[d][1] = c)
                    : this.__entries__.push([b, c]);
                }),
                (b.prototype.delete = function(b) {
                  var c = this.__entries__,
                    d = a(c, b);
                  ~d && c.splice(d, 1);
                }),
                (b.prototype.has = function(b) {
                  return !!~a(this.__entries__, b);
                }),
                (b.prototype.clear = function() {
                  this.__entries__.splice(0);
                }),
                (b.prototype.forEach = function(a, b) {
                  void 0 === b && (b = null);
                  for (var c, d = 0, e = this.__entries__; d < e.length; d++)
                    (c = e[d]), a.call(b, c[1], c[0]);
                }),
                b
              );
            })()
          : Map;
      })(),
      Lb =
        "undefined" != typeof window &&
        "undefined" != typeof document &&
        window.document === document,
      Mb = (function() {
        return "undefined" != typeof global && global.Math === Math
          ? global
          : "undefined" != typeof self && self.Math === Math
          ? self
          : "undefined" != typeof window && window.Math === Math
          ? window
          : Function("return this")();
      })(),
      Nb = (function() {
        return "function" == typeof requestAnimationFrame
          ? requestAnimationFrame.bind(Mb)
          : function(a) {
              return setTimeout(function() {
                return a(Date.now());
              }, 1e3 / 60);
            };
      })(),
      Ob = [
        "top",
        "right",
        "bottom",
        "left",
        "width",
        "height",
        "size",
        "weight",
      ],
      Pb = "undefined" != typeof MutationObserver,
      Qb = (function() {
        function a() {
          (this.connected_ = !1),
            (this.mutationEventsAdded_ = !1),
            (this.mutationsObserver_ = null),
            (this.observers_ = []),
            (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
            (this.refresh = sa(this.refresh.bind(this), 20));
        }
        return (
          (a.prototype.addObserver = function(a) {
            ~this.observers_.indexOf(a) || this.observers_.push(a),
              this.connected_ || this.connect_();
          }),
          (a.prototype.removeObserver = function(a) {
            var b = this.observers_,
              c = b.indexOf(a);
            ~c && b.splice(c, 1),
              !b.length && this.connected_ && this.disconnect_();
          }),
          (a.prototype.refresh = function() {
            var a = this.updateObservers_();
            a && this.refresh();
          }),
          (a.prototype.updateObservers_ = function() {
            var a = this.observers_.filter(function(a) {
              return a.gatherActive(), a.hasActive();
            });
            return (
              a.forEach(function(a) {
                return a.broadcastActive();
              }),
              0 < a.length
            );
          }),
          (a.prototype.connect_ = function() {
            !Lb ||
              this.connected_ ||
              (document.addEventListener(
                "transitionend",
                this.onTransitionEnd_
              ),
              window.addEventListener("resize", this.refresh),
              Pb
                ? ((this.mutationsObserver_ = new MutationObserver(
                    this.refresh
                  )),
                  this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0,
                  }))
                : (document.addEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                  (this.mutationEventsAdded_ = !0)),
              (this.connected_ = !0));
          }),
          (a.prototype.disconnect_ = function() {
            Lb &&
              this.connected_ &&
              (document.removeEventListener(
                "transitionend",
                this.onTransitionEnd_
              ),
              window.removeEventListener("resize", this.refresh),
              this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
              this.mutationEventsAdded_ &&
                document.removeEventListener(
                  "DOMSubtreeModified",
                  this.refresh
                ),
              (this.mutationsObserver_ = null),
              (this.mutationEventsAdded_ = !1),
              (this.connected_ = !1));
          }),
          (a.prototype.onTransitionEnd_ = function(a) {
            var b = a.propertyName,
              c = void 0 === b ? "" : b,
              d = Ob.some(function(a) {
                return !!~c.indexOf(a);
              });
            d && this.refresh();
          }),
          (a.getInstance = function() {
            return this.instance_ || (this.instance_ = new a()), this.instance_;
          }),
          (a.instance_ = null),
          a
        );
      })(),
      Rb = function(a, b) {
        for (var c, d = 0, e = Object.keys(b); d < e.length; d++)
          (c = e[d]),
            Object.defineProperty(a, c, {
              value: b[c],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
        return a;
      },
      Sb = function(a) {
        var b = a && a.ownerDocument && a.ownerDocument.defaultView;
        return b || Mb;
      },
      Tb = Ba(0, 0, 0, 0),
      Ub = (function() {
        return "undefined" == typeof SVGGraphicsElement
          ? function(a) {
              return (
                a instanceof Sb(a).SVGElement && "function" == typeof a.getBBox
              );
            }
          : function(a) {
              return a instanceof Sb(a).SVGGraphicsElement;
            };
      })(),
      Vb = (function() {
        function a(a) {
          (this.broadcastWidth = 0),
            (this.broadcastHeight = 0),
            (this.contentRect_ = Ba(0, 0, 0, 0)),
            (this.target = a);
        }
        return (
          (a.prototype.isActive = function() {
            var a = za(this.target);
            return (
              (this.contentRect_ = a),
              a.width !== this.broadcastWidth ||
                a.height !== this.broadcastHeight
            );
          }),
          (a.prototype.broadcastRect = function() {
            var a = this.contentRect_;
            return (
              (this.broadcastWidth = a.width),
              (this.broadcastHeight = a.height),
              a
            );
          }),
          a
        );
      })(),
      Wb = (function() {
        return function(a, b) {
          var c = Aa(b);
          Rb(this, { target: a, contentRect: c });
        };
      })(),
      Xb = (function() {
        function a(a, b, c) {
          if (
            ((this.activeObservations_ = []),
            (this.observations_ = new Kb()),
            "function" != typeof a)
          )
            throw new TypeError(
              "The callback provided as parameter 1 is not a function."
            );
          (this.callback_ = a), (this.controller_ = b), (this.callbackCtx_ = c);
        }
        return (
          (a.prototype.observe = function(a) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(a instanceof Sb(a).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var b = this.observations_;
              b.has(a) ||
                (b.set(a, new Vb(a)),
                this.controller_.addObserver(this),
                this.controller_.refresh());
            }
          }),
          (a.prototype.unobserve = function(a) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(a instanceof Sb(a).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var b = this.observations_;
              b.has(a) &&
                (b.delete(a), !b.size && this.controller_.removeObserver(this));
            }
          }),
          (a.prototype.disconnect = function() {
            this.clearActive(),
              this.observations_.clear(),
              this.controller_.removeObserver(this);
          }),
          (a.prototype.gatherActive = function() {
            var a = this;
            this.clearActive(),
              this.observations_.forEach(function(b) {
                b.isActive() && a.activeObservations_.push(b);
              });
          }),
          (a.prototype.broadcastActive = function() {
            if (this.hasActive()) {
              var a = this.callbackCtx_,
                b = this.activeObservations_.map(function(a) {
                  return new Wb(a.target, a.broadcastRect());
                });
              this.callback_.call(a, b, a), this.clearActive();
            }
          }),
          (a.prototype.clearActive = function() {
            this.activeObservations_.splice(0);
          }),
          (a.prototype.hasActive = function() {
            return 0 < this.activeObservations_.length;
          }),
          a
        );
      })(),
      Yb = "undefined" == typeof WeakMap ? new Kb() : new WeakMap(),
      Zb = (function() {
        function a(b) {
          if (!(this instanceof a))
            throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          var c = Qb.getInstance(),
            d = new Xb(b, c, this);
          Yb.set(this, d);
        }
        return a;
      })();
    ["observe", "unobserve", "disconnect"].forEach(function(a) {
      Zb.prototype[a] = function() {
        var b;
        return (b = Yb.get(this))[a].apply(b, arguments);
      };
    });
    var $b = (function() {
      return "undefined" == typeof Mb.ResizeObserver ? Zb : Mb.ResizeObserver;
    })();
    const _b = {
        shuffle: !0,
        power_state: !0,
        artwork_border: !0,
        icon_state: !0,
        sound_mode: !0,
        runtime: !0,
      },
      ac = {
        DEFAULT: "mdi:cast",
        DROPDOWN: "mdi:chevron-down",
        GROUP: "mdi:speaker-multiple",
        MENU: "mdi:menu-down",
        MUTE: { true: "mdi:volume-off", false: "mdi:volume-high" },
        NEXT: "mdi:skip-next",
        PLAY: { true: "mdi:pause", false: "mdi:play" },
        POWER: "mdi:power",
        PREV: "mdi:skip-previous",
        SEND: "mdi:send",
        SHUFFLE: "mdi:shuffle",
        STOP: "mdi:stop",
        VOL_DOWN: "mdi:volume-minus",
        VOL_UP: "mdi:volume-plus",
      },
      bc = ["entity", "_overflow", "break", "thumbnail", "edit", "idle"],
      cc = ["media_duration", "media_position", "media_position_updated_at"],
      dc = [
        { attr: "media_title" },
        { attr: "media_artist" },
        { attr: "media_series_title" },
        { attr: "media_season", prefix: "S" },
        { attr: "media_episode", prefix: "E" },
        { attr: "app_name" },
      ];
    class ec {
      constructor(a, b, c) {
        (this.hass = a || {}),
          (this.config = b || {}),
          (this.entity = c || {}),
          (this.state = c.state),
          (this.attr = c.attributes),
          (this.idle = !!b.idle_view && this.idleView),
          (this.active = this.isActive);
      }
      get id() {
        return this.entity.entity_id;
      }
      get icon() {
        return this.attr.icon;
      }
      get isPaused() {
        return "paused" === this.state;
      }
      get isPlaying() {
        return "playing" === this.state;
      }
      get isIdle() {
        return "idle" === this.state;
      }
      get isStandby() {
        return "standby" === this.state;
      }
      get isUnavailable() {
        return "unavailable" === this.state;
      }
      get isOff() {
        return "off" === this.state;
      }
      get isActive() {
        return (!this.isOff && !this.isUnavailable && !this.idle) || !1;
      }
      get shuffle() {
        return this.attr.shuffle || !1;
      }
      get content() {
        return this.attr.media_content_type || "none";
      }
      get mediaDuration() {
        return this.attr.media_duration || 0;
      }
      get updatedAt() {
        return this.attr.media_position_updated_at || 0;
      }
      get position() {
        return this.attr.media_position || 0;
      }
      get name() {
        return this.attr.friendly_name || "";
      }
      get groupCount() {
        return this.group.length;
      }
      get isGrouped() {
        return 1 < this.group.length;
      }
      get group() {
        const a = "".concat(this.config.speaker_group.platform, "_group");
        return this.attr[a] || [];
      }
      get master() {
        return this.group[0] || this.config.entity;
      }
      get isMaster() {
        return this.master === this.config.entity;
      }
      get sources() {
        return this.attr.source_list || [];
      }
      get source() {
        return this.attr.source || "";
      }
      get soundModes() {
        return this.attr.sound_mode_list || [];
      }
      get soundMode() {
        return this.attr.sound_mode || "";
      }
      get muted() {
        return this.attr.is_volume_muted || !1;
      }
      get vol() {
        return this.attr.volume_level || 0;
      }
      get picture() {
        return this.attr.entity_picture;
      }
      get hasArtwork() {
        return (
          this.picture &&
          "none" !== this.config.artwork &&
          this.active &&
          !this.idle
        );
      }
      get mediaInfo() {
        return dc
          .map((a) => na({ text: this.attr[a.attr], prefix: "" }, a))
          .filter((a) => a.text);
      }
      get hasProgress() {
        return (
          !this.config.hide.progress &&
          !this.idle &&
          cc.every((a) => a in this.attr)
        );
      }
      get progress() {
        return (
          this.position +
          (Date.now() - new Date(this.updatedAt).getTime()) / 1e3
        );
      }
      get idleView() {
        const a = this.config.idle_view;
        return (
          !!(
            (a.when_idle && this.isIdle) ||
            (a.when_standby && this.isStandby) ||
            (a.when_paused && this.isPaused)
          ) ||
          (!!(this.updatedAt && a.after && !this.isPlaying) &&
            this.checkIdleAfter(a.after))
        );
      }
      get trackIdle() {
        return (
          this.active &&
          !this.isPlaying &&
          this.updatedAt &&
          this.config.idle_view &&
          this.config.idle_view.after
        );
      }
      checkIdleAfter(a) {
        const b = (Date.now() - new Date(this.updatedAt).getTime()) / 1e3;
        return (
          (this.idle = b > 60 * a), (this.active = this.isActive), this.idle
        );
      }
      get supportsShuffle() {
        return "undefined" != typeof this.attr.shuffle;
      }
      get supportsMute() {
        return "undefined" != typeof this.attr.is_volume_muted;
      }
      getAttribute(a) {
        return this.attr[a] || "";
      }
      fetchThumbnail() {
        var a = this;
        return qa(function*() {
          try {
            const b = yield a.hass.callWS({
                type: "media_player_thumbnail",
                entity_id: a.config.entity,
              }),
              c = b.content_type,
              d = b.content;
            return "url(data:".concat(c, ";base64,").concat(d, ")");
          } catch (a) {
            return (
              console.error("mini-media-player: Failed fetching thumbnail"), !1
            );
          }
        })();
      }
      toggle(a) {
        return this.config.toggle_power
          ? this.callService(a, "toggle")
          : this.isOff
          ? this.callService(a, "turn_on")
          : void this.callService(a, "turn_off");
      }
      toggleMute(a) {
        this.callService(a, "volume_mute", { is_volume_muted: !this.muted });
      }
      toggleShuffle(a) {
        this.callService(a, "shuffle_set", { shuffle: !this.shuffle });
      }
      setSource(a, b) {
        this.callService(a, "select_source", { source: b });
      }
      setMedia(a, b) {
        this.callService(a, "play_media", na({}, b));
      }
      playPause(a) {
        this.callService(a, "media_play_pause");
      }
      setSoundMode(a, b) {
        this.callService(a, "select_sound_mode", { sound_mode: b });
      }
      next(a) {
        this.callService(a, "media_next_track");
      }
      prev(a) {
        this.callService(a, "media_previous_track");
      }
      stop(a) {
        this.callService(a, "media_stop");
      }
      volumeUp(a) {
        this.callService(a, "volume_up");
      }
      volumeDown(a) {
        this.callService(a, "volume_down");
      }
      seek(a, b) {
        this.callService(a, "media_seek", { seek_position: b });
      }
      setVolume(a, b) {
        this.config.speaker_group.sync_volume
          ? this.group.forEach((c) => {
              const d =
                this.config.speaker_group.entities.find(
                  (a) => a.entity_id === c
                ) || {};
              let e = b;
              d.volume_offset &&
                ((e += d.volume_offset / 100),
                1 < e && (e = 1),
                0 > e && (e = 0)),
                this.callService(a, "volume_set", {
                  entity_id: c,
                  volume_level: e,
                });
            })
          : this.callService(a, "volume_set", {
              entity_id: this.config.entity,
              volume_level: b,
            });
      }
      handleGroupChange(a, b, c) {
        const d = this.config.speaker_group.platform,
          e = { entity_id: b };
        if (c) {
          if (((e.master = this.config.entity), "sonos" === d))
            return this.callService(a, "join", e, d);
          this.callService(a, "".concat(d, "_JOIN"), e);
        } else {
          if ("sonos" === d) return this.callService(a, "unjoin", e, d);
          this.callService(a, "".concat(d, "_UNJOIN"), e);
        }
      }
      toggleScript(a, b) {
        let c =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {};
        this.callService(a, b.split(".").pop(), na({}, c), "script");
      }
      callService(a, b, c) {
        let d =
          3 < arguments.length && arguments[3] !== void 0
            ? arguments[3]
            : "media_player";
        a.stopPropagation(),
          this.hass.callService(d, b, na({ entity_id: this.config.entity }, c));
      }
    }
    const fc = Eb(la());
    class gc extends Gb {
      static get properties() {
        return {
          item: {},
          checked: Boolean,
          disabled: Boolean,
          master: Boolean,
        };
      }
      render() {
        return eb(
          ka(),
          this.checked,
          this.disabled,
          (a) => a.stopPropagation(),
          this.handleClick,
          this.item.name,
          this.master ? eb(ja()) : ""
        );
      }
      handleClick(a) {
        a.stopPropagation(),
          this.dispatchEvent(
            new CustomEvent("change", {
              detail: { entity: this.item.entity_id, checked: !this.checked },
            })
          );
      }
      static get styles() {
        return Eb(ia());
      }
    }
    customElements.define("mmp-group-item", gc);
    class hc extends Gb {
      static get properties() {
        return { entities: {}, player: {}, visible: Boolean };
      }
      get group() {
        return this.player.group;
      }
      get master() {
        return this.player.master;
      }
      get isMaster() {
        return this.player.isMaster;
      }
      handleGroupChange(a) {
        const b = a.detail,
          c = b.entity,
          d = b.checked;
        this.player.handleGroupChange(a, c, d);
      }
      render() {
        let a =
            0 < arguments.length && arguments[0] !== void 0
              ? arguments[0]
              : this,
          b = a.group,
          c = a.master,
          d = a.isMaster;
        return this.visible
          ? eb(
              ha(),
              this.visible,
              this.entities.map((a) =>
                eb(
                  ga(),
                  this.handleGroupChange,
                  a,
                  a.entity_id === this.player.id || b.includes(a.entity_id),
                  a.entity_id === this.player.id || c !== this.player.id,
                  a.entity_id === c
                )
              ),
              2 > b.length,
              (a) =>
                this.player.handleGroupChange(
                  a,
                  d ? b : this.player.entity_id,
                  !1
                ),
              d ? eb(fa()) : eb(ea()),
              !d,
              (a) =>
                this.player.handleGroupChange(
                  a,
                  this.entities.map((a) => a.entity_id),
                  !0
                )
            )
          : eb(da());
      }
      static get styles() {
        return Eb(ca());
      }
    }
    customElements.define("mmp-group-list", hc);
    const ic = Eb(ba());
    class jc extends Gb {
      static get properties() {
        return { items: [], label: String, selected: String };
      }
      get selectedId() {
        return this.items.map((a) => a.id).indexOf(this.selected);
      }
      onChange(a) {
        this.dispatchEvent(new CustomEvent("change", { detail: a }));
      }
      render() {
        return eb(
          aa(),
          "right",
          "top",
          44,
          (a) => a.stopPropagation(),
          this.icon
            ? eb(_(), ac.DROPDOWN)
            : eb($(), this.selected || this.label, ac.DROPDOWN),
          this.selectedId,
          this.items.map((a) =>
            eb(
              Z(),
              a.id || a.name,
              () => this.onChange(a),
              a.icon ? eb(Y(), a.icon) : "",
              a.name ? eb(X(), a.name) : ""
            )
          )
        );
      }
      static get styles() {
        return [ic, Eb(W())];
      }
    }
    customElements.define("mmp-dropdown", jc);
    class kc extends Gb {
      static get properties() {
        return { player: {}, shortcuts: {} };
      }
      get buttons() {
        return this.shortcuts.buttons;
      }
      get list() {
        return this.shortcuts.list;
      }
      get show() {
        return !this.shortcuts.hide_when_off || this.player.active;
      }
      get active() {
        return this.player.getAttribute(this.shortcuts.attribute);
      }
      render() {
        if (!this.show) return;
        const a = this.active,
          b = this.list
            ? eb(V(), this.handleShortcut, this.list, this.shortcuts.label, a)
            : "",
          c = this.buttons
            ? eb(
                U(),
                this.buttons.map((b) =>
                  eb(
                    T(),
                    this.shortcuts.columns,
                    b.id === a,
                    (a) => this.handleShortcut(a, b),
                    b.icon ? eb(S(), b.icon) : "",
                    b.name ? eb(R(), b.name) : ""
                  )
                )
              )
            : "";
        return eb(Q(), c, b);
      }
      handleShortcut(a, b) {
        const c = b || a.detail,
          d = c.type,
          e = c.id,
          f = c.data;
        if ("source" === d) return this.player.setSource(a, e);
        if ("script" === d) return this.player.toggleScript(a, e, f);
        if ("sound_mode" === d) return this.player.setSoundMode(a, e);
        this.player.setMedia(a, { media_content_type: d, media_content_id: e });
      }
      static get styles() {
        return [ic, Eb(P())];
      }
    }
    customElements.define("mmp-shortcuts", kc);
    const lc = function(a, b) {
      let c =
        2 < arguments.length && arguments[2] !== void 0
          ? arguments[2]
          : "unknown";
      const d = a.selectedLanguage || a.language,
        e = a.resources[d];
      return e && e[b] ? e[b] : c;
    };
    class mc extends Gb {
      static get properties() {
        return { hass: {}, config: {} };
      }
      get label() {
        return lc(this.hass, "ui.card.media_player.text_to_speak", "Say");
      }
      get input() {
        return this.shadowRoot.getElementById("tts-input");
      }
      get message() {
        return this.input.value;
      }
      render() {
        return eb(O(), this.label, (a) => a.stopPropagation(), this.handleTts);
      }
      handleTts(a) {
        const b = this.config,
          c = this.message,
          d = { message: c, entity_id: b.entity_id || this.entity };
        b.language && (d.language = b.language),
          "alexa" === b.platform
            ? this.hass.callService("notify", "alexa_media", {
                message: c,
                data: { type: b.type || "tts" },
                target: d.entity_id,
              })
            : "sonos" === b.platform
            ? this.hass.callService("script", "sonos_say", {
                sonos_entity: d.entity_id,
                volume: b.volume || 0.5,
                message: c,
              })
            : "ga" === b.platform
            ? this.hass.callService("notify", "ga_broadcast", { message: c })
            : this.hass.callService("tts", "".concat(b.platform, "_say"), d),
          a.stopPropagation(),
          this.reset();
      }
      reset() {
        this.input.value = "";
      }
      static get styles() {
        return Eb(N());
      }
    }
    customElements.define("mmp-tts", mc);
    var nc = (a) => {
      let b = parseInt(a % 60, 10),
        c = parseInt((a / 60) % 60, 10),
        d = parseInt((a / 3600) % 24, 10);
      return (
        (d = 10 > d ? "0".concat(d) : d),
        (c = 10 > c ? "0".concat(c) : c),
        (b = 10 > b ? "0".concat(b) : b),
        ""
          .concat("00" === d ? "" : "".concat(d, ":"))
          .concat(c, ":")
          .concat(b)
      );
    };
    class oc extends Gb {
      static get properties() {
        return {
          _player: {},
          showTime: Boolean,
          progress: Number,
          duration: Number,
          tracker: {},
          track: Boolean,
        };
      }
      set player(a) {
        (this._player = a), this.hasProgress && this.trackProgress();
      }
      get duration() {
        return this.player.mediaDuration;
      }
      get player() {
        return this._player;
      }
      get hasProgress() {
        return this.player.hasProgress;
      }
      render() {
        return this.player.active && this.hasProgress
          ? eb(
              M(),
              this.handleSeek,
              !this.player.isPlaying,
              this.showTime
                ? eb(L(), nc(this.progress), nc(this.duration))
                : "",
              this.progress,
              this.duration
            )
          : eb(K());
      }
      trackProgress() {
        (this.progress = this.player.progress),
          this.tracker ||
            (this.tracker = setInterval(() => this.trackProgress(), 1e3)),
          this.player.isPlaying ||
            (clearInterval(this.tracker), (this.tracker = null));
      }
      handleSeek(a) {
        const b = this.duration,
          c = (a.offsetX / a.target.offsetWidth) * b;
        this.player.seek(a, c);
      }
      disconnectedCallback() {
        clearInterval(this.tracker);
      }
      static get styles() {
        return Eb(J());
      }
    }
    customElements.define("mmp-progress", oc);
    class pc extends Gb {
      static get properties() {
        return { player: {}, selected: String, icon: Boolean };
      }
      get source() {
        return this.player.source;
      }
      get sources() {
        return this.player.sources.map((a) => ({
          name: a,
          id: a,
          type: "source",
        }));
      }
      render() {
        return eb(
          I(),
          this.handleSource,
          this.sources,
          this.source,
          this.selected || this.source,
          this.icon
        );
      }
      handleSource(a) {
        const b = a.detail.id;
        this.player.setSource(a, b), (this.selected = b);
      }
      static get styles() {
        return Eb(H());
      }
    }
    customElements.define("mmp-source-menu", pc);
    class qc extends Gb {
      static get properties() {
        return { player: {}, selected: String, icon: Boolean };
      }
      get mode() {
        return this.player.soundMode;
      }
      get modes() {
        return this.player.soundModes.map((a) => ({
          name: a,
          id: a,
          type: "soundMode",
        }));
      }
      render() {
        return eb(
          G(),
          this.handleChange,
          this.modes,
          this.mode,
          this.selected || this.mode,
          this.icon
        );
      }
      handleChange(a) {
        const b = a.detail.id;
        this.player.setSoundMode(a, b), (this.selected = b);
      }
      static get styles() {
        return Eb(F());
      }
    }
    customElements.define("mmp-sound-menu", qc);
    class rc extends Gb {
      static get properties() {
        return { player: {}, config: {} };
      }
      get showShuffle() {
        return !this.config.hide.shuffle && this.player.supportsShuffle;
      }
      get maxVol() {
        return this.config.max_volume || 100;
      }
      get minVol() {
        return this.config.min_volume || 0;
      }
      render() {
        const a = this.config.hide;
        return eb(
          E(),
          a.volume ? "" : this.renderVolControls(this.player.muted),
          this.showShuffle
            ? eb(
                D(),
                (a) => this.player.toggleShuffle(a),
                ac.SHUFFLE,
                this.player.shuffle
              )
            : "",
          a.controls
            ? ""
            : eb(
                C(),
                this.config.flow,
                (a) => this.player.prev(a),
                ac.PREV,
                (a) => this.player.playPause(a),
                ac.PLAY[this.player.isPlaying],
                (a) => this.player.next(a),
                ac.NEXT
              )
        );
      }
      renderVolControls(a) {
        return this.config.volume_stateless
          ? this.renderVolButtons(a)
          : this.renderVolSlider(a);
      }
      renderVolSlider(a) {
        return eb(
          B(),
          this.renderMuteButton(a),
          this.handleVolumeChange,
          (a) => a.stopPropagation(),
          a,
          this.minVol,
          this.maxVol,
          100 * this.player.vol,
          "ltr"
        );
      }
      renderVolButtons(a) {
        return eb(
          A(),
          this.renderMuteButton(a),
          (a) => this.player.volumeDown(a),
          ac.VOL_DOWN,
          (a) => this.player.volumeUp(a),
          ac.VOL_UP
        );
      }
      renderMuteButton(a) {
        if (!this.config.hide.mute)
          switch (this.config.replace_mute) {
            case "play":
              return eb(
                z(),
                (a) => this.player.playPause(a),
                ac.PLAY[this.player.isPlaying]
              );
            case "stop":
              return eb(y(), (a) => this.player.stop(a), ac.STOP);
            case "next":
              return eb(x(), (a) => this.player.next(a), ac.NEXT);
            default:
              return this.player.supportsMute
                ? eb(w(), (a) => this.player.toggleMute(a), ac.MUTE[a])
                : void 0;
          }
      }
      handleVolumeChange(a) {
        const b = parseFloat(a.target.value) / 100;
        this.player.setVolume(a, b);
      }
      static get styles() {
        return [ic, Eb(v())];
      }
    }
    customElements.define("mmp-media-controls", rc);
    class sc extends Gb {
      static get properties() {
        return {
          hass: {},
          player: {},
          config: {},
          groupVisible: Boolean,
          idle: Boolean,
        };
      }
      get showGroupButton() {
        return this.config.speaker_group.entities;
      }
      get showPowerButton() {
        return !this.config.hide.power;
      }
      get powerColor() {
        return this.player.active && !this.config.hide.power_state;
      }
      get sourceSize() {
        return (
          "icon" === this.config.source || this.config.collapse || this.idle
        );
      }
      get soundSize() {
        return (
          "icon" === this.config.sound_mode || this.config.collapse || this.idle
        );
      }
      get hasSource() {
        return 0 < this.player.sources.length && !this.config.hide.source;
      }
      get hasSoundMode() {
        return (
          0 < this.player.soundModes.length && !this.config.hide.sound_mode
        );
      }
      render() {
        return this.player.isUnavailable
          ? eb(u(), lc(this.hass, "state.default.unavailable", "Unavailable"))
          : eb(
              t(),
              this.idle ? this.renderIdleView : "",
              this.config.collapse && this.player.active
                ? eb(s(), this.player, this.config)
                : "",
              this.hasSource
                ? eb(
                    r(),
                    this.player,
                    this.sourceSize,
                    "full" === this.config.source
                  )
                : "",
              this.hasSoundMode
                ? eb(
                    q(),
                    this.player,
                    this.soundSize,
                    "full" === this.config.sound_mode
                  )
                : "",
              this.showGroupButton
                ? eb(
                    p(),
                    ac.GROUP,
                    !this.player.isGrouped,
                    this.groupVisible,
                    this.handleGroupClick
                  )
                : "",
              this.showPowerButton
                ? eb(
                    o(),
                    ac.POWER,
                    (a) => this.player.toggle(a),
                    this.powerColor
                  )
                : ""
            );
      }
      handleGroupClick(a) {
        a.stopPropagation(),
          this.dispatchEvent(new CustomEvent("toggleGroupList"));
      }
      get renderIdleView() {
        return this.player.isPaused
          ? eb(n(), ac.PLAY[this.player.isPlaying], (a) =>
              this.player.playPause(a)
            )
          : eb(m(), lc(this.hass, "state.media_player.idle", "Idle"));
      }
      static get styles() {
        return [ic, Eb(l())];
      }
    }
    customElements.define("mmp-powerstrip", sc),
      customElements.get("mwc-button") ||
        customElements.define(
          "mwc-button",
          class extends customElements.get("paper-button") {}
        ),
      customElements.get("ha-paper-slider") ||
        customElements.define(
          "ha-paper-slider",
          class extends customElements.get("paper-slider") {}
        );
    class tc extends Gb {
      constructor() {
        super(),
          (this._overflow = !1),
          (this.initial = !0),
          (this.picture = !1),
          (this.thumbnail = !1),
          (this.edit = !1),
          (this.rtl = !1);
      }
      static get properties() {
        return {
          _hass: {},
          config: {},
          entity: {},
          player: {},
          _overflow: Boolean,
          break: Boolean,
          initial: Boolean,
          picture: String,
          thumbnail: String,
          edit: Boolean,
          rtl: Boolean,
          idle: Boolean,
        };
      }
      static get styles() {
        return fc;
      }
      set hass(a) {
        if (a) {
          const b = a.states[this.config.entity];
          (this._hass = a),
            b &&
              this.entity !== b &&
              ((this.entity = b),
              (this.player = new ec(a, this.config, b)),
              (this.rtl = this.computeRTL(a)),
              (this.idle = this.player.idle),
              this.player.trackIdle && this.updateIdleStatus());
        }
      }
      get hass() {
        return this._hass;
      }
      set overflow(a) {
        this._overflow !== a && (this._overflow = a);
      }
      get overflow() {
        return this._overflow;
      }
      get name() {
        return this.config.name || this.player.name;
      }
      setConfig(a) {
        if (!a.entity || "media_player" !== a.entity.split(".")[0])
          throw new Error(
            "Specify an entity from within the media_player domain."
          );
        const b = na(
          {
            artwork: "default",
            info: "default",
            more_info: !0,
            source: "default",
            sound_mode: "default",
            toggle_power: !0,
          },
          a,
          {
            hide: na({}, _b, a.hide),
            speaker_group: na(
              { show_group_count: !0, platform: "sonos" },
              a.sonos,
              a.speaker_group
            ),
            shortcuts: na({ label: "Shortcuts..." }, a.shortcuts),
          }
        );
        (b.max_volume = +b.max_volume || 100),
          (b.min_volume = +b.min_volume || 0),
          (b.collapse = b.hide.controls || b.hide.volume),
          (b.info = b.collapse && "scroll" !== b.info ? "short" : b.info),
          (b.flow = b.hide.icon && b.hide.name && b.hide.info),
          (this.config = b);
      }
      shouldUpdate(a) {
        return (
          void 0 === this.break && this.computeRect(this),
          bc.some((b) => a.has(b)) && this.player
        );
      }
      firstUpdated() {
        const a = new $b((a) => {
          a.forEach((a) => {
            window.requestAnimationFrame(() => {
              "scroll" === this.config.info && this.computeOverflow(),
                this._resizeTimer ||
                  (this.computeRect(a),
                  (this._resizeTimer = setTimeout(() => {
                    (this._resizeTimer = null),
                      this.computeRect(this._resizeEntry);
                  }, 250))),
                (this._resizeEntry = a);
            });
          });
        });
        a.observe(this),
          setTimeout(() => (this.initial = !1), 250),
          (this.edit = this.config.speaker_group.expanded || !1);
      }
      updated() {
        "scroll" === this.config.info &&
          setTimeout(() => {
            this.computeOverflow();
          }, 10);
      }
      render() {
        let a =
            0 < arguments.length && arguments[0] !== void 0
              ? arguments[0]
              : this,
          b = a.config;
        const c = this.computeArtwork();
        return eb(
          k(),
          this.handleMoreInfo,
          this.computeClasses(),
          b.artwork,
          this.player.content,
          this.renderArtwork(c),
          this.player.idle,
          this.renderIcon(c),
          this.renderEntityName(),
          this.renderMediaInfo(),
          this.toggleGroupList,
          this.hass,
          this.player,
          b,
          this.edit,
          this.idle,
          b.flow,
          !b.collapse && this.player.active ? eb(j(), this.player, b) : "",
          this.player,
          b.shortcuts,
          b.tts ? eb(i(), b.tts, this.hass, this.player.id) : "",
          this.edit,
          b.speaker_group.entities,
          this.player,
          this.player,
          !this.config.hide.runtime
        );
      }
      renderArtwork(a) {
        if (this.thumbnail || this.config.background) {
          const b =
            this.config.background && (!a || "default" === this.config.artwork)
              ? "url(".concat(this.config.background, ")")
              : this.thumbnail;
          return eb(h(), b);
        }
      }
      renderIcon(a) {
        return this.config.hide.icon
          ? void 0
          : this.player.active && a && "default" === this.config.artwork
          ? eb(
              g(),
              this.thumbnail,
              !this.config.hide.artwork_border,
              this.player.state
            )
          : eb(f(), this.computeIcon());
      }
      renderEntityName() {
        return this.config.hide.name
          ? void 0
          : eb(e(), this.name, this.speakerCount());
      }
      renderMediaInfo() {
        if (!this.config.hide.info) {
          const e = this.player.mediaInfo;
          return eb(
            d(),
            "short" === this.config.info || !this.player.active,
            "scroll" === this.config.info,
            this.overflow,
            this.overflow,
            "scroll" === this.config.info
              ? eb(
                  c(),
                  e.map((a) =>
                    eb(b(), "attr__".concat(a.attr), a.prefix + a.text)
                  )
                )
              : "",
            e.map((b) => eb(a(), "attr__".concat(b.attr), b.prefix + b.text))
          );
        }
      }
      speakerCount() {
        if (this.config.speaker_group.show_group_count) {
          const a = this.player.groupCount;
          return 1 < a ? " +".concat(a - 1) : "";
        }
      }
      computeClasses() {
        let a =
            0 < arguments.length && arguments[0] !== void 0
              ? arguments[0]
              : this,
          b = a.config;
        return Jb({
          "--responsive": this.break || b.hide.icon,
          "--initial": this.initial,
          "--bg": b.background,
          "--group": b.group,
          "--more-info": b.more_info,
          "--has-artwork": this.player.hasArtwork && this.thumbnail,
          "--flow": b.flow,
          "--collapse": b.collapse,
          "--rtl": this.rtl,
          "--runtime": !b.hide.runtime && this.player.hasProgress,
        });
      }
      computeArtwork() {
        const a = this.player,
          b = a.picture,
          c = a.hasArtwork;
        return (
          c &&
            b !== this.picture &&
            (this.player.fetchThumbnail().then((a) => {
              this.thumbnail = a;
            }),
            (this.picture = b)),
          !!(c && this.thumbnail)
        );
      }
      computeIcon() {
        return this.config.icon
          ? this.config.icon
          : this.player.icon || ac.DEFAULT;
      }
      computeOverflow() {
        const a = this.shadowRoot.querySelector(".marquee");
        if (a) {
          const b = a.clientWidth > a.parentNode.clientWidth;
          this.overflow =
            !!(b && this.player.active) && 7.5 + a.clientWidth / 50;
        }
      }
      computeRect(a) {
        const b = a.contentRect || a.getBoundingClientRect(),
          c = b.left,
          d = b.width;
        this.break = d + 2 * c < 390;
      }
      computeRTL(a) {
        const b = a.language || "en";
        return (
          !!a.translationMetadata.translations[b] &&
          (a.translationMetadata.translations[b].isRTL || !1)
        );
      }
      toggleGroupList() {
        this.edit = !this.edit;
      }
      handleMoreInfo() {
        if (this.config.more_info) {
          const a = new Event("hass-more-info", { composed: !0 });
          (a.detail = { entityId: this.config.entity }), this.dispatchEvent(a);
        }
      }
      updateIdleStatus() {
        this._idleTracker && clearTimeout(this._idleTracker);
        const a =
          (Date.now() - new Date(this.player.updatedAt).getTime()) / 1e3;
        this._idleTracker = setTimeout(() => {
          (this.idle = this.player.checkIdleAfter(this.config.idle_view.after)),
            (this.player.idle = this.idle),
            (this._idleTracker = null);
        }, 1e3 * (60 * this.config.idle_view.after - a));
      }
      getCardSize() {
        return this.config.collapse ? 1 : 2;
      }
    }
    customElements.define("mini-media-player", tc);
  });
})();
