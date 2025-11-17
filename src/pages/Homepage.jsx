import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa6";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { BiCategory } from 'react-icons/bi';


export default function Homepage() {

  const [selectedCategory, setSelectedCategory] = useState('all')

  const location = useLocation()

  console.log(location.state)

  const navigate = useNavigate()

  const data1 = (text) => {
    console.log('data1')
    navigate('/menu', { state:text })
  }




  const names = [
    { name: 'Breads', no: '8', },
    { name: 'Cookies', no: '20', },
    { name: 'Pretzel', no: '8', },
    { name: 'Cake', no: '3', },
    { name: 'Pastries', no: '12', },
    { name: 'Croissant', no: '15', },
  ]

  const product = [
    { image: '/images/imgi_15_68d67ed24708b3054414f063_products-1.png', name: 'Oatmeal raisin cookies', reviews: '146 reviews', price: '$ 3.84 USD', Category: 'Best Sellers' },
    { image: '/images/imgi_17_68d67f5c6342b6c7ed37d668_products-14.png', name: 'Soft pretzels', reviews: '235 reviews', price: '$ 4.64 USD', Category: 'Best Sellers' },
    { image: '/images/imgi_19_68d67fe4ab262b4e4de1a29e_products-18.png', name: 'Baguette soft breads', reviews: '380 reviews', price: '$ 14.84 USD', Category: 'Best Sellers' },
    { image: '/images/imgi_21_68d680689c9187b6a5e053c9_products-10.png', name: 'Chocolate hazelnut cannoli', reviews: '120 reviews', price: '$ 3.24 USD', Category: 'Best Sellers' },
    { image: '/images/imgi_23_68d680bf793abc58efc73b0b_products-9.png', name: 'Almond croissant', reviews: '436 reviews', price: '$ 6.72USD', Category: 'Fresh Bakes' },
    { image: '/images/imgi_24_68d680fb088131fe616531ec_products-6.png', name: 'Croissant au beurre', reviews: '175 reviews', price: '$ 12.14 USD', Category: 'Fresh Bakes' },
    { image: '/images/imgi_25_68d681a85087e2bb9ab99aa8_products-3.png', name: 'Chiffon pie', reviews: '110 reviews', price: '$ 7.84 USD', Category: 'Fresh Bakes' },
    { image: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', name: 'Focaccia genovese', reviews: '092 reviews', price: '$ 13.84 USD', Category: 'Fresh Bakes' },
  ]

  const filterData = product.filter(sl => selectedCategory == 'all' ? true : sl.Category == selectedCategory)


  //  const filterData = product.filter(sl => {
  //   if (selectedCategory === 'all') {
  //     return true;
  //   }
  //   return sl.Category === selectedCategory;
  // });
  //   console.log('filterData',filterData)

  const item = [
    { image: '/images/imgi_15_68d67ed24708b3054414f063_products-1.png', name: 'Oatmeal raisin cookies', reviews: '146 reviews', price: '$ 3.84 USD' },
    { image: '/images/imgi_17_68d67f5c6342b6c7ed37d668_products-14.png', name: 'Soft pretzels', reviews: '235 reviews', price: '$ 4.64 USD' },
    { image: '/images/imgi_19_68d67fe4ab262b4e4de1a29e_products-18.png', name: 'Baguette soft breads', reviews: '380 reviews', price: '$ 14.84 USD' },
    { image: '/images/imgi_21_68d680689c9187b6a5e053c9_products-10.png', name: 'Chocolate hazelnut cannoli', reviews: '120 reviews', price: '$ 3.24 USD' },
    { image: '/images/imgi_23_68d680bf793abc58efc73b0b_products-9.png', name: 'Almond croissant', reviews: '436 reviews', price: '$ 6.72USD' },

  ]

  const person = [
    { text: '“ Whether it’s the warm bread, or just the cozy aroma that fills the air, this bakery always brighter ”', img: '/images/imgi_47_68cbcbffbe9b0a3cd99a7a8e_testimonial-1.png', name: 'Daniel armstrong', sm: 'Physician & athlet' },
    { text: '“ The aroma hits you the moment you walk in. Every bite tastes like it was made just for me ”', img: '/images/imgi_48_68cbcbff23a598f4014ed4fc_testimonial-2.png', name: 'Evelyn hall', sm: 'Diet instructor' },
    { text: '“ They’re open whenever my cravings hit, and the quality of food is always top notch ”', img: '/images/imgi_49_68cbcbfff6f10040b5838a58_testimonial-3.png', name: 'James robinson', sm: ' NYT bestselling author' },

  ]
  // names.map((Sotio, index) => (
  //   console.log(index, Sotio)
  // ))

  // Array.map(( value, index ) = > (   <>  use here  </>   ))

  return (
    <>
      <div>

        <section className='max-w-360 px-5 mx-auto pb-5 lg:pb-10'>
          <div className=''>
            <h1 className='text-5xl md:text-6xl lg:text-9xl text-[#290a03]  bellota-text font-bold pt-5 ' > The Art Of Baking</h1>
          </div>
          <div className=' flex flex-col lg:flex-row lg:gap-20 gap-10 max-w-360 mx-auto lg:p-10'>
            <div>
              <h1 className='text-2xl md:text-4xl lg:text-6xl text-[#290a03] font-black pt-5 md:pt-10 bellota-text  lg:pt-15 hidden md:block'> Premium bread and cookies made from scratch</h1>
              <div className=' rounded-full p-3 mt-8 w-40 items-center gap-3 font-semibold cursor-pointer flex outline-0 bg-amber-400 text-[#290a03] hover:bg-[#290a03] hover:text-amber-400' placeholder='View items'>
                <GoDotFill /><h1>View items</h1>
              </div>
            </div>
            <div className=''>
              <img src="/images/homepage/68d51b60ef5a9da84de316db_hero.avif" alt="" className='rounded-3xl ' />
            </div>
          </div>
        </section>

        <section className='pt-15 mx-4 lg:px-10'>
          <div className='bg-[#f4ebe2] rounded-3xl max-w-7xl mx-auto lg:flex gap-10'>
            <div className='lg:w-140 p-5 lg:p-10'>
              <h1 className='lg:text-4xl text-xl font-bold bellota-text text-[#290a03]'>
                With enough butter,anything is good.</h1>
              <div className='lg:flex lg:gap-8  space-y-2 pt-8 text-[#290a03] font-semibold'>
                <div className='flex gap-3 items-center'>
                  <img src="/images/imgi_18_68d51a5d772c066d09230f90_about-3.png" alt="" className='w-12 h-12 rounded-full' />
                  <p>Our master plan up 200 year old</p></div>
                <p className='underline underline-offset-2'>What we are dishing out?</p>
              </div>
            </div>
            <div className='p-5 gap-4 space-y-4'>
              <div className='flex gap-4 lg:p-10'>
                <div className='lg:text-4xl text-2xl text-center font-bold pt-2 lg:pt-0 text-[#290a03] '>4.38</div>
                <div className='items-center  space-y-2 lg:space-y-0'>
                  <div className='flex text-amber-500'><FaStar /> <FaStar /> <FaStar /><FaStar /><FaStar /> </div>
                  <p className='text-[#290a03] font-bold'>Based on 4380 google reviews.</p>
                </div>
              </div>
              <div className='flex gap-4 flex-wrap ml-10 '>

                {names.map((data, index) => (
                  <div onClick={()=>data1(data.name)} key={index} className='group flex items-center gap-7 rounded-full hover:cursor-pointer bg-white p-2 px-4 lg:pl-7 font-semibold hover:bg-amber-400 duration-500'>
                    <h1 className=' text-[#290a03] font-bold'>{data.name}</h1>
                    <div className="h-10 w-10 bg-[#f5ece4] lg:flex items-center justify-center rounded-full group-hover:bg-amber-950 group-hover:text-white hidden ">
                      <p className=''>{data.no}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </section>


        <section className="max-w-360 mx-auto px-3 lg:px-5 pt-15">
          <div className=''>
            <div className=' md:flex justify-between '>
              <h1 className='lg:text-4xl text-2xl font-bold text-[#290a03]'>List of our products</h1>
              <div className='flex gap-4 text-sm pt-4 *:cursor-pointer'>
                <button onClick={() => setSelectedCategory('all')} className={`border border-none  w-30 rounded-full px-2 p-2 ${selectedCategory == 'all' ? 'bg-amber-400' : 'bg-[#f4ebe2]'}  text-center text-[#290a03] hover:bg-[#290a03] hover:text-white font-medium`}>All Products</button>
                <button onClick={() => setSelectedCategory('Best Sellers')} className={`border border-none  w-30 rounded-full px-2 p-2 ${selectedCategory == 'Best Sellers' ? 'bg-amber-400' : 'bg-[#f4ebe2]'}  text-center text-[#290a03] hover:bg-[#290a03] hover:text-white font-medium`}>Best Sellers</button>
                <button onClick={() => setSelectedCategory('Fresh Bakes')} className={`border border-none  w-30 rounded-full px-2 p-2 ${selectedCategory == 'Fresh Bakes' ? 'bg-amber-400' : 'bg-[#f4ebe2]'}  text-center text-[#290a03] hover:bg-[#290a03] hover:text-white font-medium`}>Fresh Bakes</button>
              </div>
            </div>
          </div>

          <div className='pt-10 gap-4  lg:gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {filterData.map((item, index) => (
              <div key={index} className=' p-2 rounded-4xl pl-2 bg-linear-to-b from-[#f4ebe2] to-[#f4ebe2] lg:from-white lg:hover:from-[#f4ebe2] flex flex-col justify-between'>
                <img className='rounded-3xl' src={item.image} alt="" />
                <div className="">
                  <div className='lg:ml-4'>
                    <h1 className='text-lg font-semibold text-[#290a03] line-clamp-1 pt-3 sm:flex-nowrap'>{item.name}</h1>
                    <div className='flex justify-between items-center pt-2 gap-2 lg:gap-4'>
                      <div className='flex text-amber-500 text-center '>
                        <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' />
                      </div>
                      <p className='text-gray-500 text-base text-center '>{item.reviews}</p>
                    </div>
                  </div>
                  <div className=' group flex flex-col md:flex-row justify-center cursor-pointer relative rounded-full lg:gap-2 p-3 items-center mt-3 bg-white hover:bg-[#290a03] hover:text-white'>
                    <GoDotFill className='absolute top-7 md:top-4 left-2' />
                    <h1 className='text-[#290a03] font-bold group-hover:text-amber-300'>Order Now</h1>
                    <p className='text-gray-500 font-semibold group-hover:text-white'>{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='max-w-280 mx-auto lg:pt-20 pt-5 px-5 lg:px-10'>
          <div className='flex lg:flex-row flex-col  gap-6 lg:gap-14 '>
            <div>
              <img className='w-360 lg:h-120  rounded-4xl' src="/images/imgi_31_68d51a5d2c5faa43dc91cd66_about-1.png" alt="" />
            </div>
            <div className=' flex-wrap space-y-10 pt-6'>
              <h1 className='text-3xl font-bold text-[#290a03] bellota-text'>The haven of heavenly bakes, cakes, and confections</h1>
              <div className='flex lg:flex-row  gap-6  '>
                <div className=' '>
                  <img className=' border-2 mx-auto ' src="/images/imgi_32_68c3ae5a89f4c294b6a4e6cf_organic.png" alt="" />
                  <h1 className='text-[#290a03] text-center font-semibold text-lg'>Free shipping worldwide</h1>
                </div>
                <div>
                  <img src="/images/imgi_33_68c3ae5a1a90eb555fcf27a9_shipping.png" className='mx-auto' alt="" />
                  <h1 className='text-[#290a03] font-semibold text-center text-lg'>Certified organic</h1>
                </div>
                <div>
                  <img src="/images/imgi_34_68c3ae5a263456b28422cbc5_packaging.png" className='mx-auto' alt="" />
                  <h1 className='text-[#290a03] font-semibold text-center text-lg'>Eco friendly packaging</h1>
                </div>
              </div>
              <div className='text-gray-500 font-medium'>
                <p>Illuminate your natural beauty with our 100% natural, certified organic Radiance Boost Brightening Cream. Infused with the finest organic ingredients, this luxurious formula.</p>
              </div>
              <div className='flex gap-6 items-center cursor-pointer rounded-full w-40 p-3 bg-amber-400 text-[#290a03] font-semibold hover:bg-[#290a03] hover:text-amber-300'>
                <GoDotFill />
                <Link to={'/contact'}><h1>Contact Us</h1></Link>
              </div>
            </div>


          </div>
        </section>
        <div className='py-10 mt-15 bg-linear-to-b from-trasparent via-yellow-500 to-transparent'>
          <Marquee pauseOnHover loop={0} >
            <div className='flex overflow-hidden items-center text-3xl font-bold text-[#290a03] gap-18  '>
              <h1 className='ml-15'>Cookie</h1>
              <FaStarOfLife />
              <h1>Donuts</h1>
              <FaStarOfLife />
              <h1>Pancake</h1>
              <FaStarOfLife />
              <h1>Brown Bread</h1>
              <FaStarOfLife />
              <h1>Croissants</h1>
              <FaStarOfLife />
              <h1>Cookie</h1>
              <FaStarOfLife />
              <h1>Donuts</h1>
              <FaStarOfLife />
              <h1>Pancake</h1>
              <FaStarOfLife />
              <h1>Brown Bread</h1>
              <FaStarOfLife />
              <h1>Croissants</h1>
              <FaStarOfLife />
            </div>
          </Marquee>
        </div>
        <sectoin className='max-w-220 mx-auto  '>
          <div>
            <h1 className='lg:text-5xl text-xl  font-bold px-2 text-center pt-15 text-[#290a03] bellota-text'>Why bakery's items is so special to our happy customer?</h1>
          </div>

          <div className=' grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-12 max-w-400 mx-auto lg:gap-10 gap-2 px-4   sm:pt-10'>

            <div className="bg-[url(/images/imgi_36_68d51bcde5970647b0d24e45_discount-1.png)] lg:col-span-3 lg:min-h-30 min-h-100  bg-center bg-cover lg:my-20 order-2 rounded-3xl sm:order-1 ">
              <div className=' text-center  space-y-4'>
                <div className='flex gap-2  md:mx-22 mx-30 pt-5 flex-nowrap  md:flex-wrap '>
                  <h1 className='lg:text-3xl text-lg sm:text-xl  font-bold text-white'>Fresh</h1>
                  <h1 className='lg:text-3xl text-lg sm:text-xl font-bold text-amber-400'>baked</h1>
                </div>
                <Link className='lg:text-xl text-sm underline sm:text-xl underline-offset-2    font-bold text-white'>Order now</Link>
              </div>
            </div>

            <div className="bg-[url(/images/imgi_37_68d51bcd55f255d282122024_discount-2.png)] rounded-3xl lg:col-span-5 bg-center sm:col-span-2 sm:min-h-180 min-h-100 bg-cover order-3 sm:order-3 lg:order-2 ">
              <div className='text-center pt-10 sm:space-y-8 space-y-4 mx-auto'>
                <h1 className='lg:text-5xl text-3xl font-bold text-white'>Buy one get one</h1>
                <h1 className='sm:text-8xl text-3xl font-bold text-amber-400 text-center'>Free</h1>
              </div>
            </div>

            <div className="lg:col-span-4 lg:my-20 mt-15 space-y-8 bg-center  order-1 sm:order-2">
              <div className='lg:flex flex-row '>
                <img src="/images/imgi_38_68d51a5df00a6ea58c217943_about-2.png" alt="" className='w-full rounded-3xl h-60 object-center object-cover lg:block hidden' />
              </div>
              <div className="bg-[url(/images/imgi_39_68d51bcde83766b86c361bba_discount-3.png)] bg-cover bg-center min-h-64 lg:min-h-100 sm:min-h-[] rounded-3xl ">
                <div className='lg:space-y-6 space-y-2 sm:pt-20 pt-5 pl-10 py-10'>
                  <h1 className='text-5xl  text-amber-300 font-bold'>25% off</h1>
                  <p className='lg:text-4xl text-2xl  text-white font-bold '>Test the real <br />baked items.</p>
                  <Link className='text-xl underline underline-offset-2  font-bold text-white'>Order now</Link>
                </div>
              </div>
            </div>

          </div>
        </sectoin>

        <section className='max-w-280 mx-auto lg:mt-10 mt-5 px-5'>
          <div className=' bg-[#f4ebe2] lg:p-12 p-8 rounded-3xl'>
            <div className=' flex lg:flex-row flex-col gap-4 lg:gap-14'>
              <h1 className='lg:text-4xl text-xl font-bold text-[#290a03] bellota-text'>Fresh, fast & always here for you</h1>
              <div className='flex flex-row gap-4 items-center lg:flex-col'>
                <img src="/images/imgi_40_68c3ee5b797130f2c4dfd9d5_products.png" alt="" />
                <h2 className='text-lg font-semibold text-center text-[#290a03]'>Crafted with love & quality products</h2>
              </div>
              <div className='flex flex-row gap-4 items-center lg:flex-col'>
                <img src="/images/imgi_41_68c3ee5b17cda4bc3d1c35f0_free.png" alt="" />
                <h2 className='text-lg font-semibold text-center text-[#290a03]'>Free shipping on all orders above $50</h2>
              </div>
              <div className='flex flex-row gap-4 items-center lg:flex-col'>
                <img src="/images/imgi_42_68df6d2e5ed3b5e9f92df355_quality.png" alt="" />
                <h2 className='text-lg font-semibold text-center text-[#290a03]'>Freshly baked, every single day</h2>
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
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            className='select-none max-w-360 mx-auto'
          >
            {item.map((product, index) => (
              <SwiperSlide key={index}>
                <div className=' p-2 rounded-4xl pl-2 bg-linear-to-b from-white mx-2 to-[#f4ebe2] hover:from-[#f4ebe2] '>
                  <img className='rounded-3xl w-full' src={product.image} alt="" />
                  <div className='ml-4'>
                    <h1 className='lg:text-2xl text-lg font-semibold text-[#290a03] line-clamp-1 pt-3'>{product.name}</h1>
                    <div className='flex justify-between pt-2 sm:gap-2 lg:gap-4'>
                      <div className='flex text-amber-500 '><FaStar className='h-3 w-3 lg:h-6 lg:w-6' /> <FaStar className='h-3 w-3 lg:h-6 lg:w-6' /> <FaStar className='h-3 w-3 lg:h-6 lg:w-6' /><FaStar className='h-3 w-3 lg:h-6 lg:w-6' /><FaStar className='h-3 w-3 lg:h-6 lg:w-6' /></div>
                      <p className='text-gray-500 text-sm lg:text-base'>{product.reviews}</p>
                    </div>
                  </div>
                  <div className=' group flex flex-col md:flex-row justify-center cursor-pointer relative rounded-full lg:gap-2 p-3 items-center mt-3 bg-white hover:bg-[#290a03] hover:text-white'>
                    <GoDotFill className='absolute top-7 md:top-4 left-2' />
                    <h1 className='text-[#290a03] font-bold group-hover:text-amber-300'>Order Now</h1>
                    <p className='text-gray-500 font-semibold group-hover:text-white'>{product.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>



        <div className='max-w-220 mx-auto text-center  pt-10 lg:pt-20'>
          <h1 className='text-4xl font-bold text-[#290a03] bellota-text'>What our fans say</h1>
        </div>

        <div className='max-w-360 px-2 lg:mx-auto pt-10 mx-4 grid lg:grid-cols-3 lg:gap-10 gap-4  grid-cols-1  sm:grid-cols-2'>
          {person.map((set, index) => {
            return (
              <div className='bg-[#f4ebe2] rounded-3xl p-6 space-y-4'>
                <h1 className='lg:text-lg text-[15px] font-bold  text-[#290a03] bellota-text' >{set.text}</h1>
                <img src={set.img} className='rounded-3xl w-full ' alt="" />
                <div className='lg:flex gap-4 lg:ml-18 ml-5 '>
                  <h1 className='lg:text-lg text-sm font-medium  text-[#290a03]'>{set.name}</h1>
                  <p className='lg:text-lg text-sm font-medium  text-gray-500'>{set.sm}</p>
                </div>
              </div>)
          })}
        </div>

        <div className='max-w-360 lg:mx-auto mx-4 lg:pt-15 '>
          <div className='lg:flex gap-10'>
            <h1 className='text-lg font-medium text-[#290a03] lg:w-80  text-center py-10'>Panetrating with top tier bakery stores</h1>
            <Marquee loop={0}>
              <div className='flex gap-8 '>
                <img src="/images/imgi_50_68c95c37e3e80dca3e5564fc_client-1.png" alt="" />
                <img src="/images/imgi_51_68cea1357c90704dd109b3f0_client-2.png" alt="" />
                <img src="/images/imgi_53_68cea135d7393226b869776d_client-4.png" alt="" />
                <img src="/images/imgi_52_68cea13545702f6c824a63ad_client-3.png" alt="" />
                <img src="/images/imgi_55_68cea185fd90d450bd1d077a_client-6.png" alt="" />
                <img src="/images/imgi_54_68cea135b7c12bfd834d1107_client-5.png" alt="" />
              </div>
            </Marquee>
          </div>
        </div>

      </div>

    </>
  )
}
