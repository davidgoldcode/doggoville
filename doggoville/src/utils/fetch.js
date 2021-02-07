import axios from "axios";

const urlRandom = "https://dog.ceo/api/breeds/image/random/50";
const urlAllBreeds = "https://dog.ceo/api/breeds/list/all";

export const fetch = async (url) => {
  return await axios.get(url);
};

export const fetchByBreed = (breed) => {
  const url = `https://dog.ceo/api/breed/${breed}/images/random/50`;
  return fetch(url);
};

export const fetchManyBreeds = (urls, dispatch) => {
  return axios.all(urls);
};

export const fetchLikedDogs = async (urls) => {
  const arr = await axios
    .all(urls)
    .then(
      axios.spread((...res) => {
        return res;
      })
    )
    .catch((err) => {
      return alert("Something went wrong. Try again in a bit");
    });
  return arr;
};

export const onRender = (dispatch) => {
  // Make two calls - one for random images & one to get all breeds
  const random = fetch(urlRandom);
  const allBreeds = fetch(urlAllBreeds);

  axios
    .all([random, allBreeds])
    .then(
      axios.spread((...res) => {
        // Send combined array to context via reducer
        dispatch({ type: "INITIAL_LOAD", payload: res });
      })
    )
    .catch((err) => {
      alert("Something went wrong. Try again in a bit");
    });
};

export const onRouteChange = (path, breeds, sorted, dispatch) => {
  // check that path isn't empty
  if (path.length > 1) {
    // slice the query
    const query = path.substring(1);

    // if it's a breed, fetch by breed
    if (breeds[query]) {
      fetchByBreed(query)
        .then((res) =>
          dispatch({ type: "SET_IMGS", payload: res.data.message })
        )
        .catch((err) => alert("Sorry there was an error. Try again in a bit"));
    }
    // if it's a letter, fetch by all breeds that begin w/ letter
    else if (sorted[query]) {
      const fetchUrls = sorted[query].map(function (breed) {
        const url = `https://dog.ceo/api/breed/${breed}/images/random/${Math.floor(
          20 / sorted[query].length
        )}`;
        return fetch(url);
      });
      return fetchManyBreeds(fetchUrls)
        .then(
          axios.spread((...res) => {
            const arr = res.map((item) => item.data.message).flat();
            return dispatch({ type: "SET_IMGS", payload: arr });
          })
        )
        .catch((err) => alert("Sorry there was an error. Try again in a bit"));
    } else {
      const queries = query.split("/");

      // if it's none of the above & longer than length of 2, it's incorrect

      if (queries.length !== 2) {
        // add reroute or error handler
        return;
      } else {
        const url = `https://dog.ceo/api/breed/${queries[0]}/${queries[1]}/images/random/20`;
        fetch(url)
          .then((res) => {
            dispatch({ type: "SET_IMGS", payload: res.data.message });
          })
          .catch((err) =>
            alert("Sorry there was an error. Try again in a bit")
          );
      }
    }
  }
};
