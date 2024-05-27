import React, { useRef, useEffect } from 'react';
import { data } from './imgData';

export const Portfolio = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        sliderRef.current.scrollLeft -= 50;
      } else if (event.key === 'ArrowRight') {
        sliderRef.current.scrollLeft += 50;
      }
    };

    sliderRef.current.addEventListener('keydown', handleKeyDown);

    return () => {
      sliderRef.current.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='relative flex items-center overflow-hidden'>
      <div
        ref={sliderRef}
        className='w-full h-full whitespace-nowrap overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-hide'
        tabIndex="0" // Make the slider focusable
      >
        {data.map((item) => (
          <div key={item.id} className="relative inline-block">
            <img
              className='w-220 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
            <p className="absolute bottom-0 left-0 bg-black text-white opacity-75 p-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
