import { useEffect, useCallback } from "react";
import { useAppContext } from "../../context/state";
import { Gallery } from "../gallery";
import { Search } from "../search";
import { Modal } from "../modal";
import useFetch from "../../utils/useFetch";

const Main = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {}, [state.curr]);

  return (
    <div className="md:col-start-3	md:col-span-3">
      <Search />
      {/* <Modal /> */}
      <Gallery />
    </div>
  );
};

export default Main;
