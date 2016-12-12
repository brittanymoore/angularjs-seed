ChatService.$inject = ["$http"];
function ChatService($http) {

    // service
    var service = {
        getMessages: getMessages,
        addMessage: addMessage
    }

    return service;

    ////////////////////////////////

    function getMessages() {
        return $http({
            method: "GET",
            url: "/sites/customsites/bam" + "/_api/web/lists/getByTitle('ChatMessages')/items?$select=Name,Message",
            headers: { "Accept": "application/json;odata=verbose" }
        }).then(function (response) {
            return response.data.d.results;
        });
    }

    function addMessage(message) {

        var requestDigestElem = document.getElementById("__REQUESTDIGEST");
        var requestDigest = (requestDigestElem != null) ? requestDigestElem.value : "";

        return $http({
            method: "POST",
            url: "/sites/customsites/bam" + "/_api/web/lists/getByTitle('ChatMessages')/items",
            data: {
                Name: message.Name,
                Message: message.Message,
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
        });

    }

}

module.exports = ChatService;