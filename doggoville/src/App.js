import GlobalStyles from "./styles/GlobalStyles";
import Typography from "./styles/Typography";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <p>heyyyy</p>
    </>
  );
}

export default App;
