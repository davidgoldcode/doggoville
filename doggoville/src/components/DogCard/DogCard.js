import { useState, useEffect } from "react";
import { Card } from "./dogcard-styling";
import { handleLikes, nameHandler } from "../../utils/likes";

const DogCard = ({ data }) => {
  const { height, src } = data;
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    nameHandler(src) && setLiked(true);
    console.log("dogcard");
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
        className="text-xs sm:m-2 text-black font-semibold w-auto inline-block border-2 border-indigo-600 md:py-1 md:p-2 px-1 uppercase rounded-full bg-purple-200 hover:bg-indigo-800 hover:text-primary"
      >
        {liked ? "Unlike" : "Like"}
      </button>
    </Card>
  );
};

export default DogCard;
