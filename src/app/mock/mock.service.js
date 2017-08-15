const MockService = ($httpBackend, ToDoMockData) => {

    // mimic SharePoint REST API responses
    function buildRESTResponse(data) {
        return {
            d: {
                results: data
            }
        };
    }

    // mock get tasks (SharePoint REST API)
    $httpBackend.whenGET(/\/_api\/web\/lists\/getByTitle\('Tasks'\)/).respond((method, url, data) => {
        const returnData = buildRESTResponse(ToDoMockData.getTasks(data));
        return [ 200, returnData, {} ];
    });

    // mock add tasks (SharePoint REST API)
    $httpBackend.whenPOST(/\/_api\/web\/lists\/getByTitle\('Tasks'\)/).respond((method, url, data) => {
        const dataObj = JSON.parse(data);
        const returnData = buildRESTResponse(ToDoMockData.addTask(dataObj.Name));
        return [ 200, returnData, {} ];
    });

    // pass internal requests through normally
    $httpBackend.whenGET(/\/app/).passThrough(); // routing

};

MockService.$inject = [ '$httpBackend', 'ToDoMockData' ];

export default MockService;
