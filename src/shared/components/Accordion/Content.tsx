import React, { FunctionComponent, memo } from "react";
import { ContentProps } from "./types";

const Content: FunctionComponent<ContentProps> = ({ item, style }) => {
  return (
    <section className={style}>
      <h5>{item.artistName}</h5>
      <h5>{item.trackName}</h5>
      <p>{item.country}</p>
      <p>{item.primaryGenreName}</p>
    </section>
  );
};

export default memo(Content);
