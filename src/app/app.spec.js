import app from './app';

describe("app:", () => {

    describe("App Controller:", () => {

        let controller;

        beforeEach(() => {       
            angular.mock.module(app);
            angular.mock.inject(($controller) => {
                controller = $controller('AppCtrl', {});
            });
        });

        it("Should set the title value on controller.", () => {
            expect(controller.title).toBe("Vertex");
        });

    });

});