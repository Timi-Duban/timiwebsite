'use client'

import { useRouter } from 'next/navigation';

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
    <div className='px-1 flex justify-center' >
        <button 
            className='text-white text-xs' 
            onClick={() => changeCookie()}
        >
            {locale === 'fr' ? 'Eng' : 'Fr'} 
        </button>
    </div>
  );
}
