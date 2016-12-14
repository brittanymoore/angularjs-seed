import FormfieldDirective from './formfield.directive.js';

// styles
import './formfield.css';

const MODULE_NAME = 'formfield';

angular.module(MODULE_NAME, [])
  .directive('formField', FormfieldDirective)
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('./templates/messages.html', require('./templates/messages.html'));
    $templateCache.put('./templates/formfield-text.html', require('./templates/formfield-text.html'));
  }]);

export default MODULE_NAME;