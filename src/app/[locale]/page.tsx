import Contact from "@/components/contact";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div>
      <div className='bg-neutral-200'>
        <h1>About me</h1>
      </div>
      <Skills />
      <div className='bg-neutral-200'>
        <h1>Past Experiences</h1>
      </div>
      <Contact />
    </div>
  )
}
