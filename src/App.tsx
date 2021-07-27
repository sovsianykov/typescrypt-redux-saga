import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiAction } from "./redux/actions";
import { useTypesSelector } from "./hooks/useTypesSelector";
import { Artist } from "./redux/constants";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiAction.fetchData("deep-purple"));
  }, [dispatch]);
  const { list, loading, error } = useTypesSelector(
    (state) => state.apiReducer
  );
  console.log(list);
  console.log(loading);
  console.log(error);
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h5>{error}</h5>
      </div>
    );
  }
  console.log(list?.results);
  return (
    <div>
      {list?.results.map((artist: Artist) => (
        <img src={artist.artworkUrl60} alt="art" key={artist.artistId} />
      ))}
    </div>
  );
}

export default App;
