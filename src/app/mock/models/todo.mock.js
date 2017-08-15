class ToDoMockData {

    constructor() {
        this.tasks = [
            { ID: 1, Name: 'thing I need to do' },
            { ID: 2, Name: 'another thing I need to do' }
        ];
    }

    getTasks() {
        return this.tasks;
    }

    addTask(name) {
        const id = this.tasks.length + 1;
        const newTask = { ID: id, Name: name };
        this.tasks.push(newTask);
        return newTask;
    }

}

export default ToDoMockData;
