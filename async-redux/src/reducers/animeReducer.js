import { HANDLE_SUBMIT } from "../actions";

export const initialState = {
  start: false,
  success: false,
  error: false
};

export function animeReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_SUBMIT:
      return state;
    default:
      return state;
  }
}
