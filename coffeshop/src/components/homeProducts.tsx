import React from 'react';
import { useTranslation } from 'react-i18next';
import { navLinks, navLinksTip } from '../Data';
import { NavLink } from 'react-router-dom';

const HomeProducts = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className='flex flex-col gap-5 p-14 py-20 container'>
            <h1 className='text-6xl font-company'>{t('Products')}</h1>
            <div>
                {navLinks[i18n.language as 'en' | 'az']?.map((item: navLinksTip, index: number) => (
                    <>
                        {item.pathChild && (
                            <div className='  flex gap-10 ' key={index}>
                                {item.path == "/menu" ? item.pathChild?.map((childItem) => (
                                    <NavLink to={childItem.path} key={childItem.path} className='relative top-0 left-0 rounded-2xl group  ' >
                                        <img src={childItem.img} alt={childItem.title} className='w-[350px] rounded-2xl ' />
                                        <div className='bg-opacityBlack1 flex items-center absolute top-0 left-0 w-full h-full transition-all duration-300 cursor-pointer opacity-0 p-10 group-hover:hover:opacity-100  '>
                                            <h2 className='text-2xl' >{childItem.title}</h2>
                                        </div>
                                    </NavLink>
                                )) : null}

                            </div>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default HomeProducts;
