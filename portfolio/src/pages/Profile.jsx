import Navbar from '../components/Navbar'
import myim from '../assests/img/myim.jpg'
const Profile = () => {
  return (
    <>
      <Navbar/>
      <div className='h-full w-full  bg-blue-100 bg-opacity-40 flex  flex-col items-center'>
      <div className='h-[80%] w-screen flex justify-center'>
            <div className='h-screen w-[60%] flex flex-col justify-start my-20 items-center ml-6'>
                <div className=' text-black  w-[50%] h-[10%] my-10 font-semibold text-5xl flex justify-center items-center'>Heyy! I'am Harissh</div>
                <div className=' w-[80%]  text-black h-[20%] my-5 font-thin text-3xl justify-center items-center'>Creative and detail-oriented college student with a passion for coding and storytelling. Experienced in Android development and YouTube content creation, with a focus on gaming and animated videos. Constantly learning and adapting to new technologies to bring innovative ideas to life.</div>
            </div>
            <div className='h-screen w-[40%] flex justify-center items-start my-28'>
                <div className='h-screen w-[40%]  rounded-full'><img src={myim} className='rounded-full border-2 border-r-blue-600'></img></div>
            </div>
      </div>
        </div>
        </>
    )
}

export default Profile