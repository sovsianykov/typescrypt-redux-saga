import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { apiAction } from "./redux/actions";
import { useTypesSelector } from "./hooks/useTypesSelector";
import { Artist } from "./redux/constants";
import PageHeader from "./shared/components/PageHeader/PageHeader";
import Form from "./shared/components/Form/Form";
import {navTitles} from "./components/content";
import Navigation from "./components/Navigation/Navigation";
import Accordion from "./shared/components/Accordion/Accordion";

function App() {
  const [searchWord, setSearchWord] = useState<string>('drum')
  const [activeMenuId, setActiveMenuId] = useState<number>(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiAction.fetchData(searchWord));
  }, [dispatch, searchWord]);
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
      <PageHeader title='iTunes search'/>
      <Navigation items={navTitles} activeMenuId={activeMenuId} onClick={(id:number) =>setActiveMenuId(id)}    />

      <h2>{searchWord}</h2>
       <Form submit={(word:string)=>setSearchWord(word)}/>
       <Accordion items={list?.results} />
      {list?.results.map((artist: Artist,i) => (
        <img src={artist.artworkUrl60} alt="art" key={`${artist.artistId}${i}`} />
      ))}
    </div>
  );
}

export default App;
