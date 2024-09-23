import React from 'react';
import '../assests/css/card.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gameImage from '../assests/img/game.jpg'; 
import Navbar from '../components/Navbar';

const data = [
  {
    name: '3D-FPS Game',
    img: gameImage, 
    about: 'Project 1'
  },
  {
    name: 'Hari',
    img: gameImage, // Use imported image
    about: 'Project 1'
  },
  {
    name: 'Harkissh',
    img: gameImage, // Use imported image
    about: 'Project 1'
  }
];

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <>
    <Navbar/>
      <div className='w-3/4 m-auto'>
        <div className='mt-20'>
          <Slider {...settings}>
            {data.map((g, index) => (
              <div key={index} className='bg-white h-[400px] text-black rounded-xl'>
                <div className='rounded-t-xl flex justify-center items-center'>
                  <img src={g.img} alt={g.name} className='rounded-t-xl h-full w-full' />
                </div>

                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                  <p className='text-xl font-semibold'>{g.name}</p>
                  <p>{g.about}</p>
                  {/* <button className='bg-black text-white text-lg px-6 py-1 rounded-xl'>Source</button> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Project;
