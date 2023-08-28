import { Button } from '@mui/material';
import { React, useContext } from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CardContainer } from './CardContainer';

const MovieSlider = (props) => {
    const { movies = [], movieCategoryTitle, loading } = props;
  const onHandleInfoPopOut = () => {

  }
  return (
    <>
      <div className="button"  style={{ display: "flex", justifyContent: "space-between",
       boxShadow: " 3px 4px 8px 0px rgba(0,200,255,0.7)", borderRadius:"15px" }}>
        <div className="left">
          <Button variant="outlined" style={{borderRadius:"15px" }}  >{movieCategoryTitle}</Button>
          <Button > See all<NavigateNextIcon /></Button>
        </div>

        <div className="right">
          <Button>  <ArrowBackIosNewIcon /></Button>
          <Button><ArrowForwardIosOutlinedIcon /></Button></div>
      </div>

      <div className="carousel" style={{ marginTop: "-1%" }}>
        <ul style={{ display: "flex" }}>
          {movies.map((i, index) => (
            <li onClick={onHandleInfoPopOut}> <CardContainer movieDetail={i} /> </li>
          ))}
           </ul>
      </div>


    </>
  )
}

export default MovieSlider