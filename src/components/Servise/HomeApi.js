import axios from 'axios';

const API_KEY = '740ce32c6ff3f348bd56b661f167be7e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const HomeApi = async () => {
  const data = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data.data;
};

export default HomeApi;