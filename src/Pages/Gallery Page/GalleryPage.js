import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {
  AiOutlinePhone,
  AiOutlineHome,
  AiOutlineArrowUp,
} from 'react-icons/ai';
import GalleryPageImages from './index';
import Slider from '../Resusables/Slider';
import './Gallery.css';

export default function Gallery() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div className="text-center">
        <AiOutlineArrowUp
          onClick={scrollToTop}
          size={40}
          className="fixed bottom-2 right-8 border border-ice-green rounded-full p-2 shadow-sm text-sm font-medium text-gray-700 bg-white animate-bounce hover:cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        />
      </div>
      <div className="lg:min-h-screen">
        <Link to="/contact">
          <AiOutlinePhone
            size={60}
            className="invisible lg:visible absolute top-[500px] right-60 ring-2 p-2 rounded-full text-gray-700 hover:text-yellow-600 hover:ring-yellow-600 hover:cursor-pointer"
          />
          <AiOutlinePhone
            size={40}
            className="visible lg:invisible absolute top-8 right-8 ring-2 p-2 rounded-full ring-gray-500 hover:text-yellow-600 hover:ring-yellow-600 hover:cursor-pointer"
          />
        </Link>
        <Link to="/home">
          <AiOutlineHome
            size={60}
            className="invisible lg:visible absolute top-[500px] right-80 ring-2 rounded-full p-2 text-gray-700 hover:text-ice-green hover:ring-ice-green hover:cursor-pointer"
          />
          <AiOutlineHome
            size={40}
            className="visible lg:invisible absolute top-8 left-8 ring-2 rounded-full p-2 ring-gray-500 hover:text-ice-green hover:ring-ice-green hover:cursor-pointer"
          />
        </Link>
        <div className="bb animate-pulse text-l text-center mt-8 lg:text-2xl lg:top-80 lg:text-neutral-800">
          select an image...
        </div>
        <div className="mon hidden lg:block absolute text-8xl right-20 top-72 uppercase">
          Gallery
        </div>
        <div className="bb hidden lg:block absolute text-2xl right-32 top-96">
          Take a look inside my thoughts..
        </div>
        <div className="bb visible absolute text-l left-20 bottom-8 lg:text-l lg:top-96 lg:left-[420px] lg:text-neutral-800">
          click here for more photos
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-10 px-12 justify-center lg:mx-auto">
        <ScrollLink
          activeClass="active"
          to="HTA_x_HoodstyleHub"
          spy={true}
          smooth={true}
        >
          {/*  */}
          <div className="deg_0 relative w-32 h-32 rounded-full hover:animate-pulse">
            <div className="w-32 h-32 rounded-full absolute lg opacity-40 lg:w-44 lg:h-44" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/30C7F533-E7C2-4042-A20A-0007CEA41EFA.jpg'
              }
              alt="coor"
              className="rounded-full ring ring-gray-200 w-32 h-32 lg:w-44 lg:h-44"
            />
            <div className="bb opacity-0 text-xs hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-semibold hover:cursor-pointer">
              HTA x Hoodstyle Hub
            </div>
          </div>
        </ScrollLink>

        <ScrollLink activeClass="active" to="smgo" spy={true} smooth={true}>
          <div className="deg-45 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/Show Must Go On (1).jpg'
              }
              alt="photoshoot"
              className="rounded-full ring ring-gray-200 w-32 h-32  lg:w-44 lg:h-44"
            />
            <div className="invisible lg:visible opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-semibold hover:cursor-pointer">
              SHOW MUST GO ON
            </div>
          </div>
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="no_remorse"
          spy={true}
          smooth={true}
        >
          <div className="deg-90 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/no_remorse.jpg'
              }
              alt="no remorse photoshoot"
              className="rounded-full ring ring-gray-200 w-32 h-32  lg:w-44 lg:h-44"
            />
            <div className="invisible lg:visible opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-semibold hover:cursor-pointer">
              NO REMORSE
            </div>
          </div>
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="dominatrix"
          spy={true}
          smooth={true}
        >
          <div className="deg-135 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/dominatrix.jpg'
              }
              alt="dominatrix photoshoot"
              className="rounded-full ring ring-gray-200 w-32 h-32  lg:w-44 lg:h-44"
            />
            <div className="invisible lg:visible opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-semibold hover:cursor-pointer">
              DOMINATRIX
            </div>
          </div>
        </ScrollLink>

        <ScrollLink activeClass="active" to="overtime" spy={true} smooth={true}>
          <div className="deg-180 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/OT-2.jpg'
              }
              alt="colors photoshoot"
              className="rounded-full ring ring-gray-200 w-32 h-32  lg:w-44 lg:h-44"
            />
            <div className="invisible lg:visible opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-semibold hover:cursor-pointer">
              OVERTIME
            </div>
          </div>
        </ScrollLink>

        <ScrollLink activeClass="active" to="tiied" spy={true} smooth={true}>
          <div className="deg-225 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/Tiiied.jpg'
              }
              alt="tiied photoshoot"
              className="rounded-full ring ring-gray-200 w-32 h-32  lg:w-44 lg:h-44"
            />
            <div className="invisible lg:visible opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-semibold hover:cursor-pointer">
              TIIED SHOOT
            </div>
          </div>
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="the_office"
          spy={true}
          smooth={true}
        >
          <div className="deg-270 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL + '/highlightimagesforgallerypage/B1.jpg'
              }
              alt="the office photoshoot"
              className="rounded-full ring ring-gray-200 w-32 h-32  lg:w-44 lg:h-44"
            />
            <div className="invisible lg:visible opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-semibold hover:cursor-pointer">
              THE OFFICE
            </div>
          </div>
        </ScrollLink>

        <ScrollLink className="active" to="colors" spy={true} smooth={true}>
          <div className="deg-315 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/Colors-Indigo-Cole-4.png'
              }
              alt="colors photoshoot"
              className="rounded-full ring ring-gray-200 w-32 h-32  lg:w-44 lg:h-44"
            />
            <div className="invisible lg:visible opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-semibold hover:cursor-pointer">
              COLORS
            </div>
          </div>
        </ScrollLink>
      </div>


      <Slider
        imgs={GalleryPageImages.hta_hoodstyle}
        shoot="HTA x Hoodstyle Hub"
        id_name="HTA_x_HoodstyleHub"
        photographer="kaiireloaded"
        styling="herotoall"
        creative="kw33n__t.y"
        model={(['ice.coleyy'], ['yangstarrrrrrr'])}
      />
      <Slider
        imgs={GalleryPageImages.the_office}
        shoot="The Office"
        id_name="the_office"
      />
      <Slider
        imgs={GalleryPageImages.no_remorse}
        shoot="No Remorse"
        id_name="no_remorse"
      />
      <Slider
        imgs={GalleryPageImages.show_must_go_on}
        shoot="Show Must Go On"
        id_name="smgo"
      />
      <Slider imgs={GalleryPageImages.tiied} shoot="Tiied" id_name="tiied" />
      <Slider
        imgs={GalleryPageImages.dominatrix}
        shoot="Dominatrix"
        id_name="dominatrix"
      />
      <Slider imgs={GalleryPageImages.colors} shoot="Colors" id_name="colors" />
      <Slider
        imgs={GalleryPageImages.overtime}
        shoot="Overtime Fits"
        id_name="overtime"
      />
      <div className="text-xs text-center border p-4">
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
    </>
  );
}
