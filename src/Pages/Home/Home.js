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
    }, 3000);
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
            <div className="w-full h-full absolute lg:top-0 lg:flex lg:text-left">
              <img
                src={process.env.PUBLIC_URL + '/gold.png'}
                className="ml-2 mt-2 w-[150px] lg:w-[280px] lg:h-[280px] lg:ml-72 lg:mt-0"
                alt="ice"
              />
            </div>
            <div className="logo absolute rotate-[325deg] text-right text-3xl mt-12 ml-12 text-white lg:ml-80 lg:text-7xl lg:mt-20">
              Fashion <br /> Portfolio
            </div>
            <div className="justify-center min-h-screen lg:flex lg:min-h-screen">
              <img
                src={process.env.PUBLIC_URL + '/Headshot2.jpg'}
                className="w-3/4 mx-auto pt-16 lg:w-[600px] lg:h-[720px] lg:pt-10"
                alt="Ice Colley HeadShot2"
              />
            </div>
          </div>
          <div className="per flex absolute right-4 top-10 lg:bottom-28 lg:right-80">
            <a
              href="https://www.instagram.com/ice.coleyy/"
              target="_blank"
              rel="noreferrer"
              className="pb-6 hover:drop-shadow-md hover:brightness-125"
            >
              <AiFillInstagram size={30} color="silver" />
            </a>
          </div>

          <div className="logo absolute text-right text-4xl right-8 bottom-56 text-gray-400 lg:text-4xl lg:right-96 lg:mt-6 lg:bottom-36">
            Ice Coleyy
          </div>
          <div className="heading absolute text-right right-8 bottom-28 text-gray-400 text-6xl lg:text-6xl lg:right-96 lg:mt-6 lg:bottom-10">
            COLE <br /> EDWARDS
          </div>
          <ScrollLink
            className="active hover:cursor-pointer"
            to="about"
            spy={true}
            smooth={true}
          >
            <AiOutlineCaretDown
              size={50}
              color="silver"
              className="absolute right-8 bottom-12 animate-bounce hover:brightness-150 lg:right-80 lg:bottom-8"
            />
          </ScrollLink>

          <div id="about" className="text-center mt-44 lg:pt-44 lg:pb-32">
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
                <div className="bb leading-relaxed drop-shadow-xl mt-4 text-xs text-zinc-500 lg:text-xl lg:pr-52 lg:pl-52">
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
            <div className="bb m-4 grid auto-cols-auto items-center lg:border-x-2 lg:border-gray-700">
              <div className="bg-black flex flex-col items-center rounded-[10px] p-[30px] shadow ease-in-out">
                <p className="text-center text-zinc-500 text-xs mb-8 lg:text-xl">
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
                <h1 className="text-zinc-500 lg:text-xl">
                  Print Modeling: $20/hr
                  <br /> Runway Modeling: $75
                  <br />
                  Event Curation: *contact for rates*
                  <br /> Event Emcee: $50
                </h1>
                <div className="flex space-x-4 mt-4 justify-center">
                  <Link
                    to="/portfolio"
                    className="mon text-xs border border-transparent mt-4 p-4 text-base ring-1 ring-blue-500/50 rounded-full text-zinc-500 hover:bg-zinc-800 hover:text-white lg:text-xl"
                  >
                    portfolio
                  </Link>
                  <Link
                    to="/highlights"
                    className="mon text-xs border border-transparent mt-4 p-4 text-base ring-1 ring-blue-500/50 rounded-full text-zinc-500 hover:bg-zinc-800 hover:text-white lg:text-xl"
                  >
                    highlights
                  </Link>
                  <Link
                    to="/contact"
                    className="mon text-xs border border-transparent mt-4 p-4 text-base ring-1 ring-blue-500/50 rounded-full text-zinc-500 hover:bg-zinc-800 hover:text-white lg:text-xl"
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
