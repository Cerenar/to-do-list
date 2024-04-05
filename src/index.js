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
const projectTitle = document.getElementById('project-name');
const date = format(new Date(), 'MM/dd/yyyy');
const myLastTask = taskModule.createTask('Last task', 'more', 3, date, false)
const myLTask = taskModule.createTask('L task', 'more', 3, date, false)
const mTask = taskModule.createTask('m task', 'very long and complicated task that is very unlikely to be input by anyone but i need to check anyway smile', 3, date, true)

const myProject = taskModule.createProject('myProject');
projectManager.push(myProject);
console.log(projectManager);
const addTaskDialog = document.getElementById('add-task-dialog');
const addTaskConfirmBtn = document.getElementById('task-confirm-btn');
const newProjectBtn = document.getElementById('new-project-btn');
const addProjectDialog = document.getElementById('add-project-dialog');
const addProjectConfirmBtn = document.getElementById('project-confirm-btn');

addTaskConfirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let temp = taskModule.createTask(taskTitle.value, taskDesc.value, parseInt(taskPrio.value), taskDueDate.value, taskCompletionStatus.checked);
    taskModule.addTaskToProject(myProject, temp);
    domModule.insertTask(temp);
    console.log(e.target.value);
    addTaskDialog.close();
});

newProjectBtn.addEventListener('click', () => {
    addProjectDialog.showModal();
});

addProjectConfirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let temp = taskModule.createProject(projectTitle.value);
    projectManager.push(temp);
    domModule.insertProject(temp);
    console.log(projectManager);
    addProjectDialog.close();
});


taskModule.addTaskToProject(myProject, myLastTask);
taskModule.addTaskToProject(myProject, myLTask);
taskModule.addTaskToProject(myProject, mTask);
taskModule.updateTaskCompletionStatus(myLastTask, true);

domModule.insertTask(mTask);
domModule.insertTask(myLastTask);
domModule.insertTask(myLTask);
domModule.insertProject(myProject);

console.log(myProject);