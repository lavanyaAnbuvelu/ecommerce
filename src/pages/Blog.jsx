import React from 'react'

export default function Blog() {
    return (
        <>
            <div className='max-w-360 mx-auto'>
                <div className='flex md:flex-row flex-col pt-5 gap-8 px-4 '>
                    <div className='space-y-4'>
                        <h2 className='text-lg text-[#290a03] font-semibold'>August 21, 2025 | 10 Comments | by Alex Marks | Focaccia</h2>
                        <p className='md:text-3xl text-2xl text-[#290a03] font-bold'>Honeycomb bakes a nature inspired name symbolizing sweetness and quality.</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-lg text-gray-500 font-medium'>The term often describes a cake, candy, or other dessert that features or is infused with the crisp, aerated sugar confection known as honeycomb or sponge toffee.</p>
                        <div className='flex gap-4' >
                            <p className='text-lg text-gray-500'>Follow us</p>
                            <p className='text-lg text-[#290a03] font-semibold'>Facebook - Twitter - Instagram - Youtube</p></div>
                    </div>
                </div>
                <img src="/images/imgi_11_6904b3e08033dac4148421bb_blog-main-2.png" alt="" className='rounded-4xl pt-10 px-4' />
            </div>
            <div className='max-w-190 mx-auto px-4 space-y-6 pt-15'>
                <h1 className='text-2xl font-semibold  text-[#290a03]'>Sweet kneads for a commercial establishment</h1>
                <p className=' font-medium  text-[#290a03]'>Heat causes significant changes in batters and doughs, developing a firm crust and a soft interior through processes like gluten development and leavening.</p>
                <p className='font-semibold  text-gray-500'>Ancient process of cooking food using dry heat, most often in an oven, to transform ingredients like flour, water, and leavening agents into firm-crusted, soft-centered goods such as bread, cakes, and bagels to pastries like croissants, muffins, and danishes.</p>
                <img src="/images/imgi_12_68d67a9b7ed67a520cdca618_blog-extra-2.png" alt="" className='rounded-4xl' />
                <div className='bg-[#f4ebe2] p-8 rounded-2xl' >
                    <p className='text-xl font-semibold  text-[#290a03]'>"Baking cookies is comforting, and cookies are the sweetest little bit of comfort food. They are very bite-sized and personal"</p>
                </div>
                <h1 className='text-2xl font-semibold  text-[#290a03]'>Key points</h1>
                <div className='md:text-lg text-sm  font-medium text-[#290a03] space-y-2'>
                    <p>- Heated air moves in a cycle within the oven, carrying heat to the food.</p>
                    <p>- Bread and other flour-based items are the most common baked goods.</p>
                    <p>- Making cuts on the surface of dough before baking to control expansion.</p></div>
                <div>
                    <h1 className='text-2xl font-semibold  text-[#290a03]'>Common baking challenges</h1>
                    <p className='text-lg text-gray-500 pt-4'>Baking challenges include issues with ingredient quality, incorrect temperature, improper measuring, and poor techniques, leading to problems like dryness, uneven baking, and dough inconsistency. For businesses, challenges involve rising costs, supply chain disruptions, allergen control, shelf-life management, and evolving consumer demands, alongside operational issues.</p>
                </div>
            </div>
            <div className='max-w-360 lg:mx-auto px-4'>
                <div className='grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-4 pt-5 md:pt-20 '>
                    <div className=' group bg-[url(/images/imgi_21_68d51c5fa2dde26b3dad27a3_instagram-5.png)] bg-cover bg-center rounded-3xl order-1 p-2'>
                        <div className=' bg-[#290a03] lg:h-55 w-full h-full  p-4 lg:pt-15 lg:px-10 space-y-4 opacity-0 hover:cursor-pointer group-hover:opacity-50 rounded-3xl'>
                            <div className='flex flex-col text-center items-center gap-2' >
                                <img src="/images/imgi_17_68c951a602ea9a2f03977839_instagram-feed.png" className='' alt="" />
                                <h1 className='text-xl text-amber-400 '>@Bisqueria</h1></div>
                        </div>
                    </div>
                    <div className=' group bg-[url(/images/imgi_20_68d51c5f58db4a526ef96a69_instagram-4.png)] bg-cover bg-center rounded-3xl order-2 p-2'>
                        <div className=' bg-[#290a03] lg:h-55 w-full h-full  p-4 lg:pt-15 lg:px-10 space-y-4 opacity-0 hover:cursor-pointer group-hover:opacity-50 rounded-3xl'>
                            <div className='flex flex-col text-center items-center gap-2' >
                                <img src="/images/imgi_17_68c951a602ea9a2f03977839_instagram-feed.png" className=' ' alt="" />
                                <h1 className='text-xl text-amber-400 '>@Bisqueria</h1></div>
                        </div>
                    </div>
                    <div className=' group bg-[url(/images/imgi_19_68d51c5ff25a8769cb090e6e_instagram-3.png)] bg-cover bg-center order-3 rounded-3xl p-2'>

                        <div className=' bg-[#290a03] lg:h-55 p-4 w-full h-full  lg:pt-15 lg:px-10 space-y-4 opacity-0 hover:cursor-pointer group-hover:opacity-40 rounded-3xl'>
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
                        <div className=' bg-[#290a03] lg:h-55 w-full h-full  p-4 lg:pt-15  lg:px-10 space-y-4 opacity-0 hover:cursor-pointer  group-hover:opacity-50 rounded-3xl'>
                            <div className='flex flex-col text-center items-center gap-2' >
                                <img src="/images/imgi_17_68c951a602ea9a2f03977839_instagram-feed.png" className='' alt="" />
                                <h1 className='text-xl text-amber-400 '>@Bisqueria</h1></div>
                        </div>
                    </div>
                    <div className=' group bg-[url(/images/imgi_22_68d51c5f3a9cd1643e8bcb43_instagram-6.png)] bg-cover bg-center order-6 rounded-3xl p-2'>
                        <div className=' bg-[#290a03]  lg:h-55 w-full h-full p-4 lg:pt-15 lg:px-10 space-y-4 opacity-0 hover:cursor-pointer group-hover:opacity-50 rounded-3xl'>
                            <div className='flex flex-col text-center items-center gap-2' >
                                <img src="/images/imgi_17_68c951a602ea9a2f03977839_instagram-feed.png" className='' alt="" />
                                <h1 className='text-xl text-amber-400 '>@Bisqueria</h1></div>
                        </div>
                    </div>
                    <div className=' group bg-[url(/images/imgi_21_68d680689c9187b6a5e053c9_products-10.png)] bg-cover bg-center rounded-3xl lg:order-7 md:order-4 order-4 p-2'>
                        <div className=' bg-[#290a03]  lg:h-55 w-full h-full  p-4 lg:pt-15 lg:px-10  space-y-4 opacity-0 hover:cursor-pointer group-hover:opacity-50 rounded-3xl'>
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
