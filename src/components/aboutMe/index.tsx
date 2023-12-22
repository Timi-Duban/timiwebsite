import Image from 'next/image'
import portrait from '@/assets/portrait.jpeg'
import initTranslations from "@/i18n";
import { TitleL } from "../title";

interface IAboutMeProps {locale: string}
export default async function AboutMe (props: IAboutMeProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='flex-1 card bg-neutral-200' id='aboutMe'>
      <TitleL title={t('aboutMe')} />
      <div className='text-xs leading-tight text-justify whitespace-pre-wrap p-7'>
        <div className='flex'>
          <p className='flex flex-1 pr-10'>{t('abMeIntro')}</p>
          <p className='rounded-full w-[80px] h-[80px] mx-1 lg:w-[120px] lg:h-[120px] lg:mx-8 -mt-3 lg:-mt-10 relative overflow-hidden'>
            <Image
              src={portrait}
              objectFit='contain'
              alt="Picture of the author"
            />
          </p>
        </div>
        <h2 className='mt-2 mb-0 font-bold'>{t('abMeQuality')}</h2>
        <p>{t('abMeQualityB')}</p>
          <h2 className='mt-1 font-bold'>{t('abMeSec')}</h2>
          <p>{t('abMeSecB')}</p>
          <h2 className='mt-1 font-bold'>{t('abMeTransparency')}</h2>
          <p>{t('abMeTransparencyB')}</p>
      </div>
    </div>
    );
}
