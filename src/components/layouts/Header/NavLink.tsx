import React, {FC} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

interface INavLink {
    href : string;
    children : Element
}

const NavLink : FC<INavLink> = ({href , children}) => {
    const {pathname} = useRouter();
    const handleActiveLink =()=> pathname === href ? 'sitemap-navigation__brand__nav__active' : ""

        return(
            <li className={handleActiveLink()}>
                <Link href={href}>{children}</Link>
            </li>)
};

export default NavLink;