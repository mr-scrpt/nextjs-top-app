import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface KitBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children: ReactNode,
  name: string
}