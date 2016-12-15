class TestFormController {

    constructor($scope) {
        this.scope = $scope;
        this.title = "Form Field Demo";
        this.myModel = {};
        this.properties = this.getFieldProperties();
    }

    onSubmit() {
        console.log("submitted!");
    }

    getFieldProperties() {
        return [
            {
                fieldLabel: "myString",
                fieldType: "text",
                id: 'my-string',
                key: 'myString',
                required: true,
                expressionProperties: {
                    'disabled': function(viewValue, modelValue, scope) {
                        return scope.model.myBoolean;
                    },
                    'required': function(viewValue, modelValue, scope) {
                        return !scope.model.myBoolean;
                    }
                }
            },
            {
                fieldLabel: "myUrl",
                fieldType: "text",
                id: 'my-url',
                key: 'myUrl',
                required: true,
                validators: {
                    validUrl: function(viewValue, modelValue) {
                        var value = modelValue || viewValue;
                        return /^((http[s]?|ftp):\/\/(www\.)?)+((?!www\.)[^:\/\s]+[.][^:\/\s]+)((\/\w+)*\/)*([\w\-\.]+[^#?\s]+)*(.*)?(#[\w\-]+)?$/i.test(value);
                    }
                },
                expressionProperties: {
                    'disabled': function(viewValue, modelValue, scope) {
                        return scope.model.myBoolean;
                    },
                    'required': function(viewValue, modelValue, scope) {
                        return !scope.model.myBoolean;
                    }
                }
            },
            {
                fieldLabel: "myBoolean",
                fieldType: "checkbox",
                id: 'my-boolean',
                key: 'myBoolean',
                required: true
            }
        ]
    }

}

export default TestFormController