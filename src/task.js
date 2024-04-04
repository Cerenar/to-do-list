export function createProject (name) {
    this.name = name;
    const tasks = [];

    return { name, tasks };
}

export function createTask (name, desc, priority, dueDate, completionStatus) {
    this.name = name;
    this.desc = desc;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = completionStatus;
    return { name, desc, priority, dueDate, completionStatus };
}

export function addTaskToProject (project, task) {
    project.tasks.push(task);
    return project;
}

export function updateTaskName (task, newName) {
    task.name = newName;
    return task;
}

export function updateTaskDesc (task, newDesc) {
    task.desc = newDesc;
    return task;
}

export function updateTaskPriority (task, newPriority) {
    task.priority = newPriority;
    return task;
}

export function updateTaskDueDate (task, newDueDate) {
    task.dueDate = newDueDate;
    return task;
}

export function updateTaskCompleted (task, newCompletionStatus) {
    task.completionStatus = newCompletionStatus;
    return task;
}

export function deleteTask (project, task) {
    for (let i = 0; i < project.tasks.length; i++) {
        if (task === project.tasks[i]) {
            project.tasks.splice(i, 1);
        }
    }
    return project;
}

export function clearCompletedTasks (project) {
    for (let i = 0; i < project.tasks.length; i++) {
        if (project.tasks[i].completionStatus) {
            project.tasks.splice(i, 1);
        }
    }
    return project;
}