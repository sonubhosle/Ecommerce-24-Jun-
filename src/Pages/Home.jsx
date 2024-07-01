import React, { useState } from 'react';
import Home_Products from '../Components/Products/Home_Products';
import { all_products } from '../Components/Data/All_Products';
import Banner from '../Components/Carousel/Banner';
import Slider from '../Components/Sliders/Product_Slider';
import { lengha_choli } from '../Components/Data/Lengha_Choli';
import { mens_jeans } from '../Components/Data/Men_Jeans';
import { mens_shirts } from '../Components/Data/Men_Shirt';
import { mens_kurta } from '../Components/Data/Mens_Kurta';
import { women_dress } from '../Components/Data/Women_Dress';
import { women_jeans } from '../Components/Data/Women_Jeans';
import Search from '../Components/Search/Search';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const sliced_products = all_products.slice(0, 20);

  return (
    <div className='home_section'>
      <Banner />
      <Search setSearchTerm={setSearchTerm} />
      <Home_Products searchTerm={searchTerm} products={sliced_products} heading={'All Products'} />
      <Slider products={mens_jeans} heading={"Men's Jeans"} />
      <Slider products={mens_shirts} heading={"Men's Shirts"} />
      <Slider products={mens_kurta} heading={"Men's Kurta"} />
      <Banner />
      <Slider products={women_dress} heading={"Women Dress"} />
      <Slider products={women_jeans} heading={"Women Jeans"} />
    </div>
  );
};

export default Home;
