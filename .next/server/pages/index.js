"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/client.js
var client = __webpack_require__(786);
// EXTERNAL MODULE: ./components/HeroBanner.jsx
var HeroBanner = __webpack_require__(5468);
// EXTERNAL MODULE: ./components/Product.jsx
var Product = __webpack_require__(3166);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Imagewithtext.jsx




const Imagewithtext = ({ iwisec  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "imgwithtext",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "Image",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: (0,client/* urlFor */.u)(iwisec.image),
                    alt: "Banner"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: iwisec.Title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: iwisec.desc
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: iwisec.href,
                        children: iwisec.buttontxt
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/index.js





// import Slider from "react-slick";

// import { VideoPlayer } from "../components/VideoPlayer";
// import { Accordian } from "../components/Accordian";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
const Home = ({ products , bannerData , iwisec  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeroBanner/* HeroBanner */.y, {
                heroBanner: bannerData.length && bannerData[1]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "products-heading",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Best Seller Products"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "speaker There are many variations passages"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "product",
                children: products?.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(Product/* Product */.x, {
                        product: product
                    }, product._id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: iwisec?.map((iwtsection)=>/*#__PURE__*/ jsx_runtime_.jsx(Imagewithtext, {
                        iwisec: iwtsection
                    }, iwtsection.id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: ""
            })
        ]
    });
var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1
};
const getServerSideProps = async ()=>{
    const query = '*[_type == "product"]';
    const products = await client/* client.fetch */.L.fetch(query);
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client/* client.fetch */.L.fetch(bannerQuery);
    const iwtQuery = '*[_type == "imagewithtext"]';
    const iwisec = await client/* client.fetch */.L.fetch(iwtQuery);
    return {
        props: {
            products,
            bannerData,
            iwisec
        }
    };
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 1097:
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,166,468], () => (__webpack_exec__(5099)));
module.exports = __webpack_exports__;

})();