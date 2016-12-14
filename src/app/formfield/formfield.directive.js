var FormfieldDirective = function () {
    return {
        restrict: 'E', // only match attribute name
        replace: true,
        require: 'ngModel',
        scope: {
            properties: '=',
            form: '='
        },
        link: function (scope, element, attrs, ngModel) {

            if (!ngModel) return;

            // use the correct template based on field type
            var type = scope.properties.fieldType || 'text';
            scope.contentUrl = './templates/formfield-' + type + '.html';
            scope.messageUrl = "./templates/messages.html"; // default messages location

            // link up with the model
            scope.onChange = function () {
                ngModel.$setViewValue(scope.value);
            };
            ngModel.$render = function () {
                scope.value = ngModel.$modelValue;
            };

        },
        template: '<div class="form-control" ng-include="contentUrl"></div>'
    }
}

export default FormfieldDirective;