function bookmarklet() {
  ((d) => {
    var css = `        :root {            background-color: #fefefe;            filter: invert(100%) hue-rotate(180deg);        }        * {            color: rgb(10, 10, 10) !important;            text-shadow: 0 0 10px rgba(0, 0, 0, .5);        }        ::selection {            background-color: rgba(255, 255, 255, .1) !important;            color: white !important;        }        a {            color: rgb(24, 88, 76) !important;        }        img,        [class*='background'],        video,        iframe,        .logo,         [class*='dark']{            filter: invert(100%) hue-rotate(180deg) saturate(100%);        }`,
      style,
      id = "dark-theme-snippet",
      ee = d.getElementById(id);
    if (null != ee) ee.parentNode.removeChild(ee);
    else {
      style = d.createElement("style");
      style.type = "text/css";
      style.id = id;
      if (style.styleSheet) style.styleSheet.cssText = css;
      else style.appendChild(d.createTextNode(css));
      (d.head || d.querySelector("head")).appendChild(style);
    }
  })(document);
}
