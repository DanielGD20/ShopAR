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
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/antho/Desktop/ShopAR/pages/shop/[shop].jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var fetcher = function fetcher(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

var ShopPage = function ShopPage() {
  _s();

  //Controladores de estado
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      categoryClicked = _useState[0],
      setCategoryClicked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      nameCategory = _useState2[0],
      setNameCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      dataShopAsync = _useState3[0],
      setDataShopAsync = _useState3[1]; //Multiples fetch por componentes


  var categorias = [];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_12__["default"])("/api/categorias", fetcher),
      data = _useSWR.data;

  data == undefined ? categorias = [] : categorias = data; //Uso de router para obtener querys y categorias

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  var shop = router.query.shop;
  var generalCategory = shop + " Comunica"; //Funcion para renderizar los datos de un componente hijo clickeado

  var renderDataCategory = function renderDataCategory(newState) {
    setCategoryClicked(newState);
  };

  var getCategoryName = function getCategoryName(nameCategory) {
    setNameCategory(nameCategory.toUpperCase());
  };

  var getItemShop = function getItemShop(items) {
    items == undefined ? setDataShopAsync([1]) : setDataShopAsync(items);
  }; // const { data } = useSWR(`/api/items/${nameCategory}`, fetcher);
  // setDataShopAsync(data);
  //Funcion principal


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
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(_components_shop_components_topbot_HeaderTienda__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageUrl: "/images/foto3.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(_components_general_components_header_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    titulo: shop,
    descripcion: "\xA1Selecciona la categor\xEDa de inter\xE9s y deisfruta de la realidad aumentada!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })), __jsx(_components_general_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "ShopAR - Tienda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(_components_shop_components_categorias_ContentCategoria__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, categorias.map(function (categoria) {
    return __jsx(_components_shop_components_categorias_CategoriaItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      categoryUrl: categoria.url,
      categoryName: categoria.name,
      categoryAlt: categoria.name,
      color: categoria.color,
      changeDataShop: renderDataCategory,
      getCategoryName: getCategoryName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }
    });
  })), categoryClicked ? __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: generalCategory.toUpperCase(),
    getItemShop: getItemShop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(_components_general_components_card_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    imageUrl: "https://source.unsplash.com/vZJdYl5JVXY/660x360",
    title: "Bigger component title",
    description: "bigger component description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: nameCategory,
    getItemShop: getItemShop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
        lineNumber: 107,
        columnNumber: 25
      }
    });
  }))))))), __jsx(_components_shop_components_topbot_FooterTienda__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }));
};

