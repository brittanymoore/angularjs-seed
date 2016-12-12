function ChatMockData() {

    this.messages = [
        {
            Name: "Brittany",
            Message: "This message is coming from mock $http data."
        },
        {
            Name: "Kelley",
            Message: "We can use this to test angular without SharePoint."
        }
    ];

    this.getMessages = function () {
        return this.messages;
    }

    this.addMessage = function (data) {
        var message = angular.fromJson(data);        
        this.messages.push(message);
    }

}

module.exports = ChatMockData;