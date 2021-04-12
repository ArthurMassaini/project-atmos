import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import Nav from '../components/Nav';
import ChartKw from '../components/ChartKw';
import ChartI from '../components/ChartI';
import ChartV from '../components/ChartV';
import ChartFp from '../components/ChartFp';

function Home() {
  const { active } = useSelector((state) => state.toggle);

  return (
    <main className="main">
      <Header />
      {active && <Nav />}
      <section>
        <h1 className="title">Medidas referentes a semana: 20/02 - 26/02</h1>
        <h2 className="title">Total em KhW</h2>
        <ChartKw />
        <h2 className="title">Média das correntes</h2>
        <ChartI />
        <h2 className="title">Média da tensão</h2>
        <ChartV />
        <h2 className="title">Média do fator de potência (% de eficiência)</h2>
        <ChartFp />
      </section>
    </main>
  );
}

export default Home;
