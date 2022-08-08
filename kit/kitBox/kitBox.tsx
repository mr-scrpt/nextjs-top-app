import { KitBoxProps } from './kitBox.props';
import cx from 'classnames';
import styles from './kitBox.module.css';
export const KitBox = ({ children, name, className }: KitBoxProps): JSX.Element => {
  const kitBoxClass = cx(styles.kitBox, {}, className);
  return (
      <div className={ kitBoxClass }>
          <div className="">{name}</div>
          <div className="">{children}</div>
      </div>
  );
};