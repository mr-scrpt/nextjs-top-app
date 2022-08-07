import { TitleProps } from './Title.props';
import styles from './Title.module.css';

export const Title = ({tag, children}:TitleProps): JSX.Element => {
  let title: JSX.Element;
  switch (tag) {

    case 'h1':
      title = (
        <h1 className={styles.title}>
          <span className={styles.title__main}>
            {children}
          </span>
        </h1>
      );
      break;

    case 'h2':
        title = (
          <h2 className={styles.title}>
            <span className={styles.title__middle}>
              {children}
            </span>
          </h2>
        );
      
      break;

    case 'h3':
      title = (
        <h3 className={styles.title}>
          <span className={styles.title__sub}>
            {children}
          </span>
        </h3>
      );
      break;

    default:
      title = <h1>Передан не правильный тег</h1>; 
  }

  
  return title;
  
};