import { ButtonProps } from './Button.props';
import cx from 'classnames';
import styles from './Button.module.css';

export const Button = ({ 
    view,
    size,
    children,
    includeIcon=null,
    className,
    iconPosition, 
    mode='standat', 
    iconRotate, 
    ...props
 }: ButtonProps): JSX.Element => {

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
    [ styles.button_icon_rotate_90 ]: iconRotate == '90',
    [ styles.button_icon_rotate_180 ]: iconRotate == '180',
    [ styles.button_icon_rotate_270 ]: iconRotate == '270',
  });
  const iconClass = cx(styles.icon);

  const button = (
    <button
      className={ buttonClass }
      { ...props }
    >
      {includeIcon &&
        <span 
          className={ iconClass }
        >
          {includeIcon}
        </span>
      }
      {children && 
        <span className={ styles.button__text }>{children}</span>
      }
          
    </button>
);
  return button;
};