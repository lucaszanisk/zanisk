import bandeiraVerde from 'public/svg/bandeira-3.svg';
import { Form } from '@unform/web';
import Input from '@/components/Input';
import { useCallback, useRef } from 'react';
import { sendEmail } from '@/services/contactMe';
import { Scope } from '@unform/core';

export default function Contato() {
  const formRef = useRef({});

  const handleSubmit = useCallback(async (data: object) => {
    try {
      await sendEmail(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

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

      <Form
        className='mx-auto mt-9 grid w-1/2 grid-rows-2'
        onSubmit={(data) => {
          handleSubmit(data);
        }}
      >
        <Scope path='template_params'>
          <Input
            className='mb-9 w-1/2 bg-zanisk-sand'
            name='email'
            ref={formRef}
            placeholder='Digite seu email'
            type='email'
          />
          <Input
            className='mb-9 w-1/4 bg-zanisk-sand'
            name='assunto'
            ref={formRef}
            placeholder='Sobre o que vamos conversar?'
            type='text'
          />

          <Input
            className='h-full bg-zanisk-sand'
            name='mensagem'
            ref={formRef}
            placeholder='Digite sua mensagem'
            type='text'
          />
        </Scope>
        <button
          className=' mx-auto my-20 h-10 w-1/5 rounded-full bg-zanisk-sand font-bold text-zanisk-green hover:opacity-50'
          type='submit'
        >
          Enviar
        </button>
      </Form>
      <div className='h-28 bg-zanisk-sand'></div>
    </>
  );
}
