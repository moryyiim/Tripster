import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1590050354880-588a516dcf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3057&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1516370873344-fb7c61054fa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className='bg-gray-300'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill
          onClick={prevSlide}
          className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'
        />
        <BsArrowRightSquareFill
          onClick={nextSlide}
          className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'
        />
        {sliderData.map((item, index) => (
          <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
            {index === slide && (
              <img
                className='w-full h-full object-cover rounded-md'
                src={item.url}
                alt='/'
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
