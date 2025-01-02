import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg';
import { navLinks, navLinksTip } from '../Data';
import { useTranslation } from 'react-i18next';
import { RxTriangleDown } from 'react-icons/rx';

const Footer = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className='pb-20  border-b-2 border-b-emerald-900 container'>
            <section className=' w-full gap-10 flex  justify-evenly flex-wrap '>
                <NavLink to="location-finder" >
                    <div className='bg-bgGreen w-[600px] rounded-3xl px-16 py-10'  >
                        <h3 className='text-white text-4xl font-company'> We invite you.</h3>
                        <p className='text-2xl mt-5'> Check out our locations.</p>
                    </div>
                </NavLink>
                <NavLink to="location-finder" >
                    <div className='bg-bgGreen  w-[600px]  rounded-3xl px-16 py-10'  >
                        <h3 className='text-white text-4xl  font-company'> Have Any Questions? </h3>
                        <p className='text-2xl mt-5'> We look forward to hearing from you.</p>
                    </div>
                </NavLink>
            </section>
            <section className='flex gap-20 items-start pt-20 px-10'>
                <img src={Logo} alt="Logo" className='w-[60px]' />
                <div className=' flex justify-evenly w-full '>
                    <ul>
                        <li className='font-bold text-2xl mb-5'>Coffeeshop Company</li>
                        {navLinks[i18n.language as 'en' | 'az'].map((item: navLinksTip, index: number) => (
                            <li className='relative group' key={index}>
                                <NavLink to={item.path} className='flex items-center cursor-pointer text-customWhite font-sans text-lg tracking-wider duration-300 group-hover:text-customGreen transition-all hover:text-customGreen'>
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <ul className='flex flex-col w-[300px]'>
                        <li className='font-bold text-2xl mb-5'>The Coffeeshop Company</li>
                        <li className='flex flex-wrap text-xl'> Vienna Business Park - Turm A/34
                            Wienerbergstrasse 11
                            A-1100 Wien</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Footer