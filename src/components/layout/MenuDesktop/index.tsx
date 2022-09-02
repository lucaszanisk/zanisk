import Link from 'next/link';

export default function MenuDesktop() {
  const listMenu = ['sobre', 'xp', 'contato'];
  return (
    <>
      <ul className='hidden md:grid md:grid-cols-4 md:grid-rows-1'>
        <Link href='/'>
          <a>
            <li className=' text-lg font-bold'>home</li>
          </a>
        </Link>
        {listMenu.map((item, key) => (
          <Link key={key} href={item}>
            <a>
              <li className='text-lg font-bold'>{item}</li>
            </a>
          </Link>
        ))}
      </ul>
    </>
  );
}
