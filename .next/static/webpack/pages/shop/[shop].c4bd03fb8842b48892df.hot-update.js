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
  // const { data } = useSWR("/api/categorias", fetcher);
  // const categorias = data;
  //Uso de router para obtener querys y categorias


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
    items == undefined ? setDataShopAsync([]) : setDataShopAsync(items);
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
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(_components_shop_components_topbot_HeaderTienda__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageUrl: "/images/foto3.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_components_general_components_header_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    titulo: shop,
    descripcion: "\xA1Selecciona la categor\xEDa de inter\xE9s y deisfruta de la realidad aumentada!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })), __jsx(_components_general_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "ShopAR - Tienda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(_components_shop_components_categorias_ContentCategoria__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
        lineNumber: 78,
        columnNumber: 21
      }
    });
  })), categoryClicked ? __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: generalCategory.toUpperCase(),
    getItemShop: getItemShop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx(_components_general_components_card_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    imageUrl: "https://source.unsplash.com/vZJdYl5JVXY/660x360",
    title: "Bigger component title",
    description: "bigger component description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: nameCategory,
    getItemShop: getItemShop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
        lineNumber: 106,
        columnNumber: 25
      }
    });
  }))))))), __jsx(_components_shop_components_topbot_FooterTienda__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }));
};

