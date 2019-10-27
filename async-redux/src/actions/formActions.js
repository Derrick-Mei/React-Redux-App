export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const HANDLE_SUBMIT = "HANDLE_SUBMIT";

//STRETCH HANDLE_ERROR

export function handleChange(input) {
  return {
    type: HANDLE_CHANGE,
    payload: input
  };
}

export function handleSubmit(input) {
  return {
    type: HANDLE_SUBMIT,
    payload: input
  };
}
