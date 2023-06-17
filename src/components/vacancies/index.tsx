import React from 'react';
import styles from './Vacancy.module.scss';
import VacancieCard from "@/components/vacancies/VacancyCard";
import postCv from '@/assets/icons/vacancie/postcv.svg';
import searchAnnouncement from '@/assets/icons/vacancie/search-zoom-in.svg';
import Image from "next/image";
const Index = () => {
    return (
        <div className={"my-3"}>
            <div className={styles.header}>
                <div className={'flex gap-gap5'}>
                    <a className={styles.header__searchAnnouncement}>
                        Usta axtarıram <Image src={searchAnnouncement} alt={'post add'}/>
                    </a>
                    <a className={styles.header__searchAnnouncement}>
                        Tələbə axtarıram <Image src={searchAnnouncement} alt={'post add'}/>
                    </a>
                </div>
               <a className={styles.header__postCv}>
                   İş elanı yerləşdir <Image src={postCv} alt={'post add'}/>
               </a>
            </div>
            <div className={styles.content}>
                <div className={styles.content__title}>
                    <h5>İş elanları</h5>
                    <span>2343 iş elanı</span>
                </div>
                <div className={styles.content__cards}>
                    <VacancieCard/>
                    <VacancieCard/>
                    <VacancieCard/>
                    <VacancieCard/>
                    <VacancieCard/>
                    <VacancieCard/>
                </div>
            </div>
        </div>
    );
};

export default Index;