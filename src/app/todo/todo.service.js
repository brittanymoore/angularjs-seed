class ChatService {

    constructor($http) {
        this.$http = $http;
        this.name = '';
        this.toDoUrl = '/sites/customsites/bam' + '/_api/web/lists/getByTitle(\'Tasks\')/items';
        this.resultFilters = '?$select=Name,ID';
    }

    getTasks() {
        return this.$http({
            method: 'GET',
            url: this.toDoUrl + this.resultFilters,
            headers: { 'Accept': 'application/json;odata=verbose' }
        }).then((response) => {
            return response.data.d.results;
        });
    }

    addTask(name) {

        const requestDigestElem = window.document.getElementById('__REQUESTDIGEST');
        const requestDigest = (requestDigestElem !== null) ? requestDigestElem.value : '';

        return this.$http({
            method: 'POST',
            url: this.toDoUrl,
            data: {
                Name: name,
                __metadata: {
                    type: 'SP.Data.ChatMessagesListItem'
                }
            },
            headers: {
                'Content-Type': 'application/json;odata=verbose',
                'Accept': 'application/json;odata=verbose',
                'X-RequestDigest': requestDigest
            }
        }).then((response) => {
            return response.data.d.results;
        });

    }

}

ChatService.$inject = [ '$http' ];

export default ChatService;
