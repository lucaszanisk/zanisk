import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface InputTypes {
  name: string;
  ref: any;
  placeholder: string;
  type: string;
  className: string;
}

const Input = ({ name, placeholder, type, ...rest }: InputTypes) => {
  const inputRef = useRef();
  const { fieldName, defaultValue, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);
  return (
    <input
      name={name}
      ref={inputRef}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};
export default Input;
