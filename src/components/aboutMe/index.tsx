import initTranslations from "@/i18n";
import { TitleL } from "../title";

interface IAboutMeProps {locale: string}
export default async function AboutMe (props: IAboutMeProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='card bg-neutral-200 flex-1' id='aboutMe'>
      <TitleL title={t('aboutMe')} />
      <p className='text-xs whitespace-pre-wrap text-justify p-7'>{t('aboutMeBody')}</p>
    </div>
    );
}
