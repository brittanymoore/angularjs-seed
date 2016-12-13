import HomeController from './home.controller';

// styles
import './home.css';

let home = () => {
  return {
    template: require('./home.html'),
    controller: 'HomeController',
    controllerAs: 'vm'
  }
};

const MODULE_NAME = 'appHome';

angular.module(MODULE_NAME, [])
  .directive('home', home)
  .controller('HomeController', HomeController);

export default MODULE_NAME;