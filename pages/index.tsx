import axios, { AxiosResponse } from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import { Title } from '../components';

import { Rating } from '../components/Rating';
import { MenuItemSectionInterface } from '../interfaces/api/menu.interface';

import { HomePageInterface } from '../interfaces/pages/homePage.interface';
import { withLayoutMain } from '../layout/LayoutHOC/LayoutMainHOC';

const Home: NextPage<HomePageInterface> = ({ menu } : HomePageInterface) => {
  const [ rating, setRating ] = useState<number>(2);
  
  return (
    <>
      <Title tag='h1' >Курсы по Photoshop</Title>
      {rating}
      <Rating 
        setRating={ setRating }
        ratingCurrent={ rating }
        
        isEditable={ true }/>
      <ul>
        {menu.map(item => (
          <li key={ item._id.secondCategory }>{item._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}; 

export default withLayoutMain(Home);

export const getStaticProps: GetStaticProps<HomePageInterface> = async () => {
  
  const categoryFirst = 0;
  const { data: menu }: AxiosResponse<MenuItemSectionInterface[]> = await axios.post(`${ process.env.NEXT_PUBLIC_DOMAIN }/api/top-page/find`, {
    firstCategory: categoryFirst
  });
  return {
    props: {
      categoryFirst,
      menu
    }
  };
 };
