import type { NextPage } from 'next';
import { KitButtons } from '../kit/kitButtons/kitButtons';
import { Section } from '../kit/section/Section';

const Kit: NextPage = () => {

  return (
      <Section name='Кнопки'>
          <KitButtons />
      </Section>
  );
};

export default Kit;