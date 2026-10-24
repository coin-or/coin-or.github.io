/**
 * Internationalization function, can be used like we do that in WordPress, e.g.:
 * __( 'My text', 'textdomain')
 */
const { __, _x, _n, _nx } = wp.i18n;

/**
 * Import Gutenberg Components to use
 */

const {
	Component,
	Fragment
} = wp.element;

const {
	InspectorControls,
	BlockControls
} = wp.editor;

const {
	RangeControl,
	ToggleControl,
	SelectControl,
	TextControl,
	PanelBody,
	QueryControls,
	Spinner,
	Placeholder,
	IconButton,
	Toolbar,
	ServerSideRender
} = wp.components;

const {
	registerBlockType
} = wp.blocks;

const {
	withSelect
} = wp.data;

const {
	pickBy,
	isUndefined
} = lodash;

const {
	decodeEntities 
} = wp.htmlEntities;

const {
	moment
} = wp.date;

/**
 * Custom Recent Posts Slider React Component
 */

let initSlider = null;

function initCarousel() {
	
	if (window.jQuery) {
		if( initSlider ) {
			clearTimeout(initSlider);
		}
		initSlider = setTimeout(window.ff_fruitful_recent_posts_slider_init, 700);
	}
	
}

class fruitfulRecentPostsSlider extends Component {

	constructor() {
		super( ...arguments );
	}

	componentDidMount() {
		initCarousel();
	}

	componentWillUpdate( nextProps ) {
		if( initSlider ) {
			clearTimeout(initSlider);
		}
	}

