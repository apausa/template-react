import actions from './taskTypes';
// import { Task } from '../../types/interfaces';

export function createTask(task: string) {
  // Control de errores.
  return {
    type: actions.CREATE_TASK,
    task,
  };
}

export function deleteTask(task: string) {
  return {
    type: actions.DELETE_TASK,
    task,
  };
}
