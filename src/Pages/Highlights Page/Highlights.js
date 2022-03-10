import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Cards from './HighlightsCards';
import Footer from '../Resusables/Footer';
import {
  AiOutlinePicture,
  AiOutlineHome,
  AiOutlinePhone,
} from 'react-icons/ai';
import './highlights.css';

export default function Highlights() {
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
        <div class="logo text-white grid place-items-center h-screen text-2xl animate-pulse">
          Meet the artists...
        </div>
      ) : (
        <>
          <div className="heading text-white text-4xl mt-16 text-center">
            Highlights Page
          </div>
          <div className="bb text-center text-white text-xs mb-16">
            Footage from past events
          </div>
          <section className="max-w-screen-lg mx-auto flex justify-center pb-10">
            <img
              src={require('./ARTISTS/AQUA.png')}
              alt="showcase"
              className="w-[300px] rounded-md"
            />
          </section>

          <div className="lg:flex lg:ml-28">
            <div className="bb m-10 grid auto-cols-auto items-center">
              <div className="bg-black flex flex-col items-center rounded-[10px] p-[10px] shadow ease-in-out">
                <div className="mon text-gray-600 mb-6 mt-2 text-center">
                  {' '}
                  Sessions by{' '}
                  <a
                    href="https://www.instagram.com/herokes"
                    className="hover:brightness-150"
                  >
                    @herokes
                  </a>
                </div>
                <div className="max-w-screen-lg mx-auto flex justify-center pb-10">
                  <ReactPlayer
                    url={'/videos/sessions.mp4'}
                    controls={true}
                    width="300px"
                    height="100%"
                  />
                </div>
              </div>
            </div>

            <div className="bb m-10 grid auto-cols-auto items-center">
              <div className="bg-black flex flex-col items-center rounded-[10px] p-[10px] shadow ease-in-out">
                <div className="mon text-gray-600 mb-6 mt-2">
                  237 Showcase by{' '}
                  <a
                    href="https://www.instagram.com/thatlittlife"
                    className="hover:brightness-150"
                  >
                    @thalittlife
                  </a>
                </div>
                <div className="max-w-screen-lg mx-auto flex justify-center pb-10">
                  <ReactPlayer
                    url={'/videos/237showcase.mp4'}
                    controls={true}
                    width="300px"
                    height="100%"
                  />
                </div>
              </div>
            </div>

            <div className="bb m-10 grid auto-cols-auto items-center">
              <div className="bg-black flex flex-col items-center rounded-[10px] p-[10px] shadow ease-in-out">
                <div className="mon text-gray-600 mb-6 mt-2">Pop Up n Vibe</div>
                <div className="max-w-screen-lg mx-auto flex justify-center mb-10">
                  <ReactPlayer
                    url={'./videos/popup.mp4'}
                    controls={true}
                    width="300px"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>

          <Cards name="holyguruu" />
          <Cards
            name="yangstarrrrrrr"
            linktree="yangstarrr3H"
            smWidth="260px"
          />
          <Cards name="hurriharan" />
          <Cards name="nwo_flare" />
          <Cards name="mattpistonn" smWidth="250px" />
          <Cards
            name="whotfismylesbrando"
            linktree="mylesbrando"
            smWidth="260px"
          />
          <Cards name="tiff.isthaname" noVideo />
          <Cards name="taemackk" />
          <Cards name="edotbirkin" />
          <Cards name="sha.supreme" linktree="ShaSupreme" />
          <Cards name="kelz2busy" song=" https://song.link/trnm3fr6hfh26" />

          <div className="flex items-center justify-center space-x-4">
            <Link to="/portfolio">
              <AiOutlinePicture
                color="silver"
                size={50}
                className="p-2 mb-2 ring-2 rounded-full ring-gray-500 hover:brightness-150"
              />
            </Link>
            <Link to="/highlights">
              <AiOutlineHome
                color="silver"
                size={50}
                className="p-2 mb-2 ring-2 rounded-full ring-gray-500 hover:brightness-150"
              />
            </Link>
            <Link to="/contact">
              <AiOutlinePhone
                color="silver"
                size={50}
                className="p-2 mb-2 ring-2 rounded-full ring-gray-500 hover:brightness-150"
              />
            </Link>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}
