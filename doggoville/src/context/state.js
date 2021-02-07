import { createContext, useContext, useCallback, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext();

// ------ Reasoning ------
// • Photos come in as an array which allows to loop through easily
// • Breeds come in as an object which allows easy access
// • By putting sorted as an object, it allows for simple & quick access. Can put specific breeds attached as array for looping
// • curr is the specific breed we're looking at (if any). Good as a reference point

const initialState = {
  photos: [],
  breeds: {},
  sorted: {},
  showModal: false,
  curr: "",
  skeleton: true,
  clickCount: 0,
};

// ------ Reasoning ------
// useContext allows us to have more flexibility
// should we need to add on in the future
// but is likely a premature optimization in this SPA

export function ContextProvider({ children }) {
  const [state, unstableDispatch] = useReducer(reducer, initialState);

  // Stabilize dispatch so it can be used as a useeffect dependency
  const dispatch = useCallback(unstableDispatch, [unstableDispatch]);

  console.log(state, "state.js");

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
