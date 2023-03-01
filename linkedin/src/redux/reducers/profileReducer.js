import { GET_PROFILE } from "../actions/index";

const initialState = {
  content: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        content: [...state.content, ...action.payload],
      };
    default:
      return state;
  }
};

export default profileReducer;
