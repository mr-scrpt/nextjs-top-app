import type { NextPage } from 'next';
import { Title } from '../components';
import { Button } from '../components';

const Home: NextPage = () => {
  return (
      <div>
          <Title tag='h1'>Курсы по Photoshop</Title>

          <Button
            mode='standat'
            size='l'
            view='primary'
            arrow='to_bottom'
            iconPosition='right'
          >
              Моя Кнопка 
          </Button>

          <Button
            mode='standat'
            size='l'
            view='transparent'
            arrow='to_bottom'
            iconPosition='right'
          >
              Моя Кнопка
          </Button>

          <Button
            mode='width_available'
            size='l'
            view='primary'
            arrow='to_right'
            iconPosition='left'
          >
              Моя Кнопка
          </Button>

          <Button
            mode='width_available'
            size='l'
            view='transparent'
            arrow='to_right'
            iconPosition='left'
          >
              Моя Кнопка
          </Button>
      </div>
  );
}; 

export default Home;
