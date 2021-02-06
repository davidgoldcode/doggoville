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
  const [hidden, setHidden] = useState(true);
  const page = useParams();

  useEffect(() => {
    const items = state.photos.map((info, index) => {
      return { id: index, src: info };
    });

    setPhotos(items);

    // Keep Skeleton visible for 1.5s as images render
    setTimeout(() => {
      setHidden(false);
    }, 1500);

    setHidden(true);
  }, [page, state.photos]);

  return (
    <>
      {hidden && <Skeleton />}
      {
        <Container className={`${hidden ? "invisible" : "visible"}`}>
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
