import { GET_USERS } from "../actions/index";

const initialState = {
  content: {},
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
