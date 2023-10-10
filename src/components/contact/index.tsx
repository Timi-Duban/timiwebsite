import initTranslations from "@/i18n";

interface IContactProps {locale: string}
export default async function Contact (props: IContactProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);
  return (
    <div className='bg-neutral-200'>
      <h1>{t('contact')}</h1>
    </div>
  );
}
