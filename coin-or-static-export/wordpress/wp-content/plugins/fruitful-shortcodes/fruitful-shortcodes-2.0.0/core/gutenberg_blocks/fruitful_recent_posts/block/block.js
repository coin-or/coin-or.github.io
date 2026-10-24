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
 * Custom Recent Posts React Component
 */

class fruitfulRecentPosts extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {

		const { attributes, setAttributes, recentPosts, categoriesList } = this.props;

		const {
			order,
			orderBy,
			category,
			numberOfPosts,
			style,
			columns,
			displayThumb,
			thumbWidth,
			thumbHeight,
			thumbBorderRadius,
			displayDate,
			displayHeader,
			displayExcerpt,
			postExcerptLength,
			displayMetaData
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
					<SelectControl
						label={ __( 'Style' ) }
						value={ style }
						options={ [
							{ label: __( 'Clean' ), value: 'default' },
							{ label: __( 'Bordered' ), value: 'bordered' },
						] }
						onChange={ ( value ) => setAttributes( { style: value } ) }
					/>
					<RangeControl
						label={ __( 'Columns' ) }
						value={ columns }
						min={ 1 }
						max={ 4 }
						onChange={ (value) => setAttributes( { columns: value } ) }
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
			</InspectorControls>
		);

		const hasPosts = Array.isArray( recentPosts ) && recentPosts.length;
		const bootstrapCols = Math.abs( 12 / columns );

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
					block="fruitful-blocks/fruitful-recent-posts"
					attributes={ attributes }
				/>
			</Fragment>
		);

	}

}

/**
 * Register block
 */
registerBlockType( 'fruitful-blocks/fruitful-recent-posts', {
	title: __( 'Fruitful Recent Posts' ),
	description: __( 'Displays Recent Posts' ),
	icon: <svg viewBox="0 0 32 32" version="1.1">
		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<rect stroke="#4A4A4A" x="2.5" y="9.5" width="7" height="10" rx="1"></rect>
			<rect stroke="#4A4A4A" x="12.5" y="9.5" width="7" height="10" rx="1"></rect>
			<rect stroke="#4A4A4A" x="22.5" y="9.5" width="7" height="10" rx="1"></rect>
			<rect fill="#4A4A4A" x="2" y="23" width="8" height="1" rx="0.5"></rect>
			<rect fill="#4A4A4A" x="2" y="26" width="8" height="1" rx="0.5"></rect>
			<rect fill="#4A4A4A" x="7" y="5" width="18" height="1" rx="0.5"></rect>
			<rect fill="#4A4A4A" x="12" y="23" width="8" height="1" rx="0.5"></rect>
			<rect fill="#4A4A4A" x="12" y="26" width="8" height="1" rx="0.5"></rect>
			<rect fill="#4A4A4A" x="22" y="23" width="8" height="1" rx="0.5"></rect>
			<rect fill="#4A4A4A" x="22" y="26" width="8" height="1" rx="0.5"></rect>
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

		return {
			recentPosts: getEntityRecords( 'postType', 'post', recentPostsQuery ),
			categoriesList: getEntityRecords( 'taxonomy', 'category', catsQuery ),
		}
	} )( fruitfulRecentPosts ),

	/**
	 * Following function saves block data into post content
	 */
	save: ( props ) => {
		// will be rendered through PHP
		return null;
	},

} );