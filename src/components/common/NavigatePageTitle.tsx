import React, {FC} from 'react';
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
interface NavigatePageTitle extends PageTitle{
    to : string;
    buttonTitle : string;
}
const NavigatePageTitle : FC<NavigatePageTitle> = ({title,iconSrc,to,buttonTitle}) => {
    return (
        <div className={'flex justify-between items-center gap-[20px]'}>
            <PageTitle title={title} iconSrc={iconSrc}/>
            {<Link href={'/sa'}>
                <a className={`bg-black 
               text-white text-[12px]
                text-center 
                w-[213px] py-[12px]
                 rounded-b10
                `}>{buttonTitle}</a></Link>}
        </div>
    );
};

export default NavigatePageTitle;