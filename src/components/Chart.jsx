import React, { useEffect, useState } from 'react';
import * as API from '../services/api';

function Chart() {
  const [getData, setData] = useState([]);

  useEffect(() => {
    const getFetch = async () => {
      const response = await API.fetchData();
      setData(response);
    };
    getFetch();
  }, []);

  return <section>Chart</section>;
}

export default Chart;
