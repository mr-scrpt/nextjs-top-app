import type { NextPage } from 'next';
import { useState } from 'react';
import { Title } from '../components';

import { Rating } from '../components/Rating';

const Home: NextPage = () => {
  const [ rating, setRating ] = useState<number>(2);
  
  return (
    <>
      <Title tag='h1' >Курсы по Photoshop</Title>
      {rating}
      <Rating 
        setRating={ setRating }
        ratingCurrent={ rating }
        
        isEditable={ true }/>
    </>
      
  );
}; 

export default Home;
