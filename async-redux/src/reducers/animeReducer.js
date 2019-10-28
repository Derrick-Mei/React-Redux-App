import { HANDLE_START, HANDLE_SUCCESS, HANDLE_ERROR } from "../actions";

export const initialState = {
  isLoading: false,
  error: false,
  data: {
    Page: {
      pageInfo:{},
      media: []
    }
  }
};

export function animeReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_START:
      return {
        isLoading: true,
        error: false,
        data: []
      };
    case HANDLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case HANDLE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
}
