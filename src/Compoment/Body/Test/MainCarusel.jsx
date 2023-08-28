import React from 'react'
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { useState, useContext } from 'react';
import { MoviesListContext } from '../Ulilty/MoviesList';
import { CarouselItem } from '../Container/CarouselItem';

    
const MainCarusel = () => {
    const {popularList} =useContext(MoviesListContext)


    return (
    <div> {popularList.map((i) =>  (
        <CarouselItem data={i}/>
        ))}</div>
  )
}

export default MainCarusel