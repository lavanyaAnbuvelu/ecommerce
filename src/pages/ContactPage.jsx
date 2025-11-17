import React from 'react'
import { GoDotFill } from "react-icons/go";
export default function ContactPage() {
    return (
        <>
            <div className='max-w-360 lg:mx-auto px-4 py-5'>
                <div className='lg:flex gap-90 justify-between items-center'>
                    <h1 className='text-5xl font-bold text-nowrap py-4 bellota-text text-[#290a03]'>Contact us</h1>
                    <p className='text-xl text-gray-800 text-wrap hidden lg:block '>We provide clear contact information, including address, phone number, email, website, and social media links. Include details like opening hours, payment methods.</p>
                </div>
                <div className=' pt-8'>
                    <img src="/images/imgi_11_68d523d62ce6986723c4a52f_contact-pagetitle.png" className=' rounded-3xl min-h-40 object-center object-cover  ' alt="" />
                </div>
            </div>

            <div className='max-w-300 mx-auto px-4 '>
                <div className='lg:py-6 bg-[#f4ebe2] rounded-3xl mt-4 lg:mt-15  p-4 lg:p-8'>
                <div className='lg:flex gap-30'>
                    <div className='max-w-[20rem] space-y-4' >
                        <h1 className='text-2xl font-bold  bellota-text text-[#290a03]'>We will take care of any problem and help you.</h1>
                        <p className='text-gray-700'>Contact information, including address, phone number, email, website, and social media links</p>
                    </div>
                    <div className='lg:flex gap-20 space-y-4 pt-4  '>
                        <div className='lg:space-y-2 flex lg:flex-col flex-row '>
                            <img src="/images/imgi_12_68ca4762e86df8637070b06e_phone.png" className='bg-white w-16 rounded-2xl h-16 p-2 lg:ml-8 ' alt="" />
                            <div className='mx-4' >
                                <p className='text-gray-600'>Contact us at</p>
                                <p className='text-[#290a03] font-semibold underline underline-offset-3'>+0123-456-9870</p></div>
                        </div>
                        <div className='lg:space-y-2 flex lg:flex-col flex-row '>
                            <img src="/images/imgi_13_68ca47626bf91c58761ece3d_handshake.png" className='bg-white w-16 rounded-2xl h-16 p-2 lg:ml-10 ' alt="" />
                            <div className='mx-4' >
                                <p className='text-gray-600'>Retail partnerships?</p>
                                <p className='text-[#290a03] font-semibold underline underline-offset-3'>info@example.com</p></div>
                        </div>
                        <div className='lg:space-y-2 flex lg:flex-col flex-row '>
                            <img src="/images/imgi_14_68ca4762322d7d886c667ff3_chat.png" className='bg-white w-16 rounded-2xl h-16 p-2 lg:ml-10' alt="" />
                            <div className='mx-4' >
                                <p className='text-gray-600'>Have questions?</p>
                                <p className='text-[#290a03] font-semibold underline underline-offset-3'>info@example.com</p></div>
                        </div>
                    </div></div>
                </div>
            </div>
            <div className='max-w-300 mx-auto lg:py-6 mt-8 lg:mt-15  px-4'>
                <div className='lg:flex gap-6'>
                    <div className="bg-[url(/images/imgi_15_68d51a609b6199689115071d_products-menu.png)] lg:max-w-120 w-full bg-cover rounded-4xl lg:min-h-150 bg-center">
                    <div className='lg:max-w-120 lg:min-h-160 rounded-4xl w-full bg-linear-to-b from-transparent  to-[#4d1e11]'>
                        <div className='lg:pt-90 pt-20 p-6 space-y-4'>
                            <h1 className='lg:text-3xl text-xl text-white font-bold '>Do you have more questions, let’s Talk?</h1>
                            <p className='text-xl text-white hidden lg:block '>Don’t worry! send your questions to us.</p>
                            <div className='text-yellow-400 font-bold border-amber-400 hover:bg-amber-400 hover:text-[#290a03] hover:cursor-pointer border-2 w-50 p-2 rounded-full  flex gap-2 items-center'>
                                <GoDotFill />
                                <p>+0123-456-9870</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#f4ebe2] rounded-3xl p-8 mt-8 lg:mt-0 my-5'>
                        <h1 className='text-3xl text-[#290a03] font-bold bellota-text' >How we can help you?</h1>
                        <div className=''>
                            <div className='lg:flex gap-6 lg:space-y-0 space-y-5 pt-5'>
                                <input type="text" name="" id="" placeholder='Your First Name' className='border rounded-full p-3 w-full lg:w-75' />
                                <input type="text" name="" id="" placeholder='Your Last Name' className='border rounded-full p-3 w-full lg:w-75' />
                            </div>
                            <div className='lg:flex gap-6 lg:space-y-0 space-y-5 pt-5'>
                                <input type="text" name="" id="" placeholder='Enter your email address' className='border rounded-full p-3 w-full lg:w-75' />
                                <input type="text" name="" id="" placeholder='Enter your phone number' className='border rounded-full p-3 w-full lg:w-75' />
                            </div>
                            <div className='pt-5'>
                                <input type="text" name="" id="" placeholder='Enter your Subject' className='border rounded-full p-3 w-full' />
                            </div>
                            <div className='pt-5'>
                               <textarea name="" id="" className='w-full outline-0 border rounded-3xl min-h-30 max-h-50 pt-2 pl-3' placeholder='Enter the Message'></textarea>
                            </div>
                            <div className='flex items-center gap-4 py-5' >
                                <p className='w-4 h-4 border  rounded-full'></p>
                                <h1 className='text-gray-500'>I agree with the terms & conditions</h1>
                            </div>
                            <div className='bg-amber-400 text-[#290a03] hover:bg-[#290a03] hover:text-amber-400 hover:cursor-pointer w-50 p-3 rounded-full flex gap-4 items-center'>
                                <GoDotFill />
                                <p>Send a message</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-360 lg:mx-auto px-4'>
                <div className='grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-4 pt-5 md:pt-20 '>
                    <div className=' group bg-[url(/images/imgi_21_68d51c5fa2dde26b3dad27a3_instagram-5.png)] bg-cover bg-center rounded-3xl order-1 p-2'>
                        <div  className= ' bg-[#290a03] lg:h-55 w-full h-full  p-4 lg:pt-15 lg:px-10 space-y-4 opacity-0 hover:cursor-pointer group-hover:opacity-50 rounded-3xl'>
                            <div className='flex flex-col text-center items-center gap-2' >
                            <img src="/images/imgi_17_68c951a602ea9a2f03977839_instagram-feed.png" className='' alt="" />
                            <h1 className='text-xl text-amber-400 '>@Bisqueria</h1></div>
                        </div>
                    </div>
                    <div className=' group bg-[url(/images/imgi_20_68d51c5f58db4a526ef96a69_instagram-4.png)] bg-cover bg-center rounded-3xl order-2 p-2'>
                        <div  className= ' bg-[#290a03] lg:h-55 w-full h-full  p-4 lg:pt-15 lg:px-10 space-y-4 opacity-0 hover:cursor-pointer group-hover:opacity-50 rounded-3xl'>
                            <div className='flex flex-col text-center items-center gap-2' >
                            <img src="/images/imgi_17_68c951a602ea9a2f03977839_instagram-feed.png" className=' ' alt="" />
                            <h1 className='text-xl text-amber-400 '>@Bisqueria</h1></div>
                        </div>
                    </div>
                    <div className=' group bg-[url(/images/imgi_19_68d51c5ff25a8769cb090e6e_instagram-3.png)] bg-cover bg-center order-3 rounded-3xl p-2'>

                        <div  className= ' bg-[#290a03] lg:h-55 p-4 w-full h-full  lg:pt-15 lg:px-10 space-y-4 opacity-0 hover:cursor-pointer group-hover:opacity-40 rounded-3xl'>
                            <div className='flex flex-col text-center items-center gap-2' >
                            <img src="/images/imgi_17_68c951a602ea9a2f03977839_instagram-feed.png" className='' alt="" />
                            <h1 className='text-xl text-amber-400 '>@Bisqueria</h1></div>
                        </div>
                    </div>
                    <div className=' bg-[#290a03] lg:h-60 h-30  rounded-3xl lg:pt-15 pt-3 space-y-3 col-span-2 md:col-span-2 lg:col-span-1 lg:order-4 md:order-7 order-7  '>
                        <div className='flex flex-col space-y-2 text-center items-center'>
                        <img src="/images/imgi_17_68c951a602ea9a2f03977839_instagram-feed.png" className='lg:h-8 lg:w-8 h-6 w-6' alt="" />
                        <p className='lg:text-xl text-lg text-white font-semibold text-wrap '>Freshly baked daily</p>
                            <h1 className='text-xl text-amber-400 underline underline-offset-6 cursor-pointer hover:text-white '>@Bisqueria</h1></div>
                    </div>
                    <div className=' group bg-[url(/images/imgi_16_68d51c60e940f3ff64e0808c_instagram-1.png)] order-5 bg-cover bg-center rounded-3xl p-2'>
                        <div  className= ' bg-[#290a03] lg:h-55 w-full h-full  p-4 lg:pt-15  lg:px-10 space-y-4 opacity-0 hover:cursor-pointer  group-hover:opacity-50 rounded-3xl'>
                            <div className='flex flex-col text-center items-center gap-2' >
                            <img src="/images/imgi_17_68c951a602ea9a2f03977839_instagram-feed.png" className='' alt="" />
                            <h1 className='text-xl text-amber-400 '>@Bisqueria</h1></div>
                        </div>
                    </div>
                    <div className=' group bg-[url(/images/imgi_22_68d51c5f3a9cd1643e8bcb43_instagram-6.png)] bg-cover bg-center order-6 rounded-3xl p-2'>
                        <div  className= ' bg-[#290a03]  lg:h-55 w-full h-full p-4 lg:pt-15 lg:px-10 space-y-4 opacity-0 hover:cursor-pointer group-hover:opacity-50 rounded-3xl'>
                            <div className='flex flex-col text-center items-center gap-2' >
                            <img src="/images/imgi_17_68c951a602ea9a2f03977839_instagram-feed.png" className='' alt="" />
                            <h1 className='text-xl text-amber-400 '>@Bisqueria</h1></div>
                        </div>
                    </div>
                    <div className=' group bg-[url(/images/imgi_21_68d680689c9187b6a5e053c9_products-10.png)] bg-cover bg-center rounded-3xl lg:order-7 md:order-4 order-4 p-2'>
                        <div  className= ' bg-[#290a03]  lg:h-55 w-full h-full  p-4 lg:pt-15 lg:px-10  space-y-4 opacity-0 hover:cursor-pointer group-hover:opacity-50 rounded-3xl'>
                            <div className='flex flex-col text-center items-center gap-2' >
                            <img src="/images/imgi_17_68c951a602ea9a2f03977839_instagram-feed.png" className='' alt="" />
                            <h1 className='text-xl text-amber-400 '>@Bisqueria</h1></div>
                        </div>
                    </div>

                </div>
            </div>



        </>

    )
}
