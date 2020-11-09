webpackHotUpdate_N_E("pages/shop/[shop]",{

/***/ "./pages/shop/[shop].jsx":
/*!*******************************!*\
  !*** ./pages/shop/[shop].jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general_components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general_components/Container */ "./components/general_components/Container.jsx");
/* harmony import */ var _components_shop_components_topbot_HeaderTienda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shop_components/topbot/HeaderTienda */ "./components/shop_components/topbot/HeaderTienda.jsx");
/* harmony import */ var _components_shop_components_topbot_FooterTienda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shop_components/topbot/FooterTienda */ "./components/shop_components/topbot/FooterTienda.jsx");
/* harmony import */ var _components_shop_components_categorias_ContentCategoria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shop_components/categorias/ContentCategoria */ "./components/shop_components/categorias/ContentCategoria.jsx");
/* harmony import */ var _components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shop_components/ContentShop */ "./components/shop_components/ContentShop.jsx");
/* harmony import */ var _components_general_components_header_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/general_components/header/Title */ "./components/general_components/header/Title.jsx");
/* harmony import */ var _components_shop_components_categorias_CategoriaItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shop_components/categorias/CategoriaItem */ "./components/shop_components/categorias/CategoriaItem.jsx");
/* harmony import */ var _components_general_components_card_CardComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/general_components/card/CardComponent */ "./components/general_components/card/CardComponent.jsx");
/* harmony import */ var _components_general_components_card_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/general_components/card/BiggerCardComponent */ "./components/general_components/card/BiggerCardComponent.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_general_components_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/general_components/Loader */ "./components/general_components/Loader.jsx");
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/antho/Desktop/ShopAR/pages/shop/[shop].jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//Imports de componentes








 //Imports para librerias de react y manejo de hooks





 //Fetcher para tomar los datos del api