	componentDidUpdate( prevProps ) {
		initCarousel();
	}
	
	
	render() {

		const { attributes, setAttributes, recentPosts, categoriesList } = this.props;

		const {
			order,
			orderBy,
			category,
			numberOfPosts,
			style,
			displayThumb,
			thumbWidth,
			thumbHeight,
			thumbBorderRadius,
			displayDate,
			displayHeader,
			displayExcerpt,
			postExcerptLength,
			displayMetaData,
			title,
			slides,
			slidesSmall,
			slidesExtraSmall
		} = attributes;

		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( 'Query' ) } initialOpen={ true }>
					<QueryControls
						{ ...{ order, orderBy } }
						categoriesList={ categoriesList }
						selectedCategoryId={ category }
						numberOfItems={ numberOfPosts }
						onOrderChange={ ( value ) => setAttributes( { order: value } ) }
						onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
						onCategoryChange={ ( value ) => setAttributes( { category: value !== '' ? value : undefined } ) }
						onNumberOfItemsChange={ (value) => setAttributes( { numberOfPosts: value } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Attributes' ) } initialOpen={ true }>
					<TextControl
						label={ __('Block Title (optional)') }
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
					/>
					<SelectControl
						label={ __( 'Style' ) }
						value={ style }
						options={ [
							{ label: __( 'Clean' ), value: 'default' },
							{ label: __( 'Bordered' ), value: 'bordered' },
						] }
						onChange={ ( value ) => setAttributes( { style: value } ) }
					/>
					<ToggleControl
						label={ __( 'Display thumbnail' ) }
						checked={ displayThumb }
						onChange={ ( value ) => setAttributes( { displayThumb: value } ) }
					/>
					{displayThumb &&
						<TextControl
							label={ __('Thumbnail width') }
							value={ thumbWidth }
							onChange={ ( value ) => setAttributes( { thumbWidth: value } ) }
						/>
					}
					{displayThumb &&
						<TextControl
							label={ __('Thumbnail height') }
							value={ thumbHeight }
							onChange={ ( value ) => setAttributes( { thumbHeight: value } ) }
						/>
					}
					{displayThumb &&
						<RangeControl
							label={ __( 'Thumbnail Border Radius' ) }
							min={ 0 }
							max={ 20 }
							value={ thumbBorderRadius }
							onChange={ ( value ) => setAttributes( { thumbBorderRadius: value } ) }
						/>
					}
					<ToggleControl
						label={ __( 'Display Post Date' ) }
						checked={ displayDate }
						onChange={ ( value ) => setAttributes( { displayDate: value } ) }
					/>
					<ToggleControl
						label={ __( 'Display Header' ) }
						checked={ displayHeader }
						onChange={ ( value ) => setAttributes( { displayHeader: value } ) }
					/>
					<ToggleControl
						label={ __( 'Display Excerpt' ) }
						checked={ displayExcerpt }
						onChange={ ( value ) => setAttributes( { displayExcerpt: value } ) }
					/>
					{displayExcerpt &&
						<RangeControl
							label={ __( 'Excerpt length' ) }
							min={ 0 }
							max={ 300 }
							value={ postExcerptLength }
							onChange={ ( value ) => setAttributes( { postExcerptLength: value } ) }
						/>
					}
					<ToggleControl
						label={ __( 'Display Meta Data' ) }
						checked={ displayMetaData }
						onChange={ ( value ) => setAttributes( { displayMetaData: value } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Responsiveness' ) } initialOpen={ true }>
					<RangeControl
						label={ __( 'Visible slides' ) }
						min={ 1 }
						max={ 5 }
						value={ slides }
						onChange={ ( value ) => setAttributes( { slides: value } ) }
					/>
					<RangeControl
						label={ __( 'Visible slides on small screen' ) }
						min={ 1 }
						max={ 5 }
						value={ slidesSmall }
						onChange={ ( value ) => setAttributes( { slidesSmall: value } ) }
					/>
					<RangeControl
						label={ __( 'Visible slides on extra small screen' ) }
						min={ 1 }
						max={ 5 }
						value={ slidesExtraSmall }
						onChange={ ( value ) => setAttributes( { slidesExtraSmall: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		);

		const hasPosts = Array.isArray( recentPosts ) && recentPosts.length;

		// display a notice if there are no posts
		if ( ! hasPosts) {
			return (
				<Fragment>
					{ inspectorControls }
					<Placeholder label={ __( 'Fruitful Recent Posts' ) }>
						{ ! Array.isArray( recentPosts ) ? <Spinner /> : __( 'No posts found, sorry.' ) }
					</Placeholder>
				</Fragment>
			)
		}

		// else display a block
		return (
			<Fragment>
				{ inspectorControls }
				<BlockControls>
					<Toolbar>
						<IconButton
							label={ __( 'Reload' ) }
							icon="update"
							onClick={ () => setAttributes( { token: Math.floor(Math.random() * Math.floor(999)) } ) }
						/>
					</Toolbar>
				</BlockControls>
				<ServerSideRender
					block="fruitful-blocks/fruitful-posts-slider"
					attributes={ attributes }
				/>
			</Fragment>
		);

	}

}

/**
 * Register block
 */
registerBlockType( 'fruitful-blocks/fruitful-posts-slider', {
	title: __( 'Fruitful Posts Slider' ),
	description: __( 'Displays Recent Posts Slider' ),
	icon: <svg viewBox="0 0 32 32" version="1.1">
		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<path d="M4.5,27.5 L30,27.5 C30.8284271,27.5 31.5,26.8284271 31.5,26 L31.5,6 C31.5,5.17157288 30.8284271,4.5 30,4.5 L6,4.5 C5.17157288,4.5 4.5,5.17157288 4.5,6 L4.5,27.5 Z" stroke="#4A4A4A"></path>
			<path d="M0.5,8.5 L0.5,24 C0.5,25.9329966 2.06700338,27.5 4,27.5 L4.5,27.5 L4.5,8.5 L0.5,8.5 Z" stroke="#4A4A4A"></path>
			<polyline stroke="#4A4A4A" points="16 12 12 16 16 20"></polyline>
			<polyline stroke="#4A4A4A" transform="translate(23.000000, 16.000000) scale(-1, 1) translate(-23.000000, -16.000000) " points="25 12 21 16 25 20"></polyline>
		</g>
	</svg>,
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
		multiple: true,
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
		},
	},

	/**
	 * Following function called when you edit your block
	 * through Gutenberg Editor
	 */
	edit: withSelect(( select, props ) => {

		const { getEntityRecords } = select( 'core' );
		const { category, order, orderBy, postsPerPage, token } = props.attributes;

		const recentPostsQuery = pickBy( {
			categories: category,
			order,
			orderby: orderBy,
			per_page: postsPerPage,
			token,
		}, ( value ) => !isUndefined( value ) );

		const catsQuery = {
			per_page: 99,
		};
		
				
		initCarousel();

		return {
			recentPosts: getEntityRecords( 'postType', 'post', recentPostsQuery ),
			categoriesList: getEntityRecords( 'taxonomy', 'category', catsQuery ),
		}
	} )( fruitfulRecentPostsSlider ),

	/**
	 * Following function saves block data into post content
	 */
	save: ( props ) => {
		// will be rendered through PHP
		return null;
	},

} );