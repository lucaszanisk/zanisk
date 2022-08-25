import AOS from 'aos';
import bandeiraAreia from 'public/svg/bandeira-2.svg';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

import CardProjects from '@/components/CardProjects';

export default function Projetos() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div id='projetos' className='bg-zanisk-green'>
        <img src={bandeiraAreia} alt='' />
        <h1 className='ml-48 grid grid-rows-4 text-5xl text-zanisk-sand'>
          <span
            data-aos='fade-down'
            data-aos-delay='100'
            data-aos-duration='1000'
          >
            PR
          </span>
          <span
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'
          >
            OJ
          </span>
          <span
            data-aos='fade-right'
            data-aos-delay='300'
            data-aos-duration='1000'
          >
            ET
          </span>
          <span
            data-aos='fade-up'
            data-aos-delay='400'
            data-aos-duration='1000'
          >
            OS
          </span>
        </h1>
        <div
          data-aos='fade-down'
          data-aos-delay='100'
          data-aos-duration='1000'
          className='mt-20 ml-52 grid grid-cols-6 grid-rows-1 gap-8'
        >
          <CardProjects
            title='Bot-Reminder'
            subtitle='A telegram´s bot to resolve some home issues.'
            img='d'
            text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nostrum repellat sed molestiae ex. '
            repo='d'
          />
          <CardProjects
            title='Bot-Reminder'
            subtitle='A telegram´s bot to resolve some home issues.'
            img='d'
            text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nostrum repellat sed molestiae ex. '
            repo='d'
          />
          <CardProjects
            title='Bot-Reminder'
            subtitle='A telegram´s bot to resolve some home issues.'
            img='d'
            text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nostrum repellat sed molestiae ex. '
            repo='d'
          />
          <CardProjects
            title='Bot-Reminder'
            subtitle='A telegram´s bot to resolve some home issues.'
            img='d'
            text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nostrum repellat sed molestiae ex. '
            repo='d'
          />
          <CardProjects
            title='Bot-Reminder'
            subtitle='A telegram´s bot to resolve some home issues.'
            img='d'
            text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nostrum repellat sed molestiae ex. '
            repo='d'
          />
        </div>
      </div>
    </>
  );
}
