class ChatMockData {

    //static $inject = ['$http'];
    constructor() {
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
    }

    getMessages() {
        return this.messages;
    }

    addMessage(data) {
        var message = angular.fromJson(data);        
        this.messages.push(message);
    }

}

export default ChatMockData;