_s(ShopPage, "og4FgZIKhhPi5M0YkJDw6IqUS88=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9bc2hvcF0uanN4Il0sIm5hbWVzIjpbImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiU2hvcFBhZ2UiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5Q2xpY2tlZCIsInNldENhdGVnb3J5Q2xpY2tlZCIsIm5hbWVDYXRlZ29yeSIsInNldE5hbWVDYXRlZ29yeSIsImRhdGFTaG9wQXN5bmMiLCJzZXREYXRhU2hvcEFzeW5jIiwicm91dGVyIiwidXNlUm91dGVyIiwic2hvcCIsInF1ZXJ5IiwiZ2VuZXJhbENhdGVnb3J5IiwicmVuZGVyRGF0YUNhdGVnb3J5IiwibmV3U3RhdGUiLCJnZXRDYXRlZ29yeU5hbWUiLCJ0b1VwcGVyQ2FzZSIsImdldEl0ZW1TaG9wIiwiaXRlbXMiLCJ1bmRlZmluZWQiLCJwYWdlRXhpdCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2F0ZWdvcmlhcyIsIm1hcCIsImNhdGVnb3JpYSIsIm5hbWUiLCJjb2xvciIsIml0ZW0iLCJpbWFnZVVybCIsImltYWdlQWx0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxHQUFoQixDQUFUO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQjtBQURxQixrQkFFeUJDLHNEQUFRLENBQUMs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K0VBQUQ7QUFDRSxRQUFJLEVBQUVVLGVBQWUsQ0FBQ0ksV0FBaEIsRUFEUjtBQUVFLGVBQVcsRUFBRUMsV0FGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQywrRkFBRDtBQUNFLFlBQVEsRUFBQyxpREFEWDtBQUVFLFNBQUssRUFBQyx3QkFGUjtBQUdFLGVBQVcsRUFBQyw4QkFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FEYyxHQVlkLG1FQUNFLE1BQUMsK0VBQUQ7QUFBYSxRQUFJLEVBQUViLFlBQW5CO0FBQWlDLGVBQVcsRUFBRWEsV0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWCxhQUFhLENBQUNvQixHQUFkLENBQWtCLFVBQUNJLElBQUQsRUFBVTtBQUMzQixXQUNFLE1BQUMseUZBQUQ7QUFDRSxjQUFRLEVBQUVBLElBQUksQ0FBQ0MsUUFEakI7QUFFRSxjQUFRLEVBQUVELElBQUksQ0FBQ0UsUUFGakI7QUFHRSxXQUFLLEVBQUVGLElBQUksQ0FBQ0csS0FIZDtBQUlFLGlCQUFXLEVBQUVILElBQUksQ0FBQ0ksV0FKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBUUQsR0FUQSxDQURILENBREYsQ0E1QkosQ0FERixDQURGLENBREYsQ0F0QkYsRUF3RUUsTUFBQyx1RkFBRDtBQUFjLFFBQUksRUFBQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEVGLENBREY7QUE0RUQsQ0ExR0Q7O0dBQU1sQyxRO1VBV1dTLHNEOzs7S0FYWFQsUTtBQTRHU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC9bc2hvcF0uYzRiZDAzZmI4ODQyYjQ4ODkyZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbF9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IEhlYWRlclRpZW5kYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvdG9wYm90L0hlYWRlclRpZW5kYVwiO1xuaW1wb3J0IEZvb3RlclRpZW5kYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvdG9wYm90L0Zvb3RlclRpZW5kYVwiO1xuaW1wb3J0IENvbnRlbnRDYXRlZ29yaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL2NhdGVnb3JpYXMvQ29udGVudENhdGVnb3JpYVwiO1xuaW1wb3J0IENvbnRlbnRTaG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy9Db250ZW50U2hvcFwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9oZWFkZXIvVGl0bGVcIjtcbmltcG9ydCBDYXRlZ29yaWFJdGVtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy9jYXRlZ29yaWFzL0NhdGVnb3JpYUl0ZW1cIjtcbmltcG9ydCBDYXJkQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9jYXJkL0NhcmRDb21wb25lbnRcIjtcbmltcG9ydCBCaWdnZXJDYXJkQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9jYXJkL0JpZ2dlckNhcmRDb21wb25lbnRcIjtcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG5jb25zdCBTaG9wUGFnZSA9ICgpID0+IHtcbiAgLy9Db250cm9sYWRvcmVzIGRlIGVzdGFkb1xuICBjb25zdCBbY2F0ZWdvcnlDbGlja2VkLCBzZXRDYXRlZ29yeUNsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmFtZUNhdGVnb3J5LCBzZXROYW1lQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkYXRhU2hvcEFzeW5jLCBzZXREYXRhU2hvcEFzeW5jXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvL011bHRpcGxlcyBmZXRjaCBwb3IgY29tcG9uZW50ZXNcbiAgLy8gY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoXCIvYXBpL2NhdGVnb3JpYXNcIiwgZmV0Y2hlcik7XG4gIC8vIGNvbnN0IGNhdGVnb3JpYXMgPSBkYXRhO1xuXG4gIC8vVXNvIGRlIHJvdXRlciBwYXJhIG9idGVuZXIgcXVlcnlzIHkgY2F0ZWdvcmlhc1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzaG9wIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IGdlbmVyYWxDYXRlZ29yeSA9IHNob3AgKyBcIiBDb211bmljYVwiO1xuXG4gIC8vRnVuY2lvbiBwYXJhIHJlbmRlcml6YXIgbG9zIGRhdG9zIGRlIHVuIGNvbXBvbmVudGUgaGlqbyBjbGlja2VhZG9cbiAgY29uc3QgcmVuZGVyRGF0YUNhdGVnb3J5ID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgc2V0Q2F0ZWdvcnlDbGlja2VkKG5ld1N0YXRlKTtcbiAgfTtcbiAgY29uc3QgZ2V0Q2F0ZWdvcnlOYW1lID0gKG5hbWVDYXRlZ29yeSkgPT4ge1xuICAgIHNldE5hbWVDYXRlZ29yeShuYW1lQ2F0ZWdvcnkudG9VcHBlckNhc2UoKSk7XG4gIH07XG4gIGNvbnN0IGdldEl0ZW1TaG9wID0gKGl0ZW1zKSA9PiB7XG4gICAgaXRlbXMgPT0gdW5kZWZpbmVkID8gc2V0RGF0YVNob3BBc3luYyhbXSkgOiBzZXREYXRhU2hvcEFzeW5jKGl0ZW1zKTtcbiAgfTtcblxuICAvLyBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihgL2FwaS9pdGVtcy8ke25hbWVDYXRlZ29yeX1gLCBmZXRjaGVyKTtcbiAgLy8gc2V0RGF0YVNob3BBc3luYyhkYXRhKTtcblxuICAvL0Z1bmNpb24gcHJpbmNpcGFsXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGV4aXQ9XCJwYWdlRXhpdFwiXG4gICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICB2YXJpYW50cz17e1xuICAgICAgICBwYWdlRXhpdDoge1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEhlYWRlclRpZW5kYSBpbWFnZVVybD1cIi9pbWFnZXMvZm90bzMuanBnXCI+XG4gICAgICAgIDxUaXRsZVxuICAgICAgICAgIHRpdHVsbz17c2hvcH1cbiAgICAgICAgICBkZXNjcmlwY2lvbj1cIsKhU2VsZWNjaW9uYSBsYSBjYXRlZ29yw61hIGRlIGludGVyw6lzIHkgZGVpc2ZydXRhIGRlIGxhIHJlYWxpZGFkIGF1bWVudGFkYSFcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkZXJUaWVuZGE+XG4gICAgICA8Q29udGFpbmVyIHRpdGxlPVwiU2hvcEFSIC0gVGllbmRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxDb250ZW50Q2F0ZWdvcmlhPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWFzLm1hcCgoY2F0ZWdvcmlhKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcmlhSXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5VXJsPXtjYXRlZ29yaWEudXJsfVxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5TmFtZT17Y2F0ZWdvcmlhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlBbHQ9e2NhdGVnb3JpYS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjYXRlZ29yaWEuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRGF0YVNob3A9e3JlbmRlckRhdGFDYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICBnZXRDYXRlZ29yeU5hbWU9e2dldENhdGVnb3J5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvQ29udGVudENhdGVnb3JpYT5cblxuICAgICAgICAgICAgICB7Y2F0ZWdvcnlDbGlja2VkID8gKFxuICAgICAgICAgICAgICAgIDxDb250ZW50U2hvcFxuICAgICAgICAgICAgICAgICAgbmFtZT17Z2VuZXJhbENhdGVnb3J5LnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICBnZXRJdGVtU2hvcD17Z2V0SXRlbVNob3B9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJpZ2dlckNhcmRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9XCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vdlpKZFlsNUpWWFkvNjYweDM2MFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQmlnZ2VyIGNvbXBvbmVudCB0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmlnZ2VyIGNvbXBvbmVudCBkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQ29udGVudFNob3A+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxDb250ZW50U2hvcCBuYW1lPXtuYW1lQ2F0ZWdvcnl9IGdldEl0ZW1TaG9wPXtnZXRJdGVtU2hvcH0+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhU2hvcEFzeW5jLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17aXRlbS5pbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VBbHQ9e2l0ZW0uaW1hZ2VBbHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L0NvbnRlbnRTaG9wPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Rm9vdGVyVGllbmRhIGhyZWY9XCIvXCIgLz5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG9wUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=