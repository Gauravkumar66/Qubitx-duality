import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Objectives from '../components/home/Objectives';

const HomePage: React.FC = () => {
  return (
    <Layout currentPath="/">
      <Hero />
      <Features />
      <Objectives />
    </Layout>
  );
};

export default HomePage;