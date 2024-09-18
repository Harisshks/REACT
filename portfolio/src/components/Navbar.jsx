import React from 'react'
import { Link } from 'react-router-dom';
import {CircleUser} from 'lucide-react';
const Navbar = () => {
  return (
    <>
    
<div className='w-full h-[3rem] flex justify-center items-center bg-blue-500 shadow-md shadow-blue-700 rounded-sb' >
<div className='w-[95%] h-full flex justify-center items-center flex-row'>
<div className='w-1/2  h-full flex justify-start items-center font-bold text-xl ☐ text-white'> Harissh K S</div>
<div className='w-1/2  h-full flex justify-end items-center'>
<ul className='flex list-none flex-row justify-center gap-6 ml-auto '>
              <Link to='/'>
                <li className='w-1/2  h-full font-bold text-xl text-white hover:opacity-80'>Profile</li>
              </Link>
              <Link to='/project'>
                <li className='w-1/2  h-full font-bold text-xl text-white hover:opacity-80'>Project</li>
              </Link>
              <Link to='/contact'>
                <li className='w-1/2  h-full font-bold text-xl text-white hover:opacity-80'>Contact</li>
              </Link>
              <CircleUser size={28} color="#f4f0f0" className='w-1/2  h-full hover:opacity-80'/>
              </ul>
</div> 
</div>
</div>
</>
)
}
 export default  Navbar




