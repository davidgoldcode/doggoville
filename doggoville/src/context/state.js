import { createContext, useCallback, useContext, useReducer } from "react";
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
  modalStatus: false,
  curr: "",
};

// ------ Reasoning ------
// useContext allows us to have more flexibility...
// should we need to add on in the future

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
