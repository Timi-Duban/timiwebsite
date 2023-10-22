import initTranslations from "@/i18n";
import LangChanger from './langChanger';
import { NavLink } from "./navLink";

interface INavBodyProps {locale: string}
export default async function NavBody (props: INavBodyProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);
  
  return (
    <div className='text-xs md:text-sm items-center grid grid-cols-3 md:grid-cols-6 w-full h-full'>
      <NavLink href='#aboutMe' label={t('aboutMe')} />
      <NavLink href='#services' label={t('services')} />
      <NavLink href='#skills' label={t('skills')} />
      <NavLink href='#pastExperiences' label={t('pastExperiences')} />
      <NavLink href='#contact' label={t('contact')} />
      <LangChanger locale={locale} />
    </div>
  );
}
