import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

// import { FieldError } from 'react-hook-form'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IInputProps {
  placeholder: string;
  error?: /* FieldError */ any | undefined;
}

type InputPropsType = InputHTMLAttributes<HTMLInputElement> & IInputProps;

export interface IInput extends InputPropsType {}
