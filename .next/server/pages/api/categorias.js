module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/categorias/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/categorias/index.js":
/*!***************************************!*\
  !*** ./pages/api/categorias/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../firebase/admin */ "./pages/firebase/admin.js");

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  _firebase_admin__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection("categorias").orderBy("orden", "asc").get().then(snapshot => {
    let sendData = [];
    snapshot.docs.map(doc => sendData.push(doc.data()));
    res.json(sendData);
    res.status(500).end();
  }).catch(() => {
    res.status(404).end();
  });
});

/***/ }),

/***/ "./pages/firebase/admin.js":
/*!*********************************!*\
  !*** ./pages/firebase/admin.js ***!
  \*********************************/
/*! exports provided: firestore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
var admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");

var serviceAccount = __webpack_require__(/*! ./firebasekey.json */ "./pages/firebase/firebasekey.json");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://shopar-2020.firebaseio.com"
  });
} catch (e) {}

const firestore = admin.firestore();

/***/ }),

/***/ "./pages/firebase/firebasekey.json":
/*!*****************************************!*\
  !*** ./pages/firebase/firebasekey.json ***!
  \*****************************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"shopar-2020\",\"private_key_id\":\"0ee3f9bfc7832e9260302142c5e09c0bfe408242\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCQTLZVZk1+YjuG\\nNhbUUFDdcenuysts+cj+RrvpAlxkaMDbtUX5dmbsF6DXWJhvAj15PN4LxTOrq3bz\\nRYe8kyKpl3i5kNypKxd6JpnMLFpIqzLEqqG3+T+GeLr6hBzoqiyhV9L7AvGX87La\\nTbpiI1xubEAhfVGyz/n5mHjwfWs1O5BwSti2wI6fvhvdppQNyC97/DPV5bFvkibl\\nUso8skHnYwpm5Adv/+iLlqCBKtxkiJ//0zf/aPvx2k8l9xbF2Sn0ueDgkLvi2o1H\\nl7yk7CyGzT91Yo2PtSoJssigZooLUR9Jd0C5rPee/GlKgK0u3+3vMNUU/JdQ2LSJ\\nW4xSmGFhAgMBAAECgf8Pr2ixmdpClnKJh/2E+SAbPDcZgMolQvyIOCI5HFJFcRvg\\nkBygj/p1H1q0bByHY7P//ln92i0chNZ1cC+3UDtHR16A65wXhbjd5kKSWmM7BXiL\\ne4XKWvZj7r/g/dV1x3+btD1B7+0IBh5LStKeCfx9fzow8HgJ0lrdkGQRqImr0m8+\\naAuBSrjblwZaPvObJXa63PKlrkkc1naJtZRRBRDUxNKGW2CBn286cDXsO936xh7e\\nGMMgnc2IjzGLV3ZBvzHdZ93hv0ZdL8nTndyFlaoYcwDE5fqnBJ9wCVHeatb0INN/\\nYtWNEz7F5rGtkfGPujmBxrIBVm1cd8JtnjuufgECgYEAx5SFL5E5UYNQedhgvgDG\\nmaGNcTR6Kly9RatC5FWYonbT4e2CpS2Lw9NFpa3tJq4Qg9OJ3028jw2N0OYu0F7/\\no5TUVT/GjaV6rBB8djzkRkL9l0qk74xnVNo77ka9R4og8QJyRaujKwBg1iSf73G/\\n4ndmgx8uHNoJZ1/CMlQrX2ECgYEAuReUdkI4PRS3OGvxMgBsmXUyGV9XDa/gHy6F\\nQ42NENNMEA9EW7HVobHQqBiVDoUCmtlKpizhpZIPD8sKmM6DLdwequQeXXROPgbp\\nIE3OWltHDnxbQI0culeYMYtFztXqBFtuNIpbBRuDgGI53PwOBmBYYneCJO5Pslit\\nhQ2WQgECgYBBxooKfkM0wSFhttVTaXAKq/qwp4nnsj7S2jmmhStTx/PWzu8yvwsE\\nE/otO2AgUlexCqOyy6zsPJxTj7k4BUcdQ2yjV+x5PGNsl9ZdJX5aRbPMC9bF+DEJ\\n/w6nXfr9u+FVbOf6XDHfdzVy/gkT4hpKae2II1uQOK/GuQGIksLkoQKBgAdljNZJ\\nASxXtpa3oZTo9W4Qg+cFq1ntrFwypLq1XmzMtN5zbbzoV2w1yevdx58j6526j0Qi\\nyQWv15A/AfZnUlCz2jnkEd6UNkg+SHS1B0kPGsDWcWMcAIjl1Twtn6WLYOW5rabF\\n3KtQlSm9Qyi0ne7dTMrqkbXeHCs5Zf3KNDYBAoGAfIrdXa37lyeHQ6le9/rY3j0v\\nCxo5/lFjLp558EkzcfJ+6/35KWheVl/NehS0+83t+YodGHKTH5zkvp2oZnXwCZPr\\nHviXQzGIKGlPpPg57RQ8iQhvfMhlAP2BWf5K3jSakz6CZ6PpTyw2lcbmb6ja32f5\\nSgRZBvbCB0z2G5iLPdE=\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-jbxke@shopar-2020.iam.gserviceaccount.com\",\"client_id\":\"107792741413066370547\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jbxke%40shopar-2020.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NhdGVnb3JpYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZmlyZWJhc2UvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtYWRtaW5cIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwib3JkZXJCeSIsImdldCIsInRoZW4iLCJzbmFwc2hvdCIsInNlbmREYXRhIiwiZG9jcyIsIm1hcCIsImRvYyIsInB1c2giLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImVuZCIsImNhdGNoIiwiYWRtaW4iLCJyZXF1aXJlIiwic2VydmljZUFjY291bnQiLCJpbml0aWFsaXplQXBwIiwiY3JlZGVudGlhbCIsImNlcnQiLCJkYXRhYmFzZVVSTCIsImUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBRWUsZ0VBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzNCQywyREFBUyxDQUNOQyxVQURILENBQ2MsWUFEZCxFQUVHQyxPQUZILENBRVcsT0FGWCxFQUVvQixLQUZwQixFQUdHQyxHQUhILEdBSUdDLElBSkgsQ0FJU0MsUUFBRCxJQUFjO0FBQ2xCLFFBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0FELFlBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxHQUFkLENBQW1CQyxHQUFELElBQVNILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRCxHQUFHLENBQUNFLElBQUosRUFBZCxDQUEzQjtBQUNBWixPQUFHLENBQUNhLElBQUosQ0FBU04sUUFBVDtBQUNBUCxPQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQjtBQUNELEdBVEgsRUFVR0MsS0FWSCxDQVVTLE1BQU07QUFDWGhCLE9BQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0QsR0FaSDtBQWFELENBZEQsRTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBLElBQUlFLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQ0FBRCxDQUFuQjs7QUFFQSxJQUFJQyxjQUFjLEdBQUdELG1CQUFPLENBQUMsNkRBQUQsQ0FBNUI7O0FBRUEsSUFBSTtBQUNGRCxPQUFLLENBQUNHLGFBQU4sQ0FBb0I7QUFDbEJDLGNBQVUsRUFBRUosS0FBSyxDQUFDSSxVQUFOLENBQWlCQyxJQUFqQixDQUFzQkgsY0FBdEIsQ0FETTtBQUVsQkksZUFBVyxFQUFFO0FBRkssR0FBcEI7QUFJRCxDQUxELENBS0UsT0FBT0MsQ0FBUCxFQUFVLENBQUU7O0FBRVAsTUFBTXZCLFNBQVMsR0FBR2dCLEtBQUssQ0FBQ2hCLFNBQU4sRUFBbEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hQLDJDIiwiZmlsZSI6InBhZ2VzL2FwaS9jYXRlZ29yaWFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvY2F0ZWdvcmlhcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCIuLi8uLi9maXJlYmFzZS9hZG1pblwiO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgZmlyZXN0b3JlXG4gICAgLmNvbGxlY3Rpb24oXCJjYXRlZ29yaWFzXCIpXG4gICAgLm9yZGVyQnkoXCJvcmRlblwiLCBcImFzY1wiKVxuICAgIC5nZXQoKVxuICAgIC50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgbGV0IHNlbmREYXRhID0gW107XG4gICAgICBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiBzZW5kRGF0YS5wdXNoKGRvYy5kYXRhKCkpKTtcbiAgICAgIHJlcy5qc29uKHNlbmREYXRhKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5lbmQoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICByZXMuc3RhdHVzKDQwNCkuZW5kKCk7XG4gICAgfSk7XG59O1xuIiwidmFyIGFkbWluID0gcmVxdWlyZShcImZpcmViYXNlLWFkbWluXCIpO1xuXG52YXIgc2VydmljZUFjY291bnQgPSByZXF1aXJlKFwiLi9maXJlYmFzZWtleS5qc29uXCIpO1xuXG50cnkge1xuICBhZG1pbi5pbml0aWFsaXplQXBwKHtcbiAgICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoc2VydmljZUFjY291bnQpLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vc2hvcGFyLTIwMjAuZmlyZWJhc2Vpby5jb21cIixcbiAgfSk7XG59IGNhdGNoIChlKSB7fVxuXG5leHBvcnQgY29uc3QgZmlyZXN0b3JlID0gYWRtaW4uZmlyZXN0b3JlKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS1hZG1pblwiKTsiXSwic291cmNlUm9vdCI6IiJ9