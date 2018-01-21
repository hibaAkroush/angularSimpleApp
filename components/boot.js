requirejs.config({
    paths: {
	'angular' : "../node_modules/angular/angular",
    'angular-ui-router' : "../node_modules/@uirouter/angularjs/release/angular-ui-router",
    'angular-material' : "../node_modules/angular-material/angular-material",
    'angular-animate' : "../node_modules/angular-animate/angular-animate",
    'angular-aria' : "../node_modules/angular-aria/angular-aria",
    'app' : '../scripts/app'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-material': {
            deps: ['angular-aria', 'angular-animate']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-aria': {
            deps: ['angular']
        },
        'app': {
            deps: [
                'angular', 'angular-ui-router', 'angular-material', 'angular-animate','angular-aria'
            ]
        }
    }
});

requirejs(["angular", "app"], function (angular) {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['myApp']);
    })
});

