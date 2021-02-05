import GlobalStyles from "./styles/GlobalStyles";
import Typography from "./styles/Typography";
import { useAppContext } from "./context/state";
import { useEffect } from "react";
import useFetch from "./utils/useFetch";
import axios from "axios";
import { Route, useHistory, Switch } from "react-router-dom";

// Components
import { Sidebar } from "./components/sidebar";
import { Main } from "./components/main";
import { Tabs } from "./components/tabs";

function App() {
  const { state, dispatch } = useAppContext();
  const {
    results: [randomImgs, allBreeds],
    status,
  } = useFetch("initialFetch");

  // const setImages = async () => {
  //   const [randomImgs, allBreeds] = await results;
  //   console.log(results);
  //   dispatch({ type: "SET_IMGS", payload: randomImgs.data.message });
  //   dispatch({ type: "GET_BREEDS", payload: allBreeds.data.message });
  // };

  useEffect(() => {
    // window.addEventListener("keydown", handleKeyDown);
    // return () => {
    //   window.removeEventListener("keydown", handleKeyDown);};
  }, []);

  return (
    <div className="grid md:grid-cols-5 md:grid-rows-1 grid-cols-1 grid-rows-2 h-screen w-screen">
      <GlobalStyles />
      <Typography />

      <Sidebar />
      <Tabs />
      <Main />
    </div>
  );
}

export default App;
