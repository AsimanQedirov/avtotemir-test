import React from 'react';
import Videos from "@/components/main/Videos";
import {Divider} from "@mantine/core";
import vipMasterIcon from "@/assets/icons/pageBreadCrumb/VipMastersIcon.svg";
import VideoCard from "@/components/main/Videos/VideoCard";
import PageTitle from "@/components/common/PageTitle";

const Index = () => {
    return (
        <div className={'mt-3'}>
            <Divider className={'my-3'}/>
            <PageTitle title={'Videolar'} iconSrc={vipMasterIcon}/>
            <div className={'grid sm:grid-cols-3 grid-cols-none gap-gap10 mt-3'}>
                <VideoCard />
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
    );
};

export default Index;