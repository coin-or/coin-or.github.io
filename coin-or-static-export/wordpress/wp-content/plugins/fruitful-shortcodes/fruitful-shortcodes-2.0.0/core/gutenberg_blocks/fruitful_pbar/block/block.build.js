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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_pbar/block/block.js":
/*!**************************************************************************************!*\
  !*** ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_pbar/block/block.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    IconButton = _wp$components.IconButton;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;

/**
 * Create new react component
 */

var fruitfulBlocksPbar = function (_Component) {
	_inherits(fruitfulBlocksPbar, _Component);

	function fruitfulBlocksPbar() {
		_classCallCheck(this, fruitfulBlocksPbar);

		return _possibleConstructorReturn(this, (fruitfulBlocksPbar.__proto__ || Object.getPrototypeOf(fruitfulBlocksPbar)).apply(this, arguments));
	}

	_createClass(fruitfulBlocksPbar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.initPbar();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			this.initPbar();
		}
	}, {
		key: 'initPbar',
		value: function initPbar() {

			if (typeof jQuery !== 'undefined') {
				window.ff_bar_shortcode_reinit();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			/**
    * Properties & attributes
    */
			var _props = this.props,
			    _props$attributes = _props.attributes,
			    title = _props$attributes.title,
			    width = _props$attributes.width,
			    delay = _props$attributes.delay,
			    type = _props$attributes.type,
			    isStriped = _props$attributes.isStriped,
			    setAttributes = _props.setAttributes,
			    focus = _props.focus,
			    setFocus = _props.setFocus,
			    className = _props.className;


			var isStyleStriped = isStriped ? 'ff-style-striped' : '';
			var isFull = width >= 95 ? 'ff-full' : '';

			/**
    * Render component
    */
			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(
					InspectorControls,
					null,
					wp.element.createElement(
						PanelBody,
						{ title: __('Attributes', 'ff-shortcodes'), initialOpen: true },
						wp.element.createElement(TextControl, {
							label: __('Title', 'ff-shortcodes'),
							value: title,
							onChange: function onChange(value) {
								return setAttributes({ title: value });
							}
						}),
						wp.element.createElement(SelectControl, {
							label: __('Type', 'ff-shortcodes'),
							value: type,
							options: [{ label: __('Success', 'ff-shortcodes'), value: 'success' }, { label: __('Info', 'ff-shortcodes'), value: 'info' }, { label: __('Warning', 'ff-shortcodes'), value: 'warning' }, { label: __('Danger', 'ff-shortcodes'), value: 'danger' }],
							onChange: function onChange(value) {
								setAttributes({ type: value });
							}
						}),
						wp.element.createElement(RangeControl, {
							label: __('Width', 'ff-shortcodes'),
							value: width,
							onChange: function onChange(size) {
								return setAttributes({ width: size });
							},
							min: 0,
							max: 100,
							beforeIcon: 'editor-textcolor',
							allowReset: true
						}),
						wp.element.createElement(TextControl, {
							label: __('Delay', 'ff-shortcodes'),
							value: delay,
							onChange: function onChange(value) {
								return setAttributes({ delay: value });
							}
						}),
						wp.element.createElement(ToggleControl, {
							label: __('Stripes', 'ff-shortcodes'),
							checked: isStriped,
							onChange: function onChange(state) {
								return setAttributes({ isStriped: state });
							}
						})
					)
				),
				wp.element.createElement(
					'div',
					{ className: 'fruitful_pbar' },
					wp.element.createElement(
						'div',
						{ className: 'ff fruitful_bar ff-type-' + type + ' ' + isStyleStriped + ' ' + isFull },
						wp.element.createElement('div', {
							className: 'ff-bar',
							'data-delay': delay,
							'data-width': width + '%' }),
						wp.element.createElement(
							'div',
							{ className: 'ff-title' },
							title
						),
						wp.element.createElement(
							'div',
							{ className: 'ff-value' },
							width + '%'
						)
					)
				)
			);
		}
	}]);

	return fruitfulBlocksPbar;
}(Component);

/**
 * Register block
 */


