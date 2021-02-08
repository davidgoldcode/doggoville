import { useHistory } from "react-router-dom";
import { useAppContext } from "../../context/state";
import { useEffect, useState } from "react";
import { alphabatize } from "../../utils/alphabatize";
import { v4 as uuid } from "uuid";

// Styled Components
import { Button, InfoLinks } from "../../styles/ReusableStyles";
import { TabDiv, Ul } from "./tabs-styling";

const buttonNames = [
  { name: "breeds" },
  { name: "subbreeds" },
  { name: "alphabet" },
];

const Tabs = () => {
  const [state, dispatch] = useAppContext();
  const { breeds, curr, sorted } = state;

  const history = useHistory();

  const [breedsArr, setBreedsArr] = useState([]);
  const [clicked, setClicked] = useState("breeds");

  useEffect(() => {
    // convert updated breeds into an array
    const arr = Object.keys(breeds);
    setBreedsArr(arr);

    // instantiate an object that will hold dogs first
    // initial as key and attach an array as its value
    const byInitial = alphabatize(arr);

    return dispatch({ type: "SET_FIRST_INITIAL", payload: byInitial });
  }, [breeds, dispatch]);

  const buttonHandler = (evt) => {
    evt.preventDefault();
    const { name } = evt.target;
    setClicked(name);
  };

  const clickHandler = (evt) => {
    evt.preventDefault();
    const { name } = evt.target;

    // validation:
    // if it's not a breed name AND not a first initial
    // push onto subbreed route
    if (!breeds[name] && !sorted[name]) {
      const temp = curr;
      dispatch({ type: "SET_CURR", payload: name });
      return history.push(`/${temp}/${name}`);
    }
    // if it's a breed or an initial, push to that route
    else if (breeds[name] || sorted[name]) {
      dispatch({ type: "SET_CURR", payload: name });
      history.push(`/${name}`);
    }
    // error
    else {
      alert("There was an error, try again later");
    }
  };

  return (
    <TabDiv>
      <div className="w-full text-center">
        {buttonNames.map((item, index) =>
          item.name === "subbreeds" &&
          (breeds[curr] === undefined || breeds[curr].length <= 0) ? null : (
            <Button
              key={uuid()}
              className={`${clicked === item.name && "bg-indigo-600"}`}
              onClick={(e) => buttonHandler(e)}
              name={item.name}
            >
              {item.name}
            </Button>
          )
        )}
      </div>

      {/* BY BREED */}
      <Ul>
        {breedsArr.map((item, index) => (
          <InfoLinks
            key={uuid()}
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
                key={uuid()}
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
            key={uuid()}
            name={item}
            className={` ${clicked !== "alphabet" && "hidden"}`}
            onClick={(e) => clickHandler(e)}
          >
            {item}
          </InfoLinks>
        ))}
      </Ul>
    </TabDiv>
  );
};

export default Tabs;
