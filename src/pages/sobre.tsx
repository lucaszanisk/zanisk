import Layout from '@/components/layout/Layout';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
export default function Sobre() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <p
        data-aos='fade-right'
        data-aos-delay='100'
        data-aos-duration='1000'
        className='mt-20 px-14 text-justify font-Libre text-base font-normal lg:px-60 lg:text-lg'
      >
        Meu nome é Lucas, tenho 26 anos e comecei meus estudos na área de
        desenvolvimento em 2018, até então por curiosidade enquanto cursava
        arquitetura e urbanismo em Manaus-AM e pensava em futuramente conciliar
        as duas áreas em algum projeto voltado ao curso. Porém, em certo
        momento, me vi totalmente imerso no mundo da programação, desenvolvendo
        em projetos com amigos, desde construções de restAPIs em Python à
        aplicações web em React. Em 2020, percebi que meu real desejo era
        desenvolver softwares e tornei como objetivo principal construir minha
        carreira na área. Sendo assim, migrei de curso para Análise e
        Desenvolvimento de Sistemas e busquei me aperfeiçoar em desenvolvimento
        frontend, stack na qual eu mais me identificava. Hoje, em 2022, trabalho
        como desenvolvedor frontend em uma fintech na cidade de São Paulo onde
        também resido há 1 ano, conquistas advindas desse universo que é a
        programação.
      </p>
    </Layout>
  );
}
