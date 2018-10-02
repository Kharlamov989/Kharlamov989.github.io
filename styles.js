(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/assets/scss/app.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/assets/scss/app.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */ }\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block; }\n/**\n * Add the correct display in IE 9-.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\ntemplate,\n[hidden] {\n  display: none; }\n/* Links\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0; }\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */ }\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsub {\n  bottom: -0.25em; }\nsup {\n  top: -0.5em; }\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n/**\n * Restore the font weight unset by the previous rule.\n */\noptgroup {\n  font-weight: bold; }\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n.notifier__container * {\n  box-sizing: border-box; }\n.notifier__container-list {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style-type: none; }\n.notifier__notification {\n  display: block;\n  position: fixed;\n  visibility: hidden;\n  z-index: 10000;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n.notifier__notification--material {\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  cursor: default;\n  padding-top: 11px;\n  padding-right: 26px;\n  padding-bottom: 10px;\n  padding-left: 26px; }\n.notifier__notification--material .notifier__notification-message {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: top;\n    line-height: 32px;\n    font-size: 15px; }\n.notifier__notification--material .notifier__notification-button {\n    display: inline-block;\n    transition: opacity .2s ease;\n    opacity: .5;\n    margin-right: -10px;\n    margin-left: 10px;\n    outline: none;\n    border: none;\n    background: none;\n    cursor: pointer;\n    padding: 6px;\n    width: 32px;\n    height: 32px;\n    vertical-align: top; }\n.notifier__notification--material .notifier__notification-button:hover, .notifier__notification--material .notifier__notification-button:focus {\n      opacity: 1; }\n.notifier__notification--material .notifier__notification-button:active {\n      -webkit-transform: scale(0.82);\n              transform: scale(0.82);\n      opacity: 1; }\n.notifier__notification--default {\n  background-color: #444;\n  color: #FFF; }\n.notifier__notification--default .notifier__notification-button-icon {\n    fill: #FFF; }\n.notifier__notification--error {\n  background-color: #D9534F;\n  color: #FFF; }\n.notifier__notification--error .notifier__notification-button-icon {\n    fill: #FFF; }\n.notifier__notification--info {\n  background-color: #5BC0DE;\n  color: #FFF; }\n.notifier__notification--info .notifier__notification-button-icon {\n    fill: #FFF; }\n.notifier__notification--success {\n  background-color: #5CB85C;\n  color: #FFF; }\n.notifier__notification--success .notifier__notification-button-icon {\n    fill: #FFF; }\n.notifier__notification--warning {\n  background-color: #F0AD4E;\n  color: #FFF; }\n.notifier__notification--warning .notifier__notification-button-icon {\n    fill: #FFF; }\n.icon {\n  display: inline-flex;\n  align-self: center;\n  width: 1em;\n  height: 1em;\n  position: relative; }\n.icon__svg {\n    width: 1em;\n    height: 1em; }\n.icon--baseline .icon__svg {\n    position: absolute;\n    bottom: -0.125em; }\n.icon__table {\n    font-size: 20px; }\n.icon__table--blue {\n      fill: #485db9; }\n.icon__table--green {\n      fill: green; }\n.icon--medium {\n    font-size: 16px; }\n.loader {\n  display: inline-flex;\n  align-self: center;\n  width: 1em;\n  height: 1em;\n  font-size: inherit;\n  position: relative; }\n.loader__svg {\n    width: 1em;\n    height: 1em;\n    position: absolute;\n    bottom: -0.125em; }\n.loader__cyrcle {\n    fill: #b7babd; }\n.loader__runner {\n    fill: #2c3e50; }\n.loader--large {\n    font-size: 25px; }\n.table-loader {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  margin: 0 -4px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  color: #333; }\n.table-loader__layout {\n    display: block;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    padding: 0 4px; }\n.table-loader__layout--loader {\n      display: none; }\n.table-loader__loader {\n    font-size: 26px; }\n.table-loader--load .table-loader__layout--loader {\n    display: block; }\n.sub-text {\n  display: inline;\n  box-sizing: border-box;\n  font-size: inherit;\n  color: #333; }\n.sub-text--400 {\n    font-weight: 400; }\n.sub-text--primary {\n    color: #5a80a5; }\n.sub-text--secondary {\n    color: #888888; }\n.sub-text--tertiary {\n    color: #999; }\n.sub-text--yellow {\n    color: #d4d400; }\n.sub-text--logo-yellow {\n    color: #ffcc00; }\n.sub-text--warning {\n    color: #d35400; }\n.sub-text--alert {\n    color: #990000; }\n.sub-text--success {\n    color: #008000; }\n.sub-text--complite {\n    color: #006600; }\n.sub-text--emerald {\n    color: #138871; }\n.sub-text--purple {\n    color: #8E44AD; }\n.sub-text--error {\n    color: #ff0000; }\n.sub-text--nowrap {\n    white-space: nowrap; }\n.bold {\n  font-weight: 700; }\n.link {\n  display: inline;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #5a80a5;\n  transition: -webkit-text-decoration 0.25s ease-out;\n  transition: text-decoration 0.25s ease-out;\n  transition: text-decoration 0.25s ease-out, -webkit-text-decoration 0.25s ease-out;\n  text-decoration: none; }\n.link:focus, .link:hover {\n    text-decoration: none; }\n.link:visited {\n    color: #5a80a5; }\n.link--asc {\n    display: inline-block;\n    box-sizing: border-box;\n    padding-right: 1em;\n    position: relative;\n    white-space: nowrap; }\n.link--asc:before {\n      content: '';\n      display: block;\n      width: 1em;\n      height: 1em;\n      background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg width%3D%22100%25%22 height%3D%22100%25%22 viewBox%3D%220 0 2134 2134%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 xml%3Aspace%3D%22preserve%22 style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A1.41421%3B%22%3E%0D    %3Cg transform%3D%22matrix(63.2602%2C0%2C0%2C63.2602%2C632.987%2C18.3193)%22%3E%0D            %3Cpath d%3D%22M13.661%2C8.804C13.554%2C9.03 13.381%2C9.143 13.143%2C9.143L9.143%2C9.143L9.143%2C31.429C9.143%2C31.596 9.089%2C31.733 8.982%2C31.84C8.875%2C31.947 8.738%2C32.001 8.571%2C32.001L5.142%2C32.001C4.975%2C32.001 4.838%2C31.947 4.731%2C31.84C4.624%2C31.733 4.57%2C31.596 4.57%2C31.429L4.57%2C9.143L0.57%2C9.143C0.32%2C9.143 0.147%2C9.03 0.052%2C8.804C-0.043%2C8.578 -0.014%2C8.37 0.141%2C8.179L6.391%2C1.322C6.51%2C1.203 6.647%2C1.143 6.802%2C1.143C6.969%2C1.143 7.112%2C1.203 7.231%2C1.322L13.57%2C8.179C13.725%2C8.37 13.754%2C8.578 13.659%2C8.804L13.661%2C8.804Z%22 style%3D%22fill-rule%3Anonzero%3B fill%3A%235a80a5%3B%22%2F%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\n      background-repeat: no-repeat;\n      background-position: 0 0;\n      position: absolute;\n      top: 1px;\n      right: 0; }\n.link--desc {\n    display: inline-block;\n    box-sizing: border-box;\n    padding-right: 1em;\n    position: relative;\n    white-space: nowrap; }\n.link--desc:before {\n      content: '';\n      display: block;\n      width: 1em;\n      height: 1em;\n      background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg width%3D%22100%25%22 height%3D%22100%25%22 viewBox%3D%220 0 2134 2134%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 xml%3Aspace%3D%22preserve%22 style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A1.41421%3B%22%3E%0D    %3Cg transform%3D%22matrix(-63.2602%2C-7.74714e-15%2C7.74714e-15%2C-63.2602%2C1500.35%2C2115.01)%22%3E%0D        %3Cpath d%3D%22M13.661%2C8.804C13.554%2C9.03 13.381%2C9.143 13.143%2C9.143L9.143%2C9.143L9.143%2C31.429C9.143%2C31.596 9.089%2C31.733 8.982%2C31.84C8.875%2C31.947 8.738%2C32.001 8.571%2C32.001L5.142%2C32.001C4.975%2C32.001 4.838%2C31.947 4.731%2C31.84C4.624%2C31.733 4.57%2C31.596 4.57%2C31.429L4.57%2C9.143L0.57%2C9.143C0.32%2C9.143 0.147%2C9.03 0.052%2C8.804C-0.043%2C8.578 -0.014%2C8.37 0.141%2C8.179L6.391%2C1.322C6.51%2C1.203 6.647%2C1.143 6.802%2C1.143C6.969%2C1.143 7.112%2C1.203 7.231%2C1.322L13.57%2C8.179C13.725%2C8.37 13.754%2C8.578 13.659%2C8.804L13.661%2C8.804Z%22 style%3D%22fill-rule%3Anonzero%3Bfill%3A%235a80a5%22%2F%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\n      background-repeat: no-repeat;\n      background-position: 0 0;\n      position: absolute;\n      top: 1px;\n      right: 0; }\n.link--external {\n    text-decoration: none;\n    color: #666; }\n.link--external:focus, .link--external:hover {\n      text-decoration: underline; }\n.link--external:visited {\n      color: #666; }\n.link--secondary {\n    color: #666; }\n.link__table {\n    display: block;\n    box-sizing: border-box;\n    position: absolute;\n    cursor: pointer;\n    font-size: 13px;\n    text-decoration: none;\n    color: #105A83;\n    transition: background-color 0.25s ease-out; }\n.link__table:visited {\n      color: #105A83; }\n.link__table:focus, .link__table:hover {\n      background-color: #e4eaed; }\n.select {\n  display: block;\n  flex: 1 1 auto;\n  width: 100%;\n  height: 28px;\n  box-sizing: border-box;\n  padding: 4px;\n  border: solid 1px #ccc;\n  outline: none;\n  font-size: 12px;\n  line-height: 1;\n  color: #333;\n  transition: border-color 0.25s ease-out; }\n.select:focus, .select:hover {\n    border-color: #999; }\n.select--medium {\n    width: 200px; }\n.input {\n  display: block;\n  flex: 1 1 auto;\n  width: 100%;\n  height: 33px;\n  box-sizing: border-box;\n  padding: 4px;\n  border: solid 1px #ccc;\n  outline: none;\n  font-size: 12px;\n  line-height: 1;\n  color: #333;\n  transition: border-color 0.25s ease-out; }\n.input:focus, .input:hover {\n    border-color: #999; }\n.icon-input {\n  display: block;\n  box-sizing: border-box;\n  position: relative; }\n.icon-input__input {\n    height: 42px;\n    border: solid 3px #30353d;\n    padding-left: 45px;\n    background-color: #d8dbe0;\n    font-size: 14px;\n    transition: background-color 0.25s ease-out; }\n.icon-input__input:hover, .icon-input__input:focus {\n      border-color: #30353d;\n      background-color: #fff; }\n.icon-input__icon {\n    display: block;\n    width: 36px;\n    height: 28px;\n    border-right: solid 1px #a0a8b4;\n    position: absolute;\n    top: 8px;\n    left: 4px;\n    font-size: 18px;\n    line-height: 33px;\n    text-align: center;\n    fill: #798495; }\n.textarea {\n  display: block;\n  width: 100%;\n  height: 60px;\n  max-height: 350px;\n  box-sizing: border-box;\n  padding: 8px;\n  margin: 0;\n  border-radius: 0;\n  border: 1px solid #ccc;\n  outline: none;\n  font-size: 14px;\n  color: #000;\n  resize: vertical;\n  transition: border-color .25s ease-out; }\n.textarea:focus, .textarea:hover {\n    border-color: #999; }\n.textarea--large {\n    width: 600px; }\n.label {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  font-size: 12px;\n  color: #333; }\n.label__checkbox {\n    flex: 0 0 auto;\n    align-self: flex-start;\n    position: relative;\n    bottom: -0.25em; }\n.label__title {\n    display: block;\n    box-sizing: border-box;\n    margin-bottom: 4px;\n    font-size: inherit;\n    line-height: 1;\n    color: inherit; }\n.label--no-title {\n    padding-top: 17px; }\n.label--control {\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: inherit; }\n.label--control .label__title {\n      margin-bottom: 0;\n      margin-left: 8px; }\n.field {\n  display: block;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  font-size: 14px;\n  color: #333; }\n.field__item {\n    display: block;\n    box-sizing: border-box;\n    margin-bottom: 2px;\n    font-size: inherit;\n    line-height: 1.2;\n    color: inherit; }\n.field__item:last-child {\n      margin-bottom: 0; }\n.field__item--large-mb {\n      margin-bottom: 8px; }\n.field__label {\n    display: inline-block;\n    border-radius: 5px;\n    padding: 5px 8px;\n    margin: 5px 0px; }\n.field__label--yellow {\n      background-color: #fce8aa; }\n.field__label--purple {\n      background-color: #c2c7e3; }\n.field__label--pink {\n      background-color: #ffcccc; }\n.field__button {\n    display: block;\n    box-sizing: border-box;\n    margin: 10px 0; }\n.field__title {\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 1.2;\n    color: inherit; }\n.field--history {\n    font-size: 12px; }\n.field--menu {\n    color: #fff;\n    font-size: 12px;\n    position: relative;\n    top: 3px;\n    cursor: pointer; }\n.list {\n  display: block;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n.list__layout {\n    display: block;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 4px; }\n.list__layout:last-child {\n      margin-bottom: 0; }\n.list__link {\n    display: block;\n    box-sizing: border-box;\n    padding: 8px;\n    cursor: pointer;\n    font-size: 13px;\n    text-decoration: none;\n    color: #105A83;\n    transition: background-color 0.25s ease-out; }\n.list__link:visited {\n      color: #105A83; }\n.list__link:focus, .list__link:hover {\n      background-color: #e4eaed; }\n.list__label {\n    padding: 8px;\n    background-color: #fff;\n    transition: background-color .25s ease-out; }\n.list__label:focus, .list__label:hover {\n      background-color: #f1f4f8; }\n.list--primary .list__layout {\n    margin-bottom: 0;\n    border-bottom: solid 1px #ccc; }\n.list--primary .list__layout:last-child {\n      border-bottom: none; }\n.list--secondary {\n    padding: 8px;\n    padding-left: 22px; }\n.list--secondary .list__layout {\n      margin-bottom: 8px; }\n.list--secondary .list__layout:last-child {\n        margin-bottom: 0; }\n.list--control .list__layout {\n    margin-bottom: 8px; }\n.list--control .list__layout:last-child {\n      margin-bottom: 0; }\n.list--inline {\n    margin-bottom: -4px; }\n.list--inline .list__layout {\n      display: inline-block;\n      margin-right: 4px;\n      margin-bottom: 4px; }\n.attribute {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 4px 17px 4px 4px;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  position: relative;\n  font-size: 12px;\n  text-overflow: ellipsis;\n  text-align: left; }\n.attribute__badge {\n    display: block;\n    box-sizing: border-box;\n    padding: 1px 4px;\n    border: 1px solid #f60;\n    background-color: #fff;\n    z-index: 3;\n    font-size: 9px;\n    font-weight: 700;\n    color: #f60;\n    position: absolute;\n    top: -1px;\n    right: -1px; }\n.attribute--cat-red {\n    background-color: #f96363;\n    border-color: #f72828; }\n.attribute--cat-orange {\n    background-color: #f9b049;\n    border-color: #ef7b23; }\n.attribute--cat-yellow {\n    background-color: #fdff84;\n    border-color: #e7ea2b; }\n.callout {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  flex: 1 1 auto;\n  height: auto;\n  min-height: 60px;\n  box-sizing: border-box;\n  padding: 8px;\n  margin: 4px 0;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  font-size: 13px;\n  text-align: center;\n  color: #333; }\n.callout--primary {\n    border-color: #85bbd8;\n    background-color: #e1ecf2;\n    color: #1F4961; }\n.screenshot {\n  display: block;\n  width: 48px;\n  height: 48px;\n  box-sizing: border-box;\n  border: solid 1px #ccc;\n  overflow: hidden;\n  position: relative; }\n.screenshot__img {\n    display: block;\n    width: 100%;\n    height: 100%; }\n.screenshot__link {\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.warning {\n  font-size: 14px;\n  padding: 5px 10px;\n  background-color: #fcf3ca; }\n.group-input {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 1 1 auto;\n  box-sizing: border-box; }\n.group-input__input {\n    height: 42px;\n    padding: 0.5rem;\n    margin-bottom: -1px;\n    border: 0;\n    border: solid 1px #cccccc;\n    border-radius: 3px 3px 0 0;\n    font-size: 0.875rem; }\n.group-input__input:hover, .group-input__input:focus {\n      z-index: 1; }\n.group-input__input--last {\n      margin-bottom: 0;\n      border-radius: 0 0 3px 3px; }\n.button {\n  display: inline-block;\n  flex: 0 0 auto;\n  box-sizing: border-box;\n  padding: 7px 8px;\n  margin: 0;\n  border: solid 1px #ccc;\n  border-radius: 3px;\n  background-color: #f2f2f2;\n  box-shadow: inset 0px 1px 0px 0px white;\n  outline: none;\n  fill: #333;\n  font-size: 14px;\n  line-height: 1;\n  color: #333;\n  transition: background-color 0.25s ease-out, \r border-color 0.25s ease-out, \r color 0.25s ease-out; }\n.button:hover, .button:focus {\n    outline: none;\n    cursor: pointer;\n    border-color: #999;\n    background-color: #fff;\n    fill: #333; }\n.button:active {\n    background-color: #ccc;\n    box-shadow: inset 0px 3px 6px -2px rgba(102, 102, 102, 0.36); }\n.button:disabled {\n    pointer-events: none;\n    color: #999; }\n.button:disabled .button__icon {\n      fill: #999; }\n.button__icon {\n    transition: fill 0.25s ease-out; }\n.button--primary {\n    border: solid 1px #34495f;\n    box-shadow: inset 0 0 0 0 #7b99b7;\n    background-color: #31588a;\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.64);\n    color: #fff;\n    transition: border-color 0.25s ease-out; }\n.button--primary:focus, .button--primary:hover {\n      border-color: #34495f;\n      background-color: #496785; }\n.button--primary:active {\n      border-color: #263646;\n      box-shadow: inset 0 5px 7px -2px #2c3d50;\n      background-color: #3e5771; }\n.button--primary:disabled {\n      pointer-events: none;\n      box-shadow: inset 0 1px 0 0 #7b99b7;\n      background-color: #466380;\n      color: #7B99B7; }\n.button--warning {\n    border: solid 1px #d58b42;\n    background-color: #fde38a;\n    box-shadow: inset 0px 1px 0px 0px #ffff99;\n    fill: #704327;\n    color: #704327; }\n.button--warning:hover, .button--warning:focus {\n      border-color: #cc7c2d;\n      background-color: #fde9a2;\n      fill: #704327; }\n.button--warning:active {\n      background-color: #d9a05b;\n      border-color: #b77028;\n      box-shadow: inset 0px 3px 6px -2px #d18d3a; }\n.button--warning:disabled {\n      pointer-events: none;\n      color: #947562; }\n.button--warning:disabled .button__icon {\n        fill: #947562; }\n.button--small-icon {\n    padding: 8px 9px;\n    font-size: 9px; }\n.dropdown {\n  display: inline-flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 0 0 auto;\n  box-sizing: border-box;\n  position: relative; }\n.dropdown__button {\n    position: relative;\n    flex: inherit;\n    outline: none;\n    cursor: pointer;\n    pointer-events: all;\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: transparent; }\n.dropdown__pane {\n    display: block;\n    min-width: 330px;\n    box-sizing: border-box;\n    padding: 8px;\n    border: solid 1px #ccc;\n    border-radius: 3px;\n    box-shadow: 0px 2px 54px rgba(0, 0, 0, 0.25);\n    background-color: #fff;\n    z-index: 1;\n    position: absolute;\n    top: 25px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    z-index: 2; }\n.dropdown__list {\n    border: solid 1px #ccc; }\n.dropdown--nav {\n    display: flex;\n    flex: 1 1 auto; }\n.dropdown--nav .dropdown__button {\n      padding-right: 42px;\n      padding-left: 16px;\n      position: relative; }\n.dropdown--nav .dropdown__button:before {\n        content: '';\n        display: block;\n        width: 10px;\n        height: 100%;\n        background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg width%3D%22100%25%22 height%3D%22100%25%22 viewBox%3D%220 0 2134 2134%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 xml%3Aspace%3D%22preserve%22 style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A1.41421%3B%22%3E%3Cpath id%3D%22Icon%22 d%3D%22M1066.67%2C1616c-33.04%2C0 -61.666%2C-12.07 -85.877%2C-36.209l-854.494%2C-854.495c-24.14%2C-24.139 -36.21%2C-52.765 -36.21%2C-85.877c0%2C-33.111 12.07%2C-61.737 36.21%2C-85.876c24.139%2C-24.14 52.765%2C-36.21 85.876%2C-36.21l1708.99%2C0c33.04%2C0 61.666%2C12.07 85.877%2C36.21c24.21%2C24.139 36.28%2C52.765 36.209%2C85.876c-0.071%2C33.112 -12.141%2C61.738 -36.209%2C85.877l-854.495%2C854.495c-24.14%2C24.139 -52.765%2C36.209 -85.877%2C36.209l0%2C0Z%22 style%3D%22fill%3A%23ffffff%3Bfill-rule%3Anonzero%3B%22%2F%3E%3C%2Fsvg%3E\");\n        background-repeat: no-repeat;\n        background-position: 0 50%;\n        position: absolute;\n        top: 0;\n        right: 16px; }\n.dropdown--nav .dropdown__bars {\n      padding-right: 42px;\n      padding-left: 16px;\n      position: relative; }\n.dropdown--nav .dropdown__bars:before {\n        content: '';\n        display: block;\n        width: 15px;\n        height: 100%;\n        background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%0D%3Csvg%0D   xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%0D   xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%0D   xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%0D   xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0D   xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0D   xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22%0D   xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22%0D   width%3D%22100%25%22%0D   height%3D%22100%25%22%0D   viewBox%3D%220 0 31 31%22%0D   version%3D%221.1%22%0D   xml%3Aspace%3D%22preserve%22%0D   style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-miterlimit%3A100%3B%22%0D   id%3D%22svg29%22%0D   sodipodi%3Adocname%3D%22icon--bars.svg%22%0D   inkscape%3Aversion%3D%220.92.1 r15371%22%3E%3Cmetadata%0D     id%3D%22metadata35%22%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%0D         rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%0D           rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22 %2F%3E%3Cdc%3Atitle%3E%3C%2Fdc%3Atitle%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cdefs%0D     id%3D%22defs33%22 %2F%3E%3Csodipodi%3Anamedview%0D     pagecolor%3D%22%23ffffff%22%0D     bordercolor%3D%22%23666666%22%0D     borderopacity%3D%221%22%0D     objecttolerance%3D%2210%22%0D     gridtolerance%3D%2210%22%0D     guidetolerance%3D%2210%22%0D     inkscape%3Apageopacity%3D%220%22%0D     inkscape%3Apageshadow%3D%222%22%0D     inkscape%3Awindow-width%3D%221920%22%0D     inkscape%3Awindow-height%3D%221001%22%0D     id%3D%22namedview31%22%0D     showgrid%3D%22false%22%0D     inkscape%3Azoom%3D%2221.532542%22%0D     inkscape%3Acx%3D%2210.643153%22%0D     inkscape%3Acy%3D%2215.349675%22%0D     inkscape%3Awindow-x%3D%22-9%22%0D     inkscape%3Awindow-y%3D%22-9%22%0D     inkscape%3Awindow-maximized%3D%221%22%0D     inkscape%3Acurrent-layer%3D%22svg29%22 %2F%3E%3Cpath%0D     id%3D%22path4495%22%0D     d%3D%22m 29.575758%2C23.710859 v 2.34596 q 0%2C0.476523 -0.348228%2C0.824751 -0.348228%2C0.348229 -0.824752%2C0.348229 H 2.5972218 q -0.4765232%2C0 -0.8247516%2C-0.348229 -0.3482283%2C-0.348228 -0.3482283%2C-0.824751 v -2.34596 q 0%2C-0.476523 0.3482283%2C-0.824752 0.3482284%2C-0.348228 0.8247516%2C-0.348228 H 28.402778 q 0.476524%2C0 0.824752%2C0.348228 0.348228%2C0.348229 0.348228%2C0.824752 z m 0%2C-9.383839 v 2.34596 q 0%2C0.476523 -0.348228%2C0.824751 -0.348228%2C0.348229 -0.824752%2C0.348229 H 2.5972218 q -0.4765232%2C0 -0.8247516%2C-0.348229 Q 1.4242419%2C17.149503 1.4242419%2C16.67298 v -2.34596 q 0%2C-0.476523 0.3482283%2C-0.824752 Q 2.1206986%2C13.15404 2.5972218%2C13.15404 H 28.402778 q 0.476524%2C0 0.824752%2C0.348228 0.348228%2C0.348229 0.348228%2C0.824752 z m 0%2C-9.3838387 v 2.3459596 q 0%2C0.4765231 -0.348228%2C0.8247515 -0.348228%2C0.3482285 -0.824752%2C0.3482285 H 2.5972218 q -0.4765232%2C0 -0.8247516%2C-0.3482285 Q 1.4242419%2C7.765664 1.4242419%2C7.2891409 V 4.9431813 q 0%2C-0.4765229 0.3482283%2C-0.8247512 Q 2.1206986%2C3.7702012 2.5972218%2C3.7702012 H 28.402778 q 0.476524%2C0 0.824752%2C0.3482289 0.348228%2C0.3482283 0.348228%2C0.8247512 z%22%0D     inkscape%3Aconnector-curvature%3D%220%22%0D     style%3D%22stroke-width%3A0.01832781%3Bfill%3A%23ffffff%3Bfill-opacity%3A1%22 %2F%3E%3C%2Fsvg%3E\");\n        background-repeat: no-repeat;\n        background-position: 0 50%;\n        position: absolute;\n        top: 0;\n        right: 16px; }\n.dropdown--nav .dropdown__pane {\n      display: none;\n      width: 100%;\n      padding: 8px;\n      top: 50px;\n      left: 140px; }\n.dropdown--active .dropdown__pane {\n    display: block; }\n.group-button {\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  flex: 0 0 auto;\n  box-sizing: border-box;\n  border-radius: 3px;\n  overflow: hidden; }\n.group-button__button {\n    border-radius: 0;\n    margin-right: -1px;\n    z-index: 0; }\n.group-button__button:hover {\n      z-index: 1; }\n.group-button__button:first-child {\n      border-radius: 3px 0 0 3px; }\n.group-button__button:last-child {\n      margin-right: 0;\n      border-radius: 0 3px 3px 0; }\n.column {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  margin: 0 -4px; }\n.column__col {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    padding: 0 4px; }\n.column__col--1 {\n      flex: 0 0 12.5%;\n      max-width: 12.5%; }\n.column__col--2 {\n      flex: 0 0 25%;\n      max-width: 25%; }\n.column__col--3 {\n      flex: 0 0 37.5%;\n      max-width: 37.5%; }\n.column__col--4 {\n      flex: 0 0 50%;\n      max-width: 50%; }\n.column__col--5 {\n      flex: 0 0 62.5%;\n      max-width: 62.5%; }\n.column__col--6 {\n      flex: 0 0 75%;\n      max-width: 75%; }\n.column__col--7 {\n      flex: 0 0 87.5%;\n      max-width: 87.5%; }\n.column__col--8 {\n      flex: 0 0 100%;\n      max-width: 100%; }\n.column--wrap {\n    flex-wrap: wrap; }\n.form {\n  display: block;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  padding: 8px;\n  margin: 0;\n  background-color: #fff; }\n.form__title {\n    display: block;\n    box-sizing: border-box;\n    font-size: 14px;\n    font-weight: 700;\n    color: #333; }\n.form__title {\n    display: block;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 8px;\n    font-size: 16px;\n    font-weight: 700; }\n.form__field {\n    display: block;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 8px;\n    font-size: 14px; }\n.form__field:last-child {\n      margin-bottom: 0; }\n.form__button {\n    padding: 11px 17px;\n    border-radius: 0;\n    font-size: 14px; }\n.form--login {\n    width: 400px;\n    flex: 0 0 auto;\n    background-color: transparent; }\n.form--login .form__title {\n      text-transform: uppercase;\n      color: #fff; }\n.table {\n  display: table;\n  width: 100%;\n  height: auto;\n  border: solid 1px #ccc;\n  border-spacing: 0;\n  border-collapse: collapse;\n  background-color: #fff;\n  font-size: 14px;\n  color: #333; }\n.table__thead {\n    display: table-header-group; }\n.table__tbody {\n    display: table-row-group; }\n.table__tbody--border {\n      border-top: 5px solid #f2f2f2;\n      border-bottom: 5px solid #f2f2f2; }\n.table__tbody--sub {\n      border: 1px solid #ddd; }\n.table__row {\n    display: table-row; }\n.table__row--checked .table__td {\n      background-color: #ffffcc; }\n.table__row--border {\n      border: 1px solid #ccc; }\n.table__row--loader {\n      display: none !important; }\n.table__th {\n    display: table-cell;\n    padding: 4px 8px;\n    background-color: #f2f2f2;\n    vertical-align: middle;\n    font-weight: 400;\n    white-space: nowrap;\n    text-align: left; }\n.table__th--tiny {\n      width: 1%; }\n.table__th--control-bar {\n      width: 30%; }\n.table__th--align-center {\n      text-align: center; }\n.table__th--medium {\n      width: 400px; }\n.table__td {\n    position: relative;\n    display: table-cell;\n    padding: 8px;\n    border-top: solid 1px #ccc;\n    border-bottom: solid 1px #ccc;\n    font-weight: 400;\n    text-align: left;\n    transition: background-color 0.25s ease-out;\n    position: relative; }\n.table__td--align-center {\n      text-align: center; }\n.table__td--date {\n      width: 150px; }\n.table__td--medium {\n      width: 400px; }\n.table__td--nowrap {\n      white-space: nowrap; }\n.table__td--top {\n      vertical-align: top; }\n.table__td--padding-top {\n      padding-top: 20px; }\n.table__td__loader {\n      font-size: 28px; }\n.table__td--line:after {\n      content: \"\";\n      position: absolute;\n      right: 0;\n      z-index: 100;\n      top: 0;\n      width: 1px;\n      height: 50%;\n      /* or 100px */\n      background: #ddd; }\n.table--secondary .table__row {\n    display: table-row; }\n.table--secondary .table__row:hover .table__td {\n      background-color: #fff; }\n.table--secondary .table__th {\n    border: solid 1px #ccc; }\n.table--secondary .table__td {\n    border: solid 1px #ccc; }\n.table--tertiary {\n    border: 0; }\n.table--tertiary .table__row {\n      display: table-row; }\n.table--tertiary .table__row:hover .table__td {\n        background-color: #fff; }\n.table--tertiary .table__th {\n      border: 0; }\n.table--tertiary .table__td {\n      border: 0; }\n.table--tertiary .table__td--border {\n        border-right: 1px solid #ddd; }\n.table--small {\n    margin-top: 10px; }\n.table--small .table__td {\n      padding: 2px 8px; }\n.table--load .table__row--loader {\n    display: table-row !important; }\n.table--load .table__row--content {\n    display: none !important; }\n.search {\n  display: block;\n  width: 230px;\n  height: 28px;\n  box-sizing: border-box;\n  position: relative; }\n.search__input {\n    display: block;\n    width: 100%;\n    height: 28px;\n    box-sizing: border-box;\n    padding: 0 24px 0 8px;\n    border: solid 1px #ccc;\n    outline: none;\n    font-size: 14px;\n    line-height: 1;\n    color: #333;\n    transition: border-color 0.25s ease-out; }\n.search__input:focus, .search__input:hover {\n      border-color: #999; }\n.search__input:focus .search__button, .search__input:hover .search__button {\n        fill: #999; }\n.search__button {\n    display: block;\n    padding: 6px 8px;\n    border: none;\n    background-color: transparent;\n    fill: #aaa;\n    box-shadow: none;\n    font-size: 14px;\n    position: absolute;\n    top: 50%;\n    right: 1px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n.search__button:hover, .search__button:focus {\n      background-color: transparent; }\n.search__button:active {\n      background-color: transparent;\n      box-shadow: none; }\n.date {\n  display: block;\n  width: 100%;\n  height: 28px;\n  box-sizing: border-box;\n  padding: 0;\n  border: solid 1px #ccc;\n  background-color: #fff;\n  outline: none;\n  font-size: 12px;\n  line-height: 1;\n  color: #333;\n  position: relative;\n  transition: border-color 0.25s ease-out; }\n.date:focus, .date:hover {\n    border-color: #999; }\n.date:focus .search__button, .date:hover .search__button {\n      fill: #999; }\n.date__input {\n    padding: 4px 24px 4px 4px;\n    border: 0;\n    background-color: transparent;\n    z-index: 2;\n    position: relative; }\n.date__icon {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    flex: 0 0 auto;\n    width: 24px;\n    height: 24px;\n    box-sizing: border-box;\n    position: absolute;\n    top: 1px;\n    right: 1px;\n    fill: #999; }\n.risk-group-informer {\n  display: block;\n  box-sizing: border-box;\n  position: relative; }\n.risk-group-informer__button {\n    display: block;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: transparent;\n    font-size: 12px;\n    text-decoration: underline;\n    color: #666; }\n.risk-group-informer__button:focus, .risk-group-informer__button:hover {\n      text-decoration: none; }\n.risk-group-informer__popup {\n    display: none;\n    width: 280px;\n    box-sizing: border-box;\n    padding: 8px;\n    border: solid 1px #aaa;\n    border-radius: 3px;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2785);\n    background-color: #fff;\n    z-index: 1;\n    position: absolute;\n    top: 24px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n.risk-group-informer__popup:before {\n      content: '';\n      display: block;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 0 8px 8px 8px;\n      border-color: transparent transparent #aaa transparent;\n      position: absolute;\n      top: -9px;\n      left: 50%;\n      z-index: 0;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n.risk-group-informer__popup:after {\n      content: '';\n      display: block;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 0 8px 8px 8px;\n      border-color: transparent transparent #fff transparent;\n      position: absolute;\n      top: -8px;\n      left: 50%;\n      z-index: 1;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n.risk-group-informer--primary .risk-group-informer__button {\n    color: #5a80a5; }\n.risk-group-informer--secondary .risk-group-informer__button {\n    color: #999; }\n.risk-group-informer--warning .risk-group-informer__button {\n    color: #d35400; }\n.risk-group-informer--allert .risk-group-informer__button {\n    color: #990000; }\n.risk-group-informer--active .risk-group-informer__popup {\n    display: block; }\n.status-checker {\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 0 0 auto;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 11px;\n  font-weight: 700; }\n.status-checker__status {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    border: solid 1px #ccc;\n    border-radius: 3px 0 0 3px;\n    padding: 3px 10px;\n    margin-right: -1px;\n    background-color: #fff;\n    text-transform: lowercase;\n    color: #666; }\n.status-checker__button {\n    padding: 3px 6px;\n    border-radius: 0 3px 3px 0;\n    font-size: 11px; }\n.status-checker__button:hover {\n      z-index: 1; }\n.status-checker--available .status-checker__status {\n    color: #4d7429; }\n.status-checker--banned .status-checker__status {\n    color: #ff0000; }\n.status-checker--deleted .status-checker__status {\n    color: #990000; }\n.status-checker--error .status-checker__status {\n    color: #990000; }\n.status-checker--invalid_url .status-checker__status {\n    color: #d35400; }\n.status-checker--pending .status-checker__status {\n    color: #8E44AD; }\n.status-checker--server_error .status-checker__status {\n    color: #990000; }\n.status-checker--unavailable .status-checker__status {\n    color: #990000; }\n.status-checker--unknown .status-checker__status {\n    color: #990000; }\n.counter-of-complaint {\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 0 0 auto;\n  box-sizing: border-box;\n  padding: 4px 0;\n  margin: 0;\n  border: solid 1px #ccc;\n  border-radius: 3px;\n  background-color: #fff;\n  font-size: 12px; }\n.counter-of-complaint__layout {\n    display: inline-flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    padding: 0 4px; }\n.counter-of-complaint__layout--divider {\n      width: 1px;\n      padding: 0;\n      background-color: #ccc; }\n.comment-viewer {\n  display: block;\n  box-sizing: border-box;\n  max-width: 300px;\n  padding: 0;\n  margin: 0;\n  font-size: 11px;\n  word-break: break-all;\n  position: relative; }\n.comment-viewer:hover {\n    cursor: pointer; }\n.comment-viewer__comment {\n    display: block;\n    width: 220px;\n    height: auto;\n    max-height: 60px;\n    line-height: 1.2; }\n.comment-viewer__popup {\n    display: none;\n    width: 320px;\n    height: 160px;\n    box-sizing: border-box;\n    padding: 8px;\n    border: solid 1px #ccc;\n    background-color: #fff;\n    position: absolute;\n    top: -12px;\n    left: -12px;\n    z-index: 2; }\n.comment-viewer__textarea {\n    display: block;\n    width: 100%;\n    height: 120px;\n    box-sizing: border-box;\n    margin-bottom: 8px;\n    border: solid 1px #ccc;\n    font-size: 11px;\n    color: #333; }\n.comment-viewer--active .comment-viewer__popup {\n    display: block; }\n.screenshot-viewer {\n  display: block;\n  box-sizing: border-box;\n  position: relative; }\n.screenshot-viewer__button {\n    padding: 2px 4px;\n    background-color: #fff;\n    font-size: 11px;\n    color: #666; }\n.screenshot-viewer__popup {\n    display: none;\n    width: 240px;\n    box-sizing: border-box;\n    padding: 8px;\n    border: solid 1px #aaa;\n    border-radius: 3px;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2785);\n    background-color: #fff;\n    z-index: 1;\n    position: absolute;\n    top: 24px;\n    left: 0; }\n.screenshot-viewer__popup:before {\n      content: '';\n      display: block;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 0 8px 8px 8px;\n      border-color: transparent transparent #aaa transparent;\n      position: absolute;\n      top: -8px;\n      left: 39px;\n      z-index: 0; }\n.screenshot-viewer__popup:after {\n      content: '';\n      display: block;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 0 6px 6px 6px;\n      border-color: transparent transparent #fff transparent;\n      position: absolute;\n      top: -6px;\n      left: 41px;\n      z-index: 1; }\n.screenshot-viewer__body {\n    display: block;\n    overflow-y: auto; }\n.screenshot-viewer__item {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    box-sizing: border-box;\n    margin-bottom: 8px; }\n.screenshot-viewer__item:last-child {\n      margin-bottom: 0; }\n.screenshot-viewer__screenshot-wraper {\n    display: block;\n    width: 48px;\n    height: 48px;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    margin-right: 8px;\n    border: solid 1px #999;\n    overflow: hidden;\n    position: relative; }\n.screenshot-viewer__screenshot-wraper--sub {\n      width: 80px;\n      height: 80px; }\n.screenshot-viewer__screenshot {\n    display: block;\n    width: 100%;\n    height: 100%;\n    border: none; }\n.screenshot-viewer__field {\n    padding: 2px 0; }\n.screenshot-viewer__author {\n    display: block;\n    font-size: 14px;\n    font-weight: 700;\n    color: #333; }\n.screenshot-viewer__date {\n    display: block;\n    font-size: 10px;\n    font-weight: 400;\n    color: #333; }\n.screenshot-viewer__link {\n    color: #990000; }\n.screenshot-viewer__link:visited {\n      color: #990000; }\n.screenshot-viewer--active .screenshot-viewer__popup {\n    display: block; }\n.injunction {\n  display: block;\n  box-sizing: border-box;\n  padding: 16px;\n  padding-bottom: 0;\n  background-color: #ddd; }\n.injunction__item {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    padding: 16px;\n    margin-bottom: 16px;\n    background-color: #fff; }\n.injunction__item::last-child {\n      margin-bottom: 0; }\n.injunction__title {\n    display: block;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 8px;\n    font-size: 18px;\n    line-height: 1.2;\n    font-weight: 700;\n    text-align: center;\n    color: #333; }\n.injunction__title--small {\n      font-size: 12px; }\n.injunction__sub-title {\n    display: block;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 8px;\n    font-size: 14px;\n    line-height: 1.2;\n    font-weight: 400;\n    text-align: center;\n    color: #333; }\n.injunction__field {\n    flex: 0 0 auto;\n    align-self: flex-end;\n    margin-bottom: 8px;\n    font-size: 12px; }\n.history {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 0 0 auto;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 16px;\n  border: solid 1px #b7b7b7;\n  position: relative;\n  font-size: 12px; }\n.history__header {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    padding: 8px;\n    border-bottom: solid 1px #b7b7b7;\n    background-color: #ccc;\n    font-size: 12px;\n    color: #333; }\n.history__body {\n    display: block;\n    box-sizing: border-box;\n    padding: 8px;\n    background-color: #ddd; }\n.history__title {\n    display: block;\n    flex: 0 0 auto;\n    padding: 0 8px;\n    margin: 0;\n    font-size: 12px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #333; }\n.history__title--secondary {\n      padding: 0;\n      margin-bottom: 8px; }\n.filter {\n  display: none;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  padding: 8px 4px;\n  border: solid 1px #ccc;\n  background-color: #ffffff; }\n.filter__layout {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    flex: 8 1 auto;\n    box-sizing: border-box;\n    padding: 0 4px; }\n.filter__layout:last-child {\n      margin-bottom: 0; }\n.filter__column {\n    flex-wrap: wrap;\n    margin-bottom: -8px; }\n.filter__col {\n    padding-bottom: 8px; }\n.filter--active {\n    display: flex; }\n.pagination {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  flex: 0 0 auto;\n  height: auto;\n  box-sizing: border-box;\n  margin: 0 -4px;\n  font-size: 12px;\n  color: #333; }\n.pagination__layout {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    padding: 0 4px; }\n.pagination__icon {\n    height: 36px; }\n.pagination__link {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: stretch;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    padding: 10px 16px;\n    font-size: 14px;\n    font-weight: 400;\n    text-decoration: none;\n    color: #333333;\n    transition: box-shadow 0.25s ease-out;\n    cursor: pointer; }\n.pagination__link:visited {\n      color: #333333; }\n.pagination__link:hover {\n      box-shadow: inset 0 -0.25rem 0 0 #cccccc; }\n.pagination__link:active {\n      box-shadow: inset 0 -0.25rem 0 0 #0165a7; }\n.pagination__link--user {\n      font-size: 14; }\n.pagination__link--active {\n      box-shadow: inset 0 -0.25rem 0 0 #0165a7; }\n.pagination__link--active:hover {\n        box-shadow: inset 0 -0.25rem 0 0 #0165a7; }\n.pagination__link--disabled {\n      pointer-events: none;\n      cursor: default;\n      text-decoration: none;\n      color: black; }\n.logo {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  height: 15px;\n  box-sizing: border-box;\n  margin: 0 16px;\n  position: relative; }\n.logo__icon {\n    flex: 0 0 auto;\n    width: inherit;\n    height: inherit; }\n.logo--n-m {\n    margin: 0; }\n.logo--large {\n    width: 250px;\n    height: auto; }\n.logo__list {\n    height: 20px;\n    width: 30px;\n    margin: 0; }\n.layout {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  height: 100vh;\n  box-sizing: border-box;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n  position: relative;\n  order: 0; }\n.layout__block {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    overflow: hidden;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    position: relative;\n    order: 0; }\n.layout__block--content {\n      padding: 8px;\n      background-color: #f2f2f2; }\n.layout__container {\n    flex: 1 1 auto;\n    display: block;\n    box-sizing: border-box;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n.layout--login {\n    flex-direction: row;\n    background-color: #3b424b; }\n.layout--login .layout__block {\n      justify-content: center;\n      align-items: stretch; }\n.layout--login .layout__block--logo {\n        flex: 0 0 auto;\n        width: 320px;\n        border-right: solid 1px #4d5662;\n        box-shadow: inset -1px 0 0 0 #272c32; }\n.layout--login .layout__block--form {\n        padding: 0 55px; }\n.app-loader {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  background-color: #3b424b; }\n.app-loader__layout {\n    display: block;\n    flex: 0 0 auto;\n    box-sizing: border-box; }\n.app-loader__logo {\n    display: block;\n    min-width: 816px;\n    max-width: 1024px;\n    margin: 0 72px;\n    flex: 1 1 auto;\n    box-sizing: border-box; }\n.page-404 {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  background-color: #3b424b; }\n.page-404__layout {\n    display: block;\n    flex: 0 0 auto;\n    box-sizing: border-box; }\n.page-404__logo {\n    width: 500px;\n    box-sizing: border-box;\n    margin-bottom: 40px; }\n.page-404__title {\n    display: block;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 16px;\n    font-size: 27px;\n    font-weight: 700;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: #fff; }\n.page-404__sub-text {\n    display: block;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 16px;\n    font-size: 16px;\n    font-weight: 400;\n    letter-spacing: 0.05em;\n    text-transform: uppercase;\n    color: #fff; }\n.page-404__link {\n    font-weight: 700; }\n.logo-loader {\n  display: block;\n  width: 100%;\n  box-sizing: border-box; }\n.logo-loader__text {\n    fill: #ffffff;\n    fill: transparent;\n    stroke-width: 1.5;\n    stroke-dasharray: 700;\n    stroke-dashoffset: 0;\n    stroke: #ffffff;\n    -webkit-animation: draw-line-text 1.85s linear forwards, \r draw-background-text-white 2s 1.85s ease-out forwards;\n            animation: draw-line-text 1.85s linear forwards, \r draw-background-text-white 2s 1.85s ease-out forwards; }\n.logo-loader__text--yellow {\n      stroke: #ffcc00;\n      -webkit-animation: draw-line-text 1.85s linear forwards, \r draw-background-text-yellow 2s 1.85s ease-out forwards;\n              animation: draw-line-text 1.85s linear forwards, \r draw-background-text-yellow 2s 1.85s ease-out forwards; }\n.logo-loader__shield {\n    fill: #3B424B; }\n.logo-loader__shield--border {\n      fill: #ffffff;\n      fill: transparent;\n      stroke-width: 1.5;\n      stroke-dasharray: 1350;\n      stroke-dashoffset: 0;\n      stroke: #ffffff;\n      -webkit-animation: draw-line-shield-base 1.85s linear forwards,\r draw-background-text-white 2s 1.85s ease-out forwards;\n              animation: draw-line-shield-base 1.85s linear forwards,\r draw-background-text-white 2s 1.85s ease-out forwards; }\n.logo-loader__shield--reflection {\n      fill: #646A71;\n      fill: transparent;\n      stroke-width: 1.5;\n      stroke-dasharray: 900;\n      stroke-dashoffset: 0;\n      stroke: #646A71;\n      -webkit-animation: draw-line-shield-reflection  1.85s linear forwards,\r draw-background-shield-reflection 1.85s 2.20s ease-out forwards;\n              animation: draw-line-shield-reflection  1.85s linear forwards,\r draw-background-shield-reflection 1.85s 2.20s ease-out forwards; }\n@-webkit-keyframes draw-line-text {\n  from {\n    stroke-dashoffset: 700; }\n  to {\n    stroke-dashoffset: 0; } }\n@keyframes draw-line-text {\n  from {\n    stroke-dashoffset: 700; }\n  to {\n    stroke-dashoffset: 0; } }\n@-webkit-keyframes draw-background-text-white {\n  from {\n    fill: transparent; }\n  to {\n    fill: #ffffff; } }\n@keyframes draw-background-text-white {\n  from {\n    fill: transparent; }\n  to {\n    fill: #ffffff; } }\n@-webkit-keyframes draw-background-text-yellow {\n  from {\n    fill: transparent; }\n  to {\n    fill: #ffcc00; } }\n@keyframes draw-background-text-yellow {\n  from {\n    fill: transparent; }\n  to {\n    fill: #ffcc00; } }\n@-webkit-keyframes draw-line-shield-base {\n  from {\n    stroke-dashoffset: 1350; }\n  to {\n    stroke-dashoffset: 0; } }\n@keyframes draw-line-shield-base {\n  from {\n    stroke-dashoffset: 1350; }\n  to {\n    stroke-dashoffset: 0; } }\n@-webkit-keyframes draw-background-shield-base {\n  from {\n    fill: transparent; }\n  to {\n    fill: #3B424B; } }\n@keyframes draw-background-shield-base {\n  from {\n    fill: transparent; }\n  to {\n    fill: #3B424B; } }\n@-webkit-keyframes draw-line-shield-reflection {\n  from {\n    stroke-dashoffset: 900; }\n  to {\n    stroke-dashoffset: 0; } }\n@keyframes draw-line-shield-reflection {\n  from {\n    stroke-dashoffset: 900; }\n  to {\n    stroke-dashoffset: 0; } }\n@-webkit-keyframes draw-background-shield-reflection {\n  from {\n    fill: transparent; }\n  to {\n    fill: #646A71; } }\n@keyframes draw-background-shield-reflection {\n  from {\n    fill: transparent; }\n  to {\n    fill: #646A71; } }\n.header {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  flex: 1 1 auto;\n  height: 50px;\n  box-sizing: border-box;\n  background-color: #2c3e50; }\n.header__layout {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    flex: 1 1 auto; }\n.nav {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n.nav__layout {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: stretch;\n    flex: 0 0 auto;\n    box-sizing: border-box; }\n.nav__link {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: stretch;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    padding: 8px 16px;\n    font-size: 12px;\n    font-weight: 700;\n    text-decoration: none;\n    color: #fff;\n    transition: background-color 0.25s ease-out; }\n.nav__link:visited {\n      color: #fff; }\n.nav__link:hover {\n      background-color: #6b7884; }\n.nav__link:active {\n      background-color: #6b7884; }\n.nav__link--user {\n      padding-left: 34px;\n      position: relative; }\n.nav__link--user:before {\n        content: '';\n        display: block;\n        width: 14px;\n        height: 100%;\n        background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg width%3D%22100%25%22 height%3D%22100%25%22 viewBox%3D%220 0 2134 2134%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 xml%3Aspace%3D%22preserve%22 style%3D%22fill%3A%23fff%3Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A1.41421%3B%22%3E%3Cg id%3D%22Icon%22%3E%3Cpath d%3D%22M1879.74%2C1705.71c0%2C92.302 -26.467%2C171.489 -79.4%2C237.561c-52.934%2C66.072 -116.682%2C99.108 -191.244%2C99.108l-1085%2C0c-74.515%2C0 -138.263%2C-33.036 -191.244%2C-99.108c-52.981%2C-66.072 -79.448%2C-145.259 -79.4%2C-237.561c0%2C-72.001 3.605%2C-139.97 10.814%2C-203.908c7.21%2C-63.938 20.562%2C-128.302 40.056%2C-193.093c19.495%2C-64.792 44.277%2C-120.263 74.349%2C-166.414c30.072%2C-46.151 69.89%2C-83.835 119.456%2C-113.053c49.566%2C-29.218 106.531%2C-43.826 170.896%2C-43.826c110.942%2C108.428 243.489%2C162.642 397.642%2C162.642c154.152%2C0 286.699%2C-54.214 397.642%2C-162.642c64.364%2C0 121.329%2C14.608 170.895%2C43.826c49.566%2C29.218 89.385%2C66.902 119.456%2C113.053c30.072%2C46.151 54.855%2C101.622 74.349%2C166.414c19.495%2C64.791 32.847%2C129.155 40.056%2C193.093c7.21%2C63.938 10.814%2C131.907 10.814%2C203.908l-0.142%2C0Zm-325.214%2C-1126.9c0%2C134.658 -47.645%2C249.632 -142.935%2C344.922c-95.289%2C95.29 -210.263%2C142.935 -344.921%2C142.935c-134.658%2C0 -249.632%2C-47.645 -344.922%2C-142.935c-95.29%2C-95.29 -142.935%2C-210.264 -142.935%2C-344.922c0%2C-134.658 47.645%2C-249.632 142.935%2C-344.922c95.29%2C-95.289 210.264%2C-142.934 344.922%2C-142.934c134.658%2C0 249.632%2C47.645 344.921%2C142.934c95.29%2C95.29 142.935%2C210.264 142.935%2C344.922Z%22 style%3D%22fill%3A%23fff%3Bfill-rule%3Anonzero%3B%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n        background-repeat: no-repeat;\n        background-position: 0 47%;\n        position: absolute;\n        top: 0;\n        left: 16px; }\n.nav__link--active {\n      background-color: #6b7884;\n      text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.65); }\n.nav__counter {\n    display: block;\n    font-size: inherit;\n    font-weight: 400; }\n.nav__icon {\n    font-size: 14px;\n    fill: #fff; }\n.nav-sub {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  font-size: 12px; }\n.nav-sub__layout {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: stretch;\n    flex: 0 0 auto;\n    box-sizing: border-box; }\n.nav-sub__link {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: stretch;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    padding: 13.44px 16px;\n    text-decoration: none;\n    color: #333333;\n    transition: box-shadow 0.25s ease-out;\n    cursor: pointer;\n    font-size: 14px; }\n.nav-sub__link:visited {\n      color: #333333; }\n.nav-sub__link:hover {\n      box-shadow: inset 0 -0.25rem 0 0 #cccccc; }\n.nav-sub__link:active {\n      box-shadow: inset 0 -0.25rem 0 0 #0165a7; }\n.nav-sub__link--active {\n      box-shadow: inset 0 -0.25rem 0 0 #0165a7; }\n.nav-sub__link--active:hover {\n        box-shadow: inset 0 -0.25rem 0 0 #0165a7; }\n.nav-sub__link--disable {\n      color: #AAAAAA;\n      pointer-events: none;\n      cursor: pointer;\n      text-decoration: none; }\n.nav-sub__title {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: stretch;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    padding: 8px 12px;\n    font-size: 14px;\n    font-weight: 400;\n    text-decoration: none; }\n.nav-sub--border {\n    width: 100%;\n    border-bottom: solid 1px #ccc; }\n.control-bar {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  flex: 0 0 auto;\n  height: auto;\n  box-sizing: border-box;\n  padding: 8px;\n  border: solid 1px #ccc;\n  background-color: #fff;\n  font-size: 12px; }\n.control-bar__layout {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    flex: 1 1 auto; }\n.control-bar__layout--pagination {\n      margin-bottom: -9px; }\n.control-bar--sub {\n    padding: 8px 0;\n    margin: 0;\n    border: none;\n    background-color: transparent; }\n.control-bar--secondary {\n    border: 0; }\n.panel {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  margin: 0 -4px;\n  font-size: 12px;\n  color: #333; }\n.panel__layout {\n    display: block;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    padding: 0 4px; }\n.export {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  flex: 0 0 auto;\n  box-sizing: border-box;\n  margin: 0 -4px;\n  font-size: 12px;\n  color: #333; }\n.export__layout {\n    display: block;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    padding: 0 4px; }\n.export__layout--generate {\n      display: none; }\n.export__layout--error {\n      display: none; }\n.export__layout--success {\n      display: none; }\n.export--generate .export__layout--generate {\n    display: block; }\n.export--generate .export__layout--error {\n    display: none; }\n.export--generate .export__layout--success {\n    display: none; }\n.export--error .export__layout--generate {\n    display: none; }\n.export--error .export__layout--error {\n    display: block; }\n.export--error .export__layout--success {\n    display: none; }\n.export--success .export__layout--generate {\n    display: none; }\n.export--success .export__layout--error {\n    display: none; }\n.export--success .export__layout--success {\n    display: block; }\n.tabs {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 1 1 auto; }\n.tab-nav {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 0 0 auto;\n  height: 30px;\n  box-sizing: border-box;\n  padding: 0 8px;\n  margin: 0;\n  margin-bottom: -1px;\n  list-style: none;\n  z-index: 1; }\n.tab-nav__layout {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: stretch;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    margin-right: 1px; }\n.tab-nav__layout:last-child {\n      margin-right: 0; }\n.tab-nav__title {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    padding: 8px;\n    padding-left: 0;\n    margin: 0;\n    font-size: 11px;\n    font-weight: 700;\n    line-height: 1;\n    text-transform: uppercase;\n    color: #333; }\n.tab-nav__button {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    padding: 8px 8px;\n    border: solid 1px #ccc;\n    border-bottom: none;\n    background-color: #ddd;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1;\n    text-decoration: none;\n    color: #333;\n    transition: background-color 0.25s ease-out; }\n.tab-nav__button:visited {\n      color: inherit; }\n.tab-nav__button:focus, .tab-nav__button:hover {\n      background-color: #ccc; }\n.tab-nav__button:active {\n      background-color: #fff; }\n.tab-nav__button--active {\n      border-bottom-color: #fff;\n      background-color: #fff;\n      pointer-events: none; }\n.tab-nav__counter {\n    margin-left: 4px; }\n.tab-nav__loader {\n    font-size: 16px; }\n.tab-nav--primary {\n    height: 35px;\n    padding: 8px 8px 0 8px;\n    background-color: #496785; }\n.tab-nav--primary .tab-nav__layout {\n      margin-right: 0; }\n.tab-nav--primary .tab-nav__button {\n      padding: 8px 12px;\n      border-radius: 3px 3px 0 0;\n      background-color: transparent;\n      border: none;\n      color: #fff; }\n.tab-nav--primary .tab-nav__button:focus, .tab-nav--primary .tab-nav__button:hover {\n        background-color: #768da3; }\n.tab-nav--primary .tab-nav__button--active {\n        background-color: #f2f2f2;\n        color: #333; }\n.tab-nav--primary .tab-nav__button--active .tab-nav__counter {\n          color: #333; }\n.tab-nav--primary .tab-nav__counter {\n      color: rgba(255, 255, 255, 0.75); }\n.tab-nav--secondary {\n    height: 35px;\n    padding: 8px 8px 0 8px;\n    background-color: #f2f2f2;\n    margin-bottom: 0; }\n.tab-nav--secondary .tab-nav__button {\n      padding: 8px 12px;\n      position: relative; }\n.tab-nav--secondary .tab-nav__button--active:before {\n        content: '';\n        display: block;\n        width: 100%;\n        height: 1px;\n        background-color: #fff;\n        position: absolute;\n        bottom: -1px;\n        left: 0; }\n.tab-content {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  position: relative; }\n.tab-content__panel {\n    display: none;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    overflow: hidden;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    position: relative; }\n.tab-content__panel--active {\n      display: flex; }\n.tab-content--primary {\n    padding: 8px;\n    background-color: #f2f2f2; }\n.tab-content--secondary {\n    padding: 8px;\n    border-top: solid 1px #ccc;\n    background-color: #fff; }\n.modal-box {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n  background-color: rgba(255, 255, 255, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: none;\n          transform: none;\n  transition: visibility 0.3s ease-out, opacity 0.3s ease-out; }\n.modal-box__popup {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    flex: 0 0 auto;\n    width: 60%;\n    min-width: 660px;\n    max-height: 60%;\n    box-sizing: border-box;\n    box-shadow: 0px 3px 4px 3px rgba(0, 0, 0, 0.2);\n    background-color: #fff;\n    opacity: 0;\n    transition: opacity 0.3s ease-out; }\n.modal-box__block {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    flex: 1 1 auto;\n    box-sizing: border-box;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    overflow: hidden;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    position: relative;\n    order: 0; }\n.modal-box__block--vertical {\n      flex-direction: row; }\n.modal-box__container {\n    flex: 1 1 auto;\n    display: block;\n    box-sizing: border-box;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n.modal-box__container--content {\n      padding: 8px; }\n.modal-box__post {\n    flex: 1 1 auto;\n    display: block;\n    box-sizing: border-box;\n    padding: 8px;\n    margin: 16px;\n    border: 1px solid #ccc; }\n.modal-box__post--text {\n      padding: 0 6px; }\n.modal-box__description {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    flex: 0 0 220px;\n    box-sizing: border-box;\n    padding: 8px;\n    background-color: #ccc;\n    font-size: 12px;\n    color: #333; }\n.modal-box__header {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    padding: 8px 34px 8px 8px;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    overflow: hidden;\n    position: relative;\n    order: 0;\n    border-bottom: 1px solid #ccc; }\n.modal-box__control-bar {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    padding: 0 8px;\n    border-top: solid 1px #ccc;\n    border-bottom: solid 1px #ccc;\n    background-color: #fff;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    overflow: hidden;\n    position: relative;\n    order: 0; }\n.modal-box__control-bar--secondary {\n      border: 0; }\n.modal-box__title {\n    flex: 1 1 auto;\n    padding: 0;\n    margin: 0;\n    font-size: 14px;\n    font-weight: 700;\n    color: #fff; }\n.modal-box__close-button {\n    display: block;\n    padding: 9px 10px;\n    border: none;\n    border-radius: 0;\n    box-shadow: none;\n    background-color: transparent;\n    position: absolute;\n    top: 0;\n    right: 0;\n    fill: #ccc; }\n.modal-box__close-button:focus, .modal-box__close-button:hover {\n      background-color: #395169;\n      fill: #fff; }\n.modal-box__close-button:active {\n      background-color: #31465a;\n      fill: #fff; }\n.modal-box--active {\n    visibility: visible;\n    opacity: 1; }\n.modal-box--active .modal-box__popup {\n      opacity: 1; }\n.modal-box--tiny .modal-box__popup {\n    width: 350px;\n    min-width: 350px;\n    max-height: 400px; }\n.modal-box--small .modal-box__popup {\n    width: 35%;\n    min-width: 600px;\n    max-height: 50%; }\n.modal-box--medium .modal-box__popup {\n    width: 70%;\n    min-width: 780px;\n    max-height: 70%; }\n.modal-box--large .modal-box__popup {\n    width: 90%;\n    min-width: 980px;\n    max-height: 90%; }\n.modal-box--full .modal-box__popup {\n    width: 100%;\n    height: 100vh;\n    min-height: 100vh; }\n.notification {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  min-height: 75px;\n  box-sizing: border-box;\n  padding: 8px;\n  margin: 0;\n  background-color: #2c3e50;\n  position: absolute;\n  right: -300px;\n  bottom: 8px;\n  z-index: 4;\n  font-size: 12px;\n  letter-spacing: 0.035em;\n  font-weight: 700;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.6);\n  color: #fff;\n  transition: right 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9), box-shadow 0.35s 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9); }\n.notification:hover, .notification:focus__button {\n    display: block; }\n.notification__button {\n    display: block;\n    padding: 7px 8px;\n    border: none;\n    border-radius: 0;\n    box-shadow: none;\n    background-color: #2c3e50;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    fill: #fff;\n    font-size: 10px;\n    font-weight: 700; }\n.notification__button:focus, .notification__button:hover {\n      background-color: #6b7884;\n      fill: #fff; }\n.notification__button:active {\n      background-color: #6b7884;\n      fill: #fff; }\n.notification--error {\n    background-color: #c0392b;\n    bottom: 91px; }\n.notification--error .notification__button {\n      background-color: #c0392b; }\n.notification--error .notification__button:focus, .notification--error .notification__button:hover {\n        background-color: #bc6161;\n        fill: #fff; }\n.notification--error .notification__button:active {\n        background-color: #bc6161;\n        fill: #fff; }\n.notification--active {\n    right: 8px;\n    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3); }\n.profile-photo {\n  display: block;\n  box-sizing: border-box;\n  position: relative; }\n.profile-photo__body {\n    display: block;\n    overflow-y: auto; }\n.profile-photo__item {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    box-sizing: border-box;\n    margin-bottom: 8px; }\n.profile-photo__item:last-child {\n      margin-bottom: 0; }\n.profile-photo__wrapper {\n    display: block;\n    width: 48px;\n    height: 48px;\n    flex: 0 0 auto;\n    overflow: hidden;\n    position: relative;\n    border: 1px solid #ddd; }\n.profile-photo__wrapper--large {\n      width: 150px;\n      height: 150px; }\n.profile-photo__wrapper--small {\n      width: 80px;\n      heigh: 80px; }\n.profile-photo__screenshot {\n    display: block;\n    width: 100%;\n    height: 100%;\n    border: none; }\n.login-box {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  background-color: #fff; }\n.login-box__container {\n    display: none;\n    max-width: 388px;\n    width: 90%; }\n.login-box__layout {\n    display: block;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 1rem; }\n.login-box__layout:last-child {\n      margin-bottom: 0; }\n.login-box__title {\n    display: block;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-size: 1rem;\n    font-weight: normal;\n    color: #666666; }\n.login-box__title--logo {\n      color: #000000;\n      font-weight: 700; }\n.login-box__message {\n    display: block;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-size: 0.875rem;\n    font-weight: normal;\n    color: #666666; }\n.login-box__message--success {\n      color: #68a327; }\n.login-box__message--error {\n      color: #ffae00; }\n.login-box__button {\n    padding: 0.7rem 1rem;\n    font-size: 0.875rem; }\n.login-box--sign-in .login-box__container--sign-in {\n    display: block; }\n.login-box--sign-in .login-box__container--password-recovery {\n    display: none; }\n.login-box--sign-in .login-box__container--successful-recovery {\n    display: none; }\n.login-box--password-recovery .login-box__container--sign-in {\n    display: none; }\n.login-box--password-recovery .login-box__container--password-recovery {\n    display: block; }\n.login-box--password-recovery .login-box__container--successful-recovery {\n    display: none; }\n.login-box--successful-recovery .login-box__container--sign-in {\n    display: none; }\n.login-box--successful-recovery .login-box__container--password-recovery {\n    display: none; }\n.login-box--successful-recovery .login-box__container--successful-recovery {\n    display: block; }\n.shrink {\n  flex: 0 0 auto;\n  overflow: visible; }\n.align-right {\n  justify-content: flex-end; }\n.align-center {\n  justify-content: center; }\n.align-justify {\n  justify-content: space-between; }\n.align-spaced {\n  justify-content: space-around; }\n.align-top {\n  align-items: flex-start; }\n.align-self-top {\n  align-self: flex-start; }\n.align-bottom {\n  align-items: flex-end; }\n.align-self-bottom {\n  align-self: flex-end; }\n.align-middle {\n  align-items: center; }\n.align-self-middle {\n  -ms-grid-row-align: center;\n      align-self: center; }\n.align-stretch {\n  align-items: stretch; }\n.align-self-stretch {\n  -ms-grid-row-align: stretch;\n      align-self: stretch; }\n.text-center {\n  text-align: center; }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/assets/scss/app.scss":
/*!**********************************!*\
  !*** ./src/assets/scss/app.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/raw-loader!../../../node_modules/postcss-loader/lib??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--14-3!./app.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/assets/scss/app.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!****************************************!*\
  !*** multi ./src/assets/scss/app.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alexey\Desktop\Kharlamov989.github.io\src\assets\scss\app.scss */"./src/assets/scss/app.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map