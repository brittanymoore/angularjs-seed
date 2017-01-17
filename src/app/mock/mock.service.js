var MockService = ($httpBackend, ToDoMockData) => { 

    // mock get tasks (SharePoint REST API)
    $httpBackend.whenGET(/\/_api\/web\/lists\/getByTitle\(\'Tasks\'\)/).respond((method, url, data) => {
        let returnData = buildRESTResponse(ToDoMockData.getTasks(data));
        return [200, returnData, {}];
    });

    // mock add tasks (SharePoint REST API)
    $httpBackend.whenPOST(/\/_api\/web\/lists\/getByTitle\(\'Tasks\'\)/).respond((method, url, data) => {
        let dataObj = JSON.parse(data);
        let returnData = buildRESTResponse(ToDoMockData.addTask(dataObj.Name));
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

MockService.$inject = ['$httpBackend', 'ToDoMockData'];

export default MockService;