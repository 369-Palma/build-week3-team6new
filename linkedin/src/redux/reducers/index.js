import { GET_USERS, GET_PROFILE } from "../actions/index";

const initialState = {
  content: [],
  contentUsers: {}
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        content: [...state.content, ...action.payload],
      };
    case GET_PROFILE:
      return {
        ...state,
        contentUsers: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
