import React from 'react';
import styles from './NewsDetail.module.scss'
import Image from "next/image";
import example from '@/assets/images/newdetail.png';
import calendar from '@/assets/icons/news/calendar.svg';
import eye from '@/assets/icons/news/eye.svg';
import {Divider} from "@mantine/core";
const Index = () => {
    return (
        <>
            <Divider/>
            <div className={styles.image}>
                <Image src={example} layout={"fill"} alt={'NewsDetail'} objectFit={'cover'} objectPosition={'center'}/>
            </div>
            <div className={styles.content}>
                <div className={styles.content__title}>
                    <h5>Bakıya və Abşerona qar yağacaq - XƏBƏRDARLIQ</h5>
                    <div className={styles.content__title__date}>
                        <span>
                            <Image width={22} height={22} src={calendar} alt={'calendar'}/>
                            25. 11. 2022
                        </span>
                        <span>
                            987
                            <Image width={22} height={22} src={eye} alt={'eye'}/>
                        </span>
                    </div>
                </div>
                <div className={styles.content__text}>
                    <p>
                        Bakıda və Abşeron yarımadasında bir neçə gün davam edən mülayim, isti hava şəraitindən sonra yanvarın 8-dən başlayaraq havanın dəyişəcəyi, arabir yağıntılı olacağı, bəzi yerlərdə sulu qar, qar yağacağı gözlənilir.
                        Bunu 1news.az-a açıqlamasında Hidrometeoroloji Proqnozlar Bürosunun direktoru Gülşad Məmmədova bildirib.
                        O qeyd edib ki, şimal-şərq küləyi ayın 7-si axşamdan 8-i gündüzədək yarımadanın bəzi yerlərində arabir güclənəcək. Havanın temperaturu ötən günlərlə müqayisədə 10-12 dərəcə enərək, yanvarın 10-11-də gecə 2 dərəcəyədək şaxta, gündüz 0 dərəcəyə yaxın olacaq.
                        “Azərbaycanın şimal və qərb rayonlarından başlayaraq yanvarın 7-si axşamdan ayın 12-dək ölkə ərazisində havanın dəyişəcəyi, arabir yağıntılı olacağı, bəzi yerlərdə sulu qar, qar yağacağı, ayrı-ayrı yerlərdə intensivləşəcəyi gözlənilir”.
                        G.Məmmədova qeyd edib ki, qərb küləyi bəzi yerlərdə arabir güclənəcək. Havanın temperaturu ötən günlərlə müqayisədə 10-12 dərəcə enərək, gecə 0-5 dərəcə şaxta, gündüz 4 dərəcəyədək isti, dağlıq rayonlarda isə gecə 10-15, gündüz 5-8 dərəcə şaxta olacaq. Gözlənilən yağıntılı və şaxtalı hava şəraiti ilə əlaqədar yolların buz bağlama ehtimalı var.

                        Avtotemir.az tərəfindən tövsiyyə olunur:

                        - Yağıntılı havada və yollar buz bağladıqda avtomobili aşağı sürətlə idarə edin.
                        - Avtomobilinizdə qış təkərlərinə keçid edin
                        - Soyutma sistemində antifriz səviyyəsini yoxlayın
                        - Şüşəsilənlərini yoxlayın (Lazım gəldikdə dəyişdirin)
                        - Əyləc sistemini yoxlayın
                        - Vacib bir işiniz olmadıqda avtomobil istifadə etməkdən imtina edin
                    </p>
                </div>
                <div className={styles.content__tags}>
                    <span>Hava</span>
                    <span>Kulek</span>
                    <span>Avtotemir</span>
                    <span>Hava</span>
                    <span>Usta</span>
                    <span>Usta</span>
                </div>
                <Divider/>
            </div>
        </>
    );
};

export default Index;