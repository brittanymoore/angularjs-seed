import angular from 'angular';

// modules
import appHome from './home/home.module';
import appToDo from './todo/todo.module';
import appMock from './mock/mock.module';

// routing
import uiRouter from '@uirouter/angularjs';
import routes from './app.routes';

// styles
import './app.css';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor() {
        this.title = "Vertex";
        this.routes = routes.routeList;
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ uiRouter, appHome, appToDo, appMock])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl)
    .config( routes.config );

export default MODULE_NAME;