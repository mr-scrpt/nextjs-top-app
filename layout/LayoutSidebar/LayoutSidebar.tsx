import cn from 'classnames';
import styles from './LayoutSidebar.module.css';
import { LayoutSidebarProps } from './LayoutSidebar.props';
export const LayoutSidebar = ( { className }: LayoutSidebarProps ) : JSX.Element => {
  const sidebarClass = cn(styles.sidebar, {}, className);
  return (
    <aside className={ sidebarClass }>
      <div className={ styles.sidebar__inner }>
        SideBar
      </div>
    </aside>
  );
};