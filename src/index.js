import './style.css';
import * as taskModule from './task.js';
import * as domModule from './dom-manipulation.js';
import { format } from 'date-fns';

const projectManager = [];
const taskTitle = document.getElementById('name');
const taskDesc = document.getElementById('desc');
const taskPrio = document.getElementById('priority');
const taskDueDate = document.getElementById('due-date');
const taskCompletionStatus = document.getElementById('completion');
const date = format(new Date(), 'yyyy-MM-dd');
const myTask = taskModule.createTask('Eat', 'a lot', 5, date, true);
const myOtherTask = taskModule.createTask('Sleep', 'more', 3, date, false)
const myThirdTask = taskModule.createTask('Game', 'more', 3, date, true)
const myLastTask = taskModule.createTask('Last task', 'more', 3, date, false)
const myLasTask = taskModule.createTask('Las task', 'more', 3, date, false)
const myLaTask = taskModule.createTask('La task', 'more', 3, date, true)
const myLTask = taskModule.createTask('L task', 'more', 3, date, false)
const mTask = taskModule.createTask('m task', 'very long and complicated task that is very unlikely to be input by anyone but i need to check anyway smile', 3, date, true)
const myLastaTask = taskModule.createTask('Lasta task', 'more', 3, date, false)

const myProject = taskModule.createProject('myProject');
projectManager.push(myProject);
console.log(projectManager);
const newTaskBtn = document.getElementById('newTaskBtn');
const addTaskDialog = document.getElementById('addTaskDialog');
const addTaskConfirmBtn = document.getElementById('taskConfirmBtn');
const addTaskCancelBtn = document.getElementById('taskCancelBtn');

newTaskBtn.addEventListener('click', () => {
    // show form dialog
    addTaskDialog.showModal();
});

addTaskConfirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let temp = taskModule.createTask(taskTitle.value, taskDesc.value, parseInt(taskPrio.value), taskDueDate.value, taskCompletionStatus.checked);
    taskModule.addTaskToProject(myProject, temp);
    domModule.insertTask(temp);
    addTaskDialog.close();
})

taskModule.addTaskToProject(myProject, myTask);
taskModule.addTaskToProject(myProject, myOtherTask);
taskModule.addTaskToProject(myProject, myThirdTask);
taskModule.addTaskToProject(myProject, myLastTask);
taskModule.addTaskToProject(myProject, myLasTask);
taskModule.addTaskToProject(myProject, myLaTask);
taskModule.addTaskToProject(myProject, myLTask);
taskModule.addTaskToProject(myProject, mTask);
taskModule.addTaskToProject(myProject, myLastaTask);
taskModule.updateTaskPriority(myTask, 4);
taskModule.updateTaskCompletionStatus(myLastTask, true);
taskModule.deleteTask(myProject, myThirdTask);
taskModule.clearCompletedTasks(myProject);

domModule.insertTask(mTask);
domModule.insertTask(myLastTask);
domModule.insertTask(myLTask);

console.log(myProject);