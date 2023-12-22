import initTranslations from "@/i18n";
import { TitleDl } from "../title";
import { LaptopIcon, PhoneIcon } from "../icons";

interface IServicesProps {locale: string}
export default async function Services (props: IServicesProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='flex flex-col flex-1 card bg-neutral-700 md:bg-neutral-200'
      id='services'>
      <TitleDl title={t('services')} />
      <div className='flex flex-row flex-1 px-5 py-3 text-center text-neutral-50 md:text-current md:py-6'>
        <div className='flex flex-col flex-1 h-full border-r border-cyan-700'>
          <div className='flex flex-row items-center justify-center'>
            <h2 className='mx-1 text-lg md:font-semibold'>{t('mobileApp')}</h2>
            <PhoneIcon />
          </div>
            <p className='flex items-center flex-1 p-2 text-xs font-light whitespace-pre-wrap md:font-normal md:mt-5'>{t('mobileBody')}</p>
        </div>
        <div className='flex flex-col flex-1 h-full'>
          <div className='flex flex-row items-center justify-center'>
            <h2 className='mx-2 text-lg md:font-semibold'>{t('webApp')}</h2>
            <LaptopIcon />
          </div>
          <p className='flex items-center flex-1 m-2 text-xs font-light whitespace-pre-wrap md:font-normal md:mt-5'>{t('webBody')}</p>
        </div>
      </div>
    </div>
  );
}
