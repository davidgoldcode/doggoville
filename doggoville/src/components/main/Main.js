import { useEffect, useCallback } from "react";
import { useAppContext } from "../../context/state";
import { Gallery } from "../gallery";
import { Search } from "../search";
import { Modal } from "../modal";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const {
    state: { breeds, sorted, photos, modalStatus },
    dispatch,
  } = useAppContext();
  const location = useLocation();
  const stableDispatch = useCallback(dispatch, [dispatch]);

  useEffect(() => {
    if (location.pathname.length > 1) {
      const queryString = location.pathname.substring(1);
      if (breeds[queryString]) {
        axios
          .get(`https://dog.ceo/api/breed/${queryString}/images/random/20`)
          .then((res) =>
            stableDispatch({ type: "SET_IMGS", payload: res.data.message })
          )
          .catch((err) =>
            alert("Sorry there was an error. Try again in a bit")
          );
      } else if (sorted[queryString]) {
        const fetchUrls = sorted[queryString].map(function (dog) {
          return axios.get(
            `https://dog.ceo/api/breed/${dog}/images/random/${Math.floor(
              20 / sorted[queryString].length
            )}`
          );
        });
        axios
          .all(fetchUrls)
          .then(
            axios.spread((...res) => {
              const arr = res.map((item) => item.data.message).flat();
              return stableDispatch({ type: "SET_IMGS", payload: arr });
            })
          )
          .catch((err) => console.log(err));
      } else {
        const queries = queryString.split("/");
        if (queries.length !== 2) {
        } else {
          axios
            .get(
              `https://dog.ceo/api/breed/${queries[0]}/${queries[1]}/images/random/20`
            )
            .then((res) => {
              stableDispatch({ type: "SET_IMGS", payload: res.data.message });
            })
            .catch((err) => console.log(err));
        }
      }
    }
  }, [location, stableDispatch, breeds, sorted]);

  return (
    <div className="md:col-start-3	md:col-span-3 md:row-start-1 row-span-1 row-start-2">
      <Search />
      {modalStatus && <Modal />}
      <Gallery photos={photos} />
    </div>
  );
};

export default Main;
