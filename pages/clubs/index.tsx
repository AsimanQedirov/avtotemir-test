import React from 'react';
import PageTitle from "@/components/common/PageTitle";
import clubIcon from '@/assets/icons/pageBreadCrumb/autoServices.svg'
import Clubs from "@/components/clubs";
const Index = () => {
    return (
        <div>
            <PageTitle title={'Klublar'} iconSrc={clubIcon}/>
            <Clubs/>
        </div>
    );
};

export default Index;