import React, { useState, useEffect } from 'react'
import { APIServices } from '../../Servies/APIServieces'
import { apiUrlBuilder } from '../../Servies/APIServieces'
/**
 * Custom hook
 * @param {movieType} movieType
 * @desc movieType is one of "popular" | "upcoming" | "top_rated"
 */
export const OnfetchFunction = (movieType) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const OnFetchDataList = () => {
    const urlLink = `https://api.themoviedb.org/3/movie/${movieType}?api_key=5992fec4de8ddfb9864b94bdf9cfac0e`
    setLoading(true);
    fetch(urlLink)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
  };
  // console.log("chuanbi truyen", data)

  useEffect(() => {
    OnFetchDataList();
  }, []);

  return {
    data, loading};
  
};
