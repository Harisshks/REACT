import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    
<div className='w-full h-[4rem] flex justify-center items-center bg-blue-500 shadow-md shadow-blue-700 rounded-sb' >
<div className='w-[80%] h-full flex justify-center items-center flex-row'>
<div className='w-1/2  h-full flex justify-start items-center font-bold text-xl ☐ text-white'> Harissh K S</div>
<div className='w-1/2  h-full flex justify-end items-center'>
<ul className='flex list-none flex-row justify-center gap-6 ml-auto'>
              <Link to='/'>
                <li className='font-bold text-xl text-white'>Profile</li>
              </Link>
              <Link to='/project'>
                <li className='font-bold text-xl text-white'>Project</li>
              </Link>
              <Link to='/contact'>
                <li className='font-bold text-xl text-white'>Contact</li>
              </Link>
            </ul>
</div>
</div>
</div>
</>
)
}
 export default  Navbar




