import bandeiraVerde from 'public/svg/bandeira-3.svg';

import { useRef } from 'react';

import emailjs from '@emailjs/browser';
export default function Contato() {
  const form = useRef('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_g5nbejg',
        'template_i2kd63q',
        form.current,
        '0SDdCrP2a-y1a9AEk'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <img src={bandeiraVerde} alt='' />
      <div className='grid grid-cols-3 items-center'>
        <h1 className='ml-48 grid grid-rows-4 text-5xl text-zanisk-sand'>
          <span>CO</span>
          <span>NT</span>
          <span>AT</span>
          <span>O</span>
        </h1>
        <h2 className=' text-center text-4xl font-normal text-zanisk-sand opacity-70'>
          Vamos bater um papo? <br /> Deixa uma msg pra mim <br /> :D
        </h2>
      </div>
      <form
        className=' mx-auto  grid w-1/2 grid-cols-1 font-bold'
        ref={form}
        onSubmit={handleSubmit}
      >
        <input
          placeholder='Digite seu nome'
          className='mx-auto mb-4 w-1/2 rounded-full bg-zanisk-sand focus:opacity-90'
          type='text'
          name='from_name'
        />

        <input
          placeholder='Sobre que assunto deseja conversar?'
          className=' mx-auto mb-4 w-1/2 rounded-full bg-zanisk-sand focus:opacity-90'
          type='text'
          name='subject'
        />

        <input
          placeholder='Digite seu email'
          className=' mx-auto mb-4 w-1/2 rounded-full bg-zanisk-sand focus:opacity-90'
          type='email'
          name='reply_to'
        />

        <textarea
          placeholder='Digite sua mensagem aqui'
          className='mb-4 rounded-full bg-zanisk-sand pl-9 focus:opacity-90'
          name='message'
        />
        <input
          className='my-4 mx-auto w-1/5  rounded-full bg-zanisk-sand hover:cursor-pointer hover:opacity-70 '
          type='submit'
          value='Enviar'
        />
      </form>
    </>
  );
}
