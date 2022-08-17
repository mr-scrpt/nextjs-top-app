import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MenuItemFooterProps 
  extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement>
  {
    link: string;
    title: string;
    classNameText?: string
  }
