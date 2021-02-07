import { useEffect } from "react";
import { useAppContext } from "../../context/state";
import { useLocation } from "react-router-dom";
import { onRouteChange } from "../../utils/fetch";

// Styled Components
import { Div } from "./main-styling";

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
    <Div>
      <Search />
      {showModal && <Modal />}
      <Gallery />
    </Div>
  );
};

export default Main;
