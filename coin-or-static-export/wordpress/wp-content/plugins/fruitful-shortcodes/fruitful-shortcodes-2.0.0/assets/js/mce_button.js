;(function () {
	
	tinymce.PluginManager.add('ff_shortcodes_button', function (editor, url) {
		
		editor.addButton('ff_shortcodes_button', {
			text: 'Fruitful Shortcodes',
			classes: 'ff_shortcodes_button',
			icon: 'dashicons dashicons-before dashicons-welcome-widgets-menus',
			type: 'button',
			title: 'Fruitful Shortcodes',
			onclick: function () {
				window.ff_shortcodes_mce_editor = editor;  
			}
			
		});
		
	});
})();
