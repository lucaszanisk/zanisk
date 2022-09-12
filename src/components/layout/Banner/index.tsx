import logoIn from 'public/svg/logo-in.svg';
import logoInsta from 'public/svg/logo-insta.svg';
import logoGit from 'public/svg/logo-github.svg';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <h1
        data-aos='fade-right'
        data-aos-delay='100'
        data-aos-duration='1000'
        className='mt-16 px-4 text-center text-4xl lg:ml-60 lg:px-0 lg:text-left'
      >
        Olá, meu nome é Lucas
      </h1>
      <h2
        data-aos='fade-right'
        data-aos-delay='200'
        data-aos-duration='1000'
        className=' mt-16 px-4 text-center font-Libre text-2xl font-normal lg:ml-60 lg:mt-4 lg:px-0 lg:text-left'
      >
        Sou desenvolvedor frontend junior residente em São Paulo, Brasil.
      </h2>
      <div className='mt-12 flex justify-center lg:ml-60 lg:justify-start'>
        <a
          data-aos='fade-left'
          data-aos-delay='100'
          data-aos-duration='1000'
          rel='noreferrer'
          target='_blank'
          href='https://www.linkedin.com/in/lucaszanisk/'
        >
          <img className='animate-pulse' src={logoIn} alt='logo linkedin' />
        </a>
        <a
          data-aos='fade-left'
          data-aos-delay='500'
          data-aos-duration='1000'
          rel='noreferrer'
          target='_blank'
          className='mx-16'
          href='https://www.github.com/lucaszanisk'
        >
          <img className='animate-pulse' src={logoGit} alt='logo github' />
        </a>
        <a
          data-aos='fade-left'
          data-aos-delay='900'
          data-aos-duration='1000'
          rel='noreferrer'
          target='_blank'
          href='https://www.instagram.com/lucasznsk'
        >
          <img className='animate-pulse' src={logoInsta} alt='logo instagram' />
        </a>
      </div>
    </>
  );
}
