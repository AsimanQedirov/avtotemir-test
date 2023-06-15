import React from 'react';
import styles from './Tabs.module.scss'
import Image from "next/image";
import tagUser from '@/assets/icons/tag-user.svg';
import tagShop from '@/assets/icons/tag-shop.svg';
import tagDriving from '@/assets/icons/tag-driving.svg';
import tagBookSaved from '@/assets/icons/tag-book-saved.svg';
import tagBriefCase from '@/assets/icons/tag-briefcase.svg';
const Index = () => {
    return (
       <>
           <div className={styles.tabs}>
               <div className={styles.tabs__items}>
                   <Image src={tagUser} alt={'tagUser'}/>
                   <div className={styles.tabs__items__content}>
                       <h4>Ustalar</h4>
                       <span>500+</span>
                   </div>
               </div>
               <div className={styles.tabs__items}>
                   <Image src={tagShop} alt={'tagShop'}/>
                   <div className={styles.tabs__items__content}>
                       <h4>Mağazalar</h4>
                       <span>500+</span>
                   </div>
               </div>
               <div className={styles.tabs__items}>
                   <Image src={tagDriving} alt={'tagDriving'}/>
                   <div className={styles.tabs__items__content}>
                       <h4>Avtoservislər</h4>
                       <span>500+</span>
                   </div>
               </div>
               <div className={styles.tabs__items}>
                   <Image src={tagBookSaved} alt={'tagBookSaved'}/>
                   <div className={styles.tabs__items__content}>
                       <h4>Avtoxəbərlər</h4>
                       <span>500+</span>
                   </div>
               </div>
               <div className={styles.tabs__items}>
                   <Image src={tagBriefCase} alt={'tagBookSaved'}/>
                   <div className={styles.tabs__items__content}>
                       <h4>Vakansiyalar</h4>
                       <span>500+</span>
                   </div>
               </div>
           </div>
           <hr/>
       </>
    );
};

export default Index;
