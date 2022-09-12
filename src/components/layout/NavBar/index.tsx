import Menu from '@/components/layout/Menu';
import MenuDesktop from '@/components/layout/MenuDesktop';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/svg/logopb.svg';
import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='grid grid-cols-2 px-8 pt-5 lg:px-60'>
        <Link href='/'>
          <div>
            <Image
              className='hover:cursor-pointer'
              src={logo}
              width={48}
              height={48}
            />
          </div>
        </Link>

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
