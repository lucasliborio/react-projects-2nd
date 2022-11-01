"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatechapter_1"]("main",{

/***/ "./src/components/list.tsx":
/*!*********************************!*\
  !*** ./src/components/list.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character */ \"./src/components/character.tsx\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst List = () => {\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        function fetchCharacter() {\n            return __awaiter(this, void 0, void 0, function* () {\n                const data = yield fetch('https://rickandmortyapi.com/api/character');\n                const { results } = yield data.json();\n                console.log(results);\n                setCharacters(results);\n                setIsLoading(false);\n            });\n        }\n        fetchCharacter();\n    }, []);\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Characters\"),\n        isLoading ?\n            (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Loading...\"))\n            : characters.map(c => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_character__WEBPACK_IMPORTED_MODULE_1__.Character, { id: c.id, character: c })))));\n};\n\n\n//# sourceURL=webpack://chapter-1/./src/components/list.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fedc71c5ca24e4f2e16d")
/******/ })();
/******/ 
/******/ }
);