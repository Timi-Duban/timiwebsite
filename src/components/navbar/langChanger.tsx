'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image'
import frFlag from '@/assets/frFlag.svg'
import ukFlag from '@/assets/ukFlag.svg'

const FrButton = () => (
  <div className='w-5 h-5 mr-1 flex items-center'>
      <Image
          alt={'French flag'}
          src={frFlag}
          width={90}
          height={60}
      />
  </div>
);

const EnButton = () => (
<div className='w-5 h-5 mr-1 flex items-center'>
      <Image
          alt={'United Kingdom flag'}
          src={ukFlag}
          width={90}
          height={60}
      />
  </div>
);


export interface ILangChangerProps {locale: string}
export default function LangChanger (props: ILangChangerProps) {
  const { locale } = props;
  const router = useRouter();

  const changeCookie = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';

    // set cookie for next-i18n-router
    const date = new Date();
    date.setTime(date.getTime() + 31 * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    router.push('/');
    router.refresh();
  };

  return (
    <div className='px-1 flex items-center justify-center md:justify-end' >
        <button 
            className='text-white text-xs' 
            onClick={() => changeCookie()}
        >
          {locale === 'fr' ? <EnButton /> : <FrButton />}
        </button>
    </div>
  );
}
