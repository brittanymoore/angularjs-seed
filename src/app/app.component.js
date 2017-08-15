class AppController {
    constructor() {
        this.title = 'Vertex';
    }
}

const AppComponent = {
    template: require('./app.component.html'),
    controller: AppController,
    controllerAs: 'app'
};

export default AppComponent;
