import { Link, useHistory } from "react-router-dom";
import { useAppContext } from "../../context/state";
import { useEffect, useState, useCallback } from "react";
import useFetch from "../../utils/useFetch";

const buttonNames = [
  { name: "breeds" },
  { name: "subbreeds" },
  { name: "alphabet" },
];

const Tabs = () => {
  const { state, dispatch } = useAppContext();
  const history = useHistory();
  const stableDispatch = useCallback(dispatch, [dispatch]);

  const [breeds, setBreeds] = useState([]);
  const [clicked, setClicked] = useState("breeds");

  useEffect(() => {
    const arr = Object.keys(state.breeds);
    setBreeds(arr);

    const alphabatized = arr.reduce((accum, elem) => {
      let firstLetter = elem[0];

      if (!accum[firstLetter]) {
        accum[firstLetter] = [elem];
      } else {
        accum[firstLetter].push(elem);
      }

      return accum;
    }, {});

    return stableDispatch({ type: "SET_FIRST_INITIAL", payload: alphabatized });
  }, [state.breeds, stableDispatch]);

  const buttonHandler = (evt) => {
    evt.preventDefault();
    const { name } = evt.target;
    setClicked(name);
  };

  const clickHandler = (evt) => {
    evt.preventDefault();
    const { name } = evt.target;

    if (!state.breeds[name]) {
      const temp = state.curr;
      dispatch({ type: "SET_CURR", payload: name });
      history.push(`/temp/${name}`);
    }

    if (state.breeds[name] || state.sorted[name]) {
      dispatch({ type: "SET_CURR", payload: name });
      history.push(`/${name}`);
    } else {
      console.log("big ole error on tabs");
    }
  };

  return (
    <div className="flex flex-col w-full md:col-start-2 md:col-span-1">
      <div className="w-full text-center">
        {buttonNames.map((item, index) =>
          (item.name === "subbreeds" &&
            state.breeds[state.curr] === undefined) ||
          (item.name === "subbreeds" &&
            state.breeds[state.curr].length <= 0) ? null : (
            <button
              key={index}
              className={`md:text-2xl w-5/6 border-l border-r text-l font-black uppercase hover:bg-indigo-800 text-primary font-bold p-2 m-2 rounded bg-indigo-300 ${
                clicked === item.name && "bg-indigo-600"
              }`}
              onClick={(e) => buttonHandler(e)}
              name={item.name}
            >
              {item.name}
            </button>
          )
        )}
      </div>

      {/* TO ADD: :ID FUNCTIONALITY // breeds */}
      <ul className="list-none overflow-scroll m-4 w-4/6 flex flex-col p-2 self-end md:text-right text-center">
        {breeds.map((item, index) => (
          <Link
            key={index}
            name={item}
            className={`text-xs sm:m-0.5 font-semibold w-full inline-block border-2 border-indigo-600 md:py-1 md:px-2 px-1 uppercase rounded-full bg-purple-200 hover:bg-indigo-800 hover:text-primary ${
              clicked !== "breeds" && "hidden"
            }`}
            onClick={(e) => clickHandler(e)}
          >
            {item}
          </Link>
        ))}

        {/* TO ADD: subbreeds */}
        {state.breeds[state.curr] === undefined ||
        state.breeds[state.curr].length < 1
          ? null
          : state.breeds[state.curr].map((item, index) => (
              <Link
                key={index}
                name={item}
                className={`text-xs sm:m-0.5 font-semibold w-full inline-block border-2 border-indigo-600 md:py-1 md:px-2 px-1 uppercase rounded-full bg-purple-200 hover:bg-indigo-800 hover:text-primary ${
                  clicked !== "subbreeds" && "hidden"
                }`}
                onClick={(e) => clickHandler(e)}
              >
                {item}
              </Link>
            ))}

        {/* TO ADD: by first letter */}
        {Object.keys(state.sorted).map((item, index) => (
          <Link
            key={index}
            name={item}
            className={`text-xs text-secondary sm:m-0.5 font-semibold inline-block border-2 border-gray-200 md:py-1 md:px-2 px-1 uppercase rounded-full text-gray-600 bg-purple-200 ${
              clicked !== "alphabet" && "hidden"
            }`}
            onClick={(e) => clickHandler(e)}
          >
            {item}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
