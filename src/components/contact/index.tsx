import initTranslations from "@/i18n";
import { TitleLd } from "../title";
import { DownloadIcon } from "../icons";
import Form from "./form";
import { SocialLinks } from "./socialLinks";

interface IContactProps {locale: string}
export default async function Contact (props: IContactProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='bg-neutral-200 md:bg-neutral-700 pb-2 pt-0 md:text-neutral-50' id='contact'>
      <TitleLd title={t('contact')} />
      <div className='flex'>
        <Form />
        <div className='flex flex-1 flex-col justify-evenly items-center text-center'>
          <p className='text-lg font-medium md:font-normal'>{t('contactIntro')}</p>
          <h2 className='text-xl font-bold md:font-semibold'>{t('contactMe')}</h2>
          <div className='flex w-full flex-col items-center font-medium md:font-normal'>
            <p className='text-lg/4 '>{t('findMe')}</p>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className='flex justify-center text-center pt-6'>
        <DownloadIcon />
        <p className='ml-2'>{t('downloadCV')}</p>
      </div>
    </div>
  );
}
