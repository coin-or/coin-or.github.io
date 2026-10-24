/**
 * Internationalization function, can be used like we do that in WordPress, e.g.:
 * __( 'My text', 'textdomain')
 */
const { __, _x, _n, _nx } = wp.i18n;

/**
 * Import Gutenberg Components to use
 */
const {
	BlockControls,
	InspectorControls,
} = wp.editor;

const {
	RangeControl,
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
	IconButton
} = wp.components;

const {
	registerBlockType
} = wp.blocks;

const {
	Component,
	Fragment
} = wp.element;

/**
 * Create new react component
 */
class fruitfulBlocksPbar extends Component {

	constructor() {
		super( ...arguments );
	}

	componentDidMount() {
		this.initPbar();
	}

	componentDidUpdate( prevProps ) {
		this.initPbar();
	}

	initPbar() {

		if( typeof jQuery !== 'undefined') {
			window.ff_bar_shortcode_reinit();
		}

	}

	render() {
		/**
		 * Properties & attributes
		 */
		const {
			attributes: {
				title,
				width,
				delay,
				type,
				isStriped
			},
			setAttributes,
			focus,
			setFocus,
			className
		} = this.props;

		const isStyleStriped = isStriped ? 'ff-style-striped' : '';
		const isFull = width >= 95 ? 'ff-full' : '';


		/**
		 * Render component
		 */
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Attributes', 'ff-shortcodes' ) } initialOpen={ true }>
						<TextControl
							label={ __('Title', 'ff-shortcodes') }
							value={ title }
							onChange={ ( value ) => setAttributes( { title: value } ) }
						/>
						<SelectControl
							label={ __( 'Type', 'ff-shortcodes' ) }
							value={ type }
							options={ [
								{ label: __( 'Success', 'ff-shortcodes' ), value: 'success' },
								{ label: __( 'Info', 'ff-shortcodes' ), value: 'info' },
								{ label: __( 'Warning', 'ff-shortcodes' ), value: 'warning' },
								{ label: __( 'Danger', 'ff-shortcodes' ), value: 'danger' },
							] }
							onChange={ ( value ) => { setAttributes( { type: value } ); } }
						/>
						<RangeControl
							label={ __( 'Width', 'ff-shortcodes' ) }
							value={ width }
							onChange={ ( size ) => setAttributes( { width: size } ) }
							min={ 0 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<TextControl
							label={ __('Delay', 'ff-shortcodes') }
							value={ delay }
							onChange={ ( value ) => setAttributes( { delay: value } ) }
						/>
						<ToggleControl
							label={ __( 'Stripes', 'ff-shortcodes' ) }
							checked={ isStriped }
							onChange={ ( state ) => setAttributes( { isStriped: state } ) }
						/>
					</PanelBody>
				</InspectorControls>

				<div className="fruitful_pbar">
					<div className={ 'ff fruitful_bar ff-type-' + type + ' ' + isStyleStriped + ' ' + isFull }>

						<div
							className="ff-bar"
							data-delay={ delay }
							data-width={ width + '%' }>
						</div>

						<div className="ff-title">{title}</div>

						<div className="ff-value">{ width + '%' }</div>

					</div>				
				</div>

			</Fragment>
		);
	}

}

/**
 * Register block
 */
registerBlockType( 'fruitful-blocks/fruitful-pbar', {
	title: __( 'Fruitful Progress Bar', 'ff-shortcodes' ),
	description: __( 'Progress Bar', 'ff-shortcodes' ),
	icon: <svg viewBox="0 0 32 32" version="1.1">
		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<rect stroke="#4A4A4A" x="0.5" y="8.5" width="31" height="5" rx="2.5"></rect>
			<path d="M26,8.5 L22,13.5" id="Line" stroke="#4A4A4A"></path>
			<path d="M22,8.5 L18,13.5" id="Line" stroke="#4A4A4A"></path>
			<path d="M18,8.5 L14,13.5" id="Line" stroke="#4A4A4A"></path>
			<path d="M14,8.5 L10,13.5" id="Line" stroke="#4A4A4A"></path>
			<path d="M10,8.5 L6,13.5" id="Line" stroke="#4A4A4A"></path>
			<path d="M6,8.5 L2,13.5" id="Line" stroke="#4A4A4A"></path>
			<rect stroke="#4A4A4A" x="0.5" y="18.5" width="31" height="5" rx="2.5"></rect>
			<path d="M18,18.5 L14,23.5" id="Line" stroke="#4A4A4A"></path>
			<path d="M14,18.5 L10,23.5" id="Line" stroke="#4A4A4A"></path>
			<path d="M10,18.5 L6,23.5" id="Line" stroke="#4A4A4A"></path>
			<path d="M6,18.5 L2,23.5" id="Line" stroke="#4A4A4A"></path>
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
	
	keywords: [ __( 'pbar', 'ff-shortcodes' ), __( 'progress', 'ff-shortcodes' ), __( 'bar', 'ff-shortcodes' ) ],

	attributes: {
    title: {
			type: 'string',
			default: __( 'My title', 'ff-shortcodes')
		},
		width: {
			type: 'number',
			default: 70,
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
		},
	},

	/**
	 * Following function called when you edit your block
	 * through Gutenberg Editor
	 */
	edit: fruitfulBlocksPbar,

	/**
	 * Following function saves block data into post content
	 */
	save: ( props ) => {

		/**
		 * Get saved properties
		 */
		const {
			title,
			width,
			delay,
			type,
			icon,
			isStriped
		} = props.attributes;

		/**
		 * Conditional rendering functions
		 */
		const isStyleStriped = isStriped ? 'ff-style-striped' : '';
		const isFull = width >= 95 ? 'ff-full' : '';

		const renderTitle = ( title ) => {

			if( title ) {
				return (
					<div className="ff-title">{title}</div>
				)
			} else {
				return null;
			}
		};

		return (
			<div className="fruitful_pbar">
				<div className={ 'ff fruitful_bar ff-type-' + type + ' ' + isStyleStriped + ' ' + isFull }>

					<div
						className="ff-bar"
						data-delay={ delay }
						data-width={ width + '%' }>
					</div>

					{ renderTitle( title ) }

					<div className="ff-value">{ width + '%' }</div>

				</div>				
			</div>
		);
	}
});