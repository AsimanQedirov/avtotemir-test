import React from 'react';
import {Layout} from "@/types/components/Layout";
import Header from "@/components/layouts/Header";
import FixedFooter from "@/components/layouts/FixedFooter";
import styles from  './Layout.module.scss';
import SearchBar from "@/components/layouts/SearchBar";
const Layout = ({children}: Layout) => {
    return (
        <>
            <Header/>
            <div className={styles.layout}>
                <div className={styles.layout__container}>
                    <SearchBar/>
                    {children}
                </div>
            </div>
            <FixedFooter/>
        </>
    );
};

export default Layout;
