import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  
  view: 'primary' | 'transparent',
  size: 's' | 'm' | 'l' | 'xl',
  mode?: 'standat' | 'width_available',
  arrow?: 'to_right' | 'to_bottom' | 'none',
  iconPosition?: 'left' | 'right'
  
}