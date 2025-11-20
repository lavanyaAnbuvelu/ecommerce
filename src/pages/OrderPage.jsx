import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function OrderPage() {
    const [setdata, selecteddata] = useState('info')
    const [data, setData] = useState()
    const location = useLocation().state
    const navigate = useNavigate()
    const submit = (e) => {
        e.preventDefault()
    }
    const data1 = (item) => {
        navigate('/order', { state: item })
    }
    const sendToWhatsapp = () => {
        const phone = "919894677187";
        const text = `
      Product Details:%0A +
      Name: ${location.name}%0A+
      Price: ${location.price}%0A+
      Reviews:${location.reviews}%0A+
      Quantity:${data.quantity}
     `;
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
        window.open(url, "_blank");
    };
    const items = [
        { img1: '/images/imgi_24_68d680fb088131fe616531ec_products-6.png', img2: '/images/imgi_17_68d67f5c6342b6c7ed37d668_products-14.png', name: 'Croissant au beurre', reviews: '146 reviews', price: '$ 3.84 USD', Category: '' },
        { img1: '/images/imgi_17_68d67f5c6342b6c7ed37d668_products-14.png', img2: '/images/imgi_14_68d67fa7c1577d919bb48d61_products-7.png', name: 'Soft pretzels', reviews: '235 reviews', price: '$ 4.64 USD', Category: '' },
        { img1: '/images/imgi_21_68d51c5fa2dde26b3dad27a3_instagram-5.png', img2: '/images/imgi_19_68d67fe4ab262b4e4de1a29e_products-18.png', name: 'Baguette soft breads', reviews: '380 reviews', price: '$ 14.84 USD', Category: '' },
        { img1: '/images/imgi_21_68d680689c9187b6a5e053c9_products-10.png', img2: '/images/imgi_14_68d6809c139ef3cd1f1a7106_products-16.png', name: 'Chocolate hazelnut cannoli', reviews: '120 reviews', price: '$ 3.24 USD', Category: '' },
        { img1: '/images/imgi_14_68d6809c139ef3cd1f1a7106_products-16.png', img2: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', name: 'Focaccia genovese', reviews: '092 reviews', price: '$ 13.84 USD', Category: '' },
    ]
    return (
        <>
            <section className='max-w-300 mx-auto px-4 lg:pt-40 pt-20'>
                <div>
                    <div className='pt-10  md:flex gap-20 '>
                        <div className='grid md:grid-cols-1 grid-cols-2 gap-4 md:w-1/2 w-full'>
                            <img src={location.img1} alt="" className='rounded-3xl w-full' />
                            <img src={location.img2} alt="" className='rounded-3xl w-full' />
                        </div>
                        <div className='space-y-6 sticky top-20 h-fit md:w-1/2 w-full'>
                            <div className='flex gap-2 items-center pt-2'>
                                <div className='flex text-amber-500 text-center '>
                                    <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' />
                                </div>
                                <p className='text-gray-500 text-base font-medium text-center '>{location.reviews}</p>
                            </div>
                            <div className='space-y-4' >
                                <h1 className='text-3xl font-bold text-[#290a03]'>{location.name}</h1>
                                <div className='flex gap-4'>
                                    <p className='text-lg font-semibold text-[#290a03]'>{location.price}</p>
                                    <p className='text-lg font-semibold text-gray-500 '>$ {4.96} USD</p>
                                </div>
                            </div>
                            <div className='flex gap-8 items-center'>
                                <input onChange={(e) => setData({ ...data, "quantity": e.target.value })} type="number" name="" defaultValue={1} min={1} max={10} id="" className='bg-[#f4ebe2] w-20 px-4 rounded-full h-12 ' />
                                <button onClick={() => sendToWhatsapp(location)} className='lg:text-xl text-lg font-bold bg-[#290a03] text-white hover:bg-amber-400 lg:w-80 w-full cursor-pointer rounded-full text-center p-2 hover:text-[#290a03]'>Add to Cart</button>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-lg text-gray-500 '>Categories:</p>
                                <p className='text-lg font-semibold text-[#290a03]'>Pretzel</p>
                            </div>
                            <hr />
                            <div>
                                <div className='flex gap-6 text-center pt-4 *:cursor-pointer'>
                                    <button onClick={() => selecteddata('info')} className={` text-[#290a03] hover:bg-[#290a03] ${setdata == 'info' ? 'bg-amber-400' : 'bg-[#f4ebe2]'} p-3 font-semibold rounded-full hover:text-white `}>Product info</button>
                                    <button onClick={() => selecteddata('description')} className={`bg-[#f4ebe2] text-[#290a03] p-3 font-semibold ${setdata == 'description' ? 'bg-amber-400' : 'bg-[#f4ebe2]'} rounded-full `}>Product description</button>
                                </div>

                                <div className='text-lg text-gray-500 pt-4'>
                                    {setdata == 'info' ?
                                        <p>As a baked good, a cookie is a small, sweet biscuit with high sugar and fat content. While recipes vary, the dough is often made from a base of flour, sugar, butter or oil, and eggs</p>
                                        :
                                        <p>A Drop cookies are made by dropping soft dough by spoonfuls onto a baking sheet, like classic chocolate chip and oatmeal raisin cookies.</p>
                                    }
                                </div>
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
            <div className='max-w-360 mx-auto pt-15 lg:px-4 px-0 '>
                <div className='sm:flex justify-between px-4 items-center'>
                    <h1 className='text-4xl font-bold text-[#290a03] bellota-text'>Daily boost bakery items</h1>
                    <div className='flex gap-4 pt-5 *:cursor-pointer  '>
                        <FaArrowLeft className='custom-prev bg-[#f4ebe2] w-8 p-2 items-center rounded-full hover:bg-[#290a03] hover:text-amber-300' size={34} />
                        <FaArrowRight className='custom-next bg-[#f4ebe2] w-8 p-2 items-center rounded-full hover:bg-[#290a03] hover:text-amber-300' size={34} />
                    </div>
                </div>
            </div>
            <div className="pt-10 px-2 max-w-360 mx-auto ">
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
                    className='' >
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
                                <button onClick={() => data1(product)} className='w-full group/abc flex flex-col md:flex-row justify-center cursor-pointer relative rounded-full lg:gap-2 p-3 items-center mt-3 bg-white hover:text-white overflow-hidden'>
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
