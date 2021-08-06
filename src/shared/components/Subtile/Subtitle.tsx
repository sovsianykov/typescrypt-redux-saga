import React, { FunctionComponent } from 'react';
import styles from './Subtitle.module.scss'

export interface SubtitleProps {
    children : string;
}

const Subtitle:FunctionComponent<SubtitleProps>  = ({children}) => {
    return (
        <header className={styles.subtitle}>
            {children}
        </header>
    );
};

export default Subtitle;
