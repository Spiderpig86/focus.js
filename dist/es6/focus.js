(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["focus"] = factory();
	else
		root["focus"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * An image component that supports the zooming effect for any web app.
 */

var FocusImg = function () {

    /**
     * Constructor for the focus image component
     * @param {FocusImgConfig} imageParams - {
     *      imageSrc: String,
     *      parentElement: HTMLElement,
     *      zoomFactor: String,
     *      smoother: boolean,
     *      width: String,
     *      height: String
     * }
     */
    function FocusImg(imageParams) {
        _classCallCheck(this, FocusImg);

        console.log('test');

        this.DEFAULT_IMAGE_SRC = 'http://via.placeholder.com/500?text=focus.js';

        // Initialize default properties for image
        this.params = {
            imageSrc: this.DEFAULT_IMAGE_SRC,
            parentElement: null,
            zoomFactor: '250%',
            smoother: true,
            width: '100%', // Scale to parent component by default
            height: '66.7%' // Scale to percent of height by default
        };

        this.focusImg = document.createElement('div');

        // Apply given params to the object
        if (params) Object.assign(this.params, imageParams);

        this.render();
        this.bindEvents();

        return this;
    }

    /**
     * Binds events to the current image component.
     */


    _createClass(FocusImg, [{
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            // Zoom in on hover
            this.focusImg.addEventListener('mouseover', function (e) {
                _this.focusImg.style.backgroundSize = _this.params.zoomFactor;
            }, false);

            // Pan the image proportional to the cursor location
            this.focusImg.addEventListener('mousemove', function (e) {
                var dimensions = _this.focusImg.getBoundingClientRect(); // Get client rectangle of the element on thepage

                // Calculate location of cursor inside the element
                var relX = e.clientX - dimensions.left;
                var relY = e.clientY - dimensions.top;

                // Calculate the cursor position as a percentage of the image
                var percentX = Math.round(100 / (dimensions.width / relX));
                var percentY = Math.round(100 / (dimensions.height / relY));

                // Update the image background position
                _this.focusImg.style.backgroundPosition = percentX + '% ' + percentY + '%';
            }, false);

            // Revert image view back to normal after mouse exits
            this.focusImg.addEventListener('mouseleave', function (e) {
                _this.focusImg.style.backgroundPosition = 'center';
                _this.focusImg.style.backgroundSize = 'cover';
            }, false);
        }

        /**
         * Render the component onto the page
         */

    }, {
        key: 'render',
        value: function render() {
            // Set the image element
            this.focusImg.innerHTML = '\n            <div class="\n                focus-img \n                ' + (smoother ? 'smoother' : '') + '"\n            style="\n                background-image: url(' + imageSrc + ');\n                background-size: cover;\n                background-position: center center;\n                width: ' + this.params.width + ';\n                height: ' + this.params.height + ';\n            ">\n            </div>\n        ';
            // Append it to the parent
            this.params.parentElement.appendChild(this.focusImg);
            console.log(this.focusImg);
        }
    }]);

    return FocusImg;
}();

exports.default = FocusImg;

/***/ })
/******/ ]);
});