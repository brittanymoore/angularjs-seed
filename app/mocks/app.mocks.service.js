angular.module("app.mocks").run(function ($httpBackend, ChatMockData) {

    // This file uses $httpBackend to intercept $http calls from service files and return mock data.

    // mock get messages (SharePoint REST API)
    $httpBackend.whenGET(/\/_api\/web\/lists\/getByTitle\(\'ChatMessages\'\)/).respond(function (method, url, data) {
        var returnData = buildRESTResponse(ChatMockData.getMessages(data));
        return [200, returnData, {}];
    });

    // mock add messages (SharePoint REST API)
    $httpBackend.whenPOST(/\/_api\/web\/lists\/getByTitle\(\'ChatMessages\'\)/).respond(function (method, url, data) {
        var returnData = buildRESTResponse(ChatMockData.addMessage(data));
        return [200, returnData, {}];
    });

    // pass internal requests through normally
    $httpBackend.whenGET(/\/app\/components/).passThrough(); // routing
    $httpBackend.whenGET(/\/app\/shared/).passThrough(); // modules

    // mimic SharePoint REST API responses
    function buildRESTResponse(data) {
        return {
            d: {
                results: data
            }
        }
    }

});
