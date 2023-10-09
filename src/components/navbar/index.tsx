import initTranslations from '../../i18n';
// import LangChanger from './langChanger';

export interface INavbarProps {locale: string}
export default async function Navbar (props: INavbarProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='bg-neutral-900 flex flex-row items-center h-8'>
      <p className='text-white text-xs px-1'>{t('aboutMe')}</p>
      <p className='text-white text-xs px-1'>Services</p>
      <p className='text-white text-xs px-1'>Contact</p>
      {/* <LangChanger locale={locale} /> */}
    </div>
  );
}
