import { useHistory } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useAppContext } from "../../context/state";
import { default as Fuse } from "fuse.js";

// Styled Components
import { Div, GrayBg, SearchDiv, H2, Input } from "./modal-styling";
import { InfoLinks, Button } from "../../styles/ReusableStyles";

const Modal = () => {
  const [state, dispatch] = useAppContext();

  const [searchResults, setSearchResults] = useState([]);
  const [value, setValue] = useState("");

  const ref = useRef();

  const history = useHistory();

  useEffect(() => {
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
  }, [state.breeds, value, dispatch]);

  const clickHandler = (evt) => {
    evt.preventDefault();
    const { name } = evt.target;
    dispatch({ type: "SET_CURR", payload: name });
    dispatch({ type: "TOGGLE_MODAL" });
    history.push(`/${name}`);
  };

  const toggleHandler = (e) => {
    e.preventDefault();
    setValue("");
    dispatch({ type: "TOGGLE_MODAL" });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (ref.current && ref.current.contains(e.target)) {
      toggleHandler(e);
    }
  };

  const searchHandler = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    console.log(value);
    setValue(value);
  };

  return (
    <>
      <GrayBg onClick={(e) => handleClick(e)} ref={ref}></GrayBg>
      <Div>
        <H2>Search</H2>
        <Input
          name="search"
          type="search"
          placeholder="Search"
          autoFocus="true"
          autoComplete="off"
          value={value}
          onChange={(e) => searchHandler(e)}
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
        <div className="w-1/4 self-end p-3">
          <Button onClick={(e) => toggleHandler(e)}>Cancel</Button>
        </div>
      </Div>
    </>
  );
};

export default Modal;
