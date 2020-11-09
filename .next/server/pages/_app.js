module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _src_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_js_screensaver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/js/screensaver */ "./src/js/screensaver.js");
/* harmony import */ var _src_js_screensaver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_js_screensaver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/mnt/c/Users/antho/Desktop/ShopAR/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function MyApp({
  Component,
  pageProps,
  router
}) {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimatePresence"], {
    exitBeforeEnter: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    key: router.route,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  })));
}

/***/ }),

/***/ "./src/js/screensaver.js":
/*!*******************************!*\
  !*** ./src/js/screensaver.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var screenSaver = {};

function startScreenSaver(options) {
  //* attach event listeners to exit screensaver
  attachScreenSaverEventListeners();

  if (!screenSaver.initiated) {
    //* set screensaver options
    screenSaver.options = {
      timeout: options.timeout || 60000,
      //* default timer to start screensaver is 10 minutes
      width: options.width || 25,
      //* default width is 25rem
      height: options.height || 25,
      //* default height is 25rem
      exitTimeout: options.exitTimeout || null //* default timer to exit screensaver is disabled

    }; //* create elements

    var overlay = document.createElement("div");
    overlay.setAttribute("class", "screensaver-overlay");
    document.body.appendChild(overlay);
    var createBadge = document.createElement("div");
    createBadge.setAttribute("id", "saver-badge");
    document.body.appendChild(createBadge);
    createBadge.style.width = screenSaver.options.width + "rem";
    createBadge.style.height = screenSaver.options.height + "rem";
  }

  document.getElementsByTagName("body")[0].classList.remove("screensaver");
  screenSaver.initiated = true;
  screenSaver.setTimeoutValue = screenSaver.options.timeout;
  screenSaver.setTimeoutExit = screenSaver.options.timeoutExit;
  screenSaver.setTimeout = null; //* clear timeout

  screenSaver.inProgress = false;
  screenSaver.timerStarted = false;
  clearTimeout(screenSaver.setTimeout);
  screenSaver.setTimeout = setTimeout(function () {
    document.getElementsByTagName("body")[0].classList.add("screensaver");
    screenSaver.inProgress = true;
    var saverBadge = document.getElementById("saver-badge");
    clearInterval(screenSaver.setInterval); //* clear badge display interval

    screenSaver.setInterval = null; //* get dimensions in em

    var windowHeight = window.outerHeight / parseFloat(window.getComputedStyle(document.getElementsByTagName("body")[0], null).getPropertyValue("font-size"));
    var windowWidth = window.outerWidth / parseFloat(window.getComputedStyle(document.getElementsByTagName("body")[0], null).getPropertyValue("font-size"));
    screenSaver.setInterval = setInterval(function () {
      if (screenSaver.inProgress === true) {
        saverBadge.classList.remove("visible");
        setTimeout(function () {
          saverBadge.offsetWidth = saverBadge.offsetWidth;
          saverBadge.classList.add("visible");
        }, 1);
        var saverTopValue = Math.floor(Math.random() * windowHeight) - screenSaver.options.width;
        var saverLeftValue = Math.floor(Math.random() * windowWidth) - screenSaver.options.height;

        if (saverTopValue <= 0) {
          //* make sure the badge doesn't go off the screen
          saverTopValue = saverTopValue + 15;
        }

        if (saverLeftValue <= 0) {
          saverLeftValue = saverLeftValue + 15;
        }

        saverBadge.style.top = saverTopValue + "rem";
        saverBadge.style.left = saverLeftValue + "rem";

        if (screenSaver.timerStarted === false && screenSaver.options.exitTimeout != null) {
          startScreenSaverTimer();
        }
      }
    }, 6000);
  }, screenSaver.setTimeoutValue);
}

function startScreenSaverTimer() {
  screenSaver.timerStarted = true;
  setTimeout(function () {
    stopScreenSaver();
  }, screenSaver.setTimeoutExit);
}

function stopScreenSaver() {
  startScreenSaver();
  clearInterval(screenSaver.setInterval);
  document.getElementsByTagName("body")[0].classList.remove("screensaver");
  screenSaver.timerStarted = false;
}

function attachScreenSaverEventListeners() {
  var events = ["touchstart", "mousedown", "mousemove", "touchmove", "keypress", "scroll"];

  var resetScreenSaver = function (e) {
    if (screenSaver.inProgress) {
      e.stopPropagation();
      e.preventDefault();
    }

    clearTimeout(screenSaver.setTimeout);
    clearInterval(screenSaver.setInterval);
    document.getElementsByTagName("body")[0].classList.remove("screensaver");
    startScreenSaver();
  };

  var checkClick = function (e) {
    if (screenSaver.inProgress) {
      startScreenSaver();
    }
  };

  var bindEvents = function (eventName) {
    document.addEventListener(eventName, screenSaver.initialize); //* bind click as fallback for touchstart and mousedown

    document.addEventListener("click", checkClick);
  };

  var unbindEvents = function (eventName) {
    document.removeEventListener(eventName, screenSaver.initialize);
  };

  for (var i = 0; i < events.length; i++) {
    bindEvents(events[i]);
  }
}

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyZWVuc2F2ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJyb3V0ZSIsInNjcmVlblNhdmVyIiwic3RhcnRTY3JlZW5TYXZlciIsIm9wdGlvbnMiLCJhdHRhY2hTY3JlZW5TYXZlckV2ZW50TGlzdGVuZXJzIiwiaW5pdGlhdGVkIiwidGltZW91dCIsIndpZHRoIiwiaGVpZ2h0IiwiZXhpdFRpbWVvdXQiLCJvdmVybGF5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY3JlYXRlQmFkZ2UiLCJzdHlsZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2V0VGltZW91dFZhbHVlIiwic2V0VGltZW91dEV4aXQiLCJ0aW1lb3V0RXhpdCIsInNldFRpbWVvdXQiLCJpblByb2dyZXNzIiwidGltZXJTdGFydGVkIiwiY2xlYXJUaW1lb3V0IiwiYWRkIiwic2F2ZXJCYWRnZSIsImdldEVsZW1lbnRCeUlkIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwid2luZG93SGVpZ2h0Iiwid2luZG93Iiwib3V0ZXJIZWlnaHQiLCJwYXJzZUZsb2F0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ3aW5kb3dXaWR0aCIsIm91dGVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsInNhdmVyVG9wVmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzYXZlckxlZnRWYWx1ZSIsInRvcCIsImxlZnQiLCJzdGFydFNjcmVlblNhdmVyVGltZXIiLCJzdG9wU2NyZWVuU2F2ZXIiLCJldmVudHMiLCJyZXNldFNjcmVlblNhdmVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiY2hlY2tDbGljayIsImJpbmRFdmVudHMiLCJldmVudE5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGl6ZSIsInVuYmluZEV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQyxXQUFiO0FBQXdCQztBQUF4QixDQUFmLEVBQWlEO0FBQzlE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OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgXCIuLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcbmltcG9ydCBcIi4uL3NyYy9qcy9zY3JlZW5zYXZlclwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICk7XG59XG4iLCJ2YXIgc2NyZWVuU2F2ZXIgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0U2NyZWVuU2F2ZXIob3B0aW9ucykge1xyXG4gIC8vKiBhdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIGV4aXQgc2NyZWVuc2F2ZXJcclxuICBhdHRhY2hTY3JlZW5TYXZlckV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gIGlmICghc2NyZWVuU2F2ZXIuaW5pdGlhdGVkKSB7XHJcbiAgICAvLyogc2V0IHNjcmVlbnNhdmVyIG9wdGlvbnNcclxuICAgIHNjcmVlblNhdmVyLm9wdGlvbnMgPSB7XHJcbiAgICAgIHRpbWVvdXQ6IG9wdGlvbnMudGltZW91dCB8fCA2MDAwMCwgLy8qIGRlZmF1bHQgdGltZXIgdG8gc3RhcnQgc2NyZWVuc2F2ZXIgaXMgMTAgbWludXRlc1xyXG5cclxuICAgICAgd2lkdGg6IG9wdGlvbnMud2lkdGggfHwgMjUsIC8vKiBkZWZhdWx0IHdpZHRoIGlzIDI1cmVtXHJcblxyXG4gICAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0IHx8IDI1LCAvLyogZGVmYXVsdCBoZWlnaHQgaXMgMjVyZW1cclxuXHJcbiAgICAgIGV4aXRUaW1lb3V0OiBvcHRpb25zLmV4aXRUaW1lb3V0IHx8IG51bGwsIC8vKiBkZWZhdWx0IHRpbWVyIHRvIGV4aXQgc2NyZWVuc2F2ZXIgaXMgZGlzYWJsZWRcclxuICAgIH07XHJcblxyXG4gICAgLy8qIGNyZWF0ZSBlbGVtZW50c1xyXG4gICAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzY3JlZW5zYXZlci1vdmVybGF5XCIpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcblxyXG4gICAgdmFyIGNyZWF0ZUJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjcmVhdGVCYWRnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNhdmVyLWJhZGdlXCIpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlQmFkZ2UpO1xyXG5cclxuICAgIGNyZWF0ZUJhZGdlLnN0eWxlLndpZHRoID0gc2NyZWVuU2F2ZXIub3B0aW9ucy53aWR0aCArIFwicmVtXCI7XHJcblxyXG4gICAgY3JlYXRlQmFkZ2Uuc3R5bGUuaGVpZ2h0ID0gc2NyZWVuU2F2ZXIub3B0aW9ucy5oZWlnaHQgKyBcInJlbVwiO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JlZW5zYXZlclwiKTtcclxuXHJcbiAgc2NyZWVuU2F2ZXIuaW5pdGlhdGVkID0gdHJ1ZTtcclxuXHJcbiAgc2NyZWVuU2F2ZXIuc2V0VGltZW91dFZhbHVlID0gc2NyZWVuU2F2ZXIub3B0aW9ucy50aW1lb3V0O1xyXG5cclxuICBzY3JlZW5TYXZlci5zZXRUaW1lb3V0RXhpdCA9IHNjcmVlblNhdmVyLm9wdGlvbnMudGltZW91dEV4aXQ7XHJcblxyXG4gIHNjcmVlblNhdmVyLnNldFRpbWVvdXQgPSBudWxsOyAvLyogY2xlYXIgdGltZW91dFxyXG5cclxuICBzY3JlZW5TYXZlci5pblByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gIHNjcmVlblNhdmVyLnRpbWVyU3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICBjbGVhclRpbWVvdXQoc2NyZWVuU2F2ZXIuc2V0VGltZW91dCk7XHJcblxyXG4gIHNjcmVlblNhdmVyLnNldFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5jbGFzc0xpc3QuYWRkKFwic2NyZWVuc2F2ZXJcIik7XHJcblxyXG4gICAgc2NyZWVuU2F2ZXIuaW5Qcm9ncmVzcyA9IHRydWU7XHJcblxyXG4gICAgdmFyIHNhdmVyQmFkZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVyLWJhZGdlXCIpO1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoc2NyZWVuU2F2ZXIuc2V0SW50ZXJ2YWwpOyAvLyogY2xlYXIgYmFkZ2UgZGlzcGxheSBpbnRlcnZhbFxyXG5cclxuICAgIHNjcmVlblNhdmVyLnNldEludGVydmFsID0gbnVsbDtcclxuXHJcbiAgICAvLyogZ2V0IGRpbWVuc2lvbnMgaW4gZW1cclxuICAgIHZhciB3aW5kb3dIZWlnaHQgPVxyXG4gICAgICB3aW5kb3cub3V0ZXJIZWlnaHQgL1xyXG4gICAgICBwYXJzZUZsb2F0KFxyXG4gICAgICAgIHdpbmRvd1xyXG4gICAgICAgICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLCBudWxsKVxyXG4gICAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIilcclxuICAgICAgKTtcclxuXHJcbiAgICB2YXIgd2luZG93V2lkdGggPVxyXG4gICAgICB3aW5kb3cub3V0ZXJXaWR0aCAvXHJcbiAgICAgIHBhcnNlRmxvYXQoXHJcbiAgICAgICAgd2luZG93XHJcbiAgICAgICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0sIG51bGwpXHJcbiAgICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKVxyXG4gICAgICApO1xyXG5cclxuICAgIHNjcmVlblNhdmVyLnNldEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoc2NyZWVuU2F2ZXIuaW5Qcm9ncmVzcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHNhdmVyQmFkZ2UuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2F2ZXJCYWRnZS5vZmZzZXRXaWR0aCA9IHNhdmVyQmFkZ2Uub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgICAgc2F2ZXJCYWRnZS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcclxuICAgICAgICB9LCAxKTtcclxuXHJcbiAgICAgICAgdmFyIHNhdmVyVG9wVmFsdWUgPVxyXG4gICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2luZG93SGVpZ2h0KSAtIHNjcmVlblNhdmVyLm9wdGlvbnMud2lkdGg7XHJcblxyXG4gICAgICAgIHZhciBzYXZlckxlZnRWYWx1ZSA9XHJcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aW5kb3dXaWR0aCkgLSBzY3JlZW5TYXZlci5vcHRpb25zLmhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHNhdmVyVG9wVmFsdWUgPD0gMCkge1xyXG4gICAgICAgICAgLy8qIG1ha2Ugc3VyZSB0aGUgYmFkZ2UgZG9lc24ndCBnbyBvZmYgdGhlIHNjcmVlblxyXG5cclxuICAgICAgICAgIHNhdmVyVG9wVmFsdWUgPSBzYXZlclRvcFZhbHVlICsgMTU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2F2ZXJMZWZ0VmFsdWUgPD0gMCkge1xyXG4gICAgICAgICAgc2F2ZXJMZWZ0VmFsdWUgPSBzYXZlckxlZnRWYWx1ZSArIDE1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2F2ZXJCYWRnZS5zdHlsZS50b3AgPSBzYXZlclRvcFZhbHVlICsgXCJyZW1cIjtcclxuXHJcbiAgICAgICAgc2F2ZXJCYWRnZS5zdHlsZS5sZWZ0ID0gc2F2ZXJMZWZ0VmFsdWUgKyBcInJlbVwiO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBzY3JlZW5TYXZlci50aW1lclN0YXJ0ZWQgPT09IGZhbHNlICYmXHJcbiAgICAgICAgICBzY3JlZW5TYXZlci5vcHRpb25zLmV4aXRUaW1lb3V0ICE9IG51bGxcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHN0YXJ0U2NyZWVuU2F2ZXJUaW1lcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgNjAwMCk7XHJcbiAgfSwgc2NyZWVuU2F2ZXIuc2V0VGltZW91dFZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRTY3JlZW5TYXZlclRpbWVyKCkge1xyXG4gIHNjcmVlblNhdmVyLnRpbWVyU3RhcnRlZCA9IHRydWU7XHJcblxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgc3RvcFNjcmVlblNhdmVyKCk7XHJcbiAgfSwgc2NyZWVuU2F2ZXIuc2V0VGltZW91dEV4aXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wU2NyZWVuU2F2ZXIoKSB7XHJcbiAgc3RhcnRTY3JlZW5TYXZlcigpO1xyXG5cclxuICBjbGVhckludGVydmFsKHNjcmVlblNhdmVyLnNldEludGVydmFsKTtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JlZW5zYXZlclwiKTtcclxuXHJcbiAgc2NyZWVuU2F2ZXIudGltZXJTdGFydGVkID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaFNjcmVlblNhdmVyRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgdmFyIGV2ZW50cyA9IFtcclxuICAgIFwidG91Y2hzdGFydFwiLFxyXG4gICAgXCJtb3VzZWRvd25cIixcclxuICAgIFwibW91c2Vtb3ZlXCIsXHJcbiAgICBcInRvdWNobW92ZVwiLFxyXG4gICAgXCJrZXlwcmVzc1wiLFxyXG4gICAgXCJzY3JvbGxcIixcclxuICBdO1xyXG5cclxuICB2YXIgcmVzZXRTY3JlZW5TYXZlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoc2NyZWVuU2F2ZXIuaW5Qcm9ncmVzcykge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVGltZW91dChzY3JlZW5TYXZlci5zZXRUaW1lb3V0KTtcclxuXHJcbiAgICBjbGVhckludGVydmFsKHNjcmVlblNhdmVyLnNldEludGVydmFsKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uY2xhc3NMaXN0LnJlbW92ZShcInNjcmVlbnNhdmVyXCIpO1xyXG5cclxuICAgIHN0YXJ0U2NyZWVuU2F2ZXIoKTtcclxuICB9O1xyXG5cclxuICB2YXIgY2hlY2tDbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoc2NyZWVuU2F2ZXIuaW5Qcm9ncmVzcykge1xyXG4gICAgICBzdGFydFNjcmVlblNhdmVyKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIGJpbmRFdmVudHMgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgc2NyZWVuU2F2ZXIuaW5pdGlhbGl6ZSk7XHJcblxyXG4gICAgLy8qIGJpbmQgY2xpY2sgYXMgZmFsbGJhY2sgZm9yIHRvdWNoc3RhcnQgYW5kIG1vdXNlZG93blxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrQ2xpY2spO1xyXG4gIH07XHJcblxyXG4gIHZhciB1bmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgc2NyZWVuU2F2ZXIuaW5pdGlhbGl6ZSk7XHJcbiAgfTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGJpbmRFdmVudHMoZXZlbnRzW2ldKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9