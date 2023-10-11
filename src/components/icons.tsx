'use client'

import { IconContext } from "react-icons";
import { BsLaptop, BsDownload } from 'react-icons/bs'
import { CiMobile4 } from 'react-icons/ci';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'

export function DownloadIcon () {
    return (
        <IconContext.Provider value={{ size: '1.5em' }}>
            <div>
                <BsDownload  />
            </div>
        </IconContext.Provider>
    );
}

export function LaptopIcon () {
    return (
        <IconContext.Provider value={{ size: '3.5em' }}>
            <div className='text-neutral-200 md:text-inherit'>
                <BsLaptop  />
            </div>
        </IconContext.Provider>
    );
}

export function PhoneIcon () {
    return (
        <IconContext.Provider value={{ size: '3.5em' }}>
            <div className='text-neutral-200 md:text-inherit'>
                <CiMobile4  />
            </div>
        </IconContext.Provider>
    );
}

export function LinkedInIcon () {
    return (
        <IconContext.Provider value={{ size: '1.5em' }}>
            <div className='text-[#0077B5]'>
                <AiOutlineLinkedin  />
            </div>
        </IconContext.Provider>
    );
}

export function GithubIcon () {
    return (
        <IconContext.Provider value={{ size: '1.5em' }}>
            <div className='md:text-neutral-200'>
                <AiOutlineGithub  />
            </div>
        </IconContext.Provider>
    );
}

export function EmailIcon () {
    return (
        <IconContext.Provider value={{ size: '1.5em' }}>
            <div className='md:text-neutral-200'>
                <AiOutlineMail  />
            </div>
        </IconContext.Provider>
    );
}

