import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { AiOutlineCaretDown, AiFillInstagram } from 'react-icons/ai';
import './Home.css';

export default function Home() {
  return (
    <div data-testid="hmpg-1">
      <div className="relative top-0 lg:overflow-hidden">
        <div className="w-full h-full bg-gray-700 absolute opacity-60" />
        <div className="w-full h-full absolute lg:top-0 lg:flex lg:text-left">
          <div className="logo text-gray-600 font-medium text-right text-xl mt-5 mr-4 lg:text-gray-600 lg:text-6xl">
            ICE COLEYY
          </div>
        </div>
        <div className="per flex absolute right-4 top-32">
          <a
            href="https://www.instagram.com/ice.coleyy/"
            target="_blank"
            className="pb-20"
          >
            <AiFillInstagram size={30} color="purple" />
          </a>
          <div className="text-gray-600 text-xl pb-10 hover:text-gray-700 lg:hover:text-white">
            <Link to="/gallery">GALLERY</Link>
          </div>
          <div className="text-gray-600 text-xl hover:text-gray-700 lg:hover:text-white">
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
        <div className="justify-center lg:flex lg:min-h-screen">
          <img
            src={process.env.PUBLIC_URL + '/Headshot2.jpg'}
            className="w-[350px] h-[450px] lg:w-[750px] h-[800px] lg:p-2"
            alt="Ice Colley HeadShot2"
          />
          <img
            src={process.env.PUBLIC_URL + '/Headshot1.jpg'}
            className="w-[350px] h-[450px] lg:w-[750px] h-[800px] lg:p-2"
            alt="Ice Colley HeadShot1"
          />
        </div>
        <ScrollLink className="active" to="about" spy={true} smooth={true}>
          <AiOutlineCaretDown
            size={30}
            color="purple"
            className="absolute right-4 bottom-8"
          />
        </ScrollLink>
      </div>

      <div id="about" className="text-center mt-72 mb-72 lg:mt-72 lg:mb-32">
        <h2 className="logo text-6xl pt-10 uppercase font-extrabold">
          Ice Coleyy
        </h2>
        <div className="begin text-l text-indigo-800 font-thin">
          the model with the crazy faces
        </div>
        <p className="bb leading-loose mt-10 p-10 text-l border-x-4 border-indigo-200 lg:text-xl lg:pr-52 lg:pl-52">
          Wassup, I’m Cole, a Howard University student born and raised in New
          York City. I began modeling in 2019 after being interested in fashion
          for a number of years. Back then, it was just iPhone pictures to
          capture my outfits but overtime, I developed a style to express my
          internal emotions through my art. I am blessed to have worked with so
          many photographers who helped me execute many creative ideas so I’d
          like to invite everyone into my thoughts.
        </p>
        <div class="mt-8">
          <Link
            to="/gallery"
            className="begin border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-indigo-800 hover:text-white px-8 py-3 ring-2"
          >
            Enter
          </Link>
        </div>
      </div>
      <div className="text-xs text-center border p-4">
        <p>Copyright©2021 Cole Edwards, All Rights Reserved. All material on this site may not be reproduced, distributed, cached or otherwise used, except with my prior written permission.</p>
        <p className="pt-2">site made by <span><a href="">askdwe</a></span></p>
      </div>
    </div>
  );
}
