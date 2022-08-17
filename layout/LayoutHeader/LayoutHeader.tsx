import cn from 'classnames';
import styles from './LayoutHeader.module.css';
import { LayoutHeaderProps } from './LayoutHeader.props';
export const LayoutHeader = ( { className }: LayoutHeaderProps ) : JSX.Element => {
  const headerClass = cn(styles.header, {}, className);
  return (
    <header className={ headerClass }>
      <div className={ styles.header__inner }>
        Header
      </div>
    </header>
  );
};