import React, { useEffect } from 'react';
import { useDispatch  } from "react-redux";
import { apiAction } from './redux/actions'
import { useTypesSelector } from "./hooks/useTypesSelector";

interface Result {
    artistId : number,
    artworkUrl130 : string
}



function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(apiAction.fetchData("abba"));
  },[dispatch])
  const {list, loading, error} = useTypesSelector((state) => state.apiReducer);
  console.log(list)
  console.log(loading)
  console.log(error)
  if (loading) {
    return (
        <div >
           <h1>Loading...</h1>
        </div>
    );
  }
  if (error) {
    return (
          <div >
              <h5>{error}</h5>
          </div>
      );
  }
    console.log(list.result)
    return (
        <div >
            {list?.results?.map((e:any) =>(<h1>{e.artistId}</h1>))}
        </div>
    );

}

export default App;
