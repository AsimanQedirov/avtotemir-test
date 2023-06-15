import React from 'react';
import {Menu} from "@mantine/core";
import AZE from "@/assets/icons/AZE.svg";
import arrowDown from "@/assets/icons/arrow-down.svg";
import ENG from "@/assets/icons/ENG.svg";
import RU from "@/assets/icons/RU.svg";
import Image from "next/image";

const TranslateDropDown = () => {

    return (
        <Menu width={100} shadow="md">
            <Menu.Target>
                <button
                    className={"account-navigation__language-button"}>
                    <Image src={AZE} alt={'AZE'} className={"mr-2"}/>
                    AZE
                    <Image src={arrowDown} alt={'AZE'} className={"ml-2"}/>

                </button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item
                    icon={<Image src={AZE} alt={'AZE'}/>}
                    component="a"
                >
                    AZE
                </Menu.Item>
                <Menu.Item
                    icon={<Image src={ENG} alt={'ENG'}/>}
                    component="a"
                >
                    ENG
                </Menu.Item>
                <Menu.Item
                    icon={<Image src={RU} alt={'RU'}/>}
                    component="a"
                >
                    RU
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};

export default TranslateDropDown;
