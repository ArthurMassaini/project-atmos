import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import * as API from '../services/api';

function ChartFp() {
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
      let avgPFA = [];
      let avgPFB = [];
      let avgPFC = [];

      for (let i = 0; i < 7; i += 1) {
        response = [...response, await API.fetchDataByDay(i)];
      }

      for (let i = 0; i < 7; i += 1) {
        avgPFA = [...avgPFA, avgValue(response[i], 'PFA')];
        avgPFB = [...avgPFB, avgValue(response[i], 'PFB')];
        avgPFC = [...avgPFC, avgValue(response[i], 'PFC')];
      }

      setState({
        loading: false,
        avgPFA,
        avgPFB,
        avgPFC,
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
              label: 'PFA',
              data: [
                getState.avgPFA[0],
                getState.avgPFA[1],
                getState.avgPFA[2],
                getState.avgPFA[3],
                getState.avgPFA[4],
                getState.avgPFA[5],
                getState.avgPFA[6],
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
              label: 'PFB',
              data: [
                getState.avgPFB[0],
                getState.avgPFB[1],
                getState.avgPFB[2],
                getState.avgPFB[3],
                getState.avgPFB[4],
                getState.avgPFB[5],
                getState.avgPFB[6],
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
              label: 'PFC',
              data: [
                getState.avgPFC[0],
                getState.avgPFC[1],
                getState.avgPFC[2],
                getState.avgPFC[3],
                getState.avgPFC[4],
                getState.avgPFC[5],
                getState.avgPFC[6],
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

export default ChartFp;
