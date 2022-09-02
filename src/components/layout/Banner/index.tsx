import logoIn from 'public/svg/logo-in.svg';
import logoInsta from 'public/svg/logo-insta.svg';
import logoGit from 'public/svg/logo-github.svg';

export default function Banner() {
  return (
    <>
      <h1 className='mt-16 text-center text-4xl lg:ml-60 lg:text-left'>
        Olá, meu nome é Lucas
      </h1>
      <h2 className='mt-16 text-center font-Libre text-2xl font-normal lg:ml-60 lg:mt-4 lg:text-left'>
        Sou desenvolvedor frontend junior residente em São Paulo, Brasil.
      </h2>
      <div className='mt-12 flex justify-center lg:ml-60 lg:justify-start'>
        <a target='_blank' href='https://www.linkedin.com/in/lucaszanisk/'>
          <img
            className='hover:animate-bounce'
            src={logoIn}
            alt='logo linkedin'
          />
        </a>
        <a
          target='_blank'
          className='mx-16'
          href='https://www.github.com/lucaszanisk'
        >
          <img
            className='hover:animate-bounce'
            src={logoGit}
            alt='logo github'
          />
        </a>
        <a target='_blank' href='https://www.instagram.com/lucasznsk'>
          <img
            className='hover:animate-bounce'
            src={logoInsta}
            alt='logo instagram'
          />
        </a>
      </div>
    </>
  );
}
