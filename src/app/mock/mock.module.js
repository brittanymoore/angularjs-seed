import MockService from './mock.service';
import ChatMockData from './models/chat.mock';
import 'angular-mocks/angular-mocks';

const MODULE_NAME = 'appMock';

angular.module(MODULE_NAME, [ 'ngMockE2E' ])
    .service('ChatMockData', ChatMockData)
    .run( MockService );

export default MODULE_NAME;