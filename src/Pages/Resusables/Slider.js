import React, { useState } from 'react';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';

let count = 0;
export default function Slider({ id_name, imgs, shoot }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNextClick = () => {
    count = (count + 1) % imgs.length;
    setCurrentIndex(count);
  };
  const onPrevClick = () => {
    const imagesLength = imgs.length;
    count = currentIndex + imagesLength - (1 % imagesLength);
    setCurrentIndex(count);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="mt-96 lg:flex lg:flex-row lg:justify-center lg:items-center lg:mt-40">
        <div
          className="mt-28 mr-20 ml-20 text-center"
          id={id_name}
        >
          <div className="heading text-xl pb-2 lg:text-4xl">{shoot}</div>
        </div>
      </div>
      <div className="w-fit relative lg:w-4/12 lg:flex lg:justify-center lg:mx-auto">
        <div className="aspect-w-6 aspect-h-9">
          <img src={imgs[currentIndex]} alt={shoot} />
        </div>

        <div className="absolute w-full top-1/2 transform px-8 lg:px-0 flex justify-between items-center">
          <button onClick={onPrevClick} className="bg-ice-green rounded-full w-30 p-2" >
            <AiOutlineCaretLeft size={30}/>
          </button>
          <button onClick={onNextClick} className="bg-ice-green rounded-full w-30 p-2">
            <AiOutlineCaretRight size={30} />
          </button>
        </div>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={scrollToTop}
          className="mt-2 mb-8 ml-6 ml-4 inline-flex items-center px-4 py-2 border border-ice-green rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          back to wheel
        </button>
      </div>
    </>
  );
}
