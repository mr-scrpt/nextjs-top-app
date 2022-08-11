import { Button } from '../../components';
import { IconArrow } from '../../components/Icons/Icons';
import { KitBox } from '../KitBox/KitBox';

import { KitRow } from '../KitRow/KitRow';
import { KitSection } from '../KitSection/KitSection';
import { KitButtonsProps } from './KitButtons.props';

export const KitButtons = ({ className }:KitButtonsProps):JSX.Element =>{
  
  return (
    <KitSection
      name="Кнопка"
      className={ className }
		> 
      
      <KitBox
        name='Button view'
      >
        <KitRow name='view: primary'>
          <Button
            view='primary'
            size='l'
          >
            Кнопка
          </Button>
        </KitRow>

        <KitRow name='view: transparent'>
          <Button
            view='transparent'
            size='l'
          >
            Кнопка
          </Button>
        </KitRow>
         
      </KitBox>
      <KitBox
        name='Button size'
           
          >
        <KitRow name='size: s'>
          <Button
            view='primary'
            size='s'
                  >
            Кнопка S
          </Button>
        </KitRow>
        <KitRow name='size: m'>
          <Button
            view='primary'
            size='m'
                  >
            Кнопка M
          </Button>
        </KitRow>
        <KitRow name='size: l'>
          <Button
            view='primary'
            size='l'
                  > 
            Кнопка L
          </Button>
        </KitRow>
        <KitRow name='size: xl'>
          <Button
            view='primary'
            size='xl'
                  >
            Кнопка XL
          </Button>
        </KitRow>

      </KitBox>

      <KitBox
        name='Button icon position'
      >
        
        <KitRow name='iconPosition: right'>
          <Button
            view='primary'
            size='l'
            includeIcon={ <IconArrow /> }
            iconPosition='right'
          > 
            Кнопка с иконкой справа
          </Button>
        </KitRow>
        <KitRow name='iconPosition: left'>
          <Button
            view='primary'
            size='l'
            includeIcon={ <IconArrow /> }
            iconPosition='left'
          > 
            Кнопка с иконкой слева
          </Button>
        </KitRow>

      </KitBox>

      <KitBox
        name='Button with rotation'
      >
        
        <KitRow name='iconRotate: 90'>
          <Button
            view='primary'
            size='l'
            includeIcon={ <IconArrow /> }
            iconRotate='90'
          > 
            Иконка на 90 градусов
          </Button>
        </KitRow>
        <KitRow name='iconRotate: 180'>
          <Button
            view='primary'
            size='l'
            includeIcon={ <IconArrow /> }
            iconRotate='180'
          > 
            Иконка на 180 градусов
          </Button>
        </KitRow>
        <KitRow name='iconRotate: 270'>
          <Button
            view='primary'
            size='l'
            includeIcon={ <IconArrow /> }
            iconRotate='270'
          > 
            Иконка на 270 градусов
          </Button>
        </KitRow>

      </KitBox>

      <KitBox
        name='Button only icon'
      >
        
        <KitRow name='without children'>
          <Button
            view='primary'
            size='l'
            includeIcon={ <IconArrow /> }
            iconPosition='right'
          > 
            
          </Button>
        </KitRow>

      </KitBox>

    </KitSection>
    
  );
};