import React, { useEffect } from 'react';
import { useDispatch  } from "react-redux";
import { apiAction } from './redux/actions'
import { useTypesSelector } from "./hooks/useTypesSelector";


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(apiAction.fetchData("texas"));
  },[dispatch])
  const {list, loading, error} = useTypesSelector((state) => state.apiReducer);
  console.log(list)
  console.log(loading)
  console.log(error)

  return (
    <div className="App">

    </div>
  );
}

export default App;
