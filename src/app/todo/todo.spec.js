import appToDo from './todo.module';
import appMock from './../mock/mock.module';

describe("UNIT: ToDo:", () => {

    beforeEach(() => {
        // mock modules
        angular.mock.module(appToDo);
        angular.mock.module(appMock);
    });

    describe("Controller:", () => {

        let controller, ToDoService, ToDoMockData, deferred, $rootScope;

        beforeEach(() => {

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

        describe("Get Tasks:", () => {

            it("Should call service to get tasks.", () => {
                controller.getTasks();
                expect(ToDoService.getTasks).toHaveBeenCalled();
            });

            it("Should set internal tasks variable based on service results.", () => {
                controller.getTasks();
                deferred.resolve(ToDoMockData.getTasks());
                $rootScope.$digest();
                expect(controller.tasks.length).toBe(ToDoMockData.tasks.length);
            });

        });

        describe("Add Task:", () => {

            it("Should call service to add task.", () => {
                controller.name = "Test thing to do";
                controller.addTask();
                expect(ToDoService.addTask).toHaveBeenCalled();
            });

        });

    });

});