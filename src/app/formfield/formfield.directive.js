var FormfieldDirective = function (FormfieldService) {
    return {
        restrict: 'E', // only match attribute name
        replace: true,
        require: 'ngModel',
        scope: {
            properties: '=',
            form: '=',
            ngModel: '=' // required for scope.$watch
        },
        link: function (scope, element, attrs, ngModel) {

            if (!ngModel) return;

            // use the correct template based on field type
            if (scope.properties.fieldType) {
                var type = scope.properties.fieldType || 'text';
                scope.contentUrl = './templates/formfield-' + type + '.html';
                scope.messageUrl = "./templates/messages.html"; // default messages location
            } else { 
                FormfieldService.handleError("Missing required 'fieldType' value in field properties.");
             }

            // link up with the model
            scope.onChange = function () {
                ngModel.$setViewValue(scope.model);
            };
            ngModel.$render = function () {
                scope.model = ngModel.$modelValue;
            };

            scope.$watch('ngModel', function(newVal, oldVal) {
                for (var property in scope.properties.expressionProperties) {
                    scope.properties[property] = scope.properties.expressionProperties[property](ngModel.$modelValue, ngModel.$viewValue, scope);
                }
            }, true);

        },
        template: '<div class="form-control" ng-include="contentUrl"></div>'
    }
}

export default FormfieldDirective;