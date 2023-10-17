import Image from 'next/image'
import portrait from '@/assets/portrait.jpeg'
import initTranslations from "@/i18n";
import { TitleL } from "../title";

interface IAboutMeProps {locale: string}
export default async function AboutMe (props: IAboutMeProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='card md:mr-3 bg-neutral-200 flex-1' id='aboutMe'>
      <TitleL title={t('aboutMe')} />
      <div className='p-7 text-xs whitespace-pre-wrap text-justify leading-tight'>
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
        <h2 className='font-bold mt-2 mb-0'>{t('abMeQuality')}</h2>
        <p>{t('abMeQualityB')}</p>
          <h2 className='font-bold mt-1'>{t('abMeSec')}</h2>
          <p>{t('abMeSecB')}</p>
          <h2 className='font-bold mt-1'>{t('abMeTransparency')}</h2>
          <p>{t('abMeTransparencyB')}</p>
      </div>
    </div>
    );
}
