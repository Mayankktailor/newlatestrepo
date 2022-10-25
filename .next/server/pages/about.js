"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client),
/* harmony export */   "u": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
    projectId: "98dxqq92",
    dataset: "production",
    apiVersion: "2022-04-24",
    useCdn: true
});
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);
const urlFor = (source)=>builder.image(source);


/***/ }),

/***/ 834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/AboutComportant.jsx


const AboutComportant = ({ aboutobj  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "products-heading",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "",
                children: aboutobj.Title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: aboutobj.desc
            })
        ]
    });
};
/* harmony default export */ const components_AboutComportant = (AboutComportant);

// EXTERNAL MODULE: ./lib/client.js
var client = __webpack_require__(786);
;// CONCATENATED MODULE: ./pages/about/index.js




const About = ({ aboutobj  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: aboutobj?.map((about)=>// <Product key={product._id} product={product} />
            /*#__PURE__*/ jsx_runtime_.jsx(components_AboutComportant, {
                aboutobj: about
            }))
    });
};
const getServerSideProps = async ()=>{
    const query = '*[_type == "about"]';
    const aboutobj = await client/* client.fetch */.L.fetch(query);
    return {
        props: {
            aboutobj
        }
    };
};
/* harmony default export */ const about = (About);


/***/ }),

/***/ 1097:
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(834));
module.exports = __webpack_exports__;

})();