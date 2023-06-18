import React from 'react';
import styles from "./ClubCard.module.scss";
import Image from "next/image";
import example from "@/assets/images/club_example.png";
import eye from "@/assets/icons/news/eye.svg";
import rate from "@/assets/icons/home/rate.svg";
import Link from "next/link";

const Index = () => {
    return (
       <Link href={`/clubs/2`}>
           <div className={styles.card}>
               <div className={styles.card__imageBody}>
                   <Image src={example}
                          layout="fill"
                          objectFit={'contain'}
                          alt={'Example'} />
               </div>
               <div className={styles.card__cardBody}>
                   <h5 className={styles.card__cardBody__title}>Avtotemir.az Yağlama Mərkəzi (Yasamal)</h5>

                   <div className={styles.card__cardBody__eye}>
                       <Image src={eye} alt={'Settings'}/>
                       <span>987</span>
                   </div>
               </div>
               <div className={styles.card__cardFooter}>
                   <div className={styles.card__cardFooter__rates}>
                       {
                           [0,0,0,0,0].map((_ , index)=>
                               <Image style={{
                                   // opacity : index >= ratings ? 0.3:1
                               }} key={index} src={rate} alt={'Rate'}/>)
                       }
                   </div>
                   <span>
                    500 səs
                </span>
               </div>
           </div>
       </Link>
    );
};

export default Index;