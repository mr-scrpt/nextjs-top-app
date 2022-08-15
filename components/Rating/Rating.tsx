import cn from 'classnames';
import { KeyboardEvent,  useEffect,  useState } from 'react';
import { IconStar } from '../Icons';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
export const Rating = ( { 
  isEditable = false,
  ratingCurrent,
  ratingMax = 5,
  setRating,
  className
 }: RatingProps ) : JSX.Element => {
  
  const [ ratingArray ] = useState<number[]>(Array.from({ length: ratingMax }, (v, i) => i) );
  const [ ratingActual, setRatingActual ] = useState<number>(ratingCurrent);
  useEffect(() => {
    setRatingActual(ratingCurrent);
  }, [ ratingCurrent ]);
  
  const ratingClass = cn( className, styles.rating, {
    [ styles.rating_is_editable ]: isEditable
  } );
  
  const isIconActive = (isActive: boolean): string => {
    return cn(styles.rating__icon, {
      [ styles.rating__icon_dafault ]: !isActive,
      [ styles.rating__icon_active ]: isActive,
      
    });
  };

  const setOuterRating = (rating: number):void => {
    if(isEditable && setRating){
      setRating(rating);
    }
  };

  const tabIndexEnable = (is: boolean): number => {
    return is ? 1 : -1;
  };

  const onHover = (rating: number): void => {
    if(isEditable){
      setRatingActual(rating);
    }
    
  };
  const onLeave = (rating: number): void => {
    setRatingActual(rating);
  };
  const onHandleSpace = (rating: number, e:KeyboardEvent<SVGAElement>): void =>{
    if(e.code == 'Space' && setRating){
      setRating(rating);
    }
  };
  
  return (
    <div className={ ratingClass }>
      <div className={ styles.rating__inner }>
       
        {ratingArray.map((v,  idx )=> (
          <span 
            className={ isIconActive( idx < ratingActual ) }
            key={ v }
            onMouseOver={ (): void=> { onHover(idx + 1);} }
            onMouseLeave={ (): void=> { onLeave(ratingCurrent);} }
            onClick={ (): void => { setOuterRating(idx + 1);} }
          >
            <IconStar
              className={ styles.rating__svg }
              tabIndex={ tabIndexEnable(isEditable) }
              onKeyDown={ (e: KeyboardEvent<SVGAElement>): void =>{ onHandleSpace(idx + 1, e); } }
          />
          </span>
          )
        )}
        
      </div>
    </div>
  );
};

/* const onHandleSpace = (idx: number, e:KeyboardEvent<SVGAElement>): void =>{
    if(e.code == 'Space' && setRatings){
      setRatings(idx);
    }
  }; */