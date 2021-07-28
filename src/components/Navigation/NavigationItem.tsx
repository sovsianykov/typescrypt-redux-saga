import React, {FunctionComponent, useCallback, useMemo} from 'react';
import styles from './Navigation.module.scss';
import { Item } from "./types";
import cn from 'classnames'

export interface NavigationItemProps {
    item  : Item;
    onClick(id: number):  void;
    active: boolean; 
}



const NavigationItem:FunctionComponent<NavigationItemProps> = ({
    item, active, onClick}) => {
    const classNames = useMemo(()=>
       cn({
           [styles.navigationItem]: true,
           [styles.navigationItem_active]: active,
       }),
        [active]
    );
    
    const handlerClick = useCallback((id)=>{
        onClick(item.id)
    },[item.id, onClick])
    
    return (
        <nav className={ classNames } onClick={handlerClick} >
            {item.title}
        </nav>
    );
};

export default NavigationItem;