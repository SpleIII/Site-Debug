"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _main_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @main/app */ "./scripts/main/app.js");
/* harmony import */ var _main_components_navigation_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @main/components/navigation-swiper */ "./scripts/main/components/navigation-swiper.js");
/* harmony import */ var _main_components_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @main/components/timer */ "./scripts/main/components/timer.js");


window.app = new _main_app__WEBPACK_IMPORTED_MODULE_1__.App();
window.app.run();



/***/ }),

/***/ "./scripts/main/app.js":
/*!*****************************!*\
  !*** ./scripts/main/app.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var _std_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @std/app */ "./scripts/std/app.ts");

class App extends _std_app__WEBPACK_IMPORTED_MODULE_0__.App {
  constructor(config = {}) {
    super(config);
  }
  run() {}
}

/***/ }),

/***/ "./scripts/main/components/navigation-swiper.js":
/*!******************************************************!*\
  !*** ./scripts/main/components/navigation-swiper.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "../node_modules/swiper/modules/index.mjs");


const MD_WIDTH = 768;
/** Класс слайдера с навигацией. */
class NavigationSwiper {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  constructor(el) {
    this.swiper = void 0;
    this.el = el;
    this.isInit = false;
    this.width = MD_WIDTH;
    this.viewportResizeHandler = this.viewportResize.bind(this);
    this.nextArrow = document.querySelector(".js-navigation-nav-next");
    this.prevArrow = document.querySelector(".js-navigation-nav-prev");
    this.viewportResizeHandler();
    window.addEventListener("resize", this.viewportResizeHandler);
  }

  /**
   * Отслеживание изменения окна просмотра.
   *
   * @returns {void}
   */
  viewportResize() {
    if (window.innerWidth >= this.width) {
      if (!this.isInit) {
        this.isInit = true;
        this.createSlider();
      }
    } else if (this.isInit) {
      this.sliderDestroy();
      this.isInit = false;
    }
  }

  /**
   * Инициализация слайдера.
   * 
   * @returns {void} 
   */
  createSlider() {
    this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](this.el, {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
      slidesPerView: "auto",
      navigation: {
        nextEl: this.nextArrow,
        prevEl: this.prevArrow
      }
    });
  }

  /**
   * Уничтожение слайдера.
   *
   * @returns {void}
   */
  sliderDestroy() {
    this.swiper.destroy();
  }
}
window.addEventListener("load", () => {
  document.querySelectorAll(".js-navigation-swiper").forEach(slider => new NavigationSwiper(slider));
});

/***/ }),

/***/ "./scripts/main/components/timer.js":
/*!******************************************!*\
  !*** ./scripts/main/components/timer.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Timer: function() { return /* binding */ Timer; }
/* harmony export */ });
/** Часы. */
class Timer {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   *
   */
  constructor(el) {
    this.el = el;
    this.drawTime();
  }

  /**
   * Перерисовка времени с интревалом раз в минуту.
   *
   * @returns {void}
   */
  drawTime() {
    setInterval(() => {
      this.el.innerHTML = this.getClockTime();
    }, 60000);
  }

  /**
   * Вернуть текущее время в формате ЧЧ:ММ.
   *
   * @returns {string}
   */
  getClockTime() {
    const date = new Date();
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
  }
}
document.querySelectorAll(".js-timer").forEach(el => new Timer(el));

/***/ }),

/***/ "./scripts/std/app.ts":
/*!****************************!*\
  !*** ./scripts/std/app.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! urijs */ "../node_modules/urijs/src/URI.js");
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _std_guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @std/guards */ "./scripts/std/guards.ts");


class App {
  constructor(config = {}) {
    this.config = {};
    this.loadConfig(config);
  }
  loadConfig(config) {
    this.config = config;
  }
  getOption(optionName, defaultValue) {
    const optionPath = optionName.split(".");
    let option = this.config;
    for (const key of optionPath) {
      if ((0,_std_guards__WEBPACK_IMPORTED_MODULE_1__.isJsonMap)(option)) {
        option = option[key];
      } else if (defaultValue) {
        return defaultValue;
      } else {
        throw new Error(`Опция ${optionName} не найдена.`);
      }
    }
    return option;
  }

  /**
   * @param {string} url
   * @param {string} lang
   * @return {string}
   */
  getUrl(url, lang = BX.message("LANGUAGE_ID")) {
    const uri = urijs__WEBPACK_IMPORTED_MODULE_0___default()(url);
    const segments = uri.segment();
    const languages = this.getOption("loc.languages");
    if (!languages || typeof languages !== "object") {
      throw new Error("Не определены поддерживаемые сайтом языки.");
    }
    const languageCodes = Object.keys(languages);
    if (segments && ~languageCodes.indexOf(segments[0])) {
      segments.shift();
    }
    if (lang !== this.getOption("loc.default_language")) {
      segments.unshift(lang);
    }
    uri.segment(segments);
    return uri.toString();
  }
}

/***/ }),

/***/ "./scripts/std/guards.ts":
/*!*******************************!*\
  !*** ./scripts/std/guards.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isJsonMap: function() { return /* binding */ isJsonMap; }
/* harmony export */ });
function isJsonMap(object) {
  return object && typeof object === "object" && !Array.isArray(object);
}

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors"], function() { return __webpack_exec__("./main.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
