import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { AiOutlineCaretDown, AiFillInstagram } from 'react-icons/ai';
import Footer from '../Resusables/Footer';
import icon from './undraw.svg';
import './Home.css';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <img
          src={process.env.PUBLIC_URL + '/icon.ico'}
          className="mx-auto mt-96 animate-spin"
          alt="ice"
        />
      ) : (
        <div data-testid="hmpg-1">
          <div className="relative top-0 lg:overflow-hidden">
            {/* <div className="w-full h-full bg-ice-green absolute opacity-30" /> */}
            <div className="w-full h-full absolute lg:top-0 lg:flex lg:text-left">
              <img
                src={process.env.PUBLIC_URL + '/gold.png'}
                className="ml-2 mt-2"
                alt="ice"
                width="150px"
              />
            </div>
            <div className="logo absolute rotate-[325deg] text-right text-3xl mt-12 ml-12 text-white">
              Fashion <br /> Portfolio
            </div>
            <div className="justify-center min-h-screen lg:flex lg:min-h-screen">
              <img
                src={process.env.PUBLIC_URL + '/Headshot2.jpg'}
                className="w-3/4 mx-auto pt-16 lg:w-[500px] lg:h-[620px] lg:pt-10"
                alt="Ice Colley HeadShot2"
              />
              {/* <img
                src={process.env.PUBLIC_URL + '/Headshot1.jpg'}
                className="w-[250px] h-[250px] mx-auto lg:w-[500px] lg:h-[620px] lg:pt-10"
                alt="Ice Colley HeadShot1"
              /> */}
            </div>
          </div>
          <div className="per flex absolute right-4 top-10 lg:bottom-28 lg:right-20">
            <a
              href="https://www.instagram.com/ice.coleyy/"
              target="_blank"
              rel="noreferrer"
              className="pb-6 hover:drop-shadow-md hover:brightness-125 lg:pb-6"
            >
              <AiFillInstagram size={30} color="silver" />
            </a>
            {/* <div className="text-gray-400 text-3xl pb-10 hover:text-gray-700 lg:pb-8 lg:text-3xl lg:hover:text-gray-700">
              <Link to="/gallery">GALLERY</Link>
            </div>
            <div className="text-gray-400 text-3xl hover:text-gray-700 lg:text-3xl lg:hover:text-gray-700">
              <Link to="/contact">CONTACT</Link>
            </div> */}
          </div>

          <div className="logo absolute text-right text-4xl right-8 bottom-56 text-gray-400 lg:text-gray-600 lg:text-4xl lg:ml-8 lg:mt-6">
            Ice Coleyy
          </div>
          <div className="heading absolute text-right right-8 bottom-28 text-gray-400 text-6xl lg:text-gray-600 lg:text-4xl lg:ml-8 lg:mt-6">
            COLE <br /> EDWARDS
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
              size={50}
              color="silver"
              className="absolute right-8 bottom-12 animate-bounce hover:brightness-150 lg:right-20 lg:bottom-12"
            />
          </ScrollLink>

          <div id="about" className="text-center mt-44 lg:pt-72 lg:pb-32">
            <div className="bb text-s pt-8 text-zinc-500 lg:text-l text-block font-thin">
              Event curator | Model
            </div>
            <img
              src={process.env.PUBLIC_URL + '/Headshot1.jpg'}
              className="mx-auto mt-10 w-[300px] rounded-md"
              alt="ice"
            />
            <div className="bb mt-4 grid auto-cols-auto items-center">
              <div className="bg-black flex flex-col items-center rounded-[10px] p-[30px] shadow ease-in-out">
                <div className="bb leading-relaxed drop-shadow-xl mt-4 text-xs text-zinc-500 lg:border-x-4 lg:border-gray-700 lg:text-xl lg:pr-52 lg:pl-52">
                  <p className="mb-4">
                    Wassup, I’m Cole, an event curator and a model signed to
                    @fourthebr4nd agency. I was born and raised in New York City
                    and currently attend Howard University. Since a young kid,
                    I’ve been surrounded by music whether I was riding in the
                    back of dad’s car with Jay Z on the radio or running around
                    the house with Lil Wayne on my brother’s iPod or Sunday’s
                    cleaning with Erykah Badu on the tv. Looking up to these
                    musicians, i initially wanted to make music myself. After
                    doing that for a little while, I found more passion in
                    creating opportunities for musicians and other creatives. It
                    led me to curating events whether that be coordination from
                    scratch or assisting in the talent scouting. I also emcee at
                    some of these events. You can view my curation work on my
                    “Highlights” page. Look forward to helping you all throw the
                    best event!
                  </p>
                  <p>
                    Another thing I awkwardly enjoyed since adolescence was
                    being in front of a camera. Pictures to me feel like
                    memories, capturing your aura in that certain moment of
                    time. They say pictures are worth a thousand words; I think
                    you can’t measure the worth of pictures in words without
                    infinite. I use my pictures as art, a way to expressions
                    those feelings that I struggle to express verbally. I hope
                    my art makes somebody feel a certain way by looking at it.
                    Check out the “Portfolio” tab to peek into my thoughts.
                    Can’t wait to help you execute your idea!
                  </p>
                </div>
              </div>
            </div>
            <div className="bb m-10 grid auto-cols-auto items-center">
              <div className="bg-black flex flex-col items-center rounded-[10px] p-[30px] shadow ease-in-out">
                <p className="text-center text-zinc-500 text-xs mb-8">
                  You can contact me by email via the “Contact“ tab. <br />
                  Please include all details of the gig in the “Message” box.
                  <br /> I reply quickly with my rates but standard rates are:
                </p>
                <img
                  className="mb-[10px] w-[160px]"
                  src={icon}
                  alt="price icon"
                />
                <p className="text-center text-zinc-400 text-xs mt-8 mb-4">
                  {' '}
                  *rates are subject to change after description of the gig*
                </p>
                <h1 className="text-zinc-500">
                  Print Modeling: $20/hr
                  <br /> Runway Modeling: $75
                  <br />
                  Event Curation: *contact for rates*
                  <br /> Event Emcee: $50
                </h1>
                <div className="flex space-x-4 mt-4 justify-center">
                  <Link
                    to="/portfolio"
                    className="mon text-xs border border-transparent mt-4 p-4 text-base ring-1 ring-blue-500/50 rounded-full text-zinc-500 hover:bg-zinc-800 hover:text-white"
                  >
                    portfolio
                  </Link>
                  <Link
                    to="/highlights"
                    className="mon text-xs border border-transparent mt-4 p-4 text-base ring-1 ring-blue-500/50 rounded-full text-zinc-500 hover:bg-zinc-800 hover:text-white"
                  >
                    highlights
                  </Link>
                  <Link
                    to="/contact"
                    className="mon text-xs border border-transparent mt-4 p-4 text-base ring-1 ring-blue-500/50 rounded-full text-zinc-500 hover:bg-zinc-800 hover:text-white"
                  >
                    contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
