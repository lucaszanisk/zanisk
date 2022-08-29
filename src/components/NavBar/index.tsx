import AOS from 'aos';
import logo from 'public/svg/logo-zanisk.svg';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

export default function NavBar() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <nav className='mx-auto grid w-4/5 grid-cols-2 pt-9 '>
        <img
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'
          src={logo}
          alt='logo'
        />

        <div className='mt-5'>
          <ul className='grid grid-cols-4 gap-16 text-base text-zanisk-sand'>
            <a
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1000'
              href='#xp'
            >
              <li>XP</li>
            </a>
            <a
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1000'
              href=''
            >
              <li className='grid h-14 grid-rows-3'>
                <span>SO</span>
                <span>BR</span>
                <span>E</span>
              </li>
            </a>
            <a
              data-aos='fade-left'
              data-aos-delay='300'
              data-aos-duration='1000'
              href='#projetos'
            >
              <li className='grid h-20 grid-rows-4 '>
                <span>PR</span>
                <span>OJ</span>
                <span>ET</span>
                <span>OS</span>
              </li>
            </a>
            <a
              data-aos='fade-left'
              data-aos-delay='400'
              data-aos-duration='1000'
              href=''
            >
              <li className='grid h-20 grid-rows-4 '>
                <span>CO</span>
                <span>NT</span>
                <span>AT</span>
                <span>O</span>
              </li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
