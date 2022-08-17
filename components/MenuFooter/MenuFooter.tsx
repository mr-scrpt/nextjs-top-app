import cn from 'classnames';
import { MenuItemFooter } from '../MenuItemFooter';
import { MenuItemFooterProps } from '../MenuItemFooter/MenuItemFooter.props';
import styles from './MenuFooter.module.css';
import {  MenuFooterProps } from './MenuFooter.props';
export const MenuFooter = ( { list, className, ...props }: MenuFooterProps ) : JSX.Element => {

  const menuClass = cn(styles[ 'menu-footer' ], {}, className);

  const menuElement = (listmenu: MenuItemFooterProps[]) : JSX.Element => {
    return (
      <div className={ menuClass }>

        <nav className={ styles[ 'menu-footer__inner' ] }>
          {listmenu.map(item =>(
            <MenuItemFooter
              key={ item.link }
              title={ item.title }
              link={ item.link }
              className={ styles[ 'menu-footer__item' ] }
              classNameText={ styles[ 'menu-footer__text' ] }
          />
        )
        )}
        </nav>
      </div>
    );
  }; 
 
  return menuElement(list);
  
};
