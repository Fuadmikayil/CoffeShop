import React from 'react'
import { navLinks, navLinksTip } from '../Data'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
    const {t,i18n} = useTranslation()
  return (
    <div  className="px-10 py-20 space-y-6">
        <h1 className='text-4xl font-company'>About us</h1>
        <div>
                {navLinks[i18n.language as 'en' | 'az']?.map((item: navLinksTip, index: number) => (
                    <>
                        {item.pathChild && (
                            <div className='flex gap-12  flex-wrap px-10' key={index}>
                                {item.path == "/about-us"?item.pathChild?.map((childItem) => (
                                    <NavLink to={childItem.path} key={childItem.path} className='  rounded-[38%] relative top-0 left-0  overflow-hidden group ' >
                                        <img src={childItem.img} alt={childItem.title} className='w-[370px] transition-all duration-150 group-hover:scale-105' />
                                        <div className=' flex items-center  justify-center absolute top-0 left-0 w-full h-full cursor-pointer p-10   '>
                                            <h2 className='text-3xl text-center font-company' >{childItem.title}</h2>
                                        </div>
                                    </NavLink>
                                )):null}

                            </div>
                        )}
                    </>
                ))}
            </div>
    </div>
  )
}

export default AboutUs