import Masonry from "react-masonry-css";
import { useAppContext } from "../../context/state";
import { Div } from "./gallery-styling";

const Gallery = () => {
  const { state, dispatch } = useAppContext();
  const { photos } = state;

  return (
    <Div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {console.log(photos, "within")}
        {photos.map((item) => (
          <img src={item} alt="Random dog" />
        ))}
      </Masonry>
    </Div>
  );
};

export default Gallery;
