import SwipeableTextMobileStepper from './BodyCompoment/MainCarousel'
import { OnfetchFunction } from '../Hooks/OnfetchFunc/OnfetchFunction'
import { useState, React, useContext } from 'react';
import MovieSlider from './BodyCompoment/MovieSlider'


const Body = () => {
const { data: popularMovies, loading: popularLoading} = OnfetchFunction("popular");
const { data: nowPlayingMovies, loading: nowPlayingLoading} = OnfetchFunction("now_playing");
const { data: topRatedMovies, loading: topRatedLoading} = OnfetchFunction("top_rated");
const { data: UpComingMovies, loading: UpComingLoading} = OnfetchFunction("upcoming");


return (
    <>
      <div style={{  boxShadow: "rgba(0, 0, 255 ) 0px 1px 50px -10px"}}><SwipeableTextMobileStepper /></div>
     
      <div style={{margin:"1%", marginTop:'3%'}} >  
      <div style={{margin:"1%"}}> 
      <MovieSlider 
       movies={popularMovies} 
       movieCategoryTitle="POPULAR "
       /></div>

<div style={{margin:"1%"}}> 
      <MovieSlider 
       movies={nowPlayingMovies} 
       movieCategoryTitle="Now playing "
       /></div>

<div style={{margin:"1%"}}> 
      <MovieSlider 
       movies={topRatedMovies} 
       movieCategoryTitle="Top Rated"
       /></div>

<div style={{margin:"1%"}}> 
      <MovieSlider 
       movies={UpComingMovies} 
       movieCategoryTitle="Upcoming "
       /></div>
          
          </div>

   </>
  )
}

export default Body