import type { NextPage } from 'next';
import { Title } from '../components';
import { Button } from '../components/Button/Button';

const Home: NextPage = () => {
  return (
      <div>
          <Title tag='h2'>Курсы по Photoshop</Title>

          <Button  mod='standat'
            size='l'
            tag='button'
            view='primary'
          >
              Моя Кнопка
          </Button>
      </div>
  );
}; 

export default Home;
