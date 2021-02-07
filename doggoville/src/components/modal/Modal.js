import { Div, GrayBg } from "./modal-styling";
import { useState } from "react";
import { useAppContext } from "../../context/state";

const Modal = () => {
  const { state, dispatch } = useAppContext();

  const clickHandler = (e) => {
    e.preventDefault();
    return dispatch({ type: "TOGGLE_MODAL" });
  };

  const [value, setValue] = useState("");

  const searchHandler = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    setValue(value);
  };

  return (
    <>
      <Div>
        <div class="p-4 flex w-full justify-center items-center">
          <h3 class="font-semibold text-lg">Search</h3>
          <button class="text-black">x</button>
        </div>

        {/*content*/}
        <input
          class="w-5/6 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <div class="flex w-full justify-end p-3">
          <button class="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-white mr-1">
            Cancel
          </button>
          <button class="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-white">
            Search
          </button>
        </div>
      </Div>
      <GrayBg></GrayBg>
    </>
  );
};

export default Modal;
