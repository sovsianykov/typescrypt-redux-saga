import React, {FunctionComponent, useMemo} from 'react';
import styles from "./Accordion.module.scss"
import {AccordionItemProps ,} from "./types";
import Title from "./Title";
import Content from "./Content";
import cn from "classnames"

const AccordionItem:FunctionComponent<AccordionItemProps> = ({
    item,onClick,selected,id
}) => {
    const classNames = useMemo(() => 
        cn({
            [styles.content]:true,
            [styles.content_show]: selected === id,
        })
    ,[id, selected])
    return (
        <div className={styles.accordionItem}>
            <Title item={item} selected={selected} onClick={onClick} id={id}/>
            <Content item={item} style={classNames}/>
        </div>
    );
};

export default AccordionItem;