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
        <div class="border-b px-4 py-2 flex justify-between items-center">
          <h3 class="font-semibold text-lg">Modal Title</h3>
          <button class="text-black close-modal">x</button>
        </div>

        {/*content*/}
        <input
          class="w-5/6 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <div class="p-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          delectus cumque fugiat nemo ducimus quae deserunt cupiditate sapiente
          incidunt aut accusantium dolore assumenda vitae similique,
          exercitationem voluptatum praesentium laboriosam nam.
        </div>
        <div class="flex justify-end items-center w-100 border-t p-3">
          <button class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">
            Cancel
          </button>
          <button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">
            Oke
          </button>
        </div>
      </Div>
      <GrayBg></GrayBg>
    </>
  );
};

export default Modal;
