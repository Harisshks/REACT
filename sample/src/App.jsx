import React from 'react'

const App = () => {
  return (
    <>
    <div className='h-screen w-screen flex justify-center items-center bg-[#3f3c3c]'>
      <div className='w-[30%] h-3/6 flex justify-center items-center bg-slate-100 rounded-md'>
      <form className='w-[80%] h-[80%] flex flex-col justify-center items-center gap-4'>
        <input type='text' name='' id='' placeholder='Name' className='p-3 rounded-sm bg-[#f8f8f8] w-full font-bold outline-none focus:border-b-2 hover:border-[#3f3c3c]'/>
        <input type='email' name='' id='' placeholder='Email' className='p-3 rounded-sm bg-[#f8f8f8] w-full font-bold outline-none focus:border-b-2 hover:border-[#3f3c3c]'/>
        <input type='number' name='' id='' placeholder='Password' className='p-3 rounded-sm bg-[#f8f8f8] w-full font-bold outline-none focus:border-b-2 hover:border-[#3f3c3c]'/>
        <button type='submit' className='w-full p-3 rounded-md outline-none font-bold text-white bg-[#3f3c3c]'>Login</button> 
      </form>
      </div>
    </div>
    </>
  )
}

export default App;