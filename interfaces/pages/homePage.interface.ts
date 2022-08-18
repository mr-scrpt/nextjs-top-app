import { MenuItemSectionInterface } from '../api/menu.interface';

export interface HomePageInterface extends Record<string, unknown>{
  categoryFirst: number;
  menu: MenuItemSectionInterface[]

}