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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_recent_posts/block/block.js":
/*!**********************************************************************************************!*\
  !*** ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_recent_posts/block/block.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    QueryControls = _wp$components.QueryControls,
    Spinner = _wp$components.Spinner,
    Placeholder = _wp$components.Placeholder,
    IconButton = _wp$components.IconButton,
    Toolbar = _wp$components.Toolbar,
    ServerSideRender = _wp$components.ServerSideRender;
var registerBlockType = wp.blocks.registerBlockType;
var withSelect = wp.data.withSelect;
var _lodash = lodash,
    pickBy = _lodash.pickBy,
    isUndefined = _lodash.isUndefined;
var decodeEntities = wp.htmlEntities.decodeEntities;
var moment = wp.date.moment;

/**
 * Custom Recent Posts React Component
 */

var fruitfulRecentPosts = function (_Component) {
	_inherits(fruitfulRecentPosts, _Component);

	function fruitfulRecentPosts() {
		_classCallCheck(this, fruitfulRecentPosts);

		return _possibleConstructorReturn(this, (fruitfulRecentPosts.__proto__ || Object.getPrototypeOf(fruitfulRecentPosts)).apply(this, arguments));
	}

	_createClass(fruitfulRecentPosts, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes,
			    recentPosts = _props.recentPosts,
			    categoriesList = _props.categoriesList;
			var order = attributes.order,
			    orderBy = attributes.orderBy,
			    category = attributes.category,
			    numberOfPosts = attributes.numberOfPosts,
			    style = attributes.style,
			    columns = attributes.columns,
			    displayThumb = attributes.displayThumb,
			    thumbWidth = attributes.thumbWidth,
			    thumbHeight = attributes.thumbHeight,
			    thumbBorderRadius = attributes.thumbBorderRadius,
			    displayDate = attributes.displayDate,
			    displayHeader = attributes.displayHeader,
			    displayExcerpt = attributes.displayExcerpt,
			    postExcerptLength = attributes.postExcerptLength,
			    displayMetaData = attributes.displayMetaData;


			var inspectorControls = wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(
					PanelBody,
					{ title: __('Query'), initialOpen: true },
					wp.element.createElement(QueryControls, _extends({ order: order, orderBy: orderBy }, {
						categoriesList: categoriesList,
						selectedCategoryId: category,
						numberOfItems: numberOfPosts,
						onOrderChange: function onOrderChange(value) {
							return setAttributes({ order: value });
						},
						onOrderByChange: function onOrderByChange(value) {
							return setAttributes({ orderBy: value });
						},
						onCategoryChange: function onCategoryChange(value) {
							return setAttributes({ category: value !== '' ? value : undefined });
						},
						onNumberOfItemsChange: function onNumberOfItemsChange(value) {
							return setAttributes({ numberOfPosts: value });
						}
					}))
				),
				wp.element.createElement(
					PanelBody,
					{ title: __('Attributes'), initialOpen: true },
					wp.element.createElement(SelectControl, {
						label: __('Style'),
						value: style,
						options: [{ label: __('Clean'), value: 'default' }, { label: __('Bordered'), value: 'bordered' }],
						onChange: function onChange(value) {
							return setAttributes({ style: value });
						}
					}),
					wp.element.createElement(RangeControl, {
						label: __('Columns'),
						value: columns,
						min: 1,
						max: 4,
						onChange: function onChange(value) {
							return setAttributes({ columns: value });
						}
					}),
					wp.element.createElement(ToggleControl, {
						label: __('Display thumbnail'),
						checked: displayThumb,
						onChange: function onChange(value) {
							return setAttributes({ displayThumb: value });
						}
					}),
					displayThumb && wp.element.createElement(TextControl, {
						label: __('Thumbnail width'),
						value: thumbWidth,
						onChange: function onChange(value) {
							return setAttributes({ thumbWidth: value });
						}
					}),
					displayThumb && wp.element.createElement(TextControl, {
						label: __('Thumbnail height'),
						value: thumbHeight,
						onChange: function onChange(value) {
							return setAttributes({ thumbHeight: value });
						}
					}),
					displayThumb && wp.element.createElement(RangeControl, {
						label: __('Thumbnail Border Radius'),
						min: 0,
						max: 20,
						value: thumbBorderRadius,
						onChange: function onChange(value) {
							return setAttributes({ thumbBorderRadius: value });
						}
					}),
					wp.element.createElement(ToggleControl, {
						label: __('Display Post Date'),
						checked: displayDate,
						onChange: function onChange(value) {
							return setAttributes({ displayDate: value });
						}
					}),
					wp.element.createElement(ToggleControl, {
						label: __('Display Header'),
						checked: displayHeader,
						onChange: function onChange(value) {
							return setAttributes({ displayHeader: value });
						}
					}),
					wp.element.createElement(ToggleControl, {
						label: __('Display Excerpt'),
						checked: displayExcerpt,
						onChange: function onChange(value) {
							return setAttributes({ displayExcerpt: value });
						}
					}),
					displayExcerpt && wp.element.createElement(RangeControl, {
						label: __('Excerpt length'),
						min: 0,
						max: 300,
						value: postExcerptLength,
						onChange: function onChange(value) {
							return setAttributes({ postExcerptLength: value });
						}
					}),
					wp.element.createElement(ToggleControl, {
						label: __('Display Meta Data'),
						checked: displayMetaData,
						onChange: function onChange(value) {
							return setAttributes({ displayMetaData: value });
						}
					})
				)
			);

			var hasPosts = Array.isArray(recentPosts) && recentPosts.length;
			var bootstrapCols = Math.abs(12 / columns);

			// display a notice if there are no posts
			if (!hasPosts) {
				return wp.element.createElement(
					Fragment,
					null,
					inspectorControls,
					wp.element.createElement(
						Placeholder,
						{ label: __('Fruitful Recent Posts') },
						!Array.isArray(recentPosts) ? wp.element.createElement(Spinner, null) : __('No posts found, sorry.')
					)
				);
			}

			// else display a block
			return wp.element.createElement(
				Fragment,
				null,
				inspectorControls,
				wp.element.createElement(
					BlockControls,
					null,
					wp.element.createElement(
						Toolbar,
						null,
						wp.element.createElement(IconButton, {
							label: __('Reload'),
							icon: 'update',
							onClick: function onClick() {
								return setAttributes({ token: Math.floor(Math.random() * Math.floor(999)) });
							}
						})
					)
				),
				wp.element.createElement(ServerSideRender, {
					block: 'fruitful-blocks/fruitful-recent-posts',
					attributes: attributes
				})
			);
		}
	}]);

	return fruitfulRecentPosts;
}(Component);

