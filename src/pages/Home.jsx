import React from 'react';
import Header from '../components/Header';
import ChartKw from '../components/ChartKw';
import ChartI from '../components/ChartI';
import ChartV from '../components/ChartV';

function Home() {
  return (
    <main className="main">
      <Header />
      <nav className="nav">
        <h4>kWh</h4>
        <h4>Corrente</h4>
        <h4>Tensão</h4>
      </nav>
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
