import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '56416a2595msh6a8fc4b0788dc4ap1ff178jsn4fecf73895fa',
    },
  });
    
  return data;
}
