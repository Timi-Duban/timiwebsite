import initTranslations from "@/i18n";
import LangChanger from './langChanger';
import { NavLink } from "./navLink";

interface INavbarProps {locale: string}
export default async function Navbar (props: INavbarProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='border-b-[2px] border-cyan-700 bg-neutral-900 sticky top-0 z-50 w-full h-12 px-2 shadow text-neutral-200 text-xs md:text-sm items-center grid grid-cols-3 md:grid-cols-6'>
      <NavLink href='#aboutMe' label={t('aboutMe')} />
      <NavLink href='#services' label={t('services')} />
      <NavLink href='#skills' label={t('skills')} />
      <NavLink href='#pastExperiences' label={t('pastExperiences')} />
      <NavLink href='#contact' label={t('contact')} last />
      <LangChanger locale={locale} />
    </div>
  );
}
