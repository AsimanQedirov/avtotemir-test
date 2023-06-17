import React from 'react';
import styles from './MasterCard.module.scss'
import Image from "next/image";
import example from '@/assets/images/exampleMaster.svg';
import positionSettings from '@/assets/icons/home/positionSettings.svg';
import brand from '@/assets/icons/home/brand.svg';
import location from '@/assets/icons/home/location.svg';
import rate from '@/assets/icons/home/rate.svg'
const Index = () => {
    const ratings = 3;
    return (
        <div className={styles.card}>
            <div className={styles.card__imageBody}>
                <Image src={example}
                       layout="fill"
                       objectFit={'cover'}
                       alt={'Example'} />
            </div>
            <div className={styles.card__cardBody}>
                <h5 className={styles.card__cardBody__title}>Ramil Qarayev</h5>
                <div className={styles.card__cardBody__position}>
                    <h5>Dəmirçi</h5>
                    <Image src={positionSettings} alt={'Settings'}/>
                </div>
                <div className={styles.card__cardBody__brand}>
                    <h5>Bütün markalar</h5>
                    <Image src={brand} alt={'Settings'}/>
                </div>
                <div className={styles.card__cardBody__brand}>
                    <h5>Bakı, Binəqədi</h5>
                    <Image src={location} alt={'Settings'}/>
                </div>
            </div>
            <div className={styles.card__cardFooter}>
               <div className={styles.card__cardFooter__rates}>
                   {
                       [0,0,0,0,0].map((_ , index)=>
                           <Image style={{
                               opacity : index >= ratings ? 0.3:1
                           }} key={index} src={rate} alt={'Rate'}/>)
                   }
               </div>
                <span>
                    500 səs
                </span>
            </div>
        </div>
    );
};

export default Index;