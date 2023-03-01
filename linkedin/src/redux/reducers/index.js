import {
  GET_USERS,
  GET_PROFILE,
  GET_EXP,
  GET_POSTS,
  // POST_EXP
} from "../actions/index";

const initialState = {
  content: [],
  contentUsers: {},
  contentExp: [],
  posts: [],
  // postContentExp: []
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
    case GET_EXP:
      return {
        ...state,
        contentExp: [...state.content, ...action.payload],
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    // case POST_EXP:
    //   return {
    //     ...state,
    //     contentExp: [...action.payload],
    //   };
    default:
      return state;
  }
};

export default mainReducer;
