import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Header() {
    const [menu, setMenu] = useState(false)
    console.log(menu)

    return (
        <>
            <header>
                <div className='bg-[#290a03] text-amber-300 font-semibold text-center p-2 hidden lg:block'>
                    <h1>Get 10% off Your First Order</h1>
                </div>

                <div className='bg-linear-to-b from-[#fff7cc] to-white p-5  '>
                    <div className='max-w-360 mx-auto flex items-center justify-between'>

                        <h1 className='text-[#290a03] text-4xl'>Bisqueria</h1>

                        <div id='abc' className={` ${menu ? '' : 'hidden lg:flex'} flex  list-none gap-5 font-semibold  text-[#290a03] text-lg absolute left-0 px-10 p-5 text-nowrap bg-[#f4ebe2] w-full top-20 flex-col lg:static lg:bg-transparent lg:w-fit lg:flex-row`}>
                            <Link to={'/'}><li >Home</li></Link>
                            <Link to={'/about'}><li>About</li></Link>
                            <Link to={'/#'}><li>Pages</li></Link>
                            <Link to={'/menu'}><li>Our Menu</li></Link>
                         <Link to={'/contact'}> <li>Contact</li></Link>
                        </div>

                        <div className='flex items-center gap-10'>
                            <div className='lg:flex border border-gray-400 items-center rounded-full p-3 hidden  '>
                                <input className='outline-0' placeholder='Search..' />
                                <IoSearch size={24} className='text-[#290a03] ' />
                            </div>
                            <div>
                                <AiOutlineShopping size={28} className='text-[#290a03] cursor-pointer' />
                            </div>
                            <div className='lg:hidden '>
                                <IoIosMenu onClick={() => setMenu(!menu)} size={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
