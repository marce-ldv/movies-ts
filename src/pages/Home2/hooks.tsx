import { useState, useEffect } from 'react';
import axios from 'axios';

interface Results {
  popularity?: number;
}

export const useGetMovies: any = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const response = await axios.get<Results & any>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=2166b67cc5c4190d9319bf46f9fd9b53',
    );
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return movies;
};
