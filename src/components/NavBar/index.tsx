import logo from 'public/svg/logo-zanisk.svg';
export default function NavBar() {
  return (
    <>
      <div className='mx-auto grid w-4/5 grid-cols-2 '>
        <img className='' src={logo} alt='logo' />

        <div className='mt-5'>
          <ul className='grid grid-cols-4 gap-16 text-base text-zanisk-sand'>
            <li>XP</li>
            <li className='grid h-14 grid-rows-3 '>
              <span>SO</span>
              <span>BR</span>
              <span>E</span>
            </li>

            <li className='grid h-20 grid-rows-4 '>
              <span>PR</span>
              <span>OJ</span>
              <span>ET</span>
              <span>OS</span>
            </li>
            <li className='grid h-20 grid-rows-4 '>
              <span>CO</span>
              <span>NT</span>
              <span>AT</span>
              <span>O</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
