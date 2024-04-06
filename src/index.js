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
const content = document.getElementById('content');
const projectList = document.getElementById('project-list')
const addTaskDialog = document.getElementById('add-task-dialog');
const addTaskConfirmBtn = document.getElementById('task-confirm-btn');
const newProjectBtn = document.getElementById('new-project-btn');
const addProjectDialog = document.getElementById('add-project-dialog');
const addProjectConfirmBtn = document.getElementById('project-confirm-btn');

let projectSwitch = 0;

addTaskConfirmBtn.addEventListener('click', (e) => {
    let taskList = content.children[projectSwitch].children[1];
    
    e.preventDefault();
    let temp = taskModule.createTask(taskTitle.value, taskDesc.value, parseInt(taskPrio.value), taskDueDate.value, taskCompletionStatus.checked);
    taskModule.addTaskToProject(projectManager[projectSwitch], temp);
    domModule.insertTask(taskList, temp);
    console.log(projectSwitch);
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
    for (let i = 0; i < content.childElementCount; i++) {
        content.children[i].lastChild.lastChild.previousSibling.addEventListener('click', () => {
            addTaskDialog.showModal();
            projectSwitch = i;
        });
    };
});


taskModule.addTaskToProject(myProject, myLastTask);
taskModule.addTaskToProject(myProject, myLTask);
taskModule.addTaskToProject(myProject, mTask);
taskModule.updateTaskCompletionStatus(myLastTask, true);

domModule.insertProject(myProject);
domModule.insertTask(content.children[projectSwitch].children[1], mTask);
domModule.insertTask(content.children[projectSwitch].children[1], myLastTask);
domModule.insertTask(content.children[projectSwitch].children[1], myLTask);

console.log(myProject);

for (let i = 0; i < content.childElementCount; i++) {
    content.children[i].lastChild.lastChild.previousSibling.addEventListener('click', () => {
        addTaskDialog.showModal();
        projectSwitch = i;
    });
};