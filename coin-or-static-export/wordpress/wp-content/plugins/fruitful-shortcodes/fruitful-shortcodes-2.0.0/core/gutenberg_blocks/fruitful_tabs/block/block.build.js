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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_tabs/block/block.js":
/*!**************************************************************************************!*\
  !*** ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_tabs/block/block.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    Dashicon = _wp$components.Dashicon,
    Tooltip = _wp$components.Tooltip;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;

/**
 * Create new react component
 */

var fruitfulBlocksTabs = function (_Component) {
	_inherits(fruitfulBlocksTabs, _Component);

	function fruitfulBlocksTabs() {
		_classCallCheck(this, fruitfulBlocksTabs);

		return _possibleConstructorReturn(this, (fruitfulBlocksTabs.__proto__ || Object.getPrototypeOf(fruitfulBlocksTabs)).apply(this, arguments));
	}

	_createClass(fruitfulBlocksTabs, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.initTabs();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			var prevItems = prevProps.attributes.tabItems;
			var tabItems = this.props.attributes.tabItems;


			if (tabItems.length === 0) {
				this.props.setAttributes({
					tabItems: [{
						title: __('Tab 1', 'ff-shortcodes'),
						text: __('At least one tab must remaining, to remove the whole block use "Remove Block" button from right menu.', 'ff-shortcodes')
					}]
				});
			}

			if (prevItems !== tabItems) {
				this.refreshTabs();
			} else {
				this.refreshTabs(true);
			}
		}
	}, {
		key: 'initTabs',
		value: function initTabs() {

			if (typeof jQuery !== 'undefined') {

				window.ff_fruitful_tabs_shortcode();
				window.ff_fruitful_tabs_nav_shortcode();
			}
		}
	}, {
		key: 'refreshTabs',
		value: function refreshTabs() {
			var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


			if (typeof jQuery !== 'undefined') {

				window.ff_fruitful_tabs_nav_shortcode();

				if (hard) {
					window.ff_fruitful_tabs_refresh();
				}
			}
		}
	}, {
		key: 'updateTabsContent',
		value: function updateTabsContent(value, index) {
			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes;
			var tabItems = attributes.tabItems;


			var newItems = tabItems.map(function (item, thisIndex) {
				if (index === thisIndex) {
					item = _extends({}, item, value);
				}
				return item;
			});

			setAttributes({ tabItems: newItems });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			/**
    * Properties & attributes
    */
			var _props2 = this.props,
			    _props2$attributes = _props2.attributes,
			    type = _props2$attributes.type,
			    tabItems = _props2$attributes.tabItems,
			    respBreak = _props2$attributes.respBreak,
			    setAttributes = _props2.setAttributes,
			    focus = _props2.focus,
			    setFocus = _props2.setFocus,
			    className = _props2.className;

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
						{ title: __('Predefined styles', 'ff-shortcodes'), initialOpen: true },
						wp.element.createElement(SelectControl, {
							label: __('Type', 'ff-shortcodes'),
							value: type,
							options: [{ label: __('Horizontal', 'ff-shortcodes'), value: 'default' }, { label: __('Vertical', 'ff-shortcodes'), value: 'vertical' }, { label: __('Accordion', 'ff-shortcodes'), value: 'accordion' }],
							onChange: function onChange(value) {
								setAttributes({ type: value });
							}
						})
					),
					wp.element.createElement(
						PanelBody,
						{ title: __('Responsive attributes', 'ff-shortcodes'), initialOpen: true },
						wp.element.createElement(TextControl, {
							label: __('Responsive break', 'ff-shortcodes'),
							value: respBreak,
							onChange: function onChange(value) {
								return setAttributes({ respBreak: value });
							}
						})
					)
				),
				wp.element.createElement(
					'div',
					{
						className: 'fruitful_tabs type-' + type,
						'data-type': type,
						'data-break': respBreak
					},
					wp.element.createElement(
						'nav',
						null,
						tabItems.map(function (item, index) {
							return wp.element.createElement(
								'a',
								{ href: 'javascript:;' },
								wp.element.createElement(RichText, {
									tagName: 'span',
									value: item.title,
									focus: focus,
									onFocus: setFocus,
									onChange: function onChange(value) {
										return _this2.updateTabsContent({ title: value || '' }, index);
									}
								}),
								wp.element.createElement(
									Tooltip,
									{ text: __('Remove tab', 'ff-shortcodes') },
									wp.element.createElement(
										'span',
										{
											className: 'ff-tab-control',
											onClick: function onClick() {
												return setAttributes({
													tabItems: tabItems.filter(function (vl, idx) {
														return idx !== index;
													})
												});
											}
										},
										wp.element.createElement(Dashicon, { icon: 'no' })
									)
								)
							);
						}),
						wp.element.createElement(
							Tooltip,
							{ text: __('Add tab') },
							wp.element.createElement(
								'span',
								{ className: 'ff-tab-control ff-add-tab-control', onClick: function onClick() {
										return setAttributes({ tabItems: [].concat(_toConsumableArray(tabItems), [{ title: __('New Tab', 'ff-shortcodes'), text: __('Enter your content.', 'ff-shortcodes') }]) });
									} },
								wp.element.createElement(Dashicon, { icon: 'plus' })
							)
						)
					),
					tabItems.map(function (item, index) {
						return wp.element.createElement(
							'div',
							{ key: index, className: index == 0 ? 'fruitful_tabs_tab current active' : 'fruitful_tabs_tab' },
							wp.element.createElement(
								'div',
								{ className: 'ff-inside' },
								wp.element.createElement(RichText, {
									tagName: 'h4',
									className: 'ff-title',
									value: item.title,
									focus: focus,
									onFocus: setFocus,
									onChange: function onChange(value) {
										return _this2.updateTabsContent({ title: value || '' }, index);
									}
								}),
								wp.element.createElement(
									'div',
									{ className: 'ff-tab-content' },
									wp.element.createElement(RichText, {
										tagName: 'div',
										value: item.text,
										focus: focus,
										onFocus: setFocus,
										onChange: function onChange(value) {
											return _this2.updateTabsContent({ text: value || '' }, index);
										}
									})
								)
							)
						);
					})
				)
			);
		}
	}]);

	return fruitfulBlocksTabs;
}(Component);

