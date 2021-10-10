import axios from 'axios';
import actions from './types';

export default function Creator() {
  return async (dispatch: any) => {
    const { data } = await axios('url');
    dispatch({
      type: actions.READ,
      data,
    });
  };
}
