import HomeController from './home.controller';

let HomeComponent = {
    template: require('./home.html'),
    controller: HomeController,
    controllerAs: 'vm',
    bindings: { }
}

export default HomeComponent;