export const HANDLE_SUBMIT = "HANDLE_SUBMIT";
export const HANDLE_START = "HANDLE_START";
export const HANDLE_SUCCESS = "HANDLE_SUCCESS";
export const HANDLE_ERROR = "HANDLE_START";

export function handleSubmit(input) {
  return dispatch => {
    dispatch({ type: HANDLE_START });
  };
}
