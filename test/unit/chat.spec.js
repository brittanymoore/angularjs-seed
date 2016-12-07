/// <reference path="../_reference.js" />

/// <reference path="../../app/components/chat/chat.module.js" />
/// <reference path="../../app/components/chat/chat.controller.js" />
/// <reference path="../../app/components/chat/chat.service.js" />

/// <reference path="../../app/mocks/models/chat.mock.data.js" />

// This contains l0 unit tests for the Chat Controller (app/components/chat)

describe("UNIT: Chat:", function () {

    beforeEach(function () {
        angular.mock.module("app.chat");
        angular.mock.module("app.mocks");     
    });

    describe("Controller:", function () {
        var $controller, ChatService, ChatMockData, $q, deferred, $rootScope;
        beforeEach(inject(function (_$controller_, _ChatService_, _ChatMockData_, _$q_, _$rootScope_) {

            // injected services
            $controller = _$controller_;
            ChatService = _ChatService_;
            ChatMockData = _ChatMockData_;
            $q = _$q_;
            $rootScope = _$rootScope_;

            // spy on service functions and return promises
            deferred = $q.defer();
            spyOn(ChatService, "getMessages").and.returnValue(deferred.promise);
            spyOn(ChatService, "addMessage").and.returnValue(deferred.promise);

            // instantiate controller
            controller = $controller("ChatController", {
                ChatService: ChatService
            });

        }));

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