var fetcher = function fetcher(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

var ShopPage = function ShopPage() {
  _s();

  //Controladores de estado
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      categoryClicked = _useState[0],
      setCategoryClicked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      nameCategory = _useState2[0],
      setNameCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      dataShopAsync = _useState3[0],
      setDataShopAsync = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      lastState = _useState5[0],
      setLastState = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      clickedBigger = _useState6[0],
      setClickedBigger = _useState6[1]; //Multiples fetch por componentes


  var categorias = [];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_12__["default"])("/api/categorias", fetcher),
      data = _useSWR.data;

  data == undefined ? categorias = [] : categorias = data; //Uso de router para obtener querys y categorias

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  var shop = router.query.shop;
  var generalCategory = shop + " Comunica"; //Funcion para renderizar los datos de un componente hijo clickeado

  var changeDataShop = function changeDataShop(newState) {
    console.log(newState);

    if (newState == false) {
      setLastState(newState);
      setCategoryClicked(newState);
    } else {
      if (newState == lastState) {
        console.log(newState + "" + lastState);
        console.log("dos presionados");
        setLastState(newState);
        setCategoryClicked(newState);
      } else {
        setCategoryClicked(newState);
      }
    }
  };

  var changeDataShopBigger = function changeDataShopBigger(newState) {
    setClickedBigger(newState);
    console.log(clickedBigger);
  };

  var getCategoryName = function getCategoryName(nameCategory) {
    setNameCategory(nameCategory.toUpperCase());
    console.log(nameCategory);
  };

  var getItemShop = function getItemShop(items) {
    items == undefined ? setDataShopAsync([]) : setDataShopAsync(items);
    console.log(dataShopAsync);
  };

  var loader = function loader() {
    if (dataShopAsync.length == 0) {
      setTimeout(function () {
        setLoading(false);
      }, 5000);
    }
  }; //Use efect para cargar en true la pestaña de comunicacion apenas
  //se inicalice el componente


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (dataShopAsync.length == 0) {
      setTimeout(function () {
        setLoading(false);
      }, 5000);
    }

    if (!categoryClicked) {
      setDataShopAsync([]);
    }

    setClickedBigger(false);
  }, []); //Funcion principal

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    exit: "pageExit",
    initial: "initial",
    animate: "animate",
    variants: {
      pageExit: {
        opacity: 0
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 0.6
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx(_components_shop_components_topbot_HeaderTienda__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageUrl: "/images/foto3.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx(_components_general_components_header_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    titulo: shop,
    descripcion: "\xA1Selecciona la categor\xEDa de inter\xE9s y deisfruta de la realidad aumentada!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  })), __jsx(_components_general_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "ShopAR - Tienda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx(_components_shop_components_categorias_ContentCategoria__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, categorias.map(function (categoria) {
    return __jsx(_components_shop_components_categorias_CategoriaItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      categoryUrl: categoria.url,
      categoryName: categoria.name,
      categoryAlt: categoria.name,
      color: categoria.color,
      changeDataShop: changeDataShop,
      getCategoryName: getCategoryName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    });
  })), clickedBigger ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "new",
    getItemShop: getItemShop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, dataShopAsync.map(function (item) {
    return __jsx(_components_general_components_card_CardComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      imageUrl: item.imageUrl,
      imageAlt: item.imageAlt,
      title: item.title,
      description: item.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 25
      }
    });
  }))) : categoryClicked ? __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: generalCategory.toUpperCase(),
    getItemShop: getItemShop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx(_components_general_components_card_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    imageUrl: "/images/new.gif",
    title: "\xA1Con\xF3ce las primeras implementaciones en Realidad Aumentada!",
    description: "No te quedes sin probarlo",
    changeDataShopBigger: changeDataShopBigger,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }
  }), __jsx(_components_general_components_card_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    imageUrl: "/images/black.gif",
    title: "\xA1Se acerca Black Friday!",
    description: "Con\xF3ce nuestras ofertas %",
    changeDataShopBigger: changeDataShopBigger,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }), __jsx(_components_general_components_card_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    imageUrl: "https://media.giphy.com/media/PtLRJXYSWDGOk/giphy.gif",
    title: "Con\xF3ce Nuestras Ofertas del D\xEDa",
    description: "No te quedes sin su producto",
    changeDataShopBigger: changeDataShopBigger,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 19
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: nameCategory,
    getItemShop: getItemShop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 19
    }
  }, isLoading ? __jsx(_components_general_components_Loader__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 23
    }
  }) : dataShopAsync.map(function (item) {
    return __jsx(_components_general_components_card_CardComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      imageUrl: item.imageUrl,
      imageAlt: item.imageAlt,
      title: item.title,
      description: item.description,
      isNuevo: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 27
      }
    });
  }))))))), __jsx(_components_shop_components_topbot_FooterTienda__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }));
};

_s(ShopPage, "G9qFJkilijSx2Mcf95KbpzE3kik=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_12__["default"], next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"]];
});

_c = ShopPage;
/* harmony default export */ __webpack_exports__["default"] = (ShopPage);

var _c;

