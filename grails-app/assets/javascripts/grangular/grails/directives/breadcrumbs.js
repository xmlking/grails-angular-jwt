//= wrapped

angular.module('grangular.grails')
    .directive('crudBreadcrumbs', crudBreadcrumbs);


function crudBreadcrumbs(defaultCrudResource) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            crudBreadcrumbs: '@'
        },
		link: function($scope) {
			$scope.resourceName = defaultCrudResource.getResourceName();
		},
        templateUrl: '/grangular/grails/crud-breadcrumbs.html'
    }
}
