import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { AiOutlineCaretDown, AiFillInstagram } from 'react-icons/ai';
import './Home.css';

export default function Home() {
  return (
    <div data-testid="hmpg-1">
      <div className="relative top-0 lg:overflow-hidden">
        <div className="w-full h-full bg-gray-700 absolute opacity-20" />
        <div className="w-full h-full absolute lg:top-0 lg:flex lg:text-left">
          <div className="logo text-gray-400 ml-4 font-medium text-xl mt-96 mr-4 lg:text-gray-600 lg:text-4xl lg:ml-8">
            ICE COLEYY
          </div>
        </div>
        <div className="justify-center min-h-screen lg:flex lg:min-h-screen">
          <img
            src={process.env.PUBLIC_URL + '/Headshot2.jpg'}
            className="w-[310px] h-[420px] lg:w-[500px] lg:h-[620px] lg:pt-10"
            alt="Ice Colley HeadShot2"
          />
          <img
            src={process.env.PUBLIC_URL + '/Headshot1.jpg'}
            className="w-[310px] h-[420px] lg:w-[500px] lg:h-[620px] lg:pt-10"
            alt="Ice Colley HeadShot1"
          />
        </div>
      </div>
      <div className="per flex absolute right-6 bottom-20 lg:bottom-28 lg:right-20">
        <a
          href="https://www.instagram.com/ice.coleyy/"
          target="_blank"
          rel="noreferrer"
          className="pb-6 hover:drop-shadow-md hover:brightness-125 lg:pb-6"
        >
          <AiFillInstagram size={40} color="purple" />
        </a>
        <div className="text-gray-400 text-3xl pb-10 hover:text-gray-700 lg:pb-8 lg:text-3xl lg:hover:text-gray-700">
          <Link to="/gallery">GALLERY</Link>
        </div>
        <div className="text-gray-400 text-3xl hover:text-gray-700 lg:text-3xl lg:hover:text-gray-700">
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
      <ScrollLink
        className="active hover:cursor-pointer"
        to="about"
        spy={true}
        smooth={true}
      >
        <div className="invisible lg:visible mon absolute text-gray-400 text-3xl right-36 bottom-12 lg:hover:text-gray-700 uppercase">
          L e a r n<span className="pl-4 pr-4" />M o r e
        </div>
        <AiOutlineCaretDown
          size={35}
          color="purple"
          className="absolute right-6 bottom-6 hover:brightness-150 lg:right-20 lg:bottom-12"
        />
      </ScrollLink>

      <div id="about" className="text-center pt-20 lg:pt-72 lg:pb-32">
        {/* <div className="bg-gray-700 opacity-60 w-full h-full absolute top-[49.3rem] bottom-0" /> */}
        <h2 className="mon text-7xl text-gray-700 uppercase font-extrabold">
          Ice Coleyy
        </h2>
        <div className="mon text-xs lg:text-l text-block font-thin">
          the model with the crazy faces
        </div>
        <p className="bb drop-shadow-xl leading-loose mt-10 p-8 text-l text-black lg:border-x-4 lg:border-gray-700 lg:text-xl lg:pr-52 lg:pl-52">
          Wassup, I’m Cole, a Howard University student born and raised in New
          York City. I began modeling in 2019 after being interested in fashion
          for a number of years. Back then, it was just iPhone pictures to
          capture my outfits but overtime, I developed a style to express my
          internal emotions through my art. I am blessed to have worked with so
          many photographers who helped me execute many creative ideas so I’d
          like to invite everyone into my thoughts.
        </p>
        <div className="mt-10">
          <Link
            to="/gallery"
            className="mon border border-transparent text-base font-medium rounded-full text-gray-700 hover:bg-indigo-800 hover:text-white px-8 py-3 ring-2 ring-gray-700"
          >
            click here
          </Link>
        </div>
      </div>
      <div className="text-xs text-center pt-32 pl-4 pb-8 pr-4">
        <p>
          Copyright©2021 Cole Edwards, All Rights Reserved. All material on this
          site may not be reproduced, distributed, cached or otherwise used,
          except with my prior written permission.
        </p>
        <p className="pt-2">
          site made by{' '}
          <span>
            <a
              href="https://www.instagram.com/askdwe/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-wavy"
            >
              askdwe
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
