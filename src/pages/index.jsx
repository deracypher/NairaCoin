import React from 'react';

import Layout from '../components/Layout';
import CryptocurrencySection from '../components/sections/CryptocurrencySection';
import HeroSection from '../components/sections/HeroSection';
import BuyAndTradeSection from '../components/sections/BuyAndTradeSection';
import PartnerSection from '../components/sections/PartnerSection';
import CreditCardSection from '../components/sections/CreditCardSection';


export default function index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <BuyAndTradeSection />
      <PartnerSection />
      <CreditCardSection />
    </Layout>
  );
}
