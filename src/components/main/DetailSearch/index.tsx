import React from 'react';
import NavigatePageTitle from "@/components/common/NavigatePageTitle";
import masterIcon from '@/assets/icons/pageBreadCrumb/masterIcon.svg'
import DetailSearch from "@/components/main/DetailSearch/index";
import SearchBar from "@/components/main/DetailSearch/SearchBar";
import MasterCard from "@/components/main/Masters/MasterCard";
const Index = () => {
    return (
        <div className={'sm:grid sm:grid-cols-4 gap-gap20 mt-3'}>
            <div className={'hidden sm:block'}>
                <div className={`bg-white h-[40px] p-[10px] font-[16px] rounded-[10px]
                 flex items-center font-semibold w-full`}>
                    Ümumi axtarış
                </div>
                <SearchBar/>
            </div>
            <div className={'sm:col-span-3'}>
                <NavigatePageTitle
                    to={'/'} title={'Premium ustalar'}
                    iconSrc={masterIcon} buttonTitle={'Hamısını göstər'}/>
               <div className={'grid sm:grid-cols-3 grid-cols-2 gap-gap10 mt-3'}>
                   <MasterCard/>
                   <MasterCard/>
                   <MasterCard/>
                   <MasterCard/>
                   <MasterCard/>
                   <MasterCard/>
                   <MasterCard/>
                   <MasterCard/>
                   <MasterCard/>
               </div>
            </div>
        </div>
    );
};

export default Index;