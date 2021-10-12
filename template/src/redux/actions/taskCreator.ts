import actions from './taskTypes';
// import { Task } from '../../types/interfaces';

export function createTask(task: string) {
  // Control de errores.
  return {
    type: actions.CREATE_TASK,
    task,
  };
}

export function updateTask(task: string, index: number) {
  // Control de errores.
  return {
    type: actions.UPDATE_TASK,
    task,
    index,
  };
}

export function deleteTask(task: string) {
  return {
    type: actions.DELETE_TASK,
    task,
  };
}
