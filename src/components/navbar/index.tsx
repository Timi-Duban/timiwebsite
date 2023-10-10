import initTranslations from "@/i18n";
import LangChanger from './langChanger';

interface INavbarProps {locale: string}
export default async function Navbar (props: INavbarProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='bg-neutral-900 flex flex-row justify-between h-8'>
      <div className='flex flex-row items-center'>
        <p className='text-white text-xs px-1'>{t('aboutMe')}</p>
        <p className='text-white text-xs px-1'>{t('services')}</p>
        <p className='text-white text-xs px-1'>{t('skills')}</p>
        <p className='text-white text-xs px-1'>{t('pastExperiences')}</p>
        <p className='text-white text-xs px-1'>{t('contact')}</p>
      </div>
      <LangChanger locale={locale} />
    </div>
  );
}
