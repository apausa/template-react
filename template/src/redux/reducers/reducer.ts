import actions from '../actions/types';

interface Action {
  type: string,
  data?: any
}

export default function Reducer(state = [], action: Action) {
  let variable = state;
  switch (action.type) {
    case actions.READ:
      variable = action.data;
      break;
    default:
      break;
  }
  return variable;
}
