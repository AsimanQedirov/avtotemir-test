import React from 'react';
import NavigatePageTitle from "@/components/common/NavigatePageTitle";
import vipMasterIcon from "@/assets/icons/pageBreadCrumb/VipMastersIcon.svg";
import MasterCard from "@/components/common/MasterCard";

const Index = () => {
    return (
        <div className={'mt-3'}>
            <div className={'sm:col-span-3'}>
                <NavigatePageTitle
                    to={'/'} title={'VİP ustalar'}
                    iconSrc={vipMasterIcon} buttonTitle={'Hamısını göstər'}/>
                <div className={'grid sm:grid-cols-4 grid-cols-2 gap-gap10 mt-3'}>
                    <MasterCard/>
                    <MasterCard/>
                    <MasterCard/>
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