(function() {
    'use strict';

    angular
        .module('buildnote', ['checklist-model', 'angulartics', 'angulartics.google.analytics'])
        .config(function($analyticsProvider) {
        	$analyticsProvider.virtualPageviews(false);
        });
})();