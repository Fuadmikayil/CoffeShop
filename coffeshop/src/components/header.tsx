import Logo from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';
import { navLinks, navLinksTip } from '../Data';
import { NavLink } from 'react-router-dom';
import { RxTriangleDown } from 'react-icons/rx';
import azImg from "../assets/az_flag_.webp";
import enImg from "../assets/en_flag.webp";
import { useState } from 'react';

const Header = () => {
    const language = [
        {
            language: "en",
            img: enImg,
            name: "English",
        },
        {
            language: "az",
            img: azImg,
            name: "Azerbaijani",
        }
    ];
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
    };

    return (
        <>
            <header className='w-full flex justify-center p-10 bg-transparent'>
                <section className='container flex justify-between items-center'>
                    <img src={Logo} alt="" className='w-[400px]' />
                    <nav>
                        <ul className='flex gap-10'>
                            {navLinks[i18n.language as 'en' | 'az'].map((item: navLinksTip, index: number) => (
                                <li className='relative group' key={index}>
                                    <NavLink to={item.path} className='flex items-center cursor-pointer text-customWhite font-sans text-lg tracking-wider duration-300 group-hover:text-customGreen transition-all hover:text-customGreen'>
                                        {item.title}
                                        {item.pathChild ? (
                                            <>
                                                <RxTriangleDown className='scale-125 cursor-pointer group-hover:text-customGreen' />
                                                <ul className='absolute top-full pt-3 hidden group-hover:block'>
                                                    {item.pathChild.map((childItem, childIndex) => (
                                                        <li key={childIndex}>
                                                            <NavLink to={childItem.path} className='text-customWhite whitespace-nowrap font-sans text-base tracking-wider duration-300 transition-all hover:text-customGreen'>
                                                                {childItem.title}
                                                            </NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : null}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* Custom Language Selector */}
                    <div className="relative">
                        <div className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded p-2 bg-transparent"
                            onClick={(e) => e.currentTarget.nextElementSibling?.classList.toggle('hidden')}>
                            <img src={language.find(lang => lang.language === selectedLanguage)?.img} alt="flag" className="w-7 h-5" />
                            <span className=' capitalize'>{selectedLanguage}</span>
                            <RxTriangleDown />
                        </div>
                        <div className="absolute top-full mt-2 right-0 bg-white border rounded shadow hidden">
                            {language.map((lang) => (
                                <div
                                    key={lang.language}
                                    className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => changeLanguage(lang.language)}>
                                    <img src={lang.img} alt={lang.name} className="w-7 h-5" />
                                    <span className=' capitalize'>{lang.language}</span>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
};

export default Header;
