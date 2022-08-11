import { TitleProps } from './Title.props';
import styles from './Title.module.css';
import cn from 'classnames';
export const Title = ({ tag, children, className, ...props }:TitleProps): JSX.Element => {
  
  const titleClass = cn(styles.title, className, {
    [ styles.title_main ]: tag ==='h1',
    [ styles.title_middle ]: tag ==='h2',
    [ styles.title_sub ]: tag ==='h3',
  });
  let title: JSX.Element;
  switch (tag) {

    case 'h1':
      title = (
        <h1 
          className={ titleClass }
          { ...props }
            >
          <span className={ styles.title__text }>
            {children}
          </span>
        </h1>
      );
      break;

    case 'h2':
        title = (
          <h2 
            className={ titleClass }
            { ...props }
            >
            <span className={ styles.title__text }>
              {children}
            </span>
          </h2>
        );
      
      break;

    case 'h3':
      title = (
        <h3 
          className={ titleClass }
          { ...props }
          >
          <span className={ styles.title__text }>
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