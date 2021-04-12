import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import * as API from '../services/api';

function ChartI() {
  const [getState, setState] = useState({
    loading: true,
  });

  const avgValue = (data, value) => {
    const total = data.reduce((acc, element) => {
      return acc + element[value];
    }, 0);
    return (total / data.length).toFixed(4);
  };

  useEffect(() => {
    const getData = async () => {
      let response = [];
      let avgIA = [];
      let avgIB = [];
      let avgIC = [];

      for (let i = 0; i < 7; i += 1) {
        response = [...response, await API.fetchDataByDay(i)];
      }

      for (let i = 0; i < 7; i += 1) {
        avgIA = [...avgIA, avgValue(response[i], 'IA')];
        avgIB = [...avgIB, avgValue(response[i], 'IB')];
        avgIC = [...avgIC, avgValue(response[i], 'IC')];
      }

      setState({
        loading: false,
        avgIA,
        avgIB,
        avgIC,
      });
    };
    getData();
  }, []);

  if (getState.loading) return <div className="loader">LOADING...</div>;

  return (
    <section className="section">
      <Bar
        data={{
          labels: [
            'Domingo',
            'Segunda',
            'Terça',
            'Quarta',
            'Quinta',
            'Sexta',
            'Sábado',
          ],
          datasets: [
            {
              label: 'IA',
              data: [
                getState.avgIA[0],
                getState.avgIA[1],
                getState.avgIA[2],
                getState.avgIA[3],
                getState.avgIA[4],
                getState.avgIA[5],
                getState.avgIA[6],
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: ['red', 'red', 'red', 'red', 'red', 'red', 'red'],
              borderWidth: 1,
            },
            {
              label: 'IB',
              data: [
                getState.avgIB[0],
                getState.avgIB[1],
                getState.avgIB[2],
                getState.avgIB[3],
                getState.avgIB[4],
                getState.avgIB[5],
                getState.avgIB[6],
              ],

              backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                'blue',
                'blue',
                'blue',
                'blue',
                'blue',
                'blue',
                'blue',
              ],
              borderWidth: 1,
            },
            {
              label: 'IC',
              data: [
                getState.avgIC[0],
                getState.avgIC[1],
                getState.avgIC[2],
                getState.avgIC[3],
                getState.avgIC[4],
                getState.avgIC[5],
                getState.avgIC[6],
              ],
              backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'orange',
                'orange',
                'orange',
                'orange',
                'orange',
                'orange',
                'orange',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: { beginAtZero: true },
                font: {
                  family: 'Times',
                  size: 20,
                  style: 'normal',
                  lineHeight: 1.2,
                },
                padding: { top: 30, left: 0, right: 0, bottom: 0 },
              },
            ],
            xAxes: [
              {
                ticks: { beginAtZero: true },
              },
            ],
          },
        }}
      />
    </section>
  );
}

export default ChartI;
