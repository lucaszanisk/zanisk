import Menu from '@/components/layout/Menu';
import logo from 'public/svg/logopb.svg';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=' grid grid-cols-2 px-8 pt-5'>
        <img src={logo} alt='logo-zanisk' />
        <button
          onClick={() => setIsOpen((prevState) => !prevState)}
          className='col-end-7 flex h-8 w-8 items-center justify-center border-2 border-black'
        >
          <div className='h-2 w-2 bg-black'></div>
        </button>
      </div>
      {isOpen && <Menu />}
    </>
  );
}
