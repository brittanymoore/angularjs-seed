class AppController {
    constructor() {
        this.title = 'Vertex';
    }
}

const AppComponent = {
    template: require('./app.html'),
    controller: AppController,
    controllerAs: 'app'
};

export default AppComponent;
