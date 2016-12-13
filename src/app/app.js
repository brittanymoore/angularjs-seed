import angular from 'angular';

// modules
import appChat from './chat/chat.module';
import appHome from './home/home.module';
import appMock from './mock/mock.module';

// routing
import uiRouter from 'angular-ui-router';
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
    this.value = 3; // sanity test value (karma)
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ uiRouter, appHome, appChat, appMock ])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config( routes.config );

export default MODULE_NAME;