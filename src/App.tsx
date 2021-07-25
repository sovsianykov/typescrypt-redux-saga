import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { apiAction } from './redux/actions'


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(apiAction.fetchData("texas"));
  },[dispatch])
  const state = useSelector((state) => state.apiReducer);
  console.log(state)

  return (
    <div className="App">

    </div>
  );
}

export default App;
