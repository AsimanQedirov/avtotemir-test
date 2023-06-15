import React from 'react';
import styles from './SearchBar.module.scss'
import Image from "next/image";
import callReceived from "@/assets/icons/call-received.svg";
import sms from "@/assets/icons/sms.svg";
import {Select} from "@mantine/core";
import arrowDown from '@/assets/icons/arrow-down-black.svg';
import searchZoom from '@/assets/icons/search-zoom.svg';

const Index = () => {
    return (
        <div className={styles.searchbar}>
            <div className={styles.searchbar__searchBox}>
                <Select
                    className={styles.searchbar__searchBox__selectbox}
                    placeholder="Kateqoriya seç"
                    rightSection={<Image src={arrowDown} className={'mt-1'} alt={'arrow-down'}/>}
                    rightSectionWidth={20}
                    styles={{rightSection: {pointerEvents: 'none'}}}
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                />
                <form className={styles.searchbar__searchBox__form}>
                    <input placeholder={"Buradan axtar..."}/>
                    <button>
                        Axtar
                        <Image src={searchZoom} alt={'search zoom'} className={'ml-[7px]'}/>
                    </button>
                </form>
            </div>
            <div className={styles.searchbar__info}>
                <div className={styles.searchbar__info__callme}>
                    <div className={styles.searchbar__info__callme__phone}>
                        <p>zeng et</p>
                        <p>050 505 55 25</p>
                    </div>
                </div>
                <div className={styles.searchbar__info__email}>
                    <Image src={callReceived} alt={"Avtotemir.az Logo"}/>
                    <span className={styles.searchbar__info__email__horizontal}></span>
                    <div className={styles.searchbar__info__email__info}>
                        <p>bize yaz</p>
                        <p>info@avtotemir.az</p>
                    </div>
                    <Image src={sms} alt={"Avtotemir.az Logo"}/>
                </div>
            </div>
        </div>
    );
};

export default Index;
