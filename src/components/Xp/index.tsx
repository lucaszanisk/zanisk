import AOS from 'aos';
import bandeiraAzul from 'public/svg/bandeira-1.svg';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

import CardXP from '@/components/CardXP';

export default function Xp() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div id='xp' className='bg-zanisk-sand'>
        <img src={bandeiraAzul} alt='' />
        <h1
          data-aos='fade-down'
          data-aos-delay='100'
          data-aos-duration='1000'
          className='ml-48 text-5xl'
        >
          XP
        </h1>
        <div
          data-aos='fade-right'
          data-aos-delay='100'
          data-aos-duration='1000'
        >
          <CardXP
            left={true}
            name='QUASAR FLASH'
            data='SETEMBRO 2021 - ATUALMENTE'
            texto={[
              'RESPONSÁVEL PELA CRIAÇÃO, IMPLEMENTAÇÃO E MANUTENÇÃO DE NOVAS FEATURES EM PÁGINAS E SISTEMAS DA QUASAR FLASH UTILIZANDO NEXT.JS, TYPESCRIPT, TAILWINDCSS E INTEGRAÇÃO COM RESTAPI UTILIZANDO AXIOS.',
              'DESENVOLVO LANDING PAGES PARA PARCEIROS DA EMPRESA UTILIZANDO NEXTJS E STYLED COMPONENTS',
              'PARTICIPEI DO DESENVOLVIMENTO E HOJE FAÇO A MANUTENÇÃO DO WEBSITE DA EMPRESA UTILIZANDO NEXTJS E SASS',
            ]}
          />
        </div>
        <div data-aos='fade-left' data-aos-delay='100' data-aos-duration='1000'>
          <CardXP
            left={false}
            name='ICELL'
            data='AGOSTO 2020 - FEVEREIRO 2021'
            texto={[
              'FUI RESPONSÁVEL PELO DESENVOLVIMENTO E MANUTENÇÃO DO CRM DA EMPRESA UTILIZANDO NEXTJS, FORMULÁRIOS E VALIDAÇÕES YUP, STYLED COMPONENTS E MATERIAL UI;',
              'DESENVOLVI UMA LANDING PAGE QUE TINHA COMO OBJETIVO CADASTRAR NOVOS CLIENTES NA BASE DE DADOS DA EMPRESA; UTILIZEI NEXTJS, UNFORM, STYLED COMPONENTS E MATERIAL UI.',
            ]}
          />
        </div>
      </div>
    </>
  );
}
