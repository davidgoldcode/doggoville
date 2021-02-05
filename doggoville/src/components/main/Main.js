import { useEffect, useCallback } from "react";
import { useAppContext } from "../../context/state";
import { Gallery } from "../gallery";
import { Search } from "../search";
import { Modal } from "../modal";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { onRouteChange } from "../../utils/fetch";

const Main = () => {
  const { state, dispatch } = useAppContext();
  const { breeds, sorted, photos, modalStatus } = state;

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    onRouteChange(path, breeds, sorted, dispatch);
  }, [location.pathname, breeds, sorted, dispatch]);

  return (
    <div className="md:col-start-3	md:col-span-3 md:row-start-1 row-span-1 row-start-2">
      <Search />
      {modalStatus && <Modal />}
      <Gallery photos={photos} />
    </div>
  );
};

export default Main;
