export default function CardXP({ name, data, texto, left }: any) {
  if (left) {
    return (
      <div className='ml-48 mt-4 tracking-widest'>
        <p className=' text-base font-bold'>{name}</p>
        <p className=' mt-2 text-xs font-bold '> {data}</p>
        <div className=' mt-2 border-l-4 border-solid border-black text-justify'>
          {texto.map((item: any) => (
            <>
              <p className='w-1/2 pl-4 text-sm '>{item}</p>
              <br />
            </>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className='mr-48 mt-4 grid justify-items-end tracking-widest'>
      <p className=' text-base font-bold'>{name}</p>
      <p className=' mt-2 text-xs font-bold '> {data}</p>
      <div className='mt-2 grid justify-items-end border-r-4 border-solid border-black text-justify'>
        {texto.map((item: any) => (
          <>
            <p className='w-1/2 pr-4 text-sm'>{item}</p>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}
