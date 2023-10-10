import initTranslations from "@/i18n";
import Title from "../title";
import { DownloadIcon } from "../icons";

interface IContactProps {locale: string}
export default async function Contact (props: IContactProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='bg-neutral-200 md:bg-neutral-700 p-2 pt-0'>
      <Title title={t('contact')} />
      <div className='flex justify-center md:text-neutral-50 text-center'>
        <DownloadIcon />
        <p className='ml-1'>{t('downloadCV')}</p>
      </div>
    </div>
  );
}
