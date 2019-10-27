// Optimally a form component should have state locally
// I'm implementing it using the reducer to demonstrate the combineReducer

import { HANDLE_CHANGE } from "../actions";

export const initialState = {
  searchString: "Sakura"
};

export function formReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        searchString: action.payload
      };
    default:
      return state;
  }
}
