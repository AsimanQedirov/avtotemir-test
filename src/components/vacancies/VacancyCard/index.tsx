import React from 'react';
import styles from './VacancyCard.module.scss'
import Link from "next/link";
const Index = () => {
    return (
            <div className={styles.card}>
                <div className={styles.card__entry}>
                <span className={styles.card__entry__chapter}>
                Vakansiya adı :
                </span>
                    <span className={styles.card__entry__vacancie}>
                Slesar (çilingər)
                 </span>
                </div>
                <div className={styles.card__entry}>
                <span className={styles.card__entry__chapter}>
               İşə götürən :
                </span>
                    <span className={styles.card__entry__vacancie}>
                C@S avto ehtoyt hissələri
                mağazası. Cavid
                 </span>
                </div>
                <div className={styles.card__entry}>
                <span className={styles.card__entry__chapter}>
               Əmək haqqı :
                </span>
                    <span className={styles.card__entry__vacancie}>
              Ə/H razılaşma yolu ilə
                 </span>
                </div>
               <Link href={'/vacancies/3'}>
                   <a>
                       Ətraflı bax
                   </a>
               </Link>
            </div>
    );
};

export default Index;