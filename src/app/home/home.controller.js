HomeController.$inject = [];
function HomeController() {

    var vm = this;

    vm.routes = [
        {
            name: "home",
            displayName: "Home"
        },
        {
            name: "chat",
            displayName: "Chat"
        }
    ]

}

module.exports = HomeController;