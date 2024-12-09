import Logo from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';
import { navLinks, navLinksTip } from '../Data';
import { NavLink } from 'react-router-dom';
import { RxTriangleDown } from 'react-icons/rx';
const Header = () => {

    const { t, i18n } = useTranslation()

    return (
        <>
            <header className='w-full flex justify-center p-10  bg-transparent'>
                <section className='container  flex  justify-between items-center'>
                    <img src={Logo} alt="" className='w-[400px]' />
                    <nav>
                        <ul className='flex gap-10'>
                            {
                                navLinks[i18n.language as 'en' | 'az'].map((item: navLinksTip, index: number) => {
                                    return <li className=' relative group'>
                                        <NavLink to={item.path} className=' cursor-pointer text-customWhite font-sans text-lg tracking-wider duration-300 group-hover:text-customGreen transition-all hover:text-customGreen' key={index}> {item.title}</NavLink>
                                        {
                                            item.pathChild ? (
                                                <>
                                                    <RxTriangleDown className='inline-block scale-125 cursor-pointer group-hover:text-customGreen ' />
                                                    <ul className=' absolute   pt-4 hidden group-hover:block'>
                                                        {
                                                            item.pathChild.map((item) => (
                                                                <li>
                                                                    <NavLink to={item.path} className='text-customWhite whitespace-nowrap  font-sans text-base tracking-wider duration-300 transition-all hover:text-customGreen' key={index}> {item.title}</NavLink>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </>
                                            ) : null
                                        }

                                    </li>
                                })
                            }
                        </ul>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header