$RefreshReg$(_c, "ShopPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9bc2hvcF0uanN4Il0sIm5hbWVzIjpbImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiU2hvcFBhZ2UiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5Q2xpY2tlZCIsInNldENhdGVnb3J5Q2xpY2tlZCIsIm5hbWVDYXRlZ29yeSIsInNldE5hbWVDYXRlZ29yeSIsImRhdGFTaG9wQXN5bmMiLCJzZXREYXRhU2hvcEFzeW5jIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImxhc3RTdGF0ZSIsInNldExhc3RTdGF0ZSIsImNsaWNrZWRCaWdnZXIiLCJzZXRDbGlja2VkQmlnZ2VyIiwiY2F0ZWdvcmlhcyIsInVzZVNXUiIsImRhdGEiLCJ1bmRlZmluZWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaG9wIiwicXVlcnkiLCJnZW5lcmFsQ2F0ZWdvcnkiLCJjaGFuZ2VEYXRhU2hvcCIsIm5ld1N0YXRlIiwiY29uc29sZSIsImxvZyIsImNoYW5nZURhdGFTaG9wQmlnZ2VyIiwiZ2V0Q2F0ZWdvcnlOYW1lIiwidG9VcHBlckNhc2UiLCJnZXRJdGVtU2hvcCIsIml0ZW1zIiwibG9hZGVyIiwibGVuZ3RoIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsInBhZ2VFeGl0Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYXAiLCJjYXRlZ29yaWEiLCJuYW1lIiwiY29sb3IiLCJpdGVtIiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtB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Q21DLEdBQWQsQ0FBa0IsVUFBQ0ksSUFBRCxFQUFVO0FBQzFCLFdBQ0UsTUFBQyx5RkFBRDtBQUNFLGNBQVEsRUFBRUEsSUFBSSxDQUFDQyxRQURqQjtBQUVFLGNBQVEsRUFBRUQsSUFBSSxDQUFDRSxRQUZqQjtBQUdFLFdBQUssRUFBRUYsSUFBSSxDQUFDRyxLQUhkO0FBSUUsaUJBQVcsRUFBRUgsSUFBSSxDQUFDSSxXQUpwQjtBQUtFLGFBQU8sRUFBRSxJQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVNELEdBVkQsQ0FKSixDQURGLENBdkRKLENBREYsQ0FERixDQURGLENBdEJGLEVBd0dFLE1BQUMsdUZBQUQ7QUFBYyxRQUFJLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhHRixDQURGO0FBNEdELENBcExEOztHQUFNakQsUTtVQVdhZSw0QyxFQUlGSSxzRDs7O0tBZlhuQixRO0FBc0xTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wL1tzaG9wXS4yNmFmMGVhZjEzYmUxN2JiZDc4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9JbXBvcnRzIGRlIGNvbXBvbmVudGVzXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCBIZWFkZXJUaWVuZGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL3RvcGJvdC9IZWFkZXJUaWVuZGFcIjtcbmltcG9ydCBGb290ZXJUaWVuZGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL3RvcGJvdC9Gb290ZXJUaWVuZGFcIjtcbmltcG9ydCBDb250ZW50Q2F0ZWdvcmlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy9jYXRlZ29yaWFzL0NvbnRlbnRDYXRlZ29yaWFcIjtcbmltcG9ydCBDb250ZW50U2hvcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvQ29udGVudFNob3BcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvaGVhZGVyL1RpdGxlXCI7XG5pbXBvcnQgQ2F0ZWdvcmlhSXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvY2F0ZWdvcmlhcy9DYXRlZ29yaWFJdGVtXCI7XG5pbXBvcnQgQ2FyZENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvY2FyZC9DYXJkQ29tcG9uZW50XCI7XG5pbXBvcnQgQmlnZ2VyQ2FyZENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvY2FyZC9CaWdnZXJDYXJkQ29tcG9uZW50XCI7XG5cbi8vSW1wb3J0cyBwYXJhIGxpYnJlcmlhcyBkZSByZWFjdCB5IG1hbmVqbyBkZSBob29rc1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9Mb2FkZXJcIjtcblxuLy9GZXRjaGVyIHBhcmEgdG9tYXIgbG9zIGRhdG9zIGRlbCBhcGlcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbmNvbnN0IFNob3BQYWdlID0gKCkgPT4ge1xuICAvL0NvbnRyb2xhZG9yZXMgZGUgZXN0YWRvXG4gIGNvbnN0IFtjYXRlZ29yeUNsaWNrZWQsIHNldENhdGVnb3J5Q2xpY2tlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW25hbWVDYXRlZ29yeSwgc2V0TmFtZUNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGF0YVNob3BBc3luYywgc2V0RGF0YVNob3BBc3luY10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsYXN0U3RhdGUsIHNldExhc3RTdGF0ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2NsaWNrZWRCaWdnZXIsIHNldENsaWNrZWRCaWdnZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vTXVsdGlwbGVzIGZldGNoIHBvciBjb21wb25lbnRlc1xuICBsZXQgY2F0ZWdvcmlhcyA9IFtdO1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihcIi9hcGkvY2F0ZWdvcmlhc1wiLCBmZXRjaGVyKTtcbiAgZGF0YSA9PSB1bmRlZmluZWQgPyAoY2F0ZWdvcmlhcyA9IFtdKSA6IChjYXRlZ29yaWFzID0gZGF0YSk7XG5cbiAgLy9Vc28gZGUgcm91dGVyIHBhcmEgb2J0ZW5lciBxdWVyeXMgeSBjYXRlZ29yaWFzXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHNob3AgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgZ2VuZXJhbENhdGVnb3J5ID0gc2hvcCArIFwiIENvbXVuaWNhXCI7XG5cbiAgLy9GdW5jaW9uIHBhcmEgcmVuZGVyaXphciBsb3MgZGF0b3MgZGUgdW4gY29tcG9uZW50ZSBoaWpvIGNsaWNrZWFkb1xuICBjb25zdCBjaGFuZ2VEYXRhU2hvcCA9IChuZXdTdGF0ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG5ld1N0YXRlKTtcbiAgICBpZiAobmV3U3RhdGUgPT0gZmFsc2UpIHtcbiAgICAgIHNldExhc3RTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICBzZXRDYXRlZ29yeUNsaWNrZWQobmV3U3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmV3U3RhdGUgPT0gbGFzdFN0YXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1N0YXRlICsgXCJcIiArIGxhc3RTdGF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZG9zIHByZXNpb25hZG9zXCIpO1xuICAgICAgICBzZXRMYXN0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICBzZXRDYXRlZ29yeUNsaWNrZWQobmV3U3RhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q2F0ZWdvcnlDbGlja2VkKG5ld1N0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IGNoYW5nZURhdGFTaG9wQmlnZ2VyID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgc2V0Q2xpY2tlZEJpZ2dlcihuZXdTdGF0ZSk7XG4gICAgY29uc29sZS5sb2coY2xpY2tlZEJpZ2dlcik7XG4gIH07XG4gIGNvbnN0IGdldENhdGVnb3J5TmFtZSA9IChuYW1lQ2F0ZWdvcnkpID0+IHtcbiAgICBzZXROYW1lQ2F0ZWdvcnkobmFtZUNhdGVnb3J5LnRvVXBwZXJDYXNlKCkpO1xuICAgIGNvbnNvbGUubG9nKG5hbWVDYXRlZ29yeSk7XG4gIH07XG4gIGNvbnN0IGdldEl0ZW1TaG9wID0gKGl0ZW1zKSA9PiB7XG4gICAgaXRlbXMgPT0gdW5kZWZpbmVkID8gc2V0RGF0YVNob3BBc3luYyhbXSkgOiBzZXREYXRhU2hvcEFzeW5jKGl0ZW1zKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhU2hvcEFzeW5jKTtcbiAgfTtcblxuICBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XG4gICAgaWYgKGRhdGFTaG9wQXN5bmMubGVuZ3RoID09IDApIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfTtcblxuICAvL1VzZSBlZmVjdCBwYXJhIGNhcmdhciBlbiB0cnVlIGxhIHBlc3Rhw7FhIGRlIGNvbXVuaWNhY2lvbiBhcGVuYXNcbiAgLy9zZSBpbmljYWxpY2UgZWwgY29tcG9uZW50ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhU2hvcEFzeW5jLmxlbmd0aCA9PSAwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9XG4gICAgaWYgKCFjYXRlZ29yeUNsaWNrZWQpIHtcbiAgICAgIHNldERhdGFTaG9wQXN5bmMoW10pO1xuICAgIH1cbiAgICBzZXRDbGlja2VkQmlnZ2VyKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIC8vRnVuY2lvbiBwcmluY2lwYWxcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgZXhpdD1cInBhZ2VFeGl0XCJcbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgIHBhZ2VFeGl0OiB7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZGVyVGllbmRhIGltYWdlVXJsPVwiL2ltYWdlcy9mb3RvMy5qcGdcIj5cbiAgICAgICAgPFRpdGxlXG4gICAgICAgICAgdGl0dWxvPXtzaG9wfVxuICAgICAgICAgIGRlc2NyaXBjaW9uPVwiwqFTZWxlY2Npb25hIGxhIGNhdGVnb3LDrWEgZGUgaW50ZXLDqXMgeSBkZWlzZnJ1dGEgZGUgbGEgcmVhbGlkYWQgYXVtZW50YWRhIVwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWRlclRpZW5kYT5cbiAgICAgIDxDb250YWluZXIgdGl0bGU9XCJTaG9wQVIgLSBUaWVuZGFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPENvbnRlbnRDYXRlZ29yaWE+XG4gICAgICAgICAgICAgICAge2NhdGVnb3JpYXMubWFwKChjYXRlZ29yaWEpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWFJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlVcmw9e2NhdGVnb3JpYS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lPXtjYXRlZ29yaWEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFsdD17Y2F0ZWdvcmlhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NhdGVnb3JpYS5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VEYXRhU2hvcD17Y2hhbmdlRGF0YVNob3B9XG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Q2F0ZWdvcnlOYW1lPXtnZXRDYXRlZ29yeU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0NvbnRlbnRDYXRlZ29yaWE+XG4gICAgICAgICAgICAgIHtjbGlja2VkQmlnZ2VyID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8Q29udGVudFNob3AgbmFtZT1cIm5ld1wiIGdldEl0ZW1TaG9wPXtnZXRJdGVtU2hvcH0+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhU2hvcEFzeW5jLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17aXRlbS5pbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VBbHQ9e2l0ZW0uaW1hZ2VBbHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L0NvbnRlbnRTaG9wPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogY2F0ZWdvcnlDbGlja2VkID8gKFxuICAgICAgICAgICAgICAgIDxDb250ZW50U2hvcFxuICAgICAgICAgICAgICAgICAgbmFtZT17Z2VuZXJhbENhdGVnb3J5LnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICBnZXRJdGVtU2hvcD17Z2V0SXRlbVNob3B9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJpZ2dlckNhcmRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9XCIvaW1hZ2VzL25ldy5naWZcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIsKhQ29uw7NjZSBsYXMgcHJpbWVyYXMgaW1wbGVtZW50YWNpb25lcyBlbiBSZWFsaWRhZCBBdW1lbnRhZGEhXCJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJObyB0ZSBxdWVkZXMgc2luIHByb2JhcmxvXCJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRGF0YVNob3BCaWdnZXI9e2NoYW5nZURhdGFTaG9wQmlnZ2VyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxCaWdnZXJDYXJkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPVwiL2ltYWdlcy9ibGFjay5naWZcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIsKhU2UgYWNlcmNhIEJsYWNrIEZyaWRheSFcIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNvbsOzY2UgbnVlc3RyYXMgb2ZlcnRhcyAlXCJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRGF0YVNob3BCaWdnZXI9e2NoYW5nZURhdGFTaG9wQmlnZ2VyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxCaWdnZXJDYXJkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPVwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvUHRMUkpYWVNXREdPay9naXBoeS5naWZcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbsOzY2UgTnVlc3RyYXMgT2ZlcnRhcyBkZWwgRMOtYVwiXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTm8gdGUgcXVlZGVzIHNpbiBzdSBwcm9kdWN0b1wiXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZURhdGFTaG9wQmlnZ2VyPXtjaGFuZ2VEYXRhU2hvcEJpZ2dlcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Db250ZW50U2hvcD5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPENvbnRlbnRTaG9wIG5hbWU9e25hbWVDYXRlZ29yeX0gZ2V0SXRlbVNob3A9e2dldEl0ZW1TaG9wfT5cbiAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVNob3BBc3luYy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e2l0ZW0uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VBbHQ9e2l0ZW0uaW1hZ2VBbHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOdWV2bz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvQ29udGVudFNob3A+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxGb290ZXJUaWVuZGEgaHJlZj1cIi9tZW51XCIgLz5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG9wUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=