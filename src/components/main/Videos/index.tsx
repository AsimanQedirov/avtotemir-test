import React from 'react';
import NavigatePageTitle from "@/components/common/NavigatePageTitle";
import vipMasterIcon from "@/assets/icons/pageBreadCrumb/VipMastersIcon.svg";
import VideoCard from "@/components/common/VideoCard";

const Index = () => {
    return (
        <div className={'mt-3'}>
            <div className={'sm:col-span-3'}>
                <NavigatePageTitle
                    to={'/'} title={'Videolar'}
                    iconSrc={vipMasterIcon} buttonTitle={'Hamısını göstər'}/>
                <div className={'grid sm:grid-cols-3 grid-cols-none gap-gap10 mt-3'}>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                </div>
            </div>
        </div>
    );
};

export default Index;