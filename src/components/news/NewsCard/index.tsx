import React from 'react';
import styles from './NewsCard.module.scss'
import Image from "next/image";
import NewsCardSrc from '@/assets/images/news_card_test.png';
import calendar from '@/assets/icons/news/calendar.svg';
import eye from '@/assets/icons/news/eye.svg'
import Link from "next/link";
const Index = () => {
    return (
        <Link href={`/news/3`}>
            <div className={styles.card}>
                <div className={styles.card__image}>
                    <Image
                        src={NewsCardSrc}
                        layout="fill"
                        alt={'Image card'}/>
                </div>
                <div className={styles.card__body}>
                    <div className={styles.card__body__summary}>
                        <h5>Yanvarın 1-dən dövlət köhnə maşınları
                            almağa başlayır</h5>
                        <p>Azərbaycanda avtomobil parkı yenilənəcək, istismar müddətini başa vuran avtomobillər isə utilizasiyaya
                            göndəriləcək. Bunun əvəzində vətəndaşlara yeni avtomobillər almaları...</p>
                    </div>
                    <div className={styles.card__body__publishedBody}>
                        <span>
                        <Image src={calendar} alt={'Calendar'}/> 22.22.2222
                        </span>
                        <span> 234 <Image src={eye} alt={'eye'}/></span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Index;