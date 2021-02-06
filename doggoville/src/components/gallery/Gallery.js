import { MasonicDiv, Container, Card } from "./gallery-styling";
import { useAppContext } from "../../context/state";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import { Masonry } from "masonic";
import { Skeleton } from "../skeleton";

const Gallery = () => {
  const { state, dispatch } = useAppContext();

  const [photos, setPhotos] = useState([]);
  const [hidden, setHidden] = useState(true);

  const page = useParams();

  useEffect(() => {
    const arr = state.photos.map((info, index) => {
      return { id: index, src: info };
    });

    setPhotos(arr);

    // Keep Skeleton visible for 1.5s as images render
    setTimeout(() => {
      setHidden(false);
    }, 1500);

    // Reset to True
    setHidden(true);
  }, [page, state.photos]);

  return (
    <>
      {hidden && <Skeleton />}
      {
        <Container className={`${hidden ? "invisible" : "visible"}`}>
          <MasonicDiv>
            <Masonry
              items={photos.slice(0, state.clickCount * 20 + 20)}
              render={DogCard}
              key={uuid()}
              columnGutter={8}
              overscanBy={6}
            />
          </MasonicDiv>
          <button
            onClick={() => dispatch({ type: "ADD_MORE_PHOTOS" })}
            className="md:text-2xl w-1/2 border-l border-r text-l font-black uppercase hover:bg-indigo-800 text-primary font-bold p-2 m-2 rounded bg-indigo-600"
          >
            See more
          </button>
        </Container>
      }
    </>
  );
};

const DogCard = ({ data }) => {
  const { height, src } = data;
  return (
    <Card style={{ height }}>
      <img src={src} alt="Doggo" />
      {/* <h6 className="text-xs sm:m-2 text-black font-semibold w-auto inline-block border-2 border-indigo-600 md:py-1 md:p-2 px-1 uppercase rounded-full bg-purple-200 hover:bg-indigo-800">
        doge
      </h6> */}
    </Card>
  );
};

export default Gallery;
