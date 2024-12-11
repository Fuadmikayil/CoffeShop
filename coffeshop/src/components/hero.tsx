import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const heroImage = require(t("hero.Heroİmg"));

  return (
    <main className="w-full h-[100vh] bg-cover bg-top flex flex-col items-center justify-center text-center" 
          style={{ backgroundImage: `url(${heroImage})` }}>
      <h1 className="text-4xl font-bold">{t("hero.HeroTextH1")}</h1>
      <p className="mt-4 text-lg max-w-2xl">{t("hero.HeroTextP")}</p>
    </main>
  );
};

export default Hero;
