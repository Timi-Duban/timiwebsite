import initTranslations from "@/i18n";
import Title from "../title";

interface IServicesProps {locale: string}
export default async function Services (props: IServicesProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='bg-neutral-700 p-2 flex flex-1 flex-col md:bg-neutral-200'>
      <Title title={t('services')} />
      <div className='flex flex-row text-neutral-50 text-center md:text-current my-auto'>
        <div className='flex-1'>
          <h2 className='text-lg font-semibold'>{t('mobileApp')}</h2>
          <p className='text-xs whitespace-pre-wrap m-2 md:mt-5'>{t('mobileBody')}</p>
        </div>
        <div className='flex-1'>
          <h2 className='text-lg font-semibold'>{t('webApp')}</h2>
          <p className='text-xs whitespace-pre-wrap m-2 md:mt-5'>{t('webBody')}</p>
        </div>
      </div>
    </div>
  );
}
