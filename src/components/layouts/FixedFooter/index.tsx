import React from 'react';
import styles from './FixedFooter.module.scss'
import Image from "next/image";
import {useRouter} from "next/router";
import navigations, {INavigations} from "@/components/layouts/FixedFooter/navigations";

const Index = () => {
    const {pathname} = useRouter();
    console.log(pathname);
    return (
        <div className={styles.navigation}>
            <ul className={styles.navigation__tabs}>
                {
                    navigations.map((item: INavigations, key: number) => {
                        return <li key={key}>
                            <button className={`${pathname === item.pathname ? 'bg-orange' : ''}`}>
                                <Image
                                    width={15}
                                    height={15}
                                    src={item.pathname === pathname ? item.iconLight : item.iconDark}
                                    alt={item.alt}/>
                            </button>
                            <p className={`text-${pathname === item.pathname ? 'orange' : '[#B8B8B8]'}`}>{item.text}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Index;
