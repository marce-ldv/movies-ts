import axios from 'axios';

export const getMovies = async <T>() =>
  await axios.get<T>(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
