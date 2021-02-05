import Masonry from "react-masonry-css";
import { Div } from "./gallery-styling";

const Gallery = ({ photos }) => {
  return (
    <Div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((item) => (
          <img src={item} alt="Random dog" />
        ))}
      </Masonry>
    </Div>
  );
};

export default Gallery;
