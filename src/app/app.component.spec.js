import app from './app.module';

describe("app:", () => {

    describe("App Controller:", () => {

        let controller;

        beforeEach(() => {       
            angular.mock.module(app);
            angular.mock.inject(($componentController) => {
                controller = $componentController('myApp', {});
            });
        });

        it("Should set the title value on controller.", () => {
            expect(controller).toBeTruthy();
        });

    });

});