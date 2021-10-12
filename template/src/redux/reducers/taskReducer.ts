import actions from '../actions/taskTypes';
import { Task, Action } from '../../types/interfaces';

export default function Reducer(initial: Task[] = [], action: Action) {
  let list = initial;
  const deleteTask = (task: Task) => task !== action.task;
  if (action.type === actions.CREATE_TASK) list = [...list, action.task];
  if (action.type === actions.UPDATE_TASK) list[action.index] = action.task;
  if (action.type === actions.DELETE_TASK) list = list.filter(deleteTask);
  return list;
}
