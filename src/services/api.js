export const fetchData = () => {
  const endpoint =
    'https://desafio-frontend.s3-sa-east-1.amazonaws.com/valores.json';

  return fetch(endpoint).then((result) => result);
};
