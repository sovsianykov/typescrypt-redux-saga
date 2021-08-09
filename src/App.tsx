import React, {useCallback, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { apiAction } from "./redux/actions";
import { useTypesSelector } from "./hooks/useTypesSelector";
import { Artist } from "./redux/constants";
import PageHeader from "./shared/components/PageHeader/PageHeader";
import Form from "./shared/components/Form/Form";
import { navTitles } from "./components/content";
import Navigation from "./components/Navigation/Navigation";
import Accordion from "./shared/components/Accordion/Accordion";
import Subtitle from "./shared/components/Subtile/Subtitle";
import Paginator from "./shared/components/Paginator/Paginator";

function App() {
  const [searchWord, setSearchWord] = useState<string>("notice");
  const [activeMenuId, setActiveMenuId] = useState<number>(1);
  const [activePAgeId, setActivePageId] = useState<number>(1);

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

      const pageHandler = (id:number) =>{
           setActivePageId(id)
      }

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

        <Form submit={(word: string) => setSearchWord(word)} />
          <Paginator totalItems={70} itemsPerPage={5} activePageIid={activePAgeId} onClick={(id)=> pageHandler(id)}/>
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
