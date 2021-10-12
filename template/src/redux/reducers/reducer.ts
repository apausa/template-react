import actions from '../actions/types';
import { Task, Action } from '../../types/interfaces';

export default function Reducer(initial: Task[] = [], action: Action) {
  let list = initial;
  if (action.type === actions.CREATE) list = [...list, action.data];
  return list;
}
