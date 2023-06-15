import React from 'react';
import NavigatePageTitle from "@/components/common/NavigatePageTitle";
import sparePartIcon from "@/assets/icons/pageBreadCrumb/sparePartIcon.svg";
import SparePartCard from "@/components/common/SparePartCard";

const Index = () => {
    return (
        <div className={'mt-3'}>
            <NavigatePageTitle
                to={'/'} title={'Kondisioner filteri - Original'}
                iconSrc={sparePartIcon} buttonTitle={'Daha çox'}/>
            <div className={'grid sm:grid-cols-4 grid-cols-2 gap-gap10 mt-3'}>
                <SparePartCard/>
                <SparePartCard/>
                <SparePartCard/>
                <SparePartCard/>
                <SparePartCard/>
                <SparePartCard/>
                <SparePartCard/>
                <SparePartCard/>
            </div>
        </div>
    );
};

export default Index;