import fetchAnime from "../utils/fetch";

export const HANDLE_SUBMIT = "HANDLE_SUBMIT";
export const HANDLE_START = "HANDLE_START";
export const HANDLE_SUCCESS = "HANDLE_SUCCESS";
export const HANDLE_ERROR = "HANDLE_START";

export function handleSubmit(searchString) {
  return dispatch => {
    dispatch({ type: HANDLE_START });

    fetchAnime(searchString)
      .then(res => res.json().then(json => (res.ok ? json : Promise.reject(json))))
      .then(data => {
        dispatch({ type: HANDLE_SUCCESS, payload: data.data });
        console.log("Data: ", data);
      })
      .catch(err => {
        dispatch({ type: HANDLE_ERROR });
        console.log("Error: ", err);
      });
  };
}
