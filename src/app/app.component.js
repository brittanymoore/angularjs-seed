class AppController {
    constructor() {
        this.title = "Vertex";
    }
}

let AppComponent = {
    template: require('./app.html'),
    controller: AppController,
    controllerAs: 'app'
};

export default AppComponent;