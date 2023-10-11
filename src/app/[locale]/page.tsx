import AboutMe from "@/components/aboutMe";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Skills from "@/components/skills";
import { TitleDl } from "@/components/title";
import initTranslations from "@/i18n";

interface IHomeProps {params: {locale: string}}
export default async function Home({params}: IHomeProps) {
  const {locale} = params;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        <AboutMe locale={locale} />
        <Services locale={locale} />
      </div>
      <Skills locale={locale} />
      <div className='bg-neutral-700 md:bg-neutral-200'>
        <TitleDl title={t('pastExperiences')} />
      </div>
      <Contact locale={locale} />
    </div>
  )
}
