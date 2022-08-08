import { SectionProps } from './Section.props';
import cx from 'classnames';
import styles from './Section.module.css';
export const Section = ({ children, className, name, ...props }: SectionProps):JSX.Element=>{
  const sectionClass = cx(styles.section, {}, className );
  return(
      <section
        className={ sectionClass }
        { ...props }
      >
          <div className={ styles.section__inner }>
              <div className={ styles.section__title }>{name}</div>
          </div>
          <div className={ styles.section__body }>
              {children}
          </div>
          
      </section>
  );
};