import React, {FunctionComponent} from 'react';
import styles from "./Accordion.module.scss"
import { TitleProps } from "./types";


const Title:FunctionComponent<TitleProps> = ({
    item, onClick, selected,id
                                             }) => {
    return (
        <div className={styles.title} onClick={onClick}>
            <img src={item.artworkUrl60} alt="art"/>
            <h4>{item.artistName}</h4>
            <span>{ selected === id ? "-": "+" }</span>
        </div>
    );
};

export default Title;