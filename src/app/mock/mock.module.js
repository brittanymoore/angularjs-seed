import MockService from './mock.service';
import ChatMockData from './models/chat.mock';
import ToDoMockData from './models/todo.mock';
import 'angular-mocks/angular-mocks';

const MODULE_NAME = 'appMock';

angular.module(MODULE_NAME, [ 'ngMockE2E' ])
    .service('ChatMockData', ChatMockData)
    .service('ToDoMockData', ToDoMockData)
    .run( MockService );

export default MODULE_NAME;