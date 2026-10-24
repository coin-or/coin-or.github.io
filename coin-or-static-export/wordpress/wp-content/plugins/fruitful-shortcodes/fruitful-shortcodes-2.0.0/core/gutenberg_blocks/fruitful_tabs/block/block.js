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
	TextControl,
	Dashicon,
	Tooltip
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
class fruitfulBlocksTabs extends Component {

	constructor() {
		super( ...arguments );
	}

	componentDidMount() {
		this.initTabs();
	}

	componentDidUpdate( prevProps ) {
		const { tabItems: prevItems } = prevProps.attributes;
		const { tabItems } = this.props.attributes;

		if (tabItems.length === 0) {
			this.props.setAttributes( {
				tabItems: [
					{
						title: __('Tab 1', 'ff-shortcodes'),
						text: __('At least one tab must remaining, to remove the whole block use "Remove Block" button from right menu.', 'ff-shortcodes'),
					},
				],
			} );
		}

		if (prevItems !== tabItems) {
			this.refreshTabs();
		} else {
			this.refreshTabs( true );
		}

	}

	initTabs() {

		if( typeof jQuery !== 'undefined') {

			window.ff_fruitful_tabs_shortcode();
			window.ff_fruitful_tabs_nav_shortcode();

		}

	}

	refreshTabs( hard = false ) {

		if( typeof jQuery !== 'undefined') {

			window.ff_fruitful_tabs_nav_shortcode();

			if( hard ) {
				window.ff_fruitful_tabs_refresh();
			}

		}

	}

	updateTabsContent( value, index ) {
		const { attributes, setAttributes } = this.props;
		const { tabItems } = attributes;

		let newItems = tabItems.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = { ...item, ...value };
			}
			return item;
		} );

		setAttributes( { tabItems: newItems } );
	}

	render() {
		/**
		 * Properties & attributes
		 */
		const {
			attributes: {
				type,
				tabItems,
				respBreak
			},
			setAttributes,
			focus,
			setFocus,
			className
		} = this.props;

		/**
		 * Render component
		 */
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Predefined styles', 'ff-shortcodes' ) } initialOpen={ true }>
						<SelectControl
							label={ __( 'Type', 'ff-shortcodes' ) }
							value={ type }
							options={ [
								{ label: __( 'Horizontal', 'ff-shortcodes' ), value: 'default' },
								{ label: __( 'Vertical', 'ff-shortcodes' ), value: 'vertical' },
								{ label: __( 'Accordion', 'ff-shortcodes' ), value: 'accordion' },
							] }
							onChange={ ( value ) => { setAttributes( { type: value } ); } }
						/>
					</PanelBody>
					<PanelBody title={ __( 'Responsive attributes', 'ff-shortcodes' ) } initialOpen={ true }>
						<TextControl
							label={ __('Responsive break', 'ff-shortcodes') }
							value={ respBreak }
							onChange={ ( value ) => setAttributes( { respBreak: value } ) }
						/>
					</PanelBody>
				</InspectorControls>

				<div
					className={ 'fruitful_tabs type-' + type }
					data-type={ type }
					data-break={ respBreak }
					>
					<nav>
						{tabItems.map( ( item, index ) => (
							<a href="javascript:;">
								<RichText
									tagName="span"
									value={ item.title }
									focus={ focus }
									onFocus={ setFocus }
									onChange={ ( value ) => this.updateTabsContent( { title: value || '' }, index ) } 
								/>
								<Tooltip text={ __( 'Remove tab', 'ff-shortcodes' ) }>
									<span
										className="ff-tab-control"
										onClick={ () => setAttributes( {
											tabItems: tabItems.filter( (vl, idx) => idx !== index )
										} ) }
										>
										<Dashicon icon="no"/>
									</span>
								</Tooltip>
							</a>
						) ) }

						<Tooltip text={ __( 'Add tab' ) }>
							<span className="ff-tab-control ff-add-tab-control" onClick={ () => setAttributes( { tabItems: [ ...tabItems, { title: __( 'New Tab', 'ff-shortcodes' ), text: __( 'Enter your content.', 'ff-shortcodes' ) } ] } ) }>
								<Dashicon icon="plus"/>
							</span>
						</Tooltip>

					</nav>
					{tabItems.map( ( item, index ) => (
						<div key={ index } className={ index == 0 ? 'fruitful_tabs_tab current active' : 'fruitful_tabs_tab' }>
						<div className="ff-inside">
							<RichText
								tagName="h4"
								className="ff-title"
								value={ item.title }
								focus={ focus }
								onFocus={ setFocus }
								onChange={ ( value ) => this.updateTabsContent( { title: value || '' }, index ) } 
							/>
							<div className="ff-tab-content">
								<RichText
									tagName="div"
									value={ item.text } 
									focus={ focus }
									onFocus={ setFocus }
									onChange={ ( value ) => this.updateTabsContent( { text: value || '' }, index ) }
								/>
							</div>
						</div>
					</div>
					) ) }
				</div>
			</Fragment>
		);
	}

}

