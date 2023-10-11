'use client'

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface IFormProps {}
export default function Form () {
    const { t } = useTranslation();
    const [res, setRes] = useState('');

    const handleSubmit = (e: any) => {
        // Prevent the browser from reloading the page
        e.preventDefault();

        setRes('Please wait...');
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = JSON.stringify(Object.fromEntries(formData.entries()));

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: formJson
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                setRes(json.message);
            } else {
                console.log(response);
                setRes(json.message);
            }
        })
        .catch(error => {
            console.log(error);
            setRes('Something went wrong!');
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                setRes('');
            }, 3000);
        });
    };
    
    return (
        <div className='flex flex-1 justify-center my-8'>
            <form
                className='w-4/5' 
                method='post' onSubmit={handleSubmit}
            >
                <input type='hidden' name='access_key' value='4df3931f-4d05-4e2f-ae1d-10a593c366a8' />
                <div className='flex flex-wrap -mx-3 mb-4'>
                    <div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
                        <label className='block uppercase tracking-wide text-xs font-semibold md:font-medium'>
                            {t('name')}
                        <input 
                            className='appearance-none focus:outline-none focus:bg-white focus:border-neutral-500 block w-full rounded py-3 px-4 leading-tight bg-neutral-100 md:bg-neutral-200 text-neutral-700 border border-neutral-200'
                            type='text' placeholder={t('name')} name='name' required
                        />
                        </label>
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                        <label className='block uppercase tracking-wide text-xs font-semibold md:font-medium'>
                            Email
                        <input 
                            className='appearance-none focus:outline-none focus:bg-white focus:border-neutral-500 block w-full rounded py-3 px-4 leading-tight bg-neutral-100 md:bg-neutral-200 text-neutral-700 border border-neutral-200'
                            type='email' placeholder='Email' name='email' required
                        />
                        </label>
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-4'>
                    <div className='w-full px-3'>
                        <label className='block uppercase tracking-wide text-xs font-semibold md:font-medium'>
                            {t('subject')}
                        <input 
                            className='appearance-none focus:outline-none focus:bg-white focus:border-neutral-500 block w-full rounded py-3 px-4 leading-tight bg-neutral-100 md:bg-neutral-200 text-neutral-700 border border-neutral-200'
                            type='text' name='subject' placeholder={t('subjectPlaceholder')} required
                        />
                        </label>
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-4'>
                    <div className='w-full px-3'>
                        <label className='block uppercase tracking-wide text-xs font-semibold md:font-medium'>
                            Message
                        <textarea
                            className='no-resize appearance-none block w-full bg-neutral-100 md:bg-neutral-200 text-neutral-700 border border-neutral-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-neutral-500 h-24 md:h-48 resize-none'
                            name='message' placeholder='Message'
                        />
                        </label>
                    </div>
                </div>
                <button className='w-full shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'>
                Send
                </button>

                <p className='text-lg font-bold text-center mt-2 '>{res}</p>
            </form>
        </div>
    );
}
