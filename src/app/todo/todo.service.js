class ChatService {

    //static $inject = ['$http'];
    constructor($http) {
        this.$http = $http;
        this.name = "";
        this.toDoUrl = "/sites/customsites/bam" + "/_api/web/lists/getByTitle('Tasks')/items";
        this.resultFilters = "?$select=Name,ID";
    }

    getTasks() {
        return this.$http({
            method: "GET",
            url: this.toDoUrl + this.resultFilters,
            headers: { "Accept": "application/json;odata=verbose" }
        }).then(function (response) {
            return response.data.d.results;
        }).catch(function () {
            console.log("fail");
        });
    }

    addTask(name) {

        var requestDigestElem = document.getElementById("__REQUESTDIGEST");
        var requestDigest = (requestDigestElem != null) ? requestDigestElem.value : "";

        return this.$http({
            method: "POST",
            url: this.toDoUrl,
            data: {
                Name: name,
                __metadata: {
                    type: "SP.Data.ChatMessagesListItem"
                }
            },
            headers: {
                "Content-Type": "application/json;odata=verbose",
                "Accept": "application/json;odata=verbose",
                "X-RequestDigest": requestDigest
            }              
        }).then(function (response) {
            return response.data.d.results;
        }).catch(function () {
            console.log("fail");
        });

    }

}

export default ChatService;
