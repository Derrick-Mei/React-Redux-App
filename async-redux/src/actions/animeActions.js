export const HANDLE_SUBMIT = "HANDLE_SUBMIT";
export const AXIOS_START = "AXIOS_START";
export const AXIOS_SUCCESS = "AXIOS_SUCCESS";
export const AXIOS_ERROR = "AXIOS_START";

export function handleSubmit(input) {
  return dispatch => {
    dispatch({ type: AXIOS_START });
  };
}
