import { KitButtons } from '../KitButtons/KitButtons';

import styles from './KitWrapp.module.css';
import { KitWrapProps } from './KitWrapp.props';
import cn from 'classnames';
export const KitWrapp = ({ className }:KitWrapProps): JSX.Element => {
	const kitWrappClass = cn(styles.kitWrapp, {}, className);
  return (
    <div className={ kitWrappClass }>
      <div className={ styles.kitWrapp__inner }>
        <div className={ styles.kitWrapp__title }>UI Kit</div>
        <div className={ styles.kitWrapp__body }>
							
          <KitButtons className={ styles.kitWrapp__section } />
          {/*  <KitSection
            name="Кнопка"
            className={ styles.kit__section }
					>
            <KitBox name='Вид кнопок'>
              <KitRow name="Простая кнопка">
                <Button
                  view='primary'
                  size='l'
          >
                  Кнопка
                </Button>
              </KitRow>
            </KitBox>
          </KitSection> */}

        </div>
      </div>
    </div>
  );
};
