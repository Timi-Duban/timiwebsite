import initTranslations from "@/i18n";
import Title from "../title";

interface IServicesProps {locale: string}
export default async function Services (props: IServicesProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
  <div className='bg-neutral-700 p-2'>
    <Title title={t('services')} />
    <div className='flex flex-row text-neutral-50'>
      <div className='flex flex-1 flex-col'>
        <p className='self-center text-xl'>{t('mobileApp')}</p>
        <p className='text-xs whitespace-pre-wrap m-3'>{t('mobileBody')}</p>
      </div>
      <div className='flex flex-1 flex-col'>
        <p className='self-center text-xl'>{t('webApp')}</p>
        <p className='text-xs whitespace-pre-wrap m-3'>{t('webBody')}</p>
      </div>
    </div>
  </div>
  );
}
