import React from 'react';
import styles from './AutoService.module.scss'
import Image from "next/image";
import example from '@/assets/images/exampleMaster.svg';
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
                <h5 className={styles.card__cardBody__title}>Avtotemir.az Yağlama Mərkəzi (Yasamal)</h5>
                <div className={styles.card__cardBody__location}>
                    <Image src={location} alt={'Settings'}/>
                    <h5>Bakı, Binəqədi</h5>
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