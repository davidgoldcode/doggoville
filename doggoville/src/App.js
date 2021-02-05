import GlobalStyles from "./styles/GlobalStyles";
import Typography from "./styles/Typography";
import { useAppContext } from "./context/state";
import { useEffect, useCallback } from "react";
import { urlRandom, urlAllBreeds, fetch } from "./utils/useFetch";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

// Components
import { Sidebar } from "./components/sidebar";
import { Main } from "./components/main";
import { Tabs } from "./components/tabs";

function App() {
  const { state, dispatch } = useAppContext();

  // Stabilize dispatch so it can be used as a dependency
  const stableDispatch = useCallback(dispatch, [dispatch]);

  useEffect(() => {
    // Make two calls - one for random images & one to get all breeds
    const random = fetch(urlRandom);
    const allBreeds = fetch(urlAllBreeds);
    axios
      .all([random, allBreeds])
      .then(
        axios.spread((...res) => {
          // Send combined array to context via reducer
          stableDispatch({ type: "INITIAL_LOAD", payload: res });
        })
      )
      .catch((err) => {
        alert("Something went wrong. Try again in a bit");
      });
  }, [stableDispatch]);

  return (
    <div className="grid md:grid-cols-5 md:grid-rows-1 grid-cols-1 grid-rows-2 h-screen w-screen">
      <GlobalStyles />
      <Typography />

      <Sidebar />
      <Tabs />
      <Main />

      <Switch>
        <Route exact path="/:breed" />
        <Route path="/:breed/:subbreed" />
        <Route exact path="/:letter" />
      </Switch>
    </div>
  );
}

export default App;
