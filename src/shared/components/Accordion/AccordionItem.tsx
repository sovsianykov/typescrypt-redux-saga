import React, { FunctionComponent, memo, useMemo } from "react";
import styles from "./Accordion.module.scss";
import { AccordionItemProps } from "./types";
import Title from "./Title";
import Content from "./Content";
import cn from "classnames";

const AccordionItem: FunctionComponent<AccordionItemProps> = ({
  item,
  onClick,
  active,
}) => {
  const classNames = useMemo(
    () =>
      cn({
        [styles.content]: true,
        [styles.content_show]: active,
      }),
    [active]
  );
  return (
    <div className={styles.accordionItem}>
      <Title item={item} onClick={onClick} active={active} />
      <Content item={item} style={classNames} />
    </div>
  );
};

export default memo(AccordionItem);
