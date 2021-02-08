import { RiRefreshLine } from "react-icons/ri";
import { useAppContext } from "../../context/state";
import { default as webp } from "../../assets/doge.webp";
import { default as png } from "../../assets/doge.png";

// Styled Components
import {
  Anchor,
  Section,
  Footer,
  Header,
  H2,
  Img,
  Button,
} from "./sidebar-styling";
import { Link } from "../../styles/ReusableStyles";

const Sidebar = () => {
  const [state, dispatch] = useAppContext();

  return (
    <Header>
      <Link to="/">
        <h1>Doggoville</h1>
        <Img src={webp} fallback={png} />
      </Link>

      <Section>
        <Link to="/">Home</Link>
        <Link to="/about">About us </Link>
        <Button onClick={() => dispatch({ type: "TOGGLE_MODAL" })}>
          Search
        </Button>
        <Anchor href="mailto:workingona100sleepscore@inboxeen.com">
          Contact
        </Anchor>
      </Section>

      <Footer>
        <H2>Refresh to see more</H2>
        <button onClick={() => window.location.reload()}>
          <RiRefreshLine
            className="text-primary hover:animate-spin m-2"
            size={50}
          />
        </button>
      </Footer>
    </Header>
  );
};

export default Sidebar;
