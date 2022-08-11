import { KitButtons } from '../KitButtons/KitButtons';

import styles from './KitWrapp.module.css';
import { KitWrapProps } from './KitWrapp.props';
import cn from 'classnames';
import { KitParagraph } from '../KitParagraph/KitParagrap';
export const KitWrapp = ({ className }:KitWrapProps): JSX.Element => {
	const kitWrappClass = cn(styles.kitWrapp, {}, className);
  return (
    <div className={ kitWrappClass }>
      <div className={ styles.kitWrapp__inner }>
        <div className={ styles.kitWrapp__title }>UI Kit</div>
        <div className={ styles.kitWrapp__body }>
							
          <KitButtons className={ styles.kitWrapp__section } />
          <KitParagraph className={ styles.kitWrapp__section } />
        </div>
      </div>
    </div>
  );
};
