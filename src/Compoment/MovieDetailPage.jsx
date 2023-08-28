import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Params, useParams, useNavigate } from 'react-router-dom'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
const MovieDetailPage = () => {
  const [movieDetails, setMovieDetails] = useState({})
  const params = useParams()
  const navigate = useNavigate();

  const OnFetchmovieDetails = (movieId) => {
    const urlLink = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=5992fec4de8ddfb9864b94bdf9cfac0e`;
    fetch(urlLink)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);

      })
  };

  useEffect(() => { OnFetchmovieDetails() }, [])
  const OnhandlerWatchMovie = () => {
    const logined = false;
    if (logined) { navigate("/") } else { navigate("/login") };
  };

  const { overview, genres, release_date, vote_count, vote_average, poster_path, original_title, imdb_id, original_language, name, production_countries, backdrop_path } = movieDetails;

  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (<>
    <div className="body" style={{ width: '100%', }}>

      {/* <div className="background"
        style={{
          width: '100%',
          height: '700px',
          backgroundImage: ` url('https://image.tmdb.org/t/p/original${backdrop_path}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
  
        }}>
      </div> */}


      <div style={{

        width: '100%',
        // height: '700px',
        backgroundImage: ` url('https://image.tmdb.org/t/p/original${backdrop_path}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'

        // filter: 'blur(8px)',
      }}>
        <div className="detail" style={{ paddingTop:'300px',color: 'white ', display: 'flex', justifyContent: 'space-between', }}>

          <div className="left" style={{ width: '20%', marginLeft: '5%', }} >
            <div>
              <img style={{ objectFit: 'cover', borderRadius: "15px", width: "95%", }}
                src={imgUrl} alt={imdb_id} /></div>
            <div style={{ marginLeft: '50%', width: '30%' }}>
              <h4>{vote_average} <span style={{ color: 'GrayText' }}>  rattings</span></h4>
              <h4>{vote_count} <span style={{ color: 'GrayText' }}> reviews</span></h4>

            </div>

          </div>


          <div className="middle" style={{ width: '40%', color: 'white' }}>
            <h1 style={{ color: 'white' }}>{original_title}</h1>
            {/* <h3 style={{ color:'GrayText'}}>Original Title: {original_title}</h3>  */}
            <h3 style={{ color: 'GrayText' }}>Release Date: {release_date}</h3>
            <div className='buttongroup'>
              <Button style={{ borderRadius: '20px', width: '200px', height: '50px', padding: '0', marginLeft: '2%' }} variant="outlined" onClick={OnhandlerWatchMovie} >WATCH TRAILER <PlayArrowOutlinedIcon /></Button>
              <Button style={{ borderRadius: '50%', width: '50px', height: '50px', padding: '0', marginLeft: '2%' }} variant="outlined"><BookmarkBorderOutlinedIcon /></Button>
              <Button style={{ borderRadius: '50%', width: '50px', height: '50px', padding: '0', marginLeft: '2%' }} variant="outlined"><ShareOutlinedIcon /></Button>
            </div>
            <h4 style={{ color: 'GrayText' }}>{overview}</h4>

            <div className="detail" style={{ marginTop: '5%', fontSize: '14px' }}>
              <h2>Details</h2>
              <div >
                <table>
                  <tr> <th scope="row" >Genres</th> <td style={{ color: 'grey', paddingLeft: '10px' }}>the loai</td> </tr>
                  <tr> <th scope="row">Country of Origin</th> <td style={{ color: 'grey', paddingLeft: '10px' }}> cai gi do</td> </tr>
                  <tr> <th scope="row">Run Time</th> <td style={{ color: 'grey', paddingLeft: '10px' }}> somthing</td></tr>
                </table></div>
            </div>
          </div>




          <div className="right" style={{ width: '30%', }}>

            <h2>CAST</h2>
            <div >
              <table>
                <tr> <th scope="row" >Genres</th> <td style={{ color: 'grey', }}>the loai</td> </tr>
                <tr> <th scope="row">Country of Origin</th> <td style={{ color: 'grey', }}> cai gi do</td> </tr>
                <tr> <th scope="row">Run Time</th> <td style={{ color: 'grey', }}> somthing</td></tr>
              </table>
            </div>
          </div>
        </div>
      </div>




    </div>


  </>)
}

export default MovieDetailPage