import Link from 'next/link';
export default function Menu() {
  const listMenu = ['sobre', 'xp', 'contato'];
  return (
    <>
      <ul className='h-screen text-center'>
        <Link href='/'>
          <a>
            <li className='my-12 text-4xl font-bold'>home</li>
          </a>
        </Link>
        {listMenu.map((item, key) => (
          <Link key={key} href={item}>
            <a>
              <li className='my-12 text-4xl font-bold'>{item}</li>
            </a>
          </Link>
        ))}
      </ul>
    </>
  );
}
