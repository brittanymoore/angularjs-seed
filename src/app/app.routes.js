import homeTemplate from './home/home.html';
import chatTemplate from './chat/chat.html';

var routes = {
    config: function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: '/',
                template: homeTemplate,
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('chat', {
                url: '/chat',
                template: chatTemplate,
                controller: 'ChatController',
                controllerAs: 'vm'
            });
    },
    routeList: [
         {
            name: "home",
            displayName: "Home"
         },
         {
             name: "chat",
             displayName: "Chat"
         }
    ]
};

export default routes;