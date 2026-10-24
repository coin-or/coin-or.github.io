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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_alert/block/block.js":
/*!***************************************************************************************!*\
  !*** ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_alert/block/block.js ***!
  \***************************************************************************************/
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
    BlockControls = _wp$editor.BlockControls,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    ColorPalette = _wp$editor.ColorPalette;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    Toolbar = _wp$components.Toolbar;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('fruitful-blocks/fruitful-alert', {
	title: __('Fruitful Alert', 'ff-shortcodes'),
	description: __('Customizable Alert', 'ff-shortcodes'),
	icon: wp.element.createElement(
		'svg',
		{ viewBox: '0 0 32 32', version: '1.1' },
		wp.element.createElement(
			'g',
			{ stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' },
			wp.element.createElement('rect', { x: '0.5', stroke: '#4A4A4A', y: '8.5', width: '31', height: '15', rx: '3' }),
			wp.element.createElement('circle', { cx: '8', stroke: '#4A4A4A', cy: '16', r: '1.5' }),
			wp.element.createElement('circle', { cx: '16', stroke: '#4A4A4A', cy: '16', r: '1.5' }),
			wp.element.createElement('circle', { cx: '24', stroke: '#4A4A4A', cy: '16', r: '1.5' })
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
		content: {
			type: 'string',
			default: 'Alert'
		},
		id: {
			type: 'string',
			// generate an unique element ID
			default: ''
		},
		type: {
			type: 'string',
			default: 'success'
		},
		align: {
			type: 'string',
			default: 'left'
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
		    content = _props$attributes.content,
		    align = _props$attributes.align,
		    id = _props$attributes.id,
		    type = _props$attributes.type,
		    setAttributes = props.setAttributes,
		    className = props.className,
		    clientId = props.clientId;


		var updateContent = function updateContent(content) {
			props.setAttributes({ content: content });
		};

		setAttributes({ id: 'block-' + clientId });

		return [

		/**
   * Block controls appears on element focus in editor
   */
		wp.element.createElement(
			BlockControls,
			null,
			wp.element.createElement(BlockAlignmentToolbar, { value: align, onChange: function onChange(align) {
					return setAttributes({ align: align });
				} })
		),

		/**
   * Inspector controls items will be rendered in sidebar when you click on component
   */
		wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				{ title: __('Attributes', 'ff-shortcodes'), initialOpen: true },
				wp.element.createElement(SelectControl, {
					label: __('Type', 'ff-shortcodes'),
					value: type,
					options: [{ label: __('Success', 'ff-shortcodes'), value: 'success' }, { label: __('Info', 'ff-shortcodes'), value: 'info' }, { label: __('Warning', 'ff-shortcodes'), value: 'warning' }, { label: __('Danger', 'ff-shortcodes'), value: 'danger' }],
					onChange: function onChange(value) {
						return setAttributes({ type: value });
					}
				})
			)
		),

		/**
   * This element will be rendered directly in content editor
   */
		wp.element.createElement(
			'div',
			{ style: { textAlign: align },
				className: className + ' ff fruitful_alert ff-alert-' + type + ' ff-id-' + id },
			wp.element.createElement('i', { className: 'ff-icon' }),
			wp.element.createElement(RichText, {
				value: content,
				onChange: updateContent
			}),
			wp.element.createElement('a', { href: '#', className: 'ff-alert-dismiss' })
		)];
	},

	/**
  * Following function saves block data into post content
  */
	save: function save(props) {
		var _props$attributes2 = props.attributes,
		    content = _props$attributes2.content,
		    align = _props$attributes2.align,
		    id = _props$attributes2.id,
		    type = _props$attributes2.type;


		return wp.element.createElement(
			'div',
			{ style: { textAlign: align },
				className: 'ff fruitful_alert ff-alert-' + type + ' ff-id-' + id },
			wp.element.createElement('i', { className: 'ff-icon' }),
			wp.element.createElement(RichText.Content, {
				tagName: 'div',
				value: content
			}),
			wp.element.createElement('a', { href: '#', className: 'ff-alert-dismiss' })
		);
	}
});

/***/ }),

/***/ 0:
/*!*********************************************************************************************!*\
  !*** multi ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_alert/block/block.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:/OSPanel/domains/_ff_/local/wp499.loc/wp-content/plugins/fruitful-shortcodes/fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_alert/block/block.js */"./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_alert/block/block.js");


/***/ })

/******/ });
//# sourceMappingURL=block.build.js.map