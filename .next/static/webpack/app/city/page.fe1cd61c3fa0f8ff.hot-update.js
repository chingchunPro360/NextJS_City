"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/city/page",{

/***/ "(app-pages-browser)/./app/data/cities.js":
/*!****************************!*\
  !*** ./app/data/cities.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   citiesData: function() { return /* binding */ citiesData; },\n/* harmony export */   getCityList: function() { return /* binding */ getCityList; },\n/* harmony export */   getDistricts: function() { return /* binding */ getDistricts; }\n/* harmony export */ });\nconst citiesData = {\n    \"台北市\": [\n        \"大安區\",\n        \"信義區\",\n        \"中山區\",\n        \"松山區\",\n        \"內湖區\",\n        \"北投區\",\n        \"士林區\",\n        \"南港區\",\n        \"文山區\",\n        \"中正區\"\n    ],\n    \"新北市\": [\n        \"板橋區\",\n        \"中和區\",\n        \"新莊區\",\n        \"三峽區\",\n        \"樹林區\",\n        \"汐止區\",\n        \"土城區\",\n        \"鶯歌區\",\n        \"深坑區\",\n        \"金山區\"\n    ],\n    \"台中市\": [\n        \"西屯區\",\n        \"北屯區\",\n        \"南屯區\",\n        \"北區\",\n        \"南區\",\n        \"西區\",\n        \"東區\",\n        \"豐原區\",\n        \"南區\",\n        \"大里區\"\n    ],\n    \"台南市\": [\n        \"永康區\",\n        \"安南區\",\n        \"東區\",\n        \"南區\",\n        \"北區\",\n        \"中西區\",\n        \"新營區\",\n        \"鹽水區\",\n        \"麻豆區\",\n        \"官田區\"\n    ],\n    \"高雄市\": [\n        \"三民區\",\n        \"鳳山區\",\n        \"左營區\",\n        \"苓雅區\",\n        \"鹽埕區\",\n        \"鼓山區\",\n        \"橋頭區\",\n        \"小港區\",\n        \"大寮區\",\n        \"楠梓區\"\n    ],\n    \"桃園市\": [\n        \"中壢區\",\n        \"桃園區\",\n        \"平鎮區\",\n        \"八德區\",\n        \"楊梅區\",\n        \"大溪區\",\n        \"龜山區\",\n        \"龍潭區\",\n        \"大園區\",\n        \"蘆竹區\"\n    ],\n    \"新竹市\": [\n        \"東區\",\n        \"北區\",\n        \"香山區\"\n    ],\n    \"嘉義市\": [\n        \"東區\",\n        \"西區\"\n    ],\n    \"屏東市\": [\n        \"屏東市\",\n        \"東港鎮\",\n        \"恆春鎮\"\n    ],\n    \"基隆市\": [\n        \"中正區\",\n        \"七堵區\",\n        \"暖暖區\",\n        \"仁愛區\"\n    ],\n    \"宜蘭市\": [\n        \"宜蘭市\",\n        \"羅東鎮\",\n        \"冬山鄉\"\n    ],\n    \"花蓮市\": [\n        \"花蓮市\",\n        \"鳳林鎮\",\n        \"玉里鎮\"\n    ],\n    \"台東市\": [\n        \"台東市\",\n        \"關山鎮\",\n        \"卑南鄉\"\n    ],\n    \"苗栗市\": [\n        \"苗栗市\",\n        \"頭份市\",\n        \"三灣鄉\"\n    ],\n    \"彰化縣\": [\n        \"彰化市\",\n        \"員林市\",\n        \"和美鎮\",\n        \"溪湖鎮\",\n        \"田中鎮\"\n    ],\n    \"南投縣\": [\n        \"南投市\",\n        \"草屯鎮\",\n        \"埔里鎮\",\n        \"竹山鎮\",\n        \"集集鎮\"\n    ],\n    \"雲林縣\": [\n        \"斗六市\",\n        \"虎尾鎮\",\n        \"西螺鎮\",\n        \"土庫鎮\",\n        \"北港鎮\"\n    ],\n    \"嘉義縣\": [\n        \"太保市\",\n        \"朴子市\",\n        \"大林鎮\",\n        \"民雄鄉\",\n        \"溪口鄉\"\n    ],\n    \"屏東縣\": [\n        \"屏東市\",\n        \"東港鎮\",\n        \"恆春鎮\",\n        \"萬丹鄉\",\n        \"潮州鎮\"\n    ],\n    \"台東縣\": [\n        \"台東市\",\n        \"關山鎮\",\n        \"卑南鄉\",\n        \"大武鄉\",\n        \"池上鄉\"\n    ],\n    \"澎湖縣\": [\n        \"馬公市\",\n        \"湖西鄉\",\n        \"白沙鄉\",\n        \"西嶼鄉\",\n        \"望安鄉\"\n    ],\n    \"金門縣\": [\n        \"金城鎮\",\n        \"金湖鎮\",\n        \"金沙鎮\",\n        \"烈嶼鄉\",\n        \"烏坵鄉\"\n    ],\n    \"連江縣\": [\n        \"南竿鄉\",\n        \"北竿鄉\",\n        \"莒光鄉\",\n        \"東引鄉\"\n    ]\n};\nconst getCityList = ()=>Object.keys(citiesData);\nconst getDistricts = (city)=>citiesData[city] || [];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXRhL2NpdGllcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxhQUFhO0lBQ3hCLE9BQU87UUFBQztRQUFPO1FBQU87UUFBTztRQUFPO1FBQU87UUFBTztRQUFPO1FBQU87UUFBTztLQUFNO0lBQzdFLE9BQU87UUFBQztRQUFPO1FBQU87UUFBTztRQUFPO1FBQU87UUFBTztRQUFPO1FBQU87UUFBTztLQUFNO0lBQzdFLE9BQU87UUFBQztRQUFPO1FBQU87UUFBTztRQUFNO1FBQU07UUFBTTtRQUFNO1FBQU87UUFBTTtLQUFNO0lBQ3hFLE9BQU87UUFBQztRQUFPO1FBQU87UUFBTTtRQUFNO1FBQU07UUFBTztRQUFPO1FBQU87UUFBTztLQUFNO0lBQzFFLE9BQU87UUFBQztRQUFPO1FBQU87UUFBTztRQUFPO1FBQU87UUFBTztRQUFPO1FBQU87UUFBTztLQUFNO0lBQzdFLE9BQU87UUFBQztRQUFPO1FBQU87UUFBTztRQUFPO1FBQU87UUFBTztRQUFPO1FBQU87UUFBTztLQUFNO0lBQzdFLE9BQU87UUFBQztRQUFNO1FBQU07S0FBTTtJQUMxQixPQUFPO1FBQUM7UUFBTTtLQUFLO0lBQ25CLE9BQU87UUFBQztRQUFPO1FBQU87S0FBTTtJQUM1QixPQUFPO1FBQUM7UUFBTztRQUFPO1FBQU87S0FBTTtJQUNuQyxPQUFPO1FBQUM7UUFBTztRQUFPO0tBQU07SUFDNUIsT0FBTztRQUFDO1FBQU87UUFBTztLQUFNO0lBQzVCLE9BQU87UUFBQztRQUFPO1FBQU87S0FBTTtJQUM1QixPQUFPO1FBQUM7UUFBTztRQUFPO0tBQU07SUFDNUIsT0FBTztRQUFDO1FBQU87UUFBTztRQUFPO1FBQU87S0FBTTtJQUMxQyxPQUFPO1FBQUM7UUFBTztRQUFPO1FBQU87UUFBTztLQUFNO0lBQzFDLE9BQU87UUFBQztRQUFPO1FBQU87UUFBTztRQUFPO0tBQU07SUFDMUMsT0FBTztRQUFDO1FBQU87UUFBTztRQUFPO1FBQU87S0FBTTtJQUMxQyxPQUFPO1FBQUM7UUFBTztRQUFPO1FBQU87UUFBTztLQUFNO0lBQzFDLE9BQU87UUFBQztRQUFPO1FBQU87UUFBTztRQUFPO0tBQU07SUFDMUMsT0FBTztRQUFDO1FBQU87UUFBTztRQUFPO1FBQU87S0FBTTtJQUMxQyxPQUFPO1FBQUM7UUFBTztRQUFPO1FBQU87UUFBTztLQUFNO0lBQzFDLE9BQU87UUFBQztRQUFPO1FBQU87UUFBTztLQUFNO0FBQ3JDLEVBQUM7QUFFTSxNQUFNQyxjQUFjLElBQU1DLE9BQU9DLElBQUksQ0FBQ0gsWUFBVztBQUVqRCxNQUFNSSxlQUFlLENBQUNDLE9BQVNMLFVBQVUsQ0FBQ0ssS0FBSyxJQUFJLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2RhdGEvY2l0aWVzLmpzP2VlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNpdGllc0RhdGEgPSB7XG4gICflj7DljJfluIInOiBbJ+Wkp+WuieWNgCcsICfkv6HnvqnljYAnLCAn5Lit5bGx5Y2AJywgJ+advuWxseWNgCcsICflhafmuZbljYAnLCAn5YyX5oqV5Y2AJywgJ+Wjq+ael+WNgCcsICfljZfmuK/ljYAnLCAn5paH5bGx5Y2AJywgJ+S4reato+WNgCddLFxuICAn5paw5YyX5biCJzogWyfmnb/mqYvljYAnLCAn5Lit5ZKM5Y2AJywgJ+aWsOiOiuWNgCcsICfkuInls73ljYAnLCAn5qi55p6X5Y2AJywgJ+axkOatouWNgCcsICflnJ/ln47ljYAnLCAn6bav5q2M5Y2AJywgJ+a3seWdkeWNgCcsICfph5HlsbHljYAnXSxcbiAgJ+WPsOS4reW4gic6IFsn6KW/5bGv5Y2AJywgJ+WMl+Wxr+WNgCcsICfljZflsa/ljYAnLCAn5YyX5Y2AJywgJ+WNl+WNgCcsICfopb/ljYAnLCAn5p2x5Y2AJywgJ+ixkOWOn+WNgCcsICfljZfljYAnLCAn5aSn6YeM5Y2AJ10sXG4gICflj7DljZfluIInOiBbJ+awuOW6t+WNgCcsICflronljZfljYAnLCAn5p2x5Y2AJywgJ+WNl+WNgCcsICfljJfljYAnLCAn5Lit6KW/5Y2AJywgJ+aWsOeHn+WNgCcsICfpub3msLTljYAnLCAn6bq76LGG5Y2AJywgJ+WumOeUsOWNgCddLFxuICAn6auY6ZuE5biCJzogWyfkuInmsJHljYAnLCAn6bOz5bGx5Y2AJywgJ+W3pueHn+WNgCcsICfoi5Ppm4XljYAnLCAn6bm95Z+V5Y2AJywgJ+m8k+WxseWNgCcsICfmqYvpoK3ljYAnLCAn5bCP5riv5Y2AJywgJ+Wkp+WvruWNgCcsICfmpaDmopPljYAnXSxcbiAgJ+ahg+WckuW4gic6IFsn5Lit5aOi5Y2AJywgJ+ahg+WckuWNgCcsICflubPpjq7ljYAnLCAn5YWr5b635Y2AJywgJ+aliuaiheWNgCcsICflpKfmuqrljYAnLCAn6b6c5bGx5Y2AJywgJ+m+jea9reWNgCcsICflpKflnJLljYAnLCAn6JiG56u55Y2AJ10sXG4gICfmlrDnq7nluIInOiBbJ+adseWNgCcsICfljJfljYAnLCAn6aaZ5bGx5Y2AJ10sXG4gICflmInnvqnluIInOiBbJ+adseWNgCcsICfopb/ljYAnXSxcbiAgJ+Wxj+adseW4gic6IFsn5bGP5p2x5biCJywgJ+adsea4r+mOricsICfmgYbmmKXpjq4nXSxcbiAgJ+WfuumahuW4gic6IFsn5Lit5q2j5Y2AJywgJ+S4g+WgteWNgCcsICfmmpbmmpbljYAnLCAn5LuB5oSb5Y2AJ10sXG4gICflrpzomK3luIInOiBbJ+WunOiYreW4gicsICfnvoXmnbHpjq4nLCAn5Yas5bGx6YSJJ10sXG4gICfoirHok67luIInOiBbJ+iKseiTruW4gicsICfps7Pmnpfpjq4nLCAn546J6YeM6Y6uJ10sXG4gICflj7DmnbHluIInOiBbJ+WPsOadseW4gicsICfpl5zlsbHpjq4nLCAn5Y2R5Y2X6YSJJ10sXG4gICfoi5fmoJfluIInOiBbJ+iLl+agl+W4gicsICfpoK3ku73luIInLCAn5LiJ54Gj6YSJJ10sXG4gICflvbDljJbnuKMnOiBbJ+W9sOWMluW4gicsICflk6HmnpfluIInLCAn5ZKM576O6Y6uJywgJ+a6qua5lumOricsICfnlLDkuK3pjq4nXSxcbiAgJ+WNl+aKlee4oyc6IFsn5Y2X5oqV5biCJywgJ+iNieWxr+mOricsICfln5Tph4zpjq4nLCAn56u55bGx6Y6uJywgJ+mbhumbhumOriddLFxuICAn6Zuy5p6X57ijJzogWyfmlpflha3luIInLCAn6JmO5bC+6Y6uJywgJ+ilv+ieuumOricsICflnJ/luqvpjq4nLCAn5YyX5riv6Y6uJ10sXG4gICflmInnvqnnuKMnOiBbJ+WkquS/neW4gicsICfmnLTlrZDluIInLCAn5aSn5p6X6Y6uJywgJ+awkembhOmEiScsICfmuqrlj6PphIknXSxcbiAgJ+Wxj+adsee4oyc6IFsn5bGP5p2x5biCJywgJ+adsea4r+mOricsICfmgYbmmKXpjq4nLCAn6JCs5Li56YSJJywgJ+a9ruW3numOriddLFxuICAn5Y+w5p2x57ijJzogWyflj7DmnbHluIInLCAn6Zec5bGx6Y6uJywgJ+WNkeWNl+mEiScsICflpKfmrabphIknLCAn5rGg5LiK6YSJJ10sXG4gICfmvo7muZbnuKMnOiBbJ+mmrOWFrOW4gicsICfmuZbopb/phIknLCAn55m95rKZ6YSJJywgJ+ilv+W2vOmEiScsICfmnJvlronphIknXSxcbiAgJ+mHkemWgOe4oyc6IFsn6YeR5Z+O6Y6uJywgJ+mHkea5lumOricsICfph5Hmspnpjq4nLCAn54OI5ba86YSJJywgJ+eDj+WdtemEiSddLFxuICAn6YCj5rGf57ijJzogWyfljZfnq7/phIknLCAn5YyX56u/6YSJJywgJ+iOkuWFiemEiScsICfmnbHlvJXphIknXVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q2l0eUxpc3QgPSAoKSA9PiBPYmplY3Qua2V5cyhjaXRpZXNEYXRhKVxuXG5leHBvcnQgY29uc3QgZ2V0RGlzdHJpY3RzID0gKGNpdHkpID0+IGNpdGllc0RhdGFbY2l0eV0gfHwgW11cbiJdLCJuYW1lcyI6WyJjaXRpZXNEYXRhIiwiZ2V0Q2l0eUxpc3QiLCJPYmplY3QiLCJrZXlzIiwiZ2V0RGlzdHJpY3RzIiwiY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/data/cities.js\n"));

/***/ })

});