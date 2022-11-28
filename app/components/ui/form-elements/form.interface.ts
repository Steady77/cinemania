import {
	ButtonHTMLAttributes,
	CSSProperties,
	InputHTMLAttributes,
} from 'react';
import { FieldError } from 'react-hook-form';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IInputProps {
	placeholder: string;
	error?: FieldError | undefined;
}

type InputPropsType = InputHTMLAttributes<HTMLInputElement> & IInputProps;

export interface IInput extends InputPropsType {}

export interface IUploadFile {
	image?: string;
	onChange: (...event: any[]) => void;
	placeholder: string;
	error?: FieldError;
	style?: CSSProperties;
}
