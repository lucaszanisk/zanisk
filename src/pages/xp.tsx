import Card from '@/components/Card';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { useState } from 'react';
import elipseB from 'public/svg/elipse-b.svg';
import elipseW from 'public/svg/elipse-w.svg';

export default function Xp() {
  const [showCard, setShowCard] = useState(0);

  const cards = [
    {
      name: 'Quasar Flash',
      texto:
        'Responsável pela criação, implementação e manutenção de features em páginas e sistemas da Quasar Flash utilizando Next.js, Typescript, Tailwind e integração com restAPIs utilizando Axios. Desenvolvo Landing Pages para parceiros da empresa utilizando Next.js e Styled Components. Participei do desenvolvimento e hoje faço a manutenção do website da empresa utilizando Next.js e Sass.',
      data: 'Setembro 2021 - Atualmente',
    },
    {
      name: 'Icell',
      texto:
        'Fui responsável pelo desenvolvimento e manutenção do CRM da empresa utilizando Next.js, formulários Unform, validações Yup, Styled Components e MaterialUI; Desenvolvi uma Landing page que tinha como o objetivo cadastrar novos clientes na base de dados da empresa; Utilizei Next.js, unform, Styled Components e MaterialUI',
      data: 'Agosto 2020 - Fevereiro 2021',
    },
  ];
  return (
    <Layout>
      <Card
        className='transition-transform duration-150 ease-out'
        name={cards[showCard].name}
        texto={cards[showCard].texto}
        data={cards[showCard].data}
      />
      <div className='my-8 mx-auto flex w-1/6 justify-between'>
        {cards.map((item) =>
          cards.indexOf(item) === showCard ? (
            <button
              key={cards.indexOf(item)}
              onClick={() => setShowCard(cards.indexOf(item))}
            >
              <span>
                <Image src={elipseB} alt='black-dot' width={11} height={11} />
              </span>
            </button>
          ) : (
            <button
              key={cards.indexOf(item)}
              onClick={() => setShowCard(cards.indexOf(item))}
            >
              <span>
                <Image src={elipseW} alt='white-dot' width={11} height={11} />
              </span>
            </button>
          )
        )}
      </div>
    </Layout>
  );
}
