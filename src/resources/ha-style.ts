import "@polymer/paper-styles/paper-styles";
import "@polymer/polymer/lib/elements/custom-style";
import { derivedStyles } from "./styles";

const documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");

documentContainer.innerHTML = `<custom-style>
  <style>
    /*
      Home Assistant default styles.

      In Polymer 2.0, default styles should to be set on the html selector.
      (Setting all default styles only on body breaks shadyCSS polyfill.)
      See: https://github.com/home-assistant/home-assistant-polymer/pull/901
    */
    html {
      font-size: 14px;
      height: 100vh;
      label-badge-red: #FF9800;

      /* text */
      --primary-text-color: #ffffff;
      --secondary-text-color: #FF9800;
      --text-primary-color: #ffffff;
      --disabled-text-color: #bdbdbd;

      /* main interface colors */
      --primary-color: #FF9800;
      --dark-primary-color: #c66900;
      --light-primary-color: #ffc947;
      --accent-color: #c66900;
      --divider-color: rgba(0, 0, 0, .12);

      --scrollbar-thumb-color: rgb(194, 194, 194);

      --error-color: #db4437;
      --warning-color: #f4b400;
      --success-color: #0f9d58;
      --info-color: #4285f4;

      /* states and badges */
      --state-icon-color: #727272;
      --state-icon-active-color: #ff9800;

      /* background and sidebar */
      --card-background-color: #323232;
      --primary-background-color: #4c4c4c;
      --secondary-background-color: #4c4c4c;
      --paper-listbox-background-color: "#727272"

      /* for label-badge */
      --label-badge-red: #FF9800;
      --label-badge-blue: #ffc947;
      --label-badge-green: #c66900;
      --label-badge-yellow: #ffffff;
      --label-badge-text-color: #ffffff;
      --label-badge-color: #FF9800;

      /*
        Paper-styles color.html dependency is stripped on build.
        When a default paper-style color is used, it needs to be copied
        from paper-styles/color.html to here.
      */

      --paper-grey-50: #727272; /* default for: --mwc-switch-unchecked-button-color */
      --paper-grey-200: #4c4c4c;  /* for ha-date-picker-style */
      --paper-grey-500: #9e9e9e;  /* --label-badge-grey */

      /* for paper-slider */
      --paper-green-400: #66bb6a;
      --paper-blue-400: #42a5f5;
      --paper-orange-400: #ffa726;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

      /* set our slider style */
      --ha-paper-slider-pin-font-size: 15px;

      /* markdown styles */
      --markdown-code-background-color: #f6f8fa;

      /* rgb */
      --rgb-primary-color: 3, 169, 244;
      --rgb-accent-color: 255, 152, 0;
      --rgb-primary-text-color: 255, 255, 255;
      --rgb-secondary-text-color: 114, 114, 114;
      --rgb-text-primary-color: 255, 255, 255;
      --rgb-card-background-color: 255, 255, 255;

      ${Object.entries(derivedStyles)
        .map(([key, value]) => `--${key}: ${value};`)
        .join("")}
    }

    /*
      prevent clipping of positioned elements in a small scrollable
      force smooth scrolling if can scroll
      use non-shady selectors so this only targets iOS 9
      conditional mixin set in ha-style-dialog does not work with shadyCSS
    */
    paper-dialog-scrollable:not(.can-scroll) > .scrollable {
      -webkit-overflow-scrolling: auto !important;
    }

    paper-dialog-scrollable.can-scroll > .scrollable {
      -webkit-overflow-scrolling: touch !important;
    }
  </style>
</custom-style>`;

document.head.appendChild(documentContainer.content);
