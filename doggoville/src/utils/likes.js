export const handleLikes = (src) => {
  // Get stored likes, default to empty array
  const likes = JSON.parse(localStorage.getItem("likes")) || [];

  // if var likes is not an empty array, test if the img exists
  if (likes.length) {
    for (let i = 0; i < likes.length; i++) {
      if (likes[i] === src) {
        likes.splice(i, 1);
        return localStorage.setItem("likes", JSON.stringify(likes));
      }
    }
  }

  // push array with new "like" onto localstore
  likes.push(src);
  return localStorage.setItem("likes", JSON.stringify(likes));
};

export const nameHandler = (src) => {
  if (localStorage.getItem("likes") === null) {
    return false;
  } else if (localStorage.getItem("likes").includes(src)) {
    return true;
  } else {
    return false;
  }
};
