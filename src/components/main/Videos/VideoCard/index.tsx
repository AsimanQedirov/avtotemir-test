import React, {FC} from 'react';
import styles from './Video.module.scss'
import Image from "next/image";
import example from "@/assets/images/store_example.png";
import calendar from '@/assets/icons/news/calendar.svg';
import playIcon from '@/assets/icons/videos/playIcon.svg';
import {IVideoCard} from "@/components/main/Videos/VideoCard/types";

const Index : FC<IVideoCard> = ({popup}) => {

    return (
        <div className={styles.card}>
            <div className={styles.card__imageBody}>
                <Image src={example}
                       layout="fill"
                       objectFit={'cover'}
                       alt={'Example'} />
                <div className={styles.card__imageBody__playIcon}>
                    <Image src={playIcon} alt={'PlayIcon'}/>
                </div>
            </div>
            <div className={styles.card__cardBody}>
                <h5>
                    Az xərclə mühərrikin performansı daha da artdı
                </h5>
                <span>
                    <Image src={calendar} alt={'calendar'}/> 12.22.2022
                </span>
            </div>
        </div>
    );
};

export default Index;