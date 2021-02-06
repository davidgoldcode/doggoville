import { useAppContext } from "../../context/state";

const Modal = () => {
  const { state, dispatch } = useAppContext();

  const clickHandler = (e) => {
    e.preventDefault();
    return dispatch({ type: "TOGGLE_MODAL" });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none">
        <div className="relative md:w-auto my-6 mx-auto max-w-3xl ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between  p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-semibold">
                Okay you got me - I didn't get to finish this part in time
              </h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none hover:opacity-100 focus:outline-none">
                <span
                  onClick={(e) => clickHandler(e)}
                  className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none"
                >
                  ×
                </span>
              </button>
            </div>

            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="pt-2 relative mx-auto text-gray-600">
                      <input
                        className="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search"
                      />

                      {/* to add - Breeds */}

                      {/* to add - ABCS */}

                      <button
                        type="submit"
                        className="absolute right-0 top-0 mt-5 mr-4"
                      ></button>
                    </div>
                    <div className="mt-2"></div>
                  </div>
                </div>
              </div>{" "}
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              <button
                className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={(e) => clickHandler(e)}
              >
                Close
              </button>
              <button
                className="bg-indigo-600 text-white active:bg-indigo-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={(e) => clickHandler(e)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="opacity-25 absolute top-0 left-0 z-10 bg-black h-screen w-screen"
        onClick={(e) => clickHandler(e)}
      ></div>
    </>
  );
};

export default Modal;
