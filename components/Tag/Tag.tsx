import styles from './Tag.module.css';
import { TagProps } from './Tag.props';
import cn from 'classnames';
export const Tag = ( { className, children, size='l', view='primary', href='', ...props }: TagProps ) : JSX.Element => {
  const tagClass = cn(styles.tag, {
    [ styles.tag_size_s ]: size === 's',
    [ styles.tag_size_m ]: size === 'm',
    [ styles.tag_size_l ]: size === 'l',
    [ styles.tag_size_xl ]: size === 'xl',

    [ styles.tag_view_primary ]: view === 'primary',
    [ styles.tag_view_secondary ]: view === 'secondary',
    [ styles.tag_view_transparent ]: view === 'transparent',
    [ styles.tag_view_success ]: view === 'success',
    [ styles.tag_view_attention ]: view === 'attention',
    [ styles.tag_view_error ]: view === 'error',
  }, className);
  
  const innerTag = (
    <span className={ styles.tag__inner }>
      <span className={ styles.tag__text }> { children } </span>
    </span>
  );

  const tag = (
    <div>
      {href 
        ? <div 
          
          className={ tagClass }
          { ...props }
        > 
          {innerTag} 
        </div> 
        : <a 
          href={ href }
          className={ tagClass }
          { ...props }
        > 
          {innerTag} 
        </a> }
    </div>
  );
  
  return tag;
  
};

{/* <div className={ tagClass }
{ ...props }> {innerTag} 
</div> */}