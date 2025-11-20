import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { ImCross } from "react-icons/im";

export default function Header() {
    const [menu, setMenu] = useState(false)

    const [data,setdata]=useState()

    const location=useLocation().pathname


    return (
        <>
            <header>
                <div className='bg-[#290a03] text-amber-300 font-semibold text-center p-2 hidden lg:block'>
                    <h1>Get 10% off Your First Order</h1>
                </div>

                <div className='bg-linear-to-b from-[#fff7cc] to-white p-5  '>
                    <div className='max-w-360 mx-auto flex items-center justify-between'>

                        <h1 className='text-[#290a03] font-bold text-4xl'>Bisqueria</h1>

                        <div id='abc' className={` ${menu ? '' : 'hidden lg:flex'} flex  list-none gap-5 font-bold  text-[#290a03] text-lg absolute left-0 px-10 p-5 text-nowrap bg-[#f4ebe2] w-full top-20 flex-col lg:static lg:bg-transparent lg:w-fit lg:flex-row`}>
                            <Link to={'/'} ><li className={`${location == '/' ? 'underline text-yellow-500 underline-offset-5 ' :'' }`} >Home</li></Link>
                            <Link to={'/about'}  ><li className={`${location == '/about' ? 'underline text-yellow-500 underline-offset-5 ' :'' }`}>About</li></Link>
                            <Link to={'/blog'}><li className={`${location == '/blog' ? 'underline text-yellow-500 underline-offset-5 ' :'' }`}>Blog</li></Link>
                            <Link to={'/menu'}><li className={`${location == '/menu' ? 'underline text-yellow-500 underline-offset-5 ' :'' }`}>Our Menu</li></Link>
                         <Link to={'/contact'}> <li className={`${location == '/contact' ? 'underline text-yellow-500 underline-offset-5 ' :'' }`}>Contact</li></Link>
                        </div>

                        <div className='flex items-center gap-10'>
                            <div className='lg:flex border border-gray-400 items-center rounded-full p-3 hidden  '>
                                <input className='outline-0' placeholder='Search..' />
                                <IoSearch size={24} className='text-[#290a03] ' />
                            </div>
                            <div>
                                <AiOutlineShopping size={28} className='text-[#290a03] cursor-pointer' />
                            </div>
                            <button className='lg:hidden' onClick={()=>setMenu(!menu)}>{menu ? <ImCross size={25}/>:<IoIosMenu size={25}/>}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
