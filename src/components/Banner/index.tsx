import AOS from 'aos';
import foto from 'public/images/foto-lucas.svg';
import logoGithub from 'public/svg/logo-github.svg';
import logoLinkedin from 'public/svg/logo-linkedin.svg';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

import About from '@/components/About';

export default function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className='mx-auto grid w-4/5 grid-cols-2 items-center bg-zanisk-blue'>
        <div className='grid h-64 grid-rows-3'>
          <h1
            data-aos='fade-right'
            data-aos-delay='100'
            data-aos-duration='1000'
            className=' text-[4rem] font-bold tracking-[.2em] text-zanisk-sand'
          >
            LUCAS ZANISK
          </h1>

          <h2
            data-aos='fade-right'
            data-aos-delay='50'
            data-aos-duration='1000'
            className='text-5xl font-normal  tracking-[.2em] text-zanisk-sand  opacity-75'
          >
            DESENVOLVEDOR FRONTEND
          </h2>

          <div className='mt-10 grid w-48 grid-cols-2 gap-0'>
            <a
              data-aos='fade-right'
              data-aos-delay='50'
              data-aos-duration='1000'
              className='w-12'
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/lucaszanisk/'
            >
              <img src={logoLinkedin} alt='logo linkedin' />
            </a>

            <a
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1000'
              className='w-14'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/lucaszanisk'
            >
              <img src={logoGithub} alt='logo github' />
            </a>
          </div>
        </div>

        <img
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'
          src={foto}
          alt='foto lucas'
        />
      </div>

      <div data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
        <About />
      </div>
    </>
  );
}
