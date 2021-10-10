import axios from 'axios';
import actions from './types';

export default function Creator() {
  return async (dispatch: any) => {
    const response = await axios('url');
    dispatch({
      type: actions.READ,
      action: response,
    });
  };
}
