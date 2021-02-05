export const SET_IMGS = "SET_IMGS";
export const GET_BREEDS = "GET_BREEDS";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SET_CURR = "SET_CURR";
export const SET_FIRST_INITIAL = "SET_FIRST_INITIAL";
export const INITIAL_LOAD = "INITIAL_LOAD";
export const STATE_RELOAD = "STATE_RELOAD";

// ------ Reasoning ------
// Since we're compiling the entire state into one...
// context, useReducer helps us simplify the actions for...
// readability & clarity

const reducer = (state, action) => {
  console.log(state, action, "!");
  switch (action.type) {
    case INITIAL_LOAD:
      const [randomImgs, allBreeds] = action.payload;
      return {
        ...state,
        photos: randomImgs.data.message,
        breeds: allBreeds.data.message,
      };
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
    case SET_FIRST_INITIAL:
      return {
        ...state,
        sorted: action.payload,
      };
    case STATE_RELOAD:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
