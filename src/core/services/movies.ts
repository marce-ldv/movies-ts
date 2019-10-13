import axios from 'axios';

export const getMovies = async () =>
  await axios.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=2166b67cc5c4190d9319bf46f9fd9b53');
