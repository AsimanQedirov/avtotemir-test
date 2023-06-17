import React from 'react';
import NavigatePageTitle from "@/components/common/NavigatePageTitle";
import shopIcon from "@/assets/icons/pageBreadCrumb/shopIcon.svg";
import StoreCard from "@/components/main/Stores/StoreCard";

const Index = () => {
    return (
        <div className={'mt-3'}>
            <NavigatePageTitle
                to={'/'} title={'Mağazalar'}
                iconSrc={shopIcon} buttonTitle={'Hamısını göstər'}/>
            <div className={'grid sm:grid-cols-4 grid-cols-2 gap-gap10 mt-3'}>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
            </div>
        </div>
    );
};

export default Index;