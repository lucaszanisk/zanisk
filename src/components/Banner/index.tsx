import foto from 'public/images/foto-lucas.svg';
import logoLinkedin from 'public/svg/logo-linkedin.svg';
import logoGithub from 'public/svg/logo-github.svg';
import setaRosa from 'public/svg/seta-rosa.svg';
import About from '@/components/About';
import { useEffect, useState } from 'react';

export default function Banner() {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    console.log(showAbout);
  }, [showAbout]);

  return (
    <>
      <div className='mx-auto grid w-4/5 grid-cols-2 items-center bg-zanisk-blue'>
        <div className='grid h-64 grid-rows-3'>
          <h1 className=' text-[4rem] font-bold tracking-[.2em] text-zanisk-sand'>
            LUCAS ZANISK
          </h1>
          <h2 className='text-5xl font-normal  tracking-[.2em] text-zanisk-sand  opacity-75'>
            DESENVOLVEDOR FRONTEND
          </h2>
          <div className='mt-10 grid w-48 grid-cols-2 gap-0'>
            <a
              className='w-12'
              target='_blank'
              href='https://www.linkedin.com/in/lucaszanisk/'
            >
              <img src={logoLinkedin} alt='logo linkedin' />
            </a>

            <a
              className='w-14'
              target='_blank'
              href='https://github.com/lucaszanisk'
            >
              <img src={logoGithub} alt='logo github' />
            </a>
          </div>
        </div>

        <img src={foto} alt='foto lucas' />
      </div>
      {showAbout && <About />}
      <div
        className={
          showAbout
            ? 'mx-auto grid rotate-180 grid-cols-1'
            : 'mx-auto grid grid-cols-1'
        }
      >
        <button onClick={() => setShowAbout(!showAbout)}>
          <img className='mx-auto' src={setaRosa} alt='' />
        </button>
      </div>
    </>
  );
}
