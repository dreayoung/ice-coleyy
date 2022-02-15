import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import GalleryPageImages from './index';
import Slider from '../Resusables/Slider';
import './Gallery.css';

export default function Gallery() {
  return (
    <>
      <div className="absolute top-2/4 left-24 right-24 text-center">
        <div className="heading lg:text-6xl lg:text-gray-600 lg:text-right lg:right-38 lg:top-80 lg:text-neutral-800">
          Gallery Page
        </div>
        <p className="lg:flex lg:justify-end hidden lg:block">
          check out a shoot by clicking on an image!
        </p>
        <div className="sub hidden lg:flex lg:justify-end lg:space-x-3 lg:mt-44 lg:mr-20 lg:block">
          <Link to="/home">
            <button className="lg:px-3 lg:py-1 lg:rounded lg:bg-ice-green lg:flex">
              {' '}
              Home
            </button>
          </Link>
          <button className="lg:px-3 lg:py-1 lg:rounded lg:bg-ice-green lg:flex">
            Contact
          </button>
        </div>
      </div>

      <div className="min-h-screen grid grid-cols-2 gap-16 place-content-center ml-8 mr-8">
        <ScrollLink
          activeClass="active"
          to="HTA_x_HoodstyleHub"
          spy={true}
          smooth={true}
        >
          {/*  */}
          <div className="deg_0 relative w-36 h-36 rounded-full hover:animate-pulse">
            <div className="w-36 h-36 rounded-full absolute bg-green-800 opacity-40 lg:w-44 lg:h-44" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/30C7F533-E7C2-4042-A20A-0007CEA41EFA.jpg'
              }
              alt="coor"
              className="rounded-full w-36 h-36 lg:w-44 lg:h-44"
            />
            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-semibold hover:cursor-pointer">
              HTA x Hoodstyle Hub
            </div>
          </div>
        </ScrollLink>

        <ScrollLink activeClass="active" to="smgo" spy={true} smooth={true}>
          <div className="deg-45 w-36 h-36 lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full absolute bg-green-800 opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/Show Must Go On (1).jpg'
              }
              alt="photoshoot"
              className="rounded-full w-36 h-36 lg:w-44 lg:h-44"
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
          <div className="deg-90 w-36 h-36 lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full absolute bg-green-800 opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/no_remorse.jpg'
              }
              alt="no remorse photoshoot"
              className="rounded-full w-36 h-36 lg:w-44 lg:h-44"
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
          <div className="deg-135 w-36 h-36 lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full absolute bg-green-800 opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/dominatrix.jpg'
              }
              alt="dominatrix photoshoot"
              className="rounded-full w-36 h-36 lg:w-44 lg:h-44"
            />
            <div className="invisible lg:visible opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-semibold hover:cursor-pointer">
              DOMINATRIX
            </div>
          </div>
        </ScrollLink>

        <ScrollLink activeClass="active" to="overtime" spy={true} smooth={true}>
          <div className="deg-180 w-36 h-36 lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full absolute bg-green-800 opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/OT-2.jpg'
              }
              alt="colors photoshoot"
              className="rounded-full w-36 h-36 lg:w-44 lg:h-44"
            />
            <div className="invisible lg:visible opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-semibold hover:cursor-pointer">
              OVERTIME
            </div>
          </div>
        </ScrollLink>

        <ScrollLink activeClass="active" to="tiied" spy={true} smooth={true}>
          <div className="deg-225 w-36 h-36 lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full absolute bg-green-800 opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/Tiiied.jpg'
              }
              alt="tiied photoshoot"
              className="rounded-full w-36 h-36 lg:w-44 lg:h-44"
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
          <div className="deg-270 w-36 h-36 lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full absolute bg-green-800 opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL + '/highlightimagesforgallerypage/B1.jpg'
              }
              alt="the office photoshoot"
              className="rounded-full w-36 h-36 lg:w-44 lg:h-44"
            />
            <div className="invisible lg:visible opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-semibold hover:cursor-pointer">
              THE OFFICE
            </div>
          </div>
        </ScrollLink>

        <ScrollLink className="active" to="colors" spy={true} smooth={true}>
          <div className="deg-315 w-36 h-36 lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
            <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full absolute bg-green-800 opacity-40" />
            <img
              src={
                process.env.PUBLIC_URL +
                '/highlightimagesforgallerypage/Colors-Indigo-Cole-4.png'
              }
              alt="colors photoshoot"
              className="rounded-full w-36 h-36 lg:w-44 lg:h-44"
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
    </>
  );
}
