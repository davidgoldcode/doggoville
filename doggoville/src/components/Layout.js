import "normalize-css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <div className="grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 h-screen w-screen overflow-hidden">
        {children}
      </div>
    </>
  );
};

export default Layout;
