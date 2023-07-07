import React, {useCallback, useState} from 'react';
import Image from "next/image";
import hamburgerMenu from "@/assets/icons/hamburger-menu.svg";
import circleClose from "@/assets/icons/close-circle.svg";
import {Divider} from "@mantine/core";
import NavLink from "@/components/layouts/Header/NavLink";
const ResponsiveMenu = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = ()=> setOpen(!open);

    return (
        <>
            <button className={"block sm:hidden ml-auto"} onClick={toggle}>
                <Image src={hamburgerMenu}
                       width={25}
                       height={25}
                       alt={'Hamburger menu'}/>
            </button>

            <div
                className={`${open ? 'fixed' : 'hidden'} transition-all z-50
                      w-full h-[calc(100vh-120px)] bg-[#B8B8B8]
                      absolute left-0 right-0 bottom-0`}>
                    <div className="bg-white w-full h-[96%] w-[90%] mt-2 m-auto overflow-y-auto p-4 rounded-lg relative">
                        <span className={'absolute top-1.5 right-1.5'}>
                            <Image src={circleClose}
                                   width={25}
                                   height={25}
                                   alt={'Circle close'}/>
                        </span>
                        <h5 className={'text-orange font-semibold'}>Bölmələr</h5>
                        <Divider className={'my-3'}/>
                        <ul>
                            <NavLink href={'/masters'}>Ustalar</NavLink>
                            <NavLink href={'/stores'}>Mağazalar</NavLink>
                            <NavLink href={'/auto-services'}>Avtoservislər</NavLink>
                            <NavLink href={'/news'}>Xəbərlər</NavLink>
                            <NavLink href={'/videos'}>Videolar</NavLink>
                            <NavLink href={'/vacancies'}>Vakansiyalar</NavLink>
                        </ul>
                    </div>
            </div>
        </>
    );
};

export default ResponsiveMenu;
