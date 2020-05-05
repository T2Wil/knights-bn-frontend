import { HANDLE_ERROR, CLEAR_ERROR_MSG } from '../actions/actionTypes';

const initialState = {
  error: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case CLEAR_ERROR_MSG: {
      return initialState;
    }
    default: return state;
  }
};
