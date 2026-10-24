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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_sep/block/block.js":
/*!*************************************************************************************!*\
  !*** ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_sep/block/block.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Internationalization function, can be used like we do that in WordPress, e.g.:
 * __( 'My text', 'textdomain')
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    _x = _wp$i18n._x,
    _n = _wp$i18n._n,
    _nx = _wp$i18n._nx;

/**
 * Import Gutenberg Components to use
 */

var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    PanelColorSettings = _wp$editor.PanelColorSettings,
    ColorPalette = _wp$editor.ColorPalette;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('fruitful-blocks/fruitful-sep', {
	title: __('Fruitful Separator', 'ff-shortcodes'),
	description: __('Customizable Separator', 'ff-shortcodes'),
	icon: wp.element.createElement(
		'svg',
		{ viewBox: '0 0 32 32', version: '1.1' },
		wp.element.createElement(
			'defs',
			null,
			wp.element.createElement('circle', { cx: '2.5', cy: '16.5', r: '2.5' }),
			wp.element.createElement('circle', { cx: '29.5', cy: '16.5', r: '2.5' })
		),
		wp.element.createElement(
			'g',
			{ stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' },
			wp.element.createElement(
				'g',
				null,
				wp.element.createElement('use', { fill: '#FFFFFF', 'fill-rule': 'evenodd' }),
				wp.element.createElement('circle', { stroke: '#4A4A4A', 'stroke-width': '1', cx: '2.5', cy: '16.5', r: '2' })
			),
			wp.element.createElement(
				'g',
				null,
				wp.element.createElement('use', { fill: '#FFFFFF', 'fill-rule': 'evenodd' }),
				wp.element.createElement('circle', { stroke: '#4A4A4A', 'stroke-width': '1', cx: '29.5', cy: '16.5', r: '2' })
			),
			wp.element.createElement('rect', { fill: '#4A4A4A', x: '4', y: '16', width: '24', height: '1' })
		)
	),
	category: 'fruitful-blocks',

	supports: {
		// add a possibility to change block ID
		anchor: false,
		// Add the support for block's alignment (left, center, right, wide, full).
		align: false,
		// add a possibility to change block class name
		customClassName: true,
		// By default, Gutenberg will allow a block’s markup to be edited individually.
		html: false,
		// set to false to use this block just one per post / page
		multiple: true
	},

	/**
  * Declare changeable block attributes
  */
	attributes: {
		height: {
			type: 'number',
			default: 10
		},
		color: {
			type: 'string',
			default: '#e0e0e0'
		}
	},

	/**
  * Following function called when you edit your block
  * through Gutenberg Editor
  */
	edit: function edit(props) {

		/**
   * Properties & attributes
   */
		var _props$attributes = props.attributes,
		    height = _props$attributes.height,
		    color = _props$attributes.color,
		    setAttributes = props.setAttributes,
		    className = props.className;


		return [

		/**
   * Inspector controls items will be rendered in sidebar when you click on component
   */
		wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				{ title: __('Attributes', 'ff-shortcodes'), initialOpen: true },
				wp.element.createElement(PanelColorSettings, {
					title: __('Color', 'ff-shortcodes'),
					initialOpen: false,
					colorSettings: [{
						value: color,
						onChange: function onChange(colorValue) {
							return setAttributes({ color: colorValue });
						},
						label: __('Text color', 'ff-shortcodes')
					}]
				}),
				wp.element.createElement(RangeControl, {
					label: __('Height', 'ff-shortcodes'),
					value: height,
					onChange: function onChange(size) {
						return setAttributes({ height: size });
					},
					min: 0,
					max: 500,
					beforeIcon: 'editor-textcolor',
					allowReset: true
				})
			)
		),

		/**
   * This element will be rendered directly in content editor
   */
		wp.element.createElement('div', {
			className: className + ' ff fruitful_sep',
			style: { backgroundColor: color, height: height }
		})];
	},

	/**
  * Following function saves block data into post content
  */
	save: function save(props) {
		var _props$attributes2 = props.attributes,
		    height = _props$attributes2.height,
		    color = _props$attributes2.color,
		    className = _props$attributes2.className;


		return wp.element.createElement('div', {
			className: className + ' ff fruitful_sep',
			style: { backgroundColor: color, height: height }
		});
	}
});

/***/ }),

/***/ 6:
/*!*******************************************************************************************!*\
  !*** multi ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_sep/block/block.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:/OSPanel/domains/_ff_/local/wp499.loc/wp-content/plugins/fruitful-shortcodes/fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_sep/block/block.js */"./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_sep/block/block.js");


/***/ })

/******/ });
//# sourceMappingURL=block.build.js.map