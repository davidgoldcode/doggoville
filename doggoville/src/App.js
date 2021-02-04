import GlobalStyles from "./styles/GlobalStyles";
import Typography from "./styles/Typography";
import { Route, useHistory, Switch } from "react-router-dom";

import { Sidebar } from "./components/sidebar";
import { Main } from "./components/main";

function App() {
  return (
    <div className="grid md:grid-cols-5 md:grid-rows-1 grid-cols-1 grid-rows-2 h-screen w-screen">
      <GlobalStyles />
      <Typography />

      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
