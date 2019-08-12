class UpcomingMediaCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      const card = document.createElement("ha-card");
      card.header = this.config.title;
      this.content = document.createElement("div");
      this.content.style.padding = "5px 10px";
      card.appendChild(this.content);
      this.appendChild(card);
    }
    // The Great Wall of Config & Defaults™
    const style = document.createElement("style");
    var service = this.config.service;
    const entity = this.config.entity || `sensor.${service}_upcoming_media`;
    if (!hass.states[entity]) {
      console.log("entity doesn't exist");
      return;
    }
    service = service ? this.config.service : this.config.entity.slice(7, 11);
    const feed = hass.states[entity].attributes;

    const view = this.config.image_style || "poster";
    const dateform = this.config.date || "mmdd";
    let icon = this.config.icon || "mdi:play";
    const icon_hide = this.config.icon == "none" ? "display:none;" : "";
    const icon_color = this.config.icon_color || "white";
    const flag_color = this.config.flag_color || "var(--primary-color)";
    const flag = this.config.flag == undefined ? true : this.config.flag;
    const timeform = {
      hour12: this.config.clock != 24,
      hour: "2-digit",
      minute: "2-digit",
    };

    const title_size = this.config.title_size || "medium";
    const line1_size =
      this.config.line1_size || this.config.line_size || "small";
    const line2_size =
      this.config.line2_size || this.config.line_size || "small";
    const line3_size =
      this.config.line3_size || this.config.line_size || "small";
    const line4_size =
      this.config.line4_size || this.config.line_size || "small";
    const tSize = (size) =>
      size == "large" ? "18" : size == "medium" ? "14" : "12";
    const size = [
      tSize(title_size),
      tSize(line1_size),
      tSize(line2_size),
      tSize(line3_size),
      tSize(line4_size),
    ];
    const defaultClr = (poster, fanart) => (view == "poster" ? poster : fanart);
    const title_color =
      this.config.title_color ||
      defaultClr("var(--primary-text-color)", "#fff");
    const line1_color =
      this.config.line1_color ||
      this.config.line_color ||
      defaultClr("var(--primary-text-color)", "#fff");
    const line2_color =
      this.config.line2_color ||
      this.config.line_color ||
      defaultClr("var(--primary-text-color)", "#fff");
    const line3_color =
      this.config.line3_color ||
      this.config.line_color ||
      defaultClr("var(--primary-text-color)", "#fff");
    const line4_color =
      this.config.line4_color ||
      this.config.line_color ||
      defaultClr("var(--primary-text-color)", "#fff");
    const accent =
      this.config.accent_color || defaultClr("var(--primary-color)", "#000");
    const border = this.config.border_color || defaultClr("#fff", "#000");
    const shadows = (conf) =>
      this.config.all_shadows == undefined
        ? conf == undefined
          ? true
          : conf
        : this.config.all_shadows;
    const boxshdw = shadows(this.config.box_shadows)
      ? view == "poster"
        ? "5px 5px 10px"
        : "3px 2px 25px"
      : "";
    const txtshdw = shadows(this.config.text_shadows) ? "1px 1px 3px" : "";
    //const rowLimit = Math.min(Object.keys(feed).length, this.config.max || 5);
    const rowLimit = 50;
    window.cardSize = rowLimit;
    let rows = 0;
    const audioType = this.config.audio_type;
    const selectedId = hass.states[this.config.entity].state;
    if (view == "poster") {
      style.textContent = `
        div._fan_fanart:hover{
          background-color:#ffc94761;
          cursor: pointer;
        }
        div._fan_fanart:hover .${service}_flag_${view} {
          fill:${flag_color};
        }
        div.itemSelected .${service}_flag_${view}{
          fill:${flag_color};
        }
        .${service}_${view} {
          width:100%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 10px;
          position: relative;
          display: inline-block;
          overflow: hidden;
        }
        .${service}_${view} ha-icon {
          top: -2px;
          right: 3px;
          z-index: 2;
          width: 17%;
          height: 17%;
          position:absolute;
          color:${icon_color};
          filter: drop-shadow( 0px 0px 1px rgba(0,0,0,1));
          ${icon_hide};
        }
        .${service}_${view} img {
          width:100%;
          visibility:hidden;
        }
        .${service}_svg_${view} {
          width:55%;
          margin-top:5%;
          margin-left:0;
          vertical-align:top;
          overflow:visible;
          z-index:1;
        }
        .${service}_container_${view} {
          position:relative;
          outline: 5px solid #fff;
          width:25%;
          outline:5px solid ${border};
          box-shadow:${boxshdw} rgba(0,0,0,.8);
          float:left;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          margin:5px 0 15px 5px;
        }
        .${service}_flag_${view} {
          z-index: 1;
          height: 100%;
          width: 100%;
          position: absolute;
          bottom: 0;
          right: 0;
        }
        .${service}_flag_${view} svg{
          float:right;
          width: 100%;
          height: 100%;
          margin:0;
          filter: drop-shadow( -1px 1px 1px rgba(0,0,0,.5));
        }
        .${service}_line0_${view} {
          font-weight:600;
          font-size:${size[0]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${title_color};
        }
        .${service}_line1_${view} {
          font-size:${size[1]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line1_color};
        }
        .${service}_line2_${view} {
          font-size:${size[2]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line2_color};
        }
        .${service}_line3_${view} {
          font-size:${size[3]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line3_color};
        }
        .${service}_line4_${view} {
          font-size:${size[4]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line4_color};
          }
      `;
    } else {
      style.textContent = `
        div._poster:hover{
          background-color:#ffc94761;
          cursor: pointer;
        }
        div._poster:hover .${service}_flag_${view} {
          fill:${flag_color};
        }
        div.itemSelected .${service}_flag_${view}{
          fill:${flag_color};
        }
        .${service}_${view} {
          width:100%;
          overflow:hidden;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 10px;
          background-repeat:no-repeat;
          background-size:auto 100%;
          box-shadow:${boxshdw} rgba(0,0,0,.8);
          position:relative;
        }
        .${service}_${view} ha-icon {
          top: 3px;
          margin-right: -39px;
          right:0;
          z-index: 2;
          width: 25%;
          height: 25%;
          position:absolute;
          color:${icon_color};
          filter: drop-shadow( 0px 0px 1px rgba(0,0,0,1));
          ${icon_hide};
        }
        .${service}_svg_${view} {
          overflow:visible;
          width:55%;
          margin-top:1%;
          margin-left:2.5%;
          alignment-baseline:text-after-edge;
        }
        .${service}_fan_${view} {
          width:100%;
          background:linear-gradient(to right, ${accent} 48%,
          transparent 70%,${accent} 100%);
          margin:auto;
          box-shadow:inset 0 0 0 3px ${border};
        }
        .${service}_flag_${view} {
          z-index: 1;
          height: 100%;
          width: 100%;
          position: absolute;
          margin-top:3px;
          margin-right:3px;
          right: 0;
        }
        .${service}_flag_${view} svg{
          float:right;
          width: 100%;
          height: 100%;
          margin:0;
          filter: drop-shadow( -1px 1px 1px rgba(0,0,0,.5));
        }
        .${service}_line0_${view} {
          font-weight:600;
          font-size:${size[0]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${title_color};
        }
        .${service}_line1_${view} {
          font-size:${size[1]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line1_color};
        }
        .${service}_line2_${view} {
          font-size:${size[2]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line2_color};
        }
        .${service}_line3_${view} {
          font-size:${size[3]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line3_color};
        }
        .${service}_line4_${view} {
          font-size:${size[4]}px;
          text-shadow:${txtshdw} rgba(0,0,0,0.9);
          fill:${line3_color};
        }
      `;
    }
    this.content.innerHTML = "";

    // Truncate text...
    function truncate(text, chars) {
      // When to truncate depending on size
      chars = chars == "large" ? 23 : chars == "medium" ? 28 : 35;
      // Remove parentheses & contents: "Shameless (US)" becomes "Shameless".
      text = text.replace(/ *\([^)]*\) */g, " ");
      // Truncate only at whole word w/ no punctuation or space before ellipsis.
      if (text.length > chars) {
        for (let i = chars; i > 0; i--) {
          if (
            text.charAt(i).match(/( |:|-|;|"|'|,)/) &&
            text.charAt(i - 1).match(/[a-zA-Z0-9_]/)
          ) {
            var truncated = `${text.substring(0, i)}...`;
            return truncated;
          }
        }
      } else {
        return text;
      }
    }

    function format_date(input_date) {
      // Match UTC ISO formatted date with time
      if (String(input_date).match(/[T]\d+[:]\d+[:]\d+[Z]/)) {
        var fd_day = new Date(input_date).toLocaleDateString([], {
          day: "2-digit",
        });
        var fd_month = new Date(input_date).toLocaleDateString([], {
          month: "2-digit",
        });
        // Match date string. ie: 2018-10-31
      } else if (String(input_date).match(/\d+[-]\d+[-]\d+/)) {
        input_date = input_date.split("-");
        fd_month = input_date[1];
        fd_day = input_date[2];
      } else {
        return "";
      }
      if (dateform == "ddmm") {
        return `${fd_day}/${fd_month}`;
      } else {
        return `${fd_month}/${fd_day}`;
      }
    }

    for (const item in feed) {
      //if (!item("airdate")) continue;
      if (rows >= rowLimit) break;
      //let airdate = new Date(item("airdate"));
      let airdate = new Date();
      let dflag = "";
      let image = feed[item]["thumbnail"];
      let item_runtime = 25;
      let daysBetween = Math.round(
        Math.abs(
          (new Date().getTime() - airdate.getTime()) / (24 * 60 * 60 * 1000)
        )
      );
      let day =
        daysBetween <= 7
          ? airdate.toLocaleDateString([], { weekday: "long" })
          : airdate.toLocaleDateString([], { weekday: "short" });
      //
      let classStatus = selectedId == rows ? "itemSelected" : "";
      let svgshdw = selectedId == rows ? "url(#grad1)" : "";

      // Format runtime as either '23 min' or '01:23' if over an hour
      let hrs = String(Math.floor(item_runtime / 60)).padStart(2, 0);
      let min = String(Math.floor(item_runtime % 60)).padStart(2, 0);
      let runtime =
        item_runtime > 0 ? (hrs > 0 ? `${hrs}:${min}` : `${min} min`) : "";

      // Shifting images for fanart view since we use poster as fallback image.
      let shiftimg = feed[item]["thumbnail"]
        ? "background-position:100% 0;background-size: 54% auto;"
        : "background-size: 54% auto;background-position:100% 35%;";

      // First item in card needs no top margin.
      if (item == "0") var top = "0px";
      else view == "poster" ? "20px" : "10px";

      let line = [
        feed[item]["title"],
        feed[item]["mediasource"],
        feed[item]["name"],
      ];
      let char = [title_size, line1_size, line2_size];

      for (let i = 0; i < line.length; i++) {
        let text = line[i];

        // Shifting header text around depending on view & size
        let svgshift, y;
        if (i == 0)
          size[i].match(/18/)
            ? (y = "-5")
            : size[i].match(/14/)
            ? (y = "-2")
            : (y = "0");
        if (view == "fanart")
          svgshift = i == 0 ? `x="0" dy="1em" ` : `x="0" dy="1.3em" `;
        else
          svgshift =
            i == 0 ? `x="15" y="${y}" dy="1.3em" ` : `x="15" dy="1.3em" `;

        // Build lines HTML or empty line
        line[i] = line[i].match("empty")
          ? `<tspan class="${service}_line${i}_${view}" style="fill:transparent;text-shadow:0 0 transparent;" ${svgshift}>.</tspan>`
          : `<tspan class="${service}_line${i}_${view}" ${svgshift}>${truncate(
              text,
              char[i]
            )}</tspan>`;
      }
      icon = feed[item]["icon"];
      if (view == "poster") {
        this.content.innerHTML += `
          <div id='ais_track' class='${service}_${view}' style='margin-top:${top};' data-id='${item}' data-audio-type='${audioType}'>
             <div class="${service}_container_${view} ${classStatus}" style="background-image:url('${image}');">
                <img src="${image}"/>
                <ha-icon icon="${icon}" style="${dflag}"></ha-icon>
                <div class="${service}_flag_${view} ${classStatus}" style="${dflag}">
                   <svg style="${dflag}" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <polygon points="100 35,60 0,100 0"></polygon>
                   </svg>
                </div>
             </div>
             <svg class='${service}_svg_${view}' viewBox="0 0 200 80">
                <defs>
                   <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:rgb(20,20,20,1);stop-opacity:1" />
                      <stop offset="2%" style="stop-color:${accent};stop-opacity:1" />
                   </linearGradient>
                </defs>
                <rect width="500px" height="23px" fill="${svgshdw}"/>
                <text>${line[0]}
                   <tspan dy="1.3em" style="font-size:3px;fill:transparent;text-shadow:0 0 transparent;">.</tspan>
                   ${line[1]}${line[2]}
                </text>
             </svg>
          </div>
        `;
      } else {
        this.content.innerHTML += `
          <div id='ais_track' class="${service}_${view} style='${top}'"
             style="${shiftimg}background-image:url('${image}')" data-id='${item}' data-audio-type='${audioType}'>
             <div class="${service}_fan_${view} ${classStatus}">
                <ha-icon icon="${icon}" style="${dflag}"></ha-icon>
                <div class="${service}_flag_${view} ${classStatus}" style="${dflag}">
                   <svg style="${dflag}" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <polygon points="100 40,88 0,100 0"></polygon>
                   </svg>
                </div>
                <svg class="${service}_svg_${view}"viewBox="0 0 200 80">
                   <text>${line[0]}${line[1]}${line[2]}</text>
                </svg>
             </div>
          </div>
        `;
      }
      rows++;
    }
    var s = this.getElementsByTagName("style");
    if (s.length == 0) {
      this.appendChild(style);
    }

    //
    const tracks = this.querySelectorAll("div#ais_track");
    tracks.forEach((track) => {
      track.addEventListener("click", (event) => {
        hass.callService("ais_cloud", "play_audio", {
          id: track.getAttribute("data-id"),
          audio_type: track.getAttribute("data-audio-type"),
        });
        track.classList.add("clicked");
      });
    });
  }
  setConfig(config) {
    if (!config.service && !config.entity)
      throw new Error("Define entity or service.");
    this.config = config;
  }
  getCardSize() {
    let view = this.config.image_style || "poster";
    return view == "poster" ? window.cardSize * 5 : window.cardSize * 3;
  }
}
customElements.define("upcoming-media-card", UpcomingMediaCard);