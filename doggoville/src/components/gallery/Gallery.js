import { MasonicDiv, Container, Card } from "./gallery-styling";
import { useAppContext } from "../../context/state";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import { Masonry } from "masonic";
import { Skeleton } from "../skeleton";

const Gallery = () => {
  const { state, dispatch } = useAppContext();

  const [items, setPhotos] = useState([]);
  const page = useParams();

  useEffect(() => {
    const items = state.photos.map((info, index) => {
      return { id: index, src: info };
    });

    // Turn skeleton animation on, but allow 1.5s for grid to render
    setTimeout(() => {
      dispatch({ type: "SKELETON_TOGGLE", payload: false });
    }, 1500);

    setPhotos(items);

    // set back to True for next load
    dispatch({ type: "SKELETON_TOGGLE", payload: true });
  }, [page, state.photos, dispatch]);

  return (
    <>
      {state.skeleton && <Skeleton />}
      {
        <Container className={`${state.skeleton ? "invisible" : "visible"}`}>
          <MasonicDiv>
            <Masonry
              items={items}
              render={FakeCard}
              key={uuid()}
              columnGutter={8}
              overscanBy={6}
            />
          </MasonicDiv>
        </Container>
      }{" "}
    </>
  );
};

const FakeCard = (props) => (
  <Card style={{ height: props.data.height }}>
    <img src={props.data.src} alt="Doggo" />
  </Card>
);

export default Gallery;
