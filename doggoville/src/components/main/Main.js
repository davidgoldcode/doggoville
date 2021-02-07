import { useEffect, useState } from "react";
import { useAppContext } from "../../context/state";
import { useLocation } from "react-router-dom";
import { onRouteChange } from "../../utils/fetch";

// Components
import { Gallery } from "../gallery";
import { Search } from "../search";
import { Modal } from "../modal";

const Main = () => {
  const { state, dispatch } = useAppContext();
  const { breeds, sorted, showModal } = state;

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    onRouteChange(path, breeds, sorted, dispatch);
  }, [location.pathname, breeds, sorted, dispatch]);

  return (
    <div className="md:col-start-3	md:col-span-3 md:row-start-1 row-span-1 row-start-2 overflow-y-scroll">
      <Search />
      {showModal && <Modal />}
      <Gallery />
    </div>
  );
};

export default Main;
