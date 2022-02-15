import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Home.css';

export default function Home() {
  return (
    <div data-testid="hmpg-1">
      <div className="relative top-0 lg:overflow-hidden">
        <div className="w-full h-full bg-ice-green absolute opacity-60" />
        <div className="w-full h-full absolute lg:top-80 lg:flex lg:justify-center">
          <div className="heading text-gray-600 font-medium text-right text-4xl mt-5 mr-4 lg:text-gray-600 lg:text-6xl">
            ICE COLEYY
          </div>
        </div>
        <div className="w-full h-full absolute pt-5 top-96 left-0 flex justify-center space-x-10">
          <div className="text-gray-600 hover:text-gray-700">
            <Link to="/gallery">GALLERY</Link>
          </div>
          <div className="text-gray-600 hover:text-gray-700">
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
        <div className="min-h-screen pt-3 lg:pt-0 lg:flex justify-center">
          <img
            src={process.env.PUBLIC_URL + '/Headshots2.jpg'}
            className="sm:w-max lg:w-7/12"
            alt="Ice Colley HeadShot2"
          />
          <img
            src={process.env.PUBLIC_URL + '/Headshots1.jpg'}
            className="sm:w-max lg:w-7/12"
            alt="Ice Colley HeadShot1"
          />
        </div>
        <ScrollLink className="active" to="about" spy={true} smooth={true}>
          <div className="absolute flex justify-center inset-x-0 bottom-10 lg:bottom-36 text-gray-600 animate-bounce">
            Learn more!
          </div>
        </ScrollLink>
      </div>

      <div id="about" className="text-center mt-72 mb-72 lg:mt-72 lg:mb-32">
        <h2 className="text-4xl">Meet Ice Coleyy,</h2>
        <div>the model with the crazy faces</div>
        <p className="pt-10 pr-10 pl-10 text-xs lg:text-xl lg:pr-52 lg:pl-52">
          Wassup, I’m Cole, a Howard University student born and raised in New
          York City. I began modeling in 2019 after being interested in fashion
          for a number of years. Back then, it was just iPhone pictures to
          capture my outfits but overtime, I developed a style to express my
          internal emotions through my art. I am blessed to have worked with so
          many photographers who helped me execute many creative ideas so I’d
          like to invite everyone into my thoughts.
        </p>
      </div>
      <div className="flex justify-center pb-10 lg:mb-28">
        <img
          src={process.env.PUBLIC_URL + '/icons8-instagram.svg'}
          alt="instagram icon"
          className="w-10 h-10"
        />
      </div>
    </div>
  );
}
