import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  
  view: 'primary' | 'transparent',
  size: 's' | 'm' | 'l' | 'xl',
  mode?: 'standat' | 'width_available',
  includeIcon?: ReactNode | null,
  iconPosition?: 'left' | 'right',
  iconRotate?: '90' | '180' | '270'
  
}