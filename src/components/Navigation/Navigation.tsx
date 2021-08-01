import React, { FunctionComponent, memo } from "react";
import styles from "./Navigation.module.scss";
import { Item, NavigationProps } from "./types";
import NavigationItem from "./NavigationItem";

const Navigation: FunctionComponent<NavigationProps> = ({
  items,
  onClick,
  activeMenuId,
}) => {
  return (
    <nav className={styles.navigation}>
      {items.map((item: Item) => (
        <NavigationItem
          key={item.id}
          active={activeMenuId === item.id}
          onClick={onClick}
          item={item}
        />
      ))}
    </nav>
  );
};

export default memo(Navigation);
