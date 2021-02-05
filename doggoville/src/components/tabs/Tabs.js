import { useHistory } from "react-router-dom";
import { useAppContext } from "../../context/state";
import { useEffect, useState, useCallback } from "react";
import { InfoLinks } from "../../styles/CustomStyles";
import { alphabatize } from "../../utils/alphabatize";

const buttonNames = [
  { name: "breeds" },
  { name: "subbreeds" },
  { name: "alphabet" },
];

const Tabs = () => {
  const { state, dispatch } = useAppContext();
  const { breeds, curr, sorted } = state;

  const history = useHistory();

  const stableDispatch = useCallback(dispatch, [dispatch]);

  const [breedsArr, setBreedsArr] = useState([]);
  const [clicked, setClicked] = useState("breeds");

  useEffect(() => {
    // convert updated breeds into an array
    const arr = Object.keys(breeds);
    setBreedsArr(arr);

    // instantiate an object that will hold dogs first
    // initial as key and attach an array as its value
    let byInitial = alphabatize(arr);

    return stableDispatch({ type: "SET_FIRST_INITIAL", payload: byInitial });
  }, [breeds, stableDispatch]);

  const buttonHandler = (evt) => {
    evt.preventDefault();
    const { name } = evt.target;
    setClicked(name);
  };

  const clickHandler = (evt) => {
    evt.preventDefault();
    const { name } = evt.target;

    // to fix
    if (!breeds[name]) {
      console.log(curr);
      const temp = curr;
      dispatch({ type: "SET_CURR", payload: name });
      return history.push(`/${temp}/${name}`);
    }

    if (breeds[name] || sorted[name]) {
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
          (item.name === "subbreeds" && breeds[curr] === undefined) ||
          (item.name === "subbreeds" && breeds[curr].length <= 0) ? null : (
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

      {/* BY BREED */}
      <ul className="list-none overflow-scroll m-4 w-4/6 flex flex-col p-2 self-end md:text-right text-center">
        {breedsArr.map((item, index) => (
          <InfoLinks
            key={index}
            name={item}
            className={`${clicked !== "breeds" && "hidden"}`}
            onClick={(e) => clickHandler(e)}
          >
            {item}
          </InfoLinks>
        ))}

        {/* BY SUBBREED */}
        {breeds[curr] === undefined || breeds[curr].length < 1
          ? null
          : breeds[curr].map((item, index) => (
              <InfoLinks
                key={index}
                name={item}
                className={`${clicked !== "subbreeds" && "hidden"}`}
                onClick={(e) => clickHandler(e)}
              >
                {item}
              </InfoLinks>
            ))}

        {/* BY FIRST LETTER */}
        {Object.keys(sorted).map((item, index) => (
          <InfoLinks
            key={index}
            name={item}
            className={` ${clicked !== "alphabet" && "hidden"}`}
            onClick={(e) => clickHandler(e)}
          >
            {item}
          </InfoLinks>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
