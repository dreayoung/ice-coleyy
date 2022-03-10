import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { AiOutlinePhone, AiOutlineHome, AiTwotoneStar } from 'react-icons/ai';
import GalleryPageImages from './index';
import Slider from '../Resusables/Slider';
import Footer from '../Resusables/Footer';
import './Gallery.css';

export default function Gallery() {
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
        <div class="mon text-white grid place-items-center h-screen text-s animate-pulse">
          into my thoughts...
        </div>
      ) : (
        <>
          <div className="lg:min-h-screen">
            <div className="lg:flex lg:space-x-20 lg:ml-[1000px]">
              <Link to="/contact">
                <AiOutlinePhone
                  size={60}
                  color="white"
                  className="hidden lg:block  absolute top-[500px] ring-2 p-2 rounded-full text-gray-700 hover:brightness-150"
                />
                <AiOutlinePhone
                  size={40}
                  color="white"
                  className="block lg:hidden absolute top-8 right-8 ring-2 p-2 rounded-full ring-gray-500 hover:brightness-150"
                />
              </Link>
              <div className="flex lg:space-x-20">
                <Link to="/home">
                  <AiOutlineHome
                    size={60}
                    color="white"
                    className="hidden lg:block absolute top-[500px] ring-2 rounded-full p-2 text-gray-700 hover:brightness-150"
                  />
                  <AiOutlineHome
                    size={40}
                    color="white"
                    className="block lg:hidden absolute top-8 left-8 ring-2 rounded-full p-2 ring-gray-500 hover:brightness-150"
                  />
                </Link>
                <Link to="/highlights">
                  <AiTwotoneStar
                    color="silver"
                    size={60}
                    className="hidden lg:block absolute top-[500px] ring-2 rounded-full p-2 text-gray-700 hover:brightness-150"
                  />
                  <AiTwotoneStar
                    color="silver"
                    size={40}
                    className="block lg:hidden p-2 mb-2 ring-2 absolute top-8 left-20 rounded-full ring-gray-500 hover:brightness-150"
                  />
                </Link>
              </div>
            </div>
            <div className="bb text-gray-400 animate-pulse text-l text-center mt-8 lg:text-2xl lg:top-80">
              select an image...
            </div>
            <div className="mon hidden lg:block absolute text-7xl right-20 top-72 text-gray-400 uppercase">
              PORTFOLIO
            </div>
            <div className="bb hidden lg:block absolute text-2xl right-32 text-white top-96">
              Take a look inside my thoughts..
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 ml-2 mt-10 px-12 justify-center md:ml-44 lg:mx-auto">
            <ScrollLink
              activeClass="active"
              to="the_office"
              spy={true}
              smooth={true}
            >
              <div className="deg_0 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
                <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40 cursor-pointer" />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/highlightimagesforgallerypage/B1.jpg'
                  }
                  alt="the office photoshoot"
                  className="rounded-full ring ring-stone-500 w-32 h-32  lg:w-44 lg:h-44"
                />
              </div>
            </ScrollLink>

            <ScrollLink
              activeClass="active"
              to="tiiied"
              spy={true}
              smooth={true}
            >
              <div className="deg-45 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
                <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40 cursor-pointer" />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/highlightimagesforgallerypage/Tiiied.JPG'
                  }
                  alt="tiiied photoshoot"
                  className="rounded-full ring ring-stone-500 w-32 h-32  lg:w-44 lg:h-44"
                />
              </div>
            </ScrollLink>

            <ScrollLink className="active" to="colors" spy={true} smooth={true}>
              <div className="deg-315 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
                <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40 cursor-pointer" />
                <img
                  src={process.env.PUBLIC_URL + '/Headshot1.jpg'}
                  alt="colors photoshoot"
                  className="rounded-full ring ring-stone-500 w-32 h-32 lg:w-44 lg:h-44"
                />
              </div>
            </ScrollLink>

            <ScrollLink activeClass="active" to="yas" spy={true} smooth={true}>
              <div className="deg-135 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
                <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40 cursor-pointer" />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/highlightimagesforgallerypage/D072EF99-B5C5-4719-9A9F-72F166304576.JPG'
                  }
                  alt="yas apothecary photoshoot"
                  className="rounded-full ring ring-stone-500 w-32 h-32  lg:w-44 lg:h-44"
                />
              </div>
            </ScrollLink>

            <ScrollLink
              activeClass="active"
              to="no_remorse"
              spy={true}
              smooth={true}
            >
              <div className="deg-180 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
                <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40 cursor-pointer" />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/highlightimagesforgallerypage/no_remorse.jpg'
                  }
                  alt="no remorse photoshoot"
                  className="rounded-full ring ring-stone-500 w-32 h-32  lg:w-44 lg:h-44"
                />
              </div>
            </ScrollLink>

            <ScrollLink
              activeClass="active"
              to="grounded"
              spy={true}
              smooth={true}
            >
              <div className="deg-270 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
                <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40 cursor-pointer" />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/highlightimagesforgallerypage/Grounded (2).jpg'
                  }
                  alt="grounded photoshoot"
                  className="rounded-full ring ring-stone-500 w-32 h-32  lg:w-44 lg:h-44"
                />
              </div>
            </ScrollLink>

            <ScrollLink activeClass="active" to="smgo" spy={true} smooth={true}>
              <div className="deg-90 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
                <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40 cursor-pointer" />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/highlightimagesforgallerypage/Show Must Go On (1).jpg'
                  }
                  alt="show must go on photoshoot"
                  className="rounded-full ring ring-stone-500 w-32 h-32  lg:w-44 lg:h-44"
                />
              </div>
            </ScrollLink>

            <ScrollLink
              activeClass="active"
              to="dominatrix"
              spy={true}
              smooth={true}
            >
              <div className="deg-225 w-32 h-32  lg:w-44 lg:h-44 rounded-full hover:animate-pulse">
                <div className="w-32 h-32  lg:w-44 lg:h-44 rounded-full absolute opacity-40 cursor-pointer" />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/highlightimagesforgallerypage/dominatrix.jpg'
                  }
                  alt="dominatrix photoshoot"
                  className="rounded-full ring ring-stone-500 w-32 h-32  lg:w-44 lg:h-44"
                />
              </div>
            </ScrollLink>
          </div>

          <Slider
            imgs={GalleryPageImages.the_office}
            shoot="The Office"
            id_name="the_office"
            photographer={['moiiimagg']}
            styling={['ice.coleyy']}
            creative={['sohqu']}
            model={['ice.coleyy']}
          />

          <Slider
            imgs={GalleryPageImages.colorsOfLux}
            shoot="Colors of Luxury"
            id_name="colors"
            photographer={['shotxtima']}
            creative={['shotxtima', 'fourthebr4nd']}
            model={['ice.coleyy']}
          />

          <Slider
            imgs={GalleryPageImages.tiied}
            shoot="Tiiied"
            id_name="tiiied"
            photographer={['moiiimagg', 'digitalsbyzac']}
            styling={['ice.coleyy']}
            creative={['ice.coleyy', 'moiiimagg', 'digitalsbyzac']}
            model={['ice.coleyy']}
          />

          <Slider
            imgs={GalleryPageImages.show_must_go_on}
            shoot="Show Must Go On"
            id_name="smgo"
            photographer={['spookyrock']}
            styling={['ice.coleyy']}
            creative={['spookyrock', 'ice.coleyy']}
            model={['ice.coleyy']}
          />

          <Slider
            imgs={GalleryPageImages.yasapothecary}
            id_name="yas"
            shoot="Yasapothecary"
            photographer={['curatorstun']}
            creative={['yasapothecary']}
            model={['ice.coleyy']}
          />

          <Slider
            imgs={GalleryPageImages.no_remorse}
            shoot="No Remorse"
            id_name="no_remorse"
            photographer={['curatorstun']}
            styling={['ice.coleyy']}
            creative={['curatorstun', 'ice.coleyy']}
            model={['ice.coleyy', 'kelz2busy']}
          />

          <Slider
            imgs={GalleryPageImages.grounded}
            id_name="grounded"
            shoot="Grounded"
            photographer={['crzywthacanon']}
            styling={['ice.coleyy']}
            creative={['ice.coleyy']}
            model={['jayxbby', 'gabi.len', 'ice.coleyy', 'p.kayys', 'parisfoy']}
          />

          <Slider
            imgs={GalleryPageImages.dominatrix}
            shoot="Dominatrix"
            id_name="dominatrix"
            photographer={['spookyrock']}
            styling={['ice.coleyy', 'loca_luca_']}
            creative={['ice.coleyy', 'loca_luca_']}
            model={['ice.coleyy', 'loca_luca_']}
          />

          <Slider
            imgs={GalleryPageImages.colors}
            shoot="Colors - Indigo"
            id_name="colors"
            photographer={['thetruepoppy']}
            styling={['ice.coleyy']}
            creative={['thetruepoppy']}
            model={['ice.coleyy']}
          />

          <Slider
            imgs={GalleryPageImages.fresh2death}
            shoot="UGN Showcase"
            photographer={['theboyniko']}
            runway="237ent"
            styling={[
              'svdboysin',
              'stonedrangers',
              'merakim2017',
              'ai.madethis',
            ]}
            model={['ice.coleyy']}
          />

          <Slider
            imgs={GalleryPageImages.cage}
            shoot="Cage"
            photographer={['tcshotit']}
            styling={['ice.coleyy']}
            creative={['ice.coleyy']}
            model={['ice.coleyy']}
          />

          <Slider
            imgs={GalleryPageImages.overtime}
            shoot="OT Fits"
            id_name="overtime"
            photographer={['davidhjacobson']}
            styling={['overtimefits']}
            creative={['overtimefits']}
            model={['ice.coleyy']}
          />

          <Slider
            imgs={GalleryPageImages.hta_hoodstyle}
            shoot="HTA x Hoodstyle Hub"
            id_name="HTA_x_HoodstyleHub"
            photographer={['kaiireloaded', 'dreaaa']}
            styling={['herotoall']}
            creative={['kw33n__t.y']}
            model={['ice.coleyy', 'yangstarrrrrrr']}
          />

          <Slider
            imgs={GalleryPageImages.hold_on_me}
            shoot="Hold on me"
            photographer={['madewithnyc']}
            styling={['ice.coleyy']}
            creative={['madewithnyc', 'ice.coleyy']}
            model={['ice.coleyy']}
          />

          <Footer />
        </>
      )}
    </>
  );
}
