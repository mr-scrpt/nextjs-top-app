import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps 
  extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement>
  {
    size?: 's' | 'm' | 'l' | 'xl',
    view?: 'primary' | 'secondary' | 'transparent' | 'success' | 'attention' | 'error'
  }