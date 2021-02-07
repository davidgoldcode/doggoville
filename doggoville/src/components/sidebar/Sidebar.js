import { RiRefreshLine } from "react-icons/ri";

// Styled Components
import { Anchor, Section, Footer, Header, H2 } from "./sidebar-styling";
import { Link } from "../../styles/ReusableStyles";

const Sidebar = () => {
  return (
    <Header>
      <Link href="/">
        <h1>Doggoville</h1>
      </Link>

      <Section>
        <Link to="/">Home</Link>
        <Link to="/about">About us </Link>
        <Link to="/search">Search </Link>
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
