import {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useReducer,
} from "react";
import reducer from "./reducer";

const StateContext = createContext();
const DispatchContext = createContext();

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
  const [unstableState, unstableDispatch] = useReducer(reducer, initialState);

  const state = useMemo(() => unstableState, [unstableState]);

  // Stabilize dispatch so it can be used as a useeffect dependency
  const dispatch = useCallback(unstableDispatch, [unstableDispatch]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useStateContext() {
  const state = useContext(StateContext);
  return state;
}

export function useDispatchContext() {
  const dispatch = useContext(DispatchContext);
  return dispatch;
}

export function useAppContext() {
  return [useStateContext(), useDispatchContext()];
}
