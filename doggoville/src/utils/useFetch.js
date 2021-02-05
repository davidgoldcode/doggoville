import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { useAppContext } from "../context/state";

const urlRandom = "https://dog.ceo/api/breeds/image/random/20";
const urlAllBreeds = "https://dog.ceo/api/breeds/list/all";
const urlByBreed = "https://dog.ceo/api/breed/hound/images";

const fetch = async (url) => {
  return await axios.get(url);
};

const useFetch = (query, immediate = true, initialState = []) => {
  const { state, dispatch } = useAppContext();
  const stableDispatch = useCallback(dispatch, [dispatch]);

  const [status, setStatus] = useState("idle");
  const [results, setResults] = useState(initialState);

  const execute = useCallback(() => {
    setStatus("pending");

    const asyncHelper = async (query) => {
      switch (query) {
        case "initialFetch":
          const random = fetch(urlRandom);
          const breeds = fetch(urlAllBreeds);
          axios
            .all([random, breeds])
            .then(
              axios.spread((...res) => {
                stableDispatch({ type: "INITIAL_LOAD", payload: res });
                return setResults(res);
              })
            )
            .catch((err) => {
              setStatus("error)");
            });
          break;
        case "searchCurr":
          axios
            .get(`https://dog.ceo/api/breed/${state.curr}/images`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          break;
        default:
          return;
      }
    };

    asyncHelper(query);

    // return fetch(query)
    //   .then((response) => {
    //     setResults(response.data.message);
    //     setStatus("success");
    //   })
    //   .catch((error) => {
    //     setStatus("error");
    //   });
  }, [query, stableDispatch, state.curr]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, results };
};

export default useFetch;
