//= wrapped

angular.module('grangular.grails')
    .directive("fieldContainer", fieldContainer)
    .directive("displayField", displayField)
    .directive("dateField", dateField);

function fieldContainer() {
    return {
        replace: true,
        transclude: true,
        scope: {
            type: '@',
            label: '@',
            invalid : '='
        },
        link: function($scope, $element) {
            var field = ($element.find('input').length > 0) ? $element.find('input') : $element.find('select');
            field.addClass('form-control');
        },
        templateUrl: '/grangular/grails/fields/field-container.html'
    }
}

function displayField() {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            label: '@',
            value: '='
        },
        templateUrl: '/grangular/grails/fields/display-field.html'
    }
}

function dateField() {
    return {
        replace: true,
        link: function($scope) {

            $scope.open = function() {
                $scope.opened = true;
            };

        },
        templateUrl: '/grangular/grails/fields/date-field.html'
    }
}


