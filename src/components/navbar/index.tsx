import initTranslations from "@/i18n";
import LangChanger from './langChanger';
import { NavLink } from "./navLink";

interface INavbarProps {locale: string}
export default async function Navbar (props: INavbarProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='border-b-[3.5px] border-cyan-700 bg-neutral-900 sticky top-0 z-50 w-full flex flex-row justify-between h-12 px-2 shadow-lg'>
      <div className='flex flex-row items-center text-neutral-200 text-xs'>
        <NavLink href='#aboutMe' label={t('aboutMe')} />
        <NavLink href='#services' label={t('services')} />
        <NavLink href='#skills' label={t('skills')} />
        <NavLink href='#pastExperiences' label={t('pastExperiences')} />
        <NavLink href='#contact' label={t('contact')} />
      </div>
      <LangChanger locale={locale} />
    </div>
  );
}
