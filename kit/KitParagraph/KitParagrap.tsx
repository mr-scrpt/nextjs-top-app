import { Paragraph } from '../../components/Paragraph/Paragraph';
import { KitBox } from '../KitBox/KitBox';
import { KitRow } from '../KitRow/KitRow';
import { KitSection } from '../KitSection/KitSection';
import { KitParagraphProps } from './KitParagraph.props';

export const KitParagraph = ({ className }: KitParagraphProps): JSX.Element => {

  return(
    <KitSection
      name="Параграфы"
      className={ className }
  > 
    
      <KitBox
        name='Paragraph view'
      >
        <KitRow name='size: s'>
          <Paragraph size='s'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere harum sed explicabo! Explicabo iure blanditiis culpa eos optio officiis iste aperiam, non beatae modi maxime porro obcaecati ipsam a impedit?</Paragraph>
        </KitRow>
        <KitRow name='size: m'>
          <Paragraph size='m'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere harum sed explicabo! Explicabo iure blanditiis culpa eos optio officiis iste aperiam, non beatae modi maxime porro obcaecati ipsam a impedit?</Paragraph>
        </KitRow>
        <KitRow name='size: l'>
          <Paragraph size='l'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere harum sed explicabo! Explicabo iure blanditiis culpa eos optio officiis iste aperiam, non beatae modi maxime porro obcaecati ipsam a impedit?</Paragraph>
        </KitRow>
        <KitRow name='size: xl'>
          <Paragraph size='xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere harum sed explicabo! Explicabo iure blanditiis culpa eos optio officiis iste aperiam, non beatae modi maxime porro obcaecati ipsam a impedit?</Paragraph>
        </KitRow>
      </KitBox>

      <KitBox
        name='Paragraph style'
      >
        <KitRow name='style: italic'>
          <Paragraph view='i'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere harum sed explicabo! Explicabo iure blanditiis culpa eos optio officiis iste aperiam, non beatae modi maxime porro obcaecati ipsam a impedit?</Paragraph>
        </KitRow>
        
      </KitBox>

      <KitBox
        name='Paragraph weight'
      >
        <KitRow name='weight: 300'>
          <Paragraph weight='300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere harum sed explicabo! Explicabo iure blanditiis culpa eos optio officiis iste aperiam, non beatae modi maxime porro obcaecati ipsam a impedit?</Paragraph>
        </KitRow>
        <KitRow name='weight: 400'>
          <Paragraph weight='400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere harum sed explicabo! Explicabo iure blanditiis culpa eos optio officiis iste aperiam, non beatae modi maxime porro obcaecati ipsam a impedit?</Paragraph>
        </KitRow>

        <KitRow name='weight: 500'>
          <Paragraph weight='500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere harum sed explicabo! Explicabo iure blanditiis culpa eos optio officiis iste aperiam, non beatae modi maxime porro obcaecati ipsam a impedit?</Paragraph>
        </KitRow>

        <KitRow name='weight: 600'>
          <Paragraph weight='600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere harum sed explicabo! Explicabo iure blanditiis culpa eos optio officiis iste aperiam, non beatae modi maxime porro obcaecati ipsam a impedit?</Paragraph>
        </KitRow>

        <KitRow name='weight: 600'>
          <Paragraph weight='700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere harum sed explicabo! Explicabo iure blanditiis culpa eos optio officiis iste aperiam, non beatae modi maxime porro obcaecati ipsam a impedit?</Paragraph>
        </KitRow>
        
      </KitBox>
    </KitSection>
  );
};