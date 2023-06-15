import React, {useCallback, useState} from 'react';
import Image from "next/image";
import hamburgerMenu from "@/assets/icons/hamburger-menu.svg";

const ResponsiveMenu = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = useCallback(() => {
        setOpen(!open);
    }, [])
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
                    <div className="bg-white w-full h-[96%] w-[92%] mt-2 m-auto overflow-y-auto p-2 rounded-lg">
                        <ul>

                        </ul>
                    </div>
            </div>
        </>
    );
};

export default ResponsiveMenu;
