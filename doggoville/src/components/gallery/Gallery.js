// import Masonry from "react-masonry-css";
import { MasonicDiv, Container, Card } from "./gallery-styling";
import { useAppContext } from "../../context/state";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import { Masonry } from "masonic";

const Gallery = () => {
  const { state, dispatch } = useAppContext();

  const [items, setPhotos] = useState([]);
  const page = useParams();

  useEffect(() => {
    const items = state.photos.map((info, index) => {
      return { id: index, src: info };
    });

    setPhotos(items);
  }, [page, state.photos]);

  return (
    <Container>
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
  );
};

const FakeCard = (props) => (
  <Card style={{ height: props.data.height }}>
    <img src={props.data.src} alt="Doggo" />
  </Card>
);

export default Gallery;
