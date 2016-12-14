class ToDoMockData {

    //static $inject = ['$http'];
    constructor() {
        this.tasks = [
            { ID: 1, Name: "thing I need to do" },
            { ID: 2, Name: "another thing I need to do" }
        ];
    }

    getTasks() {
        return this.tasks;
    }

    addTask(name) {
        let id = this.tasks.length + 1;
        let newTask = { ID: id, Name: name }
        this.tasks.push(newTask);        
        return newTask;
    }

}

export default ToDoMockData;