import React, { FunctionComponent, useMemo } from "react";
import styles from "./Paginator.module.scss";
import { PaginatorProps } from "./Types";
import Pages from "./utils";
import PaginatorItem from "./PaginatorItem";

const Paginator: FunctionComponent<PaginatorProps> = ({
  totalItems,
  itemsPerPage,
  activePageIid,
  onClick,
}) => {
  const items = useMemo(
    () => Pages.paginatorSettings(totalItems, itemsPerPage),
    [itemsPerPage, totalItems]
  );
  const arrowLeft:string = `${"<"}`;
  const arrowRight:string = `${">"}`;

  return (
    <nav className={styles.paginator}>
      <div className={styles.item}>{arrowLeft}</div>
      {items.map((item) => (
        <PaginatorItem id={item}
                       key={item}
                       active={item===activePageIid}
                       onClick={onClick} />
      ))}
      <div className={styles.item}>{arrowRight}</div>
    </nav>
  );
};

export default Paginator;
