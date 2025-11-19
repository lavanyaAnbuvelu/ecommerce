import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import { useLocation, useNavigate } from 'react-router-dom'

export default function BreadPage() {
  const location = useLocation()
  const [selectedCategory, setSelectedCategory] = useState(location.state || 'Breads')

   const navigate=useNavigate()
     const data = (item) => {
    navigate('/order',{state:item})
  }

  const product = [
    { img1: '/images/imgi_19_68d67fe4ab262b4e4de1a29e_products-18.png',img2: '/images/imgi_21_68d51c5fa2dde26b3dad27a3_instagram-5.png', name: 'Baguette soft breads', reviews: '146 reviews', price: '$ 3.84 USD', Category: 'Breads' },
    { img1: '/images/imgi_23_68d680bf793abc58efc73b0b_products-9.png',img2: '/images/imgi_14_68d67fa7c1577d919bb48d61_products-7.png', name: 'Custard breads', reviews: '235 reviews', price: '$ 4.64 USD', Category:'Breads' },
    { img1: '/images/imgi_19_68d67fe4ab262b4e4de1a29e_products-18.png',img2: '/images/imgi_19_68d67fe4ab262b4e4de1a29e_products-18.png', name: 'Baguette soft breads', reviews: '380 reviews', price: '$ 14.84 USD', Category: 'Breads' },
    { img1: '/images/imgi_15_68d67ed24708b3054414f063_products-1.png',  img2: '/images/imgi_14_68d6809c139ef3cd1f1a7106_products-16.png',name: 'Oatmeal raisin cookies', reviews: '380 reviews', price: '$ 14.84 USD', Category:'Cookies' },
    { img1: '/images/imgi_15_68d68263136da5a12edcf61f_products-12.png',img2: '/images/imgi_24_68d680fb088131fe616531ec_products-6.png', name: 'Gingerbread cookies', reviews: '380 reviews', price: '$ 14.84 USD', Category:'Cookies' },
    { img1: '/images/imgi_13_68d67f16548ed4eaba4ddf58_products-17.png',img2: '/images/imgi_17_68d67f5c6342b6c7ed37d668_products-14.png', name: 'Chocolate chip cookies', reviews: '380 reviews', price: '$ 14.84 USD', Category: 'Cookies' },
    { img1: '/images/imgi_17_68d67f5c6342b6c7ed37d668_products-14.png', img2: '/images/imgi_14_68d681ce2bed7d3bd6dbb082_products-8.png', name: 'Soft pretzels', reviews: '380 reviews', price: '$ 14.84 USD', Category: 'Pretzel' },
    { img1: '/images/imgi_14_68d67fa7c1577d919bb48d61_products-7.png', img2: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', name: 'Cinnamon pretzels', reviews: '380 reviews', price: '$ 14.84 USD', Category:'Pretzel' },
    { img1: '/images/imgi_14_68d6832f8b361fa4e1fab8f4_products-13.png', img2: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', name: 'Chocolate cake', reviews: '380 reviews', price: '$ 14.84 USD', Category: 'Cake' },
    { img1: '/images/imgi_5_68d68b0020515e48e5ae7aa1_categories-4.png',  img2: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', name: 'Black forest cake', reviews: '380 reviews', price: '$ 14.84 USD', Category:'Cake' },
    { img1: '/images/imgi_16_68d68390db2b13516e3d193e_products-4.png', img2: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', name: 'Chocolate hazelnut cannoli', reviews: '380 reviews', price: '$ 14.84 USD', Category: 'Pastries' },
    { img1: '/images/imgi_21_68d680689c9187b6a5e053c9_products-10.png', img2: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', name: 'Choux pastry puffs', reviews: '380 reviews', price: '$ 14.84 USD', Category:'Pastries' },
    { img1: '/images/imgi_23_68d680bf793abc58efc73b0b_products-9.png', img2: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', name: 'Almond croissant', reviews: '380 reviews', price: '$ 14.84 USD',Category: 'Croissant' },
    { img1: '/images/imgi_24_68d680fb088131fe616531ec_products-6.png',  img2: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', name: 'Croissant au beurre', reviews: '380 reviews', price: '$ 14.84 USD', Category: 'Croissant' },
    { img1: '/images/imgi_25_68d681a85087e2bb9ab99aa8_products-3.png',  img2: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', name: 'Chiffon pie', reviews: '380 reviews', price: '$ 14.84 USD', Category:'Pie' },
    { img1: '/images/imgi_14_68d681ce2bed7d3bd6dbb082_products-8.png', img2: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', name: 'Butterscotch pie', reviews: '380 reviews', price: '$ 14.84 USD', Category: 'Pie' },
    { img1: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', img2: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', name: 'Focaccia genovese', reviews: '380 reviews', price: '$ 14.84 USD',Category:'Focaccia' },
    { img1: '/images/imgi_14_68d6809c139ef3cd1f1a7106_products-16.png', img2: '/images/imgi_27_68d682231da4a1c391d1d7be_products-15.png', name: 'Focaccia di recco', reviews: '380 reviews', price: '$ 14.84 USD', Category:'Focaccia' },
  ]

  const filterData = product.filter(dt => dt. Category == selectedCategory)

  return (
    <>
      <div className='max-w-360 mx-auto px-4 py-5'>
        <div className='lg:flex gap-90 justify-between items-center'>
          <h1 className='text-5xl font-bold text-nowrap py-4 text-[#290a03] bellota-text'>Product types</h1>
          <p className='text-xl text-gray-800 text-wrap hidden lg:block '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>                </div>
        <div className=' py-8'>
          <img src="/images/imgi_11_68d523d597ae0d48ff64b99e_extras-pagetitle.png" className=' rounded-3xl min-h-40 object-center object-cover  ' alt="" />
        </div>
      </div>
      <div className='max-w-280 mx-auto flex justify-between px-4'>
        <div className='flex gap-4 text-xl pt-4 *:cursor-pointer flex-wrap'>
          <button onClick={() => setSelectedCategory('Breads')} className={`border border-none  w-25 rounded-full px-2 p-4 ${selectedCategory == 'Breads' ? 'bg-amber-400' : 'bg-[#f4ebe2]'}   text-center text-[#290a03] hover:bg-[#290a03] hover:text-white font-medium`}>Breads</button>
          <button onClick={() => setSelectedCategory('Cookies')} className={`border border-none bg-[#f4ebe2] w-30 rounded-full ${selectedCategory == 'Cookies' ? 'bg-amber-400' : 'bg-[#f4ebe2]'} p-4 font-medium text-center text-[#290a03]  hover:bg-[#290a03] hover:text-white`}>Cookies</button>
          <button onClick={() => setSelectedCategory('Pretzel')} className={`border border-none bg-[#f4ebe2] w-30 rounded-full p-4 font-medium text-center ${selectedCategory == 'Pretzel' ? 'bg-amber-400' : 'bg-[#f4ebe2]'} text-[#290a03] hover:bg-[#290a03] hover:text-white`}>Pretzel</button>
          <button onClick={() => setSelectedCategory('Cake')} className={`border border-none bg-[#f4ebe2] w-30 rounded-full p-4 font-medium text-center ${selectedCategory == 'Cake' ? 'bg-amber-400' : 'bg-[#f4ebe2]'} text-[#290a03] hover:bg-[#290a03] hover:text-white`}>Cake</button>
          <button onClick={() => setSelectedCategory('Pastries')} className={`border border-none bg-[#f4ebe2] w-30 rounded-full p-4 font-medium text-center ${selectedCategory == 'Pastries' ? 'bg-amber-400' : 'bg-[#f4ebe2]'} text-[#290a03] hover:bg-[#290a03] hover:text-white`}>Pastries</button>
          <button onClick={() => setSelectedCategory('Croissant')} className={`border border-none bg-[#f4ebe2] w-30 rounded-full p-4 font-medium text-center ${selectedCategory == 'Croissant' ? 'bg-amber-400' : 'bg-[#f4ebe2]'} text-[#290a03] hover:bg-[#290a03] hover:text-white`}>Croissant</button>
          <button onClick={() => setSelectedCategory('Pie')} className={`border border-none bg-[#f4ebe2] w-30 rounded-full p-4 font-medium text-center ${selectedCategory == 'Pie' ? 'bg-amber-400' : 'bg-[#f4ebe2]'} text-[#290a03] hover:bg-[#290a03] hover:text-white`}>Pie</button>
          <button onClick={() => setSelectedCategory('Focaccia')} className={`border border-none bg-[#f4ebe2] w-30 rounded-full p-4 font-medium text-center ${selectedCategory == 'Focaccia' ? 'bg-amber-400' : 'bg-[#f4ebe2]'} text-[#290a03] hover:bg-[#290a03] hover:text-white`}>Focaccia</button>
        </div>
      </div>
      <div className='max-w-360 mx-auto px-4'>
        <div className='pt-10 gap-4  lg:gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
          {filterData.map((item, index) => (
            <div key={index} className=' group p-2 rounded-4xl pl-2 bg-linear-to-b from-[#f4ebe2] to-[#f4ebe2] lg:from-white lg:hover:from-[#f4ebe2] flex flex-col justify-between'>
               <div className='relative h-full' >
                  <img className='rounded-3xl absolute w-full h-full opacity-0 group-hover:opacity-100 duration-300  ' src={item.img1} alt="" />
                  <img className='rounded-3xl w-full h-full object-cover object-center' src={item.img2} alt="" />
                </div>
              <div className="">
                <div className='lg:ml-4'>
                  <h1 className='text-lg font-semibold text-[#290a03] pt-3 sm:flex-nowrap'>{item.name}</h1>
                  <div className='flex justify-between items-center pt-2 gap-2 lg:gap-4'>
                    <div className='flex text-amber-500 text-center '>
                      <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' /> <FaStar className='h-4 w-4 ' />
                    </div>
                    <p className='text-gray-500 text-base text-center '>{item.reviews}</p>
                  </div>
                </div>
                 <button onClick={() => data(item)}  className='w-full  group/abc flex flex-col md:flex-row justify-center cursor-pointer relative rounded-full lg:gap-2 p-3 items-center mt-3 bg-white hover:text-white overflow-hidden'>
                    {/* <GoDotFill className='absolute top-7 md:top-4 left-2 z-10' /> */}
                    <h1 className='text-[#290a03] font-bold group-hover/abc:text-amber-300 z-10'>Order Now</h1>
                    <p className='text-gray-500 font-semibold group-hover/abc:text-white z-10'>{item.price}</p>
                    <div className="absolute bg-[#290a03] top-7 md:top-5 left-3 h-2 w-2 duration-700 rounded-full group-hover/abc:h-full group-hover/abc:w-full group-hover/abc:top-0 group-hover/abc:left-0 "></div>
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
