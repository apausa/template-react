import actions from '../actions/types';

interface Task {
  description: string,
  status: boolean,
  date: Date;
}

interface Action {
  type: string,
  data: Task;
}

export default function Reducer(initial: Task[] = [], action: Action) {
  let list = initial;
  switch (action.type) {
    case actions.CREATE:
      list = [...list, action.data];
      break;
    default:
      break;
  }
  return list;
}
