/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/(function () {
  // webpackBootstrap
  /******/
  "use strict";

  /******/
  var __webpack_modules__ = {
    /***/"./scripts/script.js": (
    /*!***************************!*\
      !*** ./scripts/script.js ***!
      \***************************/
    /***/
    function scriptsScriptJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Styles/style.css */ \"./Styles/style.css\");\n//import css\n\n// On click event for hiding the mobile menu when a link is clicked.\n$('.nav-link').on('click', function () {\n  $('#offcanvasNavbar').offcanvas('hide');\n});\n\n// On click event for calling a phone number (e.g. on mobile devices this should open the default phone app).\n$('.call-box').on('click', function () {\n  var phoneNumber = $(this).find('.phone-number').text();\n  window.location.href = \"tel:\" + phoneNumber;\n});\n\n//# sourceURL=webpack://ptarmigan/./scripts/script.js?");

      /***/
    }),
    /***/"./Styles/style.css": (
    /*!**************************!*\
      !*** ./Styles/style.css ***!
      \**************************/
    /***/
    function StylesStyleCss(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ptarmigan/./Styles/style.css?");

      /***/
    })

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  (function () {
    /******/ // define __esModule on exports
    /******/__webpack_require__.r = function (exports) {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/
  var __webpack_exports__ = __webpack_require__("./scripts/script.js");
  /******/
  /******/
})();