import { GET_PROFILE } from "../actions/index";

const initialState = {
  contentUsers: {},
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        contentUsers: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
