import React from 'react'

export const apiUrlBuilder  = (using_point) => {
  return (
   `https://api.themoviedb.org/3${using_point}?api_key=5992fec4de8ddfb9864b94bdf9cfac0e`
  )
};

export const APIServices  = {
  
        getMoviesByType: (movieType) => {
            const url = apiUrlBuilder(`/movie/${movieType}`);
            return fetch(url).then((response) => response.json());
          },

          getMovieDetailById: (movieId) => {
            const url = apiUrlBuilder(`/movie/${movieId}`);
            return fetch(url).then((response) => response.json());
          },
        };
  