/**
 * Register block
 */


registerBlockType('fruitful-blocks/fruitful-tabs', {
	title: __('Fruitful Tabs', 'ff-shortcodes'),
	description: __('Horizontal / Vertical / Accordion', 'ff-shortcodes'),
	icon: wp.element.createElement(
		'svg',
		{ viewBox: '0 0 32 32', version: '1.1' },
		wp.element.createElement(
			'g',
			{ stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' },
			wp.element.createElement('path', { d: 'M31.5,10.5 L14,10.5 C12.6192881,10.5 11.5,9.38071187 11.5,8 L11.5,4.5 L2,4.5 C1.17157288,4.5 0.5,5.17157288 0.5,6 L0.5,26 C0.5,26.8284271 1.17157288,27.5 2,27.5 L30,27.5 C30.8284271,27.5 31.5,26.8284271 31.5,26 L31.5,10.5 Z', stroke: '#4A4A4A' }),
			wp.element.createElement('path', { d: 'M11.5,4.5 L11.5,8 C11.5,9.38071187 12.6192881,10.5 14,10.5 L31.5,10.5 L31.5,6 C31.5,5.17157288 30.8284271,4.5 30,4.5 L11.5,4.5 Z', stroke: '#4A4A4A' }),
			wp.element.createElement('rect', { fill: '#4A4A4A', x: '21', y: '5', width: '1', height: '5' })
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

	keywords: [__('tabs', 'ff-shortcodes'), __('accordion', 'ff-shortcodes'), __('tour', 'ff-shortcodes')],

	attributes: {
		type: {
			type: 'string',
			default: 'default'
		},
		tabItems: {
			type: "array",
			default: [{
				title: __('Tab 1', 'ff-shortcodes'),
				text: __('Type here your text inside tab', 'ff-shortcodes')
			}, {
				title: __('Tab 2', 'ff-shortcodes'),
				text: __('Type here your text inside tab', 'ff-shortcodes')
			}, {
				title: __('Tab 3', 'ff-shortcodes'),
				text: __('Type here your text inside tab', 'ff-shortcodes')
			}]
		},
		respBreak: {
			type: 'number',
			default: 767
		}
	},

	/**
  * Following function called when you edit your block
  * through Gutenberg Editor
  */
	edit: fruitfulBlocksTabs,

	/**
  * Following function saves block data into post content
  */
	save: function save(props) {

		/**
   * Get saved properties
   */
		var _props$attributes = props.attributes,
		    type = _props$attributes.type,
		    tabItems = _props$attributes.tabItems,
		    respBreak = _props$attributes.respBreak;


		return wp.element.createElement(
			'div',
			{
				className: 'fruitful_tabs type-' + type,
				'data-type': type,
				'data-break': respBreak
			},
			wp.element.createElement(
				'nav',
				null,
				tabItems.map(function (item, index) {
					return wp.element.createElement(
						'a',
						{ href: 'javascript:;' },
						wp.element.createElement(RichText.Content, { tagName: 'span', value: item.title })
					);
				})
			),
			tabItems.map(function (item, index) {
				return wp.element.createElement(
					'div',
					{ key: index, className: index == 0 ? 'fruitful_tabs_tab current active' : 'fruitful_tabs_tab' },
					wp.element.createElement(
						'div',
						{ className: 'ff-inside' },
						wp.element.createElement(
							'h4',
							{ className: 'ff-title' },
							wp.element.createElement(RichText.Content, { tagName: 'span', value: item.title })
						),
						wp.element.createElement(
							'div',
							{ className: 'ff-tab-content' },
							wp.element.createElement(RichText.Content, { tagName: 'div', value: item.text })
						)
					)
				);
			})
		);
	}
});

/***/ }),

/***/ 7:
/*!********************************************************************************************!*\
  !*** multi ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_tabs/block/block.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:/OSPanel/domains/_ff_/local/wp499.loc/wp-content/plugins/fruitful-shortcodes/fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_tabs/block/block.js */"./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_tabs/block/block.js");


/***/ })

/******/ });
//# sourceMappingURL=block.build.js.map