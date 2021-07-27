import React, { FunctionComponent } from 'react';
import styles from "./PageHeader.module.scss"

interface PageHeaderProps {
    title: string;
}

const PageHeader:FunctionComponent<PageHeaderProps> = ({title}) => {
    return (
        <header className={styles.pageHeader}>
            <h1 className={styles.title}>{title}</h1>
        </header>
    );
};

export default PageHeader;