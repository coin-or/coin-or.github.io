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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_btn/block/block.js":
/*!*************************************************************************************!*\
  !*** ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_btn/block/block.js ***!
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
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    PanelColorSettings = _wp$editor.PanelColorSettings,
    ColorPalette = _wp$editor.ColorPalette;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    Toolbar = _wp$components.Toolbar;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    registerBlockStyle = _wp$blocks.registerBlockStyle;

/**
 * Register block style
 * function adds additonal CSS class name to the block:
 * is-style-default
 * is-style-another-style
 */

/*
registerBlockStyle( 'fruitful-blocks/fruitful-btn', {
	name: 'default',
	label: __( 'Default style', 'ff-shortcodes')
});
*/

/**
 * Register block
 */

registerBlockType('fruitful-blocks/fruitful-btn', {
	title: __('Fruitful Button', 'ff-shortcodes'),
	description: __('Customizable button', 'ff-shortcodes'),
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
		align: ['left', 'right', 'center'],
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
			type: 'array',
			source: 'children',
			selector: 'a',
			default: __('Click me!', 'ff-shortcodes')
		},
		align: {
			type: 'string',
			default: 'left'
		},
		link: {
			type: 'string',
			default: 'https://google.com'
		},
		target: {
			type: 'string',
			default: '_self'
		},
		id: {
			type: 'string',
			// generate an unique element ID
			default: ''
		},
		size: {
			type: 'string',
			default: 'mini'
		},
		color: {
			type: 'string',
			default: 'default'
		},
		style: {
			type: 'string',
			default: 'default'
		},
		radius: {
			type: 'string',
			default: '0'
		},
		customFontSize: {
			type: 'string',
			default: ''
		},
		customTextColor: {
			type: 'string',
			default: ''
		},
		customLineHeight: {
			type: 'string',
			default: ''
		},
		customBtnColor: {
			type: 'string',
			default: ''
		},
		customBtnBorderColor: {
			type: 'string',
			default: ''
		},
		customHoverTextColor: {
			type: 'string',
			default: ''
		},
		customHoverBtnColor: {
			type: 'string',
			default: ''
		},
		customHoverBtnBorderColor: {
			type: 'string',
			default: ''
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
		    link = _props$attributes.link,
		    target = _props$attributes.target,
		    id = _props$attributes.id,
		    size = _props$attributes.size,
		    color = _props$attributes.color,
		    style = _props$attributes.style,
		    radius = _props$attributes.radius,
		    customFontSize = _props$attributes.customFontSize,
		    customLineHeight = _props$attributes.customLineHeight,
		    customTextColor = _props$attributes.customTextColor,
		    customBtnColor = _props$attributes.customBtnColor,
		    customBtnBorderColor = _props$attributes.customBtnBorderColor,
		    customHoverTextColor = _props$attributes.customHoverTextColor,
		    customHoverBtnColor = _props$attributes.customHoverBtnColor,
		    customBtnHoverBorderColor = _props$attributes.customBtnHoverBorderColor,
		    setAttributes = props.setAttributes,
		    focus = props.focus,
		    setFocus = props.setFocus,
		    className = props.className,
		    clientId = props.clientId;


		setAttributes({ id: 'block-' + clientId });

		/**
   * Render component
   */
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
				wp.element.createElement(TextControl, {
					label: __('Link URL', 'ff-shortcodes'),
					value: link,
					onChange: function onChange(value) {
						return setAttributes({ link: value });
					}
				}),
				wp.element.createElement(SelectControl, {
					label: __('Target', 'ff-shortcodes'),
					value: target,
					options: [{ label: __('Current window', 'ff-shortcodes'), value: '_self' }, { label: __('New window', 'ff-shortcodes'), value: '_blank' }],
					onChange: function onChange(value) {
						return setAttributes({ target: value });
					}
				})
			),
			wp.element.createElement(
				PanelBody,
				{ title: __('Predefined styles', 'ff-shortcodes'), initialOpen: true },
				wp.element.createElement(SelectControl, {
					label: __('Size', 'ff-shortcodes'),
					value: size,
					options: [{ label: __('Mini', 'ff-shortcodes'), value: 'mini' }, { label: __('Small', 'ff-shortcodes'), value: 'small' }, { label: __('Large', 'ff-shortcodes'), value: 'large' }, { label: __('Extra Large', 'ff-shortcodes'), value: 'extra-large' }],
					onChange: function onChange(value) {
						return setAttributes({ size: value });
					}
				}),
				wp.element.createElement(SelectControl, {
					label: __('Color', 'ff-shortcodes'),
					value: color,
					options: [{ label: __('Default', 'ff-shortcodes'), value: 'default' }, { label: __('Primary', 'ff-shortcodes'), value: 'primary' }, { label: __('Info', 'ff-shortcodes'), value: 'info' }, { label: __('Success', 'ff-shortcodes'), value: 'success' }, { label: __('Secondary', 'ff-shortcodes'), value: 'secondary' }, { label: __('Warning', 'ff-shortcodes'), value: 'warning' }, { label: __('Inverse', 'ff-shortcodes'), value: 'inverse' }],
					onChange: function onChange(value) {
						return setAttributes({ color: value });
					}
				}),
				wp.element.createElement(SelectControl, {
					label: __('Style', 'ff-shortcodes'),
					value: style,
					options: [{ label: __('Filled', 'ff-shortcodes'), value: 'default' }, { label: __('Outline', 'ff-shortcodes'), value: 'outline' }],
					onChange: function onChange(value) {
						return setAttributes({ style: value });
					}
				})
			),
			wp.element.createElement(
				PanelBody,
				{ title: __('Custom styles', 'ff-shortcodes'), initialOpen: true },
				wp.element.createElement(RangeControl, {
					label: __('Radius', 'ff-shortcodes'),
					value: radius,
					onChange: function onChange(size) {
						return setAttributes({ radius: size });
					},
					min: 0,
					max: 20,
					beforeIcon: 'editor-textcolor',
					allowReset: true
				}),
				wp.element.createElement(RangeControl, {
					label: __('Font size', 'ff-shortcodes'),
					value: customFontSize,
					onChange: function onChange(size) {
						return setAttributes({ customFontSize: size });
					},
					min: 9,
					max: 30,
					beforeIcon: 'editor-textcolor',
					allowReset: true
				}),
				wp.element.createElement(RangeControl, {
					label: __('Line height', 'ff-shortcodes'),
					value: customLineHeight,
					onChange: function onChange(size) {
						return setAttributes({ customLineHeight: size });
					},
					min: 9,
					max: 50,
					beforeIcon: 'editor-textcolor',
					allowReset: true
				}),
				wp.element.createElement(PanelColorSettings, {
					title: __('Text color', 'ff-shortcodes'),
					initialOpen: false,
					colorSettings: [{
						value: customTextColor,
						onChange: function onChange(colorValue) {
							return setAttributes({ customTextColor: colorValue });
						},
						label: __('Text color', 'ff-shortcodes')
					}]
				}),
				wp.element.createElement(PanelColorSettings, {
					title: __('Background color', 'ff-shortcodes'),
					initialOpen: false,
					colorSettings: [{
						value: customBtnColor,
						onChange: function onChange(colorValue) {
							return setAttributes({ customBtnColor: colorValue });
						},
						label: __('Background color', 'ff-shortcodes')
					}]
				}),
				wp.element.createElement(PanelColorSettings, {
					title: __('Border color', 'ff-shortcodes'),
					initialOpen: false,
					colorSettings: [{
						value: customBtnBorderColor,
						onChange: function onChange(colorValue) {
							return setAttributes({ customBtnBorderColor: colorValue });
						},
						label: __('Border color', 'ff-shortcodes')
					}]
				})
			),
			wp.element.createElement(
				PanelBody,
				{ title: __('Custom hover styles', 'ff-shortcodes'), initialOpen: true },
				wp.element.createElement(PanelColorSettings, {
					title: __('Hover : Text color', 'ff-shortcodes'),
					initialOpen: false,
					colorSettings: [{
						value: customHoverTextColor,
						onChange: function onChange(colorValue) {
							return setAttributes({ customHoverTextColor: colorValue });
						},
						label: __('Text color', 'ff-shortcodes')
					}]
				}),
				wp.element.createElement(PanelColorSettings, {
					title: __('Hover : Background color', 'ff-shortcodes'),
					initialOpen: false,
					colorSettings: [{
						value: customHoverBtnColor,
						onChange: function onChange(colorValue) {
							return setAttributes({ customHoverBtnColor: colorValue });
						},
						label: __('Background color', 'ff-shortcodes')
					}]
				}),
				wp.element.createElement(PanelColorSettings, {
					title: __('Hover : Border color', 'ff-shortcodes'),
					initialOpen: false,
					colorSettings: [{
						value: customBtnHoverBorderColor,
						onChange: function onChange(colorValue) {
							return setAttributes({ customBtnHoverBorderColor: colorValue });
						},
						label: __('Border color', 'ff-shortcodes')
					}]
				})
			)
		),

		/**
   * This element will be rendered directly in content editor
   */
		wp.element.createElement(
			'div',
			{ style: { textAlign: align } },
			wp.element.createElement(RichText, {
				tagName: 'a',
				className: className + ' ff fruitful_btn ff-type-button ff-size-' + size + ' ff-color-' + color + ' ff-style-' + style + ' ff-id-' + id,
				href: 'https://google.com',
				onChange: function onChange(value) {
					return setAttributes({ content: value });
				},
				value: content,
				id: id,
				focus: focus,
				onFocus: setFocus,
				style: { fontSize: customFontSize + 'px', lineHeight: customLineHeight + 'px', color: customTextColor, backgroundColor: customBtnColor, borderColor: customBtnBorderColor, borderRadius: radius + 'px' }
			})
		)];
	},

	/**
  * Following function saves block data into post content
  */
	save: function save(props) {

		/**
   * Get saved properties
   */
		var _props$attributes2 = props.attributes,
		    align = _props$attributes2.align,
		    link = _props$attributes2.link,
		    target = _props$attributes2.target,
		    id = _props$attributes2.id,
		    size = _props$attributes2.size,
		    color = _props$attributes2.color,
		    style = _props$attributes2.style,
		    radius = _props$attributes2.radius,
		    customFontSize = _props$attributes2.customFontSize,
		    customLineHeight = _props$attributes2.customLineHeight,
		    customTextColor = _props$attributes2.customTextColor,
		    customBtnColor = _props$attributes2.customBtnColor,
		    customBtnBorderColor = _props$attributes2.customBtnBorderColor,
		    customHoverTextColor = _props$attributes2.customHoverTextColor,
		    customHoverBtnColor = _props$attributes2.customHoverBtnColor,
		    customBtnHoverBorderColor = _props$attributes2.customBtnHoverBorderColor,
		    content = _props$attributes2.content;


		var blockCSSStyles = [customFontSize && 'font-size:' + customFontSize + 'px;', customLineHeight && 'line-height:' + customLineHeight + 'px;', customTextColor && 'color:' + customTextColor + ';', radius && 'border-radius:' + radius + 'px;', customBtnColor && 'background-color:' + customBtnColor + ';', customBtnBorderColor && 'border-color:' + customBtnBorderColor + ';'].filter(Boolean).join(' ');

		var blockHoverCSSStyles = [customHoverTextColor && 'color:' + customHoverTextColor + ';', customHoverBtnColor && 'background-color:' + customHoverBtnColor + ';', customBtnHoverBorderColor && 'border-color:' + customBtnHoverBorderColor + ';'].filter(Boolean).join(' ');

		/**
   * Render and save element
   */
		return wp.element.createElement(
			'div',
			{ style: { textAlign: align } },
			wp.element.createElement(RichText.Content, {
				href: link || '',
				target: target || '_self',
				className: 'ff fruitful_btn ff-type-button ff-size-' + size + ' ff-color-' + color + ' ff-style-' + style + ' ff-id-' + id,
				tagName: 'a',
				id: id,
				value: content
			}),
			wp.element.createElement(
				'style',
				null,
				'a#' + id + ' {\n\t\t\t\t\t\t' + blockCSSStyles + '\n\t\t\t\t\t}\n\t\t\t\t\ta#' + id + ':hover {\n\t\t\t\t\t\t' + blockHoverCSSStyles + '\n\t\t\t\t\t}'
			)
		);
	}

});

/**

function setDefaultBlockCustomClassName( className, blockName ) {
	return blockName === 'fruitful-blocks/fruitful-btn' ?
	'ff fruitful_btn ff-type-button ff-size-mini ff-color-default ff-style-default' :
	className;
}

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'fruitful-blocks/fruitful-btn',
	setDefaultBlockCustomClassName
);

function setCustomBlockClassName( props, blockType ) {
	if( blockType.name === 'fruitful-blocks/fruitful-btn') {
		return Object.assign( props, { class: 'wp-block-list' } );
	}
	return props;
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'fruitful-blocks/fruitful-btn',
	setCustomBlockClassName
);

**/

/***/ }),

/***/ 1:
/*!*******************************************************************************************!*\
  !*** multi ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_btn/block/block.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:/OSPanel/domains/_ff_/local/wp499.loc/wp-content/plugins/fruitful-shortcodes/fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_btn/block/block.js */"./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_btn/block/block.js");


/***/ })

/******/ });
//# sourceMappingURL=block.build.js.map