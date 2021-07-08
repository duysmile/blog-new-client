import { Pane } from '@moai/core';
import React from 'react';

import styles from "./Header.module.css";

interface HeaderProps {
    name: string;
    title: string;
}

const Header = ({ name, title }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    {title}
                </div>
                <div>
                    {name}
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    name: "No name",
    title: "TECH development",
};

export default Header;
