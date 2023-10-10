'use client'

import { IconContext } from "react-icons";
import { BsLaptop } from 'react-icons/bs'
import { BsDownload } from 'react-icons/bs';
import { CiMobile4 } from 'react-icons/ci';

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
            <div>
                <BsLaptop  />
            </div>
        </IconContext.Provider>
    );
}

export function PhoneIcon () {
    return (
        <IconContext.Provider value={{ size: '3.5em' }}>
            <div>
                <CiMobile4  />
            </div>
        </IconContext.Provider>
    );
}