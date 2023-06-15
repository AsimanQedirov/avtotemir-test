import React from 'react';
import styles from './SparePart.module.scss'
import Image from "next/image";
import example from '@/assets/images/sparePartExample.png';
import positionSettings from '@/assets/icons/home/positionSettings.svg';
import brand from '@/assets/icons/home/brand.svg';
import store from '@/assets/icons/home/store.svg';
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
                <h5 className={styles.card__cardBody__title}>Kondisioner filteri - Original</h5>
                <div className={styles.card__cardBody__content}>
                    <Image src={positionSettings} alt={'Settings'}/>
                    <h5>Ehtiyat hissələri</h5>
                </div>
                <div className={styles.card__cardBody__content}>
                    <Image src={brand} alt={'Settings'}/>
                    <h5>Hyundai</h5>
                </div>
                <div className={styles.card__cardBody__content}>
                    <Image src={store} alt={'Settings'}/>
                    <h5>Şərq Motors ehtiyat hissələri</h5>
                </div>
            </div>
            <div className={styles.card__cardFooter}>
                <p>Qiymət:</p>
                <span className={styles.card__cardFooter__price}>Razılaşma yolu ilə</span>
            </div>
        </div>
    );
};

export default Index;