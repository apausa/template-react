import actions from '../actions/taskTypes';
import { Task, Action } from '../../types/interfaces';

export default function Reducer(initial: Task[] = [], action: Action) {
  let list = initial;
  const deleteTask = (task: Task) => task !== action.task;
  if (action.type === actions.CREATE_TASK) list = [action.task, ...list];
  if (action.type === actions.DELETE_TASK) list = list.filter(deleteTask);
  if (action.type === actions.RENDER_TASK) list = action.list;
  return list;
}