/**
 * Register block
 */


registerBlockType('fruitful-blocks/fruitful-recent-posts', {
	title: __('Fruitful Recent Posts'),
	description: __('Displays Recent Posts'),
	icon: wp.element.createElement(
		'svg',
		{ viewBox: '0 0 32 32', version: '1.1' },
		wp.element.createElement(
			'g',
			{ stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' },
			wp.element.createElement('rect', { stroke: '#4A4A4A', x: '2.5', y: '9.5', width: '7', height: '10', rx: '1' }),
			wp.element.createElement('rect', { stroke: '#4A4A4A', x: '12.5', y: '9.5', width: '7', height: '10', rx: '1' }),
			wp.element.createElement('rect', { stroke: '#4A4A4A', x: '22.5', y: '9.5', width: '7', height: '10', rx: '1' }),
			wp.element.createElement('rect', { fill: '#4A4A4A', x: '2', y: '23', width: '8', height: '1', rx: '0.5' }),
			wp.element.createElement('rect', { fill: '#4A4A4A', x: '2', y: '26', width: '8', height: '1', rx: '0.5' }),
			wp.element.createElement('rect', { fill: '#4A4A4A', x: '7', y: '5', width: '18', height: '1', rx: '0.5' }),
			wp.element.createElement('rect', { fill: '#4A4A4A', x: '12', y: '23', width: '8', height: '1', rx: '0.5' }),
			wp.element.createElement('rect', { fill: '#4A4A4A', x: '12', y: '26', width: '8', height: '1', rx: '0.5' }),
			wp.element.createElement('rect', { fill: '#4A4A4A', x: '22', y: '23', width: '8', height: '1', rx: '0.5' }),
			wp.element.createElement('rect', { fill: '#4A4A4A', x: '22', y: '26', width: '8', height: '1', rx: '0.5' })
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

	attributes: {
		numberOfPosts: {
			type: 'number',
			default: 4
		},
		style: {
			type: 'string',
			default: 'default'
		},
		columns: {
			type: 'number',
			default: 4
		},
		displayThumb: {
			type: 'boolean',
			default: true
		},
		thumbWidth: {
			type: 'number',
			default: 255
		},
		thumbHeight: {
			type: 'number',
			default: 240
		},
		thumbBorderRadius: {
			type: 'number',
			default: 4
		},
		displayDate: {
			type: 'boolean',
			default: true
		},
		displayHeader: {
			type: 'boolean',
			default: true
		},
		displayExcerpt: {
			type: 'boolean',
			default: true
		},
		postExcerptLength: {
			type: 'number',
			default: 30
		},
		displayMetaData: {
			type: 'boolean',
			default: true
		}
	},

	/**
  * Following function called when you edit your block
  * through Gutenberg Editor
  */
	edit: withSelect(function (select, props) {
		var _select = select('core'),
		    getEntityRecords = _select.getEntityRecords;

		var _props$attributes = props.attributes,
		    category = _props$attributes.category,
		    order = _props$attributes.order,
		    orderBy = _props$attributes.orderBy,
		    postsPerPage = _props$attributes.postsPerPage,
		    token = _props$attributes.token;


		var recentPostsQuery = pickBy({
			categories: category,
			order: order,
			orderby: orderBy,
			per_page: postsPerPage,
			token: token
		}, function (value) {
			return !isUndefined(value);
		});

		var catsQuery = {
			per_page: 99
		};

		return {
			recentPosts: getEntityRecords('postType', 'post', recentPostsQuery),
			categoriesList: getEntityRecords('taxonomy', 'category', catsQuery)
		};
	})(fruitfulRecentPosts),

	/**
  * Following function saves block data into post content
  */
	save: function save(props) {
		// will be rendered through PHP
		return null;
	}

});

/***/ }),

/***/ 5:
/*!****************************************************************************************************!*\
  !*** multi ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_recent_posts/block/block.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:/OSPanel/domains/_ff_/local/wp499.loc/wp-content/plugins/fruitful-shortcodes/fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_recent_posts/block/block.js */"./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_recent_posts/block/block.js");


/***/ })

/******/ });
//# sourceMappingURL=block.build.js.map