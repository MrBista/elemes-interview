import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Category from './components/category/Category';
import Trending from './components/trending/Trending';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <Trending />
      <Footer />
    </div>
  );
};

export default App;
