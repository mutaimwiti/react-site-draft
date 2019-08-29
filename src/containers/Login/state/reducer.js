import * as types from "./type";

const initialState = {};

const testReducer = (state = initialState, action = {}) => {
  switch (action.types) {
    case types.TEST_THIS_ACTION:
      return { ...state };
    default:
      return state;
  }
};

export default testReducer;
