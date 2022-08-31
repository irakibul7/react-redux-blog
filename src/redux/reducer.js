import { FILTERBYAUTHOR, FILTERBYTITLE, FILTERBYTAG } from "./actionTypes";

import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERBYTITLE:
      return {
        ...state,
        filter: {
          ...state.filter,
          title: action.payload,
        },
      };
    case FILTERBYTAG:
      return {
        ...state,
        filter: {
          ...state.filter,
          tag: action.payload,
        },
      };
    case FILTERBYAUTHOR:
      return {
        ...state,
        filter: {
          ...state.filter,
          author: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
