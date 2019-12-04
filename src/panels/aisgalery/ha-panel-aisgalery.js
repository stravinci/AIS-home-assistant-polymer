import { html } from "@polymer/polymer/lib/utils/html-tag";
import { PolymerElement } from "@polymer/polymer/polymer-element";

import "../states/ha-panel-states";

class HaPanelAisgalery extends PolymerElement {
  static get template() {
    return html`
      <style include="ha-style iron-flex iron-flex-factors">
        #main-title-bar {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex; /* establish flex container */
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row; /* default value; can be omitted */
          -ms-flex-wrap: nowrap;
          flex-wrap: nowrap; /* default value; can be omitted */
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between; /* switched from default (flex-start, see below) */
          width: 100%;
        }
        #main-title-text {
          width: 100%;
          /* position: absolute; */
          margin-left: -35px;
        }
        app-header-layout {
          background-color: var(--primary-background-color);
        }
        app-header {
          text-align: center;
        }
        app-toolbar ha-menu-button + [main-title] {
          margin-left: -50px;
        }
        .content {
          overflow: hidden;
        }
        figcaption {
          text-align: center;
          white-space: nowrap;
        }
        img,
        video {
          width: 100%;
          object-fit: contain;
        }
        .image-viewer .btn {
          position: absolute;
          transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          background-color: #555;
          color: white;
          font-size: 16px;
          padding: 12px 12px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .image-viewer:hover .btn {
          opacity: 1;
        }
        .image-viewer .btn-left {
          left: 0%;
          margin-left: 65px;
        }
        .image-viewer .btn-right {
          right: 0%;
          margin-right: 30px;
        }
        figure.selected {
          opacity: 0.5;
        }
        .duration {
          font-style: italic;
        }
        @media all and (max-width: 600px) {
          .image-viewer {
            width: 100%;
          }
          .image-viewer .btn {
            top: 33%;
          }
          .image-menu {
            width: 100%;
            overflow-y: hidden;
            overflow-x: scroll;
            display: flex;
          }
          .image-menu figure {
            margin: 0px;
            padding: 12px;
          }
        }

        @media all and (min-width: 600px) {
          .image-viewer {
            float: left;
            width: 75%;
            position: relative;
          }
          .image-viewer .btn {
            top: 40%;
          }

          .image-menu {
            width: 25%;
            height: calc(100vh - 120px);
            overflow-y: scroll;
            float: right;
          }
        }
      </style>
      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              narrow="{{narrow}}"
              show-menu="{{showMenu}}"
            ></ha-menu-button>
            <div id="main-title-bar">
              <div main-title id="main-title-text">
                {{panel.config.title}}
              </div>
            </div>
          </app-toolbar>
          <paper-tabs role="tablist" hidden$="[[hasOneTab()]]">
            <template is="dom-repeat" items="{{panel.config.tabs}}">
              <paper-tab role="tab" on-tap="switchTab">{{item.name}}</paper-tab>
            </template>
          </paper-tabs>
        </app-header>
        <div id="content" class="content">
          <div class="image-viewer">
            <figure>
              <img
                src="{{currentImage.path}}"
                hidden$="[[isVideo(currentImage.extension)]]"
              />
              <video
                controls
                src="{{currentImage.path}}#t=0.1"
                hidden$="[[!isVideo(currentImage.extension)]]"
                on-loadedmetadata="videoLoaded"
                on-canplay="startVideo"
              ></video>
              <figcaption>
                {{currentImage.date}}
                <span
                  class="duration"
                  hidden$="[[!isVideo(currentImage.extension)]]"
                ></span>
              </figcaption>
            </figure>
            <button class="btn btn-left" on-click="previousImage">
              &lt;
            </button>
            <button class="btn btn-right" on-click="nextImage">&gt;</button>
          </div>
          <div class="image-menu">
            <template is="dom-repeat" items="{{images}}">
              <figure
                id="image[[item.index]]"
                data-imageIndex="{{item.index}}"
                on-click="imageMenuClick"
                class$="[[getImageMenuClass(item, currentImageIndex)]]"
              >
                <img
                  src="{{item.path}}"
                  hidden$="[[isVideo(item.extension)]]"
                />
                <video
                  src="{{item.path}}#t=0.1"
                  hidden$="[[!isVideo(item.extension)]]"
                  on-loadedmetadata="videoLoaded"
                ></video>
                <figcaption>
                  {{item.date}}
                  <span
                    class="duration"
                    hidden$="[[!isVideo(item.extension)]]"
                  ></span>
                </figcaption>
              </figure>
            </template>
          </div>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,
      showMenu: {
        type: Boolean,
        value: false,
      },
      panel: Object,
      images: Object,
      currentImage: {
        type: Object,
        computed: "getImage(currentImageIndex)",
      },
      currentImageIndex: {
        type: Number,
        observer: "imageChanged",
      },
      autoPlayVideo: {
        type: Boolean,
        value: false,
      },
    };
  }

  imageChanged(newVal, oldVal) {
    var elt = this.$$("#image" + newVal);
    if (elt)
      elt.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
  }

  getImage(idx) {
    if (this.images !== undefined && idx !== undefined) {
      return this.images[idx];
    }
  }

  isVideo(fileExt) {
    if (fileExt) {
      return fileExt === "mp4";
    }

    return false;
  }

  hasOneTab() {
    return this.panel.config.tabs.length === 1;
  }

  imageMenuClick(e) {
    this.autoPlayVideo = true;
    this.currentImageIndex = e.model.item.index;
  }

  previousImage() {
    this.autoPlayVideo = true;
    if (this.currentImageIndex === 0)
      this.currentImageIndex = this.images.length - 1;
    else this.currentImageIndex--;
  }

  nextImage() {
    this.autoPlayVideo = true;
    if (this.currentImageIndex >= this.images.length - 1)
      this.currentImageIndex = 0;
    else this.currentImageIndex++;
  }

  switchTab(e) {
    this.loadTab(e.model.index);
  }

  ready() {
    this.loadTab(0);
  }

  loadTab(idx) {
    this.autoPlayVideo = false;
    this.images = [];
    this.currentImageIndex = null;

    var paths = this.hass.states[this.panel.config.tabs[idx].entity_id]
      .attributes.fileList;

    var lastIndex = 0;
    if (this.panel.config.tabs[idx].maximum_files != undefined) {
      var maximumFiles = this.panel.config.tabs[idx].maximum_files;
      if (maximumFiles < paths.length) {
        lastIndex = paths.length - maximumFiles;
      }
    }

    for (i = paths.length - 1; i >= lastIndex; i--) {
      var path = paths[i];
      // /config/downloads/front_door/
      // /config/www/...
      var imageLocation = path.replace("/config/www/", "/local/");
      if (path.indexOf("/config/www/") < 0)
        imageLocation = "/local/" + path.substring(path.indexOf("/www/") + 5);

      var arPath = path.split("/");

      var imageName = arPath[arPath.length - 1];

      if (imageName != "@eaDir") {
        var arFileName = imageName.split(".");
        var ext = arFileName[arFileName.length - 1].toLowerCase();
        imageName = imageName.substring(0, imageName.length - ext.length - 1);

        var imageDate = "";
        if (
          this.panel.config.tabs[idx].file_name_format === undefined ||
          this.panel.config.tabs[idx].caption_format === undefined
        )
          imageDate = imageName;
        else {
          var tokens = ["%YYY", "%m", "%d", "%H", "%M", "%S", "%p"];
          var dateFormat = this.panel.config.tabs[idx].file_name_format;
          imageDate = this.panel.config.tabs[idx].caption_format;

          var hr = 0;
          for (const token of tokens) {
            var searchIndex = dateFormat.indexOf(token);

            if (searchIndex >= 0) {
              var val = imageName.substring(
                searchIndex,
                searchIndex + token.length
              );
              if (
                token == "%H" &&
                this.panel.config.tabs[idx].caption_format.indexOf("%p") >= 0
              ) {
                hr = parseInt(val);
                if (val == "00") val = 12;
                if (parseInt(val) > 12) val = parseInt(val) - 12;
              }
              if (token == "%m" || (token == "%d") | (token == "%H"))
                val = parseInt(val);
              imageDate = imageDate.replace(token, val);
            }
          }

          imageDate = imageDate.replace("%p", hr > 11 ? "PM" : "AM");
        }

        var image = {
          path: imageLocation,
          name: imageName,
          extension: ext,
          date: imageDate,
          index: this.images.length,
        };

        this.images.push(image);
      }
    }
    this.currentImageIndex = 0;
  }

  getImageMenuClass(image, idx) {
    if (image.index === idx) return "selected";
    return "";
  }

  videoLoaded(e) {
    this.getVideoDuration(e);
  }

  getVideoDuration(e) {
    var minutes = parseInt(e.target.duration / 60);
    if (minutes < 10) minutes = "0" + minutes;

    var seconds = parseInt(e.target.duration % 60);
    seconds = "0" + seconds;
    seconds = seconds.substring(seconds.length - 2);

    e.target.parentNode.querySelector(".duration").innerHTML =
      "[" + minutes + ":" + seconds + "]";
  }

  startVideo(e) {
    if (this.autoPlayVideo) e.target.play();
  }
}

customElements.define("ha-panel-aisgalery", HaPanelAisgalery);
