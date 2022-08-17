import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MenuItemFooterProps } from '../MenuItemFooter';

export interface MenuFooterProps 
  extends DetailedHTMLProps<
  HTMLAttributes<HTMLBaseElement>,
  HTMLBaseElement>
  {
    list: Array<MenuItemFooterProps>
  }
