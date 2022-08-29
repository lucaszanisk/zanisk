export default function Menu() {
  const listMenu = ['home', 'sobre', 'xp', 'projetos', 'contato'];
  return (
    <>
      <ul className='h-screen text-center'>
        {listMenu.map((item, key) => (
          <a key={key} href={item}>
            <li className='my-12 text-4xl font-bold'>{item}</li>
          </a>
        ))}
      </ul>
    </>
  );
}
