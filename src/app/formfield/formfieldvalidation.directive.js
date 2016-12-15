var FormfieldValidationDirective = function () {
    return {
        restrict: 'A', // only match attribute name
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {

            if (!ngModel) return;

            for (var name in scope.properties.validators) {
                ngModel.$parsers.unshift(function (value) {
                    var isValid = scope.properties.validators[name](value);
                    ngModel.$setValidity(name, isValid);
                    return value;
                });
            }

        }
    }
}

export default FormfieldValidationDirective;