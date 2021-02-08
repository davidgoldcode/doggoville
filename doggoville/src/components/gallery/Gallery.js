import { useAppContext } from "../../context/state";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useParams, useHistory } from "react-router-dom";
import { Masonry } from "masonic";
import { pullLikeList } from "../../utils/likes";

// Styled Components
import { MasonicDiv, Container } from "./gallery-styling";
import { Button } from "../../styles/ReusableStyles";

// Components
import { Skeleton } from "../skeleton";
import { DogCard } from "../DogCard";

const Gallery = () => {
  const [state, dispatch] = useAppContext();

  const [photos, setPhotos] = useState([]);
  const [hidden, setHidden] = useState(true);

  const page = useParams();
  const history = useHistory();

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

  const getLikeList = async (e) => {
    e.preventDefault();
    const likesArr = await pullLikeList();
    dispatch({ type: "GET_LIKES", payload: likesArr });
    history.push("/likes");
  };

  return (
    <>
      {hidden && <Skeleton />}
      {
        <Container className={`${hidden ? "invisible" : "visible"}`}>
          <button
            onClick={(e) => getLikeList(e)}
            className="md:text-l w-1/2 p-4 mb-4 text-m font-black uppercase text-primary font-bold rounded bg-indigo-600 hover:bg-red-600"
          >
            ❤️❤️❤️ Your likes ❤️❤️❤️
          </button>
          <MasonicDiv>
            <Masonry
              items={photos.slice(0, state.clickCount * 20 + 20)}
              render={DogCard}
              key={uuid()}
              columnGutter={8}
              overscanBy={6}
              curr={state.curr}
            />
            <Button onClick={() => dispatch({ type: "ADD_MORE_PHOTOS" })}>
              See more
            </Button>
          </MasonicDiv>
        </Container>
      }
    </>
  );
};

export default Gallery;
