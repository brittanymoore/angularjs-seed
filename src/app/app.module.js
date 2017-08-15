import angular from 'angular';

// app component
import AppComponent from './app.component';

// modules
import appHome from './home/home.module';
import appToDo from './todo/todo.module';
import appMock from './mock/mock.module';

// routing
import uiRouter from '@uirouter/angularjs';
import routes from './app.routes';

// styles
import './app.css';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ uiRouter, appHome, appToDo, appMock])
  .component('app', AppComponent)
  .config(routes.config);

export default MODULE_NAME;