import React, { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import { FaArrowRight } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

export default function AboutPage() {
    const maxItems = window.innerWidth < 700 ? 1 : window.innerWidth < 1000 ? 2 : 3;

    const person = [
        { text: '“ Whether it’s the warm bread, or just the cozy aroma that fills the air, this bakery always brighter ”', img: '/images/imgi_47_68cbcbffbe9b0a3cd99a7a8e_testimonial-1.png', name: 'Daniel armstrong', sm: 'Physician & athlet' },
        { text: '“ The aroma hits you the moment you walk in. Every bite tastes like it was made just for me ”', img: '/images/imgi_48_68cbcbff23a598f4014ed4fc_testimonial-2.png', name: 'Evelyn hall', sm: 'Diet instructor' },
        { text: '“ They’re open whenever my cravings hit, and the quality of food is always top notch ”', img: '/images/imgi_49_68cbcbfff6f10040b5838a58_testimonial-3.png', name: 'James robinson', sm: ' NYT bestselling author' },

    ]
    return (
        <>
            <div className='max-w-360 lg:mx-auto px-4 py-5'>
                <div className='lg:flex gap-90 justify-between items-center'>
                    <h1 className='text-5xl font-bold text-nowrap py-4 text-[#290a03] bellota-text'>About us</h1>
                    <p className='text-xl text-gray-800 text-wrap hidden lg:block '>We use only the finest ingredients to create an array of delicious treats, from classic sourdough breads to delicate pastries and custom-designed cakes for all your special occasions.</p>                </div>
                <div className=' py-8'>
                    <img src="/images/imgi_11_68c95a08f03442140eb1b354_about-pagetitle.png" className=' rounded-3xl min-h-40 object-center object-cover  ' alt="" />
                </div>
            </div>
            <div className='max-w-280 lg:mx-auto mx-4 lg:pt-15 '>
                <div className='space-y-8'>
                    <h1 className='text-xl font-medium text-gray-500  text-center'>Partnering with top tiers to revolutionize financial services.</h1>
                    <Marquee loop={0}>
                        <div className='flex gap-8 px-4'>
                            <img src="/images/imgi_50_68c95c37e3e80dca3e5564fc_client-1.png" alt="" />
                            <img src="/images/imgi_51_68cea1357c90704dd109b3f0_client-2.png" alt="" />
                            <img src="/images/imgi_53_68cea135d7393226b869776d_client-4.png" alt="" />
                            <img src="/images/imgi_52_68cea13545702f6c824a63ad_client-3.png" alt="" />
                            <img src="/images/imgi_55_68cea185fd90d450bd1d077a_client-6.png" alt="" />
                            <img src="/images/imgi_54_68cea135b7c12bfd834d1107_client-5.png" alt="" />

                        </div>
                    </Marquee>
                </div>
                <div className='lg:pt-15 pt-5 text-gray-400'>
                    <hr></hr>
                </div>
                <div className='lg:pt-15 pt-5 px-2 p-2 lg:flex gap-12'>
                    <div className='bg-[url(/images/imgi_18_68d51a5d772c066d09230f90_about-3.png)] bg-cover rounded-3xl '>
                        <div className='lg:w-140 lg:h-140 ' >
                            <div className='lg:pt-80 pb-10 pt-50 lg:pl-10 pl-5 '>
                                <div className='w-50 h-48 p-4 bg-amber-50 space-y-4 rounded-3xl'>
                                    <h1 className='text-[#290a03] font-semibold'>Opening hours</h1>
                                    <p className='text-[#290a03] font-bold'>Monday - Saturday</p>
                                    <p className='text-gray-500 font-semibold '>09:00 Am to 8:30 Pm</p>
                                    <div className='flex gap-4  w-35 rounded-full bg-[#f4ebe2] p-2'>
                                        <h1 className='text-[#290a03] font-semibold' >Sunday</h1>
                                        <h1 className='text-gray-500 font-semibold '>Closed</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 lg:p-0' >
                        <h1 className='text-4xl text-[#290a03] font-bold pt-5 lg:pt-8 bellota-text'>We are the world's biggest online bakery</h1>
                        <div className='lg:flex gap-20 pt-5'>
                            <h1 className='text-xl text-[#290a03] text-nowrap font-semibold'>Our Vision</h1>
                            <p className='pt-4 lg:pt-0 text-gray-500 font-medium text-lg'>Our vision statements express a bakery's aspirational future, establishing globally, focusing on qualities like providing high-quality products.</p>
                        </div>
                        <hr className='my-6' />
                        <div className='lg:flex gap-16 lg:pt-5'>
                            <h1 className='text-xl text-[#290a03] text-nowrap font-semibold  '>Our Mission</h1>
                            <p className='pt-4 lg:pt-0 text-gray-500 font-medium text-lg'>Our mission is to create community and conversation using fresh-baked pastries and espresso To produce, distribute all over cities.</p>
                        </div>
                        <div className='flex gap-6 items-center  rounded-full w-40 p-3 bg-amber-400 cursor-pointer text-[#290a03] font-semibold mt-10 hover:bg-[#290a03] hover:text-amber-300'>
                            <GoDotFill />
                            <Link to={'/contact'} ><h1>Contact Us</h1></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-360 mx-auto lg:pt-20 pt-10 px-4 '>
                <h1 className='text-4xl font-bold text-center text-[#290a03] bellota-text'>The process behind the heat</h1>
                <div className='grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2  lg:gap-8 gap-4 pt-10'>
                    <div className='bg-[#f4ebe2] rounded-3xl p-8  py-12  '>
                        <div className='flex gap-6'>
                            <h1 className='w-12 h-10 p-2 pt-1 pl-3  rounded-full items-center  bg-white text-2xl text-[#290a03] font-bold' >A</h1>
                            <div className='space-y-4 '>
                                <h1 className='text-2xl font-bold text-[#290a03] bellota-text'>Fresh first, always</h1>
                                <p className='text-lg text-gray-600'>The process of baking involves preparing a mixture of ingredients into a dough.</p>
                            </div>
                        </div>
                        <hr className='my-8' />
                        <div className='flex gap-6'>
                            <h1 className='w-12 h-10 p-2 pt-1 pl-3  rounded-full items-center  bg-white text-2xl text-[#290a03] font-bold' >B</h1>
                            <div className='space-y-2'>
                                <h1 className='text-2xl font-bold text-[#290a03] bellota-text'>Flavor leads everything</h1>
                                <p className='text-lg text-gray-600'>Flavor profiles and how they are affected by the baking process,  classic tastes.</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <img src="/images/imgi_19_68d51a5d5c22dcb3ef794c19_about-4.png" className='rounded-3xl hidden h-full object-cover object-center sm:block' alt="" />
                    </div>
                    <div className='bg-[#f4ebe2] rounded-3xl p-8 py-12 '>
                        <div className='flex gap-6'>
                            <h1 className='w-12 h-10 p-2 pt-1 pl-3  rounded-full items-center  bg-white text-2xl text-[#290a03] font-bold' >C</h1>
                            <div className='space-y-4'>
                                <h1 className='text-2xl font-bold text-[#290a03] bellota-text'>Honest pricing</h1>
                                <p className='text-lg text-gray-600'>Calculating the direct costs of ingredients and labor and a desired profit margin.</p>
                            </div>
                        </div>
                        <hr className='my-8' />
                        <div className='flex gap-6'>
                            <h1 className='w-12 h-10 p-2 pt-1 pl-3  rounded-full items-center  bg-white text-2xl text-[#290a03] font-bold' >D</h1>
                            <div className='space-y-2'>
                                <h1 className='text-2xl font-bold text-[#290a03] bellota-text'>Craft, not copy</h1>
                                <p className='text-lg text-gray-600'>Any baking process baker's skillful manipulation of ingredients, time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-280 mx-auto  px-4'>
                <div className='bg-[#f4ebe2] p-6 lg:mt-15 mt-10 rounded-3xl '>
                    <div className='lg:flex  lg:gap-30'>
                        <h1 className='text-3xl font-bold text-[#290a03] bellota-text'>Subscribe to our newsletter</h1>
                        <div>
                            <div className='flex gap-2 pt-5 lg:pt-0 '>
                                <div className='border rounded-full lg:w-150 lg:h-12 w-full  p-3 border-gray-300'>
                                    <input className='outline-0' placeholder='Type Here' />
                                </div>
                                <div className='bg-amber-300 rounded-full items-center w-12 h-12 p-3  cursor-pointer  hover:bg-[#290a03] hover:text-amber-300'>
                                    <FaArrowRight size={22} />
                                </div>
                            </div>
                            <div className='flex items-center gap-4 py-5' >
                                <p className='lg:w-4 lg:h-4 h-3 w-4  border rounded-full'></p>
                                <h1 className='text-[#290a03]'>Sign up for our newsletter and get our latest updates and offers</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 sm:px-4'>
                <div className='max-w-220 mx-auto text-center  pt-10 lg:pt-20'>
                    <h1 className='text-4xl font-bold text-[#290a03] bellota-text'>What our fans say</h1>
                </div>
                <div className='max-w-360  lg:mx-auto mx-2 pt-5 lg:pt-15 grid lg:grid-cols-3 lg:gap-10 gap-4  grid-cols-1  sm:grid-cols-2'>
                    {person.slice(0, maxItems).map((set, index) => {
                        return (
                            <div className='bg-[#f4ebe2] rounded-3xl p-6 space-y-4'>
                                <h1 className='lg:text-lg text-[15px] font-bold  text-[#290a03] bellota-text ' >{set.text}</h1>
                                <img src={set.img} className='rounded-3xl w-full ' alt="" />
                                <div className='lg:flex gap-4 lg:ml-18 ml-5 '>
                                    <h1 className='lg:text-lg text-sm font-medium  text-[#290a03]'>{set.name}</h1>
                                    <p className='lg:text-lg text-sm font-medium  text-gray-500'>{set.sm}</p>
                                </div>
                            </div>)
                    })}
                </div>

            </div>


        </>
    )
}
