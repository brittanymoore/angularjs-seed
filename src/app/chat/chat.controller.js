class ChatController {

    constructor(ChatService) {
        this.ChatService = ChatService;
        this.name = "";
        this.messages = [];
        this.message = "";
    }

    $onInit() {
        this.getMessages();
    }  

    getMessages() {
        this.ChatService.getMessages()
            .then(data => {
                this.messages = data;
            })
            .catch(error => {
                console.log(error);
            });
    }

    saveMessage() {
        var newMessage = {
            Name: this.name,
            Message: this.message
        }

        this.ChatService.addMessage(newMessage)
            .then(data => {
                this.getMessages();
            })
            .catch(error => {
                console.log(error);
            });

        this.name = "";
        this.message = "";
    }

}

export default ChatController