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
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setCategoryClicked(true);
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
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(_components_shop_components_topbot_HeaderTienda__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageUrl: "/images/foto3.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_components_general_components_header_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    titulo: shop,
    descripcion: "\xA1Selecciona la categor\xEDa de inter\xE9s y deisfruta de la realidad aumentada!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })), __jsx(_components_general_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "ShopAR - Tienda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(_components_shop_components_categorias_ContentCategoria__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
        lineNumber: 80,
        columnNumber: 21
      }
    });
  })), categoryClicked ? __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: generalCategory.toUpperCase(),
    getItemShop: getItemShop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx(_components_general_components_card_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    imageUrl: "https://source.unsplash.com/vZJdYl5JVXY/660x360",
    title: "Bigger component title",
    description: "bigger component description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: nameCategory,
    getItemShop: getItemShop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
        lineNumber: 108,
        columnNumber: 25
      }
    });
  }))))))), __jsx(_components_shop_components_topbot_FooterTienda__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }));
};

_s(ShopPage, "Boz5xUvmtXr2di8+2ctWrCPcpQQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9bc2hvcF0uanN4Il0sIm5hbWVzIjpbImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiU2hvcFBhZ2UiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5Q2xpY2tlZCIsInNldENhdGVnb3J5Q2xpY2tlZCIsIm5hbWVDYXRlZ29yeSIsInNldE5hbWVDYXRlZ29yeSIsImRhdGFTaG9wQXN5bmMiLCJzZXREYXRhU2hvcEFzeW5jIiwiY2F0ZWdvcmlhcyIsInVzZVNXUiIsImRhdGEiLCJ1bmRlZmluZWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaG9wIiwicXVlcnkiLCJnZW5lcmFsQ2F0ZWdvcnkiLCJyZW5kZXJEYXRhQ2F0ZWdvcnkiLCJuZXdTdGF0ZSIsImdldENhdGVnb3J5TmFtZSIsInRvVXBwZXJDYXNlIiwiZ2V0SXRlbVNob3AiLCJpdGVtcyIsInVzZUVmZmVjdCIsInBhZ2VFeGl0Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYXAiLCJjYXRlZ29yaWEiLCJuYW1lIiwiY29sb3IiLCJpdGVtIiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsR0FBaEIsQ0FBVDtBQUFBLENBQWhCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFD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RSxNQUFDLHVGQUFEO0FBQWMsUUFBSSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4RUYsQ0FERjtBQTRFRCxDQTVHRDs7R0FBTXJDLFE7VUFRYVMsNEMsRUFJRkksc0Q7OztLQVpYYixRO0FBOEdTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wL1tzaG9wXS5lZGZlMjU2NzZiMTQ5YjkwM2NkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgSGVhZGVyVGllbmRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy90b3Bib3QvSGVhZGVyVGllbmRhXCI7XG5pbXBvcnQgRm9vdGVyVGllbmRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy90b3Bib3QvRm9vdGVyVGllbmRhXCI7XG5pbXBvcnQgQ29udGVudENhdGVnb3JpYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvY2F0ZWdvcmlhcy9Db250ZW50Q2F0ZWdvcmlhXCI7XG5pbXBvcnQgQ29udGVudFNob3AgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL0NvbnRlbnRTaG9wXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbF9jb21wb25lbnRzL2hlYWRlci9UaXRsZVwiO1xuaW1wb3J0IENhdGVnb3JpYUl0ZW0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL2NhdGVnb3JpYXMvQ2F0ZWdvcmlhSXRlbVwiO1xuaW1wb3J0IENhcmRDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbF9jb21wb25lbnRzL2NhcmQvQ2FyZENvbXBvbmVudFwiO1xuaW1wb3J0IEJpZ2dlckNhcmRDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbF9jb21wb25lbnRzL2NhcmQvQmlnZ2VyQ2FyZENvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuY29uc3QgU2hvcFBhZ2UgPSAoKSA9PiB7XG4gIC8vQ29udHJvbGFkb3JlcyBkZSBlc3RhZG9cbiAgY29uc3QgW2NhdGVnb3J5Q2xpY2tlZCwgc2V0Q2F0ZWdvcnlDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25hbWVDYXRlZ29yeSwgc2V0TmFtZUNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGF0YVNob3BBc3luYywgc2V0RGF0YVNob3BBc3luY10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy9NdWx0aXBsZXMgZmV0Y2ggcG9yIGNvbXBvbmVudGVzXG4gIGxldCBjYXRlZ29yaWFzID0gW107XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKFwiL2FwaS9jYXRlZ29yaWFzXCIsIGZldGNoZXIpO1xuICBkYXRhID09IHVuZGVmaW5lZCA/IChjYXRlZ29yaWFzID0gW10pIDogKGNhdGVnb3JpYXMgPSBkYXRhKTtcblxuICAvL1VzbyBkZSByb3V0ZXIgcGFyYSBvYnRlbmVyIHF1ZXJ5cyB5IGNhdGVnb3JpYXNcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2hvcCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBnZW5lcmFsQ2F0ZWdvcnkgPSBzaG9wICsgXCIgQ29tdW5pY2FcIjtcblxuICAvL0Z1bmNpb24gcGFyYSByZW5kZXJpemFyIGxvcyBkYXRvcyBkZSB1biBjb21wb25lbnRlIGhpam8gY2xpY2tlYWRvXG4gIGNvbnN0IHJlbmRlckRhdGFDYXRlZ29yeSA9IChuZXdTdGF0ZSkgPT4ge1xuICAgIHNldENhdGVnb3J5Q2xpY2tlZChuZXdTdGF0ZSk7XG4gIH07XG4gIGNvbnN0IGdldENhdGVnb3J5TmFtZSA9IChuYW1lQ2F0ZWdvcnkpID0+IHtcbiAgICBzZXROYW1lQ2F0ZWdvcnkobmFtZUNhdGVnb3J5LnRvVXBwZXJDYXNlKCkpO1xuICB9O1xuICBjb25zdCBnZXRJdGVtU2hvcCA9IChpdGVtcykgPT4ge1xuICAgIGl0ZW1zID09IHVuZGVmaW5lZCA/IHNldERhdGFTaG9wQXN5bmMoWzFdKSA6IHNldERhdGFTaG9wQXN5bmMoaXRlbXMpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q2F0ZWdvcnlDbGlja2VkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgLy9GdW5jaW9uIHByaW5jaXBhbFxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBleGl0PVwicGFnZUV4aXRcIlxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgcGFnZUV4aXQ6IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxIZWFkZXJUaWVuZGEgaW1hZ2VVcmw9XCIvaW1hZ2VzL2ZvdG8zLmpwZ1wiPlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICB0aXR1bG89e3Nob3B9XG4gICAgICAgICAgZGVzY3JpcGNpb249XCLCoVNlbGVjY2lvbmEgbGEgY2F0ZWdvcsOtYSBkZSBpbnRlcsOpcyB5IGRlaXNmcnV0YSBkZSBsYSByZWFsaWRhZCBhdW1lbnRhZGEhXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZGVyVGllbmRhPlxuICAgICAgPENvbnRhaW5lciB0aXRsZT1cIlNob3BBUiAtIFRpZW5kYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8Q29udGVudENhdGVnb3JpYT5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcmlhcy5tYXAoKGNhdGVnb3JpYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3JpYUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVVybD17Y2F0ZWdvcmlhLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeU5hbWU9e2NhdGVnb3JpYS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5QWx0PXtjYXRlZ29yaWEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y2F0ZWdvcmlhLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZURhdGFTaG9wPXtyZW5kZXJEYXRhQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Q2F0ZWdvcnlOYW1lPXtnZXRDYXRlZ29yeU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0NvbnRlbnRDYXRlZ29yaWE+XG5cbiAgICAgICAgICAgICAge2NhdGVnb3J5Q2xpY2tlZCA/IChcbiAgICAgICAgICAgICAgICA8Q29udGVudFNob3BcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2dlbmVyYWxDYXRlZ29yeS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgZ2V0SXRlbVNob3A9e2dldEl0ZW1TaG9wfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCaWdnZXJDYXJkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPVwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3ZaSmRZbDVKVlhZLzY2MHgzNjBcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkJpZ2dlciBjb21wb25lbnQgdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImJpZ2dlciBjb21wb25lbnQgZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRTaG9wPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8Q29udGVudFNob3AgbmFtZT17bmFtZUNhdGVnb3J5fSBnZXRJdGVtU2hvcD17Z2V0SXRlbVNob3B9PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YVNob3BBc3luYy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e2l0ZW0uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQWx0PXtpdGVtLmltYWdlQWx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9Db250ZW50U2hvcD5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEZvb3RlclRpZW5kYSBocmVmPVwiL1wiIC8+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9