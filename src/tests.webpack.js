import 'angular';
import 'angular-mocks/angular-mocks';

const context = require.context('./app', true, /\.js$/);
context.keys().forEach(context);