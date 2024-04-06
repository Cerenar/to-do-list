export function insertTask (taskList, task) {
    const taskHolder = taskList;
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const taskName = document.createElement('h4');
    const taskDesc = document.createElement('p');
    const taskPrio = document.createElement('p');
    const taskDueDate = document.createElement('p');
    const taskDelete = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.checked = task.completionStatus;
    taskName.textContent = task.name;
    taskDesc.textContent = task.desc;
    taskDueDate.textContent = task.dueDate;
    taskDueDate.value = task.dueDate;
    taskDelete.textContent = 'Delete';

    for (let i = 1; i <= 5; i++) {
        if (task.priority === i) listItem.classList.add(`prio-${i}`);
    }

    listItem.appendChild(checkbox);
    listItem.appendChild(taskName);
    listItem.appendChild(taskDesc);
    listItem.appendChild(taskPrio);
    listItem.appendChild(taskDueDate);
    listItem.appendChild(taskDelete);
    taskHolder.appendChild(listItem);
}

export function insertProject (project) {
    const projectList = document.getElementById('project-list');
    const listItem = document.createElement('li');
    const projName = document.createElement('button');

    const content = document.getElementById('content');
    const contentProjWrapper = document.createElement('div');
    const contentProjName = document.createElement('h2');
    const taskList = document.createElement('ul');
    const buttonsWrapper = document.createElement('div');
    const newTaskBtn = document.createElement('button');
    const clearTasksBtn = document.createElement('button');

    projName.textContent = project.name;
    contentProjName.textContent = project.name;
    newTaskBtn.textContent = 'Add new task';
    clearTasksBtn.textContent = 'Clear completed tasks';

    taskList.setAttribute('data-task-list', `${content.children.length}`);
    projName.setAttribute('data-proj-list', `${projectList.children.length}`);

    listItem.appendChild(projName);
    projectList.appendChild(listItem);

    buttonsWrapper.appendChild(newTaskBtn);
    buttonsWrapper.appendChild(clearTasksBtn);
    contentProjWrapper.appendChild(contentProjName);
    contentProjWrapper.appendChild(taskList);
    contentProjWrapper.appendChild(buttonsWrapper);
    content.appendChild(contentProjWrapper);
}

// export function viewChange (node) {
//     const parentNode = document.querySelectorAll(node);
//     while (parentNode. !== null) {
        
//     }
// }