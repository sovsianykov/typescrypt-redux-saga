import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { apiAction } from "./redux/actions";
import { useTypesSelector } from "./hooks/useTypesSelector";
import { Artist } from "./redux/constants";
import PageHeader from "./shared/components/PageHeader/PageHeader";
import Form from "./shared/components/Form/Form";
import { navTitles } from "./components/content";
import Navigation from "./components/Navigation/Navigation";
import Accordion from "./shared/components/Accordion/Accordion";

function App() {
  const [searchWord, setSearchWord] = useState<string>("notice");
  const [activeMenuId, setActiveMenuId] = useState<number>(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiAction.fetchData(searchWord, activeMenuId));
  }, [activeMenuId, dispatch, searchWord]);
  const { list, loading, error } = useTypesSelector(
    (state) => state.apiReducer
  );

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

  return (
    <div>
      <PageHeader title="iTunes search" />
      <Navigation
        items={navTitles}
        activeMenuId={activeMenuId}
        onClick={(id: number) => setActiveMenuId(id)}
      />

      <h2 style={{ textAlign: "center", background: "#000", margin: "0" }}>
        {searchWord}
      </h2>
      <section className="appContainer">
        <Form submit={(word: string) => setSearchWord(word)} />
        <Accordion items={list?.results} />
        {list?.results.map((artist: Artist, i) => (
          <img
            src={artist.artworkUrl60}
            alt="art"
            key={`${artist.artistId}${i}`}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
