import Link from 'next/link';
export default function Menu() {
  const listMenu = ['home', 'sobre', 'xp', 'contato'];
  return (
    <>
      <ul className='h-screen text-center'>
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
