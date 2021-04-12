import React from 'react';
import ChartKw from '../components/ChartKw';
import ChartI from '../components/ChartI';

function Home() {
  return (
    <main className="main">
      <h1 className="title">Medidas referentes a semana: 20/02 - 26/02</h1>
      <ChartKw />
      <ChartI />
    </main>
  );
}

export default Home;