/**
 * Register block
 */
registerBlockType( 'fruitful-blocks/fruitful-tabs', {
	title: __( 'Fruitful Tabs', 'ff-shortcodes' ),
	description: __( 'Horizontal / Vertical / Accordion', 'ff-shortcodes' ),
	icon: <svg viewBox="0 0 32 32" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M31.5,10.5 L14,10.5 C12.6192881,10.5 11.5,9.38071187 11.5,8 L11.5,4.5 L2,4.5 C1.17157288,4.5 0.5,5.17157288 0.5,6 L0.5,26 C0.5,26.8284271 1.17157288,27.5 2,27.5 L30,27.5 C30.8284271,27.5 31.5,26.8284271 31.5,26 L31.5,10.5 Z" stroke="#4A4A4A"></path><path d="M11.5,4.5 L11.5,8 C11.5,9.38071187 12.6192881,10.5 14,10.5 L31.5,10.5 L31.5,6 C31.5,5.17157288 30.8284271,4.5 30,4.5 L11.5,4.5 Z" stroke="#4A4A4A"></path><rect fill="#4A4A4A" x="21" y="5" width="1" height="5"></rect></g></svg>,
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
	
	keywords: [ __( 'tabs', 'ff-shortcodes' ), __( 'accordion', 'ff-shortcodes' ), __( 'tour', 'ff-shortcodes' ) ],

	attributes: {
    type: {
			type: 'string',
			default: 'default'
		},
		tabItems: {
			type: "array",
			default: [
				{
					title: __( 'Tab 1', 'ff-shortcodes' ),
					text: __( 'Type here your text inside tab', 'ff-shortcodes' )
				},
				{
					title: __( 'Tab 2', 'ff-shortcodes' ),
					text: __( 'Type here your text inside tab', 'ff-shortcodes' )
				},
				{
					title: __( 'Tab 3', 'ff-shortcodes' ),
					text: __( 'Type here your text inside tab', 'ff-shortcodes' )
				},
			]
		},
		respBreak: {
			type: 'number',
			default: 767,
		},
	},

	/**
	 * Following function called when you edit your block
	 * through Gutenberg Editor
	 */
	edit: fruitfulBlocksTabs,

	/**
	 * Following function saves block data into post content
	 */
	save: ( props ) => {

		/**
		 * Get saved properties
		 */
		const {
			type,
			tabItems,
			respBreak
		} = props.attributes;

		return (
			<div
				className={ 'fruitful_tabs type-' + type }
				data-type={ type }
				data-break={ respBreak }
				>
				<nav>
				{tabItems.map( ( item, index ) => (
					<a href="javascript:;"><RichText.Content tagName="span" value={ item.title }/></a>
				) ) }
				</nav>
				{tabItems.map( ( item, index ) => (
					<div key={ index } className={ index == 0 ? 'fruitful_tabs_tab current active' : 'fruitful_tabs_tab' }>
					<div className="ff-inside">
						<h4 className="ff-title"><RichText.Content tagName="span" value={ item.title }/></h4>
						<div className="ff-tab-content"><RichText.Content tagName="div" value={ item.text }/></div>
					</div>
				</div>
				) ) }
			</div>
		);
	}
});