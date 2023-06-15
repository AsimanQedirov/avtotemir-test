import React from 'react';
import styles from './Slider.module.scss'
import sliderPrev from '@/assets/icons/slider-prev.svg';
import sliderNext from '@/assets/icons/slider-next.svg';
import Image from "next/image";

const Index = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.slider__arrowButtons}>
                <button className={styles.slider__prevButton}>
                    <Image src={sliderPrev} alt={'slider prev'}/>
                </button>
                <button className={styles.slider__nextButton}>
                    <Image src={sliderNext} alt={'slider next'}/>
                </button>
            </div>
            <div className={styles.slider__item}>
                {/*<Image src={''} alt={}*/}
                <div className={styles.slider__item__content}>
                    <button># Maşın yağları</button>
                    <h2>Uzun yolların təminatı</h2>
                    <p>Uzun yollara cixmaq ve gezmek bu qeder asan olmamishdi .
                        Sende bizim ustalara güvən və etibar et</p>
                </div>
            </div>
        </div>
    );
};

export default Index;
