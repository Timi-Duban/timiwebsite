import Image from 'next/image'
import { GithubIcon, LinkedInIcon, EmailIcon } from "../icons";
import maltLogo from '@/assets/malt.svg'

interface ISocialLinksProps {}
export function SocialLinks (props: ISocialLinksProps) {
    return (
        <div className='flex w-full justify-evenly flex-wrap font-light'>
            <a
                className='flex flex-row py-2 px-1 items-center hover:font-semibold hover:text-lg'
                href="https://www.linkedin.com/in/timi-duban"
                target="_blank"
            >
                <LinkedInIcon />timi-duban
            </a>
            <a
                className='flex flex-row py-2 px-1 items-center hover:font-semibold hover:text-lg' 
                href="https://github.com/Timi-Duban"
                target="_blank"
            >
                <GithubIcon />Timi-Duban
            </a>
            <a
                className='flex flex-row py-2 px-1 items-center hover:font-semibold hover:text-lg' 
                href="https://www.malt.fr/profile/timiduban"
                target="_blank"
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
            <a
                className='flex flex-row py-2 px-1 items-cente hover:font-semibold' 
                href="mailto:timi.duban@gmail.com"
                target="_blank"
            >
                <EmailIcon />timi.duban@gmail.com
            </a>
        </div>
    );
}
