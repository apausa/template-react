import actions from '../actions/types';

interface Action {
  type: string,
  data?: any
}

export default function Reducer(state = [], action: Action) {
  const variable = state;
  switch (action.type) {
    case actions.CREATE:
      break;
    case actions.READ:
      break;
    case actions.UPDATE:
      break;
    case actions.DELETE:
      break;
    default:
      break;
  }
  return variable;
}
