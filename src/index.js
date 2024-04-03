import './style.css';
import * as taskModule from './task.js';
import { format } from 'date-fns';

const date = format(new Date(), 'MM/dd/yyyy');
console.table(taskModule.createTask('Eat', 'a lot', 5, date));