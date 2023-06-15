import React, {FC} from 'react';
import Image from "next/image";

export interface PageTitle{
    title : string;
    iconSrc : string;
}

const PageTitle : FC<PageTitle> = ({title,iconSrc}) => {
    return (
        <div
            className={`bg-white h-[40px] p-[10px] text-[#818181] font-[16px] rounded-[10px] flex items-center font-semibold w-full`}>
            <span className={'bg-black w-[22px] h-[22px] rounded-md mr-2 flex items-center justify-center'}>
            <Image src={iconSrc} alt={`${title}`}/>
            </span>
            <h2>{title}</h2>
        </div>
    );
};

export default PageTitle;