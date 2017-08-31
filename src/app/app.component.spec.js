import app from './app.module';

describe('app', () => {

    let controller;

    beforeEach(() => {       
        angular.mock.module(app);
        angular.mock.inject(($componentController) => {
            controller = $componentController('myApp', {});
        });
    });

    it('should get controller', () => {
        expect(controller).toBeTruthy();
    });

});