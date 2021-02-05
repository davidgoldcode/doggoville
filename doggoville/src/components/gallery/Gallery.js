// import Masonry from "react-masonry-css";
import { MasonicDiv, Container, Card, H1 } from "./gallery-styling";
import useWindowScroll from "@react-hook/window-scroll";
import { useAppContext } from "../../context/state";
import { useRef, useState, useEffect } from "react";
import { useWindowSize } from "@react-hook/window-size";
import { v4 as uuid } from "uuid";
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import {
  useMasonry,
  Masonry,
  usePositioner,
  useContainerPosition,
  useScroller,
  useResizeObserver,
} from "masonic";

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
          columnWidth={172}
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
