import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RatingProps 
  extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement>
  {
    isEditable?: boolean;
    ratingCurrent: number;
    ratingMax?: number;
    setRating?: (rating: number) => void;
  }