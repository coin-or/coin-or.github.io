(function($){

    "use strict";

    $(document).ready(function(){
        $('body').on('click', '.ff-version', function() {
            var data = {
                'action': 'ff_sc_plugin_version',
                'version': $(this).data('version'),
            };

            $.ajax({
                url: ffSC_Trans.ajaxurl,
                data: data,
                type: 'POST',

                success: function (response) {
                    if (response && response.result) {
                        if (response.refresh == 1) {
                            window.location.reload();
                        } else {
                            $('.ffst-modal.version').hide();
                        }
                    }
                }
            });
        });

        $('body').on('click', '.notice-dismiss', function() {
            $(this).parents('.ffst-modal').hide();
        });

    });

})( window.jQuery );