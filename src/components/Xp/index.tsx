import bandeiraAzul from 'public/svg/bandeira-1.svg';
import CardXP from '@/components/CardXP';

export default function Xp() {
  return (
    <>
      <div id='xp' className='bg-zanisk-sand'>
        <img src={bandeiraAzul} alt='' />
        <h1 className='ml-48 text-5xl'>XP</h1>

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
    </>
  );
}
