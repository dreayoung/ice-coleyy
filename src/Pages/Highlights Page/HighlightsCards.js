import React from 'react';
import ReactPlayer from 'react-player';

export default function Cards({ name, linktree, noVideo, song, smWidth }) {
  return (
    <div>
      <div className="bb mb-44 items-center">
        <div className="bg-black p-[10px] text-center shadow ease-in-out">
          <div className="flex items-center justify-center space-x-2">
            <a
              href={`https://www.instagram.com/${name}`}
              className="mon text-xl text-gray-600 mb-6 mt-4 hover:brightness-125 lg:text-4xl"
            >
              @{name}
            </a>
            {song ? (
              <a href={song} target="_blank" rel="noreferrer">
                <img
                  src={
                    process.env.PUBLIC_URL + '/icons8-earbud-headphones-30.png'
                  }
                  className="bg-gray-400 hover:brightness-150"
                  alt="link tree"
                />
              </a>
            ) : (
              <a
                href={`https://linktr.ee/${linktree ? linktree : name}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + '/icons8-linktree.svg'}
                  className="hover:brightness-150 w-[40px]"
                  alt="link tree"
                />
              </a>
            )}
          </div>
          <div className="mx-auto flex justify-center w-fit pb-10">
            <img
              src={require(`./ARTISTS/${name}.PNG`)}
              alt={name}
              className="w-[200px] pr-2 lg:w-[300px]"
            />
            <div>
              {!noVideo ? (
                <ReactPlayer
                  url={`/videos/${name}.mp4`}
                  controls={true}
                  width={smWidth ? smWidth : '200px'}
                  height="100%"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
