import React from 'react'
import { Button } from '@mui/material';
const images = [
    {
        label: 'San Francisco Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        detail: 'googd movie ',
        yearRelease: '2018',
        Rating: '5/10'

    },
    // {
    //     label: 'Bird',
    //     imgPath:
    //         'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    //     detail: 'googd movie ',
    //     yearRelease: '2018',
    //     Rating: '5/10'
    // },
    // {
    //     label: 'Bali, Indonesia',
    //     imgPath:
    //         'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    //     detail: 'googd movie ',
    //     yearRelease: '2018',
    //     Rating: '5/10'
    // },
];

export const PopOutContainer = (props) => {
    const { movieDetail} = props;
    const {label,imgPath,detail,yearRelease,Rating} = movieDetail || {};

  return (
    <div style={{ display: "flex", color: 'white', margin: '1%',
     }}>
    <div style={{objectFit:'cover', width: "30%", margin: '1%', boxShadow: " 0px 5px 10px 0px rgba(0,0,230,0.5)", borderRadius:"2%" }} className="img">
        <img style={{borderRadius:'2%',objectFit:'contain', width:"100%", height:"100%"}} src={imgPath}  alt=''/></div>
    <div style={{ width: "70%", margin: '1%', backgroundColor: "black" }} className="detail">
        <div style={{margin:'2%'}}>
            <h2>Title:{label}</h2>
            <h3>Year:{yearRelease}</h3>
            <h4>Rating:{Rating}</h4>
            <h4>Info:{detail}</h4>
            <Button>Watch Later</Button>
            </div>
    </div>
</div>
  )
}

