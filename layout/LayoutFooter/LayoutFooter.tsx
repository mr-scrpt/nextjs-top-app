import cn from 'classnames';
import { MenuFooter } from '../../components/MenuFooter';
import styles from './LayoutFooter.module.css';
import { LayoutFooterProps } from './LayoutFooter.props';
import { format } from 'date-fns';
export const LayoutFooter = ( { className }: LayoutFooterProps ) : JSX.Element => {
  const footerClass = cn(styles.footer, {}, className);

  const year = format(new Date(), 'yyyy');
  return (
    <footer className={ footerClass }>
      <div className={ styles.footer__inner }>
        <div className={ styles.footer__copyright }>OwlTop © 2020 - {year} Все права защищены</div>
        
        <MenuFooter
          className={ styles.footer__menu }
          list={ 
            [ 
              { link: 'terms', title: 'Пользовательское соглашение' },
              { link: 'private-policy', title: 'Политика конфиденциальности' }
              
            ] }
          />
        
      </div>
    </footer>
  );
};