import Logo from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';
import { navLinks, navLinksTip } from '../Data';
const Header = () => {

    const { t, i18n   } = useTranslation()

    return (
        <>
            <header className='w-full flex justify-center p-10  bg-transparent'>
                <section className='container  flex  justify-between items-center'>
                    <img src={Logo} alt="" className='w-[400px]' />
                    <nav>
                        <ul className='flex gap-10'>
                        {
                            navLinks[i18n.language as 'en' | 'az'].map((item: navLinksTip ,index:number)=> {
                                return <li>
                                     <a href="#" className='text-customWhite font-sans text-lg tracking-wider duration-300 transition-all hover:text-customGreen' key={index}> {item.title}</a>
                                     
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