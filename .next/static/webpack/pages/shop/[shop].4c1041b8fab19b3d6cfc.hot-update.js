webpackHotUpdate_N_E("pages/shop/[shop]",{

/***/ "./components/general_components/card/CardComponent.jsx":
/*!**************************************************************!*\
  !*** ./components/general_components/card/CardComponent.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _general_components_card_ItemModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general_components/card/ItemModal */ "./components/general_components/card/ItemModal.jsx");
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/antho/Desktop/ShopAR/components/general_components/card/CardComponent.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var easing = [0.6, -0.05, 0.01, 0.99];
var fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};
var customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "14%",
    left: "27%",
    right: "40px",
    bottom: "",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "15px",
    outline: "none",
    padding: "20px",
    boxShadow: "0 0 20px gray"
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_2___default.a.setAppElement("#__next");

var CardComponent = function CardComponent(_ref) {
  _s();

  var imageUrl = _ref.imageUrl,
      imageAlt = _ref.imageAlt,
      title = _ref.title,
      description = _ref.description,
      isNuevo = _ref.isNuevo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalIsOpen = _useState[0],
      setIsOpen = _useState[1];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    variants: fadeInUp,
    className: "col-md-6 col-xl-4 mb-5",
    style: {
      cursor: "pointer"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: "card post-preview lift h-100",
    href: "#!",
    onClick: openModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "card-img-top items",
    src: imageUrl,
    alt: imageAlt,
    style: isNuevo ? {
      height: "400px"
    } : {
      height: "200px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, title), __jsx("p", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, description)), __jsx("div", {
    className: "card-footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "post-preview-meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "post-preview-meta-img",
    src: "/images/info.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "post-preview-meta-details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("a", {
    "data-8code": "6rfgc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "post-preview-meta-details-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, "M\xE1s Informaci\xF3n"))))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
    isOpen: modalIsOpen,
    style: customStyles,
    onRequestClose: function onRequestClose() {
      return closeModal();
    },
    id: "modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(_general_components_card_ItemModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    closeModal: closeModal,
    imgModal: imageUrl,
    productName: title,
    description: description,
    price: "30.00",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  })));
};

_s(CardComponent, "EOxo+0MXKxyCdUCTWpcfchJ0gFI=");

_c = CardComponent;
/* harmony default export */ __webpack_exports__["default"] = (CardComponent);

var _c;

