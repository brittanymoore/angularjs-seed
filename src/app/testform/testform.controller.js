class TestFormController {

    constructor($scope) {
        this.scope = $scope;
        this.title = "Form Field Demo";
        this.myModel = {};
        this.properties = this.getFieldProperties();
        this.properties2 = this.getFieldPropertiesTwo();
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
                reuquired: true,
                description: 'This field becomes disabled when myBoolean is checked.',
                expressionProperties: {
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
                description: 'This field must contain a valid URL',
                required: true,
                validators: {
                    validUrl: function(viewValue, modelValue) {
                        var value = modelValue || viewValue;
                        return /^((http[s]?|ftp):\/\/(www\.)?)+((?!www\.)[^:\/\s]+[.][^:\/\s]+)((\/\w+)*\/)*([\w\-\.]+[^#?\s]+)*(.*)?(#[\w\-]+)?$/i.test(value);
                    }
                }
            }
        ]
    }

    getFieldPropertiesTwo() {
        return [
            {
                fieldLabel: "myBoolean",
                fieldType: "checkbox",
                id: 'my-boolean',
                key: 'myBoolean',
                description: 'This is a required checkbox',
                required: true
            }
        ];
    }

}

export default TestFormController