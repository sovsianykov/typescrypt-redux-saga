import React, {FunctionComponent, useCallback, useMemo} from 'react';
import styles from "./Paginator.module.scss";
import cn from "classnames";
import {PaginatorItemProps} from "./Types";



const PaginatorItem:FunctionComponent<PaginatorItemProps> = ({
    active,
    id,
    onClick
                                                             }) => {
    const classNames= useMemo(()=>cn({
        [styles.item]: true,
        [styles.item_active]: active,
    }),[active]);

    const onClickHandler = useCallback((e)=>{
        onClick(id)
    },[id, onClick])
    return (
        <div className={classNames} onClick={onClickHandler}>
            {id}
        </div>
    );
};

export default PaginatorItem;
