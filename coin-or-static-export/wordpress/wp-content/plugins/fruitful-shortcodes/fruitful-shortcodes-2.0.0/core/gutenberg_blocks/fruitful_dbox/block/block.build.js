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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_dbox/block/block.js":
/*!**************************************************************************************!*\
  !*** ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_dbox/block/block.js ***!
  \**************************************************************************************/
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
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('fruitful-blocks/fruitful-dbox', {
	title: __('Fruitful Promo Text', 'ff-shortcodes'),
	description: __('Customizable Promo Text Box', 'ff-shortcodes'),
	icon: wp.element.createElement(
		'svg',
		{ viewBox: '0 0 32 32', version: '1.1' },
		wp.element.createElement(
			'g',
			{ stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' },
			wp.element.createElement('path', { d: 'M6.5,4.5 L6.5,27.5 L13.5,27.5 L13.5,19.5 L18.5,19.5 L18.5,27.5 L25.5,27.5 L25.5,4.5 L18.5000153,4.5 L18.5002594,12.5 L13.5,12.5 L13.5,4.5 L6.5,4.5 Z', stroke: '#4A4A4A' }),
			wp.element.createElement('rect', { fill: '#4A4A4A', x: '26', y: '4', width: '2', height: '1' }),
			wp.element.createElement('rect', { fill: '#4A4A4A', x: '4', y: '4', width: '2', height: '1' }),
			wp.element.createElement('rect', { fill: '#4A4A4A', x: '26', y: '27', width: '2', height: '1' }),
			wp.element.createElement('rect', { fill: '#4A4A4A', x: '4', y: '27', width: '2', height: '1' })
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
		smallHeadingText: {
			type: 'string',
			default: __('Hello, there!', 'ff-shortcodes')
		},
		headingText: {
			type: 'string',
			default: __('I am a promo box', 'ff-shortcodes')
		},
		text: {
			type: 'string',
			default: __('Click here to change this text or add your own', 'ff-shortcodes')
		},
		btnTitle: {
			type: 'string',
			default: __('Button title', 'ff-shortcodes')
		},
		btnLink: {
			type: 'string',
			default: 'https://google.com'
		},
		style: {
			type: 'string',
			default: 'style-1'
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
		    smallHeadingText = _props$attributes.smallHeadingText,
		    headingText = _props$attributes.headingText,
		    text = _props$attributes.text,
		    btnTitle = _props$attributes.btnTitle,
		    btnLink = _props$attributes.btnLink,
		    style = _props$attributes.style,
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
				{ title: __('Style', 'ff-shortcodes'), initialOpen: true },
				wp.element.createElement(SelectControl, {
					label: __('Style', 'ff-shortcodes'),
					value: style,
					options: [{ label: __('Style 1', 'ff-shortcodes'), value: 'style-1' }, { label: __('Style 2', 'ff-shortcodes'), value: 'style-2' }, { label: __('Style 3', 'ff-shortcodes'), value: 'style-3' }],
					onChange: function onChange(value) {
						return setAttributes({ style: value });
					}
				})
			),
			wp.element.createElement(
				PanelBody,
				{ title: __('Button', 'ff-shortcodes'), initialOpen: true },
				wp.element.createElement(TextControl, {
					label: __('Button URL', 'ff-shortcodes'),
					value: btnLink,
					onChange: function onChange(value) {
						return setAttributes({ btnLink: value });
					}
				})
			)
		),

		/**
   * This element will be rendered directly in content editor
   */
		wp.element.createElement(
			'div',
			{
				className: className + ' ff fruitful_dbox ff-' + style },
			wp.element.createElement(RichText, {
				tagName: 'h4',
				value: smallHeadingText,
				onChange: function onChange(value) {
					return setAttributes({ smallHeadingText: value });
				}
			}),
			wp.element.createElement(RichText, {
				tagName: 'h2',
				value: headingText,
				onChange: function onChange(value) {
					return setAttributes({ headingText: value });
				}
			}),
			wp.element.createElement(RichText, {
				tagName: 'p',
				value: text,
				onChange: function onChange(value) {
					return setAttributes({ text: value });
				}
			}),
			wp.element.createElement(RichText, {
				tagName: 'a',
				className: 'dbox-btn',
				href: btnLink,
				onChange: function onChange(value) {
					return setAttributes({ btnTitle: value });
				},
				value: __('Click me!', 'ff-shortcodes'),
				onRemove: function onRemove() {
					forward: false;
				}
			})
		)];
	},

	/**
  * Following function saves block data into post content
  */
	save: function save(props) {
		var _props$attributes2 = props.attributes,
		    smallHeadingText = _props$attributes2.smallHeadingText,
		    headingText = _props$attributes2.headingText,
		    text = _props$attributes2.text,
		    btnTitle = _props$attributes2.btnTitle,
		    btnLink = _props$attributes2.btnLink,
		    style = _props$attributes2.style,
		    className = _props$attributes2.className;

		/**
   * Conditional rendering functions
   */

		var renderSmallHeaderText = function renderSmallHeaderText(smallHeadingText) {

			if (smallHeadingText) {
				return wp.element.createElement(RichText.Content, {
					tagName: 'h4',
					value: smallHeadingText || ''
				});
			} else {
				return null;
			}
		};

		var renderHeaderText = function renderHeaderText(headingText) {
			if (headingText) {
				return wp.element.createElement(RichText.Content, {
					tagName: 'h2',
					value: headingText || ''
				});
			} else {
				return null;
			}
		};

		var renderContent = function renderContent(text) {
			if (text) {
				return wp.element.createElement(RichText.Content, {
					tagName: 'p',
					value: text || ''
				});
			} else {
				return null;
			}
		};

		var renderBtn = function renderBtn(btnLink, btnTitle) {
			if (btnTitle) {
				return wp.element.createElement(RichText.Content, {
					tagName: 'a',
					className: 'dbox-btn',
					href: btnLink,
					value: btnTitle || ''
				});
			} else {
				return null;
			}
		};

		return wp.element.createElement(
			'div',
			{
				className: ' ff fruitful_dbox ff-' + style },
			renderSmallHeaderText(smallHeadingText),
			renderHeaderText(headingText),
			renderContent(text),
			renderBtn(btnLink, btnTitle)
		);
	}

});

/***/ }),

/***/ 2:
/*!********************************************************************************************!*\
  !*** multi ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_dbox/block/block.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:/OSPanel/domains/_ff_/local/wp499.loc/wp-content/plugins/fruitful-shortcodes/fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_dbox/block/block.js */"./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_dbox/block/block.js");


/***/ })

/******/ });
//# sourceMappingURL=block.build.js.map