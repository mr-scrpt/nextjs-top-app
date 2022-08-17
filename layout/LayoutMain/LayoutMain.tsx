import cn from 'classnames';
import { LayoutFooter } from '../LayoutFooter';
import { LayoutHeader } from '../LayoutHeader';
import { LayoutSidebar } from '../LayoutSidebar';
import styles from './LayoutMain.module.css';
import { LayoutMainProps } from './LayoutMain.props';
export const LayoutMain = ( { className, children }: LayoutMainProps ) : JSX.Element => {
  
  const mainClass = cn(styles.layout, {}, className);
  return (
    <div className={ mainClass }>
      <LayoutHeader className={ styles.layout__header }/>
      <LayoutSidebar className={ styles.layout__sidebar }/>
      <main className={ styles.layout__content }>
        {children}
      </main>
      <LayoutFooter className={ styles.layout__footer }/>
    </div>
    
  );
};