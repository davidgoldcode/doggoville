const SET_IMGS = "SET_IMGS";
const GET_BREEDS = "GET_BREEDS";
const TOGGLE_MODAL = "TOGGLE_MODAL";
const SET_CURR = "SET_CURR";
const SET_FIRST_INITIAL = "SET_FIRST_INITIAL";
const INITIAL_LOAD = "INITIAL_LOAD";
const SKELETON_TOGGLE = "SKELETON_TOGGLE";
const STATE_RELOAD = "STATE_RELOAD";
const ADD_MORE_PHOTOS = "ADD_MORE_PHOTOS";
const GET_LIKES = "GET_LIKES";

// ------ Reasoning ------
// Since we're compiling the entire state into one...
// context, useReducer helps us simplify the actions for...
// readability & clarity

const reducer = (state, action) => {
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
        showModal: !state.showModal,
      };
    case SET_CURR:
      return {
        ...state,
        curr: action.payload,
        clickCount: 0,
      };
    case SET_FIRST_INITIAL:
      return {
        ...state,
        sorted: action.payload,
      };
    case SKELETON_TOGGLE:
      return {
        ...state,
        skeleton: action.payload,
      };
    case ADD_MORE_PHOTOS:
      return {
        ...state,
        clickCount: (state.clickCount += 1),
      };
    case GET_LIKES:
      return {
        ...state,
        photos: action.payload,
        curr: "likes",
      };

    case STATE_RELOAD:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
