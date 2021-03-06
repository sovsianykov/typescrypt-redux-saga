import React, { useEffect, useState } from "react";
import { Artist } from "./redux/constants";
import PageHeader from "./shared/components/PageHeader/PageHeader";
import Form from "./shared/components/Form/Form";
import { navTitles } from "./components/content";
import Navigation from "./components/Navigation/Navigation";
import Accordion from "./shared/components/Accordion/Accordion";
import Subtitle from "./shared/components/Subtile/Subtitle";
import Paginator from "./shared/components/Paginator/Paginator";
import Pages from "./shared/components/Paginator/utils";
import useFetch from "./hooks/useFetch";

function App() {
  const [searchWord, setSearchWord] = useState<string>("wave");
  const [activeMenuId, setActiveMenuId] = useState<number>(1);
  const [activePAgeId, setActivePageId] = useState<number>(1);
  const [paginatorArray, setPaginatorArray] = useState<Artist[]>([]);

    const { list, loading, error } = useFetch(searchWord, activeMenuId)

  const searchWordHolder = (word: string) => {
    setSearchWord(word);
  };

  useEffect(() => {
    setPaginatorArray(Pages.showingPages(list?.results, 6, activePAgeId));
  }, [activePAgeId, list?.results]);

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

  const pageHandler = (id: number) => {
    setActivePageId(id);
  };
  console.log(list);
  return (
    <div>
      <PageHeader title="iTunes search" />
      <Navigation
        items={navTitles}
        activeMenuId={activeMenuId}
        onClick={(id: number) => setActiveMenuId(id)}
      />

      <Subtitle>{searchWord}</Subtitle>

      <section className="appContainer">
        <Form submit={searchWordHolder} />
        <Paginator
          totalItems={list?.resultCount}
          itemsPerPage={5}
          activePageIid={activePAgeId}
          onClick={(id) => pageHandler(id)}
        />
        <Accordion items={paginatorArray} />
        {list
          ? paginatorArray.map((artist: Artist, i) => (
              <img
                src={artist.artworkUrl100}
                alt="art"
                key={`${artist.artistId}${i}`}
              />
            ))
          : ""}
      </section>
    </div>
  );
}

export default App;