registerBlockType('fruitful-blocks/fruitful-pbar', {
	title: __('Fruitful Progress Bar', 'ff-shortcodes'),
	description: __('Progress Bar', 'ff-shortcodes'),
	icon: wp.element.createElement(
		'svg',
		{ viewBox: '0 0 32 32', version: '1.1' },
		wp.element.createElement(
			'g',
			{ stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' },
			wp.element.createElement('rect', { stroke: '#4A4A4A', x: '0.5', y: '8.5', width: '31', height: '5', rx: '2.5' }),
			wp.element.createElement('path', { d: 'M26,8.5 L22,13.5', id: 'Line', stroke: '#4A4A4A' }),
			wp.element.createElement('path', { d: 'M22,8.5 L18,13.5', id: 'Line', stroke: '#4A4A4A' }),
			wp.element.createElement('path', { d: 'M18,8.5 L14,13.5', id: 'Line', stroke: '#4A4A4A' }),
			wp.element.createElement('path', { d: 'M14,8.5 L10,13.5', id: 'Line', stroke: '#4A4A4A' }),
			wp.element.createElement('path', { d: 'M10,8.5 L6,13.5', id: 'Line', stroke: '#4A4A4A' }),
			wp.element.createElement('path', { d: 'M6,8.5 L2,13.5', id: 'Line', stroke: '#4A4A4A' }),
			wp.element.createElement('rect', { stroke: '#4A4A4A', x: '0.5', y: '18.5', width: '31', height: '5', rx: '2.5' }),
			wp.element.createElement('path', { d: 'M18,18.5 L14,23.5', id: 'Line', stroke: '#4A4A4A' }),
			wp.element.createElement('path', { d: 'M14,18.5 L10,23.5', id: 'Line', stroke: '#4A4A4A' }),
			wp.element.createElement('path', { d: 'M10,18.5 L6,23.5', id: 'Line', stroke: '#4A4A4A' }),
			wp.element.createElement('path', { d: 'M6,18.5 L2,23.5', id: 'Line', stroke: '#4A4A4A' })
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

	keywords: [__('pbar', 'ff-shortcodes'), __('progress', 'ff-shortcodes'), __('bar', 'ff-shortcodes')],

	attributes: {
		title: {
			type: 'string',
			default: __('My title', 'ff-shortcodes')
		},
		width: {
			type: 'number',
			default: 70
		},
		delay: {
			type: 'string',
			default: '0.2s'
		},
		type: {
			type: 'string',
			default: 'success'
		},
		icon: {
			type: 'string',
			default: ''
		},
		isStriped: {
			type: 'boolean',
			default: false
		}
	},

	/**
  * Following function called when you edit your block
  * through Gutenberg Editor
  */
	edit: fruitfulBlocksPbar,

	/**
  * Following function saves block data into post content
  */
	save: function save(props) {

		/**
   * Get saved properties
   */
		var _props$attributes2 = props.attributes,
		    title = _props$attributes2.title,
		    width = _props$attributes2.width,
		    delay = _props$attributes2.delay,
		    type = _props$attributes2.type,
		    icon = _props$attributes2.icon,
		    isStriped = _props$attributes2.isStriped;

		/**
   * Conditional rendering functions
   */

		var isStyleStriped = isStriped ? 'ff-style-striped' : '';
		var isFull = width >= 95 ? 'ff-full' : '';

		var renderTitle = function renderTitle(title) {

			if (title) {
				return wp.element.createElement(
					'div',
					{ className: 'ff-title' },
					title
				);
			} else {
				return null;
			}
		};

		return wp.element.createElement(
			'div',
			{ className: 'fruitful_pbar' },
			wp.element.createElement(
				'div',
				{ className: 'ff fruitful_bar ff-type-' + type + ' ' + isStyleStriped + ' ' + isFull },
				wp.element.createElement('div', {
					className: 'ff-bar',
					'data-delay': delay,
					'data-width': width + '%' }),
				renderTitle(title),
				wp.element.createElement(
					'div',
					{ className: 'ff-value' },
					width + '%'
				)
			)
		);
	}
});

/***/ }),

/***/ 3:
/*!********************************************************************************************!*\
  !*** multi ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_pbar/block/block.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:/OSPanel/domains/_ff_/local/wp499.loc/wp-content/plugins/fruitful-shortcodes/fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_pbar/block/block.js */"./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_pbar/block/block.js");


/***/ })

/******/ });
//# sourceMappingURL=block.build.js.map