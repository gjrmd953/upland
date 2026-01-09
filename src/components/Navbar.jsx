import React from 'react'
import Container from './Container'
import { LuDot } from 'react-icons/lu'
import { CiMobile2 } from 'react-icons/ci'
import { GoDotFill } from 'react-icons/go'

const Navbar = () => {
    return (
        <div className="w-full bg-[url(/banner.png)] bg-cover bg-center">
            {/* navbar */}
            <div className='flex py-12 px-6'>
                <div className="w-1/4">
                    <h2 className='font-ROB text-[#FFFFFF]'>
                        UPLAND
                    </h2>
                </div>
                <div className="w-2/4">
                    <ul className='flex gap-5 font-ROB items-center justify-center'>
                        <li className='text-[#FFFFFF] cursor-pointer'>Features</li>
                        <li className='text-[#FFFFFF]'><LuDot /></li>
                        <li className='text-[#FFFFFF] cursor-pointer'>Download app</li>
                        <li className='text-[#FFFFFF]'><LuDot /></li>
                        <li className='text-[#FFFFFF] cursor-pointer'>UI screens</li>
                        <li className='text-[#FFFFFF]'><LuDot /></li>
                        <li className='text-[#FFFFFF] cursor-pointer'>Testimonials</li>
                        <li className='text-[#FFFFFF]'><LuDot /></li>
                        <li className='text-[#FFFFFF] cursor-pointer hover:text-[#FF6231] border rounded-[20px] border-[#FF6231]  px-3'>Free trial </li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <div className="flex justify-end items-center">
                        <h3 className='text-[#FF6231] pr-3'><CiMobile2 /></h3>
                        <h2 className='font-ROB text-[#FFFFFF] cursor-pointer'>
                            +1 742 65 84 122
                        </h2>
                    </div>
                </div>
            </div>

            {/*banner  */}
            <div className="pt-[171px]">

                <div className="flex items-center pl-[340px] gap-2 pb-4">
                    <GoDotFill className="text-[#FF6231]" />
                    <GoDotFill className="text-[#FF6231]" />
                    <h3 className="font-ROB text-[#FF6231] uppercase">
                        trendy application
                    </h3>
                </div>

            </div>


        </div>
    )
}

export default Navbar