_s(ShopPage, "jq1tc3lJA+xYPKPxCzcJUvci5qo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9bc2hvcF0uanN4Il0sIm5hbWVzIjpbImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiU2hvcFBhZ2UiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5Q2xpY2tlZCIsInNldENhdGVnb3J5Q2xpY2tlZCIsIm5hbWVDYXRlZ29yeSIsInNldE5hbWVDYXRlZ29yeSIsImRhdGFTaG9wQXN5bmMiLCJzZXREYXRhU2hvcEFzeW5jIiwiY2F0ZWdvcmlhcyIsInVzZVNXUiIsImRhdGEiLCJ1bmRlZmluZWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaG9wIiwicXVlcnkiLCJnZW5lcmFsQ2F0ZWdvcnkiLCJyZW5kZXJEYXRhQ2F0ZWdvcnkiLCJuZXdTdGF0ZSIsImdldENhdGVnb3J5TmFtZSIsInRvVXBwZXJDYXNlIiwiZ2V0SXRlbVNob3AiLCJpdGVtcyIsInBhZ2VFeGl0Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYXAiLCJjYXRlZ29yaWEiLCJuYW1lIiwiY29sb3IiLCJpdGVtIiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsR0FBaEIsQ0FBVDtBQUFBLENBQWhCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckI7QUFEcUIsa0JB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QUE0RUQsQ0EzR0Q7O0dBQU1wQyxRO1VBUWFTLDRDLEVBSUZJLHNEOzs7S0FaWGIsUTtBQTZHU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC9bc2hvcF0uNTQzYTllYjhlNjA1MzIzNGMzYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbF9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IEhlYWRlclRpZW5kYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvdG9wYm90L0hlYWRlclRpZW5kYVwiO1xuaW1wb3J0IEZvb3RlclRpZW5kYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvdG9wYm90L0Zvb3RlclRpZW5kYVwiO1xuaW1wb3J0IENvbnRlbnRDYXRlZ29yaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL2NhdGVnb3JpYXMvQ29udGVudENhdGVnb3JpYVwiO1xuaW1wb3J0IENvbnRlbnRTaG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy9Db250ZW50U2hvcFwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9oZWFkZXIvVGl0bGVcIjtcbmltcG9ydCBDYXRlZ29yaWFJdGVtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy9jYXRlZ29yaWFzL0NhdGVnb3JpYUl0ZW1cIjtcbmltcG9ydCBDYXJkQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9jYXJkL0NhcmRDb21wb25lbnRcIjtcbmltcG9ydCBCaWdnZXJDYXJkQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9jYXJkL0JpZ2dlckNhcmRDb21wb25lbnRcIjtcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG5jb25zdCBTaG9wUGFnZSA9ICgpID0+IHtcbiAgLy9Db250cm9sYWRvcmVzIGRlIGVzdGFkb1xuICBjb25zdCBbY2F0ZWdvcnlDbGlja2VkLCBzZXRDYXRlZ29yeUNsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmFtZUNhdGVnb3J5LCBzZXROYW1lQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkYXRhU2hvcEFzeW5jLCBzZXREYXRhU2hvcEFzeW5jXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvL011bHRpcGxlcyBmZXRjaCBwb3IgY29tcG9uZW50ZXNcbiAgbGV0IGNhdGVnb3JpYXMgPSBbXTtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoXCIvYXBpL2NhdGVnb3JpYXNcIiwgZmV0Y2hlcik7XG4gIGRhdGEgPT0gdW5kZWZpbmVkID8gKGNhdGVnb3JpYXMgPSBbXSkgOiAoY2F0ZWdvcmlhcyA9IGRhdGEpO1xuXG4gIC8vVXNvIGRlIHJvdXRlciBwYXJhIG9idGVuZXIgcXVlcnlzIHkgY2F0ZWdvcmlhc1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzaG9wIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IGdlbmVyYWxDYXRlZ29yeSA9IHNob3AgKyBcIiBDb211bmljYVwiO1xuXG4gIC8vRnVuY2lvbiBwYXJhIHJlbmRlcml6YXIgbG9zIGRhdG9zIGRlIHVuIGNvbXBvbmVudGUgaGlqbyBjbGlja2VhZG9cbiAgY29uc3QgcmVuZGVyRGF0YUNhdGVnb3J5ID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgc2V0Q2F0ZWdvcnlDbGlja2VkKG5ld1N0YXRlKTtcbiAgfTtcbiAgY29uc3QgZ2V0Q2F0ZWdvcnlOYW1lID0gKG5hbWVDYXRlZ29yeSkgPT4ge1xuICAgIHNldE5hbWVDYXRlZ29yeShuYW1lQ2F0ZWdvcnkudG9VcHBlckNhc2UoKSk7XG4gIH07XG4gIGNvbnN0IGdldEl0ZW1TaG9wID0gKGl0ZW1zKSA9PiB7XG4gICAgaXRlbXMgPT0gdW5kZWZpbmVkID8gc2V0RGF0YVNob3BBc3luYyhbMV0pIDogc2V0RGF0YVNob3BBc3luYyhpdGVtcyk7XG4gIH07XG5cbiAgLy8gY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoYC9hcGkvaXRlbXMvJHtuYW1lQ2F0ZWdvcnl9YCwgZmV0Y2hlcik7XG4gIC8vIHNldERhdGFTaG9wQXN5bmMoZGF0YSk7XG5cbiAgLy9GdW5jaW9uIHByaW5jaXBhbFxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBleGl0PVwicGFnZUV4aXRcIlxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgcGFnZUV4aXQ6IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxIZWFkZXJUaWVuZGEgaW1hZ2VVcmw9XCIvaW1hZ2VzL2ZvdG8zLmpwZ1wiPlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICB0aXR1bG89e3Nob3B9XG4gICAgICAgICAgZGVzY3JpcGNpb249XCLCoVNlbGVjY2lvbmEgbGEgY2F0ZWdvcsOtYSBkZSBpbnRlcsOpcyB5IGRlaXNmcnV0YSBkZSBsYSByZWFsaWRhZCBhdW1lbnRhZGEhXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZGVyVGllbmRhPlxuICAgICAgPENvbnRhaW5lciB0aXRsZT1cIlNob3BBUiAtIFRpZW5kYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8Q29udGVudENhdGVnb3JpYT5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcmlhcy5tYXAoKGNhdGVnb3JpYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3JpYUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVVybD17Y2F0ZWdvcmlhLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeU5hbWU9e2NhdGVnb3JpYS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5QWx0PXtjYXRlZ29yaWEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y2F0ZWdvcmlhLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZURhdGFTaG9wPXtyZW5kZXJEYXRhQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Q2F0ZWdvcnlOYW1lPXtnZXRDYXRlZ29yeU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0NvbnRlbnRDYXRlZ29yaWE+XG5cbiAgICAgICAgICAgICAge2NhdGVnb3J5Q2xpY2tlZCA/IChcbiAgICAgICAgICAgICAgICA8Q29udGVudFNob3BcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2dlbmVyYWxDYXRlZ29yeS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgZ2V0SXRlbVNob3A9e2dldEl0ZW1TaG9wfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCaWdnZXJDYXJkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPVwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3ZaSmRZbDVKVlhZLzY2MHgzNjBcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkJpZ2dlciBjb21wb25lbnQgdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImJpZ2dlciBjb21wb25lbnQgZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRTaG9wPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8Q29udGVudFNob3AgbmFtZT17bmFtZUNhdGVnb3J5fSBnZXRJdGVtU2hvcD17Z2V0SXRlbVNob3B9PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YVNob3BBc3luYy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e2l0ZW0uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQWx0PXtpdGVtLmltYWdlQWx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9Db250ZW50U2hvcD5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEZvb3RlclRpZW5kYSBocmVmPVwiL1wiIC8+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9