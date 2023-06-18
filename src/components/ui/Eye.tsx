import React, {FC} from 'react';
import Image from "next/image";
import eye from '@/assets/icons/news/eye.svg';
import {number} from "prop-types";
interface IEye {
    count : number
}
const Eye : FC<IEye> = ({count}) => {
    return (
       <span className={'text-orange flex gap-gap5 text-text14 font-600'}>
           {count} <Image width={22} height={22} src={eye} alt={'Icon'}/>
       </span>
    );
};

export default Eye;