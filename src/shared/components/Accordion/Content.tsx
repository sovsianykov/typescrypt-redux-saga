import React, { FunctionComponent } from "react";
import { ContentProps } from "./types";

const Content: FunctionComponent<ContentProps> = ({ item, style }) => {
  return (
    <section className={style}>
      {/*<img src={item.artworkUrl100} alt='art'/>*/}
      <h5>{item.artistName}</h5>
      <h5>{item.trackName}</h5>
      <p>{item.country}</p>
      <p>{item.primaryGenreName}</p>
    </section>
  );
};

export default Content;
