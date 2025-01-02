export interface navLinksTip {
    title: string;
    path: string;
    pathChild?: {
        title: string;
        path: string;
        img: any;
    }[];
}

import Hotİmg from "../assets/hots.jpg";
import Sweetsİmg from "../assets/sweets.jpg";
import abouteUs1İmg from "../assets/abouteUs1.jpg";
import abouteUs2İmg from "../assets/abouteUs2.jpg";
import abouteUs3İmg from "../assets/abouteUs3.jpg";


type Language = 'en' | 'az'; 

export const navLinks: Record<Language, navLinksTip[]> = {
    en: [
        {
            title: "Menu",
            path: "/menu",
            pathChild: [
                {
                    title: "Hot & Cold Drinks ",
                    path: "/hot-cold-drinks",
                    img: Hotİmg
                },
                {
                    title: "Sweets & Snacks ",
                    path: "/sweets-snacks",
                    img: Sweetsİmg
                }
            ],
        },
        {
            title: "Location Finder",
            path: "/location-finder",
        },
        {
            title: "About Us",
            path: "/about-us",
            pathChild: [
                {
                    title: "Our İdeas ",
                    path: "/our-ideas",
                    img: abouteUs1İmg
                },
                {
                    title: "Our Worldwide Network ",
                    path: "/our-worldwide-network",
                    img: abouteUs2İmg
                },
                {
                    title: "Franchising ",
                    path: "/franchising",
                    img: abouteUs3İmg
                }
            ],
        },
        {
            title: "Stories",
            path: "/stories",
        },
        {
            title: "Franchising",
            path: "/franchising",
        },
        {
            title: "Jobs",
            path: "/jobs",
        }
    ],
    az: [
        {
            title: "Menyu",
            path: "/menu",
            pathChild: [
                {
                    title: "İsti və Soyuq İçkilər ",
                    path: "/hot-cold-drinks",
                    img: Hotİmg
                },
                {
                    title: "Şirniyyat və Qəlyanaltılar ",
                    path: "/sweets-snacks",
                    img: Sweetsİmg
                }
            ]
        },
        {
            title: "Məkan Axtarışı",
            path: "/location-finder",
        },
        {
            title: "Haqqımızda",
            path: "/about-us",
        },
        {
            title: "Hekayələr",
            path: "/stories",
        },
        {
            title: "Françayzinq",
            path: "/franchising",
        },
        {
            title: "İşlər",
            path: "/jobs",
        }
    ]
};
