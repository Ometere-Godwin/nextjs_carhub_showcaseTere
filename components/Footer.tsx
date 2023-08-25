import Image from 'next/image';
import React from 'react';
import logo from "../public/logo.svg";
import {footerLinks} from "../constants/index"
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-300'>
            <div className='flex max-md:flex-col flex-wrap justify-between
        gap-5 sm:px-16 px-6 py-10'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <Image src={logo} alt='log' className='h-[18px] w-[118px] object-contain'/>
            <p className='text-base test-gray-700'>Carhub <br />
            All rights reserved &copy;</p>
            </div>

            <div className='footer__links'>
                {footerLinks.map ((link) => (
                    <div key = {link.title} className='footer__link'> 
                    <h3 className='font-bold'>{link.title}</h3>

                    {link.links.map((item) => (
                        <Link key={item.title}
                        href={item.url}
                        className='text-gray-500'>
                            {item.title}
                        </Link>
                    ))}
                    </div>
                ))}
            </div>
            </div>

            <div className='flex justify-between items-center flex-wrap
            mt-19 border-t border-gray-100 sm:px-16 py-10'>

                <p>@2023 CarHub. All Rights Reserved</p>

                <div className='footer__copyrights-link'>
                    <Link href="/" className='text-gray-500'>Privacy Policy</Link>
                    <Link href="/" className='text-gray-500'>Term of Use</Link>
                </div>
            </div>           
        </footer>
    )
}
