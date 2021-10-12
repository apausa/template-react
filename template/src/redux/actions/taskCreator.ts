import actions from './taskTypes';
import { Task } from '../../types/interfaces';

export function createTask(task: Task) {
  return {
    type: actions.CREATE_TASK,
    task,
  };
}

export function updateTask(task: Task, index: number) {
  return {
    type: actions.UPDATE_TASK,
    task,
    index,
  };
}

export function deleteTask(task: Task) {
  return {
    type: actions.DELETE_TASK,
    task,
  };
}
