import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import * as API from '../services/api';

function ChartV() {
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
      let avgVA = [];
      let avgVB = [];
      let avgVC = [];

      for (let i = 0; i < 7; i += 1) {
        response = [...response, await API.fetchDataByDay(i)];
      }

      for (let i = 0; i < 7; i += 1) {
        avgVA = [...avgVA, avgValue(response[i], 'VA')];
        avgVB = [...avgVB, avgValue(response[i], 'VB')];
        avgVC = [...avgVC, avgValue(response[i], 'VC')];
      }

      setState({
        loading: false,
        avgVA,
        avgVB,
        avgVC,
      });
    };
    getData();
  }, []);

  if (getState.loading) return <></>;

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
              label: 'VA',
              data: [
                getState.avgVA[0],
                getState.avgVA[1],
                getState.avgVA[2],
                getState.avgVA[3],
                getState.avgVA[4],
                getState.avgVA[5],
                getState.avgVA[6],
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
              label: 'VB',
              data: [
                getState.avgVB[0],
                getState.avgVB[1],
                getState.avgVB[2],
                getState.avgVB[3],
                getState.avgVB[4],
                getState.avgVB[5],
                getState.avgVB[6],
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
              label: 'VC',
              data: [
                getState.avgVC[0],
                getState.avgVC[1],
                getState.avgVC[2],
                getState.avgVC[3],
                getState.avgVC[4],
                getState.avgVC[5],
                getState.avgVC[6],
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

export default ChartV;
