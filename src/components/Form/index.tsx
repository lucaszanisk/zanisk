import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import LoadingComponent from '@/components/Loading';

import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const form: any = useRef();
  const notify = (text: string, notifyFunction: any) =>
    notifyFunction(text, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      form.current[0].value === '' ||
      form.current[1].value === '' ||
      form.current[2].value === '' ||
      form.current[3].value === ''
    ) {
      notify('Campos vazios', toast.error);
    } else {
      form.current.reset();
      setIsLoading(true);
      emailjs
        .sendForm(
          'service_g5nbejg',
          'template_i2kd63q',
          form.current,
          '0SDdCrP2a-y1a9AEk'
        )
        .then(
          (result) => {
            setIsLoading(false);
            notify('Mensagem enviada', toast.success);
            console.log(result.text);
          },
          (error) => {
            setIsLoading(false);
            notify(
              'Não foi possível enviar sua mensagem, tente novamente mais tarde.',
              toast.error
            );
            console.log(error.text);
          }
        );
    }
  };
  return (
    <>
      <h1 className='mt-20 mb-16 animate-bounce px-8 text-center'>
        Vamos bater um papo?
      </h1>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <form
          id='form'
          className='flex flex-col px-14 lg:px-96'
          ref={form}
          onSubmit={handleSubmit}
        >
          <input
            placeholder='Qual seu nome?'
            className='mb-2 border-x-0 border-t-0 placeholder:text-sm'
            type='text'
            name='from_name'
          />

          <input
            placeholder='Sobre que vamos conversar?'
            className='mb-2 border-x-0 border-t-0 placeholder:text-sm'
            type='text'
            name='subject'
          />

          <input
            placeholder='Digite seu email'
            className='mb-2 border-x-0 border-t-0 placeholder:text-sm '
            type='email'
            name='reply_to'
          />

          <textarea
            className=' mt-8 mb-2 resize-none placeholder:text-sm  '
            placeholder='Digite aqui sua mensagem'
            name='message'
          />
          <input
            className='mx-auto mt-4 animate-pulse cursor-pointer rounded-lg border border-black p-2 hover:bg-slate-100 '
            type='submit'
            value='Enviar'
          />
        </form>
      )}

      <ToastContainer />
    </>
  );
}
