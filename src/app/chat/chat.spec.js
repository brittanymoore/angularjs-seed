import appChat from './chat.module';
import appMock from './../mock/mock.module';

describe("UNIT: Chat:", function () {

    beforeEach(function () {
        // mock modules
        angular.mock.module(appChat);
        angular.mock.module(appMock);
    });

    describe("Controller:", function () {

        let controller, ChatService, ChatMockData, deferred, $rootScope;

        beforeEach(function () {

            // inject dependencies
            angular.mock.inject(($controller, _ChatService_, _ChatMockData_, $q, _$rootScope_) => {
                
                ChatService = _ChatService_;
                ChatMockData = _ChatMockData_;
                $rootScope = _$rootScope_;

                // spy on service functions and return promises
                deferred = $q.defer();
                spyOn(ChatService, "getMessages").and.returnValue(deferred.promise);
                spyOn(ChatService, "addMessage").and.returnValue(deferred.promise);

                controller = $controller('ChatController', {
                    ChatService: ChatService
                });
            }); 

        });

        it("Sanity Check", function () {
            expect(0).toBe(0);
        });

        it("Get Messages Call Service", function () {
            controller.getMessages();
            expect(ChatService.getMessages).toHaveBeenCalled();
        });

        it("Get Messages Handle Data", function () {
            controller.getMessages();
            deferred.resolve(ChatMockData.getMessages());
            $rootScope.$digest();
            expect(controller.messages.length).toBe(ChatMockData.messages.length);
        });

        it("Add Message Call Service", function () {
            controller.Name = "Brittany";
            controller.Message = "This is a test message";
            controller.saveMessage();
            expect(ChatService.addMessage).toHaveBeenCalled();
        });

    });

});