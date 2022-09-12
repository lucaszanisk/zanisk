interface CardType {
  className: string;
  name: string;
  texto: string;
  data: string;
}

export default function Card({ className, name, texto, data }: CardType) {
  return (
    <div className={`mt-20 text-center lg:px-96 ${className}`}>
      <h1 className='mb-4 text-4xl font-bold'>{name}</h1>
      <p className='mb-11 px-14 text-justify font-Libre text-base lg:px-40'>
        {texto}
      </p>
      <p className='text-xl font-bold'>{data}</p>
    </div>
  );
}
