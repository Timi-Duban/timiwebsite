'use client'

import { useEffect } from "react";

interface INavClientProps {
  children: React.ReactNode
}
export default function NavClient ({children}: INavClientProps) {
  const navHeight = 48;

  let aboutMeC: Element;
  let servicesC: Element;
  let skillsC: Element;
  let pastExperiencesC: Element;
  let contactC: Element;

  let aboutMeL: Element;
  let servicesL: Element;
  let skillsL: Element;
  let pastExperiencesL: Element;
  let contactL: Element;
  let allLinks: (Element)[] = [];

  useEffect(() => {
    // Initialize dom refs at first render
    aboutMeC = document.querySelector('#aboutMe')!;
    aboutMeL = document.querySelector('a[href="#aboutMe"]')!;
    servicesC = document.querySelector('#services')!;
    servicesL = document.querySelector('a[href="#services"]')!;
    skillsC = document.querySelector('#skills')!;
    skillsL = document.querySelector('a[href="#skills"]')!;
    pastExperiencesC = document.querySelector('#pastExperiences')!;
    pastExperiencesL = document.querySelector('a[href="#pastExperiences"]')!;
    contactC = document.querySelector('#contact')!;
    contactL = document.querySelector('a[href="#contact"]')!;
    allLinks = [aboutMeL, servicesL, skillsL, pastExperiencesL, contactL];
  }, []);

  const active = (elements: Element[] | null) => {
    // Text gradient
    const activeClassname = ['font-extrabold', 'text-transparent', 'text-large', 'bg-clip-text', 'bg-gradient-to-r', 'from-teal-400', 'to-purple-600'];
    allLinks?.forEach(link => link?.classList.remove(...activeClassname));
    elements?.forEach(el => el?.classList.add(...activeClassname))
  }
  
  const handleScroll = () => {
    const scrollMargin = navHeight + 2;
    const aboutMeTop = aboutMeC?.getBoundingClientRect().top ?? 1;
    if (aboutMeTop > scrollMargin) {
      active(null);
      return;
    }
    const servicesTop = servicesC?.getBoundingClientRect().top ?? 1;
    const skillsTop = skillsC?.getBoundingClientRect().top ?? 1;
    if (servicesTop > scrollMargin) {
      active([aboutMeL]);
      return;
    }
    if (servicesTop === aboutMeTop && skillsTop > scrollMargin) {
      active([aboutMeL, servicesL]);
      return;
    }
    if (skillsTop > scrollMargin) {
      active([servicesL]);
      return;
    }    
    const pastExperiencesTop = pastExperiencesC?.getBoundingClientRect().top ?? 1;
    if (pastExperiencesTop > scrollMargin) {
      active([skillsL]);
      return;
    }
    const toBottom = (window.innerHeight + Math.ceil(window.scrollY)) >= document.body.offsetHeight;    
    if (toBottom) {
      active([contactL]);
      return;
    }
    const contactTop = contactC?.getBoundingClientRect().top ?? 1;
    if (contactTop > scrollMargin) {
      active([pastExperiencesL]);
      return;
    }
    
  }

  window.addEventListener('scroll', handleScroll);
  
  return (
    <div className={'border-b-[2px] border-cyan-700 bg-neutral-900 sticky top-0 z-50 w-full h-[48px] shadow text-neutral-200 text-center'}>
      {children}
    </div>
  );
}
