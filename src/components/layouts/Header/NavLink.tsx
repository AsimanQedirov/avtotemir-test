import React, {FC, useMemo} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {ILinks} from "@/components/layouts/Header/types";
import {round} from "@mantine/core/lib/ColorPicker/converters/parsers";

const NavLink = () => {

    const {pathname} = useRouter();

    console.log(pathname)
    const handleActiveLink =(href : string)=> pathname === href ? 'sitemap-navigation__brand__nav__active' : ""


    return (
        <ul>
            <li className={handleActiveLink('/')}>
                <Link href={'/'}>Ustalar</Link>
            </li>
            <li className={handleActiveLink('/')}>
                <Link href={'/'}>Mağazalar</Link>
            </li>
            <li className={handleActiveLink('/')}>
                <Link href={'/'}>Avtoservislər</Link>
            </li>
            <li className={handleActiveLink('/news')}>
                <Link href={'/news'}>Xəbərlər</Link>
            </li>
            <li className={handleActiveLink('/')}>
                <Link href={'/'}>Videolar</Link>
            </li>
            <li className={handleActiveLink('/')}>
                <Link href={'/'}>Vakansiyalar</Link>
            </li>
        </ul>
    );
};

export default NavLink;