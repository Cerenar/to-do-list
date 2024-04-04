import './style.css';
import * as taskModule from './task.js';
import { format } from 'date-fns';

const date = format(new Date(), 'MM/dd/yyyy');
const myTask = taskModule.createTask('Eat', 'a lot', 5, date, true);
const myOtherTask = taskModule.createTask('Sleep', 'more', 3, date, false)
const myThirdTask = taskModule.createTask('Game', 'more', 3, date, true)
const myLastTask = taskModule.createTask('Last task', 'more', 3, date, false)
const myLasTask = taskModule.createTask('Las task', 'more', 3, date, false)
const myLaTask = taskModule.createTask('La task', 'more', 3, date, true)
const myLTask = taskModule.createTask('L task', 'more', 3, date, false)
const mTask = taskModule.createTask('m task', 'more', 3, date, true)
const myLastaTask = taskModule.createTask('Lasta task', 'more', 3, date, false)

const myProject = taskModule.createProject('myProject');

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
taskModule.updateTaskCompleted(myLastTask, true);
taskModule.deleteTask(myProject, myThirdTask);
taskModule.clearCompletedTasks(myProject);

console.log(myProject);