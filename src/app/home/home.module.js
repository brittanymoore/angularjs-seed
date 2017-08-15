import HomeComponent from './home.component';

// styles
import './home.scss';

const MODULE_NAME = 'appHome';

angular.module(MODULE_NAME, [])
    .component('home', HomeComponent);

export default MODULE_NAME;
