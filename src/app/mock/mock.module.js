import MockService from './mock.service';
import ToDoMockData from './models/todo.mock';
import 'angular-mocks/angular-mocks';

const MODULE_NAME = 'appMock';

angular.module(MODULE_NAME, [ 'ngMockE2E' ])
    .service('ToDoMockData', ToDoMockData)
    .run( MockService );

export default MODULE_NAME;