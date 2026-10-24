window.DupliJs = window.DupliJs || {};

(function () {
    DupliJs.kickme = function () {
        fetch(dupli_gateway.ajaxurl, {
            method: 'POST',
            credentials: 'same-origin',
            body: new URLSearchParams({action: 'duplicator_process_worker'})
        }).catch(function (err) {
            console.error(err);
        });
    }

    DupliJs.kickme();
    window.setInterval(DupliJs.kickme, dupli_gateway.client_call_frequency);
})();
