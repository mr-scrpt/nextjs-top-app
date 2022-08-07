import { ReactNode } from 'react';

export interface ButtonProps {
  tag: 'link' | 'button',
  href?: string, 
  view: 'primary' | 'secondary',
  size: 's' | 'm' | 'l' | 'xl',
  mod: 'standat' | 'width_available',
  children: ReactNode
}