import { ButtonProps } from './Button.props';
import cx from 'classnames';
import styles from './Button.module.css';

export const Button = ({tag, href, view, size, children}: ButtonProps): JSX.Element => {

  const buttonClass = cx(styles.button, {
    [styles.button_view_primary]: view === 'primary',
    [styles.button_view_secondary]: view === 'secondary',

    [styles.button_size_s]: size === 's',
    [styles.button_size_m]: size === 'm',
    [styles.button_size_l]: size === 'l',
    [styles.button_size_xl]: size === 'xl',
  });

  let button: JSX.Element;

  switch (tag){
    case 'button':
      button = (
        <button className={buttonClass}>
          <span className={styles.button__text}>{children}</span>
        </button>
      );
      break;

    case 'link':
      button = (
        <a href={href} className={buttonClass}>
          <span className={styles.button__text}>{children}</span>
        </a>
      );
      break;

    default:
      button = (
        <button>
          <span>Передан не правильный тег</span>
        </button>
      );
  }
  return button;
};