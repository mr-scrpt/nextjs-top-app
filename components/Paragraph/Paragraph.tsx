import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';
import styles from './Paragraph.module.css';
export const Paragraph = ({ 
  size='l',
  children, 
  className, 
  view='normal', 
  weight='500',
  ...props
}: ParagraphProps) :JSX.Element => {
  const paragraphClass = cn(styles.paragraph, {
    [ styles.paragraph_size_s ]: size === 's',
    [ styles.paragraph_size_m ]: size === 'm',
    [ styles.paragraph_size_l ]: size === 'l',
    [ styles.paragraph_size_xl ]: size === 'xl',

    [ styles.paragraph_view_i ]: view === 'i',
    [ styles.paragraph_view_b_300 ]: weight === '300',
    [ styles.paragraph_view_b_500 ]: weight === '500',
    [ styles.paragraph_view_b_600 ]: weight === '600',
    [ styles.paragraph_view_b_700 ]: weight === '700',
  }, className);

  const paragraph = (
    <p
      className={ paragraphClass }
      { ...props }
    >
      {children}
    </p>
  );
  
  return paragraph;
};