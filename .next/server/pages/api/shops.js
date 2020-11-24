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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o0cp");


/***/ }),

/***/ "NWFc":
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "o0cp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("s+Wl");


function getShops(req, res) {
  _firebase_admin__WEBPACK_IMPORTED_MODULE_0__["firestore"].collection("shops").get().then(snapshot => {
    let sendData = [];
    snapshot.docs.map(doc => sendData.push(doc.data()));
    res.json(sendData);
    res.status(500).end();
  }).catch(() => {
    res.status(404).end();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (getShops);

/***/ }),

/***/ "s+Wl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
var admin = __webpack_require__("NWFc");

var serviceAccount = __webpack_require__("zjrh");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://shopar-2020.firebaseio.com"
  });
} catch (e) {}

const firestore = admin.firestore();

/***/ }),

/***/ "zjrh":
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"shopar-2020\",\"private_key_id\":\"0ee3f9bfc7832e9260302142c5e09c0bfe408242\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCQTLZVZk1+YjuG\\nNhbUUFDdcenuysts+cj+RrvpAlxkaMDbtUX5dmbsF6DXWJhvAj15PN4LxTOrq3bz\\nRYe8kyKpl3i5kNypKxd6JpnMLFpIqzLEqqG3+T+GeLr6hBzoqiyhV9L7AvGX87La\\nTbpiI1xubEAhfVGyz/n5mHjwfWs1O5BwSti2wI6fvhvdppQNyC97/DPV5bFvkibl\\nUso8skHnYwpm5Adv/+iLlqCBKtxkiJ//0zf/aPvx2k8l9xbF2Sn0ueDgkLvi2o1H\\nl7yk7CyGzT91Yo2PtSoJssigZooLUR9Jd0C5rPee/GlKgK0u3+3vMNUU/JdQ2LSJ\\nW4xSmGFhAgMBAAECgf8Pr2ixmdpClnKJh/2E+SAbPDcZgMolQvyIOCI5HFJFcRvg\\nkBygj/p1H1q0bByHY7P//ln92i0chNZ1cC+3UDtHR16A65wXhbjd5kKSWmM7BXiL\\ne4XKWvZj7r/g/dV1x3+btD1B7+0IBh5LStKeCfx9fzow8HgJ0lrdkGQRqImr0m8+\\naAuBSrjblwZaPvObJXa63PKlrkkc1naJtZRRBRDUxNKGW2CBn286cDXsO936xh7e\\nGMMgnc2IjzGLV3ZBvzHdZ93hv0ZdL8nTndyFlaoYcwDE5fqnBJ9wCVHeatb0INN/\\nYtWNEz7F5rGtkfGPujmBxrIBVm1cd8JtnjuufgECgYEAx5SFL5E5UYNQedhgvgDG\\nmaGNcTR6Kly9RatC5FWYonbT4e2CpS2Lw9NFpa3tJq4Qg9OJ3028jw2N0OYu0F7/\\no5TUVT/GjaV6rBB8djzkRkL9l0qk74xnVNo77ka9R4og8QJyRaujKwBg1iSf73G/\\n4ndmgx8uHNoJZ1/CMlQrX2ECgYEAuReUdkI4PRS3OGvxMgBsmXUyGV9XDa/gHy6F\\nQ42NENNMEA9EW7HVobHQqBiVDoUCmtlKpizhpZIPD8sKmM6DLdwequQeXXROPgbp\\nIE3OWltHDnxbQI0culeYMYtFztXqBFtuNIpbBRuDgGI53PwOBmBYYneCJO5Pslit\\nhQ2WQgECgYBBxooKfkM0wSFhttVTaXAKq/qwp4nnsj7S2jmmhStTx/PWzu8yvwsE\\nE/otO2AgUlexCqOyy6zsPJxTj7k4BUcdQ2yjV+x5PGNsl9ZdJX5aRbPMC9bF+DEJ\\n/w6nXfr9u+FVbOf6XDHfdzVy/gkT4hpKae2II1uQOK/GuQGIksLkoQKBgAdljNZJ\\nASxXtpa3oZTo9W4Qg+cFq1ntrFwypLq1XmzMtN5zbbzoV2w1yevdx58j6526j0Qi\\nyQWv15A/AfZnUlCz2jnkEd6UNkg+SHS1B0kPGsDWcWMcAIjl1Twtn6WLYOW5rabF\\n3KtQlSm9Qyi0ne7dTMrqkbXeHCs5Zf3KNDYBAoGAfIrdXa37lyeHQ6le9/rY3j0v\\nCxo5/lFjLp558EkzcfJ+6/35KWheVl/NehS0+83t+YodGHKTH5zkvp2oZnXwCZPr\\nHviXQzGIKGlPpPg57RQ8iQhvfMhlAP2BWf5K3jSakz6CZ6PpTyw2lcbmb6ja32f5\\nSgRZBvbCB0z2G5iLPdE=\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-jbxke@shopar-2020.iam.gserviceaccount.com\",\"client_id\":\"107792741413066370547\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jbxke%40shopar-2020.iam.gserviceaccount.com\"}");

/***/ })

/******/ });