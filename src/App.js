import { useAppContext } from "./context/state";
import { useEffect } from "react";
import { onRender } from "./utils/fetch";
import { Route, Switch } from "react-router-dom";

// Styled Components
import { default as GlobalStyles } from "./styles/GlobalStyles";
import { Grid } from "./styles/ReusableStyles";

// Components
import { Sidebar } from "./components/sidebar";
import { Main } from "./components/main";
import { Tabs } from "./components/tabs";

function App() {
  const [state, dispatch] = useAppContext();

  useEffect(() => {
    onRender(dispatch);

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.code === "KeyK") {
        dispatch({ type: "TOGGLE_MODAL" });
      } else {
        return;
      }
    };

    // initiate command + K keydown effect
    window.addEventListener("keydown", handleKeyDown);

    // clean up
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  return (
    <Grid>
      <GlobalStyles />

      <Sidebar />
      <Tabs />
      <Main />

      <Switch>
        {/* /:identifier will serve /:breeds and /:letter routes */}
        <Route exact path="/:identifier" />

        {/* Route validation (/:breed vs :/letter) will serve component */}
        <Route path="/:identifier/:subbreed" />
      </Switch>
    </Grid>
  );
}

export default App;
