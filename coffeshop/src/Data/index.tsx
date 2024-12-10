export interface navLinksTip {
    title: string;
    path: string;
    pathChild?: navLinksTip[]; // Əgər alt menyular varsa, eyni interfeys istifadə ediləcək
}


type Language = 'en' | 'az'; // Əlavə dillər varsa burada qeyd edə bilərsiniz

export const navLinks: Record<Language, navLinksTip[]> = {
    en: [
        {
            title: "Menu",
            path: "/menu",
            pathChild: [
                {
                    title: "Hot & Cold Drinks ",
                    path: "/hot-cold-drinks"
                },
                {
                    title: "Sweets & Snacks ",
                    path: "/sweets-snacks"
                }
            ]
        },
        {
            title: "Location Finder",
            path: "/location-finder"
        },
        {
            title: "About Us",
            path: "/about-us"
        },
        {
            title: "Stories",
            path: "/stories"
        },
        {
            title: "Franchising",
            path: "/franchising"
        },
        {
            title: "Jobs",
            path: "/jobs"
        }
    ],
    az: [
        {
            title: "Menyu",
            path: "/menu",
            pathChild: [
                {
                    title: "İsti və Soyuq İçkilər ",
                    path: "/hot-cold-drinks"
                },
                {
                    title: "Şirniyyat və Qəlyanaltılar ",
                    path: "/sweets-snacks"
                }
            ]
        },
        {
            title: "Məkan Axtarışı",
            path: "/location-finder"
        },
        {
            title: "Haqqımızda",
            path: "/about-us"
        },
        {
            title: "Hekayələr",
            path: "/stories"
        },
        {
            title: "Françayzinq",
            path: "/franchising"
        },
        {
            title: "İşlər",
            path: "/jobs"
        }
    ]
};
