import navigationHomeLight from "@/assets/icons/navigation-home-light.svg";
import navigationHomeDark from "@/assets/icons/navigation-home-dark.svg";
import navigationSearchLight from "@/assets/icons/navigation-search-light.svg";
import navigationSearchDark from "@/assets/icons/navigation-search-dark.svg";
import navigationMasterLight from "@/assets/icons/navigation-master-light.svg";
import navigationMasterDark from "@/assets/icons/navigation-master-dark.svg";
import navigationCarLight from "@/assets/icons/navigation-car-light.svg";
import navigationCarDark from "@/assets/icons/navigation-car-dark.svg";
import navigationStoreLight from "@/assets/icons/navigation-store-light.svg";
import navigationStoreDark from "@/assets/icons/navigation-store-dark.svg";
import navigationProfileDark from "@/assets/icons/navigation-profile-dark.svg";

export interface INavigations {
    pathname: string,
    iconLight: string,
    iconDark: string,
    alt: string,
    text: string
}

const navigations: Array<INavigations> = [{
    pathname: "/",
    iconLight: navigationHomeLight,
    iconDark: navigationHomeDark,
    alt: 'Home',
    text: 'Ana səhifə'
}, {
    pathname: "/search",
    iconLight: navigationSearchLight,
    iconDark: navigationSearchDark,
    alt: 'Search',
    text: 'Axtarış'
}, {
    pathname: "/masters",
    iconLight: navigationMasterLight,
    iconDark: navigationMasterDark,
    alt: 'Master',
    text: 'Ustalar'
}, {
    pathname: "/services",
    iconLight: navigationCarLight,
    iconDark: navigationCarDark,
    alt: 'Services',
    text: 'Servislər'
}, {
    pathname: "/stores",
    iconLight: navigationStoreLight,
    iconDark: navigationStoreDark,
    alt: 'StoreCard',
    text: 'Mağazalar'
}, {
    pathname: "/profile",
    iconLight: navigationProfileDark,
    iconDark: navigationProfileDark,
    alt: 'Profile',
    text: 'Profil'
}]
export default navigations
