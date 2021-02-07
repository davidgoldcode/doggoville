import { useState, useEffect } from "react";
import { handleLikes, nameHandler } from "../../utils/likes";

// Styled Components
import { Card } from "./dogcard-styling";

const DogCard = ({ data }) => {
  const { height, src } = data;
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    nameHandler(src) && setLiked(true);
  }, [src]);

  const clickHandler = (e) => {
    e.preventDefault();
    handleLikes(src);
    setLiked(!liked);
  };

  return (
    <Card style={{ height }}>
      <img src={src} alt="Doggo" />
      <button
        onClick={(e) => clickHandler(e)}
        className={`absolute bottom-1 left-1 text-xs text-black font-semibold w-auto inline-block border-2 md:py-1 md:p-2 px-1 uppercase rounded-full  ${
          liked
            ? "bg-red-200 hover:bg-red-800 border-red-600 hover:text-red"
            : "bg-indigo-200 hover:bg-indigo-800 border-indigo-600 hover:text-primary"
        }`}
      >
        {liked ? "Unlike 💔" : "Like ❤️"}
      </button>
    </Card>
  );
};

export default DogCard;
