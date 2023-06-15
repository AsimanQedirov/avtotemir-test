import React, {useEffect} from 'react';
import PageTitle from "@/components/common/PageTitle";
import NewsCard from "@/components/news/NewsCard";
import newsIcon from '@/assets/icons/news/document-text.svg';
import {getList} from "@/services/news";
const News = () => {

    useEffect(()=>{
       getList()
           .then(res => {
               console.log(res)
           })
    },[]);

    return (
        <>
           <PageTitle title={'Xəbərlər'} iconSrc={newsIcon} />
            <div className={'grid sm:grid-cols-2 gap-3 my-3'}>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
        </>
    );
};
export default News;

// export const getServerSideProps = async ({req ,res})=>{
//
//     const response = await getList();
//
//     console.log(response)
//     return {
//         props :{}
//     }
// }
