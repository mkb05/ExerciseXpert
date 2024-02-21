export const exerciseOptions = {
  method: "GET",
  url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
  params: { muscle: "biceps" },
  headers: {
    "X-RapidAPI-Key": "02c0aa6dc2msh9b8cea7386f0bcbp1608b3jsnf3de211954a1",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
