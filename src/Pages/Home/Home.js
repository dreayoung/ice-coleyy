import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {
  AiOutlineCaretDown,
  AiFillInstagram,
  AiOutlinePicture,
  AiTwotoneStar,
  AiOutlinePhone,
} from 'react-icons/ai';
import homeAbout from './data';
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
        <div>
          <div className="relative top-0">
            <div className="w-full h-full absolute lg:top-0 lg:flex lg:text-left">
              <img
                src={process.env.PUBLIC_URL + '/gold.png'}
                className="ml-2 mt-2 w-[150px] lg:w-[250px] lg:h-[250px] lg:ml-72 lg:mt-0"
                alt="ice"
              />
            </div>
            <div className="logo absolute rotate-[325deg] text-right text-3xl mt-12 ml-12 text-white lg:ml-[330px] lg:text-6xl lg:mt-16">
              Fashion <br /> Portfolio
            </div>
            <div className="justify-center min-h-screen lg:flex lg:min-h-screen">
              <img
                src={process.env.PUBLIC_URL + '/homepic.JPG'}
                className="w-3/4 mx-auto pt-16 lg:w-[500px] lg:h-[720px] lg:pt-10"
                alt="Ice Colley HeadShot2"
              />
            </div>
          </div>
          <div className="per flex absolute right-2 top-10 lg:bottom-28 lg:right-80">
            <a
              href="https://www.instagram.com/ice.coleyy/"
              target="_blank"
              rel="noreferrer"
              className="pb-8 hover:drop-shadow-md hover:brightness-125"
            >
              <AiFillInstagram size={45} color="silver" />
            </a>
            <Link to="/portfolio">
              <AiOutlinePicture
                color="silver"
                size={40}
                className="p-2 mb-2 ring-2 rounded-full ring-gray-500 hover:brightness-150"
              />
            </Link>
            <Link to="/highlights">
              <AiTwotoneStar
                color="silver"
                size={40}
                className="p-2 mb-2 ring-2 rounded-full ring-gray-500 hover:brightness-150"
              />
            </Link>
            <Link to="/contact">
              <AiOutlinePhone
                color="silver"
                size={40}
                className="p-2 mb-2 ring-2 rounded-full ring-gray-500 hover:brightness-150"
              />
            </Link>
          </div>

          <div className="logo absolute text-right text-4xl right-8 bottom-56 text-gray-400 lg:text-4xl lg:right-96 lg:mt-6 lg:bottom-36">
            Ice Coleyy
          </div>
          <div className="mon absolute text-right right-8 bottom-28 text-gray-400 text-6xl lg:text-6xl lg:right-96 lg:mt-6 lg:bottom-10">
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
              color="purple"
              className="absolute right-8 bottom-12 animate-bounce hover:brightness-150 lg:right-80 lg:bottom-8"
            />
          </ScrollLink>

          <div id="about" className="text-center mt-44 lg:pt-44 lg:pb-32">
            <div className="bb text-s pt-8 text-zinc-500 lg:text-l text-block font-thin">
              {homeAbout.subHeading}
            </div>
            <img
              src={process.env.PUBLIC_URL + '/Headshot1.jpg'}
              className="mx-auto mt-10 w-[300px] rounded-md"
              alt="ice"
            />
            <div className="bb mt-4 grid auto-cols-auto items-center">
              <div className="bg-black flex flex-col items-center rounded-[10px] p-[30px] shadow ease-in-out">
                <div className="bb leading-relaxed drop-shadow-xl mt-4 text-s text-zinc-500 lg:text-xl lg:pr-52 lg:pl-52">
                  <p className="mb-4">
                    {homeAbout.firstSentence}{' '}
                    <a
                      href="https://www.instagram.com/fourthebr4nd"
                      className="hover:brightness-150"
                    >
                      @{homeAbout.agency}
                    </a>{' '}
                    {homeAbout.bio1}
                  </p>
                  <p>{homeAbout.bio2}</p>
                </div>
              </div>
            </div>
            <div className="bb m-4 grid auto-cols-auto items-center lg:border-x-2 lg:border-gray-700">
              <div className="bg-black flex flex-col items-center rounded-[10px] p-[30px] shadow ease-in-out">
                <p className="text-center text-zinc-500 text-s mb-8 lg:text-xl">
                  {homeAbout.contactOptions}
                </p>
                <img
                  className="mb-[10px] w-[160px]"
                  src={icon}
                  alt="price icon"
                />
                <p className="text-center text-zinc-400 text-xs mt-8 mb-4">
                  {' '}
                  {homeAbout.ratesChange}
                </p>
                <h1 className="text-zinc-500 lg:text-xl">
                  {homeAbout.printModel}
                  <br />
                  {homeAbout.runwayModel}
                  <br />
                  {homeAbout.eventCur}
                  <br /> {homeAbout.eventEmcee}
                </h1>
                <div className="flex space-x-4 mt-4 justify-center">
                  <Link
                    to="/portfolio"
                    className="mon text-xs mt-4 p-2 text-base border-x-2 border-transparent border-blue-500/50 rounded-full text-zinc-500 hover:brightness-125 hover:text-white lg:text-xl"
                  >
                    portfolio
                  </Link>
                  <Link
                    to="/highlights"
                    className="mon text-xs mt-4 p-2 text-base border-x-2 border-transparent border-blue-500/50 rounded-full text-zinc-500 hover:brightness-125 hover:text-white lg:text-xl"
                  >
                    highlights
                  </Link>
                  <Link
                    to="/contact"
                    className="mon text-xs mt-4 p-2 text-base border-x-2 border-transparent border-blue-500/50 rounded-full text-zinc-500 hover:brightness-125 hover:text-white lg:text-xl"
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
