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

// Placeholder - To get rid of
const url = "https://dog.ceo/api/breeds/image/random/20";

function App() {
  const { state, dispatch } = useAppContext();
  const x = useFetch("initialFetch");
  console.log(x, "!!!!");

  useEffect(() => {
    const url = "https://dog.ceo/api/breeds/image/random/20";

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
