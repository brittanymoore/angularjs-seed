import ChatController from './chat.controller';
import ChatService from './chat.service';

let chat = () => {
  return {
    template: require('./chat.html'),
    controller: 'ChatController',
    controllerAs: 'vm'
  }
};

const MODULE_NAME = 'appChat';

angular.module(MODULE_NAME, [])
  .directive('chat', chat)
  .controller('ChatController', ChatController)
  .service('ChatService', ChatService);

export default MODULE_NAME;