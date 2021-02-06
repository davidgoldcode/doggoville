import GlobalStyles from "./styles/GlobalStyles";
import { useAppContext } from "./context/state";
import { useEffect } from "react";
import { onRender } from "./utils/fetch";
import { Route, Switch } from "react-router-dom";

// Components
import { Sidebar } from "./components/sidebar";
import { Main } from "./components/main";
import { Tabs } from "./components/tabs";

function App() {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    onRender(dispatch);
  }, [dispatch]);

  return (
    <div className="grid md:grid-cols-5 md:grid-rows-1 grid-cols-1 grid-rows-2 h-screen w-screen">
      <GlobalStyles />

      <Sidebar />
      <Tabs />
      <Main />

      <Switch>
        {/* /:identifier will service /:breeds and /:letter routes */}
        <Route exact path="/:identifier" />

        {/* Route validation (/:breed vs :/letter is in component */}
        <Route path="/:identifier/:subbreed" />
      </Switch>
    </div>
  );
}

export default App;
