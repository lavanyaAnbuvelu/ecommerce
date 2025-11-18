import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function OrderPage() {
    const items = [
        { img1: '/images/imgi_15_68d67ed24708b3054414f063_products-1.png', img2: '/images/imgi_21_68d51c5fa2dde26b3dad27a3_instagram-5.png', name: 'Oatmeal raisin cookies', reviews: '146 reviews', price: '$ 3.84 USD', Category: '' },
        { img1: '/images/imgi_17_68d67f5c6342b6c7ed37d668_products-14.png', img2: '/images/imgi_14_68d67fa7c1577d919bb48d61_products-7.png', name: 'Soft pretzels', reviews: '235 reviews', price: '$ 4.64 USD', Category: '' },
        { img1: '/images/imgi_21_68d51c5fa2dde26b3dad27a3_instagram-5.png', img2: '/images/imgi_19_68d67fe4ab262b4e4de1a29e_products-18.png', name: 'Baguette soft breads', reviews: '380 reviews', price: '$ 14.84 USD', Category: '' },
        { img1: '/images/imgi_21_68d680689c9187b6a5e053c9_products-10.png', img2: '/images/imgi_14_68d6809c139ef3cd1f1a7106_products-16.png', name: 'Chocolate hazelnut cannoli', reviews: '120 reviews', price: '$ 3.24 USD', Category: '' },

    ]
    
     const text=[{msg:'Pretzels are a baked bread snack with a distinctive knot-like shape, made from dough that is boiled or treated with an alkali solution before being baked to give it a crunchy, glossy, and brown crust.',Category:'Product info'},
        {msg:'They come in two main varieties: large, chewy soft pretzels, often served warm with dips like mustard or cheese, and smaller, crisp hard pretzels that are a popular snack.',Category:'Product description'}
     ]

    const [setdata,selecteddata]= useState('Product info')


    return (
        <>
            <section className='max-w-300 mx-auto px-4'>
                <div>
                    <div className='pt-10  md:flex gap-20 '>
                        <div className='grid md:grid-cols-1 grid-cols-2 gap-4'>
                            <img src="/images/imgi_15_68d67ed24708b3054414f063_products-1.png" alt="" className='rounded-3xl w-320 ' />
                            <img src="/images/imgi_17_68d67f5c6342b6c7ed37d668_products-14.png" alt="" className='rounded-3xl w-320 ' />
                        </div>
                        <div className='space-y-4 sticky top-20 h-fit'>
                            <div className='flex items-center pt-2'>
                                <div className='flex text-amber-500 text-center '>
                                    <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' />
                                </div>
                                <p className='text-gray-500 text-base font-medium text-center '>124 reviews</p>
                            </div>
                            <div className='space-y-4' >
                                <h1 className='text-3xl font-bold text-[#290a03]'>Oatmeal raisin cookies</h1>
                                <div className='flex gap-4'>
                                    <p className='text-lg font-semibold text-[#290a03]'>$ 3.84 USD</p>
                                    <p className='text-lg font-semibold text-gray-500 '>$ 4.96 USD</p>
                                </div>
                            </div>
                            <div className='flex gap-8 items-center'>
                                <input type="number" name="" defaultValue={1} min={1} max={10} id="" className='bg-[#f4ebe2] w-20 px-4 rounded-full h-12 ' />
                                <h1 className='lg:text-xl text-lg font-bold bg-[#290a03] text-white hover:bg-amber-400 lg:w-80 w-full cursor-pointer rounded-full text-center p-2 hover:text-[#290a03]'>Add to Cart</h1>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-lg text-gray-500 '>Categories:</p>
                                <p className='text-lg font-semibold text-[#290a03]'>Pretzel</p>
                            </div>
                            <hr />
                            <div>
                                <div className='flex gap-6 text-center pt-4 *:cursor-pointer'>
                                    <button onClick={() => setdata('Product info')} className={`bg-amber-400 text-[#290a03] hover:bg-[#290a03] ${selecteddata == 'Product info' ? 'bg-amber-400' : 'bg-[#f4ebe2]'} p-3 font-semibold rounded-full hover:text-white `}>Product info</button>
                                    <button onClick={() => setdata('Product description')} className={`bg-[#f4ebe2] text-[#290a03] p-3 font-semibold ${selecteddata == 'Product description' ? 'bg-amber-400' : 'bg-[#f4ebe2]'} rounded-full `}>Product description</button>
                                </div>
                                {text.map((item,index) => (
                                <div>
                                <p className='text-lg text-gray-500 pt-4 '>{item.msg}</p>
                                </div> ))}
                            </div>
                            <hr />
                            <div className='flex flex-wrap gap-8 pt-4 '>
                                <div className='flex gap-2'>
                                    <img src="/images/imgi_15_68c93b1bd3e11d6385facaf0_tab.png" alt="" />
                                    <h1 className='text-lg font-semibold text-[#290a03]'>Fast shipping</h1>
                                </div>
                                <div className='flex gap-2'>
                                    <img src="/images/imgi_16_68c93b1b78b319a3d40f2633_payments.png" alt="" />
                                    <h1 className='text-lg font-semibold text-[#290a03]'>Secure payments</h1>
                                </div>
                                <div className='flex gap-2'>
                                    <img src="/images/imgi_17_68c93b1b4ec60e3db473e4d6_gift.png" alt="" />
                                    <h1 className='text-lg font-semibold text-[#290a03]'>Gift box</h1>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </section>
            <div className='max-w-360 mx-auto pt-15 px-4 '>
                <div className='sm:flex justify-between ml-10 items-center'>
                    <h1 className='text-4xl font-bold text-[#290a03] bellota-text'>Daily boost bakery items</h1>
                    <div className='flex gap-4 pt-5 *:cursor-pointer  '>
                        <FaArrowLeft className='custom-prev bg-[#f4ebe2] w-8 p-2 items-center rounded-full hover:bg-[#290a03] hover:text-amber-300' size={34} />
                        <FaArrowRight className='custom-next bg-[#f4ebe2] w-8 p-2 items-center rounded-full hover:bg-[#290a03] hover:text-amber-300' size={34} />
                    </div>
                </div>
            </div>

            <div className="pt-10 px-4">

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 5 },
                        640: { slidesPerView: 3, spaceBetween: 10 },
                        1350: { slidesPerView: 4, spaceBetween: 15 },
                    }}
                    navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    speed={1000}
                    className=''
                >
                    {items.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className='group p-2 rounded-4xl pl-2 bg-linear-to-b from-white mx-2 to-[#f4ebe2] hover:from-[#f4ebe2] '>
                                <div className='relative h-full' >
                                    <img className='rounded-3xl absolute w-full h-full opacity-0 group-hover:opacity-100 duration-300  ' src={product.img1} alt="" />
                                    <img className='rounded-3xl w-full h-full object-cover object-center' src={product.img2} alt="" />
                                </div>
                                <div className='ml-4'>
                                    <h1 className='lg:text-xl text-lg font-semibold text-[#290a03] line-clamp-1 pt-3'>{product.name}</h1>
                                    <div className='flex justify-between pt-2 sm:gap-2 lg:gap-4'>
                                        <div className='flex text-amber-500 '><FaStar className='h-3 w-3 lg:h-6 lg:w-6' /> <FaStar className='h-3 w-3 lg:h-6 lg:w-6' /> <FaStar className='h-3 w-3 lg:h-6 lg:w-6' /><FaStar className='h-3 w-3 lg:h-6 lg:w-6' /><FaStar className='h-3 w-3 lg:h-6 lg:w-6' /></div>
                                        <p className='text-gray-500 text-sm lg:text-base'>{product.reviews}</p>
                                    </div>
                                </div>
                                <button className='w-full group/abc flex flex-col md:flex-row justify-center cursor-pointer relative rounded-full lg:gap-2 p-3 items-center mt-3 bg-white hover:text-white overflow-hidden'>

                                    <h1 className='text-[#290a03] font-bold group-hover/abc:text-amber-300 z-10'>Order Now</h1>
                                    <p className='text-gray-500 font-semibold group-hover/abc:text-white z-10'>{product.price}</p>
                                    <div className="absolute bg-[#290a03] top-7 md:top-5 left-3 h-2 w-2 duration-700 rounded-full group-hover/abc:h-full group-hover/abc:w-full group-hover/abc:top-0 group-hover/abc:left-0 "></div>
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

        </>
    )
}
