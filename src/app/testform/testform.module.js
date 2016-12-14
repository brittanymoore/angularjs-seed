import TestFormController from './testform.controller';

let testform = () => {
  return {
    template: require('./testform.html'),
    controller: 'TestFormController',
    controllerAs: 'vm'
  }
};

const MODULE_NAME = 'appTestForm';

angular.module(MODULE_NAME, [])
  .directive('testform', testform)
  .controller('TestFormController', TestFormController);

export default MODULE_NAME;