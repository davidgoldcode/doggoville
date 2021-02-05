import Masonry from "react-masonry-css";
import { Div } from "./gallery-styling";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const Gallery = ({ photos }) => {
  return (
    <Div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
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
