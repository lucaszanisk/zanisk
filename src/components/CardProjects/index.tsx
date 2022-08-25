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
        <div className='grid grid-rows-3 gap-14 rounded-[52px] bg-zanisk-sand p-9 text-center'>
          <p className=' mb-1 text-xl font-bold text-zanisk-blue'>{title}</p>
          <p className='mb-1 text-sm font-bold text-zanisk-blue'>{subtitle}</p>

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
        <div className='grid grid-rows-2 rounded-[52px] bg-zanisk-blue p-7 text-center'>
          <p className='text-justify text-white'>{text}</p>
          <div className='row-start-3 grid grid-cols-2 grid-rows-1 '>
            <a className='' target='_blank' rel='noreferrer' href={repo}>
              <img src={logoGithub} alt='logo github' />
            </a>

            <button
              onClick={() => {
                setCover((prevState: boolean) => !prevState);
              }}
              className=' rounded-full bg-zanisk-sand px-4 text-black hover:bg-zanisk-green'
            >
              Voltar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
