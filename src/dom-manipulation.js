export function insertTask (task) {
    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const taskName = document.createElement('p');
    const taskDesc = document.createElement('p');
    const taskPrio = document.createElement('select');
    const taskPrioOpt1 = document.createElement('option');
    const taskPrioOpt2 = document.createElement('option');
    const taskPrioOpt3 = document.createElement('option');
    const taskPrioOpt4 = document.createElement('option');
    const taskPrioOpt5 = document.createElement('option');
    const taskDueDate = document.createElement('input');
    const taskDelete = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.checked = task.completionStatus;
    taskName.textContent = task.name;
    taskDesc.textContent = task.desc;
    taskPrioOpt1.value = 1;
    taskPrioOpt1.innerText = 1;
    taskPrioOpt2.value = 2;
    taskPrioOpt2.innerText = 2;
    taskPrioOpt3.value = 3;
    taskPrioOpt3.innerText = 3;
    taskPrioOpt4.value = 4;
    taskPrioOpt4.innerText = 4;
    taskPrioOpt5.value = 5;
    taskPrioOpt5.innerText = 5;
    switch(task.priority) {
        case 1:
            taskPrioOpt1.selected = 'selected';
            break;
        case 2:
            taskPrioOpt2.selected = 'selected';
            break;
        case 3:
            taskPrioOpt3.selected = 'selected';
            break;
        case 4:
            taskPrioOpt4.selected = 'selected';
            break;
        case 5:
            taskPrioOpt5.selected = 'selected';
            break;
        default:
            taskPrioOpt5.selected = 'selected';
    }
    taskPrio.appendChild(taskPrioOpt1);
    taskPrio.appendChild(taskPrioOpt2);
    taskPrio.appendChild(taskPrioOpt3);
    taskPrio.appendChild(taskPrioOpt4);
    taskPrio.appendChild(taskPrioOpt5);
    taskDueDate.type = 'date';
    taskDueDate.value = task.dueDate;
    taskDelete.textContent = 'Delete';


    listItem.appendChild(checkbox);
    listItem.appendChild(taskName);
    listItem.appendChild(taskDesc);
    listItem.appendChild(taskPrio);
    listItem.appendChild(taskDueDate);
    listItem.appendChild(taskDelete);
    taskList.appendChild(listItem);
}