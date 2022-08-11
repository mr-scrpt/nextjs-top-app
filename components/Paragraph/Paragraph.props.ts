import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement>
  {
    size?: 's' | 'm' | 'l' | 'xl',
    view?: 'i' | 'normal',
    weight?: '300' | '400' | '500' | '600' | '700'
} 