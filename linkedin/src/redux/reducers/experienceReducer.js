import { GET_EXP } from "../actions/index";

const initialState = {
  contentExp: [],
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXP:
      return {
        ...state,
        contentExp: [...state.contentExp, ...action.payload],
      };
    default:
      return state;
  }
};

export default experienceReducer;
