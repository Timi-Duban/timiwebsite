import initTranslations from '@/i18n';
import { TitleLd } from '../title';
import { DownloadIcon } from '../icons';
import Form from './form';
import { SocialLinks } from './socialLinks';
import Link from 'next/link';

interface IContactProps {locale: string}
export default async function Contact (props: IContactProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='card bg-neutral-200 md:bg-neutral-700 pb-5 md:text-neutral-50' id='contact'>
      <TitleLd title={t('contact')} />
      <div className='flex'>
        <Form />
        <div className='flex flex-1 flex-col justify-evenly items-center text-center'>
          <p className='text-lg font-medium md:font-normal'>{t('contactIntro')}</p>
          <h2
          className='font-extrabold text-transparent text-3xl md:text-4xl bg-clip-text bg-gradient-to-l from-cyan-700 to-purple-700 md:from-teal-300 md:to-indigo-400'
          >{t('contactMe')}</h2>
          <div className='flex w-full flex-col items-center font-medium md:font-normal'>
            <p className='text-lg/4 mb-2'>{t('findMe')}</p>
            <SocialLinks />
          </div>
        </div>
      </div>
      {/* @ts-ignore - NextJS automatically passes down the <a> tag attributes*/}
      <Link href={`/cv_${locale}.pdf`} alt='Download my CV' target='_blank' rel='noopener noreferrer' locale={false}> 
      <div className='flex justify-center text-center pt-6 hover:font-bold hover:md:font-semibold'>
        <DownloadIcon />
        <p className='ml-2'>{t('downloadCV')}</p>
      </div>
      </Link>
    </div>
  );
}
