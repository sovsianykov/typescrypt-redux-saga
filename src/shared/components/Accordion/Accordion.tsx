import React, {FunctionComponent, useCallback, useState} from 'react';
import styles from "./Accordion.module.scss"
import {AccordionProps } from "./types";
import { Artist } from "../../../redux/constants";
import AccordionItem from "./AccordionItem";





const Accordion: FunctionComponent<AccordionProps> = ({
    items
}) => {
    const [selected, setSelected] = useState<number>(-1);
    const handleClick = useCallback((i) => {
             if (selected === i) {
                 return setSelected(-1)
             }
             setSelected(i)
             console.log(i)
    },[selected])
    return (
        <section className={styles.accordion}>
            {items&&items.map((item:Artist , i) => <AccordionItem
              item={item} key={i}
              selected={selected}
              onClick={()=>handleClick(i)}
              id={i}
            />)
                 }
        </section>
    );
};

export default Accordion;