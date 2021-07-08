import Head from 'next/head'
import React from 'react';

import Header from '../Header';
import styles from './Layout.module.css'

interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

const MainLayout = ({ children, title }: LayoutProps) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header name="Duy Nguyen"></Header>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

MainLayout.defaultProps = {
    title: "Tech development",
};

export default MainLayout;
