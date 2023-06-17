import React from 'react';
import NavigatePageTitle from "@/components/common/NavigatePageTitle";
import autoServices from "@/assets/icons/pageBreadCrumb/autoServices.svg";
import MasterCard from "@/components/main/Masters/MasterCard";
import AutoServiceCard from "@/components/main/AutoServices/AutoServiceCard";

const Index = () => {
    return (
        <div className={'mt-3'}>
                <NavigatePageTitle
                    to={'/'} title={'Avtoservislər'}
                    iconSrc={autoServices} buttonTitle={'Hamısını göstər'}/>
                <div className={'grid sm:grid-cols-4 grid-cols-2 gap-gap10 mt-3'}>
                    <AutoServiceCard/>
                    <AutoServiceCard/>
                    <AutoServiceCard/>
                    <AutoServiceCard/>
                    <AutoServiceCard/>
                    <AutoServiceCard/>
                    <AutoServiceCard/>
                    <AutoServiceCard/>
                </div>
        </div>
    );
};

export default Index;