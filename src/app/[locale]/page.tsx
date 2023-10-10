import AboutMe from "@/components/aboutMe";
import Contact from "@/components/contact";
import Skills from "@/components/skills";
import Title from "@/components/title";
import initTranslations from "@/i18n";

interface IHomeProps {params: {locale: string}}
export default async function Home({params}: IHomeProps) {
  const {locale} = params;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div>
      <AboutMe locale={locale} />
      <Skills locale={locale} />
      <div className='bg-neutral-200'>
        <Title title={t('pastExperiences')} />
      </div>
      <Contact locale={locale} />
    </div>
  )
}
