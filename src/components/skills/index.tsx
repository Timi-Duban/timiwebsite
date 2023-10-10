import initTranslations from "@/i18n";

interface ISkillsProps {locale: string}
export default async function Skills (props: ISkillsProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);
  return (
    <div className='bg-neutral-200'>
      <h1>{t('skills')}</h1>
    </div>
  );
}
