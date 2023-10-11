import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import initTranslations from '@/i18n';
import TranslationsProvider from '@/components/translationsProvider';
import i18nConfig from '../../../i18nConfig';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Timi Duban Website',
  description: 'A page about this Freelance developper',
}

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

interface RootProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}
async function RootLayout({children, params}: RootProps) {
  const { locale } = params;
  const { t, options } = await initTranslations(locale, ['common']);

  return (
    <html lang="en">
      <body className={inter.className}>
        <TranslationsProvider namespaces={options.ns} locale={locale}>
          <Navbar locale={locale}/>
          {children}
        </TranslationsProvider>
        </body>
    </html>
  )
}

export default RootLayout;