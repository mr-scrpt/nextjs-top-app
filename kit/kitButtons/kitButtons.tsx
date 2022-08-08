import { Button } from '../../components';
import { KitBox } from '../kitBox/kitBox';
import { KitRow } from '../kitRow/kitRow';

export const KitButtons = ():JSX.Element =>{
  return (
      <KitBox name='Button view'>
          <KitRow name='view_primary'>
              <Button
                view='primary'
                size='l'
          >
                  Кнопка
              </Button>
          </KitRow>

          <KitRow name='view_transparent'>
              <Button
                view='transparent'
                size='l'
          >
                  Кнопка
              </Button>
          </KitRow>
         
      </KitBox>
  );
};