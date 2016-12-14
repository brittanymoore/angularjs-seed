class TestFormController {

    constructor() {
        this.title = "Test Form";
        this.myModel = {};
        this.properties = this.getFieldProperties();
    }

    onSubmit() {
        console.log("submitted!");
    }

    getFieldProperties() {
        return [
            {
                fieldLabel: "myString:",
                fieldType: "text",
                id: 'my-string',
                key: 'myString',
                required: true
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
                }
            }
        ]
    }

}

export default TestFormController