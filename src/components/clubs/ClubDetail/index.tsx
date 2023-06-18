import React, {useState} from 'react';
import styles from './ClubDetail.module.scss';
import Rates from "@/components/ui/Rates";
import Eye from "@/components/ui/Eye";
import Image from "next/image";
import pinIcon from '@/assets/icons/pin.svg';
import example from '@/assets/images/club_example.png';
import facebook from '@/assets/icons/socials/facebook.svg';
import whatsapp from '@/assets/icons/socials/whatsapp.svg';
import twitter from '@/assets/icons/socials/twitter.svg';
import telegram from '@/assets/icons/socials/telegram.svg';
import instagram from '@/assets/icons/socials/instagram.svg';
import linkedin from '@/assets/icons/socials/linkedin.svg';
import youtube from '@/assets/icons/socials/youtube.svg';
import {Divider} from "@mantine/core";
const Index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__title}>
                <h5>BMW Club Baku</h5>
                <div className={styles.container__title__rate}>
                    <Rates defaultRates={5} currentRates={5} vote={500}/>
                     <Eye count={957}/>
                </div>
            </div>
            <div className={styles.container__content}>
                <div className={styles.container__content__about}>
                    <a><Image src={pinIcon} alt={'Pin icon'}/> Səhifəyə keç </a>
                    <h5>Haqqında</h5>
                    <div>
                        Bakı şəhərinin ən böyük və ən köhnə avtomobil klubu olan BMW Club Baku 2009-cu ildən BMW ailəsi
                        üçün xidmət göstərir. Bizim məqsədimiz bütün BMW sevənləri bir araya toplamaq və bütün dünyada
                        olduğu kimi Azərbaycandada festifallar və drift şouların təşkil olunmasıdır.Bununla yanaşı
                        avtomobil dünyasındakı bütün xidmətləri və yenilikləri əlçatan etmək, yeni BMW pilotlarının
                        avtomobillə bağlı hər hansı bir suallarını və nasazlığı haqqında məlumat almağı düzgün
                        yönləndirməkdir. Belə bir deyimdə varki: dünyada iki cür avtomobil vardır. BMW və digərləri
                        BMW markası xüsusi diqqət cəlb edən və qayğı tələb edən avtomobildir. Mənim fikirimcə pilotlarda
                        xüsusi diqqətə layiqdirlər. BMW ailəsi olmanın üstün səbəbləri:

                        Servislərin avtomobilin təmiri,Yağ dəyişməsi zamanı və ehtiyat hissənin alınmasında xüsusi endirimləri.
                        Pilotlara əyləncə və restoranlarda xüsusi endirim.
                        Geyim butiklərində xüsusi endirim və.s BMW Club Baku qurucusu Məmmədov Elvin.
                    </div>
                </div>
                <div className={styles.container__content__giveVoice}>
                    <div className={styles.container__content__giveVoice__image}>
                        <Image
                            layout={'fill'}
                            objectPosition={'center'}
                            objectFit={'contain'}
                            src={example} alt={'Example'}/>
                    </div>
                    <div className={styles.container__content__giveVoice__voice}>
                        <Rates defaultRates={5} currentRates={3} vote={600}/>
                    </div>
                </div>
            </div>
            <div className={styles.container__share}>
                <h5>Paylaş:</h5>
                <div className={'flex gap-gap20 mt-2'}>
                    <a><Image src={facebook} alt={'Facebook'}/></a>
                    <a><Image src={instagram} alt={'Instagram'}/></a>
                    <a><Image src={whatsapp} alt={'Whatsapp'}/></a>
                    <a><Image src={telegram} alt={'Telegram'}/></a>
                    <a><Image src={linkedin} alt={'Linkedin'}/></a>
                    <a><Image src={twitter} alt={'Twitter'}/></a>
                </div>
            </div>
            <Divider/>
            <div className={styles.container__presentation}>
                <h5><Image src={youtube} alt={'youtube'} /> Təqdimat videosu </h5>
                <div className={styles.container__presentation__videoIframe}>
                    <iframe src="https://www.youtube.com/embed/elv8n3czS94">
                    </iframe>
                </div>
                <Divider/>
            </div>
        </div>
    );
};

export default Index;