import AboutMe from "@/components/aboutMe";
import Contact from "@/components/contact";
import PastExperiences from "@/components/pastExperiences";
import Services from "@/components/services";
import Skills from "@/components/skills";

interface IHomeProps {params: {locale: string}}
export default async function Home({params}: IHomeProps) {
  const {locale} = params;

  return (
    <div className='bg-cyan-700 py-[1px]'>
      <div className='flex flex-col md:flex-row md:w-[93%] md:mx-auto'>
        <AboutMe locale={locale} />
        <Services locale={locale} />
      </div>
      <Skills locale={locale} />
      <PastExperiences locale={locale} />
      <Contact locale={locale} />
    </div>
  )
}
