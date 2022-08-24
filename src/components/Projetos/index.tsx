import CardProjects from '@/components/CardProjects';
import bandeiraAreia from 'public/svg/bandeira-2.svg';

export default function Projetos() {
  return (
    <>
      <div id='projetos' className='bg-zanisk-green'>
        <img src={bandeiraAreia} alt='' />
        <h1 className='ml-48 grid grid-rows-4 text-5xl text-zanisk-sand'>
          <span>PR</span>
          <span>OJ</span>
          <span>ET</span>
          <span>OS</span>
        </h1>
        <div className='mt-10 grid grid-cols-3 gap-0'>
          <CardProjects
            title='Bot-Reminder'
            subtitle='A telegram´s bot to resolve some home issues.'
            img='d'
            text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nostrum repellat sed molestiae ex. Laudantium accusantium necessitatibus ex. Deserunt dolore, vel debitis reprehenderit necessitatibus sit non illum molestias esse animi?'
            repo='d'
          />
        </div>
      </div>
    </>
  );
}
