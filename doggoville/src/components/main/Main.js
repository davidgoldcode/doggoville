import { Gallery } from "../gallery";
import { Search } from "../search";
import { Modal } from "../modal";

const Main = () => {
  return (
    <div className="md:col-start-3	md:col-span-3">
      <Search />
      <Modal />
      <Gallery />
    </div>
  );
};

export default Main;
