import { useHistory } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useAppContext } from "../../context/state";
import Fuse from "fuse.js";

// Styled Components
import { Div, GrayBg, SearchDiv, H2, Input } from "./modal-styling";
import { InfoLinks, Button } from "../../styles/ReusableStyles";

const Modal = () => {
  const { state, dispatch } = useAppContext();

  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const ref = useRef();

  const history = useHistory();

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      if (ref.current && ref.current.contains(e.target)) {
        dispatch({ type: "TOGGLE_MODAL" });
      }
    };

    document.addEventListener("click", handleClick);

    const data = Object.keys(state.breeds).map((item) => {
      return {
        breed: item,
        subbreeds: state.breeds[item],
        firstInitial: item[0],
      };
    });

    const fuse = new Fuse(data, {
      keys: ["breed"],
    });

    const results = fuse.search(value);

    setSearchResults(results);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [state.breeds, value]);

  const clickHandler = (evt) => {
    evt.preventDefault();
    const { name } = evt.target;
    dispatch({ type: "SET_CURR", payload: name });
    dispatch({ type: "TOGGLE_MODAL" });
    history.push(`/${name}`);
  };

  const searchHandler = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    setValue(value);
  };

  return (
    <>
      <GrayBg ref={ref}></GrayBg>
      <Div>
        <H2>Search</H2>
        {/* <button class="text-black">x</button> */}

        {/*content*/}
        <Input
          type="search"
          name="search"
          placeholder="Search"
          onChange={(evt) => searchHandler(evt)}
        />
        <SearchDiv>
          {searchResults !== null &&
            searchResults !== undefined &&
            searchResults.map((query) => (
              <InfoLinks
                className="w-auto"
                onClick={(e) => clickHandler(e)}
                name={query.item.breed}
              >
                {query.item.breed}
              </InfoLinks>
            ))}
        </SearchDiv>
        <div class="w-1/4 self-end p-3">
          <Button>Cancel</Button>
        </div>
      </Div>
    </>
  );
};

export default Modal;
