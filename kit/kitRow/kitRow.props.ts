import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface KitRowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  name: string
}