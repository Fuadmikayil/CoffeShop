import { useTranslation } from 'react-i18next';


const Hero = () => {
    const { t, i18n } = useTranslation();

    return (
        <main className='w-full bg-hero-Backgroundİmage h-full bg-cover  pt-32  bg-top rounded-b-[4%]'>
            <section className='container px-20 flex flex-col justify-between h-screen  max-w-full   relative top-0 left-0' >
                <h1 className='font-serif z-10 text-8xl w-[700px] font-bold tracking-wide'>{t("hero.HeroTextH1")}</h1>
               <div className='flex justify-center items-end  absolute -top-2 left-[18%]  max-w-[100%]'>
                    <img className=' h-[700px] object-cover ' src={t("hero.HeroImg")} alt="" />
                    <p className=' text-2xl min-w-[500px]  w-[590px]  mb-10  relative  right-40 '>{t("hero.HeroTextP")}</p>
               </div>
            </section>
        </main>
    )
}

export default Hero