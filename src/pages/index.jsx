import React from 'react';

import Layout from '../components/Layout';
import CryptocurrencySection from '../components/sections/CryptocurrencySection';
import HeroSection from '../components/sections/HeroSection';
import BuyAndTradeSection from '../components/sections/BuyAndTradeSection';


export default function index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <BuyAndTradeSection />
      
    </Layout>
  );
}
