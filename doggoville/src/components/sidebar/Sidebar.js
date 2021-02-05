import { Link } from "../../styles/CustomStyles";

const Sidebar = () => {
  return (
    <header className="col-start-1 bg-indigo-600 self-center mx-2 h-98 rounded-2xl flex flex-col items-center justify-around">
      <Link href="/">
        <h1>Doggoville</h1>
      </Link>

      <section className="flex flex-col h-1/2 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About us </Link>
        <Link to="/search">Search </Link>
      </section>

      <footer>
        <Link
          className="text-primary md:text-3xl text-xl font-black m-2 lowercase"
          href="/contact"
          to="/"
        >
          Contact
        </Link>
      </footer>
    </header>
  );
};

export default Sidebar;
