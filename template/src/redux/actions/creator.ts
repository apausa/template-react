import actions from './types';
import { Task } from '../../types/interfaces';

export function createTask(task: Task) {
  return {
    type: actions.CREATE,
    task,
  };
}

export function updateTask(task: Task) {
  return {
    type: actions.UPDATE,
    task,
  };
}

export function deleteTask(task: Task) {
  return {
    type: actions.DELETE,
    task,
  };
}

/*
export default function Creator() {
  return async (dispatch: any) => {
    const { data } = await axios('url');
    dispatch({
      type: actions.CREATE,
      data,
    });
  };
}
*/
