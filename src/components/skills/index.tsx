import initTranslations from "@/i18n";
import Title from "../title";

interface ISkillsProps {locale: string}
export default async function Skills (props: ISkillsProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);
  return (
    <div className='bg-neutral-200'>
      <Title title={t('skills')} />
    </div>
  );
}
