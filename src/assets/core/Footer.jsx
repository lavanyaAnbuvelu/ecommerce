import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <footer className='lg:p-10 p-4 bg-[#f5ece4] mt-10  w-full'>
                <div className='max-w-360 w-full  mx-auto'>
                <div className='lg:flex gap-5 xl:gap-10 justify-between w-full space-y-10 '>
                    <div className='space-y-2 w-full lg:w-1/3 mx-auto'>
                        <h1 className='text-[#290a03] text-3xl font-bold bellota-text'>Sunshine in your inbox</h1>
                        <h2>Get 25% off your starter kit when you sign up</h2>
                        <div className='space-y-2'>
                            <div className='flex gap-2 py-5'>
                                <div className='border rounded-full w-85 p-2 border-gray-300'>
                                    <input className='outline-0' placeholder='Enter your mail' />
                                </div>
                                <div className='bg-amber-300 rounded-full items-center w-10 p-3 hover:cursor-pointer hover:bg-[#290a03] hover:text-amber-300'>
                                    <FaArrowRight />
                                </div>
                            </div>
                            <p className='text-gray-600'>You can unsubscribe by using the unsubscribe link. Our Privacy Policy applies and sets out your rights.</p>
                        </div>
                    </div>
                    <div className='space-y-2 w-full lg:w-1/3 mx-auto'>
                        <h2 className='lg:text-xl text-lg  text-[#290a03] font-bold mb-4 bellota-text'>Contact Us</h2>
                        <h1 className='text-gray-700 font-semibold '>info@example.com</h1>
                        <p className='text-[#290a03] lg:text-3xl text-2xl font-bold bellota-text'>+0123-456-9870</p>
                        <p className='text-gray-600 pt-2'>27th Street, 15th Floor, New York, NY 1010</p>
                        <p className='text-[#290a03] pt-2 underline font-semibold text-xl underline-offset-3 bellota-text' >Get direction</p>
                    </div>
                    <div className='flex lg:justify-around lg:gap-0 gap-8 justify-start sm:10 mx-auto w-full lg:w-1/3 text-nowrap'>
                        <div>
                            <h1 className='text-xl text-[#290a03] font-medium mb-4 bellota-text'>Useful link</h1>
                            <div className='list-none font-semibold text-gray-500 space-y-1.5'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Blog</li>
                                <li>Search results</li>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-xl text-[#290a03] font-medium mb-4 bellota-text'>Our utilities</h1>
                            <div className='list-none font-semibold text-gray-500 space-y-1.5'>
                                <li>Style guide</li>
                                <li>Changelog</li>
                                <li>Licenses</li>
                                <li>protected pages</li>
                                <li>404</li>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='lg:flex  items-center lg:pt-2 pt-5 w-full gap-15'>
                    <div className='space-y-2 w-full lg:w-1/3 '>
                    <h2 className='lg:text-xl text-sm text-nowrap text-[#290a03] font-bold bellota-text' >Facebook - Twitter - Instagram - Youtube</h2>
                    <p className='text-gray-600 '>© 2025 Bisqueria made by Themetechmount powered by Webflow</p>
                    </div>

                        <h1 className='lg:text-[100px] text-center text-[40px] font-bold bellota-text text-[#290a03] hidden lg:block '>Bisqueria</h1>

                </div>
                </div>

            </footer>
        </>
    )
}
