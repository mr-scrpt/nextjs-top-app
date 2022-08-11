import { Tag } from '../../components/Tag';
import { KitBox } from '../KitBox/KitBox';

import { KitRow } from '../KitRow/KitRow';
import { KitSection } from '../KitSection/KitSection';
import { KitTagProps } from './KitTag.props';

export const KitTag = ({ className } : KitTagProps):JSX.Element =>{
  
  return (
    <KitSection
      name="Tags"
      className={ className }
		> 
      
      <KitBox
        name='Tags view'
      >
        <KitRow name='view: primary'>
          <Tag>Основной</Tag>
        </KitRow>

        <KitRow name='view: secondary'>
          <Tag view='secondary'>Вторичный</Tag>
        </KitRow>

        <KitRow name='view: transparent'>
          <Tag view='transparent'>Прозрачный</Tag>
        </KitRow>

        <KitRow name='view: success'>
          <Tag view='success'>Успешный</Tag>
        </KitRow>
        <KitRow name='view: attention'>
          <Tag view='attention'>Успешный</Tag>
        </KitRow>
        <KitRow name='view: error'>
          <Tag view='error'>Ошибка</Tag>
        </KitRow>
         
      </KitBox>

      <KitBox
        name='Tags size'
      >
        <KitRow name='size: s'>
          <Tag size='s'>Размер S</Tag>
        </KitRow>

        <KitRow name='size: m'>
          <Tag size='m'>Размер M</Tag>
        </KitRow>

        <KitRow name='size: l'>
          <Tag size='l'>Размер L</Tag>
        </KitRow>

        <KitRow name='size: xl'>
          <Tag size='xl'>Размер XL</Tag>
        </KitRow>
         
      </KitBox>

    </KitSection>
    
  );
};