var FormformDirective = function () {
    return {
        restrict: 'A', // only match attribute name
        replace: true,
        require: 'ngModel',
        scope: {
            properties: '=',
            form: '=',
            ngModel: '='
        },
        link: function (scope, element, attrs, ngModel) {

            if (!ngModel) return;
            scope.contentUrl = './templates/form.html';

        },
        template: '<ng-form name="vm.innerForm" ng-include="contentUrl"></ng-form>'
    }
}

export default FormformDirective;