import { ButtonProps } from './Button.props';
import cx from 'classnames';
import styles from './Button.module.css';
import IconArrow from './icon_arrow.svg';
export const Button = ({ view, size, children, arrow='none', className, iconPosition, mode='standat', ...props }: ButtonProps): JSX.Element => {

  const buttonClass = cx(styles.button, className, {
    [ styles.button_view_primary ]: view === 'primary',
    [ styles.button_view_transparent ]: view === 'transparent',

    [ styles.button_width_available ]: mode === 'width_available',

    [ styles.button_size_s ]: size === 's',
    [ styles.button_size_m ]: size === 'm',
    [ styles.button_size_l ]: size === 'l',
    [ styles.button_size_xl ]: size === 'xl',

    [ styles.button_icon_position_right ]: iconPosition === 'right',
    [ styles.button_icon_position_left ]: iconPosition === 'left',
  });
  const iconClass = cx(styles.icon);

  const button = (
      <button className={ buttonClass }
        { ...props }>
          {arrow != 'none' &&
          <span 
            className={ iconClass }
            >
              <IconArrow></IconArrow>
          </span>
          }
          <span className={ styles.button__text }>{children}</span>
          
      </button>
);
  return button;
};