import logoGithub from 'public/svg/logo-github.svg';
import { useState } from 'react';

interface CardData {
  title: string;
  subtitle: string;
  img: string;
  text: string;
  repo: string;
}

export default function CardProjects({
  title,
  subtitle,
  img,
  text,
  repo,
}: CardData) {
  const [cover, setCover] = useState(true);
  return (
    <>
      {cover ? (
        <div className='grid h-96 w-1/2 grid-rows-1 rounded-[52px] bg-zanisk-sand p-9'>
          <div className='mx-auto text-center'>
            <p className=' mb-1 text-xl font-bold text-zanisk-blue'>{title}</p>
            <p className='mb-1 text-sm font-bold text-zanisk-blue'>
              {subtitle}
            </p>
          </div>
          <button
            onClick={() => {
              setCover((prevState: boolean) => !prevState);
            }}
            className='rounded-full bg-zanisk-blue py-2 px-4 font-bold text-white hover:bg-zanisk-green'
          >
            ver mais
          </button>
        </div>
      ) : (
        <div className='grid h-96 w-1/2 grid-rows-1 place-content-center items-center rounded-[52px] bg-zanisk-blue p-9'>
          <p className='text-justify text-white'>{text}</p>
          <div className=' grid grid-cols-2'>
            <a className='w-14 ' target='_blank' href={repo}>
              <img src={logoGithub} alt='logo github' />
            </a>
            <button
              onClick={() => {
                setCover((prevState: boolean) => !prevState);
              }}
              className='rounded-full bg-zanisk-sand py-2 px-4 font-bold text-black hover:bg-zanisk-green'
            >
              ◄◄
            </button>
          </div>
        </div>
      )}
    </>
  );
}
