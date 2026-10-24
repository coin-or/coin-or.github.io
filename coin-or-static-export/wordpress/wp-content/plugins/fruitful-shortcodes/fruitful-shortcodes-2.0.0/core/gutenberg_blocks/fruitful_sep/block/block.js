/**
 * Internationalization function, can be used like we do that in WordPress, e.g.:
 * __( 'My text', 'textdomain')
 */
const { __, _x, _n, _nx } = wp.i18n;

/**
 * Import Gutenberg Components to use
 */
const {
	InspectorControls,
	BlockControls,
	PanelColorSettings,
	ColorPalette
} = wp.editor;

const {
	PanelBody,
	RangeControl
} = wp.components;


const {
	registerBlockType
} = wp.blocks;

registerBlockType('fruitful-blocks/fruitful-sep', {
	title: __('Fruitful Separator', 'ff-shortcodes'),
	description: __('Customizable Separator', 'ff-shortcodes'),
	icon: <svg viewBox="0 0 32 32" version="1.1">
		<defs>
				<circle cx="2.5" cy="16.5" r="2.5"></circle>
				<circle cx="29.5" cy="16.5" r="2.5"></circle>
		</defs>
		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<g>
				<use fill="#FFFFFF" fill-rule="evenodd"></use>
				<circle stroke="#4A4A4A" stroke-width="1" cx="2.5" cy="16.5" r="2"></circle>
			</g>
			<g>
				<use fill="#FFFFFF" fill-rule="evenodd"></use>
				<circle stroke="#4A4A4A" stroke-width="1" cx="29.5" cy="16.5" r="2"></circle>
			</g>
			<rect fill="#4A4A4A" x="4" y="16" width="24" height="1"></rect>
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
		height: {
			type: 'number',
			default: 10,
		},
		color: {
			type: 'string',
			default: '#e0e0e0'
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
				height,
				color
			},
			setAttributes,
			className
		} = props;

		return ([

			/**
			 * Inspector controls items will be rendered in sidebar when you click on component
			 */
			<InspectorControls>
				<PanelBody title={__('Attributes', 'ff-shortcodes')} initialOpen={true}>
					<PanelColorSettings
						title={ __( 'Color', 'ff-shortcodes' ) }
						initialOpen={ false }
						colorSettings={[
							{
								value: color,
								onChange: (colorValue) => setAttributes({color: colorValue}),
								label: __('Text color', 'ff-shortcodes')
							}
						]}
					>
					</PanelColorSettings>
					<RangeControl
						label={ __( 'Height', 'ff-shortcodes' ) }
						value={ height }
						onChange={ ( size ) => setAttributes( { height: size } ) }
						min={ 0 }
						max={ 500 }
						beforeIcon="editor-textcolor"
						allowReset
					/>
				</PanelBody>
			</InspectorControls>,

			/**
			 * This element will be rendered directly in content editor
			 */
			<div
				className={ className + ' ff fruitful_sep' } 
				style={ { backgroundColor: color, height: height } } 
			></div>
		]);
	},

	/**
	 * Following function saves block data into post content
	 */
	save: (props) => {

		const {
			height,
			color,
			className
		} = props.attributes;

		return (
			<div
				className={ className + ' ff fruitful_sep' } 
				style={ { backgroundColor: color, height: height } } 
			></div>
		);
	},
});
