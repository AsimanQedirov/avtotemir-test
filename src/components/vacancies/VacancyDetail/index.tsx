import React from 'react';
import styles from './VacancyDetail.module.scss';
import Image from "next/image";
import backIcon from '@/assets/icons/vacancie/back.svg';
import sendCv from '@/assets/icons/vacancie/send-cv.svg';

import {useRouter} from "next/router";
import {Divider} from "@mantine/core";

const Index = () => {
    const router = useRouter();
    const handleBack = () => router.back();

    return (
        <>
            <div className={styles.backHeader}>
                    <a
                        className={styles.backHeader__backButton}
                        onClick={handleBack}><Image src={backIcon} alt={'BackIcon'}/> Geriyə</a>
            </div>
            <div className={styles.backHeader__content}>
                <div className={styles.backHeader__content__header}>
                    <h5>Slesar (çilingər)</h5>
                    <button>
                        <Image src={sendCv} alt={'sendcv'}/> CV göndər
                    </button>
                </div>
                <Divider className={'my-3'}/>
                <div className={styles.backHeader__content__summary}>
                    <div>
                        <h5>İşə götürən :</h5>
                        <p>Eli</p>
                    </div>
                    <div>
                        <h5>Əmək haqqı :</h5>
                        <p>Razılaşma yolu ilə</p>
                    </div>
                    <div>
                        <h5>Telefon :</h5>
                        <p>+(994 77) 345 00 46</p>
                    </div>
                    <div>
                        <h5>Email adres :</h5>
                        <p>alina@code.edu.az</p>
                    </div>
                </div>
                <div className={styles.backHeader__content__description}>
                    <h5>İş barədə məlumat :</h5>
                    <p>Tim Brown sums up that design thinking provides a third way to look at problems.
                        It’s essentially a problem-solving approach that has crystallized in the field of design
                        to combine a holistic user-centered perspective with rational and analytical research—all
                        with the goal to create innovative solutions.</p>
                </div>
            </div>

        </>
    );
};

export default Index;