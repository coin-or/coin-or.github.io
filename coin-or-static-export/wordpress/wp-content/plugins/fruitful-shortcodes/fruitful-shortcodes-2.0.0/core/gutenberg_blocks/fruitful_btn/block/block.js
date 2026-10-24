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
	BlockControls,
	BlockAlignmentToolbar,
	PanelColorSettings,
	ColorPalette
} = wp.editor;

const {
	RangeControl,
	PanelBody,
	SelectControl,
	TextControl,
	Toolbar
} = wp.components;

const {
	registerBlockType,
	registerBlockStyle
} = wp.blocks;

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
registerBlockType( 'fruitful-blocks/fruitful-btn', {
	title: __( 'Fruitful Button', 'ff-shortcodes' ),
	description: __( 'Customizable button', 'ff-shortcodes' ),
	icon: <svg viewBox="0 0 32 32" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0.5" stroke="#4A4A4A" y="8.5" width="31" height="15" rx="3"></rect><circle cx="8" stroke="#4A4A4A" cy="16" r="1.5"></circle><circle cx="16" stroke="#4A4A4A" cy="16" r="1.5"></circle><circle cx="24" stroke="#4A4A4A" cy="16" r="1.5"></circle></g></svg>,
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
		multiple: true,
	},

	/**
	 * Declare changeable block attributes
	 */
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'a',
			default: __( 'Click me!', 'ff-shortcodes')
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
		},
	},

	/**
	 * Following function called when you edit your block
	 * through Gutenberg Editor
	 */
	edit: ( props ) => {

		/**
		 * Properties & attributes
		 */
		const {
			attributes: {
				content,
				align,
				link,
				target,
				id,
				size,
				color,
				style,
				radius,
				customFontSize,
				customLineHeight,
				customTextColor,
				customBtnColor,
				customBtnBorderColor,
				customHoverTextColor,
				customHoverBtnColor,
				customBtnHoverBorderColor
			},
			setAttributes,
			focus,
			setFocus,
			className,
			clientId
		} = props;

		setAttributes( {id: 'block-' + clientId});

		/**
		 * Render component
		 */
		return ([ 

			/**
			 * Block controls appears on element focus in editor
			 */
			<BlockControls>
				<BlockAlignmentToolbar value={ align } onChange={ ( align ) => setAttributes( { align: align } ) } />
			</BlockControls>,

			/**
			 * Inspector controls items will be rendered in sidebar when you click on component
			 */
			<InspectorControls>
				<PanelBody title={ __( 'Attributes', 'ff-shortcodes' ) } initialOpen={ true }>
					<TextControl
						label={ __('Link URL', 'ff-shortcodes') }
						value={ link }
						onChange={ ( value ) => setAttributes( { link: value } ) }
					/>
					<SelectControl
						label={ __( 'Target', 'ff-shortcodes' ) }
						value={ target }
						options={ [
							{ label: __( 'Current window', 'ff-shortcodes' ), value: '_self' },
							{ label: __( 'New window', 'ff-shortcodes' ), value: '_blank' },
						] }
						onChange={ ( value ) => setAttributes( { target: value } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Predefined styles', 'ff-shortcodes' ) } initialOpen={ true }>
				<SelectControl
						label={ __( 'Size', 'ff-shortcodes' ) }
						value={ size }
						options={ [
							{ label: __( 'Mini', 'ff-shortcodes' ), value: 'mini' },
							{ label: __( 'Small', 'ff-shortcodes' ), value: 'small' },
							{ label: __( 'Large', 'ff-shortcodes' ), value: 'large' },
							{ label: __( 'Extra Large', 'ff-shortcodes' ), value: 'extra-large' },
						] }
						onChange={ ( value ) => setAttributes( { size: value } ) }
					/>
					<SelectControl
						label={ __( 'Color', 'ff-shortcodes' ) }
						value={ color }
						options={ [
							{ label: __( 'Default', 'ff-shortcodes' ), value: 'default' },
							{ label: __( 'Primary', 'ff-shortcodes' ), value: 'primary' },
							{ label: __( 'Info', 'ff-shortcodes' ), value: 'info' },
							{ label: __( 'Success', 'ff-shortcodes' ), value: 'success' },
							{ label: __( 'Secondary', 'ff-shortcodes' ), value: 'secondary' },
							{ label: __( 'Warning', 'ff-shortcodes' ), value: 'warning' },
							{ label: __( 'Inverse', 'ff-shortcodes' ), value: 'inverse' },
						] }
						onChange={ ( value ) => setAttributes( { color: value } ) }
					/>
					<SelectControl
						label={ __( 'Style', 'ff-shortcodes' ) }
						value={ style }
						options={ [
							{ label: __( 'Filled', 'ff-shortcodes' ), value: 'default' },
							{ label: __( 'Outline', 'ff-shortcodes' ), value: 'outline' },
						] }
						onChange={ ( value ) => setAttributes( { style: value } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Custom styles', 'ff-shortcodes' ) } initialOpen={ true }>
					<RangeControl
						label={ __( 'Radius', 'ff-shortcodes' ) }
						value={ radius }
						onChange={ ( size ) => setAttributes( { radius: size } ) }
						min={ 0 }
						max={ 20 }
						beforeIcon="editor-textcolor"
						allowReset
					/>
					<RangeControl
						label={ __( 'Font size', 'ff-shortcodes' ) }
						value={ customFontSize }
						onChange={ ( size ) => setAttributes( { customFontSize: size } ) }
						min={ 9 }
						max={ 30 }
						beforeIcon="editor-textcolor"
						allowReset
					/>
					<RangeControl
						label={ __( 'Line height', 'ff-shortcodes' ) }
						value={ customLineHeight }
						onChange={ ( size ) => setAttributes( { customLineHeight: size } ) }
						min={ 9 }
						max={ 50 }
						beforeIcon="editor-textcolor"
						allowReset
					/>
					<PanelColorSettings
						title={__('Text color', 'ff-shortcodes')}
						initialOpen={false}
						colorSettings={[
							{
								value: customTextColor,
								onChange: (colorValue) => setAttributes({customTextColor: colorValue}),
								label: __('Text color', 'ff-shortcodes')
							}
						]}
					>
					</PanelColorSettings>
					<PanelColorSettings
						title={ __( 'Background color', 'ff-shortcodes' ) }
						initialOpen={ false }
						colorSettings={[
							{
								value: customBtnColor,
								onChange: (colorValue) => setAttributes({customBtnColor: colorValue}),
								label: __('Background color', 'ff-shortcodes')
							}
						]}
					>
					</PanelColorSettings>
					<PanelColorSettings
						title={ __( 'Border color', 'ff-shortcodes' ) }
						initialOpen={ false }
						colorSettings={[
							{
								value: customBtnBorderColor,
								onChange: (colorValue) => setAttributes({customBtnBorderColor: colorValue}),
								label: __('Border color', 'ff-shortcodes')
							}
						]}
					>
					</PanelColorSettings>
				</PanelBody>
				<PanelBody title={ __( 'Custom hover styles', 'ff-shortcodes' ) } initialOpen={ true }>
					<PanelColorSettings
						title={ __( 'Hover : Text color', 'ff-shortcodes' ) }
						initialOpen={ false }
						colorSettings={[
							{
								value: customHoverTextColor,
								onChange: (colorValue) => setAttributes({customHoverTextColor: colorValue}),
								label: __('Text color', 'ff-shortcodes')
							}
						]}
					>
					</PanelColorSettings>
					<PanelColorSettings
						title={ __( 'Hover : Background color', 'ff-shortcodes' ) }
						initialOpen={ false }
						colorSettings={[
							{
								value: customHoverBtnColor,
								onChange: (colorValue) => setAttributes({customHoverBtnColor: colorValue}),
								label: __('Background color', 'ff-shortcodes')
							}
						]}
					>
					</PanelColorSettings>
					<PanelColorSettings
						title={ __( 'Hover : Border color', 'ff-shortcodes' ) }
						initialOpen={ false }
						colorSettings={[
							{
								value: customBtnHoverBorderColor,
								onChange: (colorValue) => setAttributes({customBtnHoverBorderColor: colorValue}),
								label: __('Border color', 'ff-shortcodes')
							}
						]}
					>
					</PanelColorSettings>
				</PanelBody>
			</InspectorControls>,

			/**
			 * This element will be rendered directly in content editor
			 */
			<div style={ {textAlign: align} }>
				<RichText
					tagName="a"
					className={ className + ' ff fruitful_btn ff-type-button ff-size-' + size + ' ff-color-' + color + ' ff-style-' + style + ' ff-id-' + id }
					href="https://google.com"
					onChange={ ( value ) => setAttributes( { content: value } ) }
					value={ content }
					id={ id }
					focus={ focus }
					onFocus={ setFocus }
					style={{ fontSize: customFontSize + 'px', lineHeight: customLineHeight + 'px', color: customTextColor, backgroundColor: customBtnColor, borderColor: customBtnBorderColor, borderRadius: radius + 'px' }}
				/>
			</div>
		]);
	},

	/**
	 * Following function saves block data into post content
	 */
	save: ( props ) => {

		/**
		 * Get saved properties
		 */
		const {
			align,
			link,
			target,
			id,
			size,
			color,
			style,
			radius,
			customFontSize,
			customLineHeight,
			customTextColor,
			customBtnColor,
			customBtnBorderColor,
			customHoverTextColor,
			customHoverBtnColor,
			customBtnHoverBorderColor,
			content
		} = props.attributes;

		const blockCSSStyles = [
			customFontSize && 'font-size:' + customFontSize + 'px;',
			customLineHeight && 'line-height:' + customLineHeight + 'px;',
			customTextColor && 'color:' + customTextColor + ';',
			radius && 'border-radius:' + radius + 'px;',
			customBtnColor && 'background-color:' + customBtnColor + ';',
			customBtnBorderColor && 'border-color:' + customBtnBorderColor + ';',
		].filter( Boolean ).join( ' ' );

		const blockHoverCSSStyles = [
			customHoverTextColor && 'color:' + customHoverTextColor + ';',
			customHoverBtnColor && 'background-color:' + customHoverBtnColor + ';',
			customBtnHoverBorderColor && 'border-color:' + customBtnHoverBorderColor + ';'
		].filter( Boolean ).join( ' ' );

		/**
		 * Render and save element
		 */
		return (
			<div style={ {textAlign: align} }>
				<RichText.Content
					href={ link || '' }
					target={ target || '_self' }
					className={ 'ff fruitful_btn ff-type-button ff-size-' + size + ' ff-color-' + color + ' ff-style-' + style + ' ff-id-' + id }
					tagName="a"
					id={ id }
					value={ content }
				/>
				<style>
					{`a#${id} {
						${blockCSSStyles}
					}
					a#${id}:hover {
						${blockHoverCSSStyles}
					}`}
				</style>
			</div>
		);
	},

} );

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