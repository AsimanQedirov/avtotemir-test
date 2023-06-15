import React from 'react';
import NavigatePageTitle from "@/components/common/NavigatePageTitle";
import documentIcon from "@/assets/icons/news/document-text.svg";
import NewsCard from "@/components/news/NewsCard";

const Index = () => {
    return (
        <div className={'mt-3'}>
            <NavigatePageTitle
                to={'/'} title={'Xəbərlər'}
                iconSrc={documentIcon} buttonTitle={'Hamısını göstər'}/>
            <div className={'grid sm:grid-cols-2 grid-cols-none gap-gap10 mt-3'}>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
        </div>
    );
};

export default Index;