$RefreshReg$(_c, "CardComponent");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvY2FyZC9DYXJkQ29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJlYXNpbmciLCJmYWRlSW5VcCIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiY3VzdG9tU3R5bGVzIiwib3ZlcmxheSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiY29udGVudCIsImJvcmRlciIsImJhY2tncm91bmQiLCJvdmVyZmxvdyIsIldlYmtpdE92ZXJmbG93U2Nyb2xsaW5nIiwiYm9yZGVyUmFkaXVzIiwib3V0bGluZSIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJNb2RhbCIsInNldEFwcEVsZW1lbnQiLCJDYXJkQ29tcG9uZW50IiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpc051ZXZvIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsImNsb3NlTW9kYWwiLCJvcGVuTW9kYWwiLCJjdXJzb3IiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FBQyxHQUFELEVBQU0sQ0FBQyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQUFmO0FBRUEsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLFNBQU8sRUFBRTtBQUNQQyxLQUFDLEVBQUUsRUFESTtBQUVQQyxXQUFPLEVBQUU7QUFGRixHQURNO0FBS2ZDLFNBQU8sRUFBRTtBQUNQRixLQUFDLEVBQUUsQ0FESTtBQUVQQyxXQUFPLEVBQUUsQ0FGRjtBQUdQRSxjQUFVLEVBQUU7QUFDVkMsY0FBUSxFQUFFLEdBREE7QUFFVkMsVUFBSSxFQUFFUjtBQUZJO0FBSEw7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LEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsa0JBQVcsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLENBRkYsQ0FERixDQVhGLENBTEYsRUE0QkUsTUFBQyxrREFBRDtBQUNFLFVBQU0sRUFBRUcsV0FEVjtBQUVFLFNBQUssRUFBRTFCLFlBRlQ7QUFHRSxrQkFBYyxFQUFFO0FBQUEsYUFBTTRCLFVBQVUsRUFBaEI7QUFBQSxLQUhsQjtBQUlFLE1BQUUsRUFBQyxPQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLDBFQUFEO0FBQ0UsY0FBVSxFQUFFQSxVQURkO0FBRUUsWUFBUSxFQUFFUixRQUZaO0FBR0UsZUFBVyxFQUFFRSxLQUhmO0FBSUUsZUFBVyxFQUFFQyxXQUpmO0FBS0UsU0FBSyxFQUFDLE9BTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBNUJGLENBREY7QUE2Q0QsQ0F2REQ7O0dBQU1KLGE7O0tBQUFBLGE7QUF5RFNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AvW3Nob3BdLjRjMTA0MWI4ZmFiMTliM2Q2Y2ZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJdGVtTW9kYWwgZnJvbSBcIi4uLy4uL2dlbmVyYWxfY29tcG9uZW50cy9jYXJkL0l0ZW1Nb2RhbFwiO1xuXG5jb25zdCBlYXNpbmcgPSBbMC42LCAtMC4wNSwgMC4wMSwgMC45OV07XG5cbmNvbnN0IGZhZGVJblVwID0ge1xuICBpbml0aWFsOiB7XG4gICAgeTogNjAsXG4gICAgb3BhY2l0eTogMCxcbiAgfSxcbiAgYW5pbWF0ZToge1xuICAgIHk6IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgZWFzZTogZWFzaW5nLFxuICAgIH0sXG4gIH0sXG59O1xuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSlcIixcbiAgfSxcbiAgY29udGVudDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjE0JVwiLFxuICAgIGxlZnQ6IFwiMjclXCIsXG4gICAgcmlnaHQ6IFwiNDBweFwiLFxuICAgIGJvdHRvbTogXCJcIixcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6IFwidG91Y2hcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxuICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgIGJveFNoYWRvdzogXCIwIDAgMjBweCBncmF5XCIsXG4gIH0sXG59O1xuTW9kYWwuc2V0QXBwRWxlbWVudChcIiNfX25leHRcIik7XG5cbmNvbnN0IENhcmRDb21wb25lbnQgPSAoeyBpbWFnZVVybCwgaW1hZ2VBbHQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgaXNOdWV2byB9KSA9PiB7XG4gIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIHNldElzT3BlbihmYWxzZSk7XG4gIH1cbiAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIHNldElzT3Blbih0cnVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHZhcmlhbnRzPXtmYWRlSW5VcH1cbiAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC14bC00IG1iLTVcIlxuICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgID5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmQgcG9zdC1wcmV2aWV3IGxpZnQgaC0xMDBcIiBocmVmPVwiIyFcIiBvbkNsaWNrPXtvcGVuTW9kYWx9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIGl0ZW1zXCJcbiAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxuICAgICAgICAgIGFsdD17aW1hZ2VBbHR9XG4gICAgICAgICAgc3R5bGU9e2lzTnVldm8gPyB7IGhlaWdodDogXCI0MDBweFwiIH0gOiB7IGhlaWdodDogXCIyMDBweFwiIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1wcmV2aWV3LW1ldGFcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdC1wcmV2aWV3LW1ldGEtaW1nXCIgc3JjPVwiL2ltYWdlcy9pbmZvLnBuZ1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtcHJldmlldy1tZXRhLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgPGEgZGF0YS04Y29kZT1cIjZyZmdjXCI+PC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtcHJldmlldy1tZXRhLWRldGFpbHMtbmFtZVwiPlxuICAgICAgICAgICAgICAgIE3DoXMgSW5mb3JtYWNpw7NuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XG4gICAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiBjbG9zZU1vZGFsKCl9XG4gICAgICAgIGlkPVwibW9kYWxcIlxuICAgICAgPlxuICAgICAgICA8SXRlbU1vZGFsXG4gICAgICAgICAgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH1cbiAgICAgICAgICBpbWdNb2RhbD17aW1hZ2VVcmx9XG4gICAgICAgICAgcHJvZHVjdE5hbWU9e3RpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICBwcmljZT1cIjMwLjAwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZENvbXBvbmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=