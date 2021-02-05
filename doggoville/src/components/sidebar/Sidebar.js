import { Link } from "../../styles/CustomStyles";
import { RiRefreshLine } from "react-icons/ri";
import { useAppContext } from "../../context/state";

const Sidebar = () => {
  const { dispatch } = useAppContext();

  return (
    <header className="col-start-1 bg-indigo-600 self-center mx-2 h-98 rounded-2xl flex flex-col items-center justify-around">
      <Link href="/">
        <h1>Doggoville</h1>
      </Link>

      <section className="flex flex-col h-1/2 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About us </Link>
        <Link to="/search">Search </Link>
        <Link
          className="text-primary md:text-3xl text-xl font-black m-2 lowercase"
          href="/contact"
          to="/"
        >
          Contact
        </Link>
      </section>

      <footer className="flex flex-col items-center justify-around">
        <h1 className="text-primary md:text-3xl text-xl font-black m-2 lowercase">
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
