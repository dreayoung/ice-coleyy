import React from 'react';
import ReactPlayer from 'react-player';
import popVideo from './videos/popup.mp4';
import sessionsVid from './videos/sessions.mp4';
import showcase237 from './videos/237showcase.mp4';
import holyg from './videos/holyg-video.mp4';
import hurriharan from './videos/haran.mp4';
import nwo from './videos/nwo-vid.mp4';
import mattP from './videos/mattP.mp4';
import mylesB from './videos/mylesB.mp4';
import edot from './videos/edott.mp4';
import sha from './videos/sha.mp4';
import Footer from '../Resusables/Footer';
import './highlights.css';

export default function Highlights() {
  return (
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
            <div className="mon text-gray-600 mb-4 mt-2">237 Showcase</div>
            <div className="max-w-screen-lg mx-auto flex justify-center pb-10">
              <ReactPlayer
                url={showcase237}
                controls={true}
                width="300px"
                height="100%"
              />
            </div>
          </div>
        </div>

        <div className="bb m-10 grid auto-cols-auto items-center">
          <div className="bg-black flex flex-col items-center rounded-[10px] p-[10px] shadow ease-in-out">
            <div className="mon text-gray-600 mb-4 mt-2">
              {' '}
              🌟 SESSIONS @herokes
            </div>
            <div className="max-w-screen-lg mx-auto flex justify-center pb-10">
              <ReactPlayer
                url={sessionsVid}
                controls={true}
                width="300px"
                height="100%"
              />
            </div>
          </div>
        </div>

        <div className="bb m-10 grid auto-cols-auto items-center">
          <div className="bg-black flex flex-col items-center rounded-[10px] p-[10px] shadow ease-in-out">
            <div className="mon text-gray-600 mb-4 mt-2"> POP UP N VIBE</div>
            <div className="max-w-screen-lg mx-auto flex justify-center mb-10">
              <ReactPlayer
                url={popVideo}
                controls={true}
                width="300px"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bb mb-44 items-center">
        <div className="bg-black p-[10px] text-center shadow ease-in-out">
          <a
            href="https://www.instagram.com/holyguruu"
            className="mon text-gray-600 mb-4 mt-4 lg:text-4xl"
          >
            @HolyGuruu
          </a>
          <div className="max-w-screen-lg mx-auto flex justify-center w-fit pb-10">
            <img
              src={require('./ARTISTS/holyguruu.png')}
              alt="holyguruu"
              className="w-[200px] pr-2 lg:w-[300px]"
            />
            <ReactPlayer
              url={holyg}
              controls={true}
              className="lg:w-[300px]"
              width="200px"
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className="bb mb-44 items-center">
        <div className="bg-black p-[10px] shadow ease-in-out text-center">
          <a
            href="https://www.instagram.com/yangstaar"
            className="mon text-gray-600 mb-4 mt-4 lg:text-4xl"
          >
            @Yangstaar
          </a>
          <div className="max-w-screen-lg mx-auto flex justify-center w-fit pb-10">
            <img
              src={require('./ARTISTS/youngstar.png')}
              alt="yangstar"
              className="w-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="bb mb-44 items-center">
        <div className="bg-black p-[10px] shadow ease-in-out text-center">
          <a
            href="https://www.instagram.com/hurriharan"
            className="mon text-gray-600 mb-4 mt-4 lg:text-4xl"
          >
            @Hurriharan
          </a>
          <div className="max-w-screen-lg mx-auto flex justify-center w-fit pb-10">
            <img
              src={require('./ARTISTS/hurihan.png')}
              alt="hurriharan"
              className="w-[200px] pr-2 lg:w-[300px]"
            />
            <ReactPlayer
              url={hurriharan}
              controls={true}
              width="200px"
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className="bb mb-44 items-center">
        <div className="bg-black p-[10px] shadow ease-in-out text-center">
          <a
            href="https://www.instagram.com/nwo_flare"
            className="mon text-gray-600 mb-4 mt-4 lg:text-4xl"
          >
            @Nwo_flare
          </a>
          <div className="max-w-screen-lg mx-auto flex justify-center w-fit pb-10">
            <img
              src={require('./ARTISTS/nwo.png')}
              alt="nwo flare"
              className="w-[200px] pr-2 lg:w-[300px]"
            />
            <ReactPlayer
              url={nwo}
              controls={true}
              width="200px"
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className="bb mb-44 items-center">
        <div className="bg-black p-[10px] shadow ease-in-out text-center">
          <a
            href="https://www.instagram.com/mattpistonn"
            className="mon text-gray-600 mb-4 mt-4 lg:text-4xl"
          >
            @Mattpistonn
          </a>
          <div className="max-w-screen-lg mx-auto flex justify-center w-fit pb-10">
            <img
              src={require('./ARTISTS/matt.png')}
              alt="matt piston"
              className="w-[200px] pr-2 lg:w-300px]"
            />
            <ReactPlayer
              url={mattP}
              controls={true}
              width="230px"
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className="bb mb-44 items-center">
        <div className="bg-black p-[10px] shadow ease-in-out text-center">
          <a
            href="https://www.instagram.com/whotfismylesbrando"
            className="mon text-gray-600 lg:text-4xl"
          >
            @Whotfismylesbrando
          </a>
          <div className="max-w-screen-lg mx-auto flex justify-center w-fit pb-10">
            <img
              src={require('./ARTISTS/myles.png')}
              alt="myles brando"
              className="w-[250px] pr-2 lg:w-[300px]"
            />
            <ReactPlayer
              url={mylesB}
              controls={true}
              width="200px"
              height="400px"
            />
          </div>
        </div>
      </div>

      <div className="bb mb-44 items-center">
        <div className="bg-black p-[10px] shadow ease-in-out text-center">
          <a
            href="https://www.instagram.com/tiff.isthaname"
            className="mon text-gray-600 mb-4 mt-4 lg:text-4xl"
          >
            @Tiff.isthaname
          </a>
          <div className="max-w-screen-lg mx-auto flex justify-center w-fit pb-10">
            <img
              src={require('./ARTISTS/tiff.png')}
              alt="Tiff"
              className="w-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="bb mb-44 items-center">
        <div className="bg-black p-[10px] shadow ease-in-out text-center">
          <a
            href="https://www.instagram.com/taemackk"
            className="mon text-gray-600 mb-4 mt-4 lg:text-4xl"
          >
            @Taemackk
          </a>
          <div className="max-w-screen-lg mx-auto flex justify-center w-fit pb-10">
            <img
              src={require('./ARTISTS/taemack.png')}
              alt="tae mack"
              className="w-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="bb mb-44 items-center">
        <div className="bg-black p-[10px] shadow ease-in-out text-center">
          <a
            href="https://www.instagram.com/edotbirkin"
            className="mon text-gray-600 mb-4 mt-4 lg:text-4xl"
          >
            @Edotbirkin
          </a>
          <div className="max-w-screen-lg mx-auto flex justify-center w-fit pb-10">
            <img
              src={require('./ARTISTS/edot.png')}
              alt="Edot"
              className="w-[150px] pr-2 lg:w-[200px]"
            />
            <ReactPlayer
              url={edot}
              controls={true}
              width="250px"
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className="bb mb-44 items-center">
        <div className="bg-black p-[10px] shadow ease-in-out text-center">
          <a
            href="https://www.instagram.com/"
            className="mon text-gray-600 mb-4 mt-4 lg:text-4xl"
          >
            @Sha.supreme
          </a>
          <div className="max-w-screen-lg mx-auto flex justify-center w-fit pb-10">
            <img
              src={require('./ARTISTS/sha.supreme.png')}
              alt="Sha supreme"
              className="w-[200px] pr-2 lg:w-[300px]"
            />
            <ReactPlayer
              url={sha}
              controls={true}
              width="200px"
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className="bb mb-44 items-center">
        <div className="bg-black p-[10px] shadow ease-in-out text-center">
          <a
            href="https://www.instagram.com/kelz2buzy"
            className="mon text-gray-600 mb-4 mt-4 lg:text-4xl"
          >
            @Kelz2busy
          </a>
          <div className="max-w-screen-lg mx-auto flex justify-center w-fit pb-10">
            <img
              src={require('./ARTISTS/kelz.png')}
              alt="Kelz"
              className="w-[300px]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
