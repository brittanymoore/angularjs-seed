var MockService = function ($httpBackend, ToDoMockData) { 

    // mock get tasks (SharePoint REST API)
    $httpBackend.whenGET(/\/_api\/web\/lists\/getByTitle\(\'Tasks\'\)/).respond(function (method, url, data) {
        var returnData = buildRESTResponse(ToDoMockData.getTasks(data));
        return [200, returnData, {}];
    });

    // mock add tasks (SharePoint REST API)
    $httpBackend.whenPOST(/\/_api\/web\/lists\/getByTitle\(\'Tasks\'\)/).respond(function (method, url, data) {
        let dataObj = JSON.parse(data);
        var returnData = buildRESTResponse(ToDoMockData.addTask(dataObj.Name));
        return [200, returnData, {}];
    });  

        // pass internal requests through normally
    $httpBackend.whenGET(/\/app/).passThrough(); // routing

    // mimic SharePoint REST API responses
    function buildRESTResponse(data) {
        return {
            d: {
                results: data
            }
        }
    }  

}

export default MockService;