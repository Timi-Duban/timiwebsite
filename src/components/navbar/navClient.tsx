'use client'


interface INavClientProps {
  children: React.ReactNode
}
export default function NavClient ({children}: INavClientProps) {
  const navHeight = 48;

  let aboutMeC = document.querySelector('#aboutMe');
  let servicesC = document.querySelector('#services');
  let skillsC = document.querySelector('#skills');
  let pastExperiencesC = document.querySelector('#pastExperiences');
  let contactC = document.querySelector('#contact');

  let aboutMeL = document.querySelectorAll('a[href="#aboutMe"]')[0];
  let servicesL = document.querySelectorAll('a[href="#services"]')[0];
  let skillsL = document.querySelectorAll('a[href="#skills"]')[0];
  let pastExperiencesL = document.querySelectorAll('a[href="#pastExperiences"]')[0];
  let contactL = document.querySelectorAll('a[href="#contact"]')[0];
  const allLinks = [aboutMeL, servicesL, skillsL, pastExperiencesL, contactL];


  const active = (elements: Element[] | null) => {
    // Text gradient
    const activeClassname = ['font-extrabold', 'text-transparent', 'text-large', 'bg-clip-text', 'bg-gradient-to-r', 'from-teal-400', 'to-purple-600'];
    allLinks?.forEach(link => link?.classList.remove(...activeClassname));
    elements?.forEach(el => el?.classList.add(...activeClassname))
  }
  
  const handleScroll = () => {
    const scrollMargin = navHeight + 2;
    let aboutMeTop = aboutMeC?.getBoundingClientRect().top ?? 1;
    if (aboutMeTop > scrollMargin) {
      active(null);
      return;
    }
    let servicesTop = servicesC?.getBoundingClientRect().top ?? 1;
    let skillsTop = skillsC?.getBoundingClientRect().top ?? 1;
    if (aboutMeTop <= scrollMargin && servicesTop > scrollMargin) {
      active([aboutMeL]);
      return;
    }
    if (aboutMeTop <= scrollMargin && servicesTop === aboutMeTop && skillsTop > scrollMargin) {
      active([aboutMeL, servicesL]);
      return;
    }
    if (servicesTop <= scrollMargin && skillsTop > scrollMargin) {
      active([servicesL]);
      return;
    }    
    let pastExperiencesTop = pastExperiencesC?.getBoundingClientRect().top ?? 1;
    
    if (skillsTop <= scrollMargin && pastExperiencesTop > scrollMargin) {
      active([skillsL]);
      return;
    }
    let contactTop = contactC?.getBoundingClientRect().top ?? 1;
    let toBottom = (window.innerHeight + Math.ceil(window.scrollY)) >= document.body.offsetHeight;    
    if (toBottom) {
      active([contactL]);
      return;
    }
    if (pastExperiencesTop <= scrollMargin && contactTop > scrollMargin) {
      active([pastExperiencesL]);
      return;
    }
    
  }

  window.addEventListener('scroll', handleScroll);
  
  return (
    <div className={'border-b-[2px] border-cyan-700 bg-neutral-900 sticky top-0 z-50 w-full h-[48px] shadow text-neutral-200'}>
      {children}
    </div>
  );
}
