import FormfieldService from './formfield.service';
import FormfieldDirective from './formfield.directive.js';
import FormfieldValidationDirective from './formfieldvalidation.directive.js';

// styles
import './formfield.css';

const MODULE_NAME = 'formfield';

angular.module(MODULE_NAME, [])
  .service('FormfieldService', FormfieldService)
  .directive('formField', FormfieldDirective)
  .directive('formFieldValidation', FormfieldValidationDirective)
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('./templates/messages.html', require('./templates/messages.html'));
    $templateCache.put('./templates/formfield-text.html', require('./templates/formfield-text.html'));
    $templateCache.put('./templates/formfield-checkbox.html', require('./templates/formfield-checkbox.html'));
  }]);

export default MODULE_NAME;