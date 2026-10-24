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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_recent_posts_slider/block/block.js":
/*!*****************************************************************************************************!*\
  !*** ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_recent_posts_slider/block/block.js ***!
  \*****************************************************************************************************/
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
 * Custom Recent Posts Slider React Component
 */

var initSlider = null;

function initCarousel() {

	if (window.jQuery) {
		if (initSlider) {
			clearTimeout(initSlider);
		}
		initSlider = setTimeout(window.ff_fruitful_recent_posts_slider_init, 700);
	}
}

var fruitfulRecentPostsSlider = function (_Component) {
	_inherits(fruitfulRecentPostsSlider, _Component);

	function fruitfulRecentPostsSlider() {
		_classCallCheck(this, fruitfulRecentPostsSlider);

		return _possibleConstructorReturn(this, (fruitfulRecentPostsSlider.__proto__ || Object.getPrototypeOf(fruitfulRecentPostsSlider)).apply(this, arguments));
	}

	_createClass(fruitfulRecentPostsSlider, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			initCarousel();
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps) {
			if (initSlider) {
				clearTimeout(initSlider);
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			initCarousel();
		}
	}, {
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
			    displayThumb = attributes.displayThumb,
			    thumbWidth = attributes.thumbWidth,
			    thumbHeight = attributes.thumbHeight,
			    thumbBorderRadius = attributes.thumbBorderRadius,
			    displayDate = attributes.displayDate,
			    displayHeader = attributes.displayHeader,
			    displayExcerpt = attributes.displayExcerpt,
			    postExcerptLength = attributes.postExcerptLength,
			    displayMetaData = attributes.displayMetaData,
			    title = attributes.title,
			    slides = attributes.slides,
			    slidesSmall = attributes.slidesSmall,
			    slidesExtraSmall = attributes.slidesExtraSmall;


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
					wp.element.createElement(TextControl, {
						label: __('Block Title (optional)'),
						value: title,
						onChange: function onChange(value) {
							return setAttributes({ title: value });
						}
					}),
					wp.element.createElement(SelectControl, {
						label: __('Style'),
						value: style,
						options: [{ label: __('Clean'), value: 'default' }, { label: __('Bordered'), value: 'bordered' }],
						onChange: function onChange(value) {
							return setAttributes({ style: value });
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
				),
				wp.element.createElement(
					PanelBody,
					{ title: __('Responsiveness'), initialOpen: true },
					wp.element.createElement(RangeControl, {
						label: __('Visible slides'),
						min: 1,
						max: 5,
						value: slides,
						onChange: function onChange(value) {
							return setAttributes({ slides: value });
						}
					}),
					wp.element.createElement(RangeControl, {
						label: __('Visible slides on small screen'),
						min: 1,
						max: 5,
						value: slidesSmall,
						onChange: function onChange(value) {
							return setAttributes({ slidesSmall: value });
						}
					}),
					wp.element.createElement(RangeControl, {
						label: __('Visible slides on extra small screen'),
						min: 1,
						max: 5,
						value: slidesExtraSmall,
						onChange: function onChange(value) {
							return setAttributes({ slidesExtraSmall: value });
						}
					})
				)
			);

			var hasPosts = Array.isArray(recentPosts) && recentPosts.length;

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
					block: 'fruitful-blocks/fruitful-posts-slider',
					attributes: attributes
				})
			);
		}
	}]);

	return fruitfulRecentPostsSlider;
}(Component);

/**
 * Register block
 */


registerBlockType('fruitful-blocks/fruitful-posts-slider', {
	title: __('Fruitful Posts Slider'),
	description: __('Displays Recent Posts Slider'),
	icon: wp.element.createElement(
		'svg',
		{ viewBox: '0 0 32 32', version: '1.1' },
		wp.element.createElement(
			'g',
			{ stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' },
			wp.element.createElement('path', { d: 'M4.5,27.5 L30,27.5 C30.8284271,27.5 31.5,26.8284271 31.5,26 L31.5,6 C31.5,5.17157288 30.8284271,4.5 30,4.5 L6,4.5 C5.17157288,4.5 4.5,5.17157288 4.5,6 L4.5,27.5 Z', stroke: '#4A4A4A' }),
			wp.element.createElement('path', { d: 'M0.5,8.5 L0.5,24 C0.5,25.9329966 2.06700338,27.5 4,27.5 L4.5,27.5 L4.5,8.5 L0.5,8.5 Z', stroke: '#4A4A4A' }),
			wp.element.createElement('polyline', { stroke: '#4A4A4A', points: '16 12 12 16 16 20' }),
			wp.element.createElement('polyline', { stroke: '#4A4A4A', transform: 'translate(23.000000, 16.000000) scale(-1, 1) translate(-23.000000, -16.000000) ', points: '25 12 21 16 25 20' })
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
		},
		title: {
			type: 'string',
			default: ''
		},
		slides: {
			type: 'number',
			default: 4
		},
		slidesSmall: {
			type: 'number',
			default: 3
		},
		slidesExtraSmall: {
			type: 'number',
			default: 2
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

		initCarousel();

		return {
			recentPosts: getEntityRecords('postType', 'post', recentPostsQuery),
			categoriesList: getEntityRecords('taxonomy', 'category', catsQuery)
		};
	})(fruitfulRecentPostsSlider),

	/**
  * Following function saves block data into post content
  */
	save: function save(props) {
		// will be rendered through PHP
		return null;
	}

});

/***/ }),

/***/ 4:
/*!***********************************************************************************************************!*\
  !*** multi ./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_recent_posts_slider/block/block.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:/OSPanel/domains/_ff_/local/wp499.loc/wp-content/plugins/fruitful-shortcodes/fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_recent_posts_slider/block/block.js */"./fruitful-shortcodes-2.0.0/core/gutenberg_blocks/fruitful_recent_posts_slider/block/block.js");


/***/ })

/******/ });
//# sourceMappingURL=block.build.js.map