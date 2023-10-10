import initTranslations from "@/i18n";
import Title from "../title";

interface IContactProps {locale: string}
export default async function Contact (props: IContactProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='bg-neutral-200 md:bg-neutral-700'>
      <Title title={t('contact')} />
    </div>
  );
}
