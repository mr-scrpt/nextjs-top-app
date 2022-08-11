import { KitBoxProps } from './KitBox.props';
import cn from 'classnames';
import styles from './KitBox.module.css';
import React from 'react';
export const KitBox = ({ children, name, className }: KitBoxProps): JSX.Element => {
  const kitBoxClass = cn(styles.kitBox, {}, className);
  return (
    <div className={ kitBoxClass }>
      <div className={ styles.kitBox__inner }>
        <div className={ styles.kitBox__title }>** {name}</div>
        <div className={ styles.kitBox__body }>
          {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { className:  styles.kitBox__row });
                }
                return child ;
            })}
        </div>
      </div>
    </div>
  );
};