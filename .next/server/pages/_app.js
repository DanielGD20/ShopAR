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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("s75U");
/* harmony import */ var _src_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tyWD");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K7k0");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_js_screensaver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Gnku");
/* harmony import */ var _src_js_screensaver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_js_screensaver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function MyApp({
  Component,
  pageProps,
  router
}) {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimatePresence"], {
    exitBeforeEnter: true
  }, __jsx(Component, _extends({}, pageProps, {
    key: router.route
  })));
}

/***/ }),

/***/ "Gnku":
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

/***/ "K7k0":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "s75U":
/***/ (function(module, exports) {



/***/ }),

/***/ "tyWD":
/***/ (function(module, exports) {



/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ })

/******/ });