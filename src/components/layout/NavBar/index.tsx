import Menu from '@/components/layout/Menu';
import MenuDesktop from '@/components/layout/MenuDesktop';
import logo from 'public/svg/logopb.svg';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='grid grid-cols-2 px-8 pt-5 lg:px-60'>
        <img src={logo} alt='logo-zanisk' />
        <MenuDesktop />
        <button
          onClick={() => setIsOpen((prevState) => !prevState)}
          className='col-end-7 flex h-8 w-8 items-center justify-center border-2 border-black md:hidden'
        >
          <div className='h-2 w-2 bg-black'></div>
        </button>
      </div>
      {isOpen && <Menu />}
    </>
  );
}
