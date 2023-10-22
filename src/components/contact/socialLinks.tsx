'use client'

import Image from 'next/image'
import { GithubIcon, LinkedInIcon, EmailIcon } from "../icons";
import maltLogo from '@/assets/malt.svg'

interface ISocialLinksProps {}
export function SocialLinks (props: ISocialLinksProps) {
    return (
        <div className='flex w-full justify-evenly flex-wrap font-light'>
            <a
                className='flex flex-row mx-1 items-center hover:font-semibold hover:text-lg'
                href="https://www.linkedin.com/in/timi-duban"
            >
                <LinkedInIcon />timi-duban
            </a>
            <a
                className='flex flex-row mx-1 items-center hover:font-semibold hover:text-lg' 
                href="https://github.com/Timi-Duban"
            >
                <GithubIcon />Timi-Duban
            </a>
            <a
                className='flex flex-row mx-1 items-cente hover:font-semibold hover:text-lg' 
                href="https://www.malt.fr/profile/timiduban"
            >
                <div className='w-5 h-5 mr-1'>
                    <Image
                        alt={'Malt logo'}
                        src={maltLogo}
                        width={40}
                        height={40}
                    />
                </div>timiduban
            </a>
            <button
                className='flex flex-row mx-1 items-center'
                onClick={() => {navigator.clipboard.writeText('timi.duban@gmail.com')}}
            >
                <EmailIcon />timi.duban@gmail.com
            </button>
        </div>
    );
}
