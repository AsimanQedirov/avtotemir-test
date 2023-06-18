import React, {FC, memo, useEffect, useState} from 'react';
import rateIcon from '@/assets/icons/home/rate.svg';
import Image from "next/image";
import styles from "@/components/clubs/ClubDetail/ClubDetail.module.scss";
interface IRates{
    defaultRates : number;
    currentRates : number;
    vote : number
}
const Rates : FC<IRates> = memo(function Rates({defaultRates,currentRates , vote}) {
    let rates : Array<number> = [];
    rates = Array(defaultRates).fill(defaultRates);
console.log('rendered')
    return (
        <div className={`flex gap-gap10`}>
            {
                rates.map((_ , index)=>
                    <a key={index} className={'cursor-pointer'}>
                        <Image
                            src={rateIcon}
                            style={{
                                opacity : index >= currentRates ? 0.5 :1
                            }}
                            alt={'rateIcon'}/>
                    </a>)
            }
            - <span className="text-grey text-text14 font-600">{vote} səs</span>
        </div>
    );
});

export default Rates;