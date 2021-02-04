export const SET_IMGS = "SET_IMGS";
export const GET_BREEDS = "GET_BREEDS";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SET_CURR = "SET_CURR";
export const SET_SORTED = "SET_SORTED";

// ------ Reasoning ------
// Since we're compiling the entire state into one...
// context, useReducer helps us simplify the actions for...
// readability & clarity

const reducer = (state, action) => {
  console.log(action.type, action.payload, "!!!! - this log is in reducer.js");
  switch (action.type) {
    case SET_IMGS:
      return {
        ...state,
        photos: action.payload,
      };
    case GET_BREEDS:
      return {
        ...state,
        breeds: action.payload,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    case SET_CURR:
      return {
        ...state,
        curr: action.payload,
      };
    case SET_SORTED:
      return {
        ...state,
        sorted: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
