import axios from "axios";

export const exerciseOptions = {
  method: "GET",
  url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
  params: { muscle: "biceps" },
  headers: {
    "X-RapidAPI-Key": "02c0aa6dc2msh9b8cea7386f0bcbp1608b3jsnf3de211954a1",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchData() {
  try {
    const response = await axios.request(exerciseOptions);
    const data = response.data;
    console.log(data); // Log the data
    return data; // Return the data if needed
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error if needed
  }
}
