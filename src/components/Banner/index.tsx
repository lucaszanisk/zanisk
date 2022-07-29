import foto from 'public/images/foto-lucas.svg';
import logoLinkedin from 'public/svg/logo-linkedin.svg';
import logoGithub from 'public/svg/logo-github.svg';
import setaRosa from 'public/svg/seta-rosa.svg';

export default function Banner() {
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
            <a className='w-12' href='https://www.linkedin.com/in/lucaszanisk/'>
              <img src={logoLinkedin} alt='logo linkedin' />
            </a>

            <a className='w-14' href='https://github.com/lucaszanisk'>
              <img src={logoGithub} alt='logo git hub' />
            </a>
          </div>
        </div>

        <img src={foto} alt='foto lucas' />
      </div>
      <a href=''>
        <img className='mx-auto' src={setaRosa} alt='' />
      </a>
    </>
  );
}
