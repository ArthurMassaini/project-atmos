import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import * as API from '../services/api';

function Chart() {
  const [getState, setState] = useState({});

  const sumValue = (data, value) => {
    const total = data.reduce((acc, element) => {
      return acc + element[value];
    }, 0);
    return total / 1000;
  };

  const avgValue = (data, value) => {
    const total = data.reduce((acc, element) => {
      return acc + element[value];
    }, 0);
    return total / data.length;
  };

  useEffect(() => {
    const getData = async () => {
      const response = await API.fetchData();
      const avgIA = avgValue(response, 'IA');
      const totalKwhA = sumValue(response, 'kWhA');
      setState({
        avgIA,
        totalKwhA,
      });
    };
    getData();
  }, []);

  // if (loading) return <h1>LOADING...</h1>;

  return (
    <section>
      <Pie
        data={{
          labels: ['IA', 'kWhA'],
          datasets: [
            {
              label: '# of Votes',
              data: [getState.avgIA, getState.totalKwhA],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        width={30}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </section>
  );
}

export default Chart;
