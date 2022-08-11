import { KitRowProps } from './KitRow.props';
import cn from 'classnames';
import styles from './kitRow.module.css';
export const KitRow = ({ children, name, className }: KitRowProps):JSX.Element =>{
  const kitRowClass = cn(styles.kitRow, {}, className);
  return(
    <div className={ kitRowClass }>
      <div className={ styles.kitRow__inner }>
        <div className={ styles.kitRow__item }>{children}</div>
        <div className={ styles.kitRow__title }>{name}</div>
      </div>
    </div>
  );
};