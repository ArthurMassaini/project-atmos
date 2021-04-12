import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ChartKw from '../components/ChartKw';
import ChartI from '../components/ChartI';
import ChartV from '../components/ChartV';

function Home() {
  return (
    <main className="main">
      <Header />
      <Nav />
      <section>
        <h1 className="title">Medidas referentes a semana: 20/02 - 26/02</h1>
        <h2 className="title">Total em KhW</h2>
        <ChartKw />
        <h2 className="title">Média das correntes</h2>
        <ChartI />
        <h2 className="title">Média da tensão</h2>
        <ChartV />
      </section>
    </main>
  );
}

export default Home;
