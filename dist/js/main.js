/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var arr = [];\nvar cells = document.querySelector(\".cells\");\nvar hightlight = \"cells__cell--hightlight\";\nvar charlizard = \"cells__cell--charlizard\";\nvar pikachu = \"cells__cell--pikachu\";\nvar squirtle = \"cells__cell--squirtle\";\nvar pidgey = \"cells__cell--pidgey\";\n\nfunction showHightlights(target) {\n  arr.forEach(function (elem, i) {\n    return elem.forEach(function (elem, j) {\n      if (elem === target) {\n        var contain = elem.classList;\n        var classContain = \"\";\n\n        if (contain.contains(charlizard)) {\n          classContain = charlizard;\n        }\n\n        if (contain.contains(pikachu)) {\n          classContain = pikachu;\n        }\n\n        if (contain.contains(squirtle)) {\n          classContain = squirtle;\n        }\n\n        if (contain.contains(pidgey)) {\n          classContain = pidgey;\n        }\n\n        if (j < arr[i].length - 1 && arr[i][j + 1].classList.contains(classContain) && !arr[i][j + 1].classList.contains(hightlight)) {\n          arr[i][j + 1].classList.add(hightlight);\n          showHightlights(arr[i][j + 1]);\n        }\n\n        if (j > 0 && arr[i][j - 1] && arr[i][j - 1].classList.contains(classContain) && !arr[i][j - 1].classList.contains(hightlight)) {\n          arr[i][j - 1].classList.add(hightlight);\n          showHightlights(arr[i][j - 1]);\n        }\n\n        if (i > 0 && arr[i - 1][j] && arr[i - 1][j].classList.contains(classContain) && !arr[i - 1][j].classList.contains(hightlight)) {\n          arr[i - 1][j].classList.add(hightlight);\n          showHightlights(arr[i - 1][j]);\n        }\n\n        if (i < arr.length - 1 && j < arr[i + 1].length) {\n          if (arr[i + 1][j].classList.contains(classContain) && !arr[i + 1][j].classList.contains(hightlight)) {\n            arr[i + 1][j].classList.add(hightlight);\n            showHightlights(arr[i + 1][j]);\n          }\n        }\n      }\n    });\n  });\n}\n\nfunction buildCells() {\n  var cellWidthHeightValue = +cells.dataset.width + +cells.dataset.margin * 2;\n  var elementsInRow = Math.floor(+cells.offsetWidth / cellWidthHeightValue);\n  var elementsInColumn = Math.floor(+cells.offsetHeight / cellWidthHeightValue);\n  var allCellNumber = elementsInRow * elementsInColumn;\n  var count = 0;\n  arr = [];\n  arr.push([]);\n  var placeInArr = arr[0];\n\n  for (var i = 0; i < allCellNumber; i++) {\n    var newDiv = document.createElement(\"div\");\n    newDiv.classList.add(\"cells__cell\");\n    cells.appendChild(newDiv);\n\n    if (count < elementsInRow) {\n      placeInArr.push(newDiv);\n      count++;\n    } else {\n      count = 0;\n      arr.push([]);\n      placeInArr = arr[arr.length - 1];\n      placeInArr.push(newDiv);\n      count++;\n    }\n  }\n\n  function addRandomClass(elements, arr) {\n    elements.forEach(function (elem) {\n      return elem.classList.add(randomClass(arr));\n    });\n\n    function randomClass(arr) {\n      var min = 0,\n          max = arr.length - 1;\n      return arr[Math.round(min - 0.5 + Math.random() * (max - min + 1))];\n    }\n  }\n\n  addRandomClass(document.querySelectorAll(\".cells__cell\"), [charlizard, pikachu, squirtle, pidgey]);\n}\n\nbuildCells();\nwindow.addEventListener(\"resize\", function () {\n  document.querySelectorAll(\".cells__cell\").forEach(function (elem) {\n    return elem.remove();\n  });\n  buildCells();\n});\ncells.addEventListener(\"mouseover\", function () {\n  return showHightlights(event.target);\n});\ncells.addEventListener(\"mouseout\", function () {\n  document.querySelectorAll(\".\".concat(hightlight)).forEach(function (elem) {\n    return elem.classList.remove(hightlight);\n  });\n});\ncells.addEventListener(\"click\", function () {\n  document.querySelectorAll(\".\".concat(hightlight)).forEach(function (elem) {\n    return elem.remove();\n  });\n  var cellWidthHeightValue = +cells.dataset.width + +cells.dataset.margin * 2;\n  var elementsInRow = Math.floor(+cells.offsetWidth / cellWidthHeightValue);\n  var elementsInColumn = Math.floor(+cells.offsetHeight / cellWidthHeightValue);\n  var allCellNumber = document.querySelectorAll(\".cells__cell\");\n  var count = 0;\n  arr = [];\n  arr.push([]);\n  var placeInArr = arr[0];\n\n  for (var i = 0; i < allCellNumber.length; i++) {\n    if (count < elementsInRow) {\n      placeInArr.push(allCellNumber[i]);\n      count++;\n    } else {\n      count = 0;\n      arr.push([]);\n      placeInArr = arr[arr.length - 1];\n      placeInArr.push(allCellNumber[i]);\n      count++;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });