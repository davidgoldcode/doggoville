import { useHistory } from "react-router-dom";
import { Div, GrayBg, SearchDiv, SearchButton } from "./modal-styling";
import { useEffect, useState, useRef } from "react";
import { useAppContext } from "../../context/state";
import Fuse from "fuse.js";

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
        <div class="p-4 flex w-full justify-center items-center">
          <h3 class="font-semibold text-lg">Search</h3>
          {/* <button class="text-black">x</button> */}
        </div>

        {/*content*/}
        <input
          class="w-5/6 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(evt) => searchHandler(evt)}
        />
        <SearchDiv>
          {searchResults !== null &&
            searchResults !== undefined &&
            searchResults.map((query) => (
              <SearchButton
                onClick={(e) => clickHandler(e)}
                name={query.item.breed}
              >
                {query.item.breed}
              </SearchButton>
            ))}
        </SearchDiv>
        <div class="flex w-full justify-end p-3">
          <button class="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-white mr-1">
            Cancel
          </button>
          <button class="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-white">
            Search
          </button>
        </div>
      </Div>
    </>
  );
};

export default Modal;
