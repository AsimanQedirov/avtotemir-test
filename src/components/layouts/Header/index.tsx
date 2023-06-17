import React from 'react';
import Link from "next/link";
import Image from "next/image";
import lightModeIcon from '@/assets/icons/light-mode.svg';
import Logo from '@/assets/images/logo.svg';
import callReceived from '@/assets/icons/call-received.svg';
import sms from '@/assets/icons/sms.svg';
import TranslateDropDown from "../../common/TranslateDropDown";
import ResponsiveMenu from "@/components/layouts/ResponsiveMenu";
import NavLink from "@/components/layouts/Header/NavLink";
import Auth from "@/components/auth";

const Index = () => {

    return (
        <>
            <div className={"responsive-header"}>
                <div className="responsive-header__callme">
                    <Image src={Logo} alt={"Avtotemir.az Logo"}/>
                    <div className="responsive-header__callme__phone">
                        <p>zeng et</p>
                        <p>050 505 55 25</p>
                    </div>
                </div>
                <div className="responsive-header__email">
                    <Image src={callReceived} alt={"Avtotemir.az Logo"}/>
                    <span className={"responsive-header__email__horizontal"}></span>
                    <div className="responsive-header__email__info">
                        <p>bize yaz</p>
                        <p>info@avtotemir.az</p>
                    </div>
                    <Image src={sms} alt={"Avtotemir.az Logo"}/>
                </div>
            </div>
            <header>
                <div className="account-navbar-container">
                    <div className="account-navbar">
                        <nav>
                            <ul>
                                <li><Link href="">Haqqımızda</Link></li>
                                <li><Link href="">Əlaqə</Link></li>
                                <li><Link href="">Gizlilik və qaydalar</Link></li>
                            </ul>
                        </nav>
                        <div className="account-navigation">
                            <>
                                <button className={"account-navigation__theme-button"}>
                                    <Image
                                        src={lightModeIcon}
                                        width={16}
                                        height={16}
                                        alt={'Theme icon'}
                                    />
                                </button>
                                <span className="account-navigation__horizontal-line hidden sm:block"></span>
                                <Auth/>
                                <span className="account-navigation__horizontal-line"></span>
                                <TranslateDropDown/>
                            </>
                            <ResponsiveMenu/>
                        </div>
                    </div>
                </div>
                <div className={"sitemap-navigation"}>
                    <div className="sitemap-navigation__brand">
                        <div className="sitemap-navigation__brand__nav">
                                <Link href="/">
                                    <a>
                                        <Image src={Logo} alt={"Avtotemir.az Logo"}/>
                                    </a>
                                </Link>
                                <NavLink/>
                        </div>
                        <div>
                            <ul>
                                <li><Link href="">Klublar</Link></li>
                                <li><Link href="">Ehtiyat hissələri</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Index;
