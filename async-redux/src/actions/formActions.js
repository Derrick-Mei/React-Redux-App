export const HANDLE_CHANGE = "HANDLE_CHANGE";

//STRETCH HANDLE_ERROR

export function handleChange(input) {
  return {
    type: HANDLE_CHANGE,
    payload: input
  };
}
