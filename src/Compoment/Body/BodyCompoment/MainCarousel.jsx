import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState, useContext } from 'react';
import { OnfetchFunction } from '../../Hooks/OnfetchFunc/OnfetchFunction';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper() {

  const { data: popularMovies, loading: popularLoading} = OnfetchFunction("popular");

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps =popularMovies.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };





  // const hehe = {
  //   position: "absolute",
  //   top: "85%",
  //   left: "43%",
  //   background: "transparent",
  //   cursor: "pointer",
  // };

  return (
    <Box sx={{ position: 'relative', top: 0, height: "500" }}>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {popularMovies.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box 
              component="img"
                sx={{
                  height: 400,
                  display: 'flex',
                  overflow: 'hidden',
                  width: '60%',
                  justifyContent: 'center',
                  objectFit: 'contain',}}
                src={`https://image.tmdb.org/t/p/original${step.backdrop_path}`}
                alt={step.title}
               
               
                
                /> 
                // <div>
                // <h2>Title:{label}</h2>
                // <h3>Year:{yearRelease}</h3>
                // <h4>Rating:{Rating}</h4>
                // <h4>Info:{detail}</h4>
                // <Button>Watch Later</Button>
                // </div>
              
              //  <Box />
            ) : null}
          </div>
        ))}

      </AutoPlaySwipeableViews>


      {/* <MobileStepper
        style={hehe}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}

        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}

          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>}

        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}

    </Box>
  
  

  );
}

export default SwipeableTextMobileStepper;
