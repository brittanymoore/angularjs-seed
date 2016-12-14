import appToDo from './todo.module';
import appMock from './../mock/mock.module';

describe("UNIT: ToDo:", function () {

    beforeEach(function () {
        // mock modules
        angular.mock.module(appToDo);
        angular.mock.module(appMock);
    });

    describe("Controller:", function () {

        let controller, ToDoService, ToDoMockData, deferred, $rootScope;

        beforeEach(function () {

            // inject dependencies
            angular.mock.inject(($controller, _ToDoService_, _ToDoMockData_, $q, _$rootScope_) => {
                
                ToDoService = _ToDoService_;
                ToDoMockData = _ToDoMockData_;
                $rootScope = _$rootScope_;

                // spy on service functions and return promises
                deferred = $q.defer();
                spyOn(ToDoService, "getTasks").and.returnValue(deferred.promise);
                spyOn(ToDoService, "addTask").and.returnValue(deferred.promise);

                controller = $controller('ToDoController', {
                    ToDoService: ToDoService
                });
            }); 

        });

        it("Sanity Check", function () {
            expect(0).toBe(0);
        });

        it("Get Tasks Call Service", function () {
            controller.getTasks();
            expect(ToDoService.getTasks).toHaveBeenCalled();
        });

        it("Get Tasks Handle Data", function () {
            controller.getTasks();
            deferred.resolve(ToDoMockData.getTasks());
            $rootScope.$digest();
            expect(controller.tasks.length).toBe(ToDoMockData.tasks.length);
        });

        it("Add Message Call Service", function () {
            controller.name = "Test thing to do";
            controller.addTask();
            expect(ToDoService.addTask).toHaveBeenCalled();
        });

    });

});