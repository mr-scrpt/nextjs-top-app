import cn from 'classnames';

import { MenuItemFooterProps } from './MenuItemFooter.props';
export const MenuItemFooter = ( { className, classNameText ,link, title }: MenuItemFooterProps ) : JSX.Element => {
  const linkClass = cn(className, {});
  return (
    <a 
      href={ link }
      className={ linkClass }
    >
      <span className={ classNameText }>
        {title}
      </span>
    </a>
  );
};