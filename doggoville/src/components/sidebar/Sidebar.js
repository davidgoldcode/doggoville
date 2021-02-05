import { Link } from "../../styles/CustomStyles";
import { RiRefreshLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <header className="col-start-1 md:col-span-1 md:h-98 h-5/6 bg-indigo-600 md:self-center md:mx-2 md:rounded-2xl flex flex-col items-center justify-around">
      <Link href="/">
        <h1>Doggoville</h1>
      </Link>

      <section className="flex flex-col md:h-1/2 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About us </Link>
        <Link to="/search">Search </Link>
        <a
          className="text-primary lg:text-3xl md:text-2xl text-l font-black m-2 lowercase"
          href="mailto:workingona100sleepscore@inboxeen.com"
        >
          Contact
        </a>
      </section>

      <footer className="flex flex-col items-center justify-around">
        <h1 className="text-primary md:text-2xl text-l font-black m-2 lowercase">
          Refresh to see more
        </h1>
        <button onClick={() => window.location.reload()}>
          <RiRefreshLine
            className="text-primary hover:animate-spin m-2"
            size={50}
          />
        </button>
      </footer>
    </header>
  );
};

export default Sidebar;
