import initTranslations from "@/i18n";
import LangChanger from './langChanger';

interface INavbarProps {locale: string}
export default async function Navbar (props: INavbarProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='bg-neutral-900 flex flex-row justify-between h-8'>
      <div className='flex flex-row items-center text-neutral-50 text-xs'>
        <p className='px-1'>{t('aboutMe')}</p>
        <p className='px-1'>{t('services')}</p>
        <p className='px-1'>{t('skills')}</p>
        <p className='px-1'>{t('pastExperiences')}</p>
        <p className='px-1'>{t('contact')}</p>
      </div>
      <LangChanger locale={locale} />
    </div>
  );
}
