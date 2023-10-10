import Contact from "@/components/contact";
import Skills from "@/components/skills";
import initTranslations from "@/i18n";

interface IHomeProps {params: {locale: string}}
export default async function Home({params}: IHomeProps) {
  const {locale} = params;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div>
      <div className='bg-neutral-200'>
        <h1>{t('aboutMe')}</h1>
      </div>
      <Skills locale={locale} />
      <div className='bg-neutral-200'>
        <h1>{t('pastExperiences')}</h1>
      </div>
      <Contact locale={locale} />
    </div>
  )
}
