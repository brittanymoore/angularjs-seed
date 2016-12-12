ChatController.$inject = ["ChatService"];
function ChatController(ChatService) {

    var vm = this;

    // properties
    vm.name = "";
    vm.messages = [];
    vm.message = "";

    vm.$onInit = onInit;

    // component functions
    vm.getMessages = getMessages;
    vm.saveMessage = saveMessage;

    vm.$onInit();

    ///////////////////////////////////////////////////

    function onInit() {
        vm.getMessages();
    }

    function getMessages() {
        ChatService.getMessages().then(function (data) {
            vm.messages = data;
        });
    }

    // Save a new message and add it to the chat feed.
    function saveMessage() {

        var newMessage = {
            Name: vm.name,
            Message: vm.message
        }

        ChatService.addMessage(newMessage).then(function (data) {
            getMessages();
        });

        vm.name = "";
        vm.message = "";

    }

}

module.exports = ChatController;