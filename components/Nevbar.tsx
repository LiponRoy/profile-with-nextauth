"use client"
import { Logo } from '.'
import { navItem } from '@/constants'
import Link from 'next/link'
import { useState } from 'react';
import { FaAlignJustify } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Nevbar = () => {
    const [toggle, setToggle] = useState(false);

    const changeToggle = () => {
        setToggle(!toggle);
        console.log(toggle)
    }


    return (
        <div className='nav-container'>
            <Logo title="U-PROFILE" />
            <div className='hidden md:flex bg-slate-100 p-2 rounded-lg border-2 border-slate-300'>
                {navItem.map((value) => (

                    <Link href={value.url} key={value.id}>
                        <span className=' px-2 hover:text-slate-400'>{value.item}</span>
                    </Link>

                ))}
            </div>
            <div className="md:hidden ">
                <div onClick={() => changeToggle()} className=" cursor-pointer">
                    {toggle ? <RxCross2 /> : <FaAlignJustify />}

                </div>
            </div>


            {toggle && <div className="nav-toggle">
                {navItem.map((value) => (

                    <Link className=' mx-2' onClick={() => changeToggle()} href={value.url} key={value.id}>
                        <span className=' hover:text-slate-400 my-16'>{value.item}</span>
                    </Link>

                ))}
            </div>}

        </div>
    )
}

export default Nevbar