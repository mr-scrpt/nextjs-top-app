import { SectionProps } from './KitSection.props';
import cx from 'classnames';
import styles from './KitSection.module.css';
import React from 'react';
export const KitSection = ({ children, className, name, ...props }: SectionProps):JSX.Element=>{
  const sectionClass = cx(
    styles.section,
    {},
    className
 );
 
  return(
    <section
      className={ sectionClass }
      { ...props }
      >
      <div className={ styles.section__inner }>
        <div className={ styles.section__title }>
          <span className={ styles[ 'section__title-text' ] }># {name}</span>
        </div>

        <div className={ styles.section__body }>
          {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { className:  styles.section__row });
                }
                return child ;
            })}
        </div>
      </div>
          
    </section>
  );
};