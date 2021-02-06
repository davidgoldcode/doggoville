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

    console.log(state.clickCount, "not working!!!");

    setPhotos(arr.slice(0, state.clickCount * 20 + 20));

    // Keep Skeleton visible for 1.5s as images render
    setTimeout(() => {
      setHidden(false);
    }, 1500);

    // Reset to True
    setHidden(true);
  }, [page, state.photos, state.clickCount]);

  return (
    <>
      {hidden && <Skeleton />}
      {
        <Container className={`${hidden ? "invisible" : "visible"}`}>
          <MasonicDiv>
            <Masonry
              items={photos}
              render={FakeCard}
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

const FakeCard = (props) => (
  <Card style={{ height: props.data.height }}>
    <img src={props.data.src} alt="Doggo" />
  </Card>
);

export default Gallery;
