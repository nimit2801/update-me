class Task {
  /**
   * Represents a task.
   * @constructor
   * @param {string} name - The name of the task.
   * @param {string} description - The description of the task.
   * @param {Date} trigger - The time to trigger the task.
   * @returns {Task} - The task object.
   */
  constructor(name, description, trigger) {
    this.name = name;
    this.description = description;
    this.time = new Date();
    this.triggerTime = trigger;
    this.timeOut = null;
    console.log(this.time.getTime());
    this.runner();
  }
  runner() {
    // this will run in 5 sec
    const timeToExec = new Date(Date.now() + 1000 * 5);
    const timeToRun = timeToExec.getTime() - Date.now();

    this.timeOut = setTimeout(() => {
      console.log(timeToRun);
    }, timeToRun);
  }
}

class Tasks {
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(task) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
  getTasks() {
    return this.tasks;
  }
}
