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
  _firebase_admin__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection("categorias").get().then(snapshot => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NhdGVnb3JpYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZmlyZWJhc2UvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtYWRtaW5cIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90Iiwic2VuZERhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwicHVzaCIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiZW5kIiwiY2F0Y2giLCJhZG1pbiIsInJlcXVpcmUiLCJzZXJ2aWNlQWNjb3VudCIsImluaXRpYWxpemVBcHAiLCJjcmVkZW50aWFsIiwiY2VydCIsImRhdGFiYXNlVVJMIiwiZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFFZSxnRUFBQ0EsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDM0JDLDJEQUFTLENBQ05DLFVBREgsQ0FDYyxZQURkLEVBRUdDLEdBRkgsR0FHR0MsSUFISCxDQUdTQyxRQUFELElBQWM7QUFDbEIsUUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQUQsWUFBUSxDQUFDRSxJQUFULENBQWNDLEdBQWQsQ0FBbUJDLEdBQUQsSUFBU0gsUUFBUSxDQUFDSSxJQUFULENBQWNELEdBQUcsQ0FBQ0UsSUFBSixFQUFkLENBQTNCO0FBQ0FYLE9BQUcsQ0FBQ1ksSUFBSixDQUFTTixRQUFUO0FBQ0FOLE9BQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0QsR0FSSCxFQVNHQyxLQVRILENBU1MsTUFBTTtBQUNYZixPQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQjtBQUNELEdBWEg7QUFZRCxDQWJELEU7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQSxJQUFJRSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsc0NBQUQsQ0FBbkI7O0FBRUEsSUFBSUMsY0FBYyxHQUFHRCxtQkFBTyxDQUFDLDZEQUFELENBQTVCOztBQUVBLElBQUk7QUFDRkQsT0FBSyxDQUFDRyxhQUFOLENBQW9CO0FBQ2xCQyxjQUFVLEVBQUVKLEtBQUssQ0FBQ0ksVUFBTixDQUFpQkMsSUFBakIsQ0FBc0JILGNBQXRCLENBRE07QUFFbEJJLGVBQVcsRUFBRTtBQUZLLEdBQXBCO0FBSUQsQ0FMRCxDQUtFLE9BQU9DLENBQVAsRUFBVSxDQUFFOztBQUVQLE1BQU10QixTQUFTLEdBQUdlLEtBQUssQ0FBQ2YsU0FBTixFQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFAsMkMiLCJmaWxlIjoicGFnZXMvYXBpL2NhdGVnb3JpYXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9jYXRlZ29yaWFzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlL2FkbWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuICBmaXJlc3RvcmVcbiAgICAuY29sbGVjdGlvbihcImNhdGVnb3JpYXNcIilcbiAgICAuZ2V0KClcbiAgICAudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgIGxldCBzZW5kRGF0YSA9IFtdO1xuICAgICAgc25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gc2VuZERhdGEucHVzaChkb2MuZGF0YSgpKSk7XG4gICAgICByZXMuanNvbihzZW5kRGF0YSk7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuZW5kKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xuICAgIH0pO1xufTtcbiIsInZhciBhZG1pbiA9IHJlcXVpcmUoXCJmaXJlYmFzZS1hZG1pblwiKTtcblxudmFyIHNlcnZpY2VBY2NvdW50ID0gcmVxdWlyZShcIi4vZmlyZWJhc2VrZXkuanNvblwiKTtcblxudHJ5IHtcbiAgYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XG4gICAgY3JlZGVudGlhbDogYWRtaW4uY3JlZGVudGlhbC5jZXJ0KHNlcnZpY2VBY2NvdW50KSxcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3Nob3Bhci0yMDIwLmZpcmViYXNlaW8uY29tXCIsXG4gIH0pO1xufSBjYXRjaCAoZSkge31cblxuZXhwb3J0IGNvbnN0IGZpcmVzdG9yZSA9IGFkbWluLmZpcmVzdG9yZSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UtYWRtaW5cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==