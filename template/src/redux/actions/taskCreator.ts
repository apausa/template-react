import actions from './taskTypes';
import { Task } from '../../types/interfaces';

export function createTask(task: Task) {
  return (dispatch: any) => {
    dispatch({
      type: actions.CREATE_TASK,
      task,
    });
  };
}

export function deleteTask(task: Task) {
  return (dispatch: any) => {
    dispatch({
      type: actions.DELETE_TASK,
      task,
    });
  };
}
