import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import * as API from '../services/api';

function ChartKw() {
  const [getState, setState] = useState({
    loading: true,
  });

  const sumValue = (data, value) => {
    const total = data.reduce((acc, element) => {
      return acc + element[value];
    }, 0);
    return (total / 1000).toFixed(4);
  };

  useEffect(() => {
    const getData = async () => {
      let response = [];
      let totalKwhA = [];
      let totalKwhB = [];
      let totalKwhC = [];
      let total = [];

      for (let i = 0; i < 7; i += 1) {
        response = [...response, await API.fetchDataByDay(i)];
      }

      for (let i = 0; i < 7; i += 1) {
        totalKwhA = [...totalKwhA, sumValue(response[i], 'kWhA')];
        totalKwhB = [...totalKwhB, sumValue(response[i], 'kWhB')];
        totalKwhC = [...totalKwhC, sumValue(response[i], 'kWhC')];
        total = [
          ...total,
          Number(totalKwhA[i]) + Number(totalKwhB[i]) + Number(totalKwhC[i]),
        ];
      }

      setState({
        loading: false,
        totalKwhA,
        totalKwhB,
        totalKwhC,
        total,
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
              label: 'KwhA',
              data: [
                getState.totalKwhA[0],
                getState.totalKwhA[1],
                getState.totalKwhA[2],
                getState.totalKwhA[3],
                getState.totalKwhA[4],
                getState.totalKwhA[5],
                getState.totalKwhA[6],
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
              label: 'KwhB',
              data: [
                getState.totalKwhB[0],
                getState.totalKwhB[1],
                getState.totalKwhB[2],
                getState.totalKwhB[3],
                getState.totalKwhB[4],
                getState.totalKwhB[5],
                getState.totalKwhB[6],
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
              label: 'KwhC',
              data: [
                getState.totalKwhC[0],
                getState.totalKwhC[1],
                getState.totalKwhC[2],
                getState.totalKwhC[3],
                getState.totalKwhC[4],
                getState.totalKwhC[5],
                getState.totalKwhC[6],
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
            {
              label: 'Soma',
              data: [
                getState.total[0],
                getState.total[1],
                getState.total[2],
                getState.total[3],
                getState.total[4],
                getState.total[5],
                getState.total[6],
              ],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'green',
                'green',
                'green',
                'green',
                'green',
                'green',
                'green',
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

export default ChartKw;
