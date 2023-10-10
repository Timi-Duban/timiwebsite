import initTranslations from "@/i18n";
import Title from "../title";

interface IAboutMeProps {locale: string}
export default async function AboutMe (props: IAboutMeProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='bg-neutral-200 p-2 pt-0 flex-1'>
      <Title title={t('aboutMe')} />
      <p className='text-xs whitespace-pre-wrap'>{t('aboutMeBody')}</p>
    </div>
    );
}
