import type { NextPage } from 'next'
import Slider from "@/components/main/Slider";
import Tabs from "@/components/main/Tabs";
import DetailSearch from "@/components/main/DetailSearch";
import AutoServices from "@/components/main/AutoServices";
import SpareParts from "@/components/main/SpareParts";
import Stores from "@/components/main/Stores";
import NewsContent from "@/components/main/NewsContent";
import VipMasters from "@/components/main/VipMasters";
import Masters from "@/components/main/Masters";
import Videos from "@/components/main/Videos";

const Home: NextPage = () => {
  return (
    <>
        <Slider/>
        <Tabs/>
        <DetailSearch/>
        <AutoServices/>
        <SpareParts/>
        <Stores/>
        <NewsContent/>
        <VipMasters/>
        <Videos/>
        <Masters/>

    </>
  )
}

export default Home
