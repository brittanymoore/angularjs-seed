class ToDoController {

    constructor(ToDoService) {
        this.title = "To-do List";
        this.ToDoService = ToDoService;
        this.name = "";
        this.tasks = [];
    }

    $onInit() {
        this.getTasks();
    }  

    getTasks() {
        this.ToDoService.getTasks()
            .then(data => {
                this.tasks = data;
            })
            .catch(error => {
                console.log(error);
            });
    }

    addTask() {

        this.ToDoService.addTask(this.name)
            .then(data => {
                let newTask = data;
                this.tasks.push(newTask);
            })
            .catch(error => {
                console.log(error);
            });

        this.name = "";
        this.message = "";
    }

}

ToDoController.$inject = ['ToDoService'];

export default ToDoController;