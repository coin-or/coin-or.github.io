/**
 * Internationalization function, can be used like we do that in WordPress, e.g.:
 * __( 'My text', 'textdomain')
 */
const { __, _x, _n, _nx } = wp.i18n;

/**
 * Import Gutenberg Components to use
 */
const {
	RichText,
	InspectorControls,
	BlockControls
} = wp.editor;

const {
	PanelBody,
	SelectControl,
	TextControl
} = wp.components;


const {
	registerBlockType
} = wp.blocks;

registerBlockType('fruitful-blocks/fruitful-dbox', {
	title: __('Fruitful Promo Text', 'ff-shortcodes'),
	description: __('Customizable Promo Text Box', 'ff-shortcodes'),
	icon: <svg viewBox="0 0 32 32" version="1.1">
		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<path d="M6.5,4.5 L6.5,27.5 L13.5,27.5 L13.5,19.5 L18.5,19.5 L18.5,27.5 L25.5,27.5 L25.5,4.5 L18.5000153,4.5 L18.5002594,12.5 L13.5,12.5 L13.5,4.5 L6.5,4.5 Z" stroke="#4A4A4A"></path>
			<rect fill="#4A4A4A" x="26" y="4" width="2" height="1"></rect>
			<rect fill="#4A4A4A" x="4" y="4" width="2" height="1"></rect>
			<rect fill="#4A4A4A" x="26" y="27" width="2" height="1"></rect>
			<rect fill="#4A4A4A" x="4" y="27" width="2" height="1"></rect>
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

	/**
	 * Declare changeable block attributes
	 */
	attributes: {
		smallHeadingText: {
			type: 'string',
			default: __('Hello, there!', 'ff-shortcodes'),
		},
		headingText: {
			type: 'string',
			default: __('I am a promo box', 'ff-shortcodes'),
		},
		text: {
			type: 'string',
			default: __('Click here to change this text or add your own', 'ff-shortcodes'),
		},
		btnTitle: {
			type: 'string',
			default: __('Button title', 'ff-shortcodes'),
		},
		btnLink: {
			type: 'string',
			default: 'https://google.com',
		},
		style: {
			type: 'string',
			default: 'style-1'
		},
	},

	/**
	 * Following function called when you edit your block
	 * through Gutenberg Editor
	 */
	edit: (props) => {

		/**
		 * Properties & attributes
		 */
		const {
			attributes: {
				smallHeadingText,
				headingText,
				text,
				btnTitle,
				btnLink,
				style
			},
			setAttributes,
			className
		} = props;

		return ([

			/**
			 * Inspector controls items will be rendered in sidebar when you click on component
			 */
			<InspectorControls>
				<PanelBody title={__('Style', 'ff-shortcodes')} initialOpen={true}>
					<SelectControl
						label={__('Style', 'ff-shortcodes')}
						value={style}
						options={[
							{label: __('Style 1', 'ff-shortcodes'), value: 'style-1'},
							{label: __('Style 2', 'ff-shortcodes'), value: 'style-2'},
							{label: __('Style 3', 'ff-shortcodes'), value: 'style-3'},
						]}
						onChange={(value) => setAttributes({style: value})}
					/>
				</PanelBody>
				<PanelBody title={ __('Button', 'ff-shortcodes')} initialOpen={true}>
					<TextControl
						label={ __('Button URL', 'ff-shortcodes') }
						value={ btnLink }
						onChange={ ( value ) => setAttributes( { btnLink: value } ) }
					/>
				</PanelBody>
			</InspectorControls>,

			/**
			 * This element will be rendered directly in content editor
			 */
			<div
				 className={className + ' ff fruitful_dbox ff-' + style }>
					<RichText
						tagName="h4" 
						value={smallHeadingText}
						onChange={ ( value ) => setAttributes( { smallHeadingText: value } ) } 
					/>
					<RichText
						tagName="h2" 
						value={headingText}
						onChange={ ( value ) => setAttributes( { headingText: value } ) } 
					/>
					<RichText
						tagName="p" 
						value={text}
						onChange={ ( value ) => setAttributes( { text: value } ) } 
					/>
					<RichText
						tagName="a"
						className="dbox-btn"
						href={ btnLink }
						onChange={ ( value ) => setAttributes( { btnTitle: value } ) }
						value={ __('Click me!', 'ff-shortcodes') }
						onRemove={ () => { forward: false } }
					/>
			</div>
		]);
	},

	/**
	 * Following function saves block data into post content
	 */
	save: (props) => {

		const {
			smallHeadingText,
			headingText,
			text,
			btnTitle,
			btnLink,
			style,
			className
		} = props.attributes;

		/**
		 * Conditional rendering functions
		 */

		const renderSmallHeaderText = ( smallHeadingText ) => {

			if( smallHeadingText ) {
				return (
					<RichText.Content
						tagName="h4" 
						value={smallHeadingText || ''}
					/>
				)
			} else {
				return null;
			}
		};

		const renderHeaderText = ( headingText ) => {
			if( headingText ) {
				return(
					<RichText.Content
						tagName="h2" 
						value={headingText || ''}
					/>
				)
			} else {
				return null;
			}
		};

		const renderContent = ( text ) => {
			if( text ) {
				return(
					<RichText.Content
						tagName="p" 
						value={text || ''}
					/>
				)
			} else {
				return null;
			}
		};

		const renderBtn = ( btnLink, btnTitle ) => {
			if( btnTitle ) {
				return(
					<RichText.Content
						tagName="a"
						className="dbox-btn"
						href={ btnLink }
						value={ btnTitle || '' }
					/>
				)
			} else {
				return null;
			}
		};

		return (
			<div 
				 className={ ' ff fruitful_dbox ff-' + style }>
					{ renderSmallHeaderText( smallHeadingText ) }
					{ renderHeaderText( headingText ) }
					{ renderContent( text ) }
					{ renderBtn(  btnLink, btnTitle ) }
			</div>
		);
	}

});
