import angular from 'angular';

// app component
import AppComponent from './app.component';

// routing
import uiRouter from '@uirouter/angularjs';
import routes from './app-routing.config';

// styles
import './app.component.scss';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ uiRouter ])
    .component('myApp', AppComponent)
    .config(routes.config);

export default MODULE_NAME;
