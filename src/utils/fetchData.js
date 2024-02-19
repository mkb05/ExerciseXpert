export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "02c0aa6dc2msh9b8cea7386f0bcbp1608b3jsnf3de211954a1",
    "X-RapidAPI-Host": "work-out